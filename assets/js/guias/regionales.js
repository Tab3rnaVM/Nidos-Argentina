const ASSET_PREFIX = "../../";
const pmIcon = (dex) => `${ASSET_PREFIX}assets/images/pokemon/pm${String(dex)}.icon.webp`;
const pmFormIcon = (dex, form) =>
  `${ASSET_PREFIX}assets/images/pokemon/pm${String(dex)}.f${String(form).toUpperCase()}.icon.webp`;

function spriteFor(p) {
  return p.form ? pmFormIcon(p.dex, p.form) : pmIcon(p.dex);
}

const REGIONALES = [
  /* ---------- KANTO ---------- */
  { dex: 83,  name: "Farfetch’d",    tag: "Kanto", regions: "Corea del Sur, Taiwán, Japón y Hong Kong." },
  { dex: 115, name: "Kangaskhan",    tag: "Kanto", regions: "Australia." },
  { dex: 122, name: "Mr. Mime",      tag: "Kanto", regions: "Europa." },
  { dex: 128, name: "Tauros",        tag: "Kanto", regions: "Estados Unidos y sur de Canadá." },

  /* ---------- JOHTO ---------- */
  { dex: 214, name: "Heracross",     tag: "Johto", regions: "Regiones de Centro y Sudamérica." },
  { dex: 222, name: "Corsola",       tag: "Johto", regions: "Zonas costeras/tropicales." },

  /* ---------- HOENN ---------- */
  { dex: 313, name: "Volbeat",       tag: "Hoenn", regions: "Europa, Asia y Australia." },
  { dex: 314, name: "Illumise",      tag: "Hoenn", regions: "Américas y África." },
  { dex: 324, name: "Torkoal",       tag: "Hoenn", regions: "Asia occidental y sudeste asiático." },
  { dex: 335, name: "Zangoose",      tag: "Hoenn", regions: "Europa, Asia y Australia." },
  { dex: 336, name: "Seviper",       tag: "Hoenn", regions: "Américas y África." },
  { dex: 337, name: "Lunatone",      tag: "Hoenn", regions: "Hemisferio occidental." },
  { dex: 338, name: "Solrock",       tag: "Hoenn", regions: "Hemisferio oriental." },
  { dex: 357, name: "Tropius",       tag: "Hoenn", regions: "África y Medio Oriente." },
  { dex: 369, name: "Relicanth",     tag: "Hoenn", regions: "Nueva Zelanda y Oceanía." },

  /* ---------- SINNOH ---------- */
  { dex: 417, name: "Pachirisu",     tag: "Sinnoh", regions: "Regiones árticas: Alaska, Canadá y Rusia." },
  { dex: 422, name: "Shellos (Mar Oeste)", tag: "Sinnoh", form: "WEST_SEA", regions: "Hemisferio occidental." },
  { dex: 422, name: "Shellos (Mar Este)",  tag: "Sinnoh", form: "EAST_SEA", regions: "Hemisferio oriental." },
  { dex: 439, name: "Mime Jr.",      tag: "Sinnoh",  regions: "Europa (por huevos de 5 km)." },
  { dex: 441, name: "Chatot",        tag: "Sinnoh",  regions: "Hemisferio sur." },
  { dex: 455, name: "Carnivine",     tag: "Sinnoh",  regions: "Sudeste de Estados Unidos." },
  { dex: 480, name: "Uxie",          tag: "Sinnoh",  regions: "Asia-Pacífico." },
  { dex: 481, name: "Mesprit",       tag: "Sinnoh",  regions: "Europa, Medio Oriente, Asia y África." },
  { dex: 482, name: "Azelf",         tag: "Sinnoh",  regions: "Américas y Groenlandia." },

  /* ---------- UNOVA ---------- */
  { dex: 511, name: "Pansage",       tag: "Unova", regions: "Asia-Pacífico." },
  { dex: 513, name: "Pansear",       tag: "Unova", regions: "Europa, Medio Oriente, África e India." },
  { dex: 515, name: "Panpour",       tag: "Unova", regions: "Américas y Groenlandia." },
  { dex: 538, name: "Throh",         tag: "Unova", regions: "Américas y África." },
  { dex: 539, name: "Sawk",          tag: "Unova", regions: "Europa, Asia y Australia." },
  { dex: 550, name: "Basculin (Raya Roja)", tag: "Unova", form: "RED_STRIPED",  regions: "Hemisferio oriental." },
  { dex: 550, name: "Basculin (Raya Azul)", tag: "Unova", form: "BLUE_STRIPED", regions: "Hemisferio occidental." },
  { dex: 556, name: "Maractus",      tag: "Unova", regions: "Sur de EE. UU., México, Centroamérica, Caribe y Sudamérica." },
  { dex: 561, name: "Sigilyph",      tag: "Unova", regions: "Egipto y Grecia." },
  { dex: 626, name: "Bouffalant",    tag: "Unova", regions: "Nueva York y áreas cercanas." },
  { dex: 631, name: "Heatmor",       tag: "Unova", regions: "Europa, Asia y Australia." },
  { dex: 632, name: "Durant",        tag: "Unova", regions: "Américas y África." },

  /* ---------- KALOS ---------- */
  { dex: 669, name: "Flabébé (Flor Roja)",   tag: "Kalos", form: "RED", regions: "Europa, Medio Oriente y África." },
  { dex: 669, name: "Flabébé (Flor Amarilla)",tag: "Kalos", form: "YELLOW", regions: "Américas." },
  { dex: 669, name: "Flabébé (Flor Azul)",   tag: "Kalos", form: "BLUE",  regions: "Asia-Pacífico." },
  { dex: 701, name: "Hawlucha",      tag: "Kalos", regions: "México." },
  { dex: 707, name: "Klefki",        tag: "Kalos", regions: "Francia (y zonas limítrofes cercanas)." },
  { dex: 676, name: "Furfrou (Corte Debutante)", tag: "Kalos", form: "DEBUTANTE", regions: "El corte “Debutante” se desbloquea en Américas." },
  { dex: 676, name: "Furfrou (Corte Diamante)",  tag: "Kalos", form: "DIAMOND", regions: "El corte “Diamante” se desbloquea en Europa/MEA." },
  { dex: 676, name: "Furfrou (Corte Estrella)",  tag: "Kalos", form: "STAR", regions: "El corte “Estrella” se desbloquea en Asia-Pacífico." },
  { dex: 676, name: "Furfrou (Corte La Reine)",  tag: "Kalos", form: "LA_REINE", regions: "El corte “La Reine” se desbloquea en Francia." },
  { dex: 676, name: "Furfrou (Corte Kabuki)",    tag: "Kalos", form: "KABUKI", regions: "El corte “Kabuki” se desbloquea en Japón." },
  { dex: 676, name: "Furfrou (Corte Faraón)",    tag: "Kalos", form: "PHARAOH", regions: "El corte “Faraón” se desbloquea en Egipto." },

  /* ---------- ALOLA ---------- */
  { dex: 741, name: "Oricorio (Estilo Apacionado)", tag: "Alola", form: "BAILE",  regions: "Europa, Medio Oriente y África." },
  { dex: 741, name: "Oricorio (Estilo Animado)", tag: "Alola", form: "POMPOM", regions: "Américas." },
  { dex: 741, name: "Oricorio (Estilo Plácido)",   tag: "Alola", form: "PAU",    regions: "Islas de África/Asia/Pacífico/Caribe." },
  { dex: 741, name: "Oricorio (Estilo Refinado)",  tag: "Alola", form: "SENSU",  regions: "Asia-Pacífico." },
  { dex: 764, name: "Comfey",            tag: "Alola", regions: "Hawái." },
  { dex: 797, name: "Celesteela",    tag: "Alola", regions: "Hemisferio sur." },
  { dex: 798, name: "Kartana",       tag: "Alola", regions: "Hemisferio norte." },
  { dex: 805, name: "Stakataka",     tag: "Alola", regions: "Hemisferio oriental." },
  { dex: 806, name: "Blacephalon",   tag: "Alola", regions: "Hemisferio occidental." },

  /* ---------- GALAR ---------- */
  { dex: 874, name: "Stonjourner",   tag: "Galar", regions: "Reino Unido." },

  /* ---------- PALDEA ---------- */
  { dex: 128, name: "Tauros (Raza Flamante)", tag: "Paldea", form: "PALDEA_BLAZE", regions: "Hemisferio oriental." },
  { dex: 128, name: "Tauros (Raza Acuática)",  tag: "Paldea", form: "PALDEA_AQUA",  regions: "Hemisferio occidental." },
  { dex: 128, name: "Tauros (Raza Combativa)",tag: "Paldea", form: "PALDEA_COMBAT", regions: "Península Ibérica." },
  { dex: 978, name: "Tatsugiri (Forma Curvada)",   tag: "Paldea", form: "CURLY",   regions: "Europa, Medio Oriente y África." },
  { dex: 978, name: "Tatsugiri (Forma Lánguida)",  tag: "Paldea", form: "DROOPY",  regions: "Américas y Groenlandia." },
  { dex: 978, name: "Tatsugiri (Forma Recta)",tag: "Paldea", form: "STRETCHY", regions: "Asia-Pacífico." },
];

const grid = document.getElementById("regionalGrid");

function rowHTML(p){
  const src = spriteFor(p);
  return `
    <div class="v-card">
      <div class="v-text">
        <div class="v-name">${p.name}</div>
        <div class="v-tag">${p.tag}</div>
        <p class="v-regions">${p.regions}</p>
      </div>
      <div class="v-img">
        <img src="${src}" alt="${p.name}" loading="lazy" decoding="async">
      </div>
    </div>
  `;
}

function renderRegionales(){
  grid.innerHTML = REGIONALES.map(rowHTML).join("");

  // Fallback webp -> png
  grid.querySelectorAll(".v-img img").forEach(img=>{
    img.addEventListener("error", ()=>{
      if (img.src.endsWith(".webp")) img.src = img.src.replace(".webp",".png");
    }, { once:true });
  });
}

document.addEventListener("DOMContentLoaded", renderRegionales);
