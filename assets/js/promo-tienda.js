(function () {
  const MODAL_ID = "promoModal";
  const STORAGE_KEY = "promo_tienda_last_seen_v1"; // cambia v1 para forzar que reaparezca
  const SHOW_DELAY_MS = 1200; // espera a que cargue todo

  function todayKey() {
    const d = new Date();
    // YYYY-MM-DD local
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
  }

  function shouldShow() {
    try {
      return localStorage.getItem(STORAGE_KEY) !== todayKey();
    } catch {
      return true; // si localStorage falla, lo mostramos igual
    }
  }

  function markSeen() {
    try {
      localStorage.setItem(STORAGE_KEY, todayKey());
    } catch {}
  }

  window.addEventListener("load", function () {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;

    // Cerrar con click en X / backdrop / "Ahora no"
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.dataset && target.dataset.close === "true") {
        closeModal(modal);
      }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal(modal);
      }
    });

    // Si hacen click en "Ir a la tienda", marcamos visto
    const btn = document.getElementById("promoLinkBtn");
    const img = document.getElementById("promoLinkImage");
    [btn, img].forEach((el) => {
      if (!el) return;
      el.addEventListener("click", () => markSeen());
    });

    if (!shouldShow()) return;

    setTimeout(() => {
      openModal(modal);
      markSeen(); // lo marcamos visto al mostrarse (así no molesta si recargan)
    }, SHOW_DELAY_MS);
  });
})();
