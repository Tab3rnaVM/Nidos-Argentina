// Helper para formar rutas correctas desde /pages/guias/*
const ASSET_PREFIX = "../../"; // <- importante para tu estructura
const pm = (num3) =>
  `${ASSET_PREFIX}assets/images/pokemon/pm${String(num3)}.icon.webp`;

// ============ DITTO ACTUALES (confirmados) ============
const DITTO_DATA = [
  { id: 56,  name: "Mankey",    img: pm(56)  },
  { id: 58,  name: "Growlithe", img: pm(58)  },
  { id: 81,  name: "Magnemite", img: pm(81)  },
  { id: 100, name: "Voltorb",   img: pm(100) },
  { id: 161, name: "Sentret",   img: pm(161) },
  { id: 216, name: "Teddiursa", img: pm(216) },
  { id: 273, name: "Seedot",    img: pm(273) },
  { id: 283, name: "Surskit",   img: pm(283) },
  { id: 287, name: "Slakoth",   img: pm(287) },
  { id: 293, name: "Whismur",   img: pm(293) },
  { id: 355, name: "Duskull",   img: pm(355) },
];
// (Buneary 427 está "pending" en tu captura, por eso no lo incluí)

// ============ Render ============
const grid = document.getElementById("dittoGrid");

function cardHTML(p) {
  return `
    <div class="ditto-card">
      <img class="ditto-img" src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
      <div class="ditto-name">${p.name}</div>
    </div>
  `;
}

function renderDitto() {
  grid.innerHTML = DITTO_DATA.map(cardHTML).join("");

  // Fallback: si falla .webp, intenta .png automáticamente
  grid.querySelectorAll(".ditto-img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.src.endsWith(".webp")) {
        img.src = img.src.replace(".webp", ".png");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", renderDitto);
