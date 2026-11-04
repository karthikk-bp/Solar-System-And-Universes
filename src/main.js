// VERTEX: Astrophysical Universe & Celestial Atlas
// Main Application Orchestrator

import './styles/main.css';
import './styles/orrery.css';
import './styles/modal.css';
import './styles/tools.css';
import './styles/hyperdrive.css';

import { celestialBodies } from './data/celestialBodies.js';
import { OrreryCanvas } from './components/orreryCanvas.js';
import { PlanetModal } from './components/planetModal.js';
import { PlanetComparator } from './components/planetComparator.js';
import { WeightAgeCalculator } from './components/weightAgeCalculator.js';
import { UniverseExplorer } from './components/universeExplorer.js';
import { SpaceQuiz } from './components/spaceQuiz.js';
import { VertexMeshCanvas } from './components/vertexMeshCanvas.js';
import { IntergalacticNavigator } from './components/intergalacticNavigator.js';
import { WarpEngine } from './components/warpEngine.js';
import { sound } from './components/soundFX.js';

class App {
  constructor() {
    this.planets = celestialBodies;
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.activeToolTab = 'comparator'; // 'comparator', 'calculator', 'quiz'

    this.renderApp();
    this.initComponents();
    this.attachEventListeners();
  }

  renderApp() {
    const appEl = document.getElementById('app');
    appEl.innerHTML = `
      <!-- Dynamic Spacetime Vertex Mesh Canvas -->
      <canvas id="vertexMeshCanvas"></canvas>
      <div class="space-nebula-bg"></div>

      <!-- Top Sticky Navigation Bar -->
      <header class="navbar">
        <div class="nav-brand" id="brandHomeBtn" title="Vertex Home">
          <div class="brand-icon">✦</div>
          <div class="brand-text">
            <h1>VERTEX</h1>
            <span>Universe & Celestial Atlas</span>
          </div>
        </div>

        <nav class="nav-links">
          <button class="nav-btn active" data-scroll="sectionOrrery">I. Orbital Orrery</button>
          <button class="nav-btn" data-scroll="sectionPlanets">II. Planetary Archives</button>
          <button class="nav-btn" data-scroll="sectionUniverse">III. Deep Space Vertices</button>
          <button class="nav-btn" data-scroll="sectionIntergalactic">IV. Intergalactic Starmap & Warp</button>
          <button class="nav-btn" data-scroll="sectionTools">V. Astro-Laboratory</button>
        </nav>

        <div class="nav-actions">
          <button class="audio-toggle-btn" id="audioToggleBtn" title="Toggle synthesized spacetime ambient sound">
            <span id="audioIcon">🔇</span>
            <span id="audioText">Vertex Audio: OFF</span>
          </button>
        </div>
      </header>

      <!-- Hero Header -->
      <section class="hero-section">
        <div class="hero-pill">✦ Astrodynamical Treatise & Celestial Atlas ✦</div>
        <h2 class="hero-title">
          The Gravitational Vertices of Our <span class="gradient-text">Solar System</span><br />
          & The Infinite Universe
        </h2>
        <p class="hero-subtitle">
          "Observe how matter condensed along the cosmic web: from primordial molecular accretion disks to differentiated planetary cores, stellar fusion furnaces, distant alien exoplanet systems, and relativistic hyperdrive navigation."
        </p>
      </section>

      <!-- 1. Interactive Orrery Canvas Section -->
      <section class="orrery-section" id="sectionOrrery">
        <div class="orrery-container">
          <canvas id="orreryCanvas"></canvas>

          <!-- Top Overlay -->
          <div class="orrery-controls-top">
            <div class="orrery-title-tag">
              <span class="live-indicator"></span>
              <span>VERTEX NODE I: REAL-TIME ORRERY</span>
            </div>

            <div class="orrery-planet-focus-selector">
              <label for="orreryFocusSelect">Lock Coordinate:</label>
              <select id="orreryFocusSelect">
                <option value="none">Center of System (Sol)</option>
                <option value="sun">The Sun (Sol)</option>
                <option value="mercury">Mercury</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
                <option value="jupiter">Jupiter</option>
                <option value="saturn">Saturn</option>
                <option value="uranus">Uranus</option>
                <option value="neptune">Neptune</option>
                <option value="pluto">Pluto</option>
              </select>
            </div>
          </div>

          <!-- Bottom Overlay Controls -->
          <div class="orrery-controls-bottom">
            <div class="playback-controls-group">
              <button class="ctrl-btn" id="playPauseBtn">
                <span id="playPauseIcon">⏸️</span>
                <span id="playPauseText">Pause</span>
              </button>

              <div class="speed-slider-wrap">
                <span>Warp Rate:</span>
                <input type="range" id="speedSlider" min="0.1" max="5.0" step="0.1" value="1.0">
                <span class="speed-val-badge" id="speedValBadge">1.0x</span>
              </div>
            </div>

            <div class="view-controls-group">
              <button class="ctrl-btn" id="zoomInBtn" title="Magnify View">Zoom +</button>
              <button class="ctrl-btn" id="zoomOutBtn" title="De-magnify View">Zoom −</button>
              <button class="ctrl-btn" id="resetViewBtn">Reset View 🎯</button>
            </div>

            <div class="orrery-hint">
              <span>💡 Drag to navigate • Scroll to zoom • Click celestial body to inspect layers</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Celestial Bodies Grid Section -->
      <section class="planets-grid-section" id="sectionPlanets">
        <div class="section-header-row">
          <h3>✦ SECTION II: PLANETARY ARCHIVES & INTERNAL COMPOSITION</h3>
          <p>Examine the geological formation, internal core differentiation, and atmospheric properties of each celestial body.</p>
        </div>

        <!-- Filter & Search Controls -->
        <div class="filter-search-container" style="padding: 0; margin-bottom: 2.2rem;">
          <div class="category-filters">
            <button class="filter-btn active" data-cat="all">All Bodies (10)</button>
            <button class="filter-btn" data-cat="star">The Central Star</button>
            <button class="filter-btn" data-cat="terrestrial">Terrestrial Worlds (4)</button>
            <button class="filter-btn" data-cat="gas-giant">Gas Giants (2)</button>
            <button class="filter-btn" data-cat="ice-giant">Ice Giants (2)</button>
            <button class="filter-btn" data-cat="dwarf">Dwarf Planet (Pluto)</button>
          </div>

          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="planetSearchInput" class="search-input" placeholder="Search world, element, or property...">
          </div>
        </div>

        <div class="planet-cards-grid" id="planetCardsGrid">
          <!-- Dynamically populated -->
        </div>
      </section>

      <!-- 3. The Grand Universe & Deep Space Section -->
      <section class="tools-section" id="sectionUniverse">
        <div id="universeExplorerMount">
          <!-- Universe Explorer component mounts here -->
        </div>
      </section>

      <!-- 4. Intergalactic Starmap & Hyperdrive Jump Section -->
      <section class="tools-section" id="sectionIntergalactic">
        <div id="intergalacticNavigatorMount">
          <!-- Intergalactic Navigator & Warp Planner mounts here -->
        </div>
      </section>

      <!-- 5. Interactive Astro-Laboratory (Comparator, Calculator, Quiz) -->
      <section class="tools-section" id="sectionTools">
        <div class="section-header-row">
          <h3>✦ SECTION V: ASTROPHYSICAL LABORATORY</h3>
          <p>Test gravitational equations across celestial surfaces, contrast planetary geometry, or test your cosmological acumen.</p>
        </div>

        <div class="modal-tabs" style="margin-bottom: 2rem;">
          <button class="modal-tab ${this.activeToolTab === 'comparator' ? 'active' : ''}" id="tabBtnComparator">⚖️ Side-by-Side Comparator</button>
          <button class="modal-tab ${this.activeToolTab === 'calculator' ? 'active' : ''}" id="tabBtnCalculator">🧮 Spacetime Weight & Age Calculator</button>
          <button class="modal-tab ${this.activeToolTab === 'quiz' ? 'active' : ''}" id="tabBtnQuiz">🏆 Astrophysical Knowledge Challenge</button>
        </div>

        <div id="activeToolMount">
          <!-- Mounted tool component -->
        </div>
      </section>

      <!-- Footer -->
      <footer class="app-footer">
        <div class="footer-inner">
          <p class="footer-quote">
            "The cosmos is within us. We are made of star-stuff. We are a way for the cosmos to know itself." — Carl Sagan
          </p>
          <p class="footer-credit">
            VERTEX • Astrophysical Universe & Celestial Atlas • Styled in Times New Roman • Run with <code>npm run dev</code> or double-click <code>vertex.html</code>
          </p>
        </div>
      </footer>

      <!-- Planet Modal Mount -->
      <div id="planetModalMount"></div>

      <!-- Hyperdrive Warp Engine Mount -->
      <div id="warpEngineMount"></div>
    `;
  }

  initComponents() {
    // 1. Initialize Vertex Constellation Background Canvas
    const meshCanvas = document.getElementById('vertexMeshCanvas');
    if (meshCanvas) {
      this.vertexMesh = new VertexMeshCanvas(meshCanvas);
    }

    // 2. Initialize Modal
    const modalMount = document.getElementById('planetModalMount');
    this.planetModal = new PlanetModal(modalMount, this.planets);

    // 3. Initialize Orrery Canvas
    const canvasEl = document.getElementById('orreryCanvas');
    this.orrery = new OrreryCanvas(canvasEl, this.planets, (planetId) => {
      this.planetModal.open(planetId);
    });

    // 4. Render Cards Grid
    this.renderPlanetCards();

    // 5. Initialize Universe Explorer
    const universeMount = document.getElementById('universeExplorerMount');
    this.universeExplorer = new UniverseExplorer(universeMount);

    // 6. Initialize Hyperdrive Warp Engine
    const warpMount = document.getElementById('warpEngineMount');
    this.warpEngine = new WarpEngine(warpMount, (destination) => {
      // Arrived at destination
    });

    // 7. Initialize Intergalactic Navigator & Warp Planner
    const intergalacticMount = document.getElementById('intergalacticNavigatorMount');
    this.intergalacticNavigator = new IntergalacticNavigator(intergalacticMount, (destination, origin) => {
      this.warpEngine.engageWarp(destination, origin);
    });

    // 8. Initialize Space Lab
    this.renderActiveTool();
  }

  renderPlanetCards() {
    const grid = document.getElementById('planetCardsGrid');
    if (!grid) return;

    const filtered = this.planets.filter(p => {
      const matchCat = this.selectedCategory === 'all' || p.category === this.selectedCategory;
      const q = this.searchQuery.toLowerCase();
      const matchQuery = !q || 
        p.name.toLowerCase().includes(q) || 
        p.type.toLowerCase().includes(q) || 
        p.overview.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem; color: #94a3b8; font-style: italic;">
          <div style="font-size: 2.8rem; margin-bottom: 0.6rem; color: var(--accent-gold);">✦</div>
          <h3>No celestial coordinates found matching "${this.searchQuery}"</h3>
          <p>Consider revising your search term or selecting another orbital category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="planet-card" data-planet-id="${p.id}" style="--card-color: ${p.color}; --card-glow: ${p.glowColor};">
        <div class="card-top-row">
          <div class="card-sphere-preview" style="background: ${p.gradient};"></div>
          <span class="card-tag">${p.type}</span>
        </div>

        <h4 class="card-title">${p.name}</h4>
        <p class="card-tagline">"${p.tagline}"</p>

        <div class="card-quick-stats">
          <div class="c-stat">
            <span class="c-stat-label">Semi-Major Axis</span>
            <span class="c-stat-val">${p.distanceFromSunAU} AU</span>
          </div>
          <div class="c-stat">
            <span class="c-stat-label">Surface Gravity</span>
            <span class="c-stat-val">${p.gravityEarthRelative}g</span>
          </div>
          <div class="c-stat">
            <span class="c-stat-label">Mean Diameter</span>
            <span class="c-stat-val">${(p.diameterKm).toLocaleString()} km</span>
          </div>
          <div class="c-stat">
            <span class="c-stat-label">Known Satellites</span>
            <span class="c-stat-val">${p.moonsCount}</span>
          </div>
        </div>

        <div class="card-hover-hint">
          <span>Examine Internal Structure & Physics</span>
          <span>→</span>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.planet-card').forEach(card => {
      card.addEventListener('click', () => {
        sound.playPlanetBlip();
        const id = card.getAttribute('data-planet-id');
        this.planetModal.open(id);
      });
    });
  }

  renderActiveTool() {
    const mount = document.getElementById('activeToolMount');
    if (!mount) return;

    if (this.activeToolTab === 'comparator') {
      new PlanetComparator(mount, this.planets);
    } else if (this.activeToolTab === 'calculator') {
      new WeightAgeCalculator(mount, this.planets);
    } else if (this.activeToolTab === 'quiz') {
      new SpaceQuiz(mount);
    }
  }

  attachEventListeners() {
    // Brand Home click -> smooth scroll top
    document.getElementById('brandHomeBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navigation links smooth scroll
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-scroll');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Audio synthesizer toggle
    const audioBtn = document.getElementById('audioToggleBtn');
    audioBtn.addEventListener('click', () => {
      const isSoundOn = sound.toggleAudio();
      if (isSoundOn) {
        audioBtn.classList.add('sound-on');
        document.getElementById('audioIcon').textContent = '🔊';
        document.getElementById('audioText').textContent = 'Vertex Audio: ON';
      } else {
        audioBtn.classList.remove('sound-on');
        document.getElementById('audioIcon').textContent = '🔇';
        document.getElementById('audioText').textContent = 'Vertex Audio: OFF';
      }
    });

    // Orrery controls: Play/Pause
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.addEventListener('click', () => {
      sound.playPlanetBlip();
      this.orrery.isPlaying = !this.orrery.isPlaying;
      document.getElementById('playPauseIcon').textContent = this.orrery.isPlaying ? '⏸️' : '▶️';
      document.getElementById('playPauseText').textContent = this.orrery.isPlaying ? 'Pause' : 'Play';
    });

    // Orrery speed slider
    const speedSlider = document.getElementById('speedSlider');
    const speedValBadge = document.getElementById('speedValBadge');
    speedSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.orrery.speedMultiplier = val;
      speedValBadge.textContent = `${val.toFixed(1)}x`;
    });

    // Orrery zoom & reset buttons
    document.getElementById('zoomInBtn').addEventListener('click', () => {
      sound.playPlanetBlip();
      this.orrery.setZoom(this.orrery.zoom * 1.3);
    });

    document.getElementById('zoomOutBtn').addEventListener('click', () => {
      sound.playPlanetBlip();
      this.orrery.setZoom(this.orrery.zoom * 0.77);
    });

    document.getElementById('resetViewBtn').addEventListener('click', () => {
      sound.playPlanetBlip();
      this.orrery.resetView();
      document.getElementById('orreryFocusSelect').value = 'none';
    });

    // Orrery focus selector
    const focusSelect = document.getElementById('orreryFocusSelect');
    focusSelect.addEventListener('change', (e) => {
      sound.playPlanetBlip();
      const val = e.target.value;
      if (val === 'none') {
        this.orrery.resetView();
      } else {
        this.orrery.focusPlanet(val);
      }
    });

    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playPlanetBlip();
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedCategory = btn.getAttribute('data-cat');
        this.renderPlanetCards();
      });
    });

    // Search input
    const searchInput = document.getElementById('planetSearchInput');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderPlanetCards();
    });

    // Tool tabs
    const tabComp = document.getElementById('tabBtnComparator');
    const tabCalc = document.getElementById('tabBtnCalculator');
    const tabQuiz = document.getElementById('tabBtnQuiz');

    const selectToolTab = (tabName, activeBtn) => {
      sound.playPlanetBlip();
      this.activeToolTab = tabName;
      [tabComp, tabCalc, tabQuiz].forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');
      this.renderActiveTool();
    };

    tabComp.addEventListener('click', () => selectToolTab('comparator', tabComp));
    tabCalc.addEventListener('click', () => selectToolTab('calculator', tabCalc));
    tabQuiz.addEventListener('click', () => selectToolTab('quiz', tabQuiz));
  }
}

// Bootstrap application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
