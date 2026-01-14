(function () {
  // =========================
  // BASE PATH (local + GitHub Pages + dominio)
  // =========================
  function getBasePath() {
    const isGithubIo = location.hostname.endsWith("github.io");
    if (!isGithubIo) return "/";

    const parts = location.pathname.split("/").filter(Boolean);
    const repo = parts.length ? parts[0] : "";
    return repo ? `/${repo}/` : "/";
  }

  const BASE = getBasePath();

  function withBase(path) {
    path = String(path || "").replace(/^\/+/, "");
    return `${BASE}${path}`;
  }

  // =========================
  // HTML del header
  // =========================
  const headerHTML = `
<header class="header-area header-sticky">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="main-nav">
          <a href="${BASE}" class="logo desktop">
            <img src="${withBase("assets/images/logo/logodesk.png")}" alt="Nidos Argentina" />
          </a>
          <a href="${BASE}" class="logo mobile">
            <img src="${withBase("assets/images/logo/logomobile.png")}" alt="Nidos Argentina" />
          </a>

          <ul class="nav">
            <!-- SOLO MOBILE -->
            <li class="mobile-only dropdown">
              <a href="#" class="dropdown-toggle">Más Info</a>
              <ul class="dropdown-menu">
                <li><a href="${withBase("rotacion-de-temporada/")}">Rotación de temporada</a></li>
                <li><a href="${withBase("incursiones/")}">Incursiones</a></li>
                <li><a href="${withBase("batallas-max/")}">Batallas Max</a></li>
                <li><a href="${withBase("horas-destacadas/")}">Horas destacadas</a></li>
                <li><a href="${withBase("horas-legendarias/")}">Horas legendarias</a></li>
                <li><a href="${withBase("lunes-max/")}">Lunes Max</a></li>
                <li><a href="${withBase("investigaciones-de-campo/")}">Investigaciones de campo</a></li>
                <li><a href="${withBase("equipo-go-rocket/")}">Equipo GO Rocket</a></li>
                <li><a href="${withBase("dias-de-la-comunidad/")}">Días de la comunidad</a></li>
              </ul>
            </li>

            <li><a href="${withBase("eventos/")}">Eventos</a></li>
            <li><a href="${withBase("counters/")}">Counters</a></li>
            <li><a href="${withBase("atacantes/")}">Mejores Atacantes</a></li>
            <li><a href="${withBase("shinycheck/")}">Shiny Check</a></li>
            <li><a href="${withBase("tienda/")}">Tienda</a></li>

            <li><a href="https://paypal.me/nidosarg" target="_blank" rel="noopener noreferrer" id="donacion">Donar</a></li>

            <li>
              <a href="${withBase("nosotros/")}">
                <img src="${withBase("assets/images/logo/logo-social.jpg")}" alt="Nosotros" />
              </a>
            </li>
          </ul>

          <a class="menu-trigger">
            <span>Menu</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</header>`;

  // =========================
  // Active link (compara rutas normalizadas)
  // =========================
  function normalizePath(p) {
    p = (p || "").split("?")[0].split("#")[0];

    try {
      p = new URL(p, location.origin).pathname;
    } catch {}

    // quita base del repo si aplica
    if (BASE !== "/" && p.startsWith(BASE)) p = p.slice(BASE.length - 1);

    if (!p.endsWith("/")) p += "/";
    return p;
  }

  function markActiveLink() {
    const current = normalizePath(location.pathname);

    document.querySelectorAll(".nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("http")) return;

      const target = normalizePath(href);
      if (target === current) a.classList.add("active");
    });
  }

  // =========================
  // Dropdown mobile "Más Info"
  // =========================
  function bindDropdown() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (!dropdownToggle || !dropdownMenu) return;

    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownMenu.classList.toggle("open");

      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) menu.classList.remove("open");
      });
    });

    document.addEventListener("click", function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("open");
      }
    });
  }

  // =========================
  // FIX: Asegurar menú hamburguesa siempre
  // =========================
  function bindHamburger() {
    const trigger = document.querySelector(".menu-trigger");
    const nav = document.querySelector(".header-area .nav");
    if (!trigger || !nav) return;

    // Evita doble binding (si entras a la misma página o reinsertas)
    if (trigger.dataset.bound === "1") return;
    trigger.dataset.bound = "1";

    // Handler sin jQuery
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      trigger.classList.toggle("active");

      // Si jQuery existe, usa el slideToggle del template
      if (window.jQuery && window.jQuery(nav).slideToggle) {
        window.jQuery(nav).stop(true, true).slideToggle(200);
        return;
      }

      // Fallback vanilla
      const isHidden = getComputedStyle(nav).display === "none";
      nav.style.display = isHidden ? "block" : "none";
    });
  }

  // =========================
  // Insertar header
  // =========================
  function insertHeader() {
    // Si por alguna razón ya existe header, no lo dupliques
    if (document.querySelector("header.header-area")) return;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    markActiveLink();
    bindDropdown();

    // Importante: aseguramos binding del menú hamburguesa
    bindHamburger();
  }

  // =========================
  // Arranque correcto
  // - Si cargas menu.js con defer, body ya existe => insertHeader inmediato
  // =========================
  if (document.body) {
    insertHeader();

    // Por si custom.js ejecuta después y hace cosas, reintentamos una vez
    // (esto no duplica por dataset.bound)
    setTimeout(bindHamburger, 0);
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      insertHeader();
      setTimeout(bindHamburger, 0);
    });
  }
})();
