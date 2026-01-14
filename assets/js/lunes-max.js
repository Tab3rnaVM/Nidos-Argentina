const maxibatallas = {
Enero: [
  {
    name: "Drampa - Dinamax",
    startDate: "2026-01-05T18:00:00",
    endDate:   "2026-01-05T19:00:00",
    image: "../../assets/images/pokemon/pm780.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm780.MAX.s.icon.webp",
    types: [
      "../../assets/images/tipos/normal.png",
      "../../assets/images/tipos/dragon.png",
    ],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
  {
    name: "Caterpie - Dinamax",
    startDate: "2026-01-12T18:00:00",
    endDate:   "2026-01-12T19:00:00",
    image: "../../assets/images/pokemon/pm10.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm10.MAX.s.icon.webp",
    types: [
      "../../assets/images/tipos/insecto.png",
    ],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
  {
    name: "Beldum - Dinamax",
    startDate: "2026-01-19T18:00:00",
    endDate:   "2026-01-19T19:00:00",
    image: "../../assets/images/pokemon/pm374.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm374.MAX.s.icon.webp",
    types: [
      "../../assets/images/tipos/acero.png",
      "../../assets/images/tipos/psiquico.png",
    ],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
  {
    name: "Roggenrola - Dinamax",
    startDate: "2026-01-26T18:00:00",
    endDate:   "2026-01-26T19:00:00",
    image: "../../assets/images/pokemon/pm524.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm524.MAX.s.icon.webp",
    types: [
      "../../assets/images/tipos/roca.png",
    ],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
],

};

/* ---------- Resource Hints (aislados para Max) ---------- */

function setResourceLinksMax(urls, { rel = "preload", as = "image", dataTag = "max-hint", limit = 24 } = {}) {
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

function setPreloadsMax(urls, limit = 10) {
  setResourceLinksMax(urls, { rel: "preload", as: "image", dataTag: "max-preload", limit });
}
function setPrefetchMax(urls, limit = 48) {
  setResourceLinksMax(urls, { rel: "prefetch", as: "", dataTag: "max-prefetch", limit });
}

function collectMainImagesMax(list) {
  return list.map((e) => e.image).filter(Boolean);
}
function collectShinyImagesMax(list) {
  return list.filter((e) => e.shiny && e.shinyImage).map((e) => e.shinyImage);
}
function injectHintsForMonthMax(list) {
  const main = collectMainImagesMax(list);
  const shiny = collectShinyImagesMax(list);
  const PRELOAD_MAIN = 8;
  const PRELOAD_SHINY = 6;
  setPreloadsMax([...main.slice(0, PRELOAD_MAIN), ...shiny.slice(0, PRELOAD_SHINY)], PRELOAD_MAIN + PRELOAD_SHINY);
  setPrefetchMax([...main.slice(PRELOAD_MAIN), ...shiny.slice(PRELOAD_SHINY)], 64);
}

/* ---------- Navegación (aislada para Max) ---------- */

const monthsMax = Object.keys(maxibatallas);
let currentMonthIndexMaxx = 0;

function updateNavigationStateMax() {
  const prev = document.getElementById("prevMonthMax");
  const next = document.getElementById("nextMonthMax");
  if (prev) prev.disabled = currentMonthIndexMaxx === 0;
  if (next) next.disabled = currentMonthIndexMaxx === monthsMax.length - 1;
}

const prevBtnMax = document.getElementById("prevMonthMax");
if (prevBtnMax) {
  prevBtnMax.addEventListener("click", () => {
    currentMonthIndexMaxx = (currentMonthIndexMaxx - 1 + monthsMax.length) % monthsMax.length;
    renderMax(monthsMax[currentMonthIndexMaxx]);
    applyShinyHoverEffectsMax();
    updateNavigationStateMax();
  });
}

const nextBtnMax = document.getElementById("nextMonthMax");
if (nextBtnMax) {
  nextBtnMax.addEventListener("click", () => {
    currentMonthIndexMaxx = (currentMonthIndexMaxx + 1) % monthsMax.length;
    renderMax(monthsMax[currentMonthIndexMaxx]);
    applyShinyHoverEffectsMax();
    updateNavigationStateMax();
  });
}

/* ---------- Mes inicial según fecha ---------- */

function checkAndRenderNextMonthMax() {
  const currentDate = new Date();
  currentMonthIndexMaxx = monthsMax.findIndex((month) =>
    (maxibatallas[month] || []).some((event) => {
      // Si falta endDate por alguna razón, se considera activo por seguridad visual
      const end = event?.endDate ? new Date(event.endDate) : new Date(currentDate.getTime() + 1);
      return currentDate <= end;
    })
  );

  if (currentMonthIndexMaxx === -1) currentMonthIndexMaxx = 0;

  renderMax(monthsMax[currentMonthIndexMaxx]);
  updateNavigationStateMax();
}

/* ---------- Utilidades ---------- */

function getYearForTitleMax(list, fallbackDate = new Date()) {
  const first = list?.[0];
  if (!first) return fallbackDate.getFullYear();
  const d = first.startDate ? new Date(first.startDate) : fallbackDate;
  return d.getFullYear();
}

function formatDayMonthMax(date) {
  try {
    return date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
  } catch {
    return "";
  }
}

/* ---------- Render ---------- */

function renderMax(month) {
  const containerMax = document.getElementById("batallasMaxContainer");
  const titleMax = document.getElementById("monthTitleMax");
  if (!containerMax) return;

  containerMax.innerHTML = "";

  const monthMax = maxibatallas[month] || [];
  if (!monthMax.length) {
    if (titleMax) titleMax.textContent = `No hay Lunes Max en ${month}`;
    return;
  }

  const year = getYearForTitleMax(monthMax);
  if (titleMax) titleMax.textContent = `Lunes Max de ${month} ${year}`;

  // Hints antes de pintar
  injectHintsForMonthMax(monthMax);

  const now = new Date();
  const HIGH_PRIORITY_LIMIT = 8;
  let rendered = 0;

  // Pre-carga extra para hover shiny
  preloadShinyImagesMax(monthMax);

  monthMax.forEach((batalla) => {
    const itemMax = document.createElement("div");
    itemMax.className = "col-xl-pantalla col-lg-3 col-sm-6";

    // Estado dinámico
    const startDate = batalla.startDate ? new Date(batalla.startDate) : null;
    const endDate = batalla.endDate ? new Date(batalla.endDate) : null;

    let itemClass = "date-normal";
    if (startDate && endDate) {
      if (now < startDate) itemClass = "date-future";
      else if (now > endDate) itemClass = "date-past";
      else itemClass = "date-active";
    }

    // Fechas visibles
    const startTxt = startDate ? formatDayMonthMax(startDate) : "";
    const endTxt = endDate ? formatDayMonthMax(endDate) : "";

    // Prioridad de la imagen principal
    const isHigh = rendered < HIGH_PRIORITY_LIMIT;
    rendered++;
    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    // Tipos (pueden venir vacíos)
    const typesHtml = Array.isArray(batalla.types)
      ? batalla.types.map((t) => `<img src="${t}" alt="Type" class="type-icon" loading="lazy" ${decodingAttr} />`).join("")
      : "";

    itemMax.innerHTML = `
      <div class="item ${itemClass}" data-inicio="${batalla.startDate || 'N/A'}" data-fin="${batalla.endDate || 'N/A'}">
        <p class="name-counter">${batalla.name}</p>
        <div class="date-eggs">
          <div class="thumb thumb-counters">
            ${
              batalla.shiny
                ? `<div class="pokemon-shiny" data-images='["${batalla.image}", "${batalla.shinyImage}"]'>
                     <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" loading="lazy" ${decodingAttr} />
                   </div>`
                : ""
            }
            <div class="pokemon-types">${typesHtml}</div>
            <img src="${batalla.image}" alt="${batalla.name}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
          </div>
          <div class="down-content">
            <div class="dates-counters">
              <img src="${batalla.eggRaid}" class="eggs-counters" loading="lazy" ${decodingAttr} />
              <b class="textdatesalign">
                <span class="fecha-inicio">${startTxt}</span>
                ${endTxt ? `<span class="fecha-fin">${endTxt}</span>` : ""}
              </b>
            </div>
          </div>
        </div>
      </div>
    `;

    containerMax.appendChild(itemMax);
  });
}

/* ---------- Preload shiny ---------- */

function preloadShinyImagesMax(list) {
  list.forEach((e) => {
    if (e.shiny && e.shinyImage) {
      const img = new Image();
      img.src = e.shinyImage;
    }
  });
}

/* ---------- Hover shiny (aislado) ---------- */

function applyShinyHoverEffectsMax() {
  const shinyIcons = document.querySelectorAll(".pokemon-shiny");
  shinyIcons.forEach((icon) => {
    const data = icon.getAttribute("data-images");
    if (!data) return;
    let images;
    try { images = JSON.parse(data); } catch { return; }

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
  checkAndRenderNextMonthMax();
  applyShinyHoverEffectsMax();
  updateNavigationStateMax();
});
