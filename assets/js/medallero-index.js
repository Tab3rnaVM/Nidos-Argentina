(function(){
  // --- Firebase init (no duplica si ya existe) ---
  const firebaseConfig = {
    apiKey: "AIzaSyBpqarYah2XVHmkk2tLGrUhLNVmP20x6kM",
    authDomain: "shinychecknidosarg.firebaseapp.com",
    projectId: "shinychecknidosarg",
    storageBucket: "shinychecknidosarg.appspot.com",
    messagingSenderId: "563681136537",
    appId: "1:563681136537:web:14562744c07efccdac4d08",
    measurementId: "G-JW2E3B1C7D",
  };
  try{
    if (typeof firebase !== "undefined" && firebase?.apps?.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }catch(e){ /* si no hay firebase en index, ignorar */ }

  if (typeof firebase === "undefined") {
    console.warn("[MedalleroCTA] Firebase no está disponible en este index.");
    return;
  }

  const db = firebase.firestore();

  // --- Dom refs ---
  const wrap   = document.getElementById("medalleroCTA");
  if (!wrap) return;
  const imgEl  = document.getElementById("ctaBadgeImg");
  const title  = document.getElementById("ctaTitle");
  const sub    = document.getElementById("ctaSub");
  const state  = document.getElementById("ctaState");
  const cdown  = document.getElementById("ctaCountdown");
  const btn    = document.getElementById("ctaButton");

  // Helper para asset path en index
  function assetPath(p=""){
    p = String(p||"").trim();
    if (!p) return "";
    if (p.startsWith("http")) return p;
    if (p.startsWith("/")) return p;
    return "/" + p.replace(/^(\.\/)+/, "").replace(/^\/+/, "");
  }

  function fmtCountdown(ms){
    const s = Math.max(0, Math.floor(ms/1000));
    const d = Math.floor(s/86400);
    const h = Math.floor((s%86400)/3600);
    const m = Math.floor((s%3600)/60);
    const sec = s%60;
    // En desktop mostramos con segundos; en móvil podemos omitir
    return `${d}d ${h}h ${m}m`;
  }

  let tick = null;

  function setData({titleText, subText, imgUrl, startAt, endAt}){
    title.textContent = titleText || "Próximo evento";
    sub.textContent   = "Haz check-in durante el horario del evento para ganar está medalla";
    if (imgUrl) imgEl.src = imgUrl;

    function paint(){
      const now = Date.now();
      if (startAt && now < startAt) {
        state.textContent = "Comienza en";
        cdown.textContent = fmtCountdown(startAt - now);
        btn.querySelector("span").textContent = "Participar";
      } else if (endAt && now <= endAt) {
        state.textContent = "¡Activo!";
        cdown.textContent = fmtCountdown(endAt - now);
        btn.querySelector("span").textContent = "Participar";
      } else {
        state.textContent = "Finalizado";
        cdown.textContent = "—";
        btn.querySelector("span").textContent = "Ver medallero";
      }
    }
    clearInterval(tick);
    paint();
    tick = setInterval(paint, 1000);

    wrap.classList.remove("is-loading");
  }

  function setEmpty(){
    setData({
      titleText: "No hay eventos próximos",
      subText: "Muy pronto anunciaremos nuevas medallas.",
      imgUrl: assetPath("assets/images/badges/medallas.webp"),
      startAt: null, endAt: null
    });
  }

  async function getBadge(badgeId){
    if (!badgeId) return null;
    try{
      const doc = await db.collection("badges").doc(badgeId).get();
      return doc.exists ? { id: doc.id, ...doc.data() } : null;
    }catch(e){ console.error(e); return null; }
  }

  // Traer algunos próximos y quedarnos con el primero activo o futuro
  async function fetchNext(){
  try{
    const nowTs = firebase.firestore.Timestamp.fromMillis(Date.now());

    // Solo eventos no terminados
    const qs = await db.collection("eventos")
      .where("endAt", ">", nowTs)
      .orderBy("endAt", "asc")
      .limit(10)
      .get();

    const items = [];

    for (const doc of qs.docs) {
      const ev = doc.data();

      const startMs = ev.startAt?.toMillis ? ev.startAt.toMillis()
                    : ev.startAt?.toDate ? +ev.startAt.toDate()
                    : ev.startAt ? +new Date(ev.startAt) : null;

      const endMs   = ev.endAt?.toMillis ? ev.endAt.toMillis()
                    : ev.endAt?.toDate ? +ev.endAt.toDate()
                    : ev.endAt ? +new Date(ev.endAt) : null;

      if (startMs == null || endMs == null) {
        console.warn("[MedalleroCTA] Evento con fechas inválidas:", doc.id, ev.startAt, ev.endAt);
        continue;
      }

      items.push({ id: doc.id, startMs, endMs, badgeId: ev.badgeId, geofence: ev.geofence });
    }

    if (!items.length) { setEmpty(); return; }

    const next = items.sort((a,b)=>a.startMs-b.startMs)[0];
    const badge = await getBadge(next.badgeId);

    const lat = next.geofence?.center?.latitude ?? next.geofence?.center?._lat ?? null;
    const lng = next.geofence?.center?.longitude ?? next.geofence?.center?._long ?? null;

    setData({
      titleText: badge?.title || "Próximo evento",
      subText: (lat!=null && lng!=null) ? `${lat.toFixed(5)}, ${lng.toFixed(5)}` : "Ubicación por anunciar",
      imgUrl: assetPath(badge?.imageUrl || "assets/images/guias/medallero.webp"),
      startAt: next.startMs,
      endAt: next.endMs
    });

  }catch(e){
    console.error("[MedalleroCTA] Error trayendo próximos:", e);
    setEmpty();
  }
}


  // Arranque
  fetchNext();
})();
