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
  const firebaseConfig = {
    apiKey: "AIzaSyBpqarYah2XVHmkk2tLGrUhLNVmP20x6kM",
    authDomain: "shinychecknidosarg.firebaseapp.com",
    projectId: "shinychecknidosarg",
    storageBucket: "shinychecknidosarg.appspot.com",
    messagingSenderId: "563681136537",
    appId: "1:563681136537:web:14562744c07efccdac4d08",
    measurementId: "G-JW2E3B1C7D",
  };

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

          <ul class="nav" id="primary-navigation">
            <!-- SOLO MOBILE -->
            <li class="mobile-only dropdown">
              <button class="dropdown-toggle" type="button" aria-expanded="false" aria-controls="more-info-menu">Más Info</button>
              <ul class="dropdown-menu" id="more-info-menu">
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
            <li><a href="${withBase("nosotros/")}">Nosotros</a></li>
            <li><a href="${withBase("tienda/")}">Tienda</a></li>

            <li><a href="https://paypal.me/nidosarg" target="_blank" rel="noopener noreferrer" id="donacion">Donar</a></li>

            <li class="nav-login-item">
              <button id="navLoginButton" class="nav-login-button" type="button" aria-label="Iniciar sesión con Google" aria-expanded="false" aria-controls="navLoginMenu">
                <i class="fab fa-google" aria-hidden="true"></i>
                <span>Ingresar</span>
              </button>
              <div id="navLoginMenu" class="nav-login-menu" hidden>
                <button id="navLogoutButton" class="nav-login-menu-option" type="button">Cerrar sesión</button>
              </div>
            </li>
          </ul>

          <button class="menu-trigger" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-navigation">
            <span>Menu</span>
          </button>
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
      const isOpen = dropdownMenu.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", String(isOpen));

      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("open");
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        dropdownMenu.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
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
      const isExpanded = trigger.classList.contains("active");
      trigger.setAttribute("aria-expanded", String(isExpanded));
      trigger.setAttribute("aria-label", isExpanded ? "Cerrar menú" : "Abrir menú");

      // Si jQuery existe, usa el slideToggle del template
      if (window.jQuery && window.jQuery(nav).slideToggle) {
        window.jQuery(nav).stop(true, true).slideToggle(200);
        return;
      }

      // Fallback vanilla
      const isHidden = getComputedStyle(nav).display === "none";
      nav.style.display = isHidden ? "block" : "none";
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || !trigger.classList.contains("active")) return;
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-label", "Abrir menú");

      if (window.jQuery && window.jQuery(nav).slideUp) {
        window.jQuery(nav).stop(true, true).slideUp(200);
      } else {
        nav.style.display = "none";
      }
    });
  }

  // =========================
  // Login global (usa Firebase si ya está disponible)
  // =========================
  function shortName(name) {
    const parts = String(name || "Usuario").trim().split(/\s+/);
    if (!parts[0]) return "Usuario";
    return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : parts[0];
  }

  function setLoginButton(user) {
    const button = document.getElementById("navLoginButton");
    const menu = document.getElementById("navLoginMenu");
    if (!button) return;

    if (user) {
      button.classList.add("is-logged-in");
      button.setAttribute("aria-label", `Abrir menú de cuenta de ${user.displayName || user.email || "usuario"}`);
      button.setAttribute("aria-haspopup", "menu");
      button.innerHTML = `<i class="fas fa-user-circle" aria-hidden="true"></i><span>${shortName(user.displayName || user.email)}</span><i class="fas fa-chevron-down nav-login-chevron" aria-hidden="true"></i>`;
    } else {
      button.classList.remove("is-logged-in");
      button.setAttribute("aria-label", "Iniciar sesión con Google");
      button.removeAttribute("aria-haspopup");
      button.innerHTML = `<i class="fab fa-google" aria-hidden="true"></i><span>Ingresar</span>`;
      closeLoginMenu();
    }

    if (menu && !user) menu.hidden = true;
  }

  function closeLoginMenu() {
    const button = document.getElementById("navLoginButton");
    const menu = document.getElementById("navLoginMenu");
    if (!button || !menu) return;

    button.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }

  function toggleLoginMenu(forceOpen) {
    const button = document.getElementById("navLoginButton");
    const menu = document.getElementById("navLoginMenu");
    if (!button || !menu) return;

    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : menu.hidden;
    button.setAttribute("aria-expanded", String(shouldOpen));
    menu.hidden = !shouldOpen;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        if (existing.dataset.loaded === "1") resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = () => {
        script.dataset.loaded = "1";
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function ensureFirebaseAuth() {
    if (!window.firebase || !firebase.auth) {
      await loadScript("https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js");
      await loadScript("https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js");
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    return firebase.auth();
  }

  function bindGlobalLogin() {
    const button = document.getElementById("navLoginButton");
    const logoutButton = document.getElementById("navLogoutButton");
    if (!button || button.dataset.bound === "1") return;
    button.dataset.bound = "1";

    button.addEventListener("click", async function () {
      try {
        button.disabled = true;
        const auth = await ensureFirebaseAuth();
        const user = auth.currentUser;

        if (user) {
          toggleLoginMenu();
          return;
        }

        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error(error);
      } finally {
        button.disabled = false;
      }
    });

    if (logoutButton && logoutButton.dataset.bound !== "1") {
      logoutButton.dataset.bound = "1";
      logoutButton.addEventListener("click", async function () {
        try {
          logoutButton.disabled = true;
          const auth = await ensureFirebaseAuth();
          await auth.signOut();
          closeLoginMenu();
        } catch (error) {
          console.error(error);
        } finally {
          logoutButton.disabled = false;
        }
      });
    }

    document.addEventListener("click", function (event) {
      const loginItem = document.querySelector(".nav-login-item");
      if (!loginItem || loginItem.contains(event.target)) return;
      closeLoginMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLoginMenu();
    });
  }

  async function syncGlobalLogin() {
    bindGlobalLogin();

    try {
      const auth = await ensureFirebaseAuth();
      auth.onAuthStateChanged(setLoginButton);
    } catch (error) {
      console.error(error);
      setLoginButton(null);
    }
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
    bindGlobalLogin();

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
    document.addEventListener("DOMContentLoaded", syncGlobalLogin);
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      insertHeader();
      setTimeout(bindHamburger, 0);
      syncGlobalLogin();
    });
  }
})();
