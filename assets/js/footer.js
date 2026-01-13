document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-3">
          <a href="/" class="logofooter">
            <img src="PLACEHOLDER/assets/images/logo/logonegro.png" alt="" />
          </a>
        </div>

        <div class="col-6 text-center">
          <a class="btn btn-outline-light btn-floating" href="https://www.instagram.com/nidosargentina/" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-ig.png" alt="Instagram" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://www.facebook.com/NidosArgentina" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-fb.png" alt="Facebook" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://x.com/nidosargentina" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-x.png" alt="Twitter" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://www.threads.net/@nidosargentina" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-threads.png" alt="Threads" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://discord.com/invite/hYeQuB9" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-discord.png" alt="Discord" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://www.tiktok.com/@nidosargentina" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-tiktok.png" alt="TikTok" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://t.me/NidosArgentina" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-telegram.png" alt="Telegram" />
          </a>

          <a class="btn btn-outline-light btn-floating" href="https://campfire.onelink.me/eBr8?af_dp=campfire://&af_force_deeplink=true&deep_link_sub1=cj1jbHVicyZjPTY0ZmIxNjI0LWEzOWYtNGZjNS1iZmEyLWMwMDI4MzEzMzRmNyZpPXRydWU=" style="border: none !important; --bs-btn-padding-x: 0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
            <img src="PLACEHOLDER/assets/images/sociales/icon-campfire.png" alt="Campfire" />
          </a>
        </div>

        <div class="col-3 text-right">
          <p class="mb-0">© 2025 Nidos Argentina</p>
          <p class="mb-0">
            Creado por:
            <a href="https://www.instagram.com/Tab3rnaVM/" target="_blank" style="color: rgb(68, 0, 255); font-weight: bold">Tab3rnaVM</a>
          </p>
        </div>
      </div>
    </div>`;

  // Calcular la profundidad relativa de la página para ajustar rutas
  const depth = "../".repeat(window.location.pathname.split("/").length - 2);

  // Insertar el footer dentro del footer existente
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = footerHTML.replace(/PLACEHOLDER/g, depth);
  }
});
