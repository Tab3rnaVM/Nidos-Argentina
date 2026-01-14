const horasLegendarias = {
Enero: [
  // Mié 7 de enero – Genesect
  {
    name: "Genesect (PiroROM)",
    startDate: "2026-01-07T18:00:00",
    endDate:   "2026-01-07T19:00:00",
    image: "../../assets/images/pokemon/pm649.fBURN.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fBURN.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },
  {
    name: "Genesect (CrioROM)",
    startDate: "2026-01-07T18:00:00",
    endDate:   "2026-01-07T19:00:00",
    image: "../../assets/images/pokemon/pm649.fCHILL.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fCHILL.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // Mié 14 de enero – Genesect
  {
    name: "Genesect (PiroROM)",
    startDate: "2026-01-14T18:00:00",
    endDate:   "2026-01-14T19:00:00",
    image: "../../assets/images/pokemon/pm649.fBURN.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fBURN.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },
  {
    name: "Genesect (CrioROM)",
    startDate: "2026-01-14T18:00:00",
    endDate:   "2026-01-14T19:00:00",
    image: "../../assets/images/pokemon/pm649.fCHILL.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fCHILL.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // Mié 21 de enero – Thundurus
  {
    name: "Thundurus (Forma Encarnada)",
    startDate: "2026-01-21T18:00:00",
    endDate:   "2026-01-21T19:00:00",
    image: "../../assets/images/pokemon/pm642.fINCARNATE.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm642.fINCARNATE.s.icon.webp",
    types: ["../../assets/images/tipos/electrico.png","../../assets/images/tipos/volador.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // Mié 28 de enero – Tornadus
  {
    name: "Tornadus (Forma Encarnada)",
    startDate: "2026-01-28T18:00:00",
    endDate:   "2026-01-28T19:00:00",
    image: "../../assets/images/pokemon/pm641.fINCARNATE.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm641.fINCARNATE.s.icon.webp",
    types: ["../../assets/images/tipos/volador.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },
],


};


function setResourceLinks(urls, { rel = "preload", as = "image", dataTag = "legend-hint", limit = 24 } = {}) {
  document.head
    .querySelectorAll(`link[rel="${rel}"][data-tag="${dataTag}"]`)
    .forEach((n) => n.remove());

  const uniques = [...new Set(urls)].slice(0, limit);
  uniques.forEach((href) => {
    if (!href) return;
    const link = document.createElement("link");
    link.rel = rel;
    if (as) link.as = as;
    link.href = href;
    link.dataset.tag = dataTag;
    document.head.appendChild(link);
  });
}

function setPreloads(urls, limit = 12) {
  setResourceLinks(urls, { rel: "preload", as: "image", dataTag: "legend-preload", limit });
}
function setPrefetch(urls, limit = 48) {
  setResourceLinks(urls, { rel: "prefetch", as: "", dataTag: "legend-prefetch", limit });
}

function collectMainImages(list) {
  return list.map((e) => e.image).filter(Boolean);
}
function collectShinyImages(list) {
  return list.filter((e) => e.shiny && e.shinyImage).map((e) => e.shinyImage);
}
function injectHintsForMonth(list) {
  const main = collectMainImages(list);
  const shiny = collectShinyImages(list);
  const PRELOAD_MAIN = 8;
  const PRELOAD_SHINY = 6;
  setPreloads([...main.slice(0, PRELOAD_MAIN), ...shiny.slice(0, PRELOAD_SHINY)], PRELOAD_MAIN + PRELOAD_SHINY);
  setPrefetch([...main.slice(PRELOAD_MAIN), ...shiny.slice(PRELOAD_SHINY)], 64);
}

/* ---------- Navegación ---------- */

const monthsLegendarias = Object.keys(horasLegendarias);
let currentMonthIndexLegendarias = 0;

function updateNavigationState() {
  const prev = document.getElementById("prevMonthLegendarias");
  const next = document.getElementById("nextMonthLegendarias");
  if (prev) prev.disabled = currentMonthIndexLegendarias === 0;
  if (next) next.disabled = currentMonthIndexLegendarias === monthsLegendarias.length - 1;
}

const prevBtnLegend = document.getElementById("prevMonthLegendarias");
if (prevBtnLegend) {
  prevBtnLegend.addEventListener("click", () => {
    currentMonthIndexLegendarias =
      (currentMonthIndexLegendarias - 1 + monthsLegendarias.length) % monthsLegendarias.length;
    renderHorasLegendarias(monthsLegendarias[currentMonthIndexLegendarias]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}
const nextBtnLegend = document.getElementById("nextMonthLegendarias");
if (nextBtnLegend) {
  nextBtnLegend.addEventListener("click", () => {
    currentMonthIndexLegendarias =
      (currentMonthIndexLegendarias + 1) % monthsLegendarias.length;
    renderHorasLegendarias(monthsLegendarias[currentMonthIndexLegendarias]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}

/* ---------- Mes inicial según fecha ---------- */

function checkAndRenderNextMonthLegendarias() {
  const currentDate = new Date();
  currentMonthIndexLegendarias = monthsLegendarias.findIndex((month) =>
    (horasLegendarias[month] || []).some((event) => currentDate <= new Date(event.endDate))
  );
  if (currentMonthIndexLegendarias === -1) currentMonthIndexLegendarias = 0;
  renderHorasLegendarias(monthsLegendarias[currentMonthIndexLegendarias]);
  updateNavigationState();
}

/* ---------- Render ---------- */

function renderHorasLegendarias(month) {
  const container = document.getElementById("horasLegendariasContainer");
  const title = document.getElementById("monthTitleLegendarias");
  if (!container) return;

  container.innerHTML = "";

  const monthLegend = horasLegendarias[month] || [];
  const now = new Date();

  if (monthLegend.length === 0) {
    if (title) title.textContent = `No hay horas legendarias en ${month}`;
    return;
  }

  const firstEventDate = new Date(monthLegend[0]?.startDate || now);
  if (title) title.textContent = `Horas legendarias de ${month} ${firstEventDate.getFullYear()}`;

  // Hints antes de pintar (preload/prefetch)
  injectHintsForMonth(monthLegend);

  const HIGH_PRIORITY_LIMIT = 8;
  let rendered = 0;

  monthLegend.forEach((ev) => {
    const startDate = new Date(ev.startDate);
    const endDate = new Date(ev.endDate);

    let itemClass = "";
    if (now < startDate) itemClass = "date-future";
    else if (now > endDate) itemClass = "date-past";
    else itemClass = "date-active";

    const isHigh = rendered < HIGH_PRIORITY_LIMIT;
    rendered++;

    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    const card = document.createElement("div");
    card.className = "col-xl-pantalla col-lg-3 col-sm-6";

    card.innerHTML = `
      <a href="${ev.link || '#'}">
        <div class="item item-link ${itemClass}" data-inicio="${ev.startDate}" data-fin="${ev.endDate}">
          <p class="name-counter">${ev.name}</p>
          <div class="date-eggs">
            <div class="thumb thumb-counters">
              ${
                ev.shiny
                  ? `<div class="pokemon-shiny" data-images='["${ev.image}", "${ev.shinyImage}"]'>
                       <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" />
                     </div>`
                  : ""
              }
              <div class="pokemon-types">
                ${(ev.types || []).map((type) => `<img src="${type}" alt="Type" class="type-icon" loading="lazy" decoding="async" />`).join("")}
              </div>
              <img src="${ev.image}" alt="${ev.name}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
            </div>
            <div class="down-content">
              <div class="dates-counters">
                <img src="${ev.eggRaid}" class="eggs-counters" loading="lazy" decoding="async" />
                <span class="fecha-inicio">${startDate.toLocaleDateString("es-ES", { day: "2-digit", month: "short" })}</span>
              </div>
            </div>
          </div>
          ${ev.bonus ? `<p class="bonus-horadestacada">${ev.bonus}</p>` : ""}
        </div>
      </a>
    `;

    container.appendChild(card);
  });

  // Preload extra de shiny (hover instantáneo)
  preloadShinyImages(monthLegend);
}

/* ---------- Preload shiny ---------- */

function preloadShinyImages(list) {
  list.forEach((e) => {
    if (e.shiny && e.shinyImage) {
      const img = new Image();
      img.src = e.shinyImage;
    }
  });
}

/* ---------- Hover shiny ---------- */

function applyShinyHoverEffects() {
  const shinyIcons = document.querySelectorAll(".pokemon-shiny");
  shinyIcons.forEach((icon) => {
    const images = JSON.parse(icon.getAttribute("data-images"));
    const pokemonImage = icon.closest(".thumb-counters").querySelector(".pokemon-imagen");
    if (!pokemonImage) return;

    icon.addEventListener("mouseover", () => {
      pokemonImage.src = images[1];
    });
    icon.addEventListener("mouseout", () => {
      pokemonImage.src = images[0];
    });
  });
}

/* ---------- Init ---------- */

window.addEventListener("load", () => {
  checkAndRenderNextMonthLegendarias();
  applyShinyHoverEffects();
  updateNavigationState();
});
