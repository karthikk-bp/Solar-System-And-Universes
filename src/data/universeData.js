// Detailed Astronomical Data for the Universe, Cosmology, and Deep Space

export const universeTimeline = [
  {
    epoch: "The Singularity & Cosmic Inflation",
    time: "t = 0 to 10⁻³² seconds",
    temp: "10³² Kelvin (Planck Temperature)",
    description: "The universe begins in an incomprehensibly hot, dense singularity. Space expands faster than the speed of light by a factor of 10²⁶ during exponential cosmic inflation, smoothing out quantum fluctuations that seeded all galaxies.",
    details: "All four fundamental forces (Gravity, Strong, Weak, Electromagnetic) were unified into a single primordial force."
  },
  {
    epoch: "Quark-Gluon Plasma & Primordial Nucleosynthesis",
    time: "t = 10⁻¹² seconds to 20 minutes",
    temp: "10¹² to 10⁹ Kelvin",
    description: "As the infant cosmos cools, quarks bind into protons and neutrons. Within the first 20 minutes, nuclear fusion fuses protons into the first hydrogen, helium-4, deuterium, and traces of lithium.",
    details: "The resulting ratio—roughly 75% hydrogen and 25% helium by mass—remains the fundamental chemical blueprint of the universe today."
  },
  {
    epoch: "Recombination & Cosmic Microwave Background (CMB)",
    time: "t = 380,000 years",
    temp: "3,000 Kelvin",
    description: "The cosmos cools enough for electrons to bind with nuclei into neutral hydrogen atoms. The fog of free electrons clears, allowing trapped photons to stream freely across the universe for the first time.",
    details: "This first light is visible today as the Cosmic Microwave Background (CMB), cooled by 13.8 billion years of cosmic expansion down to just 2.73 Kelvin (-270.4°C)."
  },
  {
    epoch: "The Cosmic Dark Ages & Cosmic Dawn",
    time: "100 to 400 Million years",
    temp: "60 to 20 Kelvin",
    description: "The universe had no stars or galaxies—only vast, silent clouds of neutral hydrogen and helium gas bathed in expanding darkness. Gravity slowly drew denser gas clumps together along invisible scaffolding of Dark Matter.",
    details: "The very first stars (Population III stars)—pure hydrogen/helium titans hundreds of times the mass of the Sun—ignited, unleashing intense ultraviolet light that reionized the cosmos."
  },
  {
    epoch: "Galaxies Form & Cosmic Noon",
    time: "1 to 3 Billion years",
    temp: "Cooled toward modern cosmic background",
    description: "First dwarf galaxies merged into massive spiral and elliptical galaxies. Giant supermassive black holes formed at their centers, blasting out energy as blinding quasars. Star formation reached its all-time historical peak ('Cosmic Noon').",
    details: "Supernovae enriched interstellar space with heavy elements: carbon, oxygen, iron, silicon, and gold, paving the way for planets and life."
  },
  {
    epoch: "Birth of Our Solar System",
    time: "9.2 Billion years after Big Bang (4.6 Billion years ago)",
    temp: "2.73 Kelvin (intergalactic space)",
    description: "A nearby supernova shockwave compressed a giant molecular cloud in the Orion Spur of the Milky Way, collapsing it into the Sun and a swirling protoplanetary accretion disk that birthed Earth and the planets.",
    details: "Earth cooled, developed liquid water oceans, and life emerged around 3.8 billion years ago."
  },
  {
    epoch: "The Present Day",
    time: "13.8 Billion years after Big Bang",
    temp: "2.73 Kelvin",
    description: "Dark Energy accelerates cosmic expansion. The observable universe spans 93 billion light-years in diameter, containing an estimated 2 trillion galaxies, each hosting hundreds of billions of stars.",
    details: "Conscious beings on a blue planet build telescopes and computers to study their cosmic ancestry."
  },
  {
    epoch: "The Far Future: The Big Freeze (Heat Death)",
    time: "10¹⁴ to 10¹⁰⁰ years into the future",
    temp: "Approaching Absolute Zero (0 Kelvin)",
    description: "In 100 trillion years, star formation ceases as all gas is consumed. In 10⁴⁰ years, protons may decay. Supermassive black holes slowly evaporate via Hawking radiation over 10¹⁰⁰ years, leaving only a diluted sea of photons and leptons in eternal thermal equilibrium.",
    details: "This is currently the most widely accepted scientific scenario for the ultimate fate of the universe."
  }
];

export const starLifeCycle = [
  {
    stage: "Stellar Nursery (Giant Molecular Cloud)",
    category: "genesis",
    color: "#6c5ce7",
    description: "Vast, cold interstellar clouds of molecular hydrogen and cosmic dust spanning hundreds of light-years. Gravity causes dense pockets to collapse under their own mass.",
    temp: "10 to 20 Kelvin (-263 °C)",
    example: "Orion Nebula (M42), Carina Nebula"
  },
  {
    stage: "Protostar",
    category: "genesis",
    color: "#fdcb6e",
    description: "A growing core of compressed gas accumulating mass from its infalling circumstellar envelope. Friction and pressure heat the central core until infrared light radiates outward.",
    temp: "100,000 to 10 Million Kelvin",
    example: "HH 211 Protostellar Jet"
  },
  {
    stage: "Main Sequence Star",
    category: "active",
    color: "#f1c40f",
    description: "The core ignites hydrogen fusion (Proton-Proton chain or CNO cycle) converting 4 hydrogen nuclei into 1 helium nucleus. Outward thermal radiation pressure perfectly balances inward gravitational collapse (hydrostatic equilibrium).",
    temp: "Core: 15 Million K | Surface: 3,000 to 40,000 K",
    example: "Our Sun (G-type), Alpha Centauri A, Vega",
    branch: "Mass determines fate: < 8 solar masses follows Low-Mass path; > 8 solar masses follows High-Mass path."
  },
  {
    stage: "Red Giant (Low to Medium Mass)",
    category: "low-mass",
    color: "#e17055",
    description: "Core runs out of hydrogen and contracts, heating up until a hydrogen-burning shell ignites around it. The star's outer layers swell dramatically by a factor of 100 to 400. Later, the core reaches 100M Kelvin and begins fusing helium into carbon and oxygen.",
    temp: "Surface: ~3,000 K | Core: 100 Million K",
    example: "Aldebaran, Arcturus (The Sun will become one in ~5B years, swallowing Mercury and Venus)"
  },
  {
    stage: "Planetary Nebula & White Dwarf",
    category: "low-mass-death",
    color: "#00cec9",
    description: "The dying red giant pulsates, shedding its colorful outer gas envelopes into space as a glowing planetary nebula. The remaining super-dense carbon-oxygen core is a White Dwarf: the mass of the Sun squeezed into the size of Earth!",
    temp: "White Dwarf surface: 100,000 K (supported by Electron Degeneracy Pressure)",
    example: "Ring Nebula (M57), Sirius B"
  },
  {
    stage: "Red Supergiant (High Mass)",
    category: "high-mass",
    color: "#d63031",
    description: "Stars with >8 solar masses burn through hydrogen furiously in a few million years. Their cores reach temperatures sufficient to fuse successively heavier elements like an onion: Helium -> Carbon -> Oxygen -> Neon -> Magnesium -> Silicon -> Iron.",
    temp: "Core: Up to 3 Billion Kelvin",
    example: "Betelgeuse (Orion), Antares (Scorpius)"
  },
  {
    stage: "Core-Collapse Supernova (Type II)",
    category: "high-mass-death",
    color: "#e84393",
    description: "Iron fusion absorbs energy rather than releasing it! Hydrostatic equilibrium fails catastrophically. The iron core collapses in fractions of a second at 23% the speed of light, then rebounds, unleashing a blinding explosion outshining entire galaxies for weeks.",
    temp: "100 Billion Kelvin (forges gold, uranium, platinum via r-process nucleosynthesis)",
    example: "Supernova 1987A, Crab Nebula (SN 1054 remnant)"
  },
  {
    stage: "Neutron Star / Pulsar / Magnetar",
    category: "stellar-remnant",
    color: "#74b9ff",
    description: "If core mass is between 1.4 and 2.16 solar masses (Chandrasekhar/TOV limit), electrons and protons are crushed together into solid neutrons. The result is a sphere just 20 km wide with density so extreme that 1 teaspoon of neutron star matter weighs over 1 billion tons!",
    temp: "1 Million Kelvin (Magnetic field up to 10¹⁵ Gauss in Magnetars)",
    example: "Crab Pulsar, Vela Pulsar"
  },
  {
    stage: "Stellar Black Hole",
    category: "stellar-remnant",
    color: "#2d3436",
    description: "If the remnant core exceeds ~2.2 to 3 solar masses, no force in known physics can halt gravitational collapse. The matter collapses down to an infinitely dense point—a gravitational singularity enclosed by an Event Horizon.",
    temp: "Event Horizon: Microkelvin (Hawking temperature)",
    example: "Cygnus X-1, Gaia BH1 (Closest known black hole to Earth, 1,560 ly away)"
  }
];

export const blackHoleAnatomy = [
  {
    feature: "The Singularity",
    definition: "The mathematical center where mass is crushed to infinite density and zero volume, where current general relativity breaks down and quantum gravity is required."
  },
  {
    feature: "The Event Horizon (Schwarzschild Radius)",
    definition: "The ultimate cosmic 'point of no return'. Within this boundary, the escape velocity exceeds the speed of light ($c$). Nothing—not even light—can ever escape."
  },
  {
    feature: "The Photon Sphere",
    definition: "A boundary at 1.5 times the Schwarzschild radius where photons are bent by gravity into unstable circular orbits, circling the black hole before either falling in or escaping."
  },
  {
    feature: "The Accretion Disk",
    definition: "A swirling, superheated whirlpool of gas, plasma, and debris orbiting near light-speed. Viscous friction heats the gas to millions of degrees, blasting out powerful X-rays and visible light."
  },
  {
    feature: "Relativistic Jets",
    definition: "Beams of ionized matter accelerated along magnetic field lines at 99.9% the speed of light, shooting millions of light-years out from the poles of spinning supermassive black holes."
  },
  {
    feature: "Hawking Radiation",
    definition: "Quantum vacuum fluctuations near the event horizon result in virtual particle pairs where one falls in and one escapes, causing black holes to slowly radiate away mass over cosmic timescales."
  }
];

export const cosmicComposition = [
  {
    name: "Dark Energy",
    percent: 68.3,
    color: "#9b59b6",
    role: "A mysterious repulsive energy inherent to the fabric of space itself that accelerates the expansion of the universe."
  },
  {
    name: "Dark Matter",
    percent: 26.8,
    color: "#3498db",
    role: "Invisible non-baryonic matter that does not emit or interact with electromagnetic radiation, but provides the gravitational scaffolding that holds galaxies together."
  },
  {
    name: "Ordinary (Baryonic) Matter",
    percent: 4.9,
    color: "#f1c40f",
    role: "Everything we can see and touch: all atoms, stars, planets, nebulae, black holes, buildings, and living beings in the cosmos!"
  }
];

export const cosmicScale = [
  { name: "Planck Length", exponent: -35, sizeMeters: "1.6 × 10⁻³⁵ m", description: "The smallest possible meaningful unit of distance in quantum physics." },
  { name: "Proton / Quark", exponent: -15, sizeMeters: "10⁻¹⁵ m", description: "Building block of atomic nuclei." },
  { name: "Hydrogen Atom", exponent: -10, sizeMeters: "10⁻¹⁰ m (0.1 nm)", description: "The most abundant atom in the universe." },
  { name: "Human Being", exponent: 0, sizeMeters: "1.7 m", description: "Observer of the cosmos." },
  { name: "Mount Everest", exponent: 4, sizeMeters: "8,849 m", description: "Highest peak on Earth's crust." },
  { name: "Planet Earth", exponent: 7, sizeMeters: "12,742,000 m (1.27 × 10⁷ m)", description: "Our home planet." },
  { name: "The Sun", exponent: 9, sizeMeters: "1.39 × 10⁹ m", description: "109 Earth diameters." },
  { name: "Solar System (to Neptune)", exponent: 13, sizeMeters: "9 × 10¹² m (60 AU)", description: "Span of the 8 major planets." },
  { name: "Oort Cloud", exponent: 16, sizeMeters: "1.5 × 10¹⁶ m (~1.6 Light-Years)", description: "Reservoir of comets at the gravitational boundary of the Sun." },
  { name: "Milky Way Galaxy", exponent: 21, sizeMeters: "10²¹ m (100,000 Light-Years)", description: "Home to 100-400 billion stars." },
  { name: "Local Group", exponent: 23, sizeMeters: "10²³ m (10 Million Light-Years)", description: "Milky Way, Andromeda, Triangulum, and 80+ dwarf galaxies." },
  { name: "Laniakea Supercluster", exponent: 25, sizeMeters: "5 × 10²⁴ m (520 Million Light-Years)", description: "Immense gravitational basin containing 100,000 galaxies." },
  { name: "Observable Universe", exponent: 26.97, sizeMeters: "8.8 × 10²⁶ m (93 Billion Light-Years)", description: "The sphere of cosmic space from which light has had time to reach us since the Big Bang." }
];
