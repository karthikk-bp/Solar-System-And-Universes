// Comprehensive Astronomical Data for the Solar System
// Curated with NASA/JPL verified parameters

export const celestialBodies = [
  {
    id: "sun",
    name: "The Sun",
    type: "Yellow Dwarf Star (G2V)",
    category: "star",
    tagline: "The blazing heart of our solar system",
    overview: "The Sun is a 4.6-billion-year-old yellow dwarf star—a hot glowing ball of hydrogen and helium at the center of our solar system. Its gravity holds everything from the biggest planets to tiny debris in orbit. It accounts for 99.86% of the total mass of the entire solar system.",
    howItWasBuilt: "Formed roughly 4.6 billion years ago from the gravitational collapse of a giant molecular cloud of gas and interstellar dust. As matter clustered together, gravitational pressure and friction heated the central protostar until core temperatures surpassed 15 million Kelvin, igniting nuclear fusion of hydrogen into helium.",
    color: "#ffaa00",
    glowColor: "rgba(255, 170, 0, 0.4)",
    gradient: "radial-gradient(circle at 35% 35%, #fff5c0 0%, #ffbb00 40%, #ff6600 75%, #cc2200 100%)",
    orbitRadiusKm: 0,
    distanceFromSunAU: 0,
    distanceFromSunKm: "0 km",
    orbitalPeriodDays: 0,
    orbitalSpeedKmS: 0,
    rotationPeriodHours: 648, // ~27 Earth days at equator (differential rotation)
    diameterKm: 1392700,
    massKg: "1.989 × 10³⁰ kg (333,000 Earths)",
    massEarths: 333000,
    gravityMs2: 274.0, // 28g
    gravityEarthRelative: 27.9,
    surfaceTempC: 5505,
    coreTempC: 15000000,
    moonsCount: 8, // 8 planets + millions of bodies
    hasRings: false,
    layers: [
      {
        name: "Core",
        depth: "Center to 0.25 R☉ (~175,000 km)",
        composition: "Dense plasma (34% H, 64% He). Fusion furnace: 600M tons of H fused per sec.",
        temperature: "15,000,000 °C",
        color: "#ffffff"
      },
      {
        name: "Radiative Zone",
        depth: "0.25 to 0.70 R☉ (~315,000 km)",
        composition: "Energy moves slowly outward via photon radiation. A single photon takes ~100,000 years to cross!",
        temperature: "7,000,000 to 2,000,000 °C",
        color: "#ffe066"
      },
      {
        name: "Convective Zone",
        depth: "0.70 to 1.0 R☉ (~200,000 km)",
        composition: "Giant thermal convection currents carry boiling plasma to the surface like a boiling pot.",
        temperature: "2,000,000 to 5,500 °C",
        color: "#ff9900"
      },
      {
        name: "Photosphere (Surface)",
        depth: "Thin visible layer (~400 km)",
        composition: "Visible light emitter, covered in granules and sunspots caused by magnetic field lines.",
        temperature: "5,500 °C",
        color: "#ff5500"
      },
      {
        name: "Corona (Atmosphere)",
        depth: "Extends millions of kilometers into space",
        composition: "Superheated ionized gas plasma, source of the solar wind and coronal mass ejections (CMEs).",
        temperature: "1,000,000 to 3,000,000 °C",
        color: "#ff3377"
      }
    ],
    atmosphere: {
      pressure: "Not applicable (Plasma)",
      composition: [
        { gas: "Hydrogen (H₂)", percent: 73.46 },
        { gas: "Helium (He)", percent: 24.85 },
        { gas: "Oxygen (O)", percent: 0.77 },
        { gas: "Carbon (C)", percent: 0.29 },
        { gas: "Iron, Neon, Nitrogen", percent: 0.63 }
      ],
      features: "Magnetic cycles flip every 11 years, causing solar flares and coronal mass ejections that trigger auroras on Earth."
    },
    keyMoons: [],
    notableMissions: [
      { name: "Parker Solar Probe", year: "2018-Present", achievement: "Closest human-made object to the Sun, directly 'touching' the solar corona at over 600,000 km/h." },
      { name: "SOHO & SDO", year: "1995-Present", achievement: "Continuous 24/7 high-resolution imaging of solar flares, magnetic loops, and coronal mass ejections." }
    ],
    funFacts: [
      "About 1.3 million Earths could fit inside the Sun.",
      "Light from the surface takes 8 minutes and 20 seconds to reach Earth.",
      "The Sun loses roughly 4 million tons of mass every single second as pure radiated energy.",
      "The corona is mystifyingly hundreds of times hotter than the visible surface beneath it."
    ]
  },
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestrial Planet",
    category: "terrestrial",
    tagline: "The swift, sun-scorched iron world",
    overview: "Mercury is the smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon. With no substantial atmosphere to trap heat, it experiences the most extreme temperature swings in the solar system.",
    howItWasBuilt: "Formed 4.5 billion years ago in the hottest inner zone of the protoplanetary nebula. Intense solar radiation and stellar winds boiled away most lighter silicates, leaving an enormous metallic iron core that makes up roughly 75% of the planet's radius.",
    color: "#a8a8a8",
    glowColor: "rgba(168, 168, 168, 0.3)",
    gradient: "radial-gradient(circle at 30% 30%, #e0e0e0 0%, #a0a0a0 45%, #595959 85%, #2a2a2a 100%)",
    orbitRadiusKm: 57900000,
    distanceFromSunAU: 0.387,
    distanceFromSunKm: "57.9 million km",
    orbitalPeriodDays: 88,
    orbitalSpeedKmS: 47.4,
    rotationPeriodHours: 1407.6, // 58.6 Earth days (3:2 spin-orbit resonance)
    diameterKm: 4879,
    massKg: "3.301 × 10²³ kg (0.055 Earths)",
    massEarths: 0.055,
    gravityMs2: 3.7,
    gravityEarthRelative: 0.38,
    surfaceTempC: 167, // -180°C to 430°C
    coreTempC: 1500,
    moonsCount: 0,
    hasRings: false,
    layers: [
      {
        name: "Solid Silicate Crust",
        depth: "100 - 300 km thick",
        composition: "Porous silicate rock scarred with impact craters and lobate scarps (cliffs formed as the planet cooled and shrank).",
        temperature: "Up to 430 °C (Day) / -180 °C (Night)",
        color: "#8c8c8c"
      },
      {
        name: "Silicate Mantle",
        depth: "400 - 600 km thick",
        composition: "Dense magnesium-iron silicates. Much thinner than Earth's mantle due to giant early impacts.",
        temperature: "~800 - 1200 °C",
        color: "#6b5b45"
      },
      {
        name: "Huge Metallic Iron Core",
        depth: "~2,000 km radius (75% of planet)",
        composition: "Molten outer iron-nickel layer generating a global magnetic field, with a solid inner iron sphere.",
        temperature: "~1,500 °C",
        color: "#c2410c"
      }
    ],
    atmosphere: {
      pressure: "10⁻¹⁴ bar (ultra-tenuous exosphere)",
      composition: [
        { gas: "Oxygen (O₂)", percent: 42.0 },
        { gas: "Sodium (Na)", percent: 29.0 },
        { gas: "Hydrogen (H₂)", percent: 22.0 },
        { gas: "Helium (He)", percent: 6.0 },
        { gas: "Potassium & trace", percent: 1.0 }
      ],
      features: "Because it lacks a true atmosphere, the sky is perpetually pitch-black even at high noon, and heat rapidly radiates away into space at night."
    },
    keyMoons: [],
    notableMissions: [
      { name: "MESSENGER", year: "2011-2015", achievement: "First spacecraft to orbit Mercury, mapping 100% of the surface and discovering water ice in permanently shadowed polar craters." },
      { name: "BepiColombo", year: "2018-Present", achievement: "Joint ESA/JAXA mission equipped with two orbiters conducting multiple flybys ahead of entering orbit." }
    ],
    funFacts: [
      "A year on Mercury is only 88 Earth days, but one solar day (noon-to-noon) lasts 176 Earth days!",
      "Despite being closest to the Sun, water ice exists inside deep polar craters where sunlight never penetrates.",
      "Mercury has contracted by roughly 7 km over billions of years as its gigantic iron core slowly solidified."
    ]
  },
  {
    id: "venus",
    name: "Venus",
    type: "Terrestrial Planet",
    category: "terrestrial",
    tagline: "The toxic greenhouse twin of Earth",
    overview: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Often called Earth's 'twin' due to similar size and mass, Venus took a radically catastrophic evolutionary path, becoming a hellish world with crushing pressures and surface temperatures hot enough to melt lead.",
    howItWasBuilt: "Accreted in the inner solar disk 4.5 billion years ago with a composition almost identical to primordial Earth. It may have originally possessed liquid oceans, but as the youthful Sun brightened, water evaporated, triggering a catastrophic runaway greenhouse effect that vaporized oceans and released trapped carbon from the crust.",
    color: "#e3bb76",
    glowColor: "rgba(227, 187, 118, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #fff0d4 0%, #e3bb76 45%, #b57a38 80%, #61360c 100%)",
    orbitRadiusKm: 108200000,
    distanceFromSunAU: 0.723,
    distanceFromSunKm: "108.2 million km",
    orbitalPeriodDays: 224.7,
    orbitalSpeedKmS: 35.0,
    rotationPeriodHours: -5832.5, // 243 Earth days (Retrograde: spins backwards!)
    diameterKm: 12104,
    massKg: "4.867 × 10²⁴ kg (0.815 Earths)",
    massEarths: 0.815,
    gravityMs2: 8.87,
    gravityEarthRelative: 0.90,
    surfaceTempC: 464, // Hottest planet!
    coreTempC: 5000,
    moonsCount: 0,
    hasRings: false,
    layers: [
      {
        name: "Volcanic Basalt Crust",
        depth: "30 - 50 km thick",
        composition: "Mostly basaltic rock smoothed by widespread basalt lava flows and thousands of volcanic calderas.",
        temperature: "464 °C (Uniform across day and night)",
        color: "#c77732"
      },
      {
        name: "Silicate Mantle",
        depth: "~3,000 km thick",
        composition: "Dense silicate rock. Convection drives volcanic hotspots through the lithosphere, although plate tectonics are absent.",
        temperature: "~2,000 - 3,500 °C",
        color: "#8a3d13"
      },
      {
        name: "Iron-Nickel Metallic Core",
        depth: "~3,200 km radius",
        composition: "Similar in composition to Earth's core, but creates almost no intrinsic magnetic field due to Venus's sluggish rotation.",
        temperature: "~5,000 °C",
        color: "#df531b"
      }
    ],
    atmosphere: {
      pressure: "92 bar (Equivalent to 900 meters underwater on Earth!)",
      composition: [
        { gas: "Carbon Dioxide (CO₂)", percent: 96.5 },
        { gas: "Nitrogen (N₂)", percent: 3.5 },
        { gas: "Sulfur Dioxide (SO₂)", percent: 0.015 },
        { gas: "Argon, Water vapor", percent: 0.01 }
      ],
      features: "Blanketed by opaque, reflective clouds of concentrated sulfuric acid. Super-rotation winds whip through upper clouds at 360 km/h, circling the entire planet in just 4 days."
    },
    keyMoons: [],
    notableMissions: [
      { name: "Venera 13 (USSR)", year: "1982", achievement: "Landed on the boiling surface, survived for 127 minutes in extreme heat/pressure, and transmitted the first color surface panorama." },
      { name: "Magellan (NASA)", year: "1990-1994", achievement: "Used radar to penetrate thick acid clouds and mapped 98% of Venusian topography, revealing vast volcanic plains and impact craters." }
    ],
    funFacts: [
      "Venus rotates clockwise (retrograde)—meaning the Sun rises in the west and sets in the east!",
      "A day on Venus (243 Earth days) is actually longer than its year (225 Earth days).",
      "Venus is the hottest planet in the entire solar system—even hotter than Mercury, which is much closer to the Sun."
    ]
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestrial Planet",
    category: "terrestrial",
    tagline: "The living oasis of our cosmic neighborhood",
    overview: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world with liquid water oceans covering 71% of its surface, a life-shielding magnetic field, and a breathable nitrogen-oxygen atmosphere.",
    howItWasBuilt: "Formed 4.54 billion years ago via accretion of rocky planetesimals. Early Earth was struck by a Mars-sized protoplanet named Theia (~4.5 billion years ago); the debris ejected from this collision coalesced into our Moon, stabilizing Earth's axial tilt and generating the rhythmic tides essential for primordial ocean chemistry.",
    color: "#2f80ed",
    glowColor: "rgba(47, 128, 237, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #56ccf2 0%, #2f80ed 40%, #1a56a6 75%, #0d2752 100%)",
    orbitRadiusKm: 149600000,
    distanceFromSunAU: 1.0,
    distanceFromSunKm: "149.6 million km (1 AU)",
    orbitalPeriodDays: 365.25,
    orbitalSpeedKmS: 29.8,
    rotationPeriodHours: 23.93,
    diameterKm: 12742,
    massKg: "5.972 × 10²⁴ kg (1.0 Earth)",
    massEarths: 1.0,
    gravityMs2: 9.81,
    gravityEarthRelative: 1.0,
    surfaceTempC: 15, // -89°C to 57°C
    coreTempC: 5400,
    moonsCount: 1,
    hasRings: false,
    layers: [
      {
        name: "Solid Crust (Continental & Oceanic)",
        depth: "5 - 70 km thick",
        composition: "Granite (continents) and basalt (ocean floors). Segmented into tectonic plates in continuous motion.",
        temperature: "Up to 500 °C at base",
        color: "#27ae60"
      },
      {
        name: "Silicate Mantle",
        depth: "2,900 km thick",
        composition: "Solid peridotite rock that flows plastically under immense heat and pressure, driving plate tectonics.",
        temperature: "1,000 to 3,700 °C",
        color: "#e67e22"
      },
      {
        name: "Liquid Outer Core",
        depth: "2,200 km thick",
        composition: "Swirling liquid iron and nickel. Acts as a geodynamo generating Earth's protective magnetic field (magnetosphere).",
        temperature: "4,000 to 5,000 °C",
        color: "#f39c12"
      },
      {
        name: "Solid Inner Core",
        depth: "1,220 km radius",
        composition: "Super-dense crystalline solid iron-nickel alloy kept solid by pressures of 3.3 million atmospheres.",
        temperature: "~5,400 °C (As hot as the Sun's surface)",
        color: "#f1c40f"
      }
    ],
    atmosphere: {
      pressure: "1.013 bar (1 atm at sea level)",
      composition: [
        { gas: "Nitrogen (N₂)", percent: 78.08 },
        { gas: "Oxygen (O₂)", percent: 20.95 },
        { gas: "Argon (Ar)", percent: 0.93 },
        { gas: "Carbon Dioxide (CO₂)", percent: 0.042 },
        { gas: "Water Vapor & traces", percent: 0.04 }
      ],
      features: "The stratospheric ozone layer filters harmful UV radiation, while the greenhouse effect warms the planet by 33°C above freezing, maintaining liquid oceans."
    },
    keyMoons: [
      { name: "The Moon", diameter: "3,474 km", distance: "384,400 km", note: "Fifth largest moon in the solar system; stabilizes Earth's tilt at 23.4°, creating regular seasons." }
    ],
    notableMissions: [
      { name: "Apollo 11", year: "1969", achievement: "First human footsteps on another celestial body (Neil Armstrong & Buzz Aldrin)." },
      { name: "Earth Observing System (NASA/ESA)", year: "1972-Present", achievement: "Constellation of hundreds of satellites continuously tracking climate, atmosphere, biosphere, and polar ice sheets." }
    ],
    funFacts: [
      "Earth is not a perfect sphere; centrifugal force from its rotation causes an equatorial bulge (oblate spheroid).",
      "Liquid water covers roughly 71% of the surface, holding 96.5% of all water in the world ocean.",
      "Without Earth's liquid metal outer core generating a magnetic shield, the solar wind would strip away our atmosphere."
    ]
  },
  {
    id: "mars",
    name: "Mars",
    type: "Terrestrial Planet",
    category: "terrestrial",
    tagline: "The rusty desert frontier of future humanity",
    overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the solar system. Often called the 'Red Planet' due to iron oxide (rust) coating its surface, Mars is a cold desert with seasons, polar ice caps, volcanoes, canyons, and ancient river deltas hinting at a warmer, wetter past.",
    howItWasBuilt: "Formed 4.5 billion years ago in the outer rocky accretion zone. Its growth stalled early—likely due to Jupiter's gravitational influence clearing nearby material—leaving Mars with only about 10% of Earth's mass. Because of its smaller mass, its interior cooled rapidly, shutting down its protective magnetic dynamo ~4 billion years ago.",
    color: "#e05638",
    glowColor: "rgba(224, 86, 56, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #ff8364 0%, #e05638 45%, #a63117 80%, #541407 100%)",
    orbitRadiusKm: 227900000,
    distanceFromSunAU: 1.524,
    distanceFromSunKm: "227.9 million km",
    orbitalPeriodDays: 687,
    orbitalSpeedKmS: 24.1,
    rotationPeriodHours: 24.62, // 24 hours 37 mins (1 Sol)
    diameterKm: 6779,
    massKg: "6.417 × 10²³ kg (0.107 Earths)",
    massEarths: 0.107,
    gravityMs2: 3.72,
    gravityEarthRelative: 0.38,
    surfaceTempC: -63, // -140°C to 20°C
    coreTempC: 1800,
    moonsCount: 2,
    hasRings: false,
    layers: [
      {
        name: "Rusty Basaltic Crust",
        depth: "20 - 50 km thick",
        composition: "Rich in volcanic basalt, potassium, phosphorus, and covered in a fine layer of iron(III) oxide dust.",
        temperature: "-140 °C to 20 °C",
        color: "#c0392b"
      },
      {
        name: "Silicate Mantle",
        depth: "1,500 - 1,800 km thick",
        composition: "Dense silicate rock. Ancient mantle plumes fueled massive shield volcanoes like Olympus Mons.",
        temperature: "1,200 to 1,600 °C",
        color: "#962d1c"
      },
      {
        name: "Sulfur-Enriched Iron Core",
        depth: "1,700 - 1,850 km radius",
        composition: "Liquid metallic core containing a high fraction of sulfur, oxygen, and carbon alongside iron and nickel (revealed by NASA InSight).",
        temperature: "1,700 to 2,000 °C",
        color: "#d35400"
      }
    ],
    atmosphere: {
      pressure: "0.006 bar (less than 1% of Earth's atmosphere)",
      composition: [
        { gas: "Carbon Dioxide (CO₂)", percent: 95.32 },
        { gas: "Nitrogen (N₂)", percent: 2.6 },
        { gas: "Argon (Ar)", percent: 1.9 },
        { gas: "Oxygen (O₂)", percent: 0.13 },
        { gas: "Carbon Monoxide (CO)", percent: 0.08 }
      ],
      features: "Global dust storms can erupt and shroud the entire planet for months at a time, blocking sunlight and halting solar-powered rovers."
    },
    keyMoons: [
      { name: "Phobos", diameter: "22.2 km", distance: "6,000 km", note: "Orbits so close that it circles Mars three times a day; slowly spiraling inward and will crash or form a ring in 30-50M years." },
      { name: "Deimos", diameter: "12.4 km", distance: "23,460 km", note: "Tiny, smooth cratered moon covered in thick regolith; looks like a bright star in Mars's sky." }
    ],
    notableMissions: [
      { name: "Perseverance & Ingenuity (NASA)", year: "2021-Present", achievement: "Drilling sediment cores in Jezero Crater delta searching for ancient biosignatures; Ingenuity achieved 72 powered flights in thin Martian air." },
      { name: "Curiosity Rover (NASA)", year: "2012-Present", achievement: "Discovered ancient freshwater lake environments with organic carbon molecules and chemical energy sources for microbial life." }
    ],
    funFacts: [
      "Olympus Mons on Mars is the largest volcano in the entire solar system—nearly 3 times the height of Mount Everest (21.9 km tall)!",
      "Valles Marineris is a gigantic canyon system that spans over 4,000 km—long enough to stretch across the continental United States.",
      "Sunsets on Mars appear strikingly blue due to dust particles scattering reddish wavelengths forward."
    ]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    category: "gas-giant",
    tagline: "The colossal king of the planetary realm",
    overview: "Jupiter is the fifth planet from the Sun and by far the largest planet in our solar system—more than twice as massive as all the other planets combined. It is a swirling globe of colorful hydrogen and helium clouds wracked by centuries-old storms.",
    howItWasBuilt: "Formed 4.5 billion years ago beyond the frost line. It was the first planet to form, vacuuming up a massive core of rock and ice (~10 Earth masses) within a few million years, which quickly sparked runaway gravitational accretion of pristine hydrogen and helium gas from the solar nebula before the Sun could disperse it.",
    color: "#d4a373",
    glowColor: "rgba(212, 163, 115, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #faedcd 0%, #d4a373 40%, #b07d4b 75%, #583101 100%)",
    orbitRadiusKm: 778500000,
    distanceFromSunAU: 5.204,
    distanceFromSunKm: "778.5 million km",
    orbitalPeriodDays: 4333, // 11.86 Earth years
    orbitalSpeedKmS: 13.1,
    rotationPeriodHours: 9.93, // Fastest spinning planet in solar system!
    diameterKm: 139820,
    massKg: "1.898 × 10²⁷ kg (317.8 Earths)",
    massEarths: 317.8,
    gravityMs2: 24.79,
    gravityEarthRelative: 2.53,
    surfaceTempC: -110, // Cloud tops
    coreTempC: 24000,
    moonsCount: 95,
    hasRings: true,
    layers: [
      {
        name: "Atmospheric Cloud Belts",
        depth: "Outer ~1,000 km",
        composition: "Ammonia ice crystals, ammonium hydrosulfide, and water ice clouds organized into alternating eastward and westward jet streams.",
        temperature: "-150 °C to 0 °C",
        color: "#c98f5b"
      },
      {
        name: "Gaseous Molecular Hydrogen Layer",
        depth: "~10,000 km deep",
        composition: "Hydrogen gas transitioning gradually into a supercritical fluid under escalating temperature and pressure.",
        temperature: "0 °C to 5,000 °C",
        color: "#a46838"
      },
      {
        name: "Liquid Metallic Hydrogen Mantle",
        depth: "~40,000 km thick",
        composition: "Immense pressure (over 2 million atm) squeezes hydrogen electrons free, turning hydrogen into a liquid metal electrical conductor that produces a gargantuan magnetic field.",
        temperature: "10,000 to 20,000 °C",
        color: "#6b3e1c"
      },
      {
        name: "Dense Dilute Heavy-Element Core",
        depth: "~15,000 km radius",
        composition: "A 'fuzzy' or diluted core of rock, metals, and ices dissolved partially into metallic hydrogen (discovered by NASA Juno mission).",
        temperature: "~24,000 °C",
        color: "#3b1e08"
      }
    ],
    atmosphere: {
      pressure: "Increases from 1 bar at cloud base to millions of bars in interior",
      composition: [
        { gas: "Hydrogen (H₂)", percent: 89.8 },
        { gas: "Helium (He)", percent: 10.2 },
        { gas: "Methane (CH₄)", percent: 0.3 },
        { gas: "Ammonia (NH₃)", percent: 0.026 },
        { gas: "Water vapor", percent: 0.004 }
      ],
      features: "The Great Red Spot is a monstrous anticyclonic storm larger than Earth that has raged continuously for at least 350 years, with winds clocking 430-680 km/h."
    },
    keyMoons: [
      { name: "Europa", diameter: "3,122 km", distance: "670,900 km", note: "Smooth ice crust covering a global saltwater ocean containing more water than all of Earth's oceans combined. Prime target for extraterrestrial life." },
      { name: "Io", diameter: "3,642 km", distance: "421,700 km", note: "Most volcanically active body in the solar system, with hundreds of erupting sulfur plumes caused by gravitational tidal flexing." },
      { name: "Ganymede", diameter: "5,268 km", distance: "1,070,400 km", note: "Largest moon in the solar system—bigger than the planet Mercury! Possesses its own magnetic field." },
      { name: "Callisto", diameter: "4,821 km", distance: "1,882,700 km", note: "The most heavily cratered object in the solar system, with ancient, unaltered ice-rock crust." }
    ],
    notableMissions: [
      { name: "Juno (NASA)", year: "2016-Present", achievement: "Polar orbit revealing deep interior structure, atmospheric depth of storms, and cyclonic clusters at the poles." },
      { name: "Galileo (NASA)", year: "1995-2003", achievement: "First orbiter around Jupiter; deployed an atmospheric probe directly into Jupiter's clouds." },
      { name: "JUICE (ESA) & Europa Clipper (NASA)", year: "2023-Present", achievement: "Heading to Jupiter to investigate habitability of ocean worlds Europa, Ganymede, and Callisto." }
    ],
    funFacts: [
      "Jupiter has the shortest day of any planet in our solar system—spinning on its axis once every 9 hours and 55 minutes!",
      "Jupiter's magnetic field is 20,000 times stronger than Earth's and creates radiation belts capable of frying unshielded electronics.",
      "Jupiter acts as a 'cosmic vacuum cleaner', its massive gravity deflecting or capturing comets and asteroids that could otherwise strike Earth."
    ]
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    category: "gas-giant",
    tagline: "The ringed jewel of the solar system",
    overview: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of dazzling, intricate ringlets made of ice and rock, Saturn is unique in its elegance. It is so light that it would actually float in water.",
    howItWasBuilt: "Formed roughly 4.5 billion years ago alongside Jupiter beyond the solar frost line. It gathered a massive icy-rock core and enveloped itself in hydrogen and helium. Its spectacular ring system is much younger—likely created within the last 100 to 200 million years from a shattered icy moon or comet torn apart by tidal forces.",
    color: "#e2bf7d",
    glowColor: "rgba(226, 191, 125, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #fdf0cd 0%, #e2bf7d 45%, #bfa05d 75%, #6a4f1a 100%)",
    orbitRadiusKm: 1433500000,
    distanceFromSunAU: 9.582,
    distanceFromSunKm: "1.43 billion km",
    orbitalPeriodDays: 10759, // 29.45 Earth years
    orbitalSpeedKmS: 9.7,
    rotationPeriodHours: 10.54,
    diameterKm: 116460,
    massKg: "5.683 × 10²⁶ kg (95.2 Earths)",
    massEarths: 95.2,
    gravityMs2: 10.44,
    gravityEarthRelative: 1.06,
    surfaceTempC: -140, // Cloud tops
    coreTempC: 11700,
    moonsCount: 146, // Holds the record for most confirmed moons!
    hasRings: true,
    ringSystem: {
      extentKm: "282,000 km across, but only 10 to 30 meters thick!",
      composition: "99% pure water ice particles, ranging from microscopic dust grains to house-sized ice boulders.",
      origin: "Tidally pulverized icy moon or comet captured in the last 100-200 million years."
    },
    layers: [
      {
        name: "Ammonia & Methane Cloud Decks",
        depth: "Outer ~500 km",
        composition: "Hazy upper clouds of ammonia ice concealing lower water ice clouds. Hexagonal jet stream locked at North Pole.",
        temperature: "-180 °C to -50 °C",
        color: "#e8c88e"
      },
      {
        name: "Liquid Hydrogen & Helium",
        depth: "~25,000 km thick",
        composition: "Fluid hydrogen and helium where helium forms droplets that precipitate down like helium rain, releasing extra heat.",
        temperature: "-50 °C to 6,000 °C",
        color: "#c29d5b"
      },
      {
        name: "Liquid Metallic Hydrogen",
        depth: "~15,000 km thick",
        composition: "Electrically conductive liquid metallic hydrogen generating a symmetrical magnetic field aligned almost perfectly with its rotational axis.",
        temperature: "6,000 to 10,000 °C",
        color: "#8e6729"
      },
      {
        name: "Dense Rocky & Icy Core",
        depth: "~12,000 km radius",
        composition: "Iron, nickel, and silicate rock core wrapped in an icy mantle under 8 million atmospheres of pressure.",
        temperature: "~11,700 °C",
        color: "#472f09"
      }
    ],
    atmosphere: {
      pressure: "Deeply escalating gaseous envelope",
      composition: [
        { gas: "Hydrogen (H₂)", percent: 96.3 },
        { gas: "Helium (He)", percent: 3.25 },
        { gas: "Methane (CH₄)", percent: 0.45 },
        { gas: "Ammonia (NH₃)", percent: 0.0125 },
        { gas: "Hydrogen Deuteride", percent: 0.011 }
      ],
      features: "Saturn's North Pole features a bizarre, persistent hexagonal storm spanning 30,000 km across, inside which a hurricane swirls with a 2,000-km eye."
    },
    keyMoons: [
      { name: "Titan", diameter: "5,149 km", distance: "1,221,870 km", note: "Second largest moon in solar system; only moon with a thick nitrogen atmosphere, featuring rain, rivers, and lakes of liquid methane and ethane!" },
      { name: "Enceladus", diameter: "504 km", distance: "238,000 km", note: "Brilliant white icy moon spraying geysers of saltwater and organic molecules from its south pole tiger stripes into space." },
      { name: "Mimas", diameter: "396 km", distance: "185,520 km", note: "Features the colossal Herschel Crater, giving it an uncanny resemblance to the Star Wars 'Death Star'." },
      { name: "Iapetus", diameter: "1,469 km", distance: "3,561,300 km", note: "Two-toned moon with one hemisphere coal-black and the other snow-white, circled by an equatorial mountain ridge." }
    ],
    notableMissions: [
      { name: "Cassini-Huygens (NASA/ESA)", year: "1997-2017", achievement: "Orbits Saturn for 13 years, discovering Enceladus ocean geysers and landing the Huygens probe on Titan's surface before a grand finale plunge into Saturn." },
      { name: "Voyager 1 & 2", year: "1980-1981", achievement: "Captured the first close-up images of Saturn's ring structure, braided shepherd rings, and atmospheric winds." }
    ],
    funFacts: [
      "Saturn has the lowest density of any planet—0.687 g/cm³—meaning if you had an ocean large enough, Saturn would float on it!",
      "Saturn's rings are remarkably wide (282,000 km) yet paper-thin, averaging only about 10 meters thick.",
      "The rings are slowly raining down into the planet due to gravity and magnetic fields—they might vanish in 300 million years."
    ]
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    category: "ice-giant",
    tagline: "The sideways rolling ice giant",
    overview: "Uranus is the seventh planet from the Sun and has the third-largest planetary radius. Classified as an ice giant, it has a mantle rich in water, ammonia, and methane ices. Its most striking feature is its tilt: Uranus rotates completely on its side, rolling like a bowling ball along its orbital path.",
    howItWasBuilt: "Formed 4.5 billion years ago in the outer planetary zone. Its core accumulated water, methane, and ammonia ices, but it failed to capture the massive gas envelopes seen in Jupiter and Saturn before solar winds blew away the remaining gas nebula. A catastrophic collision with an Earth-sized protoplanet during its infancy knocked Uranus permanently onto its side.",
    color: "#72d5d9",
    glowColor: "rgba(114, 213, 217, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #e0f9fb 0%, #72d5d9 45%, #3ba5ab 75%, #185256 100%)",
    orbitRadiusKm: 2872500000,
    distanceFromSunAU: 19.19,
    distanceFromSunKm: "2.87 billion km",
    orbitalPeriodDays: 30687, // 84.02 Earth years
    orbitalSpeedKmS: 6.8,
    rotationPeriodHours: -17.24, // 17 hours 14 mins (Retrograde, 97.8° tilt!)
    diameterKm: 50724,
    massKg: "8.681 × 10²⁵ kg (14.5 Earths)",
    massEarths: 14.5,
    gravityMs2: 8.87,
    gravityEarthRelative: 0.90,
    surfaceTempC: -195, // Coldest planetary atmosphere (-224°C record)
    coreTempC: 4700,
    moonsCount: 28,
    hasRings: true,
    ringSystem: {
      extentKm: "Two sets of 13 narrow, ultra-dark rings composed of boulder-sized dark radiation-processed organic rocks.",
      composition: "Dark carbonaceous particles and boulders.",
      origin: "Shattered ancient moonlets."
    },
    layers: [
      {
        name: "Upper Hazy Atmosphere",
        depth: "Outer ~1,000 km",
        composition: "Hydrogen, helium, and methane gas. Methane absorbs red light, giving Uranus its distinctive pale cyan color.",
        temperature: "-224 °C to -150 °C",
        color: "#99e9ec"
      },
      {
        name: "Supercritical Icy Mantle ('Water-Ammonia Ocean')",
        depth: "~10,000 km thick",
        composition: "A hot, dense fluid slush of water, ammonia, and methane under high pressure. Intense pressures may compress carbon into actual 'diamond rain'!",
        temperature: "2,000 °C to 5,000 °C",
        color: "#46b6bb"
      },
      {
        name: "Rocky-Metallic Core",
        depth: "~4,000 km radius",
        composition: "Silicate rock and iron-nickel metal core accounting for only 0.55 Earth masses.",
        temperature: "~4,700 °C",
        color: "#185a5e"
      }
    ],
    atmosphere: {
      pressure: "Increases to thousands of bars inside",
      composition: [
        { gas: "Hydrogen (H₂)", percent: 82.5 },
        { gas: "Helium (He)", percent: 15.2 },
        { gas: "Methane (CH₄)", percent: 2.3 },
        { gas: "Hydrogen Deuteride", percent: 0.015 }
      ],
      features: "Because Uranus rolls on its side, each pole experiences 42 years of continuous sunlight followed by 42 years of complete darkness during its 84-year orbit."
    },
    keyMoons: [
      { name: "Miranda", diameter: "471 km", distance: "129,390 km", note: "Has the most dramatic fractured surface in the solar system, including Verona Rupes, a 20-km sheer cliff (tallest cliff in solar system)." },
      { name: "Titania & Oberon", diameter: "1,578 km / 1,523 km", distance: "435,910 km / 583,520 km", note: "Largest moons of Uranus, heavily cratered and scarred with deep tectonic canyon fault lines." },
      { name: "Ariel & Umbriel", diameter: "1,158 km / 1,169 km", distance: "191,020 km / 266,000 km", note: "Ariel has the brightest, youngest surface; Umbriel is coal-dark and heavily scarred by impacts." }
    ],
    notableMissions: [
      { name: "Voyager 2 (NASA)", year: "January 1986", achievement: "The only spacecraft ever to visit Uranus, discovering 10 new moons, 2 rings, and its bizarre off-center tilted magnetic field." }
    ],
    funFacts: [
      "Uranus rotates with an extreme axial tilt of 97.77 degrees—its poles point directly toward the Sun!",
      "It holds the record for the coldest temperature recorded on any planet in the solar system: a frigid -224°C (-371°F).",
      "All of Uranus's 28 moons are named after characters from the works of William Shakespeare and Alexander Pope."
    ]
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    category: "ice-giant",
    tagline: "The supersonic, dark blue tempest",
    overview: "Neptune is the eighth and farthest known major planet from the Sun. It is dark, cold, and whipped by supersonic winds reaching over 2,100 km/h—the fastest atmospheric winds recorded anywhere in the solar system. Its rich deep azure color comes from high atmospheric methane.",
    howItWasBuilt: "Formed 4.5 billion years ago in the frigid outskirts of the solar nebula. Gravitational simulations suggest Neptune may have initially formed closer to the Sun and migrated outward through the primordial Kuiper Belt, gravitationally tossing thousands of icy planetesimals outward to create the scattered disc.",
    color: "#2759e6",
    glowColor: "rgba(39, 89, 230, 0.4)",
    gradient: "radial-gradient(circle at 30% 30%, #5d87ff 0%, #2759e6 45%, #133db3 75%, #081d5c 100%)",
    orbitRadiusKm: 4495100000,
    distanceFromSunAU: 30.07,
    distanceFromSunKm: "4.5 billion km",
    orbitalPeriodDays: 60190, // 164.8 Earth years
    orbitalSpeedKmS: 5.4,
    rotationPeriodHours: 16.11,
    diameterKm: 49244,
    massKg: "1.024 × 10²⁶ kg (17.1 Earths)",
    massEarths: 17.1,
    gravityMs2: 11.15,
    gravityEarthRelative: 1.14,
    surfaceTempC: -201, // Cloud tops
    coreTempC: 5100,
    moonsCount: 16,
    hasRings: true,
    ringSystem: {
      extentKm: "Five faint, dark rings with noticeable clumped clumps or arcs called Liberty, Equality, and Fraternity.",
      composition: "Carbon-rich dust and organic material.",
      origin: "Collisions between former moonlets."
    },
    layers: [
      {
        name: "Upper Stormy Atmosphere",
        depth: "Outer ~1,000 km",
        composition: "Hydrogen, helium, and methane. Dynamic white high-altitude cirrus clouds of frozen methane ice zip across deep azure layers.",
        temperature: "-218 °C to -150 °C",
        color: "#5b84ff"
      },
      {
        name: "Super-Pressurized Water-Ammonia Mantle",
        depth: "~10,000 km thick",
        composition: "Superheated, super-dense fluid of water, ammonia, and methane ices. Conducts electricity, producing a tilted dipole magnetic field.",
        temperature: "2,000 °C to 5,000 °C",
        color: "#1e4ecc"
      },
      {
        name: "Dense Rocky & Iron Core",
        depth: "~4,500 km radius",
        composition: "Solid silicates, nickel, and iron with a mass 1.2 times that of Earth.",
        temperature: "~5,100 °C",
        color: "#0a1e60"
      }
    ],
    atmosphere: {
      pressure: "Vast escalating atmosphere",
      composition: [
        { gas: "Hydrogen (H₂)", percent: 80.0 },
        { gas: "Helium (He)", percent: 19.0 },
        { gas: "Methane (CH₄)", percent: 1.5 },
        { gas: "Hydrogen Deuteride & Ethane", percent: 0.02 }
      ],
      features: "Neptune harbors storms like the Great Dark Spot—an Earth-sized storm system with winds topping 2,100 km/h (1,300 mph), faster than the speed of sound on Earth."
    },
    keyMoons: [
      { name: "Triton", diameter: "2,707 km", distance: "354,760 km", note: "The only large moon in the solar system that orbits in the opposite direction of its planet's rotation (retrograde orbit), indicating it was a captured Kuiper Belt dwarf planet. Features active nitrogen cryo-geysers!" }
    ],
    notableMissions: [
      { name: "Voyager 2 (NASA)", year: "August 1989", achievement: "The only spacecraft to encounter Neptune, skimming just 4,950 km above its north pole and transmitting unforgettable imagery of its azure storms and Triton's geysers." },
      { name: "James Webb Space Telescope", year: "2022-Present", achievement: "Captured the clearest infrared view of Neptune's delicate rings in over 30 years alongside its elusive high-altitude methane clouds." }
    ],
    funFacts: [
      "Neptune takes nearly 165 Earth years to complete one orbit—it only completed its first full orbit since discovery in 2011!",
      "Neptune was discovered through mathematical calculations rather than direct observation: irregularities in Uranus's orbit led astronomers to predict its exact coordinates.",
      "Triton is slowly spiraling into Neptune and in ~3.6 billion years will be ripped apart to form a massive ring system rivaling Saturn's."
    ]
  },
  {
    id: "pluto",
    name: "Pluto",
    type: "Dwarf Planet",
    category: "dwarf",
    tagline: "The heart of the frozen Kuiper Belt",
    overview: "Once considered the ninth planet, Pluto was reclassified as a dwarf planet in 2006 by the International Astronomical Union. Far from being a dead rock, Pluto is a dynamic world of nitrogen ice glaciers, towering water-ice mountains, and an exotic atmosphere that freezes and collapses as it moves away from the Sun.",
    howItWasBuilt: "Formed 4.5 billion years ago in the outer protoplanetary disk as one of the largest survivors of the Kuiper Belt population—a ring of icy bodies left over from the formation of the outer solar system.",
    color: "#c9b197",
    glowColor: "rgba(201, 177, 151, 0.3)",
    gradient: "radial-gradient(circle at 30% 30%, #ebd9c7 0%, #c9b197 45%, #8d7054 75%, #443222 100%)",
    orbitRadiusKm: 5906400000,
    distanceFromSunAU: 39.48,
    distanceFromSunKm: "5.91 billion km",
    orbitalPeriodDays: 90560, // 248 Earth years
    orbitalSpeedKmS: 4.7,
    rotationPeriodHours: -153.3, // 6.39 Earth days (retrograde)
    diameterKm: 2376,
    massKg: "1.303 × 10²² kg (0.0022 Earths)",
    massEarths: 0.0022,
    gravityMs2: 0.62,
    gravityEarthRelative: 0.063,
    surfaceTempC: -229, // -233°C to -223°C
    coreTempC: 500,
    moonsCount: 5,
    hasRings: false,
    layers: [
      {
        name: "Nitrogen & Methane Ice Crust",
        depth: "~100 - 150 km thick",
        composition: "Glacial sheets of solid nitrogen, carbon monoxide, and methane. Features Sputnik Planitia, a 1,000-km heart-shaped nitrogen glacier that actively convects.",
        temperature: "-230 °C",
        color: "#d9c5b2"
      },
      {
        name: "Subsurface Liquid Ocean (Hypothesized)",
        depth: "~100 - 180 km thick",
        composition: "Liquid water-ammonia slurry kept liquid by radioactive decay inside the rocky core.",
        temperature: "~0 °C",
        color: "#34495e"
      },
      {
        name: "Dense Silicate Rocky Core",
        depth: "~850 km radius (70% of radius)",
        composition: "Hydrated silicate rocks and iron minerals.",
        temperature: "~500 °C",
        color: "#7f8c8d"
      }
    ],
    atmosphere: {
      pressure: "10 microbars (tenuous and seasonal)",
      composition: [
        { gas: "Nitrogen (N₂)", percent: 99.0 },
        { gas: "Methane (CH₄)", percent: 0.5 },
        { gas: "Carbon Monoxide (CO)", percent: 0.5 }
      ],
      features: "Blue haze layers of complex hydrocarbons called tholins formed by sunlight reacting with methane."
    },
    keyMoons: [
      { name: "Charon", diameter: "1,212 km", distance: "19,640 km", note: "Half the diameter of Pluto; the center of mass lies outside Pluto, forming a genuine binary planetary system tidally locked face-to-face." },
      { name: "Nix, Hydra, Kerberos, Styx", diameter: "10 - 50 km", distance: "42,000 - 65,000 km", note: "Small, irregularly shaped icy moonlets that tumble chaotically in orbit." }
    ],
    notableMissions: [
      { name: "New Horizons (NASA)", year: "July 2015", achievement: "Historic flyby providing our first breathtaking close-up views of Pluto's heart glacier, mountain ranges, and hazy blue atmosphere." }
    ],
    funFacts: [
      "Pluto's surface area (17.7 million km²) is roughly equal to the land area of Russia.",
      "Pluto has an eccentric, tilted orbit (17° tilt): for 20 years of its 248-year orbit, it is actually closer to the Sun than Neptune!",
      "Pluto and Charon are mutually tidally locked: the same sides always face each other forever as they dance through space."
    ]
  }
];
