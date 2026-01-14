document.addEventListener("DOMContentLoaded", function () {
  const regionBar = document.querySelector(".scroll-bar-sections");
  const selectTypePlaceholder = document.querySelector(".selecttype-placeholder");

  // Hacer que la barra aparezca solo cuando el usuario haga scroll
  function handleScroll() {
    const triggerPoint = selectTypePlaceholder.offsetTop;

    if (window.scrollY >= triggerPoint) {
      regionBar.classList.add("show"); // Mostrar la barra fija
    } else {
      regionBar.classList.remove("show"); // Ocultar si sube
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Agregar evento a cada imagen para hacer scroll automático
  document.querySelectorAll(".scroll-bar-sections img").forEach((img) => {
    img.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target"); // Obtiene el ID de la región
      const targetSection = document.getElementById(targetId); // Busca la sección correspondiente

      if (targetSection) {
        const offset = 80; // Ajusta este valor según la altura de la barra fija
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", loginWithGoogle);
  }

  // Asegúrate de restaurar el botón basado en el estado de autenticación actual
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    console.log("Usuario autenticado al cargar la página:", currentUser.displayName);
    updateLoginButton(currentUser);
  } else {
    resetLoginButton();
  }
});

function showLoginModal() {
  // Crear el modal dinámicamente
  const modalHTML = `
    <div class="modal-overlay">
      <div class="modal-container">
        <h2 style="color: #75aadb">¡Bienvenido a Nidos Argentina!</h2>
        <p>
          Al iniciar sesión con Google, podrás guardar tu progreso de los shiny seleccionados en tu cuenta y acceder a él desde cualquier dispositivo. <br/><br/>
          Si decides no iniciar sesión, tus selecciones se guardarán únicamente en este navegador, pero ten en cuenta que podrías perder tu progreso en caso de borrar los datos del navegador o cambiar de dispositivo.
        </p>
        <div class="modal-actions">
          <button id="loginButtonModal">
            <span class="google-icon"><i class="fab fa-google"></i></span>
            Iniciar sesión con Google
          </button>
          <button id="continueWithoutLogin" class="secondary-button">
            Continuar sin iniciar sesión
          </button>
        </div>
      </div>
    </div>
  `;

  // Insertar el modal en el DOM
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", modalHTML);

  // Obtener referencias a los botones del modal
  const modalLoginButton = document.getElementById("loginButtonModal");
  const continueWithoutLogin = document.getElementById("continueWithoutLogin");

  // Agregar funcionalidad al botón de "Iniciar sesión con Google"
  if (modalLoginButton) {
    modalLoginButton.addEventListener("click", async () => {
      await loginWithGoogle();
      closeModal(); // Cerrar el modal después de iniciar sesión
    });
  }

  // Agregar funcionalidad al botón de "Continuar sin iniciar sesión"
  if (continueWithoutLogin) {
    continueWithoutLogin.addEventListener("click", closeModal);
  }
}

/**
 * Función para cerrar el modal
 */
function closeModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.remove(); // Elimina el modal del DOM
  }
}


// Número total de imágenes en cada sección
const numPokesKanto = 151; // Número de Pokémon en Kanto
const numPokesJohto = 100; // Número de Pokémon en Johto
const numPokesHoenn = 135; // Número de Pokémon en Hoenn
const numPokesSinnoh = 107; // Número de Pokémon en Sinnoh
const numPokesUnova = 156; // Número de Pokémon en Unova
const numPokesKalos = 72; // Número de Pokémon en Kalos
const numPokesAlola = 88; // Número de Pokémon en Alola
const numPokesGalar = 89; // Número de Pokémon en Galar
const numPokesHisui = 7; // Número de Pokémon en Hisui
const numPokesPaldea = 120; // Número de Pokémon en Paldea

// Definir variantes para pokémon específicas
const johtoVariants = {
  201: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "!",
    "PREGUNTA",
  ],
};

const hoennVariants = {
  327: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
  351: ["Normal", "Sol", "Lluvia", "Nieve"],
  386: ["Normal", "Ataque", "Defensa", "Velocidad"],
};

const sinnohVariants = {
  412: ["Planta", "Arena", "Basura"],
  413: ["Planta", "Arena", "Basura"],
  421: ["Encapotada", "Soleada"],
  422: ["Este", "Oeste"],
  423: ["Este", "Oeste"],
  487: ["Modificada", "Origen"],
  492: ["Tierra", "Cielo"],
};

const unovaVariants = {
  550: ["RayaAzul", "RayaRoja"],
  585: ["Primavera", "Verano", "Otono", "Invierno"],
  586: ["Primavera", "Verano", "Otono", "Invierno"],
  641: ["Avatar", "Totem"],
  642: ["Avatar", "Totem"],
  645: ["Avatar", "Totem"],
  646: ["Normal", "Blanco", "Negro"],
  647: ["Habitual", "Brio"],
  648: ["Lirica", "Danza"],
  649: ["SinROM", "HidroROM", "FulgoROM", "PiroROM", "CrioROM"],
};

const kalosVariants = {
  666: [
    "Polar",
    "Taiga",
    "Tundra",
    "Continental",
    "Vergel",
    "Oriental",
    "Floral",
    "Moderno",
    "Marino",
    "Isleno",
    "Estepa",
    "Desierto",
    "Oasis",
    "Monzon",
    "Pantano",
    "Solar",
    "Oceano",
    "Jungla",
    "Fantasia",
    "Pokeball",
  ],
  669: ["Azul", "Naranja", "Rojo", "Blanco", "Amarillo"],
  670: ["Azul", "Naranja", "Rojo", "Blanco", "Amarillo"],
  671: ["Azul", "Naranja", "Rojo", "Blanco", "Amarillo"],
  676: [
    "Salvaje",
    "Dama",
    "Corazon",
    "Caballero",
    "Estrella",
    "Aristocratico",
    "Rombo",
    "Kabuki",
    "Senorita",
    "Faraonico",
  ],
  681: ["Filo", "Escudo"],
  710: ["Pequeno", "Normal", "Grande", "Extragrande"],
  711: ["Pequeno", "Normal", "Grande", "Extragrande"],
  718: ["10Porciento", "50Porciento", "Completo"],
};

const alolaVariants = {
  741: ["Animado", "Placido", "Apacionado", "Refinado"],
  745: ["Diurno", "Nocturno", "Crepuscular"],
  746: ["Individual", "Banco"],
  800: ["NecrozmaNormal", "MelenaCrepuscular", "AlasdelAlba"],
};

const galarVariants = {
  849: ["Grave", "Aguda"],
  876: ["Macho", "Hembra"],
};

const paldeaVariants = {
  916: ["Macho", "Hembra"],
};


// Definir variantes personalizadas para ciertos Pokémon de Alola
const alolaCustomVariants = {
  19: "ALOLA",
  20: "ALOLA",
  26: "ALOLA",
  27: "ALOLA",
  28: "ALOLA",
  37: "ALOLA",
  38: "ALOLA",
  50: "ALOLA",
  51: "ALOLA",
  52: "ALOLA",
  53: "ALOLA",
  74: "ALOLA",
  75: "ALOLA",
  76: "ALOLA",
  88: "ALOLA",
  89: "ALOLA",
  103: "ALOLA",
  105: "ALOLA",
};

// Definir variantes personalizadas para ciertos Pokémon de Galar
const galarCustomVariants = {
  52: "GALARIAN",
  77: "GALARIAN",
  78: "GALARIAN",
  79: "GALARIAN",
  80: "GALARIAN",
  83: "GALARIAN",
  110: "GALARIAN",
  122: "GALARIAN",
  222: "GALARIAN",
  144: "GALARIAN",
  145: "GALARIAN",
  146: "GALARIAN",
  199: "GALARIAN",
  263: "GALARIAN",
  264: "GALARIAN",
  554: "GALARIAN",
  555: "GALARIAN",
  562: "GALARIAN",
  618: "GALARIAN",
};

// Definir variantes personalizadas para ciertos Pokémon de Hisui
const hisuiCustomVariants = {
  58: "HISUIAN",
  59: "HISUIAN",
  100: "HISUIAN",
  101: "HISUIAN",
  157: "HISUIAN",
  211: "HISUIAN",
  215: "HISUIAN",
  483: "HISUIAN",
  484: "HISUIAN",
  503: "HISUIAN",
  549: "HISUIAN",
  550: "HISUIAN",
  628: "HISUIAN",
  705: "HISUIAN",
  706: "HISUIAN",
  713: "HISUIAN",
  724: "HISUIAN",
};

// Definir variantes personalizadas para ciertos Pokémon de Hisui
const paldeaCustomVariants = {
  194: "PALDEA",
};

//Definir pokémon faltantes
const sinnohFaltantes = [489, 490, 493];
const telesiaFaltantes = [494, 647];
const kalosFaltantes = [679, 680, 681, 701, 707, 718, 719, 720, 721,];
const alolaFaltantes = [
  731, 732, 733, 746, 764, 771,
  772, 773, 774, 778, 781, 789, 790, 791, 792, 801, 802, 803, 804, 807,
];
const galarFaltantes = [
  810, 811, 812, 813, 814, 815, 816, 817, 818, 824, 825, 826,
  827, 828, 829, 830, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843,
  844, 845, 846, 847, 850, 851, 852, 853, 856, 857, 858, 859, 860,
  861, 868, 869, 871, 872, 873, 874, 875, 877, 878, 879, 880, 881, 882,
  883, 885, 886, 887, 890, 891, 892, 893, 896, 897, 898,
];
const hisuiFaltantes = [705, 706, 902, 905];
const paldeaFaltantes = [
  917, 918, 926, 927, 931, 932, 933, 934, 938, 939, 940,
  941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955,
  956, 957, 958, 959, 963, 964, 965, 966, 967, 968, 969, 970, 971,
  972, 973, 976, 978, 981, 984, 985, 986, 987, 988,
  989, 990, 991, 992, 993, 994, 995, 1001, 1002, 1003,
  1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016,
  1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025,
];
// Mapeo para mostrar el texto deseado
const displayTextMapping = {
  PREGUNTA: "0201 ?",
  "01": "0327 #01",
  "02": "0327 #02",
  "03": "0327 #03",
  "04": "0327 #04",
  "05": "0327 #05",
  "06": "0327 #06",
  "07": "0327 #07",
  "08": "0327 #08",
  "09": "0327 #09",
  SinROM: "0649 Sin ROM",
  HidroROM: "0649 Hidro ROM",
  FulgoROM: "0649 Fulgo ROM",
  PiroROM: "0649 Piro ROM",
  CrioROM: "0649 Crio ROM",
  "10Porciento": "0718 10%",
  "50Porciento": "0718 50%",
  Completo: "0718 100%",
  NecrozmaNormal: "0800",
  MelenaCrepuscular: "0800 Melena Crepuscular",
  AlasdelAlba: "0800 Alas del Alba",
  Grave: "0849 Grave",
  Aguda: "0849 Aguda",
};

// Función para generar el arreglo de ítems con variantes y exclusiones
function generateItems(
  sectionName,
  numImages,
  startIndex = 1,
  variants = {},
  excludeList = [],
  customNumbers = [],
  customVariants = {}
) {
  const items = [];

  // Primero agregar los números personalizados si los hay
  customNumbers.forEach((customNum) => {
    if (excludeList.includes(customNum)) {
      return; // Saltar si el número personalizado está en la lista de exclusión
    }

    let variant = customVariants[customNum] || ""; // Obtener la variante personalizada o una cadena vacía
    if (variant) {
      variant = `.f${variant}`; // Formatear la variante para que se inserte correctamente en la ruta
    }

    const src = `../assets/images/shiny-list/${sectionName.toLowerCase()}/pm${customNum}${variant}.s.icon.png`;
    const alt = `Image ${customNum}`;
    const text = String(customNum).padStart(4, "0");
    items.push({ src, alt, text });
  });

  for (let i = startIndex; i < startIndex + numImages; i++) {
    if (excludeList.includes(i)) {
      continue; // Saltar si el número está en la lista de exclusión
    }

    if (variants[i]) {
      // Si hay variantes, agregar solo las que no están en la lista de exclusión
      variants[i].forEach((variant) => {
        // Saltar las variantes Blanco y Negro para el 646
        if (sectionName === "Unova" && i === 648 && (variant === "Danza")) 
        {
          return;
        }

        if (sectionName === "Kalos" && i === 666 && (variant === "Fantasia" || variant === "Pokeball")) 
          {
            return;
          }

        const src = `../assets/images/shiny-list/${sectionName.toLowerCase()}/pm${i}.f${variant}.s.icon.png`;
        const alt = `Image ${i} - Variant ${variant}`;
        const text =
          displayTextMapping[variant] ||
          `${String(i).padStart(4, "0")} ${variant}`;
        items.push({ src, alt, text });
      });
    } else {
      // Sin variantes, comportamiento normal
      const src = `../assets/images/shiny-list/${sectionName.toLowerCase()}/pm${i}.s.icon.png`;
      const alt = `Image ${i}`;
      const text = String(i).padStart(4, "0"); // Genera el texto con ceros a la izquierda
      items.push({ src, alt, text });
    }
  }
  return items;
}

// Datos para las secciones y recuadros
const sections = [
  {
    title: "Kanto",
    items: generateItems("Kanto", numPokesKanto),
    icon: "../../assets/images/regiones/kanto.png",
  },
  {
    title: "Johto",
    items: generateItems(
      "Johto",
      numPokesJohto,
      numPokesKanto + 1,
      johtoVariants
    ), // Comienza desde 152
    icon: "../../assets/images/regiones/johto.png",
  },
  {
    title: "Hoenn",
    items: generateItems(
      "Hoenn",
      numPokesHoenn,
      numPokesKanto + numPokesJohto + 1,
      hoennVariants
    ), // Comienza desde 252
    icon: "../../assets/images/regiones/hoenn.png",
  },
  {
    title: "Sinnoh",
    items: generateItems(
      "Sinnoh",
      numPokesSinnoh,
      numPokesKanto + numPokesJohto + numPokesHoenn + 1,
      sinnohVariants,
      sinnohFaltantes
    ), // Comienza desde 387
    icon: "../../assets/images/regiones/sinnoh.png",
  },
  {
    title: "Unova",
    items: generateItems(
      "Unova",
      numPokesUnova,
      numPokesKanto + numPokesJohto + numPokesHoenn + numPokesSinnoh + 1,
      unovaVariants,
      telesiaFaltantes
    ), // Comienza desde 494
    icon: "../../assets/images/regiones/unova.png",
  },
  {
    title: "Kalos",
    items: generateItems(
      "Kalos",
      numPokesKalos,
      numPokesKanto +
        numPokesJohto +
        numPokesHoenn +
        numPokesSinnoh +
        numPokesUnova +
        1,
      kalosVariants,
      kalosFaltantes
    ), // Comienza desde 650
    icon: "../../assets/images/regiones/kalos.png",
  },
  {
    title: "Alola",
    items: generateItems(
      "Alola",
      numPokesAlola,
      numPokesKanto +
        numPokesJohto +
        numPokesHoenn +
        numPokesSinnoh +
        numPokesUnova +
        numPokesKalos +
        1, // Comienza desde 722 después de los números personalizados
      alolaVariants,
      alolaFaltantes,
      [
        19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103,
        105,
      ],
      alolaCustomVariants
    ),
    icon: "../../assets/images/regiones/alola.png",
  },
  {
    title: "Galar",
    items: generateItems(
      "Galar",
      numPokesGalar,
      numPokesKanto +
        numPokesJohto +
        numPokesHoenn +
        numPokesSinnoh +
        numPokesUnova +
        numPokesKalos +
        numPokesAlola +
        1, // Comienza desde 722 después de los números personalizados
      galarVariants, // Variantes (si las hay)
      galarFaltantes,
      [
        52, 77, 78, 79, 80, 83, 110, 122, 222, 144, 145, 146, 199, 263, 264,
        554, 555, 562, 618,
      ],
      galarCustomVariants
    ),
    icon: "../../assets/images/regiones/galar.png",
  },
  {
    title: "Hisui",
    items: generateItems(
      "Hisui",
      numPokesHisui,
      numPokesKanto +
        numPokesJohto +
        numPokesHoenn +
        numPokesSinnoh +
        numPokesUnova +
        numPokesKalos +
        numPokesAlola +
        numPokesGalar +
        1, // Comienza desde 899 después de los números personalizados
      {}, // Variantes (si las hay)
      hisuiFaltantes,
      [
        58, 59, 100, 101, 157, 211, 215, 483, 484, 503, 549, 550, 628, 705, 706, 713,
        724,
      ],
      hisuiCustomVariants
    ),
    icon: "../../assets/images/regiones/hisui.png",
  },
  {
    title: "Paldea",
    items: generateItems(
      "Paldea",
      numPokesPaldea,
      numPokesKanto +
        numPokesJohto +
        numPokesHoenn +
        numPokesSinnoh +
        numPokesUnova +
        numPokesKalos +
        numPokesAlola +
        numPokesGalar +
        numPokesHisui +
        1, // Comienza desde 906 después de los números personalizados
      paldeaVariants, // Variantes (si las hay)
      paldeaFaltantes,
      [194],
      paldeaCustomVariants
    ),
    icon: "../../assets/images/regiones/paldea.png",
  },
];

function createSection(title, sectionId, items, iconSrc) {
  const section = document.createElement("div");
  section.className = "section";
  section.id = title.toLowerCase();

  // Contenedor del título, contador y botón de collapse
  const titleContainer = document.createElement("div");
  titleContainer.className = "section-header";
  titleContainer.style.display = "flex";
  titleContainer.style.alignItems = "center";
  titleContainer.style.justifyContent = "space-between";
  titleContainer.style.cursor = "pointer";

  // Subcontenedor para Título, Icono y Contador
  const leftContainer = document.createElement("div");
  leftContainer.style.display = "flex";
  leftContainer.style.alignItems = "center";
  leftContainer.style.gap = "10px";

  // Icono de la región
  const regionIcon = document.createElement("img");
  regionIcon.src = iconSrc; // Fuente de la imagen
  regionIcon.alt = `${title} Icon`;
  regionIcon.style.width = "40px"; // Ajusta el tamaño
  regionIcon.style.height = "40px";
  regionIcon.style.borderRadius = "23px";

  // Título de la sección
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  sectionTitle.className = "section-title";
  sectionTitle.style.margin = "0";

  // Contador de la sección
  const sectionCounter = document.createElement("span");
  sectionCounter.className = "section-counter";
  sectionCounter.style.fontSize = "1rem";
  sectionCounter.style.fontWeight = "bold";
  sectionCounter.textContent = `0/${items.length}`;

  // Botón de collapse con ícono
  const toggleButton = document.createElement("i");
  toggleButton.className = "fas fa-chevron-down"; // Ícono inicial (flecha abajo)
  toggleButton.style.fontSize = "1.5rem";
  toggleButton.style.cursor = "pointer";

  // Contenedor de los elementos (boxes)
  const container = document.createElement("div");
  container.className = "container-list";
  container.style.display = "none";

  // Función de toggle
  const toggleContainer = () => {
    if (container.style.display === "none") {
      container.style.display = "flex";
      toggleButton.className = "fas fa-chevron-up"; // Cambiar a flecha arriba
    } else {
      container.style.display = "none";
      toggleButton.className = "fas fa-chevron-down"; // Cambiar a flecha abajo
    }
  };

  // Asignar evento click al contenedor completo
  titleContainer.addEventListener("click", toggleContainer);

  // Crear ítems
  items.forEach((item, index) => {
    const box = createBox(sectionId, index + 1, item.src, item.alt, item.text);
    container.appendChild(box);

    const checkbox = box.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () =>
      updateSectionCounter(sectionCounter, container)
    );
  });

  // Agregar a la estructura
  leftContainer.appendChild(regionIcon); // Agregar el icono
  leftContainer.appendChild(sectionTitle);
  leftContainer.appendChild(sectionCounter);

  titleContainer.appendChild(leftContainer);
  titleContainer.appendChild(toggleButton);

  section.appendChild(titleContainer);
  section.appendChild(container);

  updateSectionCounter(sectionCounter, container);

  return section;
}

function createBox(sectionId, itemId, src, alt, text) {
  const box = document.createElement("div");
  box.className = "box";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${sectionId}-${itemId}`;
  checkbox.onchange = () => saveCheckboxState(checkbox.id);

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  // Hacer que al dar clic en la imagen, se active el checkbox
  img.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked; // Alternar estado del checkbox
    saveCheckboxState(checkbox.id); // Guardar estado
    const box = checkbox.closest(".box");
    box.style.backgroundColor = checkbox.checked
      ? "rgb(117 170 219 / 85%)"
      : "white";
    // Actualizar el contador
    const section = box.closest(".section");
    const counter = section.querySelector(".section-counter");
    const container = section.querySelector(".container-list");
    updateSectionCounter(counter, container);
  });

  const p = document.createElement("p");
  p.textContent = text;

  box.appendChild(checkbox);
  box.appendChild(img);
  box.appendChild(p);

  return box;
}

window.onload = async function () {
  // Carga las secciones
  loadSections();

  // Espera un momento para asegurarte de que el DOM esté listo
  setTimeout(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const container = section.querySelector(".container-list");
      const counterElement = section.querySelector(".section-counter");
      if (counterElement && container) {
        updateSectionCounter(counterElement, container);
      } else {
        console.warn("counterElement o container no encontrados en esta sección.");
      }
    });
  }, 500);

  // Carga los estados de los checkboxes
  await loadCheckboxState();
};

const firebaseConfig = {
  apiKey: "AIzaSyBpqarYah2XVHmkk2tLGrUhLNVmP20x6kM",
  authDomain: "shinychecknidosarg.firebaseapp.com",
  projectId: "shinychecknidosarg",
  storageBucket: "shinychecknidosarg.appspot.com",
  messagingSenderId: "563681136537",
  appId: "1:563681136537:web:14562744c07efccdac4d08",
  measurementId: "G-JW2E3B1C7D",
};

// Inicializar Firebase y Firestore
if (!firebase) {
  console.error("Firebase no está cargado. Verifica los scripts.");
} else {
  console.log("Firebase cargado correctamente.");
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Manejar inicio de sesión con Google
window.loginWithGoogle = async function loginWithGoogle() {
  try {
    console.log("Intentando iniciar sesión con Google...");

    if (!firebase.auth()) {
      console.error("Firebase no está inicializado.");
      return;
    }

    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;

    console.log("Usuario autenticado:", user.displayName);
    closeModal();
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};


// Manejar cierre de sesión
function updateLoginButton(user) {
  const loginButton = document.getElementById("loginButton");

  if (user && loginButton) {
    loginButton.innerHTML = `
    <span class="google-icon">
      <i class="fas fa-sign-out-alt"></i></span>
      Cerrar sesión (${user.displayName || "Usuario"})
    `;
    loginButton.classList.add("logged-in");

    loginButton.onclick = null;

    loginButton.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        await auth.signOut();
        console.log("Usuario cerró sesión");
        resetLoginButton();
        location.reload(); // Refresca la página al cerrar sesión
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    });
  }
}

// Función para restaurar el estado del botón al estado inicial
function resetLoginButton() {
  const loginButton = document.getElementById("loginButton");

  if (!loginButton) {
    console.error("Botón de inicio de sesión no encontrado");
    return;
  }

  loginButton.innerHTML = `
  <span class="google-icon">
    <i class="fab fa-google"></i></span>
              Iniciar sesión con Google
  `;
  loginButton.classList.remove("logged-in");

  loginButton.onclick = null;

  loginButton.addEventListener("click", loginWithGoogle);
}

// Listener de autenticación
auth.onAuthStateChanged(async (user) => {
  if (user) {
    console.log("Usuario autenticado:", user.displayName);
    await loadCheckboxState();
    updateLoginButton(user);
  } else {
    console.log("No hay usuario autenticado. Restaurando interfaz.");
    resetLoginButton();
    showLoginModal();
    loadCheckboxStateFromLocalStorage();
  }
});

// Guardar estado de un checkbox
async function saveCheckboxState(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const isChecked = checkbox.checked;

  if (auth.currentUser) {
    await saveToFirestore(checkboxId, isChecked);
  } else {
    saveToLocalStorage(checkboxId, isChecked);
  }

  const box = checkbox.closest(".box");
  box.style.backgroundColor = isChecked ? "rgb(117 170 219 / 85%)" : "white";
}

async function saveToFirestore(checkboxId, isChecked) {
  try {
    const userDocRef = db.collection("usuarios").doc(auth.currentUser.uid);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data() || {};

    const updatedCheckboxes = {
      ...userData.checkboxes,
      [checkboxId]: isChecked,
    };

    await userDocRef.set({ ...userData, checkboxes: updatedCheckboxes });
    console.log(`Estado del checkbox ${checkboxId} guardado en Firestore: ${isChecked}`);
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
  }
}

function saveToLocalStorage(checkboxId, isChecked) {
  localStorage.setItem(checkboxId, isChecked);
  console.log(`Estado del checkbox ${checkboxId} guardado en localStorage: ${isChecked}`);
}

// Cargar estados desde Firestore
async function loadCheckboxStateFromFirestore() {
  const currentUser = firebase.auth().currentUser;

  if (!currentUser) {
    console.warn("No hay un usuario autenticado. Usando localStorage.");
    loadCheckboxStateFromLocalStorage();
    return;
  }

  try {
    console.log("Cargando checkboxes desde Firestore...");
    const userDocRef = db.collection("usuarios").doc(currentUser.uid);
    const userDoc = await userDocRef.get();

    if (userDoc.exists) {
      const checkboxesData = userDoc.data().checkboxes;

      if (checkboxesData) {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((checkbox) => {
          const savedState = checkboxesData[checkbox.id];
          if (savedState !== undefined) {
            checkbox.checked = savedState;

            // Cambiar el color de fondo según el estado
            const box = checkbox.closest(".box");
            box.style.backgroundColor = checkbox.checked
              ? "rgb(117 170 219 / 85%)"
              : "white";
          }
        });

        // Actualizar contadores después de cargar los estados
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
          const container = section.querySelector(".container-list");
          const counter = section.querySelector(".section-counter");
          updateSectionCounter(counter, container);
        });

        console.log("Estados cargados desde Firestore correctamente.");
      } else {
        console.warn("No se encontraron datos de checkboxes en Firestore. Usando localStorage.");
        loadCheckboxStateFromLocalStorage();
      }
    } else {
      console.warn("El documento del usuario no existe en Firestore. Usando localStorage.");
      loadCheckboxStateFromLocalStorage();
    }
  } catch (error) {
    console.error("Error al cargar estados desde Firestore:", error);
    loadCheckboxStateFromLocalStorage();
  }
}


// Cargar estados desde LocalStorage
function loadCheckboxStateFromLocalStorage() {
  console.log("Cargando checkboxes desde localStorage...");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const savedState = localStorage.getItem(checkbox.id);
    if (savedState !== null) {
      checkbox.checked = savedState === "true";

      // Cambiar el color de fondo
      const box = checkbox.closest(".box");
      box.style.backgroundColor = checkbox.checked
        ? "rgb(117 170 219 / 85%)"
        : "white";
    }
  });

  // Actualizar contadores después de restaurar los estados
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const container = section.querySelector(".container-list");
    const counter = section.querySelector(".section-counter");
    updateSectionCounter(counter, container);
  });

  console.log("Estados de checkboxes cargados desde localStorage.");
}


// Cargar estado inicial
async function loadCheckboxState() {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    await loadCheckboxStateFromFirestore();
  } else {
    loadCheckboxStateFromLocalStorage();
  }
}

function updateSectionCounter(counterElement, container) {
  // Seleccionar todos los checkboxes en el contenedor de la sección
  const checkboxes = container.querySelectorAll("input[type='checkbox']");
  // Contar cuántos están seleccionados
  const totalChecked = Array.from(checkboxes).filter((cb) => cb.checked).length;
  // Actualizar el texto del contador
  counterElement.textContent = `${totalChecked}/${checkboxes.length}`;
}


// Inicializar y crear secciones
function loadSections() {
  const mainContainer = document.getElementById("mainContainer");
  sections.forEach((section, index) => {
    const sectionElement = createSection(
      section.title,
      index + 1,
      section.items,
      section.icon
    );
    mainContainer.appendChild(sectionElement);

    // ✅ Mostrar anuncio después de cada 3 secciones
    // if ((index + 1) % 3 === 0) {
    //   const adDiv = document.createElement("div");
    //   adDiv.className = "adsense-block";
    //   adDiv.innerHTML = `
    //     <ins class="adsbygoogle"
    //          style="display:block; margin: 40px auto; text-align:center;"
    //          data-ad-format="fluid"
    //          data-ad-layout-key="-he+i-8-86+g2"
    //          data-ad-client="ca-pub-4248107538930322"
    //          data-ad-slot="2009018955"></ins>
    //   `;
    //   mainContainer.appendChild(adDiv);
    // }
  });

  // 🚀 Activar los anuncios
  document.querySelectorAll(".adsbygoogle").forEach(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("No se pudo cargar un anuncio de Google:", e);
    }
  });
}
