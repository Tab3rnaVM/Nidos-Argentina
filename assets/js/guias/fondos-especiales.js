const ASSET_PREFIX = "../../";

/* Sprites Pokémon */
const P = (dex) => `${ASSET_PREFIX}assets/images/pokemon/pm${dex}.icon.webp`;

/* Banners */
const B_E = (slug) => `${ASSET_PREFIX}assets/images/fondos-especiales/${slug}.webp`;
const B_U = (slug) => `${ASSET_PREFIX}assets/images/fondos-ubicaciones/${slug}.webp`;
const B_S = (slug) => `${ASSET_PREFIX}assets/images/fondos-estadios/${slug}.webp`;

/* ================= DATA: ESPECIALES ================= */
const SPECIAL_BACKGROUNDS = [
    {
    slug: "sb_GOWA2025_Global",
    title: "Área Silvestre 2025",
    year: "2025",
    month: "11",
    items: [
        { dex: 488, name: "Cresselia Oscuro", code: "pm488.SHADOW" },
        { dex: 491, name: "Darkrai Oscuro",   code: "pm491.SHADOW" },
        { dex: 760, name: "Bewear (Pañuelo silvestre)" }, // code: "pm760.fWILD_SCARF" ajusta el sufijo si tu asset usa otro
        { dex: 861, name: "Grimmsnarl Gigamax", code: "pm861.fGIGANTAMAX" },
    ],
    },
    {
    slug: "sb_Season17_DuelDestiny",
    title: "Destino Dual",
    year: "2025",
    month: "01",
    items: [
        /* Sprigatito y evoluciones */
        { dex: 906, name: "Sprigatito" },
        { dex: 907, name: "Floragato" },
        { dex: 908, name: "Meowscarada" },

        /* Ralts y evoluciones */
        { dex: 280, name: "Ralts" },
        { dex: 281, name: "Kirlia" },
        { dex: 282, name: "Gardevoir" },
        { dex: 475, name: "Gallade" },

        /* Karrablast y evoluciones */
        { dex: 588, name: "Karrablast" },
        { dex: 589, name: "Escavalier" },

        /* Shelmet y evoluciones */
        { dex: 616, name: "Shelmet" },
        { dex: 617, name: "Accelgor" },
    ],
    },
    {
    slug: "sb_Season18_MightAndMastery",
    title: "Fortaleza y Maestría",
    year: "2025",
    month: "03",
    items: [
    { dex: 66,  name: "Machop" },
    { dex: 67,  name: "Machoke" },
    { dex: 68,  name: "Machamp" },

    // Totodile y evoluciones
    { dex: 158, name: "Totodile" },
    { dex: 159, name: "Croconaw" },
    { dex: 160, name: "Feraligatr" },

    // Meditite y evoluciones
    { dex: 307, name: "Meditite" },
    { dex: 308, name: "Medicham" },

    // Stunky y evoluciones
    { dex: 434, name: "Stunky" },
    { dex: 435, name: "Skuntank" },

    // Vanillite y evoluciones
    { dex: 582, name: "Vanillite" },
    { dex: 583, name: "Vanillish" },
    { dex: 584, name: "Vanilluxe" },

    // Mareanie y evoluciones
    { dex: 747, name: "Mareanie" },
    { dex: 748, name: "Toxapex" },

    // Fuecoco y evoluciones
    { dex: 909, name: "Fuecoco" },
    { dex: 910, name: "Crocalor" },
    { dex: 911, name: "Skeledirge" },

    // Pawmi y evoluciones
    { dex: 921, name: "Pawmi" },
    { dex: 922, name: "Pawmo" },
    { dex: 923, name: "Pawmot" },

    // Charcadet y evoluciones
    { dex: 935, name: "Charcadet" },
    { dex: 936, name: "Armarouge" },
    { dex: 937, name: "Ceruledge" },
    ],
    },
    {
    slug: "sb_Season19_DelightfulDays",
    title: "Días Dichosos",
    year: "2025",
    month: "06",
    items: [
        // Aves legendarias de Kanto
        { dex: 144, name: "Articuno" },
        { dex: 145, name: "Zapdos" },
        { dex: 146, name: "Moltres" },

        // Lapras
        { dex: 131, name: "Lapras (con bufanda)", code: "pm131.fCOSTUME_2020" },

        // Eevee y evoluciones
        { dex: 133, name: "Eevee" },
        { dex: 134, name: "Vaporeon" },
        { dex: 135, name: "Jolteon" },
        { dex: 136, name: "Flareon" },
        { dex: 196, name: "Espeon" },
        { dex: 197, name: "Umbreon" },
        { dex: 470, name: "Leafeon" },
        { dex: 471, name: "Glaceon" },
        { dex: 700, name: "Sylveon" },

        // Jangmo-o y evoluciones
        { dex: 782, name: "Jangmo-o" },
        { dex: 783, name: "Hakamo-o" },
        { dex: 784, name: "Kommo-o" },

        // Rookidee y evoluciones
        { dex: 821, name: "Rookidee" },
        { dex: 822, name: "Corvisquire" },
        { dex: 823, name: "Corviknight" },

        // Quaxly y evoluciones
        { dex: 912, name: "Quaxly" },
        { dex: 913, name: "Quaxwell" },
        { dex: 914, name: "Quaquaval" },
    ],
    },
    {
    slug: "sb_Season20_TalesOfTransformation",
    title: "Historias de Transformación",
    year: "2025",
    month: "09",
    items: [
        // Cobalion / Terrakion
        { dex: 638, name: "Cobalion" },
        { dex: 639, name: "Terrakion" },
        { dex: 640, name: "Virizion" },

        // Chikorita y evoluciones
        { dex: 152, name: "Chikorita" },
        { dex: 153, name: "Bayleef" },
        { dex: 154, name: "Meganium" },

        // Totodile y evoluciones
        { dex: 158, name: "Totodile" },
        { dex: 159, name: "Croconaw" },
        { dex: 160, name: "Feraligatr" },

        // Tepig y evoluciones
        { dex: 498, name: "Tepig" },
        { dex: 499, name: "Pignite" },
        { dex: 500, name: "Emboar" },

        // Solosis y evoluciones
        { dex: 577, name: "Solosis" },
        { dex: 578, name: "Duosion" },
        { dex: 579, name: "Reuniclus" },

        // Flabébé (todos los colores) + evoluciones
        // Flabébé
        { dex: 669, name: "Flabébé (Roja)",    code: "pm669.fRED" },
        { dex: 669, name: "Flabébé (Amarilla)", code: "pm669.fYELLOW" },
        { dex: 669, name: "Flabébé (Azul)",     code: "pm669.fBLUE" },
        { dex: 669, name: "Flabébé (Blanca)",   code: "pm669.fWHITE" },
        { dex: 669, name: "Flabébé (Naranja)",  code: "pm669.fORANGE" },

        // Floette
        { dex: 670, name: "Floette (Roja)",     code: "pm670.fRED" },
        { dex: 670, name: "Floette (Amarilla)", code: "pm670.fYELLOW" },
        { dex: 670, name: "Floette (Azul)",     code: "pm670.fBLUE" },
        { dex: 670, name: "Floette (Blanca)",   code: "pm670.fWHITE" },
        { dex: 670, name: "Floette (Naranja)",  code: "pm670.fORANGE" },

        // Florges
        { dex: 671, name: "Florges (Roja)",     code: "pm671.fRED" },
        { dex: 671, name: "Florges (Amarilla)", code: "pm671.fYELLOW" },
        { dex: 671, name: "Florges (Azul)",     code: "pm671.fBLUE" },
        { dex: 671, name: "Florges (Blanca)",   code: "pm671.fWHITE" },
        { dex: 671, name: "Florges (Naranja)",  code: "pm671.fORANGE" },
    ],
    },
    {
    slug: "sb_GoFest2024_wormhole",
    title: "Ultraumbral",
    year: "2024",
    month: "08",
    items: [
        { dex: 793, name: "Nihilego" },
        { dex: 794, name: "Buzzwole" },
        { dex: 795, name: "Pheromosa" },
        { dex: 796, name: "Xurkitree" },
        { dex: 797, name: "Celesteela" },
        { dex: 798, name: "Kartana" },
        { dex: 799, name: "Guzzlord" },
        { dex: 800, name: "Necrozma" },
        { dex: 805, name: "Stakataka" },
        { dex: 806, name: "Blacephalon" },
    ],
    },
    {
    slug: "sb_GoFest2024_radiance",
    title: "Radiante",
    year: "2024",
    month: "08",
    items: [
        { dex: 791, name: "Solgaleo" },
    ],
    },
    {
    slug: "sb_GoFest2024_umbra",
    title: "Umbra",
    year: "2024",
    month: "08",
    items: [
        { dex: 792, name: "Lunala" },
    ],
    },
    {
    slug: "sb_GoFest2024_wormhole_sun",
    title: "Ultraumbral Radiante",
    year: "2024",
    month: "08",
    items: [
        { dex: 800, name: "Necrozma (Melena Crepuscular)", code: "pm800.fDUSK_MANE" },
    ],
    },
    {
    slug: "sb_GoFest2024_wormhole_moon",
    title: "Ultraumbral Umbra",
    year: "2024",
    month: "08",
    items: [
        { dex: 800, name: "Necrozma (Alas del Alba)", code: "pm800.fDAWN_WINGS" },
    ],
    },
    {
    slug: "sb_GOWA2024_Global",
    title: "Área Silvestre 2024",
    year: "2024",
    month: "11",
    items: [
        { dex: 382, name: "Kyogre" },
        { dex: 383, name: "Groudon" },
        { dex: 483, name: "Dialga (Forma Origen)",  code: "pm483.fORIGIN" },
        { dex: 484, name: "Palkia (Forma Origen)",  code: "pm484.fORIGIN" },
        { dex: 849, name: "Toxtricity (Forma Aguda)", code: "pm849.fAMPED" },
        { dex: 849, name: "Toxtricity (Forma Grave)", code: "pm849.fLOW_KEY" },
    ],
    },
    {
    slug: "sb_GoTour2025_enigma",
    title: "Enigma",
    year: "2025",
    month: "02",
    items: [
        // Purrloin → Liepard
        { dex: 509, name: "Purrloin" },
        { dex: 510, name: "Liepard" },

        // Pidove → Tranquill → Unfezant
        { dex: 519, name: "Pidove" },
        { dex: 520, name: "Tranquill" },
        { dex: 521, name: "Unfezant" },

        // Roggenrola → Boldore → Gigalith
        { dex: 524, name: "Roggenrola" },
        { dex: 525, name: "Boldore" },
        { dex: 526, name: "Gigalith" },

        // Woobat → Swoobat
        { dex: 527, name: "Woobat" },
        { dex: 528, name: "Swoobat" },

        // Timburr → Gurdurr → Conkeldurr
        { dex: 532, name: "Timburr" },
        { dex: 533, name: "Gurdurr" },
        { dex: 534, name: "Conkeldurr" },

        // Tympole → Palpitoad → Seismitoad
        { dex: 535, name: "Tympole" },
        { dex: 536, name: "Palpitoad" },
        { dex: 537, name: "Seismitoad" },

        // Sandile → Krokorok → Krookodile
        { dex: 551, name: "Sandile" },
        { dex: 552, name: "Krokorok" },
        { dex: 553, name: "Krookodile" },

        // Darumaka → Darmanitan (Unova)
        { dex: 554, name: "Darumaka" },
        { dex: 555, name: "Darmanitan", code: "pm555.fSTANDARD"},

        // Scraggy → Scrafty
        { dex: 559, name: "Scraggy" },
        { dex: 560, name: "Scrafty" },

        // Sigilyph
        { dex: 561, name: "Sigilyph" },

        // Zorua → Zoroark
        { dex: 570, name: "Zorua" },
        { dex: 571, name: "Zoroark" },

        // Joltik → Galvantula
        { dex: 595, name: "Joltik" },
        { dex: 596, name: "Galvantula" },

        // Ferroseed → Ferrothorn
        { dex: 597, name: "Ferroseed" },
        { dex: 598, name: "Ferrothorn" },

        // Klink → Klang → Klinklang
        { dex: 599, name: "Klink" },
        { dex: 600, name: "Klang" },
        { dex: 601, name: "Klinklang" },
    ],
    },
    {
    slug: "sb_GoTour2025_black",
    title: "Pokémon Negro",
    year: "2025",
    month: "02",
    items: [
        // Snivy → Servine → Serperior
        { dex: 495, name: "Snivy" },
        { dex: 496, name: "Servine" },
        { dex: 497, name: "Serperior" },

        // Tepig → Pignite → Emboar
        { dex: 498, name: "Tepig" },
        { dex: 499, name: "Pignite" },
        { dex: 500, name: "Emboar" },

        // Oshawott → Dewott → Samurott (Unova)
        { dex: 501, name: "Oshawott" },
        { dex: 502, name: "Dewott" },
        { dex: 503, name: "Samurott" },

        // Trío Espadachín
        { dex: 638, name: "Cobalion" },
        { dex: 639, name: "Terrakion" },
        { dex: 640, name: "Virizion" },

        // Tornadus (Forma Tótem / Therian)
        { dex: 641, name: "Tornadus (Tótem)", code: "pm641.fTHERIAN" },

        // Reshiram
        { dex: 643, name: "Reshiram" },

        // Landorus (Forma Tótem / Therian)
        { dex: 645, name: "Landorus (Tótem)", code: "pm645.fTHERIAN" },

        // Kyurem
        { dex: 646, name: "Kyurem", code: "pm646.fNORMAL" },

        { dex: 649, name: "Genesect (Normal)",    code: "pm649.fNORMAL"  },
        { dex: 649, name: "Genesect (HidroROM)",  code: "pm649.fDOUSE"   },
        { dex: 649, name: "Genesect (FulgoROM)",  code: "pm649.fSHOCK"   },
        { dex: 649, name: "Genesect (PiroROM)",   code: "pm649.fBURN"    },
        { dex: 649, name: "Genesect (HieloROM)",  code: "pm649.fCHILL"   },
    ],
    },
    {
    slug: "sb_GoTour2025_white",
    title: "Pokémon Blanco",
    year: "2025",
    month: "02",
    items: [
        // Snivy → Servine → Serperior
        { dex: 495, name: "Snivy" },
        { dex: 496, name: "Servine" },
        { dex: 497, name: "Serperior" },

        // Tepig → Pignite → Emboar
        { dex: 498, name: "Tepig" },
        { dex: 499, name: "Pignite" },
        { dex: 500, name: "Emboar" },

        // Oshawott → Dewott → Samurott (Unova)
        { dex: 501, name: "Oshawott" },
        { dex: 502, name: "Dewott" },
        { dex: 503, name: "Samurott" },

        // Trío Espadachín
        { dex: 638, name: "Cobalion" },
        { dex: 639, name: "Terrakion" },
        { dex: 640, name: "Virizion" },

        // Thundurus (Forma Tótem / Therian)
        { dex: 642, name: "Thundurus (Tótem)", code: "pm642.fTHERIAN" },

        // Zekrom
        { dex: 644, name: "Zekrom" },

        // Landorus (Forma Tótem / Therian)
        { dex: 645, name: "Landorus (Tótem)", code: "pm645.fTHERIAN" },

        // Kyurem
        { dex: 646, name: "Kyurem", code: "pm646.fNORMAL" },

        // Genesect (todas las ROM)
        { dex: 649, name: "Genesect (Normal)",    code: "pm649.fNORMAL"  },
        { dex: 649, name: "Genesect (HidroROM)",  code: "pm649.fDOUSE"   },
        { dex: 649, name: "Genesect (FulgoROM)",  code: "pm649.fSHOCK"   },
        { dex: 649, name: "Genesect (PiroROM)",   code: "pm649.fBURN"    },
        { dex: 649, name: "Genesect (HieloROM)",  code: "pm649.fCHILL"   },
    ],
    },
    {
    slug: "sb_GoTour2025_black_white",
    title: "Pokémon Negro y Blanco",
    year: "2025",
    month: "03",
    items: [
        { dex: 646, name: "Kyurem Blanco", code: "pm646.fWHITE" },
        { dex: 646, name: "Kyurem Negro",  code: "pm646.fBLACK" },
    ],
    },
    {
    slug: "sb_GoFest2025_sword",
    title: "Espada",
    year: "2025",
    month: "06",
    items: [
        { dex: 888, name: "Zacian",               code: "pm888" },
        { dex: 888, name: "Zacian Espada Suprema", code: "pm888.fHERO" },
    ],
    },
    {
    slug: "sb_GoFest2025_shield",
    title: "Escudo",
    year: "2025",
    month: "06",
    items: [
        { dex: 889, name: "Zamazenta",                 code: "pm889" },
        { dex: 889, name: "Zamazenta Escudo Supremo",  code: "pm889.fHERO" },
    ],
    },
    {
    slug: "sb_GoFest2025_Eternatus",
    title: "Cielos Oscuros",
    year: "2025",
    month: "07",
    items: [
            { dex: 1,   name: "Bulbasaur",    code: "pm1.MAX" },
        { dex: 2,   name: "Ivysaur",      code: "pm2.MAX" },
        { dex: 3,   name: "Venusaur",     code: "pm3.MAX" },
        { dex: 4,   name: "Charmander",   code: "pm4.MAX" },
        { dex: 5,   name: "Charmeleon",   code: "pm5.MAX" },
        { dex: 6,   name: "Charizard",    code: "pm6.MAX" },
        { dex: 7,   name: "Squirtle",     code: "pm7.MAX" },
        { dex: 8,   name: "Wartortle",    code: "pm8.MAX" },
        { dex: 9,   name: "Blastoise",    code: "pm9.MAX" },
        { dex: 10,  name: "Caterpie",     code: "pm10.MAX" },
        { dex: 11,  name: "Metapod",      code: "pm11.MAX" },
        { dex: 12,  name: "Butterfree",   code: "pm12.MAX" },
        { dex: 66,  name: "Machop",       code: "pm66.MAX" },
        { dex: 67,  name: "Machoke",      code: "pm67.MAX" },
        { dex: 68,  name: "Machamp",      code: "pm68.MAX" },
        { dex: 92,  name: "Gastly",       code: "pm92.MAX" },
        { dex: 93,  name: "Haunter",      code: "pm93.MAX" },
        { dex: 94,  name: "Gengar",       code: "pm94.MAX" },
        { dex: 98,  name: "Krabby",       code: "pm98.MAX" },
        { dex: 99,  name: "Kingler",      code: "pm99.MAX" },
        { dex: 113, name: "Chansey",      code: "pm113.MAX" },
        { dex: 131, name: "Lapras",       code: "pm131.MAX" },
        { dex: 138, name: "Omanyte",      code: "pm138.MAX" },
        { dex: 139, name: "Omastar",      code: "pm139.MAX" },
        { dex: 140, name: "Kabuto",       code: "pm140.MAX" },
        { dex: 141, name: "Kabutops",     code: "pm141.MAX" },
        { dex: 144, name: "Articuno",     code: "pm144.MAX" },
        { dex: 145, name: "Zapdos",       code: "pm145.MAX" },
        { dex: 146, name: "Moltres",      code: "pm146.MAX" },
        { dex: 213, name: "Shuckle",      code: "pm213.MAX" },
        { dex: 242, name: "Blissey",      code: "pm242.MAX" },
        { dex: 243, name: "Raikou",       code: "pm243.MAX" },
        { dex: 244, name: "Entei",        code: "pm244.MAX" },
        { dex: 245, name: "Suicune",      code: "pm245.MAX" },
        { dex: 302, name: "Sableye",      code: "pm302.MAX" },
        { dex: 320, name: "Wailmer",      code: "pm320.MAX" },
        { dex: 321, name: "Wailord",      code: "pm321.MAX" },
        { dex: 374, name: "Beldum",       code: "pm374.MAX" },
        { dex: 375, name: "Metang",       code: "pm375.MAX" },
        { dex: 376, name: "Metagross",    code: "pm376.MAX" },
        { dex: 380, name: "Latias",       code: "pm380.MAX" },
        { dex: 381, name: "Latios",       code: "pm381.MAX" },
        { dex: 519, name: "Pidove",       code: "pm519.MAX" },
        { dex: 520, name: "Tranquill",    code: "pm520.MAX" },
        { dex: 521, name: "Unfezant",     code: "pm521.MAX" },
        { dex: 529, name: "Drilbur",      code: "pm529.MAX" },
        { dex: 530, name: "Excadrill",    code: "pm530.MAX" },
        { dex: 554, name: "Darumaka",     code: "pm554.MAX" },
        { dex: 555, name: "Darmanitan",   code: "pm555.fSTANDARD.MAX" },
        { dex: 568, name: "Trubbish",     code: "pm568.MAX" },
        { dex: 569, name: "Garbodor",     code: "pm569.MAX" },
        { dex: 615, name: "Cryogonal",    code: "pm615.MAX" },
        { dex: 766, name: "Passimian",    code: "pm766.MAX" },
        { dex: 810, name: "Grookey",      code: "pm810.MAX" },
        { dex: 811, name: "Thwackey",     code: "pm811.MAX" },
        { dex: 812, name: "Rillaboom",    code: "pm812.MAX" },
        { dex: 813, name: "Scorbunny",    code: "pm813.MAX" },
        { dex: 814, name: "Raboot",       code: "pm814.MAX" },
        { dex: 815, name: "Cinderace",    code: "pm815.MAX" },
        { dex: 816, name: "Sobble",       code: "pm816.MAX" },
        { dex: 817, name: "Drizzile",     code: "pm817.MAX" },
        { dex: 818, name: "Inteleon",     code: "pm818.MAX" },
        { dex: 819, name: "Skwovet",      code: "pm819.MAX" },
        { dex: 820, name: "Greedent",     code: "pm820.MAX" },
        { dex: 821, name: "Rookidee",     code: "pm821.MAX" },
        { dex: 822, name: "Corvisquire",  code: "pm822.MAX" },
        { dex: 823, name: "Corviknight",  code: "pm823.MAX" },
        { dex: 831, name: "Wooloo",       code: "pm831.MAX" },
        { dex: 832, name: "Dubwool",      code: "pm832.MAX" },
        { dex: 849, name: "Toxtricity (Agudo)", code: "pm849.fAMPED.MAX" },
        { dex: 849, name: "Toxtricity (Grave)", code: "pm849.fLOW_KEY.MAX" },
        { dex: 856, name: "Hatenna",      code: "pm856.MAX" },
        { dex: 857, name: "Hattrem",      code: "pm857.MAX" },
        { dex: 858, name: "Hatterene",    code: "pm858.MAX" },
        { dex: 870, name: "Falinks",      code: "pm870.MAX" },
        { dex: 3,   name: "Venusaur (Gigamax)",    code: "pm3.fGIGANTAMAX" },
        { dex: 6,   name: "Charizard (Gigamax)",   code: "pm6.fGIGANTAMAX" },
        { dex: 9,   name: "Blastoise (Gigamax)",   code: "pm9.fGIGANTAMAX" },
        { dex: 12,  name: "Butterfree (Gigamax)",  code: "pm12.fGIGANTAMAX" },
        { dex: 68,  name: "Machamp (Gigamax)",     code: "pm68.fGIGANTAMAX" },
        { dex: 94,  name: "Gengar (Gigamax)",      code: "pm94.fGIGANTAMAX" },
        { dex: 99,  name: "Kingler (Gigamax)",     code: "pm99.fGIGANTAMAX" },
        { dex: 131, name: "Lapras (Gigamax)",      code: "pm131.fGIGANTAMAX" },
        { dex: 143, name: "Snorlax (Gigamax)",     code: "pm143.fGIGANTAMAX" },
        { dex: 812, name: "Rillaboom (Gigamax)",   code: "pm812.fGIGANTAMAX" },
        { dex: 815, name: "Cinderace (Gigamax)",   code: "pm815.fGIGANTAMAX" },
        { dex: 818, name: "Inteleon (Gigamax)",    code: "pm818.fGIGANTAMAX" }, 
        { dex: 849, name: "Toxtricity (Agudo) (Gigamax)", code: "pm849.fGIGANTAMAX" },
        { dex: 849, name: "Toxtricity (Grave) (Gigamax)", code: "pm849.fGIGANTAMAX" },
    ],
    },
    {
    slug: "sb_TeamLeader_red",
    title: "Líder de Equipo Rojo",
    year: "2024",
    month: "08",
    items: [
        { dex: 77,  name: "Ponyta (con accesorio de Candela)", code: "pm77.cSPRING_2023_VALOR"  },
        { dex: 78,  name: "Rapidash (con accesorio de Candela)", code: "pm78.cSPRING_2023_VALOR"  },
    ],
    },
    {
    slug: "sb_TeamLeader_yellow",
    title: "Líder de Equipo Amarillo",
    year: "2024",
    month: "08",
    items: [
        { dex: 239, name: "Elekid (con accesorio de Spark)", code: "pm239.cSPRING_2023_INSTINCT" },
        { dex: 125, name: "Electabuzz (con accesorio de Spark)", code: "pm125.cSPRING_2023_INSTINCT" },
        { dex: 466, name: "Electivire (con accesorio de Spark)", code: "pm466.cSPRING_2023_INSTINCT" },
    ],
    },
    {
    slug: "sb_TeamLeader_blue",
    title: "Líder de Equipo Azul",
    year: "2024",
    month: "08",
    items: [
        { dex: 131, name: "Lapras (con accesorio de Blanche)", code: "pm131.cSPRING_2023_MYSTIC" },
    ],
    },
    {
    slug: "sb_2024_decemberCdRecap",
    title: "Día de la Comunidad 2024",
    year: "2024",
    month: "12",
    items: [
        { dex: 56,  name: "Mankey" },
        { dex: 57,  name: "Primeape" },
        { dex: 979, name: "Annihilape" },
        { dex: 69,  name: "Bellsprout" },
        { dex: 70,  name: "Weepinbell" },
        { dex: 71,  name: "Victreebel" },
        { dex: 77,  name: "Ponyta" },
        { dex: 78,  name: "Rapidash" },
        { dex: 77,  name: "Ponyta (Galar)", code: "pm77.fGALARIAN"},
        { dex: 78,  name: "Rapidash (Galar)", code: "pm78.fGALARIAN" },
        { dex: 440, name: "Happiny" },
        { dex: 113, name: "Chansey" },
        { dex: 242, name: "Blissey" },
        { dex: 137, name: "Porygon" },
        { dex: 233, name: "Porygon2" },
        { dex: 474, name: "Porygon-Z" },
        { dex: 155, name: "Cyndaquil" },
        { dex: 156, name: "Quilava" },
        { dex: 157, name: "Typhlosion" },
        { dex: 371, name: "Bagon" },
        { dex: 372, name: "Shelgon" },
        { dex: 373, name: "Salamence" },
        { dex: 374, name: "Beldum" },
        { dex: 375, name: "Metang" },
        { dex: 376, name: "Metagross" },
        { dex: 540, name: "Sewaddle" },
        { dex: 541, name: "Swadloon" },
        { dex: 542, name: "Leavanny" },
        { dex: 602, name: "Tynamo" },
        { dex: 603, name: "Eelektrik" },
        { dex: 604, name: "Eelektross" },
        { dex: 704, name: "Goomy" },
        { dex: 705, name: "Sliggoo" },
        { dex: 706, name: "Goodra" },
        { dex: 722, name: "Rowlet" },
        { dex: 723, name: "Dartrix" },
        { dex: 724, name: "Decidueye" },
        { dex: 725, name: "Litten" },
        { dex: 726, name: "Torracat" },
        { dex: 727, name: "Incineroar" },
        { dex: 728, name: "Popplio" },
        { dex: 729, name: "Brionne" },
        { dex: 730, name: "Primarina" },
        { dex: 761, name: "Bounsweet" },
        { dex: 762, name: "Steenee" },
        { dex: 763, name: "Tsareena" },
    ],
    },
    {
    slug: "sb_GoFest2025",
    title: "Restauración Ancestral",
    year: "2025",
    month: "06",
    items: [
        { dex: 377, name: "Regirock" },
        { dex: 378, name: "Regice" },
        { dex: 379, name: "Registeel" },
        { dex: 894, name: "Regieleki" },
        { dex: 895, name: "Regidrago" },
        { dex: 486, name: "Regigigas" },
    ],
    },
    {
    slug: "sb_9thAnniversary",
    title: "Noveno Aniversario)",
    year: "2025",
    month: "07",
    items: [
        { dex: 999, name: "Gimmighoul (Moneda del Noveno Aniversario)" },
    ],
    },
    {
    slug: "sb_Concierge2025",
    title: "La Conserje Pokémon",
    year: "2025",
    month: "09",
    items: [
        { dex: 54, name: "Psyduck (con flotador)", code: "pm54.cSWIMRING2025" },
    ],
    },
];

/* ================= DATA: UBICACIONES ================= */
const LOCATION_BACKGROUNDS = [
{
  slug: "ub_2025_amsterdam",
  title: "Ámsterdam 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_anaheim",
  title: "Anaheim 2025",
  year: "2025",
  month: "08",
  items: [
    { dex: 25, name: "Pikachu (disfraz del Mundial 2025)" },
  ],
},
{
  slug: "ub_2024_bali",
  title: "Bali 2024",
  year: "2024",
  month: "03",
  items: [
    { dex: 380, name: "Latias" },
    { dex: 381, name: "Latios" },
  ],
},
{
  slug: "ub_2025_bangkok",
  title: "Bangkok 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2023_barcelona",
  title: "Barcelona 2023",
  year: "2023",
  month: "10",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_berlin",
  title: "Berlín 2025",
  year: "2025",
  month: "08",
  items: [
    { dex: 25,  name: "Pikachu (sombrero veraniego)" },
    { dex: 26,  name: "Raichu" },
  ],
},
{
  slug: "ub_2025_bombay",
  title: "Bombay 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_cancun",
  title: "Cancún 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2023_ciudad_mexico",
  title: "Ciudad de México 2023",
  year: "2023",
  month: "11",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_colonia",
  title: "Colonia 2025",
  year: "2025",
  month: "08",
  items: [
    { dex: 25,  name: "Pikachu (sombrero veraniego)" },
    { dex: 26,  name: "Raichu" },
  ],
},
{
  slug: "ub_2024_fukuoka",
  title: "Fukuoka 2024",
  year: "2024",
  month: "11",
  items: [
    { dex: 483, name: "Dialga (Forma Origen)" },
    { dex: 484, name: "Palkia (Forma Origen)" },
    { dex: 849, name: "Toxtricity (Forma Aguda)" },
    { dex: 849, name: "Toxtricity (Forma Grave)" },
  ],
},
{
  slug: "ub_2024_hongkong",
  title: "Hong Kong 2024",
  year: "2024",
  month: "12",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2024_honolulu",
  title: "Honolulu 2024",
  year: "2024",
  month: "08",
  items: [
    { dex: 25, name: "Pikachu (disfraz del Mundial 2024)" },
  ],
},
{
  slug: "ub_2024_incheon",
  title: "Incheon 2024",
  year: "2024",
  month: "09",
  items: [
    { dex: 25, name: "Pikachu (sombrero vaquero)" },
    { dex: 672, name: "Skiddo" },
    { dex: 673, name: "Gogoat" },
  ],
},
{
  slug: "ub_2023_isla_jeju",
  title: "Isla Jeju 2023",
  year: "2023",
  month: "07",
  items: [
    { dex: 380, name: "Latias" },
    { dex: 381, name: "Latios" },
  ],
},
{
  slug: "ub_2025_isla_jeju",
  title: "Isla Jeju 2025",
  year: "2025",
  month: "10",
  items: [
    { dex: 25, name: "Pikachu (Camiseta Baya Azul)" },
  ],
},
{
  slug: "ub_2025_jangheung",
  title: "Jangheung-Gun 2025",
  year: "2025",
  month: "07",
  items: [
    { dex: 25, name: "Pikachu (gorro de fiesta)" },
    { dex: 131, name: "Lapras (bufanda)" },
    { dex: 585, name: "Deerling (Verano)", code: "pm585.fSUMMER" },
    { dex: 586, name: "Sawsbuck (Verano)", code: "pm586.fSUMMER" },
  ],
},
{
  slug: "ub_2025_jersey_city",
  title: "Jersey 2025",
  year: "2025",
  month: "06",
  items: [
    { dex: 888, name: "Zacian" },
    { dex: 889, name: "Zamazenta" },
    { dex: 815, name: "Cinderace (Gigamax)" },
  ],
},
{
  slug: "ub_2025_lahaya",
  title: "La Haya 2025",
  year: "2025",
  month: "08",
  items: [
    { dex: 25,  name: "Pikachu (sombrero veraniego)" },
    { dex: 26,  name: "Raichu" },
  ],
},
{
  slug: "ub_2023_las_vegas",
  title: "Las Vegas 2023",
  year: "2023",
  month: "02",
  items: [
    { dex: 382, name: "Kyogre" },
    { dex: 383, name: "Groudon" },
  ],
},
{
  slug: "ub_2023_londres",
  title: "Londres 2023",
  year: "2023",
  month: "08",
  items: [
    { dex: 384, name: "Rayquaza" },
    { dex: 488, name: "Cresselia" },
    { dex: 716, name: "Xerneas" },
    { dex: 717, name: "Yveltal" },
  ],
},
{
  slug: "ub_2025_londres",
  title: "Londres 2025",
  year: "2025",
  month: "07",
  items: [
    { dex: 25, name: "Pikachu (sombrero veraniego)" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2024_los_angeles",
  title: "Los Ángeles 2024",
  year: "2024",
  month: "02",
  items: [
    { dex: 483, name: "Dialga (Forma Origen)" },
    { dex: 484, name: "Palkia (Forma Origen)" },
  ],
},
{
  slug: "ub_2025_los_angeles",
  title: "Los Ángeles 2025",
  year: "2025",
  month: "02",
  items: [
    { dex: 643, name: "Reshiram" },
    { dex: 644, name: "Zekrom" },
    { dex: 646, name: "Kyurem", code: "pm646.fNORMAL" },
  ],
},
{
  slug: "ub_2025_milan",
  title: "Milán 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2024_madrid",
  title: "Madrid 2024",
  year: "2024",
  month: "06",
  items: [
    { dex: 791, name: "Solgaleo" },
    { dex: 792, name: "Lunala" },
    { dex: 793, name: "Nihilego" },
    { dex: 795, name: "Pheromosa" },
    { dex: 798, name: "Kartana" },
    { dex: 799, name: "Guzzlord" },
    { dex: 800, name: "Necrozma" },
    { dex: 806, name: "Blacephalon" },
  ],
},
{
  slug: "ub_2025_manchester",
  title: "Mánchester 2025",
  year: "2025",
  month: "07",
  items: [
    { dex: 25, name: "Pikachu (sombrero veraniego)" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2025_nagasaki",
  title: "Nagasaki 2025",
  year: "2025",
  month: "11",
  items: [
    { dex: 488, name: "Cresselia (Oscuro)" },
    { dex: 491, name: "Darkrai (Oscuro)" },
    { dex: 760, name: "Bewear (pañuelo silvestre)" },
    { dex: 861, name: "Grimmsnarl (Gigamax)" },
  ],
},
{
  slug: "ub_2025_nueva_taipei",
  title: "Nueva Taipéi 2025",
  year: "2025",
  month: "02",
  items: [
    { dex: 643, name: "Reshiram" },
    { dex: 644, name: "Zekrom" },
    { dex: 646, name: "Kyurem", code: "pm646.fNORMAL" },
  ],
},
{
  slug: "ub_2023_nueva_york",
  title: "Nueva York 2023",
  year: "2023",
  month: "08",
  items: [
    { dex: 384, name: "Rayquaza" },
    { dex: 488, name: "Cresselia" },
    { dex: 716, name: "Xerneas" },
    { dex: 717, name: "Yveltal" },
  ],
},
{
  slug: "ub_2024_nueva_york",
  title: "Nueva York 2024",
  year: "2024",
  month: "07",
  items: [
    { dex: 791, name: "Solgaleo" },
    { dex: 792, name: "Lunala" },
    { dex: 793, name: "Nihilego" },
    { dex: 794, name: "Buzzwole" },
    { dex: 798, name: "Kartana" },
    { dex: 799, name: "Guzzlord" },
    { dex: 800, name: "Necrozma" },
    { dex: 806, name: "Blacephalon" },
  ],
},
{
  slug: "ub_2023_osaka",
  title: "Osaka 2023",
  year: "2023",
  month: "08",
  items: [
    { dex: 384, name: "Rayquaza" },
    { dex: 488, name: "Cresselia" },
    { dex: 716, name: "Xerneas" },
    { dex: 717, name: "Yveltal" },
  ],
},
{
  slug: "ub_2025_osaka01",
  title: "Osaka 2025",
  year: "2025",
  month: "04",
  items: [
    { dex: 25, name: "Pikachu" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2025_osaka02",
  title: "Osaka 2025",
  year: "2025",
  month: "04",
  items: [
    { dex: 1, name: "Bulbasaur" },
    { dex: 2, name: "Ivysaur" },
    { dex: 3, name: "Venusaur" },
    { dex: 4, name: "Charmander" },
    { dex: 5, name: "Charmeleon" },
    { dex: 6, name: "Charizard" },
    { dex: 7, name: "Squirtle" },
    { dex: 8, name: "Wartortle" },
    { dex: 9, name: "Blastoise" },
  ],
},
{
  slug: "ub_2025_osaka03",
  title: "Osaka 2025",
  year: "2025",
  month: "05",
  items: [
    { dex: 888, name: "Zacian" },
    { dex: 889, name: "Zamazenta" },
    { dex: 812, name: "Rillaboom (Gigamax)" },
  ],
},
{
  slug: "ub_2025_paris",
  title: "París 2025",
  year: "2025",
  month: "06",
  items: [
    { dex: 888, name: "Zacian" },
    { dex: 889, name: "Zamazenta" },
    { dex: 818, name: "Inteleon (Gigamax)" },
    { dex: 4,   name: "Charmander" },
    { dex: 5,   name: "Charmeleon" },
    { dex: 6,   name: "Charizard" },
  ],
},
{
  slug: "ub_2025_paris_road_trip",
  title: "París 2025",
  year: "2025",
  month: "07",
  items: [
    { dex: 25, name: "Pikachu (sombrero veraniego)" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2025_paris02",
  title: "París 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 4, name: "Charmander" },
    { dex: 5, name: "Charmeleon" },
    { dex: 6, name: "Charizard" },
  ],
},
{
  slug: "ub_2025_paris03",
  title: "París 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 4, name: "Charmander" },
    { dex: 5, name: "Charmeleon" },
    { dex: 6, name: "Charizard" },
  ],
},
{
  slug: "ub_2025_santiago",
  title: "Santiago 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2024_saopaulo",
  title: "São Paulo 2024",
  year: "2024",
  month: "12",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2024_sendai",
  title: "Sendai 2024",
  year: "2024",
  month: "05",
  items: [
    { dex: 791, name: "Solgaleo" },
    { dex: 792, name: "Lunala" },
    { dex: 793, name: "Nihilego" },
    { dex: 796, name: "Xurkitree" },
    { dex: 798, name: "Kartana" },
    { dex: 799, name: "Guzzlord" },
    { dex: 800, name: "Necrozma" },
    { dex: 805, name: "Stakataka" },
  ],
},
{
  slug: "ub_2023_seul",
  title: "Seúl 2023",
  year: "2023",
  month: "10",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_singapur",
  title: "Singapur 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_suita",
  title: "Suita 2025",
  year: "2025",
  month: "05",
  items: [
    { dex: 25, name: "Pikachu" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2024_surabaya",
  title: "Surabaya 2024",
  year: "2024",
  month: "05",
  items: [
    { dex: 380, name: "Latias" },
    { dex: 381, name: "Latios" },
  ],
},
{
  slug: "ub_2024_tainan",
  title: "Tainan 2024",
  year: "2024",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_taipei",
  title: "Taipei 2025",
  year: "2025",
  month: "10",
  items: [
    { dex: 131, name: "Lapras (bufanda)" },
  ],
},
{
  slug: "ub_2025_valencia",
  title: "Valencia 2025",
  year: "2025",
  month: "08",
  items: [
    { dex: 25, name: "Pikachu (sombrero veraniego)" },
    { dex: 26, name: "Raichu" },
  ],
},
{
  slug: "ub_2025_valencia02",
  title: "Valencia 2025",
  year: "2025",
  month: "09",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_vancouver",
  title: "Vancouver 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2024_yakarta",
  title: "Yakarta 2024",
  year: "2024",
  month: "09",
  items: [
    { dex: 380, name: "Latias" },
    { dex: 381, name: "Latios" },
    { dex: 133, name: "Eevee (sombrero de explorador)" },
    { dex: 134, name: "Vaporeon" },
    { dex: 135, name: "Jolteon" },
    { dex: 136, name: "Flareon" },
    { dex: 196, name: "Espeon" },
    { dex: 197, name: "Umbreon" },
    { dex: 470, name: "Leafeon" },
    { dex: 471, name: "Glaceon" },
    { dex: 700, name: "Sylveon" },
  ],
},
{
  slug: "ub_2025_yeouido",
  title: "Yeouido 2025",
  year: "2025",
  month: "03",
  items: [
    { dex: 25, name: "Pikachu (sombrero de flores)" },
    { dex: 585, name: "Deerling (Primavera)", code: "pm585.fSPRING" },
    { dex: 586, name: "Sawsbuck (Primavera)", code: "pm586.fSPRING"},
  ],
},
{
  slug: "ub_2024_yogyakarta",
  title: "Yogyakarta 2024",
  year: "2024",
  month: "08",
  items: [
    { dex: 380, name: "Latias" },
    { dex: 381, name: "Latios" },
  ],
},


];

/* === FONDOS DE UBICACIÓN: ESTADIOS === */
const STADIUM_EVENTS = [
  {
    slug: "mlb_bayrays",
    title: "Estadio de los Bay Rays",
    year: "2025",
    month: "07",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_brewers",
    title: "Estadio de los Brewers",
    year: "2025",
    month: "07",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_diamondbacks",
    title: "Estadio de los Diamondbacks",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_giants",
    title: "Estadio de los Giants",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_guardians",
    title: "Estadio de los Guardians",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_lotteguardians",
    title: "Estadio de los Lotte Giants",
    year: "2025",
    month: "06",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_mariners",
    title: "Estadio de los Mariners",
    year: "2024",
    month: "09",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_marlins",
    title: "Estadio de los Marlins",
    year: "2024",
    month: "09",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_nationals",
    title: "Estadio de los Nationals",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_mets",
    title: "Estadio de los Mets",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_orioles",
    title: "Estadio de los Orioles",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_rangers",
    title: "Estadio de los Rangers",
    year: "2025",
    month: "09",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_redsox",
    title: "Estadio de los Red Sox",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_twins",
    title: "Estadio de los Twins",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
  {
    slug: "mlb_whitesox",
    title: "Estadio de los White Sox",
    year: "2025",
    month: "08",
    items: [
      { dex: 25, name: "Pikachu" },
      { dex: 26, name: "Raichu" },
    ],
  },
];


/* ================= HELPERS ================= */
function addWebpFallback(img){
  img.addEventListener("error", ()=>{
    if (img.src.endsWith(".webp")) img.src = img.src.replace(".webp",".png");
  }, { once:true });
}

const SPRITE = (item) =>
  item.code
    ? `${ASSET_PREFIX}assets/images/pokemon/${item.code}.icon.webp`
    : P(item.dex);

// y cambia cardHTML() para usar SPRITE(p):
function cardHTML(p){
  const src = SPRITE(p);
  return `
    <div class="fe-card">
      <div class="poke-thumb"><img src="${src}" alt="${p.name}" loading="lazy" decoding="async"></div>
      <div class="poke-text">
        <p class="poke-name">${p.name}</p>
        <div class="poke-dex">#${p.dex ?? "—"}</div>
      </div>
    </div>
  `;
}

function sectionHTML(group, bannerSrc){
  const count = group.items.length;
  return `
    <div class="fe-section" data-slug="${group.slug}">
      <div class="fe-header" data-toggle="panel">
        <img class="fe-banner" src="${bannerSrc}" alt="${group.title}">
        <div class="fe-headbar">
          <div class="fe-title">${group.title}</div>
          <div class="fe-count">Ver los ${count} Pokémon</div>
        </div>
      </div>
      <div class="fe-panel">
        <div class="fe-grid">
          ${group.items.map(cardHTML).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderAccordion(list, mountEl, bannerBuilder){
  mountEl.innerHTML = list.map(g => sectionHTML(g, bannerBuilder(g.slug))).join("");

  mountEl.querySelectorAll(".poke-thumb img").forEach(addWebpFallback);

  mountEl.querySelectorAll(".fe-header img").forEach(img=>{
    img.addEventListener("error", ()=>{
      if (img.src.endsWith(".png") || img.src.endsWith(".jpg")){
        img.src = `${ASSET_PREFIX}assets/images/fondos-especiales/placeholder.png`;
      }
    }, { once:true });
  });

  mountEl.querySelectorAll(".fe-header").forEach(head=>{
    head.addEventListener("click", ()=>{
      const panel = head.nextElementSibling;
      panel.classList.toggle("is-open");
    });
  });
}

/* ===== Ordenar por año/mes DESC (más nuevo primero) ===== */
function sortByYearMonthDesc(groups){
  // Normalizamos: YYYYMM como número; sin fecha -> 0
  const key = (g) => {
    const y = (g.year ?? "").toString().padStart(4, "0");
    const m = (g.month ?? "").toString().padStart(2, "0");
    return /^\d{4}$/.test(y) && /^\d{2}$/.test(m) ? parseInt(`${y}${m}`, 10) : 0;
  };
  return [...groups].sort((a,b) => key(b) - key(a));
}

/* ================= TOGGLE (3 modos) ================= */
let fondosMode = 0; 

function applyFondosMode() {
  const titleEl = document.getElementById("fondosTitle");
  const esp = document.getElementById("feEspeciales");
  const ubi = document.getElementById("feUbicaciones");
  const est = document.getElementById("feEstadios");

  // Oculta todo
  if (esp) esp.style.display = "none";
  if (ubi) ubi.style.display = "none";
  if (est) est.style.display = "none";

  // Muestra el modo activo y cambia el título
  if (fondosMode === 0) {
    if (titleEl) titleEl.textContent = "Pokémon con Fondo Especial";
    if (esp) esp.style.display = "grid";
  } else if (fondosMode === 1) {
    if (titleEl) titleEl.textContent = "Pokémon con Fondo de Ubicación";
    if (ubi) ubi.style.display = "grid";
  } else {
    if (titleEl) titleEl.textContent = "Pokémon con Fondo de Estadios";
    if (est) est.style.display = "grid";
  }
}

function prevFondos() {
  fondosMode = (fondosMode + 2) % 3; // 0←1←2←0
  applyFondosMode();
}
function nextFondos() {
  fondosMode = (fondosMode + 1) % 3; // 0→1→2→0
  applyFondosMode();
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", ()=> {
  const contEsp = document.getElementById("feEspeciales");
  const contUbi = document.getElementById("feUbicaciones");
  const contEst = document.getElementById("feEstadios");

  // Ordenamos por fecha descendente (los sin fecha van al final)
  const espOrdenados = sortByYearMonthDesc(SPECIAL_BACKGROUNDS);
  const ubiOrdenados = sortByYearMonthDesc(LOCATION_BACKGROUNDS);
  const staOrdenados = sortByYearMonthDesc(STADIUM_EVENTS);

  // Render de las 3 listas
  renderAccordion(espOrdenados, contEsp, B_E);
  renderAccordion(ubiOrdenados, contUbi, B_U);
  renderAccordion(staOrdenados, contEst, B_S);

  // Set inicial (después de render)
  applyFondosMode();

  // Botones (si existen)
  document.getElementById("prevFondos")?.addEventListener("click", prevFondos);
  document.getElementById("nextFondos")?.addEventListener("click", nextFondos);
});
