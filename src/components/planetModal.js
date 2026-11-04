// Planet Detail Modal Component
// In-depth information: What it is, How it was built, Properties, Layers, Atmosphere, Moons, Missions

import { sound } from './soundFX.js';

export class PlanetModal {
  constructor(containerElement, planetsData) {
    this.container = containerElement;
    this.planets = planetsData;
    this.activePlanet = null;
    this.activeTab = 'overview'; // 'overview', 'formation', 'layers', 'properties', 'atmosphere', 'moons'
    this.renderContainer();
  }

  renderContainer() {
    this.container.innerHTML = `
      <div class="planet-modal-overlay" id="planetModalOverlay" style="display: none;">
        <div class="planet-modal-dialog" role="dialog" aria-modal="true">
          <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">✕</button>
          <div class="modal-body-scroll" id="modalBodyContent">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    `;

    document.getElementById('modalCloseBtn').addEventListener('click', () => this.close());
    document.getElementById('planetModalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'planetModalOverlay') this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open(planetId) {
    const planet = this.planets.find(p => p.id === planetId);
    if (!planet) return;
    this.activePlanet = planet;
    this.activeTab = 'overview';
    this.renderContent();

    const overlay = document.getElementById('planetModalOverlay');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  close() {
    const overlay = document.getElementById('planetModalOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    this.activePlanet = null;
  }

  switchTab(tabKey) {
    this.activeTab = tabKey;
    sound.playPlanetBlip();
    this.renderContent();
  }

  renderContent() {
    const p = this.activePlanet;
    const body = document.getElementById('modalBodyContent');
    if (!p || !body) return;

    // Rings indicator for preview
    const ringHTML = p.hasRings && p.id === 'saturn' 
      ? `<div class="planet-ring saturn-ring"></div>` 
      : (p.hasRings && p.id === 'uranus' ? `<div class="planet-ring uranus-ring"></div>` : '');

    body.innerHTML = `
      <!-- Modal Header -->
      <div class="modal-header-hero" style="--accent-color: ${p.color}; --glow-color: ${p.glowColor};">
        <div class="hero-planet-preview">
          <div class="planet-sphere" style="background: ${p.gradient}; box-shadow: 0 0 35px ${p.glowColor}, inset -15px -15px 25px rgba(0,0,0,0.85);">
            ${ringHTML}
          </div>
        </div>

        <div class="hero-planet-info">
          <div class="planet-badge-row">
            <span class="badge badge-type">${p.type}</span>
            <span class="badge badge-dist">${p.distanceFromSunKm}</span>
            ${p.moonsCount > 0 ? `<span class="badge badge-moons">🌕 ${p.moonsCount} Moons</span>` : ''}
          </div>
          <h2 class="planet-hero-title">${p.name}</h2>
          <p class="planet-tagline">"${p.tagline}"</p>
          
          <div class="quick-stat-bar">
            <div class="quick-stat">
              <span class="q-label">Diameter</span>
              <span class="q-val">${p.diameterKm.toLocaleString()} km</span>
            </div>
            <div class="quick-stat">
              <span class="q-label">Day Length</span>
              <span class="q-val">${Math.abs(p.rotationPeriodHours)} hrs</span>
            </div>
            <div class="quick-stat">
              <span class="q-label">Gravity</span>
              <span class="q-val">${p.gravityMs2} m/s² (${p.gravityEarthRelative}g)</span>
            </div>
            <div class="quick-stat">
              <span class="q-label">Avg Temp</span>
              <span class="q-val">${p.surfaceTempC}°C</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <nav class="modal-tabs">
        <button class="modal-tab ${this.activeTab === 'overview' ? 'active' : ''}" data-tab="overview">🪐 Overview</button>
        <button class="modal-tab ${this.activeTab === 'formation' ? 'active' : ''}" data-tab="formation">🌋 How It Was Built</button>
        <button class="modal-tab ${this.activeTab === 'layers' ? 'active' : ''}" data-tab="layers">🧬 Internal Structure & Layers</button>
        <button class="modal-tab ${this.activeTab === 'properties' ? 'active' : ''}" data-tab="properties">📊 Detailed Properties</button>
        <button class="modal-tab ${this.activeTab === 'atmosphere' ? 'active' : ''}" data-tab="atmosphere">🌪️ Atmosphere & Climate</button>
        <button class="modal-tab ${this.activeTab === 'exploration' ? 'active' : ''}" data-tab="exploration">🚀 Moons & Missions</button>
      </nav>

      <!-- Active Tab Content -->
      <div class="modal-tab-panel">
        ${this.renderActiveTab(p)}
      </div>
    `;

    // Attach tab listeners
    body.querySelectorAll('.modal-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchTab(btn.getAttribute('data-tab'));
      });
    });
  }

  renderActiveTab(p) {
    switch (this.activeTab) {
      case 'overview':
        return `
          <div class="tab-pane">
            <h3 class="pane-title">What is ${p.name}?</h3>
            <p class="pane-narrative">${p.overview}</p>

            <div class="facts-card">
              <h4 class="card-subtitle">✨ Mind-Blowing Facts</h4>
              <ul class="facts-list">
                ${p.funFacts.map(fact => `<li><span class="bullet">✦</span> ${fact}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;

      case 'formation':
        return `
          <div class="tab-pane">
            <h3 class="pane-title">How ${p.name} Was Built (Planetary Genesis)</h3>
            <div class="formation-narrative-card">
              <div class="formation-icon">🌌</div>
              <div class="formation-body">
                <h4 class="card-subtitle">Primordial Accretion & Evolution</h4>
                <p class="pane-narrative">${p.howItWasBuilt}</p>
              </div>
            </div>

            <div class="genesis-steps">
              <div class="step-card">
                <span class="step-num">01</span>
                <h5>The Solar Nebula Collapse</h5>
                <p>4.6 billion years ago, a giant molecular cloud collapsed, spinning into a flat accretion disk around the young protostar.</p>
              </div>
              <div class="step-card">
                <span class="step-num">02</span>
                <h5>Condensation & The Frost Line</h5>
                <p>${p.category === 'terrestrial' ? 'Inner disk was too fiery for volatile ices to condense; only refractory metals and silicates crystallized into pebbles.' : 'Beyond the frost line (2.7 AU), volatile water, ammonia, and methane froze solid, multiplying mass by 10x.'}</p>
              </div>
              <div class="step-card">
                <span class="step-num">03</span>
                <h5>Planetesimal Collisions</h5>
                <p>Kilometer-sized planetesimals collided violently over millions of years, sweeping their orbital paths clear through gravitational dominance.</p>
              </div>
              <div class="step-card">
                <span class="step-num">04</span>
                <h5>Planetary Differentiation</h5>
                <p>Internal radioactive decay and impact heat melted the interior: dense iron sank to form the core while buoyant silicates floated into mantles and crusts.</p>
              </div>
            </div>
          </div>
        `;

      case 'layers':
        return `
          <div class="tab-pane">
            <h3 class="pane-title">Internal Composition & Layered Slices</h3>
            <p class="pane-narrative">Just like Earth, celestial bodies are differentiated into concentric layers based on density, chemical affinity, and thermal pressure:</p>

            <div class="layers-container">
              <div class="layers-visual">
                ${p.layers.map((layer, idx) => `
                  <div class="layer-slice" style="--layer-color: ${layer.color};">
                    <div class="layer-indicator"></div>
                    <div class="layer-meta">
                      <span class="layer-name">${layer.name}</span>
                      <span class="layer-depth">${layer.depth}</span>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="layers-detail-list">
                ${p.layers.map((layer, idx) => `
                  <div class="layer-card">
                    <div class="layer-card-header">
                      <span class="layer-badge" style="background: ${layer.color};"></span>
                      <h4>${layer.name}</h4>
                      <span class="layer-temp">🌡️ ${layer.temperature}</span>
                    </div>
                    <div class="layer-card-depth"><strong>Depth / Radius:</strong> ${layer.depth}</div>
                    <p class="layer-card-comp">${layer.composition}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;

      case 'properties':
        return `
          <div class="tab-pane">
            <h3 class="pane-title">Physical & Astronomical Properties</h3>
            
            <div class="properties-grid">
              <div class="prop-card">
                <span class="prop-icon">⚖️</span>
                <span class="prop-label">Total Mass</span>
                <span class="prop-val">${p.massKg}</span>
                <span class="prop-sub">${p.massEarths} Earth masses</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">📏</span>
                <span class="prop-label">Diameter</span>
                <span class="prop-val">${p.diameterKm.toLocaleString()} km</span>
                <span class="prop-sub">${(p.diameterKm / 12742).toFixed(2)}x Earth's diameter</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">🧭</span>
                <span class="prop-label">Surface Gravity</span>
                <span class="prop-val">${p.gravityMs2} m/s²</span>
                <span class="prop-sub">${p.gravityEarthRelative}x Earth's gravity</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">☀️</span>
                <span class="prop-label">Distance from Sun</span>
                <span class="prop-val">${p.distanceFromSunAU} AU</span>
                <span class="prop-sub">${p.distanceFromSunKm}</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">🔄</span>
                <span class="prop-label">Orbital Period (Year)</span>
                <span class="prop-val">${p.orbitalPeriodDays} Earth days</span>
                <span class="prop-sub">${(p.orbitalPeriodDays / 365.25).toFixed(2)} Earth years</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">⏱️</span>
                <span class="prop-label">Rotation Period (Day)</span>
                <span class="prop-val">${p.rotationPeriodHours} hours</span>
                <span class="prop-sub">${(p.rotationPeriodHours / 24).toFixed(2)} Earth days</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">🏎️</span>
                <span class="prop-label">Average Orbital Speed</span>
                <span class="prop-val">${p.orbitalSpeedKmS} km/s</span>
                <span class="prop-sub">${(p.orbitalSpeedKmS * 3600).toLocaleString()} km/h</span>
              </div>

              <div class="prop-card">
                <span class="prop-icon">🌡️</span>
                <span class="prop-label">Mean Surface Temp</span>
                <span class="prop-val">${p.surfaceTempC} °C</span>
                <span class="prop-sub">${(p.surfaceTempC * 9/5 + 32).toFixed(1)} °F</span>
              </div>
            </div>
          </div>
        `;

      case 'atmosphere':
        const atm = p.atmosphere;
        return `
          <div class="tab-pane">
            <h3 class="pane-title">Atmospheric Dynamics & Climate</h3>

            <div class="atm-summary-box">
              <div class="atm-item">
                <span class="atm-label">Surface Pressure:</span>
                <span class="atm-value">${atm.pressure}</span>
              </div>
              <p class="atm-features"><strong>Meteorological Highlights:</strong> ${atm.features}</p>
            </div>

            <h4 class="card-subtitle">Chemical Gas Composition</h4>
            <div class="gas-bars-container">
              ${atm.composition.map(item => `
                <div class="gas-row">
                  <div class="gas-info">
                    <span class="gas-name">${item.gas}</span>
                    <span class="gas-pct">${item.percent}%</span>
                  </div>
                  <div class="gas-progress-track">
                    <div class="gas-progress-bar" style="width: ${Math.min(item.percent, 100)}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>

            ${p.hasRings && p.ringSystem ? `
              <div class="ring-system-box">
                <h4 class="card-subtitle">🪐 Ring System Architecture</h4>
                <p><strong>Extent:</strong> ${p.ringSystem.extentKm}</p>
                <p><strong>Composition:</strong> ${p.ringSystem.composition}</p>
                <p><strong>Origin:</strong> ${p.ringSystem.origin}</p>
              </div>
            ` : ''}
          </div>
        `;

      case 'exploration':
        return `
          <div class="tab-pane">
            <h3 class="pane-title">Moons & Robotic Space Exploration</h3>

            ${p.keyMoons.length > 0 ? `
              <h4 class="card-subtitle">🌕 Major Moons of Interest (${p.moonsCount} confirmed total)</h4>
              <div class="moons-grid">
                ${p.keyMoons.map(moon => `
                  <div class="moon-card">
                    <div class="moon-header">
                      <h5>${moon.name}</h5>
                      <span class="moon-diam">${moon.diameter}</span>
                    </div>
                    <p class="moon-note">${moon.note}</p>
                  </div>
                `).join('')}
              </div>
            ` : `<p class="pane-narrative">This celestial body has no natural satellites.</p>`}

            <h4 class="card-subtitle" style="margin-top: 2rem;">🛰️ Historic & Active Space Missions</h4>
            <div class="missions-list">
              ${p.notableMissions.map(m => `
                <div class="mission-card">
                  <div class="mission-header">
                    <span class="mission-name">🚀 ${m.name}</span>
                    <span class="mission-year">${m.year}</span>
                  </div>
                  <p class="mission-achievement">${m.achievement}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      default:
        return '';
    }
  }
}
