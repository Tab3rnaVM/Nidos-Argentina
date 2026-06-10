const maxBattles = [
  {
    name: "Inkay",
    startDate: "2026-06-01T06:00:00",
    endDate: "2026-06-07T21:00:00",
    image: "../../assets/images/pokemon/pm686.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm686.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/siniestro.png", "../../assets/images/tipos/psiquico.png"],
    shiny: true,
    badge: "../../assets/images/tipos-incursiones/dinamax.png",
    pc20: 529,
    pc25: 662,
  },
  {
    name: "Electabuzz",
    startDate: "2026-06-08T06:00:00",
    endDate: "2026-06-14T21:00:00",
    image: "../../assets/images/pokemon/pm125.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm125.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/electrico.png"],
    shiny: true,
    badge: "../../assets/images/tipos-incursiones/dinamax.png",
    pc20: 1333,
    pc25: 1667,
  },
  {
    name: "Roggenrola",
    startDate: "2026-06-15T06:00:00",
    endDate: "2026-06-21T21:00:00",
    image: "../../assets/images/pokemon/pm524.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm524.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/roca.png"],
    shiny: true,
    badge: "../../assets/images/tipos-incursiones/dinamax.png",
    pc20: 688,
    pc25: 860,
  },
  {
    name: "Hoothoot",
    startDate: "2026-06-22T06:00:00",
    endDate: "2026-06-28T21:00:00",
    image: "../../assets/images/pokemon/pm163.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm163.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/normal.png", "../../assets/images/tipos/volador.png"],
    shiny: true,
    badge: "../../assets/images/tipos-incursiones/dinamax.png",
    pc20: 387,
    pc25: 484,
  },
  {
    name: "Pidove",
    startDate: "2026-06-29T06:00:00",
    endDate: "2026-07-05T21:00:00",
    image: "../../assets/images/pokemon/pm519.MAX.icon.webp",
    shinyImage: "../../assets/images/pokemon/pm519.MAX.s.icon.webp",
    types: ["../../assets/images/tipos/normal.png", "../../assets/images/tipos/volador.png"],
    shiny: true,
    badge: "../../assets/images/tipos-incursiones/dinamax.png",
    pc20: 484,
    pc25: 605,
  },
];

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setResourceLinksMax(urls, { rel = "preload", as = "image", dataTag = "max-current", limit = 16 } = {}) {
  document.head
    .querySelectorAll(`link[rel="${rel}"][data-tag="${dataTag}"]`)
    .forEach((node) => node.remove());

  [...new Set(urls)].slice(0, limit).forEach((href) => {
    if (!href) return;
    const link = document.createElement("link");
    link.rel = rel;
    if (as) link.as = as;
    link.href = href;
    link.dataset.tag = dataTag;
    document.head.appendChild(link);
  });
}

function preloadMaxImages(list) {
  const urls = list.flatMap((battle) => [battle.image, battle.shiny ? battle.shinyImage : null, battle.badge]).filter(Boolean);
  setResourceLinksMax(urls);
}

function formatMaxDateTime(date) {
  try {
    const parts = new Intl.DateTimeFormat("es-AR", {
      day: "numeric",
      month: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).formatToParts(date);
    const getPart = (type) => parts.find((part) => part.type === type)?.value || "";
    const dayPeriod = getPart("dayPeriod").toLowerCase().replace(/\s/g, "");

    return `${getPart("day")}/${getPart("month")} ${getPart("hour")}:${getPart("minute")}${dayPeriod}`;
  } catch {
    return "";
  }
}

function getMaxStatus(battle, now) {
  const start = new Date(battle.startDate);
  const end = new Date(battle.endDate);

  if (now < start) return { className: "date-future", label: "Próximo" };
  if (now > end) return { className: "date-past", label: "Finalizado" };
  return { className: "date-active", label: "Activo" };
}

function renderMaxBattles() {
  const container = document.getElementById("batallasMaxContainer");
  if (!container) return;

  container.innerHTML = "";
  preloadMaxImages(maxBattles);

  const now = new Date();

  maxBattles.forEach((battle, index) => {
    const status = getMaxStatus(battle, now);
    const start = new Date(battle.startDate);
    const end = new Date(battle.endDate);
    const card = document.createElement("div");
    card.className = "col-xl-pantalla col-lg-3 col-sm-6";

    card.innerHTML = `
      <div class="item item-link raid-card max-raid-card ${status.className}" data-inicio="${escapeHTML(battle.startDate)}" data-fin="${escapeHTML(battle.endDate)}">
        <div class="raid-card-head">
          <span class="raid-status">${escapeHTML(status.label)}</span>
          <span class="raid-tier">
            <img src="${escapeHTML(battle.badge)}" alt="" loading="lazy" decoding="async" />
          </span>
        </div>
        <p class="name-counter">${escapeHTML(battle.name)}</p>
        <div class="raid-card-body">
          <div class="thumb thumb-counters raid-thumb">
            ${
              battle.shiny
                ? `<button class="pokemon-shiny max-shiny-trigger" type="button" data-images='["${escapeHTML(battle.image)}", "${escapeHTML(battle.shinyImage)}"]' aria-label="Ver shiny de ${escapeHTML(battle.name)}">
                     <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="" class="shiny-icon" loading="lazy" decoding="async" />
                   </button>`
                : ""
            }
            <div class="pokemon-types">
              ${(battle.types || []).map((type) => `<img src="${escapeHTML(type)}" alt="" class="type-icon" loading="lazy" decoding="async" />`).join("")}
            </div>
            <img
              src="${escapeHTML(battle.image)}"
              alt="${escapeHTML(battle.name)}"
              class="pokemon-imagen"
              ${index < 5 ? 'fetchpriority="high"' : 'loading="lazy"'}
              decoding="async"
            />
          </div>
          <div class="raid-info">
            <div class="raid-date-range">
              <div class="raid-date-pill raid-date-start">
                <span>Inicio</span>
                <b>${escapeHTML(formatMaxDateTime(start))}</b>
              </div>
              <div class="raid-date-pill raid-date-end">
                <span>Fin</span>
                <b>${escapeHTML(formatMaxDateTime(end))}</b>
              </div>
            </div>
            <div class="raid-weather-box">
              <div class="raid-weather-row">
                <span class="raid-weather-label raid-weather-label-neutral">Sin Clima</span>
                <b>${battle.pc20}</b>
              </div>
              <div class="raid-weather-row">
                <span class="raid-weather-label raid-weather-label-boosted">Clima a favor</span>
                <b>${battle.pc25}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  applyMaxShinyHoverEffects();
}

function applyMaxShinyHoverEffects() {
  document.querySelectorAll(".max-shiny-trigger").forEach((trigger) => {
    const images = JSON.parse(trigger.getAttribute("data-images") || "[]");
    const pokemonImage = trigger.closest(".thumb-counters")?.querySelector(".pokemon-imagen");
    if (!pokemonImage || !images[0] || !images[1]) return;

    trigger.addEventListener("mouseenter", () => {
      pokemonImage.src = images[1];
    });
    trigger.addEventListener("mouseleave", () => {
      pokemonImage.src = images[0];
    });
    trigger.addEventListener("focus", () => {
      pokemonImage.src = images[1];
    });
    trigger.addEventListener("blur", () => {
      pokemonImage.src = images[0];
    });
  });
}

window.addEventListener("load", renderMaxBattles);
