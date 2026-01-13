
const ASSET_PREFIX = "../../";

/** Mapa para símbolos especiales */
const SPECIAL_FORM = { "!":"EXCLAMATION_POINT", "?":"QUESTION_MARK" };

/** Genera candidatos de rutas para normal/shiny según varias convenciones de archivo */
function unownCandidates(letter, shiny=false){
    const code = SPECIAL_FORM[letter] || letter.toUpperCase();
    const bases = [
    `pm201.fUNOWN_${code}`,   // ej: pm201.fA / pm201.fEXCLAMATION
    `pm201${code}`,     // ej: pm201A
    ];
    const suffixes = shiny
    ? [".s.icon.webp", ".shiny.icon.webp", ".s.icon.png", ".shiny.icon.png"]
    : [".icon.webp", ".icon.png"];

    const out = [];
    bases.forEach(b => suffixes.forEach(s => out.push(`${ASSET_PREFIX}assets/images/pokemon/${b}${s}`)));
    return out;
}

/** Asigna la primera ruta válida probando fallbacks secuenciales */
function setWithFallback(imgEl, variants){
    imgEl.dataset.idx = "0";
    imgEl.onerror = () => {
    const i = Number(imgEl.dataset.idx) + 1;
    if(i < variants.length){
        imgEl.dataset.idx = String(i);
        imgEl.src = variants[i];
    }
    };
    imgEl.src = variants[0];
}

/** Datos: marca shiny liberado (true/false). Edita aquí cuando haya cambios. */
const UNOWN_LIST = [
    { letter:"A", shiny:true }, { letter:"B", shiny:true }, { letter:"C", shiny:true },
    { letter:"D", shiny:true }, { letter:"E", shiny:true }, { letter:"F", shiny:true },
    { letter:"G", shiny:true }, { letter:"H", shiny:true }, { letter:"I", shiny:true },
    { letter:"J", shiny:true }, { letter:"K", shiny:false }, { letter:"L", shiny:true },
    { letter:"M", shiny:true }, { letter:"N", shiny:true }, { letter:"O", shiny:true },
    { letter:"P", shiny:true }, { letter:"Q", shiny:false}, { letter:"R", shiny:true },
    { letter:"S", shiny:true }, { letter:"T", shiny:true }, { letter:"U", shiny:true },
    { letter:"V", shiny:true }, { letter:"W", shiny:false }, { letter:"X", shiny:true },
    { letter:"Y", shiny:true }, { letter:"Z", shiny:false},
    { letter:"!", shiny:true }, { letter:"?", shiny:true }
];

function renderUnown(){
    const grid = document.getElementById("unownGrid");
    grid.innerHTML = UNOWN_LIST.map(u => `
    <div class="unown-card">
        <div class="unown-letter">Unown (${u.letter})</div>
        <div class="unown-pair">
        <img class="unown-img" alt="Unown ${u.letter} normal">
        <img class="unown-img ${u.shiny ? "" : "unown-disabled"}" alt="Unown ${u.letter} shiny">
        </div>
    </div>
    `).join("");

    // Cargar imágenes con fallbacks
    const cards = grid.querySelectorAll(".unown-card");
    cards.forEach((card, idx) => {
    const u = UNOWN_LIST[idx];
    const normals = unownCandidates(u.letter, false);
    const shinies = unownCandidates(u.letter, true);
    const imgs = card.querySelectorAll("img");
    setWithFallback(imgs[0], normals);
    setWithFallback(imgs[1], shinies);
    });
}

document.addEventListener("DOMContentLoaded", renderUnown);
