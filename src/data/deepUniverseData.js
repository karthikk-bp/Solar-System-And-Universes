// Deep Universe Dataset: Discovered Galaxies, Supermassive Black Holes, Alien Solar Systems, and Superstructures
// Curated with NASA/JPL/ESA/JWST verified astronomical distances (Light-Years)

export const discoveredGalaxies = [
  {
    id: "milky-way",
    name: "Milky Way Galaxy",
    designation: "Our Home Galaxy (Sagittarius A* Core)",
    type: "Barred Spiral (SBbc)",
    distanceLy: 0,
    distanceKm: "0 km",
    diameterLy: 105700,
    massSolarMasses: "1.5 × 10¹² M☉",
    starsCount: "100 - 400 Billion",
    centralBlackHole: "Sagittarius A* (4.3 Million M☉)",
    color: "#38bdf8",
    gradient: "radial-gradient(circle at center, #ffffff 0%, #38bdf8 35%, #1e1b4b 70%, #030712 100%)",
    constellation: "Sagittarius (Galactic Center)",
    discovery: "Ancient observers; resolved into stars by Galileo Galilei (1610)",
    overview: "Our home galactic island. A barred spiral galaxy with four major spiral arms (Perseus, Scutum-Centaurus, Sagittarius, Orion Spur). Our Solar System orbits the center at 828,000 km/h, taking 230 million years for one Galactic Year.",
    properties: {
      thicknessAtCore: "10,000 light-years",
      ageYears: "13.61 Billion years (almost as old as universe itself)",
      spiralArms: "Perseus, Scutum-Centaurus, Sagittarius, Norma & Orion Spur",
      haloDarkMatterFraction: "85% to 90% of total mass"
    }
  },
  {
    id: "andromeda",
    name: "Andromeda Galaxy",
    designation: "Messier 31 (M31 / NGC 224)",
    type: "Barred Spiral (SA(s)b)",
    distanceLy: 2537000,
    distanceKm: "2.4 × 10¹⁹ km",
    diameterLy: 220000,
    massSolarMasses: "1.2 × 10¹² M☉",
    starsCount: "1 Trillion (approx.)",
    centralBlackHole: "Andromeda Core Supermassive BH (100 - 230 Million M☉)",
    color: "#a855f7",
    gradient: "radial-gradient(circle at center, #fffbeb 0%, #a855f7 40%, #4c1d95 75%, #030712 100%)",
    constellation: "Andromeda",
    discovery: "Documented in 964 AD by Persian astronomer Abd al-Rahman al-Sufi ('small cloud')",
    overview: "The largest galaxy in our Local Group. Andromeda is speeding toward our Milky Way at 110 km/s (400,000 km/h). In approximately 4.5 billion years, Andromeda and the Milky Way will collide and merge into a giant elliptical galaxy dubbed 'Milkomeda'.",
    properties: {
      speedTowardsMilkyWay: "110 km/s (Blue-shifted)",
      doubleNucleus: "Has an optical double nucleus discovered by Hubble Space Telescope",
      satelliteGalaxies: "14 known dwarf satellites including M32 and M110",
      haloExtent: "Extends 1.3 million light-years, halfway to the Milky Way!"
    }
  },
  {
    id: "triangulum",
    name: "Triangulum Galaxy",
    designation: "Messier 33 (M33 / NGC 598)",
    type: "Spiral (SA(s)cd)",
    distanceLy: 2730000,
    distanceKm: "2.58 × 10¹⁹ km",
    diameterLy: 60000,
    massSolarMasses: "5 × 10¹⁰ M☉",
    starsCount: "40 Billion",
    centralBlackHole: "Upper limit < 3,000 M☉ (No active supermassive BH detected!)",
    color: "#34d399",
    gradient: "radial-gradient(circle at center, #ecfdf5 0%, #34d399 40%, #064e3b 80%, #022c22 100%)",
    constellation: "Triangulum",
    discovery: "Discovered by Giovanni Battista Hodierna before 1654",
    overview: "The third-largest member of our Local Group. Triangulum is a textbook unbarred spiral with intense starburst regions, including NGC 604—one of the largest known emission nebulae, spanning 1,500 light-years across.",
    properties: {
      orbitalStatus: "Gravitationally bound companion to Andromeda",
      starFormationRate: "Extremely high star formation rate per unit mass compared to Milky Way",
      majorNebula: "NGC 604 (40 times the size of Orion Nebula, containing 200 massive O-type stars)"
    }
  },
  {
    id: "whirlpool",
    name: "Whirlpool Galaxy",
    designation: "Messier 51a (M51 / NGC 5194)",
    type: "Grand Design Spiral (SA(s)bc pec)",
    distanceLy: 31000000,
    distanceKm: "2.93 × 10²⁰ km",
    diameterLy: 76000,
    massSolarMasses: "1.6 × 10¹¹ M☉",
    starsCount: "100 Billion",
    centralBlackHole: "Supermassive Black Hole (~19 Million M☉)",
    color: "#f59e0b",
    gradient: "radial-gradient(circle at center, #fffbeb 0%, #f59e0b 35%, #9a3412 75%, #030712 100%)",
    constellation: "Canes Venatici",
    discovery: "Discovered by Charles Messier in 1773; spiral structure identified by Lord Rosse in 1845",
    overview: "The prototypical grand-design spiral galaxy. Famous for its prominent curving spiral arms and active gravitational interaction with companion dwarf galaxy NGC 5195, which triggered sweeping shockwaves that compressed gas clouds into baby star clusters.",
    properties: {
      companionInteraction: "Tidal forces from dwarf companion NGC 5195 induce dramatic spiral density waves",
      supernovaHistory: "Hosted three observed supernovae in 17 years (1994, 2005, 2011)",
      armFeatures: "Deep lanes of glowing pink H II star-forming regions and dark dust filaments"
    }
  },
  {
    id: "sombrero",
    name: "Sombrero Galaxy",
    designation: "Messier 104 (M104 / NGC 4594)",
    type: "Lenticular / Spiral (SA(s)a)",
    distanceLy: 29350000,
    distanceKm: "2.77 × 10²⁰ km",
    diameterLy: 49000,
    massSolarMasses: "8 × 10¹¹ M☉",
    starsCount: "100+ Billion",
    centralBlackHole: "Colossal Supermassive Black Hole (1 Billion M☉)",
    color: "#e2bf7d",
    gradient: "radial-gradient(circle at center, #ffffff 0%, #e2bf7d 30%, #78350f 70%, #030712 100%)",
    constellation: "Virgo",
    discovery: "Pierre Méchain in 1781",
    overview: "Named for its striking resemblance to a Mexican sombrero hat, featuring a dazzlingly bright oversized central bulge and a dramatic dark, razor-sharp rim of cosmic dust absorbing background light.",
    properties: {
      bulgeSize: "Unusually massive central stellar halo containing ~2,000 globular clusters",
      blackHoleMass: "1 Billion solar masses (over 200x larger than Sagittarius A*)",
      synchrotronRadiation: "Strong central radio and X-ray emission from gas falling into the supermassive black hole"
    }
  },
  {
    id: "messier-87",
    name: "Messier 87 (Virgo A)",
    designation: "M87 / NGC 4486",
    type: "Supergiant Elliptical (E7)",
    distanceLy: 53500000,
    distanceKm: "5.06 × 10²⁰ km",
    diameterLy: 130000,
    massSolarMasses: "2.4 × 10¹² M☉ (Core region)",
    starsCount: "Several Trillion",
    centralBlackHole: "M87* (6.5 Billion M☉ - First imaged black hole in human history)",
    color: "#ef4444",
    gradient: "radial-gradient(circle at center, #ffffff 0%, #ef4444 40%, #7f1d1d 80%, #030712 100%)",
    constellation: "Virgo",
    discovery: "Charles Messier in 1781",
    overview: "One of the most massive galaxies in the local universe, reigning at the core of the Virgo Galaxy Cluster. It houses the infamous M87* black hole and fires a relativistic jet of plasma shooting 5,000 light-years into intergalactic space at 99% the speed of light.",
    properties: {
      relativisticJet: "Plasma jet extends 5,000 light-years, emitting synchrotron radiation across all wavelengths",
      globularClusters: "Surrounded by an immense swarm of over 12,000 globular clusters (vs 150 around Milky Way)",
      blackHoleShadowDiameter: "40 Billion km across (larger than the orbit of Neptune!)"
    }
  },
  {
    id: "jades-gs-z14",
    name: "JADES-GS-z14-0",
    designation: "Farthest Known Galaxy Ever Discovered (JWST)",
    type: "Primordial Infant Galaxy",
    distanceLy: 13500000000,
    distanceKm: "33.5 Billion Light-Years (Comoving Distance due to cosmic expansion)",
    diameterLy: 1600,
    massSolarMasses: "5 × 10⁸ M☉",
    starsCount: "Hundreds of Millions of Population III/II stars",
    centralBlackHole: "Under active investigation by James Webb Space Telescope",
    color: "#f43f5e",
    gradient: "radial-gradient(circle at center, #ffe4e6 0%, #f43f5e 40%, #881337 80%, #030712 100%)",
    constellation: "Fornax (Deep Field)",
    discovery: "Discovered by the James Webb Space Telescope (JWST) in May 2024",
    overview: "The reigning record holder for the most distant confirmed galaxy in the universe! Observed at a redshift of z = 14.32, we see it as it existed just 290 million years after the Big Bang (only 2% of the universe's current age). Its unexpected brightness has rewritten cosmological models of galaxy formation.",
    properties: {
      redshift: "z = 14.32 (record breaking)",
      cosmicTime: "Observed when universe was only 290 million years old",
      spectroscopicSignature: "Definitive detection of ionized oxygen atoms, proving rapid early chemical enrichment by supernovae"
    }
  }
];

export const discoveredBlackHoles = [
  {
    id: "sagittarius-a-star",
    name: "Sagittarius A* (Sgr A*)",
    type: "Supermassive Black Hole",
    distanceLy: 26673,
    distanceKm: "2.52 × 10¹⁷ km",
    massSolarMasses: "4.3 Million M☉ (4.297 × 10⁶)",
    eventHorizonRadiusKm: "12.7 Million km (0.085 AU)",
    photonSphereRadiusKm: "19.0 Million km",
    accretionDiskTemp: "10 Million Kelvin (X-ray plasma)",
    location: "Center of the Milky Way Galaxy",
    discovery: "Radio source discovered in 1974; directly imaged by Event Horizon Telescope (EHT) in May 2022",
    overview: "The supermassive heart of our galaxy. Sgr A* has a mass equivalent to 4.3 million Suns compressed into a region smaller than the orbit of Mercury. Stars like S2 orbit it at velocities exceeding 7,000 km/s (2.5% the speed of light!).",
    phenomena: "Flares observed daily as magnetic reconnections and tidal disruption events shred infalling gas."
  },
  {
    id: "m87-star",
    name: "M87* (Pōwehi)",
    type: "Supermassive Black Hole",
    distanceLy: 53500000,
    distanceKm: "5.06 × 10²⁰ km",
    massSolarMasses: "6.5 Billion M☉ (6.5 × 10⁹)",
    eventHorizonRadiusKm: "19 Billion km (128 AU — 4x the orbit of Neptune!)",
    photonSphereRadiusKm: "28.5 Billion km",
    accretionDiskTemp: "Billions of Kelvin in inner jet launch zone",
    location: "Core of supergiant elliptical galaxy M87 (Virgo Cluster)",
    discovery: "First black hole ever directly imaged by human civilization (EHT, April 10, 2019)",
    overview: "A cosmic behemoth with a mass 1,500 times greater than Sagittarius A*. Its shadow spans 40 billion kilometers across. It launches a relativistic plasma jet shooting thousands of light-years out into space.",
    phenomena: "Polarized light images revealed organized, strong magnetic fields spiraling near the event horizon."
  },
  {
    id: "ton-618",
    name: "TON 618",
    type: "Ultramassive Black Hole & Hyper-Luminous Quasar",
    distanceLy: 18200000000, // Comoving
    distanceKm: "1.72 × 10²³ km (Light travel time: 10.8 Billion years)",
    massSolarMasses: "66 Billion M☉ (6.6 × 10¹⁰)",
    eventHorizonRadiusKm: "390 Billion km (2,600 AU — over 40 times Pluto's orbit!)",
    photonSphereRadiusKm: "585 Billion km",
    accretionDiskTemp: "Hundreds of thousands of Kelvin, outshining 140 Trillion Suns!",
    location: "Canes Venatici constellation",
    discovery: "Cataloged in 1957 as Tonantzintla 618; quasar nature confirmed in 1970",
    overview: "One of the most massive single objects ever discovered in the cosmos. TON 618 has a mass equal to 66 billion Suns—exceeding the mass of many entire galaxies! Its accretion disk shines with the luminosity of 140 trillion Suns.",
    phenomena: "Winds of plasma blow outward from its accretion disk at 7,000 km/s."
  },
  {
    id: "gaia-bh1",
    name: "Gaia BH1",
    type: "Stellar-Mass Dormant Black Hole",
    distanceLy: 1560,
    distanceKm: "1.47 × 10¹⁶ km",
    massSolarMasses: "9.62 M☉",
    eventHorizonRadiusKm: "28.4 km",
    photonSphereRadiusKm: "42.6 km",
    accretionDiskTemp: "Dormant (Virtually no active accretion disk)",
    location: "Ophiuchus constellation (Closest known black hole to Earth!)",
    discovery: "Discovered by ESA's Gaia astrometric satellite in 2022",
    overview: "The closest confirmed black hole to Earth! It orbits a Sun-like star at a distance roughly equivalent to Earth's orbit around the Sun. Because it is dormant and not actively devouring gas, it was detected solely by the gravitational wobble of its companion star.",
    phenomena: "Demonstrates that our galaxy likely harbors over 100 million quiet, unseen stellar-mass black holes."
  },
  {
    id: "cygnus-x1",
    name: "Cygnus X-1 (HDE 226868)",
    type: "Stellar-Mass High-Mass X-ray Binary",
    distanceLy: 7200,
    distanceKm: "6.81 × 10¹⁶ km",
    massSolarMasses: "21.2 M☉",
    eventHorizonRadiusKm: "62.6 km",
    photonSphereRadiusKm: "93.9 km",
    accretionDiskTemp: "Millions of Kelvin (Intense persistent X-ray emission)",
    location: "Cygnus constellation",
    discovery: "Discovered in 1964; subject of famous 1974 friendly bet between Stephen Hawking and Kip Thorne",
    overview: "The first astronomical X-ray source widely accepted to be a black hole. It strips stellar wind plasma from a blue supergiant companion star, forming an ultra-hot accretion disk that spins at 95% the speed of light.",
    phenomena: "Extreme spin rate ($a_* > 0.95$) dragging spacetime around it in a relativistic frame-dragging vortex."
  }
];

export const alienSolarSystems = [
  {
    id: "trappist-1",
    name: "TRAPPIST-1 System",
    hostStar: "Ultra-cool Red Dwarf (M8V, 0.09 M☉)",
    distanceLy: 39.46,
    distanceKm: "3.73 × 10¹⁴ km",
    planetsCount: 7,
    habitableZonePlanets: "3 (TRAPPIST-1e, 1f, 1g)",
    discovery: "2016-2017 (TRAPPIST & Spitzer Space Telescope)",
    color: "#f97316",
    gradient: "radial-gradient(circle at center, #ffedd5 0%, #f97316 45%, #7c2d12 85%, #030712 100%)",
    constellation: "Aquarius",
    overview: "The most famous planetary system outside our own! It hosts 7 terrestrial, Earth-sized rocky planets orbiting closely in a complex resonant orbital chain. Three of the worlds (e, f, g) orbit in the star's habitable zone where liquid water could pool on their surfaces.",
    planetsList: [
      { name: "TRAPPIST-1b", period: "1.51 days", radius: "1.12 R⊕", temp: "127 °C", note: "Scorching rocky world with bare surface" },
      { name: "TRAPPIST-1c", period: "2.42 days", radius: "1.10 R⊕", temp: "62 °C", note: "Dense CO₂ atmosphere candidate" },
      { name: "TRAPPIST-1d", period: "4.05 days", radius: "0.79 R⊕", temp: "15 °C", note: "Inner habitable edge, volatile-rich" },
      { name: "TRAPPIST-1e", period: "6.10 days", radius: "0.92 R⊕", temp: "-22 °C", note: "Top candidate for Earth-like rocky core and global ocean!" },
      { name: "TRAPPIST-1f", period: "9.21 days", radius: "1.04 R⊕", temp: "-54 °C", note: "Water-rich ocean world under ice sheets" },
      { name: "TRAPPIST-1g", period: "12.35 days", radius: "1.13 R⊕", temp: "-75 °C", note: "Cold terrestrial world with thick atmosphere" },
      { name: "TRAPPIST-1h", period: "18.77 days", radius: "0.77 R⊕", temp: "-104 °C", note: "Frigid outer ice planet" }
    ],
    fascinatingFact: "The entire 7-planet system is so compact that all 7 planets orbit closer to their star than Mercury orbits our Sun! Standing on TRAPPIST-1e, neighboring planets would appear larger in the sky than our Moon."
  },
  {
    id: "proxima-centauri",
    name: "Proxima Centauri System",
    hostStar: "Red Dwarf (M5.5Ve, 0.12 M☉)",
    distanceLy: 4.246,
    distanceKm: "4.017 × 10¹³ km",
    planetsCount: 3,
    habitableZonePlanets: "1 (Proxima Centauri b)",
    discovery: "Proxima b discovered in 2016 by ESO HARPS",
    color: "#ef4444",
    gradient: "radial-gradient(circle at center, #fee2e2 0%, #ef4444 45%, #991b1b 85%, #030712 100%)",
    constellation: "Centaurus (Part of Alpha Centauri triple star system)",
    overview: "The closest star and exoplanet system to Earth. Proxima Centauri b is an Earth-mass rocky planet orbiting inside the habitable zone with an orbital period of only 11.2 days. It is the primary target for humanity's first interstellar nanoprobes (Breakthrough Starshot).",
    planetsList: [
      { name: "Proxima b", period: "11.19 days", radius: "1.07 R⊕", temp: "-39 °C", note: "Habitable zone rocky planet subject to strong stellar flares" },
      { name: "Proxima d", period: "5.12 days", radius: "0.81 R⊕", temp: "87 °C", note: "Sub-Earth mass candidate orbiting very close to host star" },
      { name: "Proxima c", period: "5.28 years", radius: "7.0 R⊕", temp: "-234 °C", note: "Outer mini-Neptune / super-Earth world" }
    ],
    fascinatingFact: "Even at the speed of the fastest human spacecraft ever built (Parker Solar Probe at 690,000 km/h), it would take over 6,600 years to reach Proxima Centauri!"
  },
  {
    id: "kepler-452",
    name: "Kepler-452 System ('Earth's Cousin')",
    hostStar: "G2V Yellow Dwarf (1.04 M☉ — Sun twin!)",
    distanceLy: 1402,
    distanceKm: "1.33 × 10¹⁶ km",
    planetsCount: 1,
    habitableZonePlanets: "1 (Kepler-452b)",
    discovery: "NASA Kepler Space Telescope (July 2015)",
    color: "#eab308",
    gradient: "radial-gradient(circle at center, #fef9c3 0%, #eab308 45%, #854d0e 85%, #030712 100%)",
    constellation: "Cygnus",
    overview: "Often dubbed 'Earth 2.0' or 'Earth's Older Cousin'. Kepler-452b orbits a G-type star almost identical to our Sun at nearly the exact same distance (1.05 AU), with an orbital period of 385 days (just 20 days longer than Earth's year!).",
    planetsList: [
      { name: "Kepler-452b", period: "384.8 days", radius: "1.63 R⊕", temp: "-8 °C (equilibrium)", note: "Super-Earth in the habitable zone of a Sun-like star" }
    ],
    fascinatingFact: "The system is 6 billion years old—about 1.5 billion years older than our Solar System—giving us a preview of what Earth will look like as our own Sun ages and warms."
  },
  {
    id: "55-cancri",
    name: "55 Cancri System (Copernicus)",
    hostStar: "Binary: G8V Yellow Dwarf & Red Dwarf",
    distanceLy: 41.06,
    distanceKm: "3.88 × 10¹⁴ km",
    planetsCount: 5,
    habitableZonePlanets: "1 (55 Cancri f)",
    discovery: "1996 - 2007 (California and Carnegie Planet Search)",
    color: "#06b6d4",
    gradient: "radial-gradient(circle at center, #cffafe 0%, #06b6d4 45%, #155e75 85%, #030712 100%)",
    constellation: "Cancer",
    overview: "Famous for 55 Cancri e (Janssen), an exotic 'diamond super-Earth' with a crust rich in graphite and solid diamond under extreme pressure, orbiting so close to its star that its surface is a lava ocean reaching 2,400 °C.",
    planetsList: [
      { name: "55 Cancri e (Janssen)", period: "17.7 hours", radius: "1.87 R⊕", temp: "2,400 °C", note: "Ultra-short period lava/diamond super-Earth" },
      { name: "55 Cancri b (Galileo)", period: "14.65 days", radius: "8.9 R⊕", temp: "420 °C", note: "Hot Jupiter gas giant" },
      { name: "55 Cancri c (Brahe)", period: "44.34 days", radius: "5.4 R⊕", temp: "180 °C", note: "Warm gas planet" },
      { name: "55 Cancri f (Harriot)", period: "260.7 days", radius: "4.2 R⊕", temp: "-10 °C", note: "Gas planet in the habitable zone" },
      { name: "55 Cancri d (Lipperhey)", period: "14.29 years", radius: "11.2 R⊕", temp: "-150 °C", note: "Jupiter analogue gas giant" }
    ],
    fascinatingFact: "Astrophysical modeling suggests at least a third of 55 Cancri e's mass could be pure carbon in the form of diamond!"
  },
  {
    id: "hd-189733",
    name: "HD 189733 System",
    hostStar: "Orange Dwarf (K1.5V, 0.8 M☉)",
    distanceLy: 64.5,
    distanceKm: "6.10 × 10¹⁴ km",
    planetsCount: 1,
    habitableZonePlanets: "0",
    discovery: "Discovered in 2005 (Haute-Provence Observatory)",
    color: "#2563eb",
    gradient: "radial-gradient(circle at center, #dbeafe 0%, #2563eb 45%, #1e3a8a 85%, #030712 100%)",
    constellation: "Vulpecula",
    overview: "Home to the infamous exoplanet HD 189733b—a cobalt-blue gas giant where the weather is pure horror: horizontal winds screaming at 8,700 km/h (Mach 7) blowing torrential rain of molten silicate glass sideways!",
    planetsList: [
      { name: "HD 189733b", period: "2.22 days", radius: "12.7 R⊕ (1.13 RJ)", temp: "1,000 °C", note: "The Glass Rain Planet: 8,700 km/h winds raining molten glass" }
    ],
    fascinatingFact: "From space, the planet looks like a serene deep-blue marble like Earth, but that color is caused not by oceans, but by condensed silicate particles scattering blue light in its boiling atmosphere."
  }
];

export const cosmicSuperstructures = [
  {
    name: "Laniakea Supercluster ('Immeasurable Heaven')",
    extentLy: "520 Million Light-Years",
    galaxiesCount: "100,000 Galaxies",
    description: "The immense cosmic watershed and gravitational basin that contains our Milky Way, Andromeda, the Virgo Cluster, and thousands of other clusters, all flowing toward the mysterious gravitational anomaly known as the 'Great Attractor'."
  },
  {
    name: "Virgo Supercluster",
    extentLy: "110 Million Light-Years",
    galaxiesCount: "2,000 Major Galaxies",
    description: "The galaxy supercluster that contains our Local Group and the central Virgo Cluster of galaxies."
  },
  {
    name: "The Boötes Void ('The Great Nothing')",
    extentLy: "330 Million Light-Years Across",
    galaxiesCount: "Only ~60 galaxies (should contain thousands!)",
    description: "A gigantic, nearly empty spherical bubble of spacetime. If the Milky Way were at the center of the Boötes Void, human astronomers wouldn't have known other galaxies existed until the 1960s!"
  },
  {
    name: "Hercules-Corona Borealis Great Wall",
    extentLy: "10 Billion Light-Years Across!",
    galaxiesCount: "Countless billions",
    description: "The largest known coherent structure in the observable universe! A colossal filament of galaxies spanning more than 10% of the entire observable universe's diameter."
  }
];
