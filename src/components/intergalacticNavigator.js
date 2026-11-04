// VERTEX: Intergalactic Navigator & Deep Cosmos Explorer
// Mapped galaxies, supermassive black holes, alien solar systems, light-year distance calculations, and hyperdrive trigger

import { discoveredGalaxies, discoveredBlackHoles, alienSolarSystems, cosmicSuperstructures } from '../data/deepUniverseData.js';
import { sound } from './soundFX.js';

export class IntergalacticNavigator {
  constructor(containerElement, onEngageWarp) {
    this.container = containerElement;
    this.onEngageWarp = onEngageWarp;
    this.activeTab = 'galaxies'; // 'galaxies', 'blackholes', 'exosystems', 'superstructures'
    
    // Default origin and destination for travel calculation
    this.originEntity = discoveredGalaxies[0]; // Milky Way
    this.destinationEntity = discoveredGalaxies[1]; // Andromeda
    
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="navigator-wrapper">
        <div class="navigator-header">
          <div class="universe-badge">✦ CARTOGRAPHY OF THE DISCOVERED UNIVERSE ✦</div>
          <h2>🌌 Intergalactic Starmap & Hyperdrive Waypoints</h2>
          <p>
            Traverse beyond our Solar System into the mapped frontiers of the cosmos. Contrast light-year distances across galaxies, alien solar systems, and gargantuan black holes—and engage the hyperdrive engine to jump across spacetime!
          </p>
        </div>

        <!-- Intergalactic Trip Calculator & Warp Launcher -->
        <div class="warp-calculator-console">
          <div class="console-header">
            <h3>🛸 INTERGALACTIC FLIGHT VECTOR & WARP JUMP PLANNER</h3>
            <span class="subspace-status">STATUS: HYPERDRIVE READY</span>
          </div>

          <div class="console-body">
            <div class="route-selectors-grid">
              <div class="route-select-box">
                <label for="originSelect">Origin Coordinate:</label>
                <select id="originSelect" class="route-dropdown">
                  <optgroup label="Galaxies">
                    ${discoveredGalaxies.map(g => `<option value="gal:${g.id}" ${g.id === this.originEntity.id ? 'selected' : ''}>${g.name} (${g.distanceLy.toLocaleString()} LY)</option>`).join('')}
                  </optgroup>
                  <optgroup label="Alien Solar Systems">
                    ${alienSolarSystems.map(s => `<option value="exo:${s.id}">${s.name} (${s.distanceLy} LY)</option>`).join('')}
                  </optgroup>
                </select>
              </div>

              <div class="route-arrow-center">
                <span class="route-warp-icon">⤳</span>
              </div>

              <div class="route-select-box">
                <label for="destSelect">Destination Coordinate:</label>
                <select id="destSelect" class="route-dropdown">
                  <optgroup label="Galaxies">
                    ${discoveredGalaxies.map(g => `<option value="gal:${g.id}" ${g.id === this.destinationEntity.id ? 'selected' : ''}>${g.name} (${g.distanceLy.toLocaleString()} LY)</option>`).join('')}
                  </optgroup>
                  <optgroup label="Supermassive Black Holes">
                    ${discoveredBlackHoles.map(b => `<option value="bh:${b.id}">${b.name} (${b.distanceLy.toLocaleString()} LY)</option>`).join('')}
                  </optgroup>
                  <optgroup label="Alien Solar Systems">
                    ${alienSolarSystems.map(s => `<option value="exo:${s.id}">${s.name} (${s.distanceLy} LY)</option>`).join('')}
                  </optgroup>
                </select>
              </div>
            </div>

            <!-- Computed Vector Results -->
            <div class="vector-results-card" id="vectorResultsCard">
              ${this.renderVectorResults()}
            </div>

            <!-- Big Launch Button -->
            <div class="engage-warp-container">
              <button class="engage-warp-btn" id="engageWarpBtn">
                <span class="warp-btn-sparkle">✦</span>
                <span class="warp-btn-text">ENGAGE HYPERDRIVE WARP JUMP</span>
                <span class="warp-btn-sub">TRAVERSE TO ${this.destinationEntity.name.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Deep Space Navigation Tabs -->
        <nav class="deep-tabs-bar">
          <button class="deep-tab ${this.activeTab === 'galaxies' ? 'active' : ''}" data-dtab="galaxies">🌀 Discovered Galaxies (${discoveredGalaxies.length})</button>
          <button class="deep-tab ${this.activeTab === 'blackholes' ? 'active' : ''}" data-dtab="blackholes">🕳️ Black Holes (${discoveredBlackHoles.length})</button>
          <button class="deep-tab ${this.activeTab === 'exosystems' ? 'active' : ''}" data-dtab="exosystems">🪐 Alien Solar Systems (${alienSolarSystems.length})</button>
          <button class="deep-tab ${this.activeTab === 'superstructures' ? 'active' : ''}" data-dtab="superstructures">🕸️ Cosmic Web Superstructures (${cosmicSuperstructures.length})</button>
        </nav>

        <!-- Deep Space Entity Showcase -->
        <div class="deep-entities-grid" id="deepEntitiesGrid">
          ${this.renderEntitiesGrid()}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const originSelect = document.getElementById('originSelect');
    const destSelect = document.getElementById('destSelect');
    const engageBtn = document.getElementById('engageWarpBtn');

    const updateVector = () => {
      this.originEntity = this.getEntityFromValue(originSelect.value);
      this.destinationEntity = this.getEntityFromValue(destSelect.value);
      document.getElementById('vectorResultsCard').innerHTML = this.renderVectorResults();
      engageBtn.querySelector('.warp-btn-sub').textContent = `TRAVERSE TO ${this.destinationEntity.name.toUpperCase()}`;
    };

    originSelect.addEventListener('change', () => {
      sound.playPlanetBlip();
      updateVector();
    });

    destSelect.addEventListener('change', () => {
      sound.playPlanetBlip();
      updateVector();
    });

    engageBtn.addEventListener('click', () => {
      if (this.onEngageWarp) {
        this.onEngageWarp(this.destinationEntity, this.originEntity);
      }
    });

    // Sub-tab switching
    this.container.querySelectorAll('.deep-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        sound.playPlanetBlip();
        this.activeTab = tab.getAttribute('data-dtab');
        this.container.querySelectorAll('.deep-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('deepEntitiesGrid').innerHTML = this.renderEntitiesGrid();
        this.attachCardJumpButtons();
      });
    });

    this.attachCardJumpButtons();
  }

  attachCardJumpButtons() {
    this.container.querySelectorAll('.jump-to-card-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const entityId = btn.getAttribute('data-id');
        const entity = this.findEntityById(entityId);
        if (entity && this.onEngageWarp) {
          this.destinationEntity = entity;
          this.onEngageWarp(entity, this.originEntity);
        }
      });
    });
  }

  getEntityFromValue(val) {
    const [type, id] = val.split(':');
    if (type === 'gal') return discoveredGalaxies.find(g => g.id === id) || discoveredGalaxies[0];
    if (type === 'bh') return discoveredBlackHoles.find(b => b.id === id) || discoveredBlackHoles[0];
    if (type === 'exo') return alienSolarSystems.find(s => s.id === id) || alienSolarSystems[0];
    return discoveredGalaxies[0];
  }

  findEntityById(id) {
    return discoveredGalaxies.find(g => g.id === id) ||
           discoveredBlackHoles.find(b => b.id === id) ||
           alienSolarSystems.find(s => s.id === id);
  }

  renderVectorResults() {
    const deltaLy = Math.abs((this.destinationEntity.distanceLy || 0) - (this.originEntity.distanceLy || 0)) || this.destinationEntity.distanceLy || 1;
    const distKm = deltaLy * 9.461e12;

    const voyagerYears = (distKm / (61200 * 24 * 365.25));
    const probeYears = (distKm / (692000 * 24 * 365.25));
    const warp9Hours = (deltaLy / 3053) * 365.25 * 24;

    const formatYears = (yrs) => {
      if (yrs < 1) return `${(yrs * 365.25).toFixed(1)} days`;
      if (yrs >= 1e9) return `${(yrs / 1e9).toFixed(2)} Billion years`;
      if (yrs >= 1e6) return `${(yrs / 1e6).toFixed(2)} Million years`;
      if (yrs >= 1e3) return `${(yrs / 1e3).toFixed(1)} Thousand years`;
      return `${yrs.toFixed(1)} years`;
    };

    const formatWarpTime = (hours) => {
      if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} minutes`;
      if (hours < 48) return `${hours.toFixed(1)} hours`;
      const days = hours / 24;
      if (days < 365) return `${days.toFixed(1)} days`;
      return `${(days / 365.25).toFixed(1)} years`;
    };

    return `
      <div class="vector-stat-hero">
        <div class="v-hero-item">
          <span class="v-label">INTERGALACTIC SEPARATION:</span>
          <span class="v-val text-gold">${deltaLy.toLocaleString()} <small>LIGHT-YEARS</small></span>
        </div>
        <div class="v-hero-item">
          <span class="v-label">PHYSICAL DISTANCE:</span>
          <span class="v-val">${distKm.toExponential(2)} <small>KILOMETERS</small></span>
        </div>
      </div>

      <div class="flight-times-row">
        <div class="flight-time-box warp-box">
          <span class="ft-label">🛸 Alcubierre Warp 9.9</span>
          <span class="ft-val text-gold">${formatWarpTime(warp9Hours)}</span>
          <span class="ft-sub">3,053x Speed of Light</span>
        </div>

        <div class="flight-time-box">
          <span class="ft-label">⚡ Pure Light Speed (1.0c)</span>
          <span class="ft-val">${formatYears(deltaLy)}</span>
          <span class="ft-sub">299,792 km/sec</span>
        </div>

        <div class="flight-time-box">
          <span class="ft-label">🛰️ Solar Probe Speed</span>
          <span class="ft-val">${formatYears(probeYears)}</span>
          <span class="ft-sub">692,000 km/h</span>
        </div>

        <div class="flight-time-box">
          <span class="ft-label">📡 Voyager 1 Probe</span>
          <span class="ft-val">${formatYears(voyagerYears)}</span>
          <span class="ft-sub">61,200 km/h</span>
        </div>
      </div>
    `;
  }

  renderEntitiesGrid() {
    switch (this.activeTab) {
      case 'galaxies':
        return discoveredGalaxies.map(g => `
          <div class="deep-card" style="--entity-color: ${g.color};">
            <div class="deep-card-top">
              <div class="deep-sphere-preview" style="background: ${g.gradient}; box-shadow: 0 0 20px ${g.color};"></div>
              <div class="deep-card-meta">
                <span class="deep-dist-badge">📍 ${g.distanceLy.toLocaleString()} Light-Years</span>
                <span class="deep-type-tag">${g.type}</span>
              </div>
            </div>

            <h4 class="deep-title">${g.name}</h4>
            <span class="deep-designation">${g.designation}</span>
            <p class="deep-desc">${g.overview}</p>

            <div class="deep-stats-grid">
              <div class="d-stat">
                <span class="d-label">Diameter</span>
                <span class="d-val">${g.diameterLy.toLocaleString()} LY</span>
              </div>
              <div class="d-stat">
                <span class="d-label">Stars Count</span>
                <span class="d-val">${g.starsCount}</span>
              </div>
              <div class="d-stat" style="grid-column: span 2;">
                <span class="d-label">Central Singularity</span>
                <span class="d-val" style="color: var(--accent-gold);">${g.centralBlackHole}</span>
              </div>
            </div>

            <button class="jump-to-card-btn" data-id="${g.id}">
              <span>🚀 Warp Jump to ${g.name}</span>
              <span>→</span>
            </button>
          </div>
        `).join('');

      case 'blackholes':
        return discoveredBlackHoles.map(b => `
          <div class="deep-card" style="--entity-color: #ef4444;">
            <div class="deep-card-top">
              <div class="deep-sphere-preview black-hole-sphere" style="box-shadow: 0 0 25px rgba(239, 68, 68, 0.7);">
                <div class="bh-mini-ring"></div>
              </div>
              <div class="deep-card-meta">
                <span class="deep-dist-badge">📍 ${b.distanceLy.toLocaleString()} Light-Years</span>
                <span class="deep-type-tag">${b.type}</span>
              </div>
            </div>

            <h4 class="deep-title">${b.name}</h4>
            <span class="deep-designation">Location: ${b.location}</span>
            <p class="deep-desc">${b.overview}</p>

            <div class="deep-stats-grid">
              <div class="d-stat">
                <span class="d-label">Mass</span>
                <span class="d-val text-gold">${b.massSolarMasses}</span>
              </div>
              <div class="d-stat">
                <span class="d-label">Event Horizon</span>
                <span class="d-val">${b.eventHorizonRadiusKm}</span>
              </div>
              <div class="d-stat" style="grid-column: span 2;">
                <span class="d-label">Discovery Note</span>
                <span class="d-val">${b.discovery}</span>
              </div>
            </div>

            <button class="jump-to-card-btn" data-id="${b.id}">
              <span>🚀 Warp Jump to ${b.name}</span>
              <span>→</span>
            </button>
          </div>
        `).join('');

      case 'exosystems':
        return alienSolarSystems.map(s => `
          <div class="deep-card" style="--entity-color: ${s.color};">
            <div class="deep-card-top">
              <div class="deep-sphere-preview" style="background: ${s.gradient}; box-shadow: 0 0 20px ${s.color};"></div>
              <div class="deep-card-meta">
                <span class="deep-dist-badge">📍 ${s.distanceLy} Light-Years</span>
                <span class="deep-type-tag">${s.hostStar}</span>
              </div>
            </div>

            <h4 class="deep-title">${s.name}</h4>
            <span class="deep-designation">Constellation: ${s.constellation}</span>
            <p class="deep-desc">${s.overview}</p>

            <div class="deep-stats-grid">
              <div class="d-stat">
                <span class="d-label">Exoplanets</span>
                <span class="d-val text-gold">${s.planetsCount} Known</span>
              </div>
              <div class="d-stat">
                <span class="d-label">Habitable Worlds</span>
                <span class="d-val" style="color: #10b981;">${s.habitableZonePlanets}</span>
              </div>
            </div>

            <div class="exo-planets-chips">
              ${s.planetsList.map(p => `
                <div class="exo-chip">
                  <strong>${p.name}:</strong> ${p.radius} | ${p.temp} | <small>${p.note}</small>
                </div>
              `).join('')}
            </div>

            <button class="jump-to-card-btn" data-id="${s.id}">
              <span>🚀 Warp Jump to ${s.name}</span>
              <span>→</span>
            </button>
          </div>
        `).join('');

      case 'superstructures':
        return cosmicSuperstructures.map((st, idx) => `
          <div class="deep-card superstructure-card">
            <div class="super-header">
              <span class="super-icon">🕸️</span>
              <div>
                <h4 class="deep-title">${st.name}</h4>
                <span class="super-extent">Spatial Extent: <strong>${st.extentLy}</strong></span>
              </div>
            </div>
            <p class="deep-desc">${st.description}</p>
            <div class="super-gal-count">
              <span>Estimated Galaxy Population:</span>
              <strong>${st.galaxiesCount}</strong>
            </div>
          </div>
        `).join('');

      default:
        return '';
    }
  }
}
