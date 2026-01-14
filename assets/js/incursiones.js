const incursions = {
  Enero: [
  // 5–16 de enero (5★)
  {
    name: "Genesect (PiroROM)",
    startDate: "2026-01-05T10:00:00",
    endDate:   "2026-01-16T10:00:00",
    image: "../../assets/images/pokemon/pm649.fBURN.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fBURN.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },
  {
    name: "Genesect (CrioROM)",
    startDate: "2026-01-05T10:00:00",
    endDate:   "2026-01-16T10:00:00",
    image: "../../assets/images/pokemon/pm649.fCHILL.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fCHILL.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // 5–16 de enero (Megas)
  {
    name: "Mega - Blaziken",
    startDate: "2026-01-05T10:00:00",
    endDate:   "2026-01-16T10:00:00",
    image: "../../assets/images/pokemon/pm257.fMEGA.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm257.fMEGA.s.icon.webp",
    types: ["../../assets/images/tipos/fuego.png","../../assets/images/tipos/pelea.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
    link: "#",
  },

  // 16–25 de enero (5★)
  {
    name: "Thundurus (Forma Encarnada)",
    startDate: "2026-01-16T10:00:00",
    endDate:   "2026-01-25T10:00:00",
    image: "../../assets/images/pokemon/pm642.fINCARNATE.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm642.fINCARNATE.s.icon.webp",
    types: ["../../assets/images/tipos/electrico.png","../../assets/images/tipos/volador.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // 16–25 de enero (Megas)
  {
    name: "Mega - Sceptile",
    startDate: "2026-01-16T10:00:00",
    endDate:   "2026-01-25T10:00:00",
    image: "../../assets/images/pokemon/pm254.fMEGA.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm254.fMEGA.s.icon.webp",
    types: ["../../assets/images/tipos/planta.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
    link: "#",
  },

  // 25 Ene – 4 Feb (5★)
  {
    name: "Tornadus (Forma Encarnada)",
    startDate: "2026-01-25T10:00:00",
    endDate:   "2026-02-04T10:00:00",
    image: "../../assets/images/pokemon/pm641.fINCARNATE.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm641.fINCARNATE.s.icon.webp",
    types: ["../../assets/images/tipos/volador.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    link: "#",
  },

  // 25 Ene – 4 Feb (Megas)
  {
    name: "Mega - Ampharos",
    startDate: "2026-01-25T10:00:00",
    endDate:   "2026-02-04T10:00:00",
    image: "../../assets/images/pokemon/pm181.fMEGA.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm181.fMEGA.s.icon.webp",
    types: ["../../assets/images/tipos/electrico.png","../../assets/images/tipos/dragon.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
    link: "#",
  },

    // 2 Ene – 1 Feb (Incursiones Oscuras)
  {
    name: "Cresselia Oscuro",
    startDate: "2026-01-02T10:00:00",
    endDate:   "2026-02-01T10:00:00",
    image: "../../assets/images/pokemon/pm488.SHADOW.icon.webp",        // ajusta si tu naming es distinto
    shinyImage: "../../assets/images/pokemon/pm488.SHADOW.s.icon.webp", // ajusta si tu naming es distinto
    types: ["../../assets/images/tipos/psiquico.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5-oscura.png",   // ajusta si tu ruta es distinta
    link: "#",
  },
],

};

function setResourceLinks(urls, { rel = "preload", as = "image", dataTag = "inc-hint", limit = 24 } = {}) {
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
  setResourceLinks(urls, { rel: "preload", as: "image", dataTag: "inc-preload", limit });
}
function setPrefetch(urls, limit = 48) {
  setResourceLinks(urls, { rel: "prefetch", as: "", dataTag: "inc-prefetch", limit });
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
  const PRELOAD_MAIN = 10;
  const PRELOAD_SHINY = 8;
  setPreloads([...main.slice(0, PRELOAD_MAIN), ...shiny.slice(0, PRELOAD_SHINY)], PRELOAD_MAIN + PRELOAD_SHINY);
  setPrefetch([...main.slice(PRELOAD_MAIN), ...shiny.slice(PRELOAD_SHINY)], 64);
}

/* ---------- Navegación ---------- */

const months = Object.keys(incursions); // ["Diciembre", "Enero", ...]
let currentMonthIndex = 0;

function updateNavigationState() {
  const prev = document.getElementById("prevMonth");
  const next = document.getElementById("nextMonth");
  if (prev) prev.disabled = currentMonthIndex === 0;
  if (next) next.disabled = currentMonthIndex === months.length - 1;
}

const prevBtn = document.getElementById("prevMonth");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
    renderIncursions(months[currentMonthIndex]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}
const nextBtn = document.getElementById("nextMonth");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentMonthIndex = (currentMonthIndex + 1) % months.length;
    renderIncursions(months[currentMonthIndex]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}

/* ---------- Mes inicial según fecha ---------- */

function checkAndRenderNextMonth() {
  const currentDate = new Date();
  currentMonthIndex = months.findIndex((month) =>
    (incursions[month] || []).some((event) => {
      // Si tiene availability, usa el último fin de semana; si no, usa endDate
      if (Array.isArray(event.availability) && event.availability.length) {
        const last = new Date(event.availability[event.availability.length - 1].endDate);
        return currentDate <= last;
      }
      const end = new Date(event.endDate);
      return currentDate <= end;
    })
  );
  if (currentMonthIndex === -1) currentMonthIndex = 0;

  renderIncursions(months[currentMonthIndex]);
  updateNavigationState();
}

/* ---------- Utilidades de fecha ---------- */

function getYearForTitle(list, fallbackDate = new Date()) {
  // Prioriza startDate; si hay availability, toma el primer rango
  const first = list?.[0];
  if (!first) return fallbackDate.getFullYear();

  if (Array.isArray(first.availability) && first.availability.length) {
    return new Date(first.availability[0].startDate).getFullYear();
  }
  return new Date(first.startDate).getFullYear();
}

function formatDayMonth(date) {
  try {
    return date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
  } catch {
    return "";
  }
}

/* ---------- Render ---------- */

function renderIncursions(month) {
  const container = document.getElementById("incursionsContainer");
  const title = document.getElementById("monthTitle");
  if (!container) return;

  container.innerHTML = "";

  const monthIncursions = incursions[month] || [];
  const now = new Date();

  if (!monthIncursions.length) {
    if (title) title.textContent = `No hay incursiones en ${month}`;
    return;
  }

  const year = getYearForTitle(monthIncursions, now);
  if (title) title.textContent = `Incursiones de ${month} ${year}`;

  // Hints antes de pintar
  injectHintsForMonth(monthIncursions);

  const HIGH_PRIORITY_LIMIT = 10;
  let rendered = 0;

  monthIncursions.forEach((inc) => {
    const card = document.createElement("div");
    card.className = "col-xl-pantalla col-lg-3 col-sm-6";

    let itemClass = "";
    let dateInfo = "";
    const isWeekendStyle = Array.isArray(inc.availability) && inc.availability.length;

    if (isWeekendStyle) {
      // Estado dinámico basado en availability
      const isActive = inc.availability.some((r) => {
        const rs = new Date(r.startDate);
        const re = new Date(r.endDate);
        return now >= rs && now <= re;
      });

      const firstRangeStart = new Date(inc.availability[0].startDate);
      const lastRangeEnd = new Date(inc.availability[inc.availability.length - 1].endDate);

      if (isActive) itemClass = "date-active";
      else if (now < firstRangeStart) itemClass = "date-future";
      else if (now > lastRangeEnd) itemClass = "date-past";
      else itemClass = "date-normal";

      dateInfo = `<p style="color:#fff">Fines de Semana</p>`;
    } else {
      const start = new Date(inc.startDate);
      const end = new Date(inc.endDate);

      if (now < start) itemClass = "date-future";
      else if (now > end) itemClass = "date-past";
      else itemClass = "date-active";

      dateInfo = `
        <b class="textdatesalign">
          <span class="fecha-inicio">${formatDayMonth(start)}</span>
          <span class="fecha-fin">${formatDayMonth(end)}</span>
        </b>
      `;
    }

    const isHigh = rendered < HIGH_PRIORITY_LIMIT;
    rendered++;
    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    card.innerHTML = `
      <a href="${inc.link || '#'}">
        <div class="item item-link ${itemClass}" data-inicio="${inc.startDate || 'N/A'}" data-fin="${inc.endDate || 'N/A'}">
          <p class="name-counter">${inc.name}</p>
          <div class="date-eggs">
            <div class="thumb thumb-counters">
              ${
                inc.shiny
                  ? `<div class="pokemon-shiny" data-images='["${inc.image}", "${inc.shinyImage}"]'>
                       <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" ${decodingAttr} loading="lazy"/>
                     </div>`
                  : ""
              }
              <div class="pokemon-types">
                ${(inc.types || []).map((t) => `<img src="${t}" alt="Type" class="type-icon" loading="lazy" ${decodingAttr} />`).join("")}
              </div>
              <img src="${inc.image}" alt="${inc.name}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
            </div>
            <div class="down-content">
              <div class="dates-counters">
                <img src="${inc.eggRaid}" class="eggs-counters" loading="lazy" ${decodingAttr} />
                ${dateInfo}
              </div>
            </div>
          </div>
          ${inc.bonus ? `<p class="bonus-horadestacada">${inc.bonus}</p>` : ""}
        </div>
      </a>
    `;

    container.appendChild(card);
  });

  // Pre-carga extra para hover instantáneo
  preloadShinyImages(monthIncursions);
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
    const pokemonImage = icon.closest(".thumb-counters")?.querySelector(".pokemon-imagen");
    if (!pokemonImage || !Array.isArray(images)) return;

    icon.addEventListener("mouseover", () => {
      if (images[1]) pokemonImage.src = images[1];
    });
    icon.addEventListener("mouseout", () => {
      if (images[0]) pokemonImage.src = images[0];
    });
  });
}

/* ---------- Init ---------- */

window.addEventListener("load", () => {
  checkAndRenderNextMonth();
  applyShinyHoverEffects();
  updateNavigationState();
});
