const maxibatallas = {
Enero: [
  {
    name: "Drampa - Dinamax",
    startDate: "2026-01-05T06:00:00",
    endDate:   "2026-01-11T21:00:00",
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
    startDate: "2026-01-12T06:00:00",
    endDate:   "2026-01-18T21:00:00",
    image: "../../assets/images/pokemon/pm10.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm10.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/insecto.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
  {
    name: "Beldum - Dinamax",
    startDate: "2026-01-19T06:00:00",
    endDate:   "2026-01-25T21:00:00",
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
    startDate: "2026-01-26T06:00:00",
    endDate:   "2026-02-01T21:00:00",
    image: "../../assets/images/pokemon/pm524.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm524.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/roca.png"],
    shiny: true,
    eggRaid: "../../assets/images/tipos-incursiones/dinamax.png",
  },
],
};

/*************************************************
 * Batallas Max — Render y optimizaciones de carga
 * Requiere: const maxibatallas = { ... } definido antes
 **************************************************/

// Orden de meses según las claves de tu objeto de datos
const monthsMax = Object.keys(maxibatallas);
let currentMonthIndexMaxx = 0;

/* ---------- Utilidades de hints de recursos ---------- */

// Crea/actualiza <link rel="preload|prefetch"> en <head> de forma segura
function setPreloadLinks(
  urls,
  { as = "image", rel = "preload", dataTag = "dynamic-preload", limit = 8 } = {}
) {
  // Elimina links previos de este “grupo”
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

// Prefetch (baja prioridad) para el siguiente mes
function setPrefetchLinks(urls) {
  setPreloadLinks(urls, {
    rel: "prefetch",
    as: "",
    dataTag: "dynamic-prefetch",
    limit: 12, // se puede aumentar sin bloquear render
  });
}

// Inyecta los <link> para el mes actual y el siguiente
function injectResourceHints(monthMax, nextMonthMax = []) {
  const currentUrls = monthMax
    .flatMap((b) => [b.image, b.shiny ? b.shinyImage : null])
    .filter(Boolean);
  setPreloadLinks(currentUrls, {
    as: "image",
    rel: "preload",
    dataTag: "dynamic-preload",
    limit: 8, // primeras tarjetas visibles
  });

  const nextUrls = nextMonthMax
    .flatMap((b) => [b.image, b.shiny ? b.shinyImage : null])
    .filter(Boolean);
  setPrefetchLinks(nextUrls);
}

/* ---------- Pre-carga (JS) para hover shiny ---------- */

function preloadShinyImages(imagePairs) {
  imagePairs.forEach((pair) => {
    if (pair.normal) {
      const normalImage = new Image();
      normalImage.src = pair.normal;
    }
    if (pair.shiny) {
      const shinyImage = new Image();
      shinyImage.src = pair.shiny;
    }
  });
}

/* ---------- Efecto hover shiny ---------- */

function applyShinyHoverEffects() {
  const shinyIcons = document.querySelectorAll(".pokemon-shiny");
  shinyIcons.forEach((icon) => {
    const images = JSON.parse(icon.getAttribute("data-images"));
    const pokemonImage = icon
      .closest(".thumb-counters")
      .querySelector(".pokemon-imagen");

    icon.addEventListener("mouseover", () => {
      pokemonImage.src = images[1];
    });

    icon.addEventListener("mouseout", () => {
      pokemonImage.src = images[0];
    });
  });
}

/* ---------- Navegación mes anterior / siguiente ---------- */

function updateNavigationState() {
  document.getElementById("prevMonthMax").disabled =
    currentMonthIndexMaxx === 0;
  document.getElementById("nextMonthMax").disabled =
    currentMonthIndexMaxx === monthsMax.length - 1;
}

document.getElementById("prevMonthMax").addEventListener("click", () => {
  currentMonthIndexMaxx =
    (currentMonthIndexMaxx - 1 + monthsMax.length) % monthsMax.length;
  renderMax(monthsMax[currentMonthIndexMaxx]);
  applyShinyHoverEffects();
  updateNavigationState();
});

document.getElementById("nextMonthMax").addEventListener("click", () => {
  currentMonthIndexMaxx = (currentMonthIndexMaxx + 1) % monthsMax.length;
  renderMax(monthsMax[currentMonthIndexMaxx]);
  applyShinyHoverEffects();
  updateNavigationState();
});

/* ---------- Selección automática del mes “vigente” ---------- */

function checkAndRenderNextMonthMax() {
  const currentDate = new Date();

  // Busca el primer mes cuya última batalla no haya terminado
  currentMonthIndexMaxx = monthsMax.findIndex((month) =>
    (maxibatallas[month] || []).some((event) => {
      const endDate = new Date(event.endDate);
      return currentDate <= endDate;
    })
  );

  if (currentMonthIndexMaxx === -1) currentMonthIndexMaxx = 0;

  renderMax(monthsMax[currentMonthIndexMaxx]);
  updateNavigationState();
}

/* ---------- Render principal ---------- */

function renderMax(month) {
  const containerMax = document.getElementById("batallasMaxContainer");
  const titleMax = document.getElementById("monthTitleMax");

  // Limpia contenedor
  containerMax.innerHTML = "";

  // Datos del mes
  const monthMax = maxibatallas[month] || [];
  const firstEventDate = new Date(monthMax[0]?.startDate || new Date());
  titleMax.textContent = `Batallas Max de ${month} ${firstEventDate.getFullYear()}`;

  // Preloads dinámicos (mes actual) y prefetch (siguiente mes)
  const nextMonth =
    monthsMax[(monthsMax.indexOf(month) + 1) % monthsMax.length];
  injectResourceHints(monthMax, maxibatallas[nextMonth] || []);

  // Pre-carga para hover shiny
  const shinyImagePairs = monthMax.map((b) => ({
    normal: b.image,
    shiny: b.shiny ? b.shinyImage : null,
  }));
  preloadShinyImages(shinyImagePairs);

  // Render de tarjetas
  const now = new Date();

  monthMax.forEach((batallamax, idx) => {
    const itemMax = document.createElement("div");
    itemMax.className = "col-xl-pantalla col-lg-3 col-sm-6";

    const startDate = new Date(batallamax.startDate);
    const endDate = new Date(batallamax.endDate);

    const itemClass =
      now < startDate ? "date-future" : now > endDate ? "date-past" : "date-active";

    itemMax.innerHTML = `
      <div class="item ${itemClass}" data-inicio="${batallamax.startDate}" data-fin="${batallamax.endDate}">
        <p class="name-counter">${batallamax.name}</p>
        <div class="date-eggs">
          <div class="thumb thumb-counters">
            ${
              batallamax.shiny
                ? `<div class="pokemon-shiny" data-images='["${batallamax.image}", "${batallamax.shinyImage}"]'>
                     <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" />
                   </div>`
                : ``
            }
            <div class="pokemon-types">
              ${batallamax.types
                .map((type) => `<img src="${type}" alt="Tipo" class="type-icon" />`)
                .join("")}
            </div>
            <img
              src="${batallamax.image}"
              alt="${batallamax.name}"
              class="pokemon-imagen"
              ${idx < 8 ? 'fetchpriority="high"' : 'loading="lazy"'}
              decoding="async"
            />
          </div>
          <div class="down-content">
            <div class="dates-counters">
              <img src="${batallamax.eggRaid}" class="eggs-counters" />
              <b class="textdatesalign">
                <span class="fecha-inicio">
                  ${startDate.toLocaleDateString("es-ES", { day: "2-digit", month: "short" })}
                </span>
                <span class="fecha-fin">
                  ${endDate.toLocaleDateString("es-ES", { day: "2-digit", month: "short" })}
                </span>
              </b>
            </div>
          </div>
        </div>
      </div>
    `;

    containerMax.appendChild(itemMax);
  });

  // Reaplica hovers tras re-render
  applyShinyHoverEffects();
}

/* ---------- Init ---------- */

window.addEventListener("load", () => {
  checkAndRenderNextMonthMax();
  // applyShinyHoverEffects(); // Se vuelve a invocar dentro de renderMax
  updateNavigationState();
});
