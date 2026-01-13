document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("open");

    // Cerrar otros dropdowns si están abiertos
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("open");
      }
    });
  });

  // Cerrar el menú si se presiona fuera
  document.addEventListener("click", function (event) {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("open");
    }
  });
});


const headerHTML = `
<header class="header-area header-sticky">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="main-nav">
          <a href="/" class="logo desktop">
            <img src="PLACEHOLDER/assets/images/logo/logodesk.png" alt="" />
          </a>
          <a href="/" class="logo mobile">
            <img src="PLACEHOLDER/assets/images/logo/logomobile.png" alt="" />
          </a>
          <ul class="nav">
          
            <!-- SOLO SE MOSTRARÁ EN MOBILE -->
            <li class="mobile-only dropdown">
              <a href="#" class="dropdown-toggle">Más Info</a>
              <ul class="dropdown-menu">
                <li><a href="/rotacion-de-temporada">Rotación de temporada</a></li>
                <li><a href="/incursiones">Incursiones</a></li>
                <li><a href="/batallas-max">Batallas Max</a></li>
                <li><a href="/horas-destacadas">Horas destacadas</a></li>
                <li><a href="/horas-legendarias">Horas legendarias</a></li>
                <li><a href="/lunes-max">Lunes Max</a></li>
                <li><a href="/investigaciones-de-campo">Investigaciones de campo</a></li>
                <li><a href="/equipo-go-rocket">Equipo GO Rocket</a></li>
                <li><a href="/dias-de-la-comunidad">Días de la comunidad</a></li>
                <li><a href="/go-tour-2025">GO Tour Unova - Global</a></li>
              </ul>
            </li>
            
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/counters">Counters</a></li>        
            <li><a href="/atacantes">Mejores Atacantes</a></li>
            <li><a href="/shinycheck">Shiny Check</a></li>
            <li><a href="/tienda">Tienda</a></li>
            <li><a href="https://paypal.me/nidosarg" target="_blank" id="donacion">Donar</a></li>
            <li>
              <a href="/nosotros">
                <img src="PLACEHOLDER/assets/images/logo/logo-social.jpg" alt="" />
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


function insertHeader() {
  const headerPlaceholder = document.createElement("div");
  const depth = "../".repeat(window.location.pathname.split("/").length - 2);
  headerPlaceholder.innerHTML = headerHTML.replace(/PLACEHOLDER/g, depth);
  document.body.insertAdjacentHTML("afterbegin", headerPlaceholder.innerHTML);

  // Detecta la URL actual y aplica la clase active
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

insertHeader();
