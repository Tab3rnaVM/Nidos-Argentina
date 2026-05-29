const incursions = {
  Junio: [
    {
      name: "Dialga Oscuro",
      startDate: "2026-06-02T10:00:00",
      endDate: "2026-06-30T10:00:00",
      image: "../../assets/images/pokemon/pm483.SHADOW.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm483.SHADOW.s.icon.webp",
      types: ["../../assets/images/tipos/acero.png", "../../assets/images/tipos/dragon.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5-oscura.png",
      pc20: 2307,
      pc25: 2884,
      link: "#",
    },
    {
      name: "Reshiram",
      startDate: "2026-06-03T10:00:00",
      endDate: "2026-06-09T10:00:00",
      image: "../../assets/images/pokemon/pm643.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm643.s.icon.webp",
      types: ["../../assets/images/tipos/dragon.png", "../../assets/images/tipos/fuego.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
      pc20: 2307,
      pc25: 2884,
      link: "#",
    },
    {
      name: "Mega - Audino",
      startDate: "2026-06-03T10:00:00",
      endDate: "2026-06-09T10:00:00",
      image: "../../assets/images/pokemon/pm531.fMEGA.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm531.fMEGA.s.icon.webp",
      types: ["../../assets/images/tipos/normal.png", "../../assets/images/tipos/hada.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
      pc20: 961,
      pc25: 1201,
      link: "#",
    },
    {
      name: "Zekrom",
      startDate: "2026-06-10T10:00:00",
      endDate: "2026-06-16T10:00:00",
      image: "../../assets/images/pokemon/pm644.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm644.s.icon.webp",
      types: ["../../assets/images/tipos/dragon.png", "../../assets/images/tipos/electrico.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
      pc20: 2307,
      pc25: 2884,
      link: "#",
    },
    {
      name: "Mega - Lopunny",
      startDate: "2026-06-10T10:00:00",
      endDate: "2026-06-16T10:00:00",
      image: "../../assets/images/pokemon/pm428.fMEGA.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm428.fMEGA.s.icon.webp",
      types: ["../../assets/images/tipos/normal.png", "../../assets/images/tipos/pelea.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
      pc20: 1177,
      pc25: 1471,
      link: "#",
    },
    {
      name: "Necrozma",
      startDate: "2026-06-17T10:00:00",
      endDate: "2026-06-23T10:00:00",
      image: "../../assets/images/pokemon/pm800.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm800.s.icon.webp",
      types: ["../../assets/images/tipos/psiquico.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
      pc20: 2104,
      pc25: 2630,
      link: "#",
    },
    {
      name: "Mega - Scizor",
      startDate: "2026-06-17T10:00:00",
      endDate: "2026-06-23T10:00:00",
      image: "../../assets/images/pokemon/pm212.fMEGA.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm212.fMEGA.s.icon.webp",
      types: ["../../assets/images/tipos/insecto.png", "../../assets/images/tipos/acero.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
      pc20: 1714,
      pc25: 2143,
      link: "#",
    },
    {
      name: "Celesteela (Hemisferio Sur)",
      startDate: "2026-06-24T10:00:00",
      endDate: "2026-06-30T10:00:00",
      image: "../../assets/images/pokemon/pm797.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm797.s.icon.webp",
      types: ["../../assets/images/tipos/acero.png", "../../assets/images/tipos/volador.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
      pc20: 1772,
      pc25: 2216,
      link: "#",
    },
    {
      name: "Kartana (Hemisferio Norte)",
      startDate: "2026-06-24T10:00:00",
      endDate: "2026-06-30T10:00:00",
      image: "../../assets/images/pokemon/pm798.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm798.s.icon.webp",
      types: ["../../assets/images/tipos/planta.png", "../../assets/images/tipos/acero.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-nivel-5.png",
      pc20: 2101,
      pc25: 2626,
      link: "#",
    },
    {
      name: "Mega - Pidgeot",
      startDate: "2026-06-24T10:00:00",
      endDate: "2026-06-30T10:00:00",
      image: "../../assets/images/pokemon/pm18.fMEGA.icon.webp",
      shinyImage: "../../assets/images/pokemon/pm18.fMEGA.s.icon.webp",
      types: ["../../assets/images/tipos/normal.png", "../../assets/images/tipos/volador.png"],
      shiny: true,
      eggRaid: "../../assets/images/tipos-incursiones/raid-mega.png",
      pc20: 1216,
      pc25: 1521,
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

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRaidStatus(inc, now) {
  if (Array.isArray(inc.availability) && inc.availability.length) {
    const isActive = inc.availability.some((r) => {
      const rs = new Date(r.startDate);
      const re = new Date(r.endDate);
      return now >= rs && now <= re;
    });
    const firstRangeStart = new Date(inc.availability[0].startDate);
    const lastRangeEnd = new Date(inc.availability[inc.availability.length - 1].endDate);

    if (isActive) return { className: "date-active", label: "Activo" };
    if (now < firstRangeStart) return { className: "date-future", label: "Próximo" };
    if (now > lastRangeEnd) return { className: "date-past", label: "Finalizado" };
    return { className: "date-normal", label: "Rotación" };
  }

  const start = new Date(inc.startDate);
  const end = new Date(inc.endDate);

  if (now < start) return { className: "date-future", label: "Próximo" };
  if (now > end) return { className: "date-past", label: "Finalizado" };
  return { className: "date-active", label: "Activo" };
}

function getCounterHref(inc) {
  return inc.link || "#";
}

/* ---------- Mes actual ---------- */

const months = Object.keys(incursions); // ["Diciembre", "Enero", ...]
let currentMonthIndex = 0;

function renderCurrentMonth() {
  renderIncursions(months[currentMonthIndex]);
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

function formatRaidDateTime(date) {
  try {
    const parts = new Intl.DateTimeFormat("es-AR", {
      day: "2-digit",
      month: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).formatToParts(date);
    const getPart = (type) => parts.find((part) => part.type === type)?.value || "";
    const day = getPart("day");
    const month = getPart("month");
    const hour = getPart("hour");
    const minute = getPart("minute");
    const dayPeriod = getPart("dayPeriod").toLowerCase().replace(/\s/g, "");

    return `${day}/${month} ${hour}:${minute}${dayPeriod}`;
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

    let dateInfo = "";
    const isWeekendStyle = Array.isArray(inc.availability) && inc.availability.length;
    const raidStatus = getRaidStatus(inc, now);
    const start = new Date(inc.startDate);
    const end = new Date(inc.endDate);

    if (isWeekendStyle) {
      dateInfo = `<div class="raid-date-pill raid-date-start"><span>Inicio</span><b>Fines de semana</b></div>`;
    } else {
      dateInfo = `
        <div class="raid-date-pill raid-date-start">
          <span>Inicio</span>
          <b>${formatRaidDateTime(start)}</b>
        </div>
        <div class="raid-date-pill raid-date-end">
          <span>Fin</span>
          <b>${formatRaidDateTime(end)}</b>
        </div>
      `;
    }

    const isHigh = rendered < HIGH_PRIORITY_LIMIT;
    rendered++;
    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';
    const counterHref = getCounterHref(inc);

    card.innerHTML = `
        <div class="item item-link raid-card ${raidStatus.className}" data-inicio="${escapeHTML(inc.startDate || "N/A")}" data-fin="${escapeHTML(inc.endDate || "N/A")}">
          <div class="raid-card-head">
            <span class="raid-status">${raidStatus.label}</span>
            <span class="raid-tier">
              <img src="${escapeHTML(inc.eggRaid)}" alt="" loading="lazy" ${decodingAttr} />
            </span>
          </div>
          <p class="name-counter">${escapeHTML(inc.name)}</p>
          <div class="raid-card-body">
            <div class="thumb thumb-counters raid-thumb">
              ${
                inc.shiny
                  ? `<div class="pokemon-shiny" data-images='["${escapeHTML(inc.image)}", "${escapeHTML(inc.shinyImage)}"]'>
                       <img src="../../assets/images/simbolos-incursiones/shiny.png" alt="shiny" class="shiny-icon" ${decodingAttr} loading="lazy"/>
                     </div>`
                  : ""
              }
              <div class="pokemon-types">
                ${(inc.types || []).map((t) => `<img src="${escapeHTML(t)}" alt="Type" class="type-icon" loading="lazy" ${decodingAttr} />`).join("")}
              </div>
              <img src="${escapeHTML(inc.image)}" alt="${escapeHTML(inc.name)}" class="pokemon-imagen" ${priorityAttr} ${decodingAttr} />
            </div>
            <div class="raid-info">
              <div class="raid-date-range">
                ${dateInfo}
              </div>
              ${
                inc.pc20 && inc.pc25
                  ? `<div class="raid-weather-box">
                      <div class="raid-weather-row">
                        <span class="raid-weather-label raid-weather-label-neutral">Sin Clima</span>
                        <b>${inc.pc20}</b>
                      </div>
                      <div class="raid-weather-row">
                        <span class="raid-weather-label raid-weather-label-boosted">Clima a favor</span>
                        <b>${inc.pc25}</b>
                      </div>
                    </div>`
                  : ""
              }
            </div>
          </div>
          <a class="raid-counter-button" href="${escapeHTML(counterHref)}">Ver counter</a>
          ${inc.bonus ? `<p class="bonus-horadestacada">${inc.bonus}</p>` : ""}
        </div>
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
  renderCurrentMonth();
  applyShinyHoverEffects();
});
