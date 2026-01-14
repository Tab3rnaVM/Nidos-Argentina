/* =========================
   Obtener mes en curso
========================= */
(function(){
    const el = document.getElementById('raffleMonth');
    if (!el) return;
    const now = new Date();
    const mes = now.toLocaleDateString('es-AR', { month: 'long' });
    el.textContent = mes.charAt(0).toUpperCase() + mes.slice(1);
  })();


/* =========================
   Firebase
========================= */
const firebaseConfig = {
  apiKey: "AIzaSyBpqarYah2XVHmkk2tLGrUhLNVmP20x6kM",
  authDomain: "shinychecknidosarg.firebaseapp.com",
  projectId: "shinychecknidosarg",
  storageBucket: "shinychecknidosarg.appspot.com",
  messagingSenderId: "563681136537",
  appId: "1:563681136537:web:14562744c07efccdac4d08",
  measurementId: "G-JW2E3B1C7D",
};
firebase.initializeApp(firebaseConfig);
const db   = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/* =========================
   UI refs
========================= */
const grid        = document.getElementById("medalsGrid");
const progressBar = document.getElementById("progressBar");
const ownedNowEl  = document.getElementById("ownedNow");
const ownedTotEl  = document.getElementById("ownedTotal");
const sessionBtn  = document.getElementById("sessionBtn");
const tabs = {
  todos:     document.getElementById("tabTodos"),
  obtenidas: document.getElementById("tabObtenidas"),
  faltantes: document.getElementById("tabFaltantes"),
};

/* =========================
   Estado
========================= */
let currentUser   = null;
let obtainedMap   = {};     // { [medalId]: { ts, lat, lng } }
let currentTab    = "todos";
let MEDALS        = [];     // se llena desde Firestore

/* =========================
   Utils generales
========================= */
const toRad = d => d * Math.PI / 180;
function distanceMeters(lat1, lon1, lat2, lon2){
  const R=6371000, dLat=toRad(lat2-lat1), dLon=toRad(lon2-lon1);
  const a=Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(a));
}
function percent(a,b){ return b===0?0:Math.round((a/b)*100); }
function shortenName(full="Usuario"){
  const parts = String(full || "Usuario").trim().split(/\s+/);
  if(parts.length===1) return parts[0];
  return `${parts[0]} ${parts[1][0]}.`;
}

/* ---------- Helper de rutas de assets (Opción A) ---------- */
const IS_IN_PAGES = location.pathname.includes('/pages/');
function assetPath(p = '') {
  p = String(p).trim();
  if (!p) return '';
  p = p.replace(/^(\.\/)+/, '').replace(/^\/+/, '');
  if (p.startsWith('../')) return p;
  if (p.startsWith('assets/')) return IS_IN_PAGES ? `../${p}` : `/${p}`;
  if (p.startsWith('/assets/')) return p;
  return `/${p}`;
}

/* =========================
   Helpers de tiempo / estado
========================= */
function formatCountdown(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}
function fmtCountdown(ms) {
  // ms siempre positivo cuando lo usamos
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days  = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins  = Math.floor((totalSec % 3600) / 60);
  return `${days}d ${hours}h ${mins}m`;
}

/**
 * Devuelve { state, label } donde:
 * - state: "coming" | "active" | "ended"
 * - label: texto del botón (p.ej. "Faltan: 3d 2h 10m", "Hacer check-in", "Finalizado")
 *
 * startAt y endAt deben venir como Date (ya lo hacemos en listenMedalleros).
 */
function buildState(m) {
  const now = Date.now();
  const start = m.startAt ? +m.startAt : null;
  const end   = m.endAt   ? +m.endAt   : null;

  // Si tenemos ventana de tiempo completa
  if (start && end) {
    if (now < start) {
      return { state: "coming", label: `Faltan: ${fmtCountdown(start - now)}` };
    }
    if (now > end) {
      return { state: "ended", label: "Finalizado" };
    }
    return { state: "active", label: "Hacer check-in" };
  }

  // Si solo hay start
  if (start && !end) {
    if (now < start) {
      return { state: "coming", label: `Faltan: ${fmtCountdown(start - now)}` };
    }
    // Sin end, consideramos activo desde start
    return { state: "active", label: "Hacer check-in" };
  }

  // Si solo hay end
  if (!start && end) {
    if (now <= end) {
      // Sin start, tomamos como activo hasta end
      return { state: "active", label: "Hacer check-in" };
    }
    return { state: "ended", label: "Finalizado" };
  }

  // Sin fechas: tratamos como "pronto"
  return { state: "coming", label: "Pronto" };
}

function getCoords(m) {
  if (typeof m.lat === "number" && typeof m.lng === "number") {
    return { lat: m.lat, lng: m.lng };
  }
  if (m.geofence && m.geofence.center) {
    return {
      lat: m.geofence.center.latitude ?? m.geofence.center._lat,
      lng: m.geofence.center.longitude ?? m.geofence.center._long,
    };
  }
  return { lat: 0, lng: 0 };
}

/* =========================
   Autenticación
========================= */
async function login(){
  try { await auth.signInWithPopup(provider); }
  catch(e){ console.error(e); alert("No se pudo iniciar sesión."); }
}
async function logout(){ await auth.signOut(); }

function setSessionButton(){
  if(currentUser){
    const short = shortenName(currentUser.displayName || "Usuario");
    sessionBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i><span class="user">${short}</span>`;
    sessionBtn.onclick = logout;
  }else{
    sessionBtn.innerHTML = `<i class="fab fa-google"></i><span class="user">Iniciar sesión</span>`;
    sessionBtn.onclick = login;
  }
}

auth.onAuthStateChanged(async (user)=>{
  currentUser = user || null;
  setSessionButton();
  if(currentUser){ await loadObtained(); } else { obtainedMap = {}; }
  updateProgress(); renderGrid();
});

/* =========================
   Firestore: progreso del usuario
========================= */
async function loadObtained(){
  try{
    const snap = await db.collection("medalleros").doc(currentUser.uid).get();
    obtainedMap = (snap.exists && snap.data() && snap.data().medals) || {};
  }catch(e){ console.error(e); obtainedMap = {}; }
}
async function saveObtained(id, data){
  const ref = db.collection("medalleros").doc(currentUser.uid);
  await ref.set({
    email: currentUser.email || null,
    displayName: currentUser.displayName || null,
    medals: {
      [id]: data
    }
  }, { merge: true });
}


/* =========================
   Firestore: cargar eventos + badges
========================= */
let _badgeCache = new Map(); // badgeId -> docData

async function getBadge(badgeId){
  if (_badgeCache.has(badgeId)) return _badgeCache.get(badgeId);
  const doc = await db.collection("badges").doc(badgeId).get();
  const data = doc.exists ? { id: doc.id, ...doc.data() } : null;
  _badgeCache.set(badgeId, data);
  return data;
}

// escucha y llena MEDALS (startAt/endAt en milisegundos)
function listenMedalleros(){
  return db
    .collection("eventos")
    .orderBy("startAt", "asc") // ordenado por fecha de inicio (lo más cercano primero)
    .onSnapshot(async (qs) => {
      try {
        const items = [];
        for (const doc of qs.docs) {
          const ev = doc.data();
          const badge = await getBadge(ev.badgeId);
          if (!badge) continue;

          const center = ev.geofence?.center;
          const radius = Number(ev.geofence?.radiusMeters || 200);

          const startMs = ev.startAt?.toMillis ? ev.startAt.toMillis() :
                          (ev.startAt?.toDate ? +ev.startAt.toDate() :
                          (ev.startAt ? +new Date(ev.startAt) : null));

          const endMs   = ev.endAt?.toMillis ? ev.endAt.toMillis() :
                          (ev.endAt?.toDate ? +ev.endAt.toDate() :
                          (ev.endAt ? +new Date(ev.endAt) : null));

          if (startMs == null || endMs == null) continue;

          items.push({
            id: doc.id,
            title: badge.title || ev.name || "Medalla",
            img: assetPath(badge.imageUrl || ""),
            radio: radius,
            lat: center?.latitude ?? center?.lat ?? null,
            lng: center?.longitude ?? center?.lng ?? null,
            startAt: startMs, // <- números para cálculo y sort
            endAt: endMs,
            code: ev.code || null,
          });
        }

        MEDALS = items;
        ownedTotEl.textContent = MEDALS.length;
        updateProgress();
        renderGrid();
      } catch (err) {
        console.error("Listen medalleros error:", err);
      }
    }, (err) => {
      console.error("Listen medalleros error:", err);
    });
}

/* =========================
   Modal login
========================= */
function showLoginModal(){
  const html = `
  <div class="modal-overlay">
    <div class="modal-container">
      <h3 style="margin:0 0 6px">Inicia sesión para continuar</h3>
      <p>El check-in requiere una cuenta de Google para guardar tu progreso.</p>
      <div class="modal-actions">
        <button id="mLogin" class="btn btn-primary"><i class="fab fa-google"></i> Iniciar sesión</button>
        <button id="mClose" class="btn btn-secondary">Cerrar</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", html);
  document.getElementById("mLogin").onclick = async ()=>{ await login(); closeModal(); };
  document.getElementById("mClose").onclick  = closeModal;
}
function closeModal(){ const el=document.querySelector(".modal-overlay"); if(el) el.remove(); }

/* =========================
   Check-in
========================= */
function canCheckNow(m){
  if (m.startAt == null || m.endAt == null) return false;
  const now = Date.now();
  return (m.startAt <= now) && (now <= m.endAt);
}

function doCheckIn(medal){
  if(!currentUser){ showLoginModal(); return; }
  if(!("geolocation" in navigator)){ alert("Tu navegador no soporta geolocalización."); return; }
  if(!canCheckNow(medal)){ alert("El check-in solo está disponible durante el evento."); return; }

  if (medal.lat == null || medal.lng == null) {
    alert("Este evento aún no tiene geolocalización configurada.");
    return;
  }

  navigator.geolocation.getCurrentPosition(async (pos)=>{
    const { latitude, longitude } = pos.coords;
    const d = distanceMeters(latitude, longitude, medal.lat, medal.lng);
    if(d <= medal.radio){
      try{
        await saveObtained(medal.id, { ts:Date.now(), lat:latitude, lng:longitude });
        updateProgress(); renderGrid();
      }catch(e){ console.error(e); alert("No pudimos registrar tu check-in."); }
    }else{
      alert(`Estás a ${Math.round(d)} m. Debes estar dentro de ${medal.radio} m del punto.`);
    }
  }, (err)=>{ console.error(err); alert("No pudimos obtener tu ubicación. Revisa permisos."); },
  { enableHighAccuracy:true, maximumAge:0, timeout:15000 });
}

/* =========================
   Render
========================= */
function medalCard(m) {
  const obtained = !!obtainedMap[m.id];
  if (currentTab === "obtenidas" && !obtained) return "";
  if (currentTab === "faltantes" && obtained) return "";

  const { lat, lng } = getCoords(m);
  const st = buildState(m);

  const cardClass = obtained ? "medal-card is-obtained" : "medal-card is-pending";

  // --- Botón según estado ---
  let buttonHTML = "";
  if (obtained) {
    // ✅ Obtenida
    buttonHTML = `<button class="action-btn btn-success" disabled>Obtenida</button>`;
  } else if (st.state === "coming") {
    // ⏳ Evento futuro: Faltan X días
    buttonHTML = `<button class="action-btn btn-gray" disabled>${st.label}</button>`;
  } else if (st.state === "active") {
    // 🟦 Evento activo
    buttonHTML = `<button class="action-btn btn-primary checkin-btn" data-id="${m.id}">${st.label}</button>`;
  } else if (st.state === "ended") {
    // 🔚 Evento finalizado
    buttonHTML = `<button class="action-btn btn-dark" disabled>Finalizado</button>`;
  } else {
    // Fallback de seguridad
    buttonHTML = `<button class="action-btn btn-gray" disabled>${st.label || "Pronto"}</button>`;
  }

  return `
    <div class="${cardClass}">
      <div class="medal-title">${m.title || "Medalla"}</div>
      <img class="medal-img" src="${m.img}" alt="${m.title || "Medalla"}" />
      <div class="medal-sub">
        <i class="fas fa-map-marker-alt"></i>Parque Rivadavia
      </div>
      ${buttonHTML}
    </div>
  `;
}

let countdownTimer = null;
function startCountdownTick() {
  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    renderGrid(); // re-render + re-sort (simple y efectivo)
  }, 30000);
}

function renderGrid(){
  const now = Date.now();

  // 0 = active, 1 = coming, 2 = ended
  const stateRank = (m) => {
    const start = m.startAt ?? null;
    const end   = m.endAt ?? null;

    // seguridad por si viene string/Date
    const s = start != null ? Number(start) : null;
    const e = end   != null ? Number(end)   : null;

    if (s != null && e != null) {
      if (now >= s && now <= e) return 0; // active
      if (now < s) return 1;              // coming
      return 2;                            // ended
    }

    // si faltan fechas, lo tratamos como coming para que no se vaya al final
    return 1;
  };

  MEDALS.sort((a, b) => {
    const ra = stateRank(a);
    const rb = stateRank(b);
    if (ra !== rb) return ra - rb;

    // Dentro del mismo estado:
    // - active/coming: más cercano primero (startAt asc)
    // - ended: más reciente primero (endAt desc)
    const aStart = Number(a.startAt ?? 0);
    const bStart = Number(b.startAt ?? 0);
    const aEnd   = Number(a.endAt ?? 0);
    const bEnd   = Number(b.endAt ?? 0);

    if (ra === 2) return bEnd - aEnd;      // ended
    return aStart - bStart;                // active/coming
  });

  grid.innerHTML = MEDALS.map(m => medalCard(m)).join("");

  // Fallback WEBP -> PNG si falla
  grid.querySelectorAll(".medal-img").forEach(img => {
    img.addEventListener("error", () => {
      if (img.src.endsWith(".webp")) img.src = img.src.replace(".webp", ".png");
    });
  });

  // Bind a check-in
  grid.querySelectorAll(".checkin-btn").forEach(btn=>{
    const id = btn.getAttribute("data-id");
    btn.onclick = ()=>doCheckIn(MEDALS.find(x=>x.id===id));
  });

  startCountdownTick();
}


function updateProgress(){
  const owned = Object.keys(obtainedMap).length;
  ownedNowEl.textContent = owned;
  progressBar.style.width = `${percent(owned, MEDALS.length)}%`;
}

/* =========================
   Tabs
========================= */
function activeTab(name){
  currentTab = name;
  Object.entries(tabs).forEach(([k,btn])=>{
    btn.classList.toggle("is-active", k===name);
    btn.classList.toggle("is-muted",  k!==name);
  });
  renderGrid();
}
tabs.todos.onclick     = ()=>activeTab("todos");
tabs.obtenidas.onclick = ()=>activeTab("obtenidas");
tabs.faltantes.onclick = ()=>activeTab("faltantes");

/* =========================
   Init
========================= */
let _unsubscribe = null;
document.addEventListener("DOMContentLoaded", ()=>{
  if (_unsubscribe) _unsubscribe();
  _unsubscribe = listenMedalleros();

  ownedTotEl.textContent = MEDALS.length;
  renderGrid();
  updateProgress();
});
