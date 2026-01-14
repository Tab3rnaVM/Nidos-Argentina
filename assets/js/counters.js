const counters = {
  Actuales: [
  {
    name: "Genesect (PiroROM)",
    startDate: "2026-01-05T10:00:00",
    endDate:   "2026-01-16T10:00:00",
    image: "../../assets/images/pokemon/pm649.fBURN.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm649.fBURN.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png","../../assets/images/tipos/acero.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
    pc20: 1916,
    pc25: 2395,
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
    pc20: 1916,
    pc25: 2395,
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
    pc20: 1627,
    pc25: 2034,
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
    pc20: 1911,
    pc25: 2389,
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
    pc20: 1575,
    pc25: 1969,
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
    pc20: 1911,
    pc25: 2389,
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
    pc20: 1630,
    pc25: 2037,
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
    eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5-oscura.png",
    pc20: 1633,
    pc25: 2041,   // ajusta si tu ruta es distinta
    link: "#",
  },
]

};

// Crea <link rel="preload|prefetch"> en <head> y limpia los anteriores del mismo “grupo”
function setResourceLinks(urls, { rel = "preload", as = "image", dataTag = "counters-hint", limit = 24 } = {}) {
  // elimina hints anteriores de este módulo
  document.head.querySelectorAll(`link[rel="${rel}"][data-tag="${dataTag}"]`).forEach((n) => n.remove());
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

function setPreloads(urls, limit = 16) {
  setResourceLinks(urls, { rel: "preload", as: "image", dataTag: "counters-preload", limit });
}

function setPrefetch(urls, limit = 64) {
  setResourceLinks(urls, { rel: "prefetch", as: "", dataTag: "counters-prefetch", limit });
}

// Reúne urls de imágenes (normal + shiny) de un mes
function collectMonthImageURLs(monthIncursions) {
  const urls = [];
  monthIncursions.forEach((inc) => {
    if (inc.image) urls.push(inc.image);
    if (inc.shiny && inc.shinyImage) urls.push(inc.shinyImage);
    // Si quieres incluir iconos de tipos en el hinting, descomenta:
    // (inc.types || []).forEach((t) => t && urls.push(t));
  });
  return urls.filter(Boolean);
}

// Inserta preloads (primeras N) y prefetch (resto)
function injectHintsForMonth(monthIncursions) {
  const all = collectMonthImageURLs(monthIncursions);
  const PRELOAD_LIMIT = 16; // ajusta según tu grid "above the fold"
  setPreloads(all.slice(0, PRELOAD_LIMIT), PRELOAD_LIMIT);
  setPrefetch(all.slice(PRELOAD_LIMIT));
}

/* ---------- Pre-carga JS (hover shiny) ---------- */

function preloadShinyImages(imagePairs) {
  imagePairs.forEach((pair) => {
    if (pair.normal) {
      const n = new Image();
      n.src = pair.normal;
    }
    if (pair.shiny) {
      const s = new Image();
      s.src = pair.shiny;
    }
  });
}

/* ---------- Estado/navegación ---------- */

const months = Object.keys(counters); // ["Actuales", ...]
let currentMonthIndex = 0;

function updateNavigationState() {
  document.getElementById("prevMonth").disabled = currentMonthIndex === 0;
  document.getElementById("nextMonth").disabled = currentMonthIndex === months.length - 1;
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
  renderCounters(months[currentMonthIndex]);
  applyShinyHoverEffects();
  updateNavigationState();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonthIndex = (currentMonthIndex + 1) % months.length;
  renderCounters(months[currentMonthIndex]);
  applyShinyHoverEffects();
  updateNavigationState();
});

/* ---------- Render ---------- */

function renderCounters(month) {
  const container = document.getElementById("countersContainer");
  const title = document.getElementById("monthTitle");

  // Limpia el contenedor
  container.innerHTML = "";

  // Actualiza el título del mes
  title.textContent = `Counters ${month}`;

  // Obtén las incursiones del mes
  const monthIncursions = counters[month] || [];

  // Inyecta hints (preload + prefetch) antes de pintar
  injectHintsForMonth(monthIncursions);

  // Pre-carga de imágenes shiny (JS)
  const shinyImagePairs = monthIncursions.map((inc) => ({
    normal: inc.image,
    shiny: inc.shiny ? inc.shinyImage : null,
  }));
  preloadShinyImages(shinyImagePairs);

  // Renderiza incursiones
  let renderIndex = 0;
  const HIGH_PRIORITY_LIMIT = 12; // primeras N imágenes con prioridad alta

  monthIncursions.forEach((incursion) => {
    const isHigh = renderIndex < HIGH_PRIORITY_LIMIT;
    renderIndex++;

    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    const item = document.createElement("div");
    item.className = "col-xl-pantalla col-lg-3 col-sm-6";

    item.innerHTML = `
      <a href="${incursion.link}" target="_blank" rel="noopener noreferrer">
        <div class="item item-link">
          <p class="name-counter">${incursion.name}</p>
          <div class="date-eggs">
            <div class="thumb thumb-counters">
              ${
                incursion.shiny
                  ? `<div class="pokemon-shiny" data-images='["${incursion.image}", "${incursion.shinyImage}"]'>
                       <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" />
                     </div>`
                  : ""
              }
              <div class="pokemon-types">
                ${(incursion.types || [])
                  .map((type) => `<img src="${type}" alt="Type" class="type-icon" loading="lazy" decoding="async" />`)
                  .join("")}
              </div>
              <img src="${incursion.image}" alt="${incursion.name}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
            </div>
            <div class="down-content">
              <div class="pc-counters-info">
                <div class="pc-section">
                  <span class="ataque-counters"><b>100% IVs</b></span>
                </div>
                <div class="pc-section">
                  <span class="ivs-text-counters">PC Nivel 20:<b class="ataque-counters">${incursion.pc20}</b></span>
                </div>
                <div class="pc-section">
                  <span class="ivs-text-counters">PC Nivel 25:<b class="ataque-counters">${incursion.pc25}</b></span>
                </div>
              </div>
            </div>
          </div>
          ${incursion.bonus ? `<p class="bonus-horadestacada">${incursion.bonus}</p>` : ""}
        </div>
      </a>
    `;

    container.appendChild(item);
  });

  // (Opcional) activar anuncios si los usas
  setTimeout(() => {
    document.querySelectorAll(".adsbygoogle").forEach(() => {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("No se pudo cargar un anuncio:", e);
      }
    });
  }, 300);
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
  renderCounters(months[currentMonthIndex]);
  applyShinyHoverEffects();
  updateNavigationState();
});

