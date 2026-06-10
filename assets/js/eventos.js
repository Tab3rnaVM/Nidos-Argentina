const eventos = {
  destacados: [
    {
      name: "Día de incursiones de Mega-Kangaskhan",
      startDate: "2025-05-03T14:00:00",
      endDate: "2025-05-03T17:00:00",
      image: "../assets/images/eventos/eventodestacado45.webp",
      link: "/eventos/dia-incursiones-mega-kangaskhan",
    },
    {
      name: "Fin de Semana de Combates Max de Suicune Dinamax",
      startDate: "2025-05-10T06:00:00",
      endDate: "2025-05-11T21:00:00",
      image: "../assets/images/eventos/eventodestacado47.webp",
      link: "/eventos/fin-de-semana-combates-max-suicune",
    }, 
    {
      name: "Choque de coronas",
      startDate: "2025-05-10T10:00:00",
      endDate: "2025-05-18T20:00:00",
      image: "../assets/images/eventos/eventodestacado46.webp",
      link: "/eventos/choque-de-coronas",
    },
    {
      name: "Día de la Comunidad: Pawmi",
      startDate: "2025-05-11T14:00:00",
      endDate: "2025-05-11T17:00:00",
      image: "../assets/images/eventos/eventodestacado49.webp",
      link: "/dias-de-la-comunidad",
    },
    {
      name: "Choque de coronas: Toma de control",
      startDate: "2025-05-14T00:00:00",
      endDate: "2025-05-18T23:59:00",
      image: "../assets/images/eventos/eventodestacado48.webp",
      link: "/eventos/choque-de-coronas-toma-de-control",
    }, 
    {
      name: "Día de incursiones oscuras de Regigigas",
      startDate: "2025-05-17T14:00:00",
      endDate: "2025-05-17T17:00:00",
      image: "../assets/images/eventos/eventodestacado50.webp",
      link: "/eventos/dia-de-incursiones-oscuras-regigigas",
    },
    {
      name: "Golpe definitivo: Semana de Combates GO",
      startDate: "2025-05-21T10:00:00",
      endDate: "2025-05-27T20:00:00",
      image: "../assets/images/eventos/eventodestacado51.webp",
      link: "/eventos/golpe-definitivo-semana-de-combates-go",
    },
    {
      name: "Día de la Comunidad Clásico: Machop",
      startDate: "2025-05-24T14:00:00",
      endDate: "2025-05-24T17:00:00",
      image: "../assets/images/eventos/eventodestacado52.webp",
      link: "/dias-de-la-comunidad",
    },
    {
      name: "Día de Combates Max de Machamp Gigamax",
      startDate: "2025-05-25T14:00:00",
      endDate: "2025-05-25T17:00:00",
      image: "../assets/images/eventos/eventodestacado53.webp",
      link: "/eventos/dia-de-combates-max-machamp-gigamax",
    },
    {
      name: "Tras las huellas de Yamper",
      startDate: "2025-06-20T00:00:00",
      endDate: "2025-06-22T23:59:00",
      image: "../assets/images/eventos/eventodestacado54.webp",
      link: "/eventos/tras-las-huellas-de-yamper",
    },
    {
      name: "Día de la Comunidad: Jangmo-o",
      startDate: "2025-06-21T14:00:00",
      endDate: "2025-06-21T17:00:00",
      image: "../assets/images/eventos/eventodestacado55.webp",
      link: "/dias-de-la-comunidad",
    },
    {
      name: "Restauración ancestral",
      startDate: "2025-06-23T10:00:00",
      endDate: "2025-06-27T20:00:00",
      image: "../assets/images/eventos/eventodestacado56.webp",
      link: "/eventos/restauracion-ancestral",
    },
    {
      name: "Día de la Comunidad Clásico: Eevee",
      startDate: "2025-07-05T14:00:00",
      endDate: "2025-07-06T17:00:00",
      image: "../assets/images/eventos/eventodestacado57.webp",
      link: "/dias-de-la-comunidad",
    },
    {
      name: "Celebración de Kanto",
      startDate: "2025-09-02T10:00:00",
      endDate: "2025-09-07T20:00:00",
      image: "../assets/images/eventos/eventodestacado59.webp",
      link: "https://pokemongo.com/es_mx/post/pokemongo-kanto-celebration-2025",
    },
    {
      name: "Día de incursiones de Mega-Sharpedo",
      startDate: "2025-09-07T14:00:00",
      endDate: "2025-09-07T17:00:00",
      image: "../assets/images/eventos/eventodestacado60.webp",
      link: "https://pokemongo.com/es_MX/news/mega-sharpedo-raid-day-2025",
    },
    {
      name: "Evento de Celebración de Concierge Pokémon",
      startDate: "2025-09-09T10:00:00",
      endDate: "2025-09-14T20:00:00",
      image: "../assets/images/eventos/eventodestacado58.webp",
      link: "https://pokemongo.com/es_mx/post/pokemon-concierge-2025",
    },
    {
      name: "Psicoespectáculo: Invasión",
      startDate: "2025-09-16T10:00:00",
      endDate: "2025-09-14T20:00:00",
      image: "../assets/images/eventos/eventodestacado61.webp",
      link: "https://pokemongo.com/es_mx/post/psychic-spectacular-tgr-2025",
    },
    {
      name: "Fin de Semana de Incursiones oscuras de Groudon",
      startDate: "2025-09-20T06:00:00",
      endDate: "2025-09-21T22:00:00",
      image: "../assets/images/eventos/eventodestacado62.webp",
      link: "https://pokemongo.com/es_mx/post/shadow-groudon-raid-weekend-2025",
    },
    {
      name: "Festival de la Cosecha",
      startDate: "2025-10-10T10:00:00",
      endDate: "2025-10-16T20:00:00",
      image: "../assets/images/eventos/eventodestacado63.webp",
      link: "https://pokemongo.com/es_mx/post/harvest-festival-2025",
    },
    {
      name: "Evento de celebración de Leyendas Pokémon: Z-A",
      startDate: "2025-10-16T10:00:00",
      endDate: "2025-10-20T20:00:00",
      image: "../assets/images/eventos/eventodestacado70.webp",
      link: "https://pokemongo.com/es_MX/news/pokemon-legends-z-a-celebration",
    },
    {
      name: "Día de incursiones de Mega-Rayquaza",
      startDate: "2025-10-18T14:00:00",
      endDate: "2025-10-18T17:00:00",
      image: "../assets/images/eventos/eventodestacado64.webp",
      link: "https://pokemongo.com/es_MX/news/mega-rayquaza-raid-day-2025",
    },
    {
      name: "Halloween 2025: Parte I",
      startDate: "2025-10-21T10:00:00",
      endDate: "2025-10-27T10:00:00",
      image: "../assets/images/eventos/eventodestacado69.webp",
      link: "https://pokemongo.com/es_MX/news/halloween-part-1-2025",
    },
    {
      name: "Halloween 2025: Parte II",
      startDate: "2025-10-27T10:00:00",
      endDate: "2025-11-02T10:00:00",
      image: "../assets/images/eventos/eventodestacado68.webp",
      link: "https://pokemongo.com/es_MX/news/halloween-part-2-2025",
    },
    {
      name: "Día de Combates Max de Garbodor Gigamax",
      startDate: "2025-11-01T14:00:00",
      endDate: "2025-11-01T17:00:00",
      image: "../assets/images/eventos/eventodestacado67.webp",
      link: "https://pokemongo.com/es_MX/news/gigantamax-garbodor-max-battle-day",
    },
    {
      name: "Claro encantado",
      startDate: "2025-11-04T10:00:00",
      endDate: "2025-11-09T20:00:00",
      image: "../assets/images/eventos/eventodestacado72.webp",
      link: "https://pokemongo.com/es_MX/news/enchanted-hollow-2025",
    },
    {
      name: "Una expedición silvestre",
      startDate: "2025-11-10T14:00:00",
      endDate: "2025-11-14T17:00:00",
      image: "../assets/images/eventos/eventodestacado66.webp",
      link: "https://pokemongo.com/es_MX/news/into-the-wild-2025",
    },
    {
      name: "Área Silvestre de Pokémon GO: Global",
      startDate: "2025-11-15T10:00:00",
      endDate: "2025-11-16T18:00:00",
      image: "../assets/images/eventos/eventodestacado65.webp",
      link: "https://pokemongo.com/gowildarea/global",
    },
    {
      name: "Safari de Ciudad: Buenos Aires, Argentina",
      startDate: "2025-12-13T10:00:00",
      endDate: "2025-12-14T18:00:00",
      image: "../assets/images/eventos/eventodestacado71.webp",
      link: "https://pokemongo.com/es_MX/events/citysafari/buenos-aires",
    },
    {
      name: "Blanche y la búsqueda del conocimiento",
      startDate: "2026-05-26T10:00:00",
      endDate: "2026-06-01T20:00:00",
      image: "../assets/images/eventos/eventodestacado73.webp",
      link: "https://pokemongo.com/es_MX/news/enchanted-hollow-2025",
    },
    {
      name: "Pase de GO: junio",
      startDate: "2026-06-02T10:00:00",
      endDate: "2026-07-07T10:00:00",
      image: "../assets/images/eventos/eventodestacado75.webp",
      link: "https://pokemongo.com/es_MX/news/go-pass-june-2026",
    },
    {
      name: "Candela y la búsqueda de la victoria",
      startDate: "2026-06-09T10:00:00",
      endDate: "2026-06-15T20:00:00",
      image: "../assets/images/eventos/eventodestacado76.webp",
      link: "https://pokemongo.com/es_MX/news/global-events-gofest2026-overlays",
    },
    {
      name: "Día de la Comunidad de junio de 2026: Frigibax",
      startDate: "2026-06-20T14:00:00",
      endDate: "2026-06-20T17:00:00",
      image: "../assets/images/eventos/eventodestacado74.webp",
      link: "https://pokemongo.com/es_MX/news/communityday-june-2026-frigibax",
    },
    {
      name: "Taxi volador",
      startDate: "2026-06-23T10:00:00",
      endDate: "2026-06-29T20:00:00",
      image: "../assets/images/eventos/eventodestacado78.webp",
      link: "https://pokemongo.com/es_MX/news/flying-taxi-2026",
    },
    {
      name: "Taxi volador: Invasión",
      startDate: "2026-06-25T00:00:00",
      endDate: "2026-06-29T20:00:00",
      image: "../assets/images/eventos/eventodestacado79.webp",
      link: "https://pokemongo.com/es_MX/news/flying-taxi-taken-over-2026",
    },
    
  ],
  pasados: [],
};

let currentEventType = "destacados";

/* ---------- Resource Hints helpers ---------- */

function setResourceLinks(urls, { rel = "preload", as = "image", dataTag = "eventos-hint", limit = 24 } = {}) {
  // Limpia hints previos de este módulo
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

function setPreloads(urls, limit = 12) {
  setResourceLinks(urls, { rel: "preload", as: "image", dataTag: "eventos-preload", limit });
}

function setPrefetch(urls, limit = 48) {
  setResourceLinks(urls, { rel: "prefetch", as: "", dataTag: "eventos-prefetch", limit });
}

function collectEventImageURLs(list) {
  return list.map((e) => e.image).filter(Boolean);
}

function injectHintsForList(list, isIndex) {
  const all = collectEventImageURLs(list);
  const PRELOAD_LIMIT = isIndex ? 4 : 12; // en index hay menos tarjetas en “above the fold”
  setPreloads(all.slice(0, PRELOAD_LIMIT), PRELOAD_LIMIT);
  setPrefetch(all.slice(PRELOAD_LIMIT));
}

/* ---------- Calendar helpers ---------- */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeICSText(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function formatCalendarDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function createEventSlug(name) {
  return String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function getAbsoluteEventURL(url) {
  try {
    return new URL(url, window.location.origin).href;
  } catch {
    return window.location.href;
  }
}

function getCalendarEventFromItem(item) {
  return {
    name: item.dataset.title || "Evento de Pokémon GO",
    startDate: item.dataset.inicio,
    endDate: item.dataset.fin,
    link: item.dataset.link || window.location.href,
  };
}

function buildGoogleCalendarURL(evento) {
  const startDate = formatCalendarDate(new Date(evento.startDate));
  const endDate = formatCalendarDate(new Date(evento.endDate));
  const details = `Evento de Nidos Argentina. Más información: ${getAbsoluteEventURL(evento.link)}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: evento.name,
    dates: `${startDate}/${endDate}`,
    details,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildICSContent(evento) {
  const startDate = formatCalendarDate(new Date(evento.startDate));
  const endDate = formatCalendarDate(new Date(evento.endDate));
  const now = formatCalendarDate(new Date());
  const absoluteURL = getAbsoluteEventURL(evento.link);
  const uid = `${createEventSlug(evento.name)}-${startDate}@nidosargentina.com`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nidos Argentina//Eventos Pokemon GO//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${escapeICSText(evento.name)}`,
    `DESCRIPTION:${escapeICSText(`Evento de Nidos Argentina. Más información: ${absoluteURL}`)}`,
    `URL:${absoluteURL}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeICSText(`Recordatorio: ${evento.name}`)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadICS(evento) {
  const fileName = `${createEventSlug(evento.name) || "evento-nidos"}.ics`;
  const blob = new Blob([buildICSContent(evento)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function closeCalendarMenus(exceptMenu = null) {
  document.querySelectorAll(".calendar-menu").forEach((menu) => {
    if (menu === exceptMenu) return;
    menu.hidden = true;
    menu.closest(".itemdate")?.classList.remove("calendar-open");
    const toggle = menu.closest(".calendar-actions")?.querySelector(".calendar-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("click", (event) => {
  const toggle = event.target.closest(".calendar-toggle");

  if (toggle) {
    const menu = toggle.closest(".calendar-actions")?.querySelector(".calendar-menu");
    if (!menu) return;

    const shouldOpen = menu.hidden;
    closeCalendarMenus(menu);
    menu.hidden = !shouldOpen;
    toggle.closest(".itemdate")?.classList.toggle("calendar-open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    return;
  }

  const calendarAction = event.target.closest("[data-calendar-action]");
  if (calendarAction) {
    const item = calendarAction.closest(".itemdate");
    if (!item) return;

    const evento = getCalendarEventFromItem(item);
    if (calendarAction.dataset.calendarAction === "google") {
      window.open(buildGoogleCalendarURL(evento), "_blank", "noopener,noreferrer");
    } else {
      downloadICS(evento);
    }

    closeCalendarMenus();
    return;
  }

  if (!event.target.closest(".calendar-actions")) {
    closeCalendarMenus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCalendarMenus();
  }
});

/* ---------- Mover finalizados a pasados ---------- */

function actualizarEventos() {
  const currentDate = new Date();
  const finales = eventos.destacados.filter((ev) => new Date(ev.endDate) < currentDate);
  if (finales.length) {
    eventos.pasados.push(...finales);
    eventos.destacados = eventos.destacados.filter((ev) => new Date(ev.endDate) >= currentDate);
  }
}

/* ---------- Countdown (evita múltiples intervals) ---------- */

let countdownIntervalId = null;

function actualizarTiempoRestante() {
  const now = new Date();

  document.querySelectorAll(".itemdate").forEach((item) => {
    const startDate = new Date(item.dataset.inicio);
    const endDate = new Date(item.dataset.fin);
    const el = item.querySelector(".tiempo-restante");
    if (!el) return;

    let diff = 0;
    let label = "";

    if (now < startDate) {
      diff = startDate - now;
      label = "Comienza en:";
    } else if (now > endDate) {
      el.innerHTML = `<strong>Terminado</strong>`;
      return;
    } else {
      diff = endDate - now;
      label = "Termina en:";
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    let tiempo = "";
    if (dias > 0) tiempo += `${dias} día${dias > 1 ? "s" : ""}, `;
    if (horas > 0 || dias > 0) tiempo += `${horas} hora${horas > 1 ? "s" : ""}, `;
    tiempo += `${minutos} minuto${minutos > 1 ? "s" : ""}`;

    el.innerHTML = `<strong>${label}</strong><span>${tiempo}</span>`;
  });
}

/* ---------- Render ---------- */

function renderEventos(isIndex = false) {
  const container = document.getElementById(isIndex ? "indexEventList" : "eventContainer");
  const title = document.getElementById("eventTitle");

  if (!container) return;

  if (!isIndex && title) {
    title.textContent = "Eventos destacados";
  }

  container.innerHTML = "";

  const lista = eventos[currentEventType] || [];
  const now = new Date();

  const toRender = isIndex
    ? lista.filter((e) => new Date(e.endDate) > now).slice(0, 3)
    : lista;

  // Hints (preload/prefetch) antes de pintar
  injectHintsForList(toRender, isIndex);

  // Render
  const HIGH_PRIORITY_LIMIT = isIndex ? 3 : 8;
  let renderCount = 0;

  toRender.forEach((evento) => {
    const startDate = new Date(evento.startDate);
    const endDate = new Date(evento.endDate);

    let itemClass = "";
    if (now < startDate) itemClass = "date-future";
    else if (now > endDate) itemClass = "date-past";
    else itemClass = "date-active";

    const statusLabel = itemClass === "date-active" ? "En curso" : itemClass === "date-future" ? "Próximo" : "Finalizado";

    const isHigh = renderCount < HIGH_PRIORITY_LIMIT;
    renderCount++;

    const priorityAttr = isHigh ? 'fetchpriority="high"' : 'loading="lazy"';
    const decodingAttr = 'decoding="async"';

    const card = document.createElement("div");
    card.className = `col-xl-3 col-lg-4 col-sm-6`;

    card.innerHTML = `
        <div
          class="item itemdate ${itemClass}"
          data-inicio="${escapeHTML(evento.startDate)}"
          data-fin="${escapeHTML(evento.endDate)}"
          data-title="${escapeHTML(evento.name)}"
          data-link="${escapeHTML(evento.link)}"
        >
          <a class="event-card-link" href="${escapeHTML(evento.link)}" target="_blank" rel="noopener noreferrer">
          <div class="event-image">
              <img src="${escapeHTML(evento.image)}" alt="${escapeHTML(evento.name)}" ${priorityAttr} ${decodingAttr}/>
          </div>
          </a>
          <div class="event-details">
            <span class="event-status">${statusLabel}</span>
            <a class="event-title-link" href="${escapeHTML(evento.link)}" target="_blank" rel="noopener noreferrer">
              <h4>${escapeHTML(evento.name)}</h4>
            </a>
            <p class="tiempo-restante"></p>
            <div class="event-card-actions">
              <a class="event-view-button" href="${escapeHTML(evento.link)}" target="_blank" rel="noopener noreferrer">Ver</a>
              <div class="calendar-actions">
                <button class="calendar-toggle" type="button" aria-expanded="false">
                  <i class="fa fa-calendar-plus" aria-hidden="true"></i>
                  Agendar en calendario
                </button>
                <div class="calendar-menu" hidden>
                  <button type="button" data-calendar-action="google">Google Calendar</button>
                  <button type="button" data-calendar-action="ics">Apple / Outlook</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;

    container.appendChild(card);
  });

  // Actualiza contador inmediatamente
  actualizarTiempoRestante();

  // Reinicia intervalo (uno solo)
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
  }
  countdownIntervalId = setInterval(actualizarTiempoRestante, 60_000);
}

/* ---------- Init ---------- */

actualizarEventos();

if (document.getElementById("indexEventList")) {
  // Render reducido para el índice
  renderEventos(true);
} else {
  // Render completo de eventos actuales y futuros.
  currentEventType = "destacados";
  renderEventos(false);
}
