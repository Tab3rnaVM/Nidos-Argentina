const horasDestacadas = {
Enero: [
  {
    name: "Barboach",
    startDate: "2026-01-06T18:00:00",
    endDate:   "2026-01-06T19:00:00",
    image: "../../assets/images/pokemon/pm339.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm339.s.icon.webp",
    types: ["../../assets/images/tipos/agua.png","../../assets/images/tipos/tierra.png"],
    shiny: true,
    bonusImage: "../../assets/images/bonus/destacada-experiencia.png",
    bonus: "x2 EXP por captura",
  },
  {
    name: "Mareep",
    startDate: "2026-01-13T18:00:00",
    endDate:   "2026-01-13T19:00:00",
    image: "../../assets/images/pokemon/pm179.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm179.s.icon.webp",
    types: ["../../assets/images/tipos/electrico.png"],
    shiny: true,
    bonusImage: "../../assets/images/bonus/destacada-experiencia.png",
    bonus: "x2 EXP por evolución",
  },
  {
    name: "Hatenna",
    startDate: "2026-01-20T18:00:00",
    endDate:   "2026-01-20T19:00:00",
    image: "../../assets/images/pokemon/pm856.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm856.s.icon.webp",
    types: ["../../assets/images/tipos/psiquico.png"],
    shiny: true,
    bonusImage: "../../assets/images/bonus/destacada-caramelo.png",
    bonus: "x2 Caramelos por transferencia",
  },
  {
    name: "Foongus",
    startDate: "2026-01-27T18:00:00",
    endDate:   "2026-01-27T19:00:00",
    image: "../../assets/images/pokemon/pm590.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm590.s.icon.webp",
    types: ["../../assets/images/tipos/planta.png","../../assets/images/tipos/veneno.png"],
    shiny: true,
    bonusImage: "../../assets/images/bonus/destacada-polvos.png",
    bonus: "x2 Polvo Estelar por captura",
  },
],
};

function setResourceLinks(urls, { rel = "preload", as = "image", dataTag = "horas-hint", limit = 24 } = {}) {
  // Limpia hints previos de este módulo
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
  setResourceLinks(urls, { rel: "preload", as: "image", dataTag: "horas-preload", limit });
}

function setPrefetch(urls, limit = 48) {
  setResourceLinks(urls, { rel: "prefetch", as: "", dataTag: "horas-prefetch", limit });
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

  // Preload primeras tarjetas (main) + algunos shiny para hover instantáneo
  const PRELOAD_MAIN = 8;
  const PRELOAD_SHINY = 6;

  setPreloads([...main.slice(0, PRELOAD_MAIN), ...shiny.slice(0, PRELOAD_SHINY)], PRELOAD_MAIN + PRELOAD_SHINY);

  // Prefetch del resto
  setPrefetch([...main.slice(PRELOAD_MAIN), ...shiny.slice(PRELOAD_SHINY)], 64);
}

/* ---------- Navegación ---------- */

const monthsHoras = Object.keys(horasDestacadas); // ["Diciembre", "Enero", ...]
let currentMonthIndexHoras = 0;

function updateNavigationState() {
  const prev = document.getElementById("prevMonthHoras");
  const next = document.getElementById("nextMonthHoras");
  if (prev) prev.disabled = currentMonthIndexHoras === 0;
  if (next) next.disabled = currentMonthIndexHoras === monthsHoras.length - 1;
}

const prevBtnHoras = document.getElementById("prevMonthHoras");
if (prevBtnHoras) {
  prevBtnHoras.addEventListener("click", () => {
    currentMonthIndexHoras = (currentMonthIndexHoras - 1 + monthsHoras.length) % monthsHoras.length;
    renderHorasDestacadas(monthsHoras[currentMonthIndexHoras]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}

const nextBtnHoras = document.getElementById("nextMonthHoras");
if (nextBtnHoras) {
  nextBtnHoras.addEventListener("click", () => {
    currentMonthIndexHoras = (currentMonthIndexHoras + 1) % monthsHoras.length;
    renderHorasDestacadas(monthsHoras[currentMonthIndexHoras]);
    applyShinyHoverEffects();
    updateNavigationState();
  });
}

/* ---------- Mes inicial según fecha ---------- */

function checkAndRenderNextMonthHoras() {
  const currentDate = new Date();
  currentMonthIndexHoras = monthsHoras.findIndex((month) =>
    (horasDestacadas[month] || []).some((event) => currentDate <= new Date(event.endDate))
  );

  if (currentMonthIndexHoras === -1) currentMonthIndexHoras = 0;

  renderHorasDestacadas(monthsHoras[currentMonthIndexHoras]);
  updateNavigationState();
}

/* ---------- Render ---------- */

function renderHorasDestacadas(month) {
  const container = document.getElementById("horasDestacadasContainer");
  const title = document.getElementById("monthTitleHoras");
  if (!container) return;

  container.innerHTML = "";

  const monthHoras = horasDestacadas[month] || [];
  const now = new Date();

  // Título
  const firstEventDate = new Date(monthHoras[0]?.startDate || now);
  if (title) title.textContent = `Horas destacadas de ${month} ${firstEventDate.getFullYear()}`;

  // Resource hints antes de pintar
  injectHintsForMonth(monthHoras);

  // Render
  const HIGH_PRIORITY_LIMIT = 8;
  let rendered = 0;

  monthHoras.forEach((horaDestacada) => {
    const startDate = new Date(horaDestacada.startDate);
    const endDate = new Date(horaDestacada.endDate);

    let itemClass = "";
    if (now < startDate) itemClass = "date-future";
    else if (now > endDate) itemClass = "date-past";
    else itemClass = "date-active";

    const isHigh = rendered < HIGH_PRIORITY_LIMIT;
    rendered++;

    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    const item = document.createElement("div");
    item.className = "col-xl-pantalla col-lg-3 col-sm-6";

    item.innerHTML = `
      <div class="item ${itemClass}" data-inicio="${horaDestacada.startDate}" data-fin="${horaDestacada.endDate}">
        <p class="name-counter">${horaDestacada.name}</p>
        <div class="date-eggs">
          <div class="thumb thumb-counters">
            ${
              horaDestacada.shiny
                ? `<div class="pokemon-shiny" data-images='["${horaDestacada.image}", "${horaDestacada.shinyImage}"]'>
                     <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" />
                   </div>`
                : ""
            }
            <div class="pokemon-types">
              ${horaDestacada.types.map((t) => `<img src="${t}" alt="Type" class="type-icon" loading="lazy" decoding="async" />`).join("")}
            </div>
            <img src="${horaDestacada.image}" alt="${horaDestacada.name}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
          </div>
          <div class="down-content">
            <div class="dates-counters">
              <img src="${horaDestacada.bonusImage}" class="eggs-counters" loading="lazy" decoding="async" />
              <span class="fecha-inicio">${startDate.toLocaleDateString("es-ES", { day: "2-digit", month: "short" })}</span>
            </div>
          </div>
        </div>
        <p class="bonus-horadestacada">${horaDestacada.bonus}</p>
      </div>
    `;

    container.appendChild(item);
  });

  // Preload adicional de shiny (para asegurar hover instantáneo)
  preloadShinyImages(monthHoras);
}

/* ---------- Preload de imágenes shiny para hover ---------- */

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
  checkAndRenderNextMonthHoras();
  applyShinyHoverEffects();
  updateNavigationState();
});
