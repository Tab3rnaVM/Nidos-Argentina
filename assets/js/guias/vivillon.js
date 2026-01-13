const ASSET_PREFIX = "../../";
const patternThumb = (slug) => `${ASSET_PREFIX}assets/images/pokemon/pm666.f${slug}.icon.webp`;

/**
 * Patrones (slug para assets) + nombre ES + regiones
 * (Usamos tus nombres/textos tal cual)
 */
const VIV_PATTERNS = [
  { slug:"archipelago", name:"Archipiélago", regions:"Caribe, Sudáfrica y el sur de Florida." },
  { slug:"continental", name:"Continental", regions:"Argentina, Europa central, Alemania, Polonia y Dinamarca." },
  { slug:"elegant",     name:"Elegante",    regions:"Japón." },
  { slug:"high_plains", name:"Estepa",      regions:"Oeste de Estados Unidos y este de Europa." },
  { slug:"jungle",      name:"Jungla",      regions:"Colombia, el norte de Sudamérica, norte de África y centro de Indonesia." },
  { slug:"marine",      name:"Marino",      regions:"Chile, Grecia, Europa del Este (Hungría, Rumanía, Bulgaria) y España." },
  { slug:"modern",      name:"Moderno",     regions:"Noreste de Estados Unidos." },
  { slug:"monsoon",     name:"Monzón",      regions:"Sudeste asiático." },
  { slug:"ocean",       name:"Océano",      regions:"Hawái, Islas Galápagos y Madagascar." },
  { slug:"sandstorm",   name:"Oasis",       regions:"Norte de África (Egipto), Sudáfrica y el sur de Australia." },
  { slug:"garden",      name:"Pantano",     regions:"Brasil y el norte de Australia." },
  { slug:"polar",       name:"Polar",       regions:"Groenlandia, norte de Canadá y el norte de Europa (Noruega, Finlandia, Suecia)." },
  { slug:"river",       name:"Río",         regions:"Europa central y el este de América del Norte." },
  { slug:"savanna",     name:"Sabana",      regions:"Brasil." },
  { slug:"sun",         name:"Solar",       regions:"México, Madagascar y las partes del sur de Norteamérica." },
  { slug:"icy_snow",    name:"Taiga",       regions:"Alaska, Canadá (este y oeste), sur de Argentina, Chile y norte de Europa (Noruega, Suecia, Finlandia)." },
  { slug:"tundra",      name:"Tundra",      regions:"Islandia, sur de Noruega, Suecia y norte de Japón." },
];

// Render
const grid = document.getElementById("vivillonGrid");

// Cambiamos la clase del contenedor a la nueva lista
grid.classList.remove("vivillon-grid");
grid.classList.add("vivillon-list");

function rowHTML(p){
  const src = patternThumb(p.slug.toUpperCase());
  return `
    <div class="v-card">
      <div class="v-text">
        <div class="v-name">${p.name}</div>
        <p class="v-regions">${p.regions}</p>
      </div>
      <div class="v-img">
        <img src="${src}" alt="${p.name}" loading="lazy" decoding="async">
      </div>
    </div>
  `;
}

function renderVivillon(){
  grid.innerHTML = VIV_PATTERNS.map(rowHTML).join("");

  // Fallback: si no está el thumb del patrón -> intenta .png -> icono genérico
  grid.querySelectorAll(".v-img img").forEach(img=>{
    img.addEventListener("error", ()=>{
      if (img.src.endsWith(".webp")) {
        img.src = img.src.replace(".webp",".png");
      } else {
        img.src = img.dataset.fallback;
      }
    }, { once:true });
  });
}

document.addEventListener("DOMContentLoaded", renderVivillon);
