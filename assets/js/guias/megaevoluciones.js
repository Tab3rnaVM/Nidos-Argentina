/** megas.js — dataset para “Lista de Megaevoluciones”
 *  - Mantenemos megaSprite(dex, form) para armar la ruta del icono.
 *  - `region` es Kanto/Johto/Hoenn/Sinnoh/… para mostrar como chip (igual que “Regionales”).
 *  - `desc` incluye el coste de Megaenergía para el PRIMER desbloqueo.
 */

const ASSET_PREFIX = "../../";

/** Construye la ruta al sprite de la Mega.
 *  form: "MEGA" | "MEGA_X" | "MEGA_Y" (por defecto "MEGA")
 */
function megaSprite(dex, form = "MEGA") {
  return `${ASSET_PREFIX}assets/images/pokemon/pm${dex}.f${form}.icon.webp`;
}

function addWebpFallback(img) {
  img.addEventListener(
    "error",
    () => {
      if (img.src.endsWith(".webp")) img.src = img.src.replace(".webp", ".png");
    },
    { once: true }
  );
}

/** ===== Dataset: Megaevoluciones (actualizado con costes verificados) =====
 *  Campos:
 *   - name: nombre mostrado
 *   - region: Kanto | Johto | Hoenn | Sinnoh | Kalos (etc.)
 *   - dex: número de Pokédex
 *   - form (opcional): "MEGA_X" | "MEGA_Y" si aplica
 *   - desc: texto visible, incluye “Desbloquear cuesta XXX de Megaenergía”
 */
const MEGAS = [
  /* ---------- KANTO ---------- */
  { name: "Venusaur",    region: "Kanto", dex: 3,   desc: "Desbloquear cuesta 200 de Megaenergía." },                      // común 200
  { name: "Charizard X", region: "Kanto", dex: 6,   form: "MEGA_X", desc: "Desbloquear cuesta 200 de Megaenergía." },     // GO Hub
  { name: "Charizard Y", region: "Kanto", dex: 6,   form: "MEGA_Y", desc: "Desbloquear cuesta 200 de Megaenergía." },     // GO Hub
  { name: "Blastoise",   region: "Kanto", dex: 9,   desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Beedrill",    region: "Kanto", dex: 15,  desc: "Desbloquear cuesta 100 de Megaenergía." },                      // iniciales comunitarios 100
  { name: "Pidgeot",     region: "Kanto", dex: 18,  desc: "Desbloquear cuesta 100 de Megaenergía." },
  { name: "Alakazam",    region: "Kanto", dex: 65,  desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Slowbro",     region: "Kanto", dex: 80,  desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Gengar",      region: "Kanto", dex: 94,  desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Kangaskhan",  region: "Kanto", dex: 115, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Pinsir",      region: "Kanto", dex: 127, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Gyarados",    region: "Kanto", dex: 130, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // GO Hub
  { name: "Aerodactyl",  region: "Kanto", dex: 142, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Mewtwo X", region: "Kanto", dex: 150, form: "MEGA_X", desc: "Desbloquear cuesta 300 de Megaenergía.", released: false },
  { name: "Mewtwo Y", region: "Kanto", dex: 150, form: "MEGA_Y", desc: "Desbloquear cuesta 300 de Megaenergía.", released: false },

  /* ---------- JOHTO ---------- */
  { name: "Ampharos",    region: "Johto", dex: 181, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Steelix",     region: "Johto", dex: 208, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Scizor",      region: "Johto", dex: 212, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Heracross",   region: "Johto", dex: 214, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Houndoom",    region: "Johto", dex: 229, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Tyranitar",   region: "Johto", dex: 248, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // reportes/GO Hub

  /* ---------- HOENN ---------- */
  { name: "Sceptile",    region: "Hoenn", dex: 254, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Blaziken",    region: "Hoenn", dex: 257, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Swampert",    region: "Hoenn", dex: 260, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Gardevoir",   region: "Hoenn", dex: 282, desc: "Desbloquear cuesta 200 de Megaenergía." },                      // GO Hub
  { name: "Sableye",     region: "Hoenn", dex: 302, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Mawile",      region: "Hoenn", dex: 303, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Aggron",      region: "Hoenn", dex: 306, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Medicham",    region: "Hoenn", dex: 308, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Manectric",   region: "Hoenn", dex: 310, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Sharpedo",    region: "Hoenn", dex: 319, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Camerupt",    region: "Hoenn", dex: 323, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Altaria",     region: "Hoenn", dex: 334, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // GO Hub
  { name: "Banette",     region: "Hoenn", dex: 354, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Absol",       region: "Hoenn", dex: 359, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Glalie",      region: "Hoenn", dex: 362, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Salamence",   region: "Hoenn", dex: 373, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // GO Hub
  { name: "Metagross",   region: "Hoenn", dex: 376, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // (legendario no, pero coste alto esperado cuando se libere)
  { name: "Latias",      region: "Hoenn", dex: 380, desc: "Desbloquear cuesta 300 de Megaenergía." },                      // GO Hub
  { name: "Latios",      region: "Hoenn", dex: 381, desc: "Desbloquear cuesta 300 de Megaenergía." },
  { name: "Rayquaza",    region: "Hoenn", dex: 384, desc: "Desbloquear cuesta 400 de Megaenergía." },                      // evento/GO info

  /* ---------- SINNOH ---------- */
  { name: "Lopunny",     region: "Sinnoh", dex: 428, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Garchomp",    region: "Sinnoh", dex: 445, desc: "Desbloquear cuesta 300 de Megaenergía." },                     // GO Hub
  { name: "Abomasnow",   region: "Sinnoh", dex: 460, desc: "Desbloquear cuesta 200 de Megaenergía." },
  { name: "Gallade",     region: "Sinnoh", dex: 475, desc: "Desbloquear cuesta 200 de Megaenergía." },                     // GO Hub
  { name: "Lucario",     region: "Sinnoh", dex: 448, desc: "Desbloquear cuesta 200 de Megaenergía." },

  /* ---------- UNOVA ---------- */
  { name: "Audino",     dex: 531, region: "Unova",  desc: "Desbloquear: 200 de Megaenergía" },

  /* ---------- KALOS ---------- */
  { name: "Diancie",     region: "Kalos",  dex: 719, desc: "Desbloquear cuesta 300 de Megaenergía." },                     // Mítico (coste alto)

];

/* ===== Render helpers (mismo estilo que Vivillon/Regionales) ===== */

const grid = document.getElementById("megaGrid");

function cardHTML(m) {
  const form = m.form || "MEGA";
  const img  = megaSprite(m.dex, form);
  const disabledClass = m.released === false ? "is-disabled" : "";
  return `
    <div class="v-card ${disabledClass}">
      <div class="v-text">
        <div class="v-name">${m.name}</div>
        <div class="v-tag">${m.region}</div>
        <p class="v-regions">${m.desc}</p>
      </div>
      <div class="v-img">
        <img src="${img}" alt="Mega ${m.name}" loading="lazy" decoding="async">
      </div>
    </div>
  `;
}


function renderMegas() {
  grid.innerHTML = MEGAS.map(cardHTML).join("");
  grid.querySelectorAll(".v-img img").forEach(addWebpFallback);
}

document.addEventListener("DOMContentLoaded", renderMegas);


