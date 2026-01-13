(function () {
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

  const footerHTML = `
<div class="container-fluid">
  <div class="row align-items-center">
    <div class="col-3">
      <a href="${BASE}" class="logofooter">
        <img src="${withBase("assets/images/logo/logonegro.png")}" alt="Nidos Argentina" />
      </a>
    </div>

    <div class="col-6 text-center">
      <a class="btn btn-outline-light btn-floating" href="https://www.instagram.com/nidosargentina/" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-ig.png")}" alt="Instagram" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://www.facebook.com/NidosArgentina" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-fb.png")}" alt="Facebook" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://x.com/nidosargentina" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-x.png")}" alt="X" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://www.threads.net/@nidosargentina" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-threads.png")}" alt="Threads" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://discord.com/invite/hYeQuB9" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-discord.png")}" alt="Discord" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://www.tiktok.com/@nidosargentina" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-tiktok.png")}" alt="TikTok" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://t.me/NidosArgentina" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-telegram.png")}" alt="Telegram" />
      </a>

      <a class="btn btn-outline-light btn-floating" href="https://campfire.onelink.me/eBr8?af_dp=campfire://&af_force_deeplink=true&deep_link_sub1=cj1jbHVicyZjPTY0ZmIxNjI0LWEzOWYtNGZjNS1iZmEyLWMwMDI4MzEzMzRmNyZpPXRydWU=" style="border:none !important; --bs-btn-padding-x:0.5rem !important;" target="_blank" rel="noopener noreferrer" role="button">
        <img src="${withBase("assets/images/sociales/icon-campfire.png")}" alt="Campfire" />
      </a>
    </div>

    <div class="col-3 text-right">
      <p class="mb-0">© 2026 Nidos Argentina</p>
      <p class="mb-0">
        Creado por:
        <a href="https://www.instagram.com/Tab3rnaVM/" target="_blank" rel="noopener noreferrer" style="color: rgb(68, 0, 255); font-weight: bold">Tab3rnaVM</a>
      </p>
    </div>
  </div>
</div>`;

  function insertFooter() {
    const footer = document.querySelector("footer");
    if (footer) footer.innerHTML = footerHTML;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertFooter);
  } else {
    insertFooter();
  }
})();
