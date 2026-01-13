document.addEventListener("DOMContentLoaded", function () {
  const rocketBar = document.querySelector(".scroll-bar-sections");
  const selectTypePlaceholder = document.querySelector(".selecttype-placeholder");

  function handleScroll() {
    if (!selectTypePlaceholder || !rocketBar) return;

    const triggerPoint = selectTypePlaceholder.offsetTop;

    if (window.scrollY >= triggerPoint) {
      rocketBar.classList.add("show");
    } else {
      rocketBar.classList.remove("show");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Agregar evento de clic para hacer scroll a la sección correcta
  document.querySelectorAll(".scroll-bar-sections img").forEach((img) => {
    img.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 80; // Espaciado para evitar que quede pegado al borde superior
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn(`⚠️ No se encontró la sección con ID "${targetId}".`);
      }
    });
  });
});

const teamRocketData = [
  {
    character: {
      id: "giovanni",
      name: "Jefe Giovanni",
      image: "../../assets/images/equipo-rocket/jefe-giovanni.webp",
      type: "",
      frase: "No podrás pararme... pero estoy impresionado con tu intento.",
    },
    borderColor: "#000",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Persian", image: "../../assets/images/pokemon/pm53.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Kangaskhan", image: "../../assets/images/pokemon/pm115.SHADOW.icon.webp" },
          { name: "Rhyperior", image: "../../assets/images/pokemon/pm464.SHADOW.icon.webp" },
          { name: "Nidoking", image: "../../assets/images/pokemon/pm34.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Tornadus", image: "../../assets/images/pokemon/pm641.fINCARNATE.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "cliff",
      name: "Líder Cliff",
      image: "../../assets/images/equipo-rocket/lider-cliff.webp",
      type: "",
      frase: "Haré cualquier cosa por el Team GO Rocket.",
    },
    borderColor: "#000",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Larvitar",
            image: "../../assets/images/pokemon/pm246.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm246.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Annihilape", image: "../../assets/images/pokemon/pm979.SHADOW.icon.webp" },
          { name: "Honchkrow", image: "../../assets/images/pokemon/pm430.SHADOW.icon.webp" },
          { name: "Skarmory", image: "../../assets/images/pokemon/pm227.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Tyranitar", image: "../../assets/images/pokemon/pm248.SHADOW.icon.webp" },
          { name: "Machamp", image: "../../assets/images/pokemon/pm68.SHADOW.icon.webp" },
          { name: "Luxray", image: "../../assets/images/pokemon/pm405.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "arlo",
      name: "Líder Arlo",
      image: "../../assets/images/equipo-rocket/lider-arlo.webp",
      type: "",
      frase: "La arrogancia conduce al fracaso.",
    },
    borderColor: "#000",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Wobbuffet",
            image: "../../assets/images/pokemon/pm202.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm202.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Steelix", image: "../../assets/images/pokemon/pm208.SHADOW.icon.webp" },
          { name: "Slowbro", image: "../../assets/images/pokemon/pm80.SHADOW.icon.webp" },
          { name: "Crobat", image: "../../assets/images/pokemon/pm169.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Scizor", image: "../../assets/images/pokemon/pm212.SHADOW.icon.webp" },
          { name: "Alakazam", image: "../../assets/images/pokemon/pm65.SHADOW.icon.webp" },
          { name: "Muk de Alola", image: "../../assets/images/pokemon/pm89.fALOLA.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "sierra",
      name: "Líder Sierra",
      image: "../../assets/images/equipo-rocket/lider-sierra.webp",
      type: "",
      frase: "¡Espero que te guste el sabor del fracaso!.",
    },
    borderColor: "#000",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Feebas",
            image: "../../assets/images/pokemon/pm349.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm349.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Mismagius", image: "../../assets/images/pokemon/pm429.SHADOW.icon.webp" },
          { name: "Staraptor", image: "../../assets/images/pokemon/pm398.SHADOW.icon.webp" },
          { name: "Ferrothorn", image: "../../assets/images/pokemon/pm598.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Houndoom", image: "../../assets/images/pokemon/pm229.SHADOW.icon.webp" },
          { name: "Camerupt", image: "../../assets/images/pokemon/pm323.SHADOW.icon.webp" },
          { name: "Drapion", image: "../../assets/images/pokemon/pm452.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "normal",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Normal",
      frase: "Normal no significa débil.",
    },
    borderColor: "#b2b189",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Slakoth", image: "../../assets/images/pokemon/pm287.SHADOW.icon.webp" },
          { name: "Swablu", image: "../../assets/images/pokemon/pm333.SHADOW.icon.webp" },
          { name: "Bunnelby", image: "../../assets/images/pokemon/pm659.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Rattata", image: "../../assets/images/pokemon/pm19.SHADOW.icon.webp" },
          { name: "Vigoroth", image: "../../assets/images/pokemon/pm288.SHADOW.icon.webp" },
          { name: "Diggersby", image: "../../assets/images/pokemon/pm660.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Raticate", image: "../../assets/images/pokemon/pm20.SHADOW.icon.webp" },
          { name: "Ursaring", image: "../../assets/images/pokemon/pm217.SHADOW.icon.webp" },
          { name: "Slaking", image: "../../assets/images/pokemon/pm289.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "fuego",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Fuego",
      frase: "¿Sabes lo caliente que puede llegar a ser el aliento de fuego de los Pokémon?.",
    },
    borderColor: "#f08f49",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Darumaka", image: "../../assets/images/pokemon/pm554.SHADOW.icon.webp" },
          { name: "Numel", image: "../../assets/images/pokemon/pm322.SHADOW.icon.webp" },
          { name: "Tepig", image: "../../assets/images/pokemon/pm498.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Houndoom", image: "../../assets/images/pokemon/pm229.SHADOW.icon.webp" },
          { name: "Ninetales", image: "../../assets/images/pokemon/pm38.SHADOW.icon.webp" },
          { name: "Pignite", image: "../../assets/images/pokemon/pm499.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Houndoom", image: "../../assets/images/pokemon/pm229.SHADOW.icon.webp" },
          { name: "Darmanitan", image: "../../assets/images/pokemon/pm555.fSTANDARD.SHADOW.icon.webp" },
          { name: "Emboar", image: "../../assets/images/pokemon/pm500.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "agua",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Agua",
      frase: "¡Estas aguas son traicioneras!.",
    },
    borderColor: "#609ddc",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Oshawott", image: "../../assets/images/pokemon/pm501.SHADOW.icon.webp" },
          { name: "Spheal",   image: "../../assets/images/pokemon/pm363.SHADOW.icon.webp" },
          { name: "Staryu", image: "../../assets/images/pokemon/pm120.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Dewott",  image: "../../assets/images/pokemon/pm502.SHADOW.icon.webp" },
          { name: "Seadra",  image: "../../assets/images/pokemon/pm117.SHADOW.icon.webp" },
          { name: "Cloyster",image: "../../assets/images/pokemon/pm91.SHADOW.icon.webp"  },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Samurott",   image: "../../assets/images/pokemon/pm503.SHADOW.icon.webp" },
          { name: "Carracosta", image: "../../assets/images/pokemon/pm565.SHADOW.icon.webp" },
          { name: "Whiscash",   image: "../../assets/images/pokemon/pm340.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "agua2",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Agua",
      frase: "¡Estas aguas son traicioneras!.",
    },
    borderColor: "#609ddc",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Magikarp", image: "../../assets/images/pokemon/pm129.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Magikarp", image: "../../assets/images/pokemon/pm129.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Magikarp", image: "../../assets/images/pokemon/pm129.SHADOW.icon.webp" },
          { name: "Gyarados", image: "../../assets/images/pokemon/pm130.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "electrico",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Eléctrico",
      frase: "¡Prepárate para alucinar!.",
    },
    borderColor: "#ffc729",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Joltik",     image: "../../assets/images/pokemon/pm595.SHADOW.icon.webp" },
          { name: "Magnemite",  image: "../../assets/images/pokemon/pm81.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm81.SHADOW.s.icon.webp", shiny: true },
          { name: "Mareep",    image: "../../assets/images/pokemon/pm179.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Voltorb",     image: "../../assets/images/pokemon/pm100.SHADOW.icon.webp" },
          { name: "Electabuzz",  image: "../../assets/images/pokemon/pm125.SHADOW.icon.webp" },
          { name: "Geodude Alola", image: "../../assets/images/pokemon/pm74.fALOLA.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Galvantula", image: "../../assets/images/pokemon/pm596.SHADOW.icon.webp" },
          { name: "Luxray",     image: "../../assets/images/pokemon/pm405.SHADOW.icon.webp" },
          { name: "Ampharos",   image: "../../assets/images/pokemon/pm181.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "planta",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Planta",
      frase: "¡No nos vaciles!.",
    },
    borderColor: "#83cb59",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Snivy",  image: "../../assets/images/pokemon/pm495.SHADOW.icon.webp" },
          { name: "Seedot", image: "../../assets/images/pokemon/pm273.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm273.SHADOW.s.icon.webp", shiny: true },
          { name: "Hoppip", image: "../../assets/images/pokemon/pm187.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Servine",    image: "../../assets/images/pokemon/pm496.SHADOW.icon.webp" },
          { name: "Ferrothorn", image: "../../assets/images/pokemon/pm598.SHADOW.icon.webp" },
          { name: "Lileep",     image: "../../assets/images/pokemon/pm345.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Serperior", image: "../../assets/images/pokemon/pm497.SHADOW.icon.webp" },
          { name: "Vileplume", image: "../../assets/images/pokemon/pm45.SHADOW.icon.webp"  },
          { name: "Cacturne",  image: "../../assets/images/pokemon/pm332.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "hielo",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Hielo",
      frase: "El frío puede paralizarte, ¿no lo sabes?.",
    },
    borderColor: "#81d3c5",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Amaura",           image: "../../assets/images/pokemon/pm698.SHADOW.icon.webp" },
          { name: "Sneasel",          image: "../../assets/images/pokemon/pm215.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm215.SHADOW.s.icon.webp", shiny: true },
          { name: "Swinub",  image: "../../assets/images/pokemon/pm220.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Ninetales Alola", image: "../../assets/images/pokemon/pm38.fALOLA.SHADOW.icon.webp" },
          { name: "Sealeo",          image: "../../assets/images/pokemon/pm364.SHADOW.icon.webp" },
          { name: "Froslass",        image: "../../assets/images/pokemon/pm478.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Aurorus", image: "../../assets/images/pokemon/pm699.SHADOW.icon.webp" },
          { name: "Glalie",    image: "../../assets/images/pokemon/pm362.SHADOW.icon.webp" },
          { name: "Froslass",  image: "../../assets/images/pokemon/pm478.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "pelea",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Pelea",
      frase: "Estos músculos no son solo para impresionar.",
    },
    borderColor: "#c53831",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Machop", image: "../../assets/images/pokemon/pm66.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm66.SHADOW.s.icon.webp", shiny: true },
          { name: "Mankey", image: "../../assets/images/pokemon/pm56.SHADOW.icon.webp" },
          { name: "Makuhita",image: "../../assets/images/pokemon/pm296.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Hitmonlee", image: "../../assets/images/pokemon/pm106.SHADOW.icon.webp" },
          { name: "Hitmonchan",image: "../../assets/images/pokemon/pm107.SHADOW.icon.webp" },
          { name: "Gurdurr",   image: "../../assets/images/pokemon/pm533.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Toxicroak", image: "../../assets/images/pokemon/pm454.SHADOW.icon.webp" },
          { name: "Infernape", image: "../../assets/images/pokemon/pm392.SHADOW.icon.webp" },
          { name: "Conkeldurr",image: "../../assets/images/pokemon/pm534.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "veneno",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Veneno",
      frase: "¡En posición y listo para atacar!.",
    },
    borderColor: "#a441a2",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Tentacool",
            image: "../../assets/images/pokemon/pm72.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm72.SHADOW.s.icon.webp",
            shiny: true,
          },
          {
            name: "Skorupi",
            image: "../../assets/images/pokemon/pm451.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm451.SHADOW.s.icon.webp",
            shiny: true,
          },
          {
            name: "Qwilfish",
            image: "../../assets/images/pokemon/pm211.SHADOW.icon.webp",
          },
        ],
      },
      2: {
        active: true,
        pokemon: [
          {
            name: "Nidorino",
            image: "../../assets/images/pokemon/pm33.SHADOW.icon.webp",
          },
          {
            name: "Nidorina",
            image: "../../assets/images/pokemon/pm30.SHADOW.icon.webp",
          },
          {
            name: "Weezing de Galar",
            image: "../../assets/images/pokemon/pm110.fGALARIAN.SHADOW.icon.webp",
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          {
            name: "Weezing",
            image: "../../assets/images/pokemon/pm110.SHADOW.icon.webp",
          },
          {
            name: "Toxicroak",
            image: "../../assets/images/pokemon/pm454.SHADOW.icon.webp",
          },
          {
            name: "Amoonguss",
            image: "../../assets/images/pokemon/pm591.SHADOW.icon.webp",
          },
        ],
      },
    },
  },
  {
    character: {
      id: "tierra",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Tierra",
      frase: "¡Haré que te comas el polvo!.",
    },
    borderColor: "#dc8355",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Drilbur",  image: "../../assets/images/pokemon/pm529.SHADOW.icon.webp" },
          { name: "Sandshrew",  image: "../../assets/images/pokemon/pm27.SHADOW.icon.webp" },
          { name: "Gligar",   
            image: "../../assets/images/pokemon/pm207.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm207.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Donphan",  image: "../../assets/images/pokemon/pm232.SHADOW.icon.webp" },
          { name: "Rhyhorn",  image: "../../assets/images/pokemon/pm111.SHADOW.icon.webp" },
          { name: "Vibrava",  image: "../../assets/images/pokemon/pm329.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Whiscash", image: "../../assets/images/pokemon/pm340.SHADOW.icon.webp" },
          { name: "Flygon",   image: "../../assets/images/pokemon/pm330.SHADOW.icon.webp" },
          { name: "Torterra", image: "../../assets/images/pokemon/pm389.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "volador",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Volador",
      frase: "¡Mi Pokémon pájaro quiere combatir contigo!.",
    },
    borderColor: "#b19af4",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Fletchling",  image: "../../assets/images/pokemon/pm661.SHADOW.icon.webp" },
          { name: "Taillow", image: "../../assets/images/pokemon/pm276.SHADOW.icon.webp" },
          { name: "Pikipek", image: "../../assets/images/pokemon/pm731.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          {
            name: "Gligar",
            image: "../../assets/images/pokemon/pm207.SHADOW.icon.webp",
            // shinyImage: "../../assets/images/pokemon/pm207.SHADOW.s.icon.webp",
            // shiny: true,
          },
          { name: "Swellow", image: "../../assets/images/pokemon/pm277.SHADOW.icon.webp" },
          {
            name: "Zubat",
            image: "../../assets/images/pokemon/pm41.SHADOW.icon.webp",
            // shinyImage: "../../assets/images/pokemon/pm41.SHADOW.s.icon.webp",
            // shiny: true,
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Pidgeot",   image: "../../assets/images/pokemon/pm18.SHADOW.icon.webp" },
          { name: "Dragonite", image: "../../assets/images/pokemon/pm149.SHADOW.icon.webp" },
          { name: "Archeops",  image: "../../assets/images/pokemon/pm567.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "psiquico",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Psíquico",
      frase: "¿Te asustan los psíquicos que usan un poder invisible?.",
    },
    borderColor: "#fa628f",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Ralts", image: "../../assets/images/pokemon/pm280.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm280.SHADOW.s.icon.webp", shiny: true, },
          { name: "Baltoy", image: "../../assets/images/pokemon/pm343.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Wobbuffet", image: "../../assets/images/pokemon/pm202.SHADOW.icon.webp" },
          { name: "Duosion",   image: "../../assets/images/pokemon/pm578.SHADOW.icon.webp" },
          { name: "Drowzee", image: "../../assets/images/pokemon/pm96.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Malamar", image: "../../assets/images/pokemon/pm687.SHADOW.icon.webp" },
          { name: "Reuniclus", image: "../../assets/images/pokemon/pm579.SHADOW.icon.webp" },
          { name: "Gallade",   image: "../../assets/images/pokemon/pm475.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "insecto",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Insecto",
      frase: "¡Vamos, mi poderoso Pokémon de tipo Insecto!.",
    },
    borderColor: "#b0c13a",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Scyther",
            image: "../../assets/images/pokemon/pm123.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm123.SHADOW.s.icon.webp",
            shiny: true,
          },
          { name: "Pineco", image: "../../assets/images/pokemon/pm204.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm204.SHADOW.s.icon.webp", shiny: true, },
          { name: "Grubbin", image: "../../assets/images/pokemon/pm736.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Shelmet",    image: "../../assets/images/pokemon/pm616.SHADOW.icon.webp" },
          { name: "Karrablast", image: "../../assets/images/pokemon/pm588.SHADOW.icon.webp" },
          {
            name: "Anorith",
            image: "../../assets/images/pokemon/pm347.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm347.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Scizor",      image: "../../assets/images/pokemon/pm212.SHADOW.icon.webp" },
          { name: "Forretress",  image: "../../assets/images/pokemon/pm205.SHADOW.icon.webp" },
          { name: "Beedrill",    image: "../../assets/images/pokemon/pm15.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "roca",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Roca",
      frase: "¡Soy fuerte como una roca!.",
    },
    borderColor: "#bdaa4b",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Roggenrola", image: "../../assets/images/pokemon/pm524.SHADOW.icon.webp" },
          { name: "Amaura",   image: "../../assets/images/pokemon/pm698.SHADOW.icon.webp" },
          { name: "Tyrunt",     image: "../../assets/images/pokemon/pm696.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Graveler", image: "../../assets/images/pokemon/pm75.SHADOW.icon.webp" },
          { name: "Shieldon", image: "../../assets/images/pokemon/pm410.SHADOW.icon.webp" },
          { name: "Cranidos", image: "../../assets/images/pokemon/pm408.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Golem",      image: "../../assets/images/pokemon/pm76.SHADOW.icon.webp" },
          { name: "Aurorus", image: "../../assets/images/pokemon/pm699.SHADOW.icon.webp" },
          { name: "Tyrantrum",   image: "../../assets/images/pokemon/pm697.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "fantasma",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Fantasma",
      frase: "Ja, ja, ja...",
    },
    borderColor: "#7f65a0",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Gastly",  image: "../../assets/images/pokemon/pm92.SHADOW.icon.webp" },
          { name: "Golett",  image: "../../assets/images/pokemon/pm622.SHADOW.icon.webp" },
          { name: "Duskull", image: "../../assets/images/pokemon/pm355.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Dusclops", image: "../../assets/images/pokemon/pm356.SHADOW.icon.webp" },
          { name: "Haunter",  image: "../../assets/images/pokemon/pm93.SHADOW.icon.webp" },
          {
            name: "Sableye",
            image: "../../assets/images/pokemon/pm302.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm302.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Froslass",       image: "../../assets/images/pokemon/pm478.SHADOW.icon.webp" },
          { name: "Marowak Alola",  image: "../../assets/images/pokemon/pm105.fALOLA.SHADOW.icon.webp" },
          { name: "Gengar",         image: "../../assets/images/pokemon/pm94.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "dragon",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Dragón",
      frase: "¡GRRR! ¿Qué te pareció eso?.",
    },
    borderColor: "#2476c9",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Deino",
            image: "../../assets/images/pokemon/pm633.SHADOW.icon.webp",
          },
          {
            name: "Bagon",
            image: "../../assets/images/pokemon/pm371.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm371.SHADOW.s.icon.webp",
            shiny: true,
          },
          { name: "Tyrunt",     image: "../../assets/images/pokemon/pm696.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Dragonair",        image: "../../assets/images/pokemon/pm148.SHADOW.icon.webp" },
          { name: "Exeggutor Alola",  image: "../../assets/images/pokemon/pm103.fALOLA.SHADOW.icon.webp" },
          { name: "Gabite",           image: "../../assets/images/pokemon/pm444.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Dragonite", image: "../../assets/images/pokemon/pm149.SHADOW.icon.webp" },
          { name: "Salamence", image: "../../assets/images/pokemon/pm373.SHADOW.icon.webp" },
          { name: "Tyrantrum",   image: "../../assets/images/pokemon/pm697.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "siniestro",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Siniestro",
      frase: "Donde quiera que hay luz, también hay sombras...",
    },
    borderColor: "#786050",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Cacnea",
            image: "../../assets/images/pokemon/pm331.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm331.SHADOW.s.icon.webp",
            shiny: true,
          },
          { name: "Rattata Alola", image: "../../assets/images/pokemon/pm19.fALOLA.SHADOW.icon.webp" },
          { name: "Carvanha",        image: "../../assets/images/pokemon/pm318.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm318.SHADOW.s.icon.webp", shiny: true, },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Raticate Alola", image: "../../assets/images/pokemon/pm20.fALOLA.SHADOW.icon.webp" },
          { name: "Muk Alola",      image: "../../assets/images/pokemon/pm89.fALOLA.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Muk Alola",  image: "../../assets/images/pokemon/pm89.fALOLA.SHADOW.icon.webp" },
          { name: "Skuntank",   image: "../../assets/images/pokemon/pm435.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "acero",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Tipo Acero",
      frase: "¡No eres rival para mi voluntad de hierro!.",
    },
    borderColor: "#b9b9cf",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Sandshrew Alola", image: "../../assets/images/pokemon/pm27.fALOLA.SHADOW.icon.webp" },
          { name: "Beldum",       image: "../../assets/images/pokemon/pm374.SHADOW.icon.webp", shinyImage: "../../assets/images/pokemon/pm374.SHADOW.s.icon.webp", shiny: true, },
          { name: "Diglett Alola",   image: "../../assets/images/pokemon/pm50.fALOLA.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Skarmory", image: "../../assets/images/pokemon/pm227.SHADOW.icon.webp" },
          { name: "Lairon",   image: "../../assets/images/pokemon/pm305.SHADOW.icon.webp" },
          { name: "Metang",   image: "../../assets/images/pokemon/pm375.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Sandslash Alola", image: "../../assets/images/pokemon/pm28.fALOLA.SHADOW.icon.webp" },
          { name: "Aggron",          image: "../../assets/images/pokemon/pm306.SHADOW.icon.webp" },
          { name: "Scizor",          image: "../../assets/images/pokemon/pm212.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "hada",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Tipo Hada",
      frase: "¡Mira a mi Pokémon tan mono!.",
    },
    borderColor: "#d98eb3",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Vulpix Alola", image: "../../assets/images/pokemon/pm37.fALOLA.SHADOW.icon.webp" },
          {
            name: "Mawile",
            image: "../../assets/images/pokemon/pm303.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm303.SHADOW.s.icon.webp",
            shiny: true,
          },
          { name: "Snubbull", image: "../../assets/images/pokemon/pm209.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: true,
        pokemon: [
          { name: "Snubbull", image: "../../assets/images/pokemon/pm209.SHADOW.icon.webp" },
          { name: "Kirlia",   image: "../../assets/images/pokemon/pm281.SHADOW.icon.webp" },
          {
            name: "Weezing de Galar",
            image: "../../assets/images/pokemon/pm110.fGALARIAN.SHADOW.icon.webp",
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Ninetales Alola", image: "../../assets/images/pokemon/pm38.fALOLA.SHADOW.icon.webp" },
          {
            name: "Weezing de Galar",
            image: "../../assets/images/pokemon/pm110.fGALARIAN.SHADOW.icon.webp",
          },
          { name: "Granbull",        image: "../../assets/images/pokemon/pm210.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "iniciales",
      name: "Recluta Hombre",
      image: "../../assets/images/equipo-rocket/hombre-recluta.webp",
      type: "Iniciales Kanto",
      frase: "No te molestes, ya he ganado.",
    },
    borderColor: "#000000",
    slots: {
      1: {
        active: true,
        pokemon: [
          { 
            name: "Bulbasaur",    
            image: "../../assets/images/pokemon/pm1.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm1.SHADOW.s.icon.webp",
            shiny: true,
          },
          { 
            name: "Charmander",
            image: "../../assets/images/pokemon/pm4.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm4.SHADOW.s.icon.webp",
            shiny: true,
          },
          { 
            name: "Squirtle", 
            image: "../../assets/images/pokemon/pm7.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm7.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { 
            name: "Ivysaur",    
            image: "../../assets/images/pokemon/pm2.SHADOW.icon.webp",
          },
          { 
            name: "Charmeleon",
            image: "../../assets/images/pokemon/pm5.SHADOW.icon.webp",
          },
          { 
            name: "Wartortle", 
            image: "../../assets/images/pokemon/pm8.SHADOW.icon.webp",
          },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { 
            name: "Venusaur",    
            image: "../../assets/images/pokemon/pm3.SHADOW.icon.webp",
          },
          { 
            name: "Charizard",
            image: "../../assets/images/pokemon/pm6.SHADOW.icon.webp",
          },
          { 
            name: "Blastoise", 
            image: "../../assets/images/pokemon/pm9.SHADOW.icon.webp",
          },
        ],
      },
    },
  },
  {
    character: {
      id: "snorlax",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Snorlax",
      frase: "Ganar es para los ganadores.",
    },
    borderColor: "#000000",
    slots: {
      1: {
        active: true,
        pokemon: [
          { name: "Snorlax", image: "../../assets/images/pokemon/pm143.SHADOW.icon.webp" },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Poliwrath", image: "../../assets/images/pokemon/pm62.SHADOW.icon.webp" },
          { name: "Gardevoir", image: "../../assets/images/pokemon/pm282.SHADOW.icon.webp" },
          { name: "Snorlax",   image: "../../assets/images/pokemon/pm143.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Gyarados",  image: "../../assets/images/pokemon/pm130.SHADOW.icon.webp" },
          { name: "Dragonair", image: "../../assets/images/pokemon/pm149.SHADOW.icon.webp" },
          { name: "Snorlax",   image: "../../assets/images/pokemon/pm143.SHADOW.icon.webp" },
        ],
      },
    },
  },
  {
    character: {
      id: "senuelo",
      name: "Recluta Mujer",
      image: "../../assets/images/equipo-rocket/mujer-recluta.webp",
      type: "Señuelo",
      frase: "¡Nunca llegarás hasta él!.",
    },
    borderColor: "#000000",
    slots: {
      1: {
        active: true,
        pokemon: [
          {
            name: "Bellsprout",
            image: "../../assets/images/pokemon/pm69.SHADOW.icon.webp",
            shinyImage: "../../assets/images/pokemon/pm69.SHADOW.s.icon.webp",
            shiny: true,
          },
        ],
      },
      2: {
        active: false,
        pokemon: [
          { name: "Raticate",  image: "../../assets/images/pokemon/pm20.SHADOW.icon.webp" },
          { name: "Weepinbell", image: "../../assets/images/pokemon/pm70.SHADOW.icon.webp" },
        ],
      },
      3: {
        active: false,
        pokemon: [
          { name: "Raticate", image: "../../assets/images/pokemon/pm20.SHADOW.icon.webp" },
          { name: "Snorlax",  image: "../../assets/images/pokemon/pm143.SHADOW.icon.webp" },
        ],
      },
    },
  },

];

function renderTeamRocket(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`⚠️ Contenedor no encontrado: ${containerId}`);
    return;
  }

  container.innerHTML = ""; // Limpiar contenido previo

  // 🔹 Cuadrícula principal
  const teamRocketGrid = document.createElement("div");
  teamRocketGrid.className = "teamrocket-grid";

  teamRocketData.forEach(({ character, slots, borderColor }) => {
    // 🔹 Usamos `character.id` en lugar de `character.type`
    const sectionId = character.id; 

    if (!sectionId) {
      console.warn(`⚠️ No se encontró ID para ${character.name}`);
      return;
    }

    // 🔹 Crear el elemento para cada personaje con su ID correspondiente
    const teamRocketItem = document.createElement("div");
    teamRocketItem.className = "teamrocket-item";
    teamRocketItem.style.borderColor = borderColor;
    teamRocketItem.id = sectionId;  // 🔹 Sección con ID único

    // Información del personaje
    const characterInfo = document.createElement("div");
    characterInfo.className = "character-info";

    const characterImg = document.createElement("img");
    characterImg.dataset.src = character.image;
    characterImg.alt = character.name;
    characterImg.className = "character-image lazy";

    const characterName = document.createElement("h4");
    characterName.className = "character-name";
    characterName.innerHTML = `${character.name}<br /><span class="character-type">${character.type}</span>`;

    characterInfo.append(characterImg, characterName);
    teamRocketItem.appendChild(characterInfo);

    // 🔹 Alineación de Pokémon
    const alignment = document.createElement("div");
    alignment.className = "alignment";

    Object.entries(slots).forEach(([slotKey, slot]) => {
      const slotDiv = document.createElement("div");
      slotDiv.className = `slot${slotKey} ${slot.active ? "slot-active" : ""}`;
      slotDiv.dataset.slot = slotKey;

      slot.pokemon.forEach((pokemon) => {
        const pokemonSlot = document.createElement("div");
        pokemonSlot.className = "pokemon-slot";

        if (pokemon.shiny) {
          const shinyIcon = document.createElement("div");
          shinyIcon.className = "shiny-icon";
          shinyIcon.setAttribute("data-images", JSON.stringify([pokemon.image, pokemon.shinyImage]));

          const shinyImg = document.createElement("img");
          shinyImg.dataset.src = "../../assets/images/simbolos-incursiones/shiny.png";
          shinyImg.alt = "shiny";
          shinyImg.className = "lazy";
          shinyIcon.appendChild(shinyImg);

          pokemonSlot.appendChild(shinyIcon);
        }

        const pokemonImg = document.createElement("img");
        pokemonImg.dataset.src = pokemon.image;
        pokemonImg.alt = pokemon.name;
        pokemonImg.className = "pokemon-image lazy";
        pokemonSlot.appendChild(pokemonImg);

        slotDiv.appendChild(pokemonSlot);
      });

      alignment.appendChild(slotDiv);
    });

    teamRocketItem.appendChild(alignment);

    // Frase del personaje
    if (character.frase) {
      const characterPhrase = document.createElement("div");
      characterPhrase.className = "character-phrase";
      characterPhrase.textContent = character.frase;
      characterPhrase.title = character.frase;
      teamRocketItem.appendChild(characterPhrase);
    }

    // 🔹 Agregar cada personaje a la cuadrícula principal con su ID
    teamRocketGrid.appendChild(teamRocketItem);
  });

  // 🔹 Agregar `teamRocketGrid` al contenedor principal
  container.appendChild(teamRocketGrid);

  const bannersHTML = `
    <div class="footer-container">
      <div class="footer-banner">
        <span class="shiny-icon-circle">
          <img
            src="../../assets/images/simbolos-incursiones/shiny.png"
            alt="shiny icon"
            class="brillante-icon"
          />
        </span>
        <span>Posibilidad de Brillante</span>
      </div>
      <div class="footer-banner">
          <span class="shiny-icon-circle">
            <img
              src="../../assets/images/simbolos-incursiones/captura-tgr.png"
              alt="shiny icon"
              class="brillante-icon"
            />
          </span>
          <span>Posible Captura</span>
        </div>
    </div>
  `;

  // 🔹 Agregar el banner dentro del contenedor después de la cuadrícula
  container.innerHTML += bannersHTML;

  applyShinyHoverEffects();
  lazyLoadImages();
}

function lazyLoadImages() {
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
    { rootMargin: "200px" } // Aumentamos el margen para cargar imágenes antes de que sean visibles
  );

  lazyImages.forEach((img) => observer.observe(img));
}


function preloadShinyImages() {
  teamRocketData.forEach(({ slots }) => {
    Object.values(slots).forEach((slot) => {
      slot.pokemon.forEach((pokemon) => {
        if (pokemon.shinyImage) {
          const img = new Image();
          img.src = pokemon.shinyImage; // Precarga imágenes shiny
        }
      });
    });
  });
}

function applyShinyHoverEffects() {
  const shinyIcons = document.querySelectorAll(".shiny-icon");
  shinyIcons.forEach((icon) => {
    const images = JSON.parse(icon.getAttribute("data-images"));
    const pokemonImage = icon
      .closest(".pokemon-slot")
      .querySelector(".pokemon-image");

    icon.addEventListener("mouseover", () => {
      pokemonImage.src = images[1]; // Cambiar a shiny
    });

    icon.addEventListener("mouseout", () => {
      pokemonImage.src = images[0]; // Cambiar a normal
    });
  });
}

// Renderizado al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  preloadShinyImages();
  renderTeamRocket("rocket-container");
});
