function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTypeId(typeName) {
  return typeName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getTypeLabel(typeName) {
  return typeName.charAt(0).toUpperCase() + typeName.slice(1);
}

function getTypeIconSrc(typeId) {
  return `../../assets/images/tipos/${typeId}.png`;
}

function hexToRgbParts(hex) {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return "117, 170, 219";

  const value = Number.parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `${r}, ${g}, ${b}`;
}

function setActiveType(typeId) {
  document.querySelectorAll(".type-nav-button").forEach((button) => {
    const isActive = button.dataset.target === typeId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function addTypeSelectorListeners(renderType) {
  const buttons = document.querySelectorAll(".type-nav-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      renderType(targetId);
    });
  });
}

const tipos = {
  insecto: {
    color: "#A8B820",
    atacantes: [
      // Normales
      {
        name: "Volcarona",
        image: "../../assets/images/pokemon/pm637.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Picadura" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Zumbido" },
        ],
      },
      {
        name: "Genesect",
        image: "../../assets/images/pokemon/pm649.fNORMAL.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Scizor",
        image: "../../assets/images/pokemon/pm212.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Vikavolt",
        image: "../../assets/images/pokemon/pm738.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Picadura" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Centiskorch",
        image: "../../assets/images/pokemon/pm851.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Picadura" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Zumbido" },
        ],
      },
      {
        name: "Kleavor",
        image: "../../assets/images/pokemon/pm900.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      // Megas
      {
        name: "Mega-Heracross",
        image: "../../assets/images/pokemon/pm214.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Megacuerno" },
        ],
      },
      {
        name: "Mega-Scizor",
        image: "../../assets/images/pokemon/pm212.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Mega-Pinsir",
        image: "../../assets/images/pokemon/pm127.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      // Shadows
      {
        name: "Scizor Oscuro",
        image: "../../assets/images/pokemon/pm212.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Corte Furia" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Vikavolt Oscuro",
        image: "../../assets/images/pokemon/pm738.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Picadura" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Tijera X" },
        ],
      },
      {
        name: "Escavalier Oscuro",
        image: "../../assets/images/pokemon/pm589.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Picadura" },
          { typeImage: "../../assets/images/tipos/insecto.png", name: "Megacuerno" },
        ],
      },
    ],
  },
  siniestro: {
    color: "#585863",
    atacantes: [
      // Normales
      {
        name: "Tyranitar",
        image: "../../assets/images/pokemon/pm248.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Mordida" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Giro Vil" },
        ],
      },
      {
        name: "Hydreigon",
        image: "../../assets/images/pokemon/pm635.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Mordida" },
          {
            typeImage: "../../assets/images/tipos/siniestro.png",
            name: "Giro Vil",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Kingambit",
        image: "../../assets/images/pokemon/pm983.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Juego Sucio" },
        ],
      },
      {
        name: "Darkrai",
        image: "../../assets/images/pokemon/pm491.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Pulso Oscuro" },
        ],
      },
      {
        name: "Yveltal",
        image: "../../assets/images/pokemon/pm717.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Pulso Oscuro" },
        ],
      },
      {
        name: "Incineroar",
        image: "../../assets/images/pokemon/pm727.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Lariat Oscuro" },
        ],
      },
      // Megas
      {
        name: "Mega-Tyranitar",
        image: "../../assets/images/pokemon/pm248.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Mordida" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Giro Vil" },
        ],
      },
      {
        name: "Mega-Houndoom",
        image: "../../assets/images/pokemon/pm229.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Juego Sucio" },
        ],
      },
      {
        name: "Mega-Absol",
        image: "../../assets/images/pokemon/pm359.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          {
            typeImage: "../../assets/images/tipos/siniestro.png",
            name: "Giro Vil",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      // Shadows
      {
        name: "Tyranitar Oscuro",
        image: "../../assets/images/pokemon/pm248.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Mordida" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Giro Vil" },
        ],
      },
      {
        name: "Hydreigon Oscuro",
        image: "../../assets/images/pokemon/pm635.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Mordida" },
          {
            typeImage: "../../assets/images/tipos/siniestro.png",
            name: "Giro Vil",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Darkrai Oscuro",
        image: "../../assets/images/pokemon/pm491.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Alarido" },
          { typeImage: "../../assets/images/tipos/siniestro.png", name: "Pulso Oscuro" },
        ],
      },
    ],
  },
  dragon: {
    color: "#076CC0",
    atacantes: [
      // Normales
      {
        name: "Eternatus",
        image: "../../assets/images/pokemon/pm890.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cañón Dinamax" },
        ],
      },
      {
        name: "Dialga Origen",
        image: "../../assets/images/pokemon/pm483.fORIGIN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Aliento de Dragón" },
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Rugido Temporal",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Kyurem Negro",
        image: "../../assets/images/pokemon/pm646.fBLACK.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Enfado" },
        ],
      },
      {
        name: "Palkia Origen",
        image: "../../assets/images/pokemon/pm484.fORIGIN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Corte Espacial",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Regidrago",
        image: "../../assets/images/pokemon/pm895.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Aliento de Dragón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Dracoenergía",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Baxcalibur",
        image: "../../assets/images/pokemon/pm998.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Aliento de Dragón" },
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Asalto Espadón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      // Megas
      {
        name: "Mega-Rayquaza",
        image: "../../assets/images/pokemon/pm384.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          {
            typeImage: "../../assets/images/tipos/dragon.png",
            name: "Vasto Impacto",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Garchomp",
        image: "../../assets/images/pokemon/pm445.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Vasto Impacto" },
        ],
      },
      {
        name: "Mega-Salamence",
        image: "../../assets/images/pokemon/pm373.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Meteoro Dragón" },
        ],
      },
      // Shadows
      {
        name: "Dialga Oscuro",
        image: "../../assets/images/pokemon/pm483.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Aliento de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Meteoro Dragón" },
        ],
      },
      {
        name: "Garchomp Oscuro",
        image: "../../assets/images/pokemon/pm445.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Vasto Impacto" },
        ],
      },
      {
        name: "Palkia Oscuro",
        image: "../../assets/images/pokemon/pm484.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Cola de Dragón" },
          { typeImage: "../../assets/images/tipos/dragon.png", name: "Meteoro Dragón" },
        ],
      },
    ],
  },
  electrico: {
    color: "#EFDB65",
    atacantes: [
      // Normales
      {
        name: "Zeraora",
        image: "../../assets/images/pokemon/pm807.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Cambiavoltaje" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Puños Plasma" },
        ],
      },
      {
        name: "Zekrom",
        image: "../../assets/images/pokemon/pm644.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Rayo Carga" },
          {
            typeImage: "../../assets/images/tipos/electrico.png",
            name: "Rayo Fusión",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Xurkitree",
        image: "../../assets/images/pokemon/pm796.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Impactrueno" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Chispazo" },
        ],
      },
      {
        name: "Thundurus (Tótem)",
        image: "../../assets/images/pokemon/pm642.fTHERIAN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Cambiavoltaje" },
          {
            typeImage: "../../assets/images/tipos/electrico.png",
            name: "Electormenta",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Regieleki",
        image: "../../assets/images/pokemon/pm894.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Impactrueno" },
          {
            typeImage: "../../assets/images/tipos/electrico.png",
            name: "Electrojaula",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Raikou",
        image: "../../assets/images/pokemon/pm243.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Impactrueno" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Carga Salvaje" },
        ],
      },
      // Megas
      {
        name: "Mega-Manectric",
        image: "../../assets/images/pokemon/pm310.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Colmillo de Trueno" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Carga Salvaje" },
        ],
      },
      {
        name: "Mega-Ampharos",
        image: "../../assets/images/pokemon/pm181.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Cambiavoltaje" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Electrocañón" },
        ],
      },
      // Shadows
      {
        name: "Raikou Oscuro",
        image: "../../assets/images/pokemon/pm243.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Impactrueno" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Carga Salvaje" },
        ],
      },
      {
        name: "Magnezone Oscuro",
        image: "../../assets/images/pokemon/pm462.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Cambiavoltaje" },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Carga Salvaje" },
        ],
      },
      {
        name: "Zapdos Oscuro",
        image: "../../assets/images/pokemon/pm145.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/electrico.png",
            name: "Impactrueno",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/electrico.png", name: "Atactrueno" },
        ],
      },
    ],
  },
  hada: {
    color: "#E4A2DB",
    atacantes: [
      // Normales
      {
        name: "Xerneas",
        image: "../../assets/images/pokemon/pm716.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/hada.png",
            name: "Geocontrol",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Fuerza Lunar" },
        ],
      },
      {
        name: "Enamorus (Encarnada)",
        image: "../../assets/images/pokemon/pm905.fINCARNATE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Viento Feérico" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Togekiss",
        image: "../../assets/images/pokemon/pm468.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Gardevoir",
        image: "../../assets/images/pokemon/pm282.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Sylveon",
        image: "../../assets/images/pokemon/pm700.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Enamorus (Totém)",
        image: "../../assets/images/pokemon/pm905.fTHERIAN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Viento Feérico" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Fuerza Lunar" },
        ],
      },
      // Megas
      {
        name: "Mega-Gardevoir",
        image: "../../assets/images/pokemon/pm282.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Mega-Mawile",
        image: "../../assets/images/pokemon/pm303.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Viento Feérico" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Juego Rudo" },
        ],
      },
      // Shadows
      {
        name: "Gardevoir Oscuro",
        image: "../../assets/images/pokemon/pm282.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Brillo Mágico" },
        ],
      },
      {
        name: "Granbull Oscuro",
        image: "../../assets/images/pokemon/pm210.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Encanto" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Juego Rudo" },
        ],
      },
      {
        name: "Weezing Galar Oscuro",
        image: "../../assets/images/pokemon/pm110.fGALARIAN.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hada.png", name: "Viento Feérico" },
          { typeImage: "../../assets/images/tipos/hada.png", name: "Juego Rudo" },
        ],
      },
    ],
  },
  pelea: {
    color: "#C94E5B",
    atacantes: [
      // Normales
      {
        name: "Keldeo Forma Brío",
        image: "../../assets/images/pokemon/pm647.fRESOLUTE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Patada Baja" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Espada Secreta" },
        ],
      },
      {
        name: "Terrakion",
        image: "../../assets/images/pokemon/pm639.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Doble Patada" },
          {
            typeImage: "../../assets/images/tipos/pelea.png",
            name: "Espada Sagrada",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Keldeo Forma Habitual",
        image: "../../assets/images/pokemon/pm647.fORDINARY.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Patada Baja" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Espada Sagrada" },
        ],
      },
      {
        name: "Urshifu Estilo Brusco / Urshifu Estilo Fluido",
        image: "../../assets/images/pokemon/pm892.Doble.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Contraataque" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Puño Dinámico" },
        ],
      },
      {
        name: "Lucario",
        image: "../../assets/images/pokemon/pm448.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/pelea.png",
            name: "Fuerza de Palma",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Aura Esfera" },
        ],
      },
      {
        name: "Conkeldurr",
        image: "../../assets/images/pokemon/pm534.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Fuerza de Palma" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Puño Dinámico" },
        ],
      },
      // Megas
      {
        name: "Mega-Mewtwo X",
        image: "../../assets/images/pokemon/pm150.fMEGA_X.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/pelea.png",
            name: "Contraataque",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Ataque Centrado" },
        ],
      },
      {
        name: "Mega-Lucario",
        image: "../../assets/images/pokemon/pm448.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/pelea.png",
            name: "Fuerza de Palma",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Aura Esfera" },
        ],
      },
      {
        name: "Mega-Blaziken",
        image: "../../assets/images/pokemon/pm257.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Contraataque" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Aura Esfera" },
        ],
      },
      // Shadows
      {
        name: "Conkeldurr Oscuro",
        image: "../../assets/images/pokemon/pm534.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Fuerza de Palma" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Puño Dinámico" },
        ],
      },
      {
        name: "Blaziken Oscuro",
        image: "../../assets/images/pokemon/pm257.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Contraataque" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Puño Dinámico" },
        ],
      },
      {
        name: "Hariyama Oscuro",
        image: "../../assets/images/pokemon/pm297.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Fuerza de Palma" },
          { typeImage: "../../assets/images/tipos/pelea.png", name: "Puño Dinámico" },
        ],
      },
    ],
  },
  fuego: {
    color: "#F5953E",
    atacantes: [
      // Normales
      {
        name: "Blacephalon",
        image: "../../assets/images/pokemon/pm806.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Incinerar" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Cabeza Sorpresa",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Reshiram",
        image: "../../assets/images/pokemon/pm643.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Colmillo de Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Llama Fusión",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Heatran",
        image: "../../assets/images/pokemon/pm485.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Lluvia Ígnea",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Ho-Oh",
        image: "../../assets/images/pokemon/pm250.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Incinerar" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Fuego Sagrado++",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Volcarona",
        image: "../../assets/images/pokemon/pm637.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Supercalor" },
        ],
      },
      {
        name: "Moltres",
        image: "../../assets/images/pokemon/pm146.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Supercalor" },
        ],
      },
      // Megas
      {
        name: "Mega-Charizard Y",
        image: "../../assets/images/pokemon/pm6.fMEGA_Y.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Anillo de Fuego",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Blaziken",
        image: "../../assets/images/pokemon/pm257.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Anillo de Fuego",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Charizard X",
        image: "../../assets/images/pokemon/pm6.fMEGA_X.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Anillo de Fuego",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      // Shadows
      {
        name: "Heatran Oscuro",
        image: "../../assets/images/pokemon/pm485.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Lluvia Ígnea",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Ho-Oh Oscuro",
        image: "../../assets/images/pokemon/pm250.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Incinerar" },
          {
            typeImage: "../../assets/images/tipos/fuego.png",
            name: "Fuego Sagrado+",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Moltres Oscuro",
        image: "../../assets/images/pokemon/pm146.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Giro Fuego" },
          { typeImage: "../../assets/images/tipos/fuego.png", name: "Supercalor" },
        ],
      },
    ],
  },
  volador: {
    color: "#A1B4E8",
    atacantes: [
      // Normales
      {
        name: "Rayquaza",
        image: "../../assets/images/pokemon/pm384.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Corte Aéreo" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ascenso Dracónico",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Yveltal",
        image: "../../assets/images/pokemon/pm717.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Ráfaga de Aire" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ala del Olvido",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Moltres",
        image: "../../assets/images/pokemon/pm146.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Ataque de Ala" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ataque Celestial",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Tornadus (Tótem)",
        image: "../../assets/images/pokemon/pm641.fTHERIAN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Ráfaga de Aire" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Vendaval Gélido",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Toucannon",
        image: "../../assets/images/pokemon/pm733.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Picotazo" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Pico Cañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Braviary",
        image: "../../assets/images/pokemon/pm628.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Corte Aéreo" },
          { typeImage: "../../assets/images/tipos/volador.png", name: "Vuelo" },
        ],
      },
      // Megas
      {
        name: "Mega-Rayquaza",
        image: "../../assets/images/pokemon/pm384.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Corte Aéreo" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ascenso Dracónico",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Pidgeot",
        image: "../../assets/images/pokemon/pm18.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ráfaga de Aire",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/volador.png", name: "Ave Brava" },
        ],
      },
      {
        name: "Mega-Charizard Y",
        image: "../../assets/images/pokemon/pm6.fMEGA_Y.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Corte Aéreo" },
          { typeImage: "../../assets/images/tipos/volador.png", name: "Aire Cortante" },
        ],
      },
      // Shadows
      {
        name: "Moltres Oscuro",
        image: "../../assets/images/pokemon/pm146.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Ataque de Ala" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ataque Celestial",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Toucannon Oscuro",
        image: "../../assets/images/pokemon/pm733.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/volador.png", name: "Picotazo" },
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Pico Cañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Staraptor Oscuro",
        image: "../../assets/images/pokemon/pm398.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/volador.png",
            name: "Ráfaga de Aire",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/volador.png", name: "Vuelo" },
        ],
      },
    ],
  },
  fantasma: {
    color: "#666DBB",
    atacantes: [
      // Normales
      {
        name: "Necrozma Alas del Alba",
        image: "../../assets/images/pokemon/pm800.fDAWN_WINGS.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Rayo Umbrío" },
        ],
      },
      {
        name: "Lunala",
        image: "../../assets/images/pokemon/pm792.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Giratina Origen",
        image: "../../assets/images/pokemon/pm487.fORIGIN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          {
            typeImage: "../../assets/images/tipos/fantasma.png",
            name: "Golpe Umbrío",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Gholdengo",
        image: "../../assets/images/pokemon/pm1000.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Infortunio" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Dragapult",
        image: "../../assets/images/pokemon/pm887.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Impresión" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Chandelure",
        image: "../../assets/images/pokemon/pm609.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Infortunio" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      // Megas
      {
        name: "Mega-Gengar",
        image: "../../assets/images/pokemon/pm94.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/fantasma.png",
            name: "Lengüetazo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Mega-Banette",
        image: "../../assets/images/pokemon/pm354.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Mega-Sableye",
        image: "../../assets/images/pokemon/pm302.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_C+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Sombra Vil" },
        ],
      },
      // Shadows
      {
        name: "Giratina Modificada Oscuro",
        image: "../../assets/images/pokemon/pm487.fALTERED.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Garra de Sombra" },
          {
            typeImage: "../../assets/images/tipos/fantasma.png",
            name: "Golpe Umbrío",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Chandelure Oscuro",
        image: "../../assets/images/pokemon/pm609.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Infortunio" },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
      {
        name: "Gengar Oscuro",
        image: "../../assets/images/pokemon/pm94.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_C+.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/fantasma.png",
            name: "Lengüetazo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/fantasma.png", name: "Bola Sombra" },
        ],
      },
    ],
  },
  planta: {
    color: "#64BC69",
    atacantes: [
      // Normales
      {
        name: "Zarude",
        image: "../../assets/images/pokemon/pm893.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Latigazo" },
        ],
      },
      {
        name: "Kartana",
        image: "../../assets/images/pokemon/pm798.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Hojas Navaja" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Hoja Aguda" },
        ],
      },
      {
        name: "Shaymin (Cielo)",
        image: "../../assets/images/pokemon/pm492.fSKY.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Hojas Mágicas" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Nudo de Pasto" },
        ],
      },
      {
        name: "Rillaboom",
        image: "../../assets/images/pokemon/pm812.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Hojas Navaja" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Nudo de Pasto" },
        ],
      },
      {
        name: "Tapu Bulu",
        image: "../../assets/images/pokemon/pm787.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Bala Semilla" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Nudo de Pasto" },
        ],
      },
      {
        name: "Chesnaught",
        image: "../../assets/images/pokemon/pm652.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Planta Feroz",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      // Megas
      {
        name: "Mega-Sceptile",
        image: "../../assets/images/pokemon/pm254.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Bala Semilla" },
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Planta Feroz",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Venusaur",
        image: "../../assets/images/pokemon/pm3.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Planta Feroz",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Victreebel",
        image: "../../assets/images/pokemon/pm71.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Hojas Navaja",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Hoja Aguda" },
        ],
      },
      // Shadows
      {
        name: "Chesnaught Oscuro",
        image: "../../assets/images/pokemon/pm652.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Planta Feroz",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Tangrowth Oscuro",
        image: "../../assets/images/pokemon/pm465.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          { typeImage: "../../assets/images/tipos/planta.png", name: "Latigazo" },
        ],
      },
      {
        name: "Venusaur Oscuro",
        image: "../../assets/images/pokemon/pm3.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/planta.png", name: "Látigo Cepa" },
          {
            typeImage: "../../assets/images/tipos/planta.png",
            name: "Planta Feroz",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
    ],
  },
  tierra: {
    color: "#E07E4F",
    atacantes: [
      // Normales
      {
        name: "Landorus (Tótem)",
        image: "../../assets/images/pokemon/pm645.fTHERIAN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Tifón de Arena",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Groudon",
        image: "../../assets/images/pokemon/pm383.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Filo del Abismo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Garchomp",
        image: "../../assets/images/pokemon/pm445.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Poder Terrestre",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Landorus (Encarnada)",
        image: "../../assets/images/pokemon/pm645.fINCARNATE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Poder Terrestre" },
        ],
      },
      {
        name: "Rhyperior",
        image: "../../assets/images/pokemon/pm464.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Bofetón Lodo" },
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Terremoto" },
        ],
      },
      {
        name: "Excadrill",
        image: "../../assets/images/pokemon/pm530.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Bofetón Lodo" },
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Arenas Ardientes" },
        ],
      },
      // Megas
      {
        name: "Primal Groudon",
        image: "../../assets/images/pokemon/pm383.fPRIMAL.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Filo del Abismo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Garchomp",
        image: "../../assets/images/pokemon/pm445.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Poder Terrestre",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Swampert",
        image: "../../assets/images/pokemon/pm260.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Terremoto" },
        ],
      },
      // Shadows
      {
        name: "Groudon Oscuro",
        image: "../../assets/images/pokemon/pm383.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Filo del Abismo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Garchomp Oscuro",
        image: "../../assets/images/pokemon/pm445.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          {
            typeImage: "../../assets/images/tipos/tierra.png",
            name: "Poder Terrestre",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Landorus (Encarnada) Oscuro",
        image: "../../assets/images/pokemon/pm645.SHADOW.fINCARNATE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Disparo de Lodo" },
          { typeImage: "../../assets/images/tipos/tierra.png", name: "Poder Terrestre" },
        ],
      },
    ],
  },
  hielo: {
    color: "#7CD1C8",
    atacantes: [
      // Normales
      {
        name: "Kyurem Blanco",
        image: "../../assets/images/pokemon/pm646.fWHITE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Colmillo de Hielo" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Llama Gélida" },
        ],
      },
      {
        name: "Baxcalibur",
        image: "../../assets/images/pokemon/pm998.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Colmillo de Hielo" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      {
        name: "Mamoswine",
        image: "../../assets/images/pokemon/pm473.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Polvo de Nieve" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      {
        name: "Cetitan",
        image: "../../assets/images/pokemon/pm975.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Esquirla Helada" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      {
        name: "Darmanitan Galar",
        image: "../../assets/images/pokemon/pm555.fGALARIAN_STANDARD.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Colmillo de Hielo" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      {
        name: "Avalugg",
        image: "../../assets/images/pokemon/pm713.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Colmillo de Hielo" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      // Megas
      {
        name: "Mega-Abomasnow",
        image: "../../assets/images/pokemon/pm460.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Polvo de Nieve" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Meteorobola" },
        ],
      },
      {
        name: "Mega-Glalie",
        image: "../../assets/images/pokemon/pm362.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Vaho Helado" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      // Shadows
      {
        name: "Mamoswine Oscuro",
        image: "../../assets/images/pokemon/pm473.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Polvo de Nieve" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Alud" },
        ],
      },
      {
        name: "Articuno Oscuro",
        image: "../../assets/images/pokemon/pm144.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Vaho Helado" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Triple Axel" },
        ],
      },
      {
        name: "Aurorus Oscuro",
        image: "../../assets/images/pokemon/pm699.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Vaho Helado" },
          { typeImage: "../../assets/images/tipos/hielo.png", name: "Meteorobola" },
        ],
      },
    ],
  },
  normal: {
    color: "#A5A8AB",
    atacantes: [
      // Normales
      {
        name: "Meloetta (Lírica)",
        image: "../../assets/images/pokemon/pm648.fARIA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Ataque Rápido" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Hiperrayo" },
        ],
      },
      {
        name: "Ursaluna",
        image: "../../assets/images/pokemon/pm901.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Tacleada" },
          {
            typeImage: "../../assets/images/tipos/normal.png",
            name: "Retribución",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Porygon-Z",
        image: "../../assets/images/pokemon/pm474.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Fijar Blanco" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Hiperrayo" },
        ],
      },
      {
        name: "Bewear",
        image: "../../assets/images/pokemon/pm760.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Tacleada" },
          {
            typeImage: "../../assets/images/tipos/normal.png",
            name: "Retribución",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Staraptor",
        image: "../../assets/images/pokemon/pm398.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Ataque Rápido" },
          {
            typeImage: "../../assets/images/tipos/normal.png",
            name: "Retribución",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Wyrdeer",
        image: "../../assets/images/pokemon/pm899.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Tacleada" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Pisotón" },
        ],
      },
      // Megas
      {
        name: "Mega-Lopunny",
        image: "../../assets/images/pokemon/pm428.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Destructor" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Hiperrayo" },
        ],
      },
      {
        name: "Mega-Audino",
        image: "../../assets/images/pokemon/pm531.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Destructor" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Hiperrayo" },
        ],
      },
      // Shadows
      {
        name: "Porygon-Z Oscuro",
        image: "../../assets/images/pokemon/pm474.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Fijar Blanco" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Hiperrayo" },
        ],
      },
      {
        name: "Ursaluna Oscuro",
        image: "../../assets/images/pokemon/pm901.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Tacleada" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Meteoros" },
        ],
      },
      {
        name: "Bewear Oscuro",
        image: "../../assets/images/pokemon/pm760.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/normal.png", name: "Tacleada" },
          { typeImage: "../../assets/images/tipos/normal.png", name: "Pisotón" },
        ],
      },
    ],
  },
  veneno: {
    color: "#B36BC8",
    atacantes: [
      // Normales
      {
        name: "Eternatus",
        image: "../../assets/images/pokemon/pm890.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Nihilego",
        image: "../../assets/images/pokemon/pm793.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Naganadel",
        image: "../../assets/images/pokemon/pm804.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Revavroom",
        image: "../../assets/images/pokemon/pm966.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Lanzamugre" },
        ],
      },
      {
        name: "Roserade",
        image: "../../assets/images/pokemon/pm407.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Overqwil",
        image: "../../assets/images/pokemon/pm904.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      // Megas
      {
        name: "Mega-Beedrill",
        image: "../../assets/images/pokemon/pm15.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Mega-Victreebel",
        image: "../../assets/images/pokemon/pm71.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Ácido" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      // Shadows
      {
        name: "Muk / Muk Alola Oscuro",
        image: "../../assets/images/pokemon/pm89.Doble.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Lanzamugre" },
        ],
      },
      {
        name: "Vileplume Oscuro",
        image: "../../assets/images/pokemon/pm45.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Ácido" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
      {
        name: "Scolipede Oscuro",
        image: "../../assets/images/pokemon/pm545.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Golpe Venenoso" },
          { typeImage: "../../assets/images/tipos/veneno.png", name: "Bomba Lodo" },
        ],
      },
    ],
  },
  psiquico: {
    color: "#F37271",
    atacantes: [
      // Normales
      {
        name: "Mewtwo",
        image: "../../assets/images/pokemon/pm150.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Psicocorte" },
          {
            typeImage: "../../assets/images/tipos/psiquico.png",
            name: "Onda Mental",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Lunala",
        image: "../../assets/images/pokemon/pm792.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Confusión" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
      {
        name: "Necrozma Alas del Alba",
        image: "../../assets/images/pokemon/pm800.fDAWN_WINGS.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Psicocorte" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Premonición" },
        ],
      },
      {
        name: "Hoopa (Desatado)",
        image: "../../assets/images/pokemon/pm720.fUNBOUND.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Confusión" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
      {
        name: "Necrozma Melena Crepuscular",
        image: "../../assets/images/pokemon/pm800.fDUSK_MANE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Psicocorte" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Premonición" },
        ],
      },
      {
        name: "Metagross",
        image: "../../assets/images/pokemon/pm376.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Cabezazo Zen" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
      // Megas
      {
        name: "Mega-Mewtwo Y",
        image: "../../assets/images/pokemon/pm150.fMEGA_Y.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Confusión" },
          {
            typeImage: "../../assets/images/tipos/psiquico.png",
            name: "Onda Mental",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Mewtwo X",
        image: "../../assets/images/pokemon/pm150.fMEGA_X.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Confusión" },
          {
            typeImage: "../../assets/images/tipos/psiquico.png",
            name: "Onda Mental",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Latios",
        image: "../../assets/images/pokemon/pm381.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Cabezazo Zen" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
      // Shadows
      {
        name: "Mewtwo Oscuro",
        image: "../../assets/images/pokemon/pm150.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Psicocorte" },
          {
            typeImage: "../../assets/images/tipos/psiquico.png",
            name: "Onda Mental",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Metagross Oscuro",
        image: "../../assets/images/pokemon/pm376.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Cabezazo Zen" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
      {
        name: "Latios Oscuro",
        image: "../../assets/images/pokemon/pm381.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Cabezazo Zen" },
          { typeImage: "../../assets/images/tipos/psiquico.png", name: "Fuerza Psíquica" },
        ],
      },
    ],
  },
  roca: {
    color: "#C7B98A",
    atacantes: [
      // Normales
      {
        name: "Rhyperior",
        image: "../../assets/images/pokemon/pm464.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          {
            typeImage: "../../assets/images/tipos/roca.png",
            name: "Romperrocas",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Glimmora",
        image: "../../assets/images/pokemon/pm970.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Lanzarrocas" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Rayo Meteórico" },
        ],
      },
      {
        name: "Terrakion",
        image: "../../assets/images/pokemon/pm639.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Avalancha" },
        ],
      },
      {
        name: "Tyranitar",
        image: "../../assets/images/pokemon/pm248.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Roca Afilada" },
        ],
      },
      {
        name: "Gigalith",
        image: "../../assets/images/pokemon/pm526.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          {
            typeImage: "../../assets/images/tipos/roca.png",
            name: "Rayo Meteórico",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Tyrantrum",
        image: "../../assets/images/pokemon/pm697.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Lanzarrocas" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Rayo Meteórico" },
        ],
      },
      // Megas
      {
        name: "Mega-Tyranitar",
        image: "../../assets/images/pokemon/pm248.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          {
            typeImage: "../../assets/images/tipos/roca.png",
            name: "Antiaéreo",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Roca Afilada" },
        ],
      },
      {
        name: "Mega-Diancie",
        image: "../../assets/images/pokemon/pm719.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Lanzarrocas" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Avalancha" },
        ],
      },
      {
        name: "Mega-Aerodactyl",
        image: "../../assets/images/pokemon/pm142.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Lanzarrocas" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Avalancha" },
        ],
      },
      // Shadows
      {
        name: "Rhyperior Oscuro",
        image: "../../assets/images/pokemon/pm464.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          {
            typeImage: "../../assets/images/tipos/roca.png",
            name: "Romperrocas",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Tyranitar Oscuro",
        image: "../../assets/images/pokemon/pm248.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          { typeImage: "../../assets/images/tipos/roca.png", name: "Roca Afilada" },
        ],
      },
      {
        name: "Gigalith Oscuro",
        image: "../../assets/images/pokemon/pm526.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/roca.png", name: "Antiaéreo" },
          {
            typeImage: "../../assets/images/tipos/roca.png",
            name: "Rayo Meteórico",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
    ],
  },
  acero: {
    color: "#5197A6",
    atacantes: [
      // Normales
      {
        name: "Zamazenta Escudo Supremo",
        image: "../../assets/images/pokemon/pm889.fHERO.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Golpe Supremo" },
        ],
      },
      {
        name: "Zacian Espada Suprema",
        image: "../../assets/images/pokemon/pm888.fHERO.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Corte Supremo" },
        ],
      },
      {
        name: "Necrozma Melena Crepuscular",
        image: "../../assets/images/pokemon/pm800.fDUSK_MANE.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Meteoimpacto" },
        ],
      },
      {
        name: "Metagross",
        image: "../../assets/images/pokemon/pm376.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Puño Bala" },
          {
            typeImage: "../../assets/images/tipos/acero.png",
            name: "Puño Meteoro",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Dialga",
        image: "../../assets/images/pokemon/pm483.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Cabeza de Hierro" },
        ],
      },
      {
        name: "Dialga Origen",
        image: "../../assets/images/pokemon/pm483.fORIGIN.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Cabeza de Hierro" },
        ],
      },
      // Megas
      {
        name: "Mega-Metagross",
        image: "../../assets/images/pokemon/pm376.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Puño Bala" },
          {
            typeImage: "../../assets/images/tipos/acero.png",
            name: "Puño Meteoro",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Lucario",
        image: "../../assets/images/pokemon/pm448.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Puño Bala" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Puño Meteoro" },
        ],
      },
      {
        name: "Mega-Aggron",
        image: "../../assets/images/pokemon/pm306.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Cola de Hierro" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Golpe Pesado" },
        ],
      },
      // Shadows
      {
        name: "Metagross Oscuro",
        image: "../../assets/images/pokemon/pm376.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Puño Bala" },
          {
            typeImage: "../../assets/images/tipos/acero.png",
            name: "Puño Meteoro",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Dialga Oscuro",
        image: "../../assets/images/pokemon/pm483.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Cabeza de Hierro" },
        ],
      },
      {
        name: "Excadrill Oscuro",
        image: "../../assets/images/pokemon/pm530.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_C+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/acero.png", name: "Garra de Metal" },
          { typeImage: "../../assets/images/tipos/acero.png", name: "Cabeza de Hierro" },
        ],
      },
    ],
  },
  agua: {
    color: "#56A0D7",
    atacantes: [
      // Normales
      {
        name: "Kyogre",
        image: "../../assets/images/pokemon/pm382.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Pulso Primigenio",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Primarina",
        image: "../../assets/images/pokemon/pm730.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Quaquaval",
        image: "../../assets/images/pokemon/pm914.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Swampert",
        image: "../../assets/images/pokemon/pm260.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Gyarados",
        image: "../../assets/images/pokemon/pm130.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          { typeImage: "../../assets/images/tipos/agua.png", name: "Hidrobomba" },
        ],
      },
      {
        name: "Volcanion",
        image: "../../assets/images/pokemon/pm721.icon.webp",
        rankImage: "../../assets/images/rangos/rango_B.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          { typeImage: "../../assets/images/tipos/agua.png", name: "Hidrobomba" },
        ],
      },
      // Megas
      {
        name: "Primal Kyogre",
        image: "../../assets/images/pokemon/pm382.fPRIMAL.icon.webp",
        rankImage: "../../assets/images/rangos/rango_S.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Pulso Primigenio",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Swampert",
        image: "../../assets/images/pokemon/pm260.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Mega-Blastoise",
        image: "../../assets/images/pokemon/pm9.fMEGA.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      // Shadows
      {
        name: "Kyogre Oscuro",
        image: "../../assets/images/pokemon/pm382.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A+.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Pulso Primigenio",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Swampert Oscuro",
        image: "../../assets/images/pokemon/pm260.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Chorro de Agua" },
          {
            typeImage: "../../assets/images/tipos/agua.png",
            name: "Hidrocañón",
            eliteImage: "../../assets/images/simbolos-incursiones/mtelite.png",
          },
        ],
      },
      {
        name: "Gyarados Oscuro",
        image: "../../assets/images/pokemon/pm130.SHADOW.icon.webp",
        rankImage: "../../assets/images/rangos/rango_A-.png",
        attacks: [
          { typeImage: "../../assets/images/tipos/agua.png", name: "Cascada" },
          { typeImage: "../../assets/images/tipos/agua.png", name: "Hidrobomba" },
        ],
      },
    ],
  },
};


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container-atacantes");

  function createTypeSection(tipoNombre, tipoData) {
    const { color, atacantes } = tipoData;
    const tipoId = getTypeId(tipoNombre);
    const typeLabel = getTypeLabel(tipoNombre);

    const section = document.createElement("section");
    section.className = "attacker-type-section";
    section.id = tipoId;
    section.style.setProperty("--type-color", color);
    section.style.setProperty("--type-rgb", hexToRgbParts(color));
    section.innerHTML = `
      <div class="attacker-type-header">
        <div class="attacker-type-title">
          <span class="attacker-type-icon">
            <img src="${escapeHTML(getTypeIconSrc(tipoId))}" alt="" loading="lazy" decoding="async" />
          </span>
          <div>
            <span class="attacker-type-kicker">Tipo</span>
            <h2>${escapeHTML(typeLabel)}</h2>
          </div>
        </div>
        <span class="attacker-count">${atacantes.length} atacantes</span>
      </div>
      <div class="attackers-grid"></div>
    `;

    const attackersGrid = section.querySelector(".attackers-grid");

    atacantes.forEach((counter) => {
      const card = document.createElement("article");
      card.className = "item attacker-card";
      card.innerHTML = `
        <div class="attacker-card-media">
          <img class="lazy attacker-image" data-src="${escapeHTML(counter.image)}" alt="${escapeHTML(counter.name)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='../../assets/images/logo/favicon.png';" />
          <span class="attacker-rank">
            <img src="${escapeHTML(counter.rankImage)}" alt="Rango" loading="lazy" decoding="async" />
          </span>
        </div>
        <div class="attacker-card-body">
          <p class="name-counter">${escapeHTML(counter.name)}</p>
          <div class="attacker-moves">
            ${counter.attacks
              .map(
                (attack) => `
                  <div class="attacker-move">
                    <img src="${escapeHTML(attack.typeImage)}" alt="" class="icono-counters" loading="lazy" decoding="async" />
                    <span class="ataque-counters">${escapeHTML(attack.name)}</span>
                    ${
                      attack.eliteImage
                        ? `<img class="mtelite" src="${escapeHTML(attack.eliteImage)}" alt="MT elite" loading="lazy" decoding="async" />`
                        : ""
                    }
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      `;
      attackersGrid.appendChild(card);
    });

    return section;
  }

  function renderType(tipoNombre = "insecto") {
    if (!container) return;
    const typeData = tipos[tipoNombre] || tipos.insecto;
    const activeType = tipos[tipoNombre] ? tipoNombre : "insecto";

    container.replaceChildren(createTypeSection(activeType, typeData));
    setActiveType(activeType);
    activateLazyLoading();
  }

  function activateLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "50px" }
    );

    lazyImages.forEach((img) => observer.observe(img));
  }

  addTypeSelectorListeners(renderType);
  renderType("insecto");
});
