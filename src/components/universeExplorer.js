// Universe & Deep Space Explorer Component
// Big Bang timeline, Stellar Life Cycle, Black Holes, Cosmic Budget, and Orders of Magnitude

import { universeTimeline, starLifeCycle, blackHoleAnatomy, cosmicComposition, cosmicScale } from '../data/universeData.js';
import { sound } from './soundFX.js';

export class UniverseExplorer {
  constructor(containerElement) {
    this.container = containerElement;
    this.activeSubtab = 'timeline'; // 'timeline', 'stars', 'blackholes', 'darkuniverse', 'scale'
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="universe-wrapper">
        <div class="universe-header">
          <div class="universe-badge">✦ ASTROPHYSICAL COSMOLOGY ✦</div>
          <h2>✦ SECTION III: UNIVERSE & DEEP SPACE VERTICES</h2>
          <p>Examine the 13.8-billion-year chronology of spacetime, stellar fusion nucleosynthesis, gravitational black hole horizons, and the geometric scaffolding of the cosmic web.</p>
        </div>

        <!-- Navigation Tabs -->
        <nav class="universe-subtabs">
          <button class="u-tab ${this.activeSubtab === 'timeline' ? 'active' : ''}" data-utab="timeline">⏳ Cosmic Timeline</button>
          <button class="u-tab ${this.activeSubtab === 'stars' ? 'active' : ''}" data-utab="stars">✨ Star Life Cycles</button>
          <button class="u-tab ${this.activeSubtab === 'blackholes' ? 'active' : ''}" data-utab="blackholes">🕳️ Black Holes</button>
          <button class="u-tab ${this.activeSubtab === 'darkuniverse' ? 'active' : ''}" data-utab="darkuniverse">🔮 The Dark Universe</button>
          <button class="u-tab ${this.activeSubtab === 'scale' ? 'active' : ''}" data-utab="scale">📐 Cosmic Scale</button>
        </nav>

        <div class="universe-content-panel" id="universeContentPanel">
          ${this.renderActiveTab()}
        </div>
      </div>
    `;

    this.container.querySelectorAll('.u-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeSubtab = btn.getAttribute('data-utab');
        sound.playPlanetBlip();
        this.render();
      });
    });

    if (this.activeSubtab === 'scale') {
      this.initScaleSlider();
    }
  }

  renderActiveTab() {
    switch (this.activeSubtab) {
      case 'timeline':
        return `
          <div class="timeline-pane">
            <div class="pane-intro">
              <h3>The 13.8 Billion Year Cosmic Chronology</h3>
              <p>From the infinitesimal quantum singularity to conscious observers gazing back at the stars.</p>
            </div>

            <div class="cosmic-timeline">
              ${universeTimeline.map((item, idx) => `
                <div class="timeline-step">
                  <div class="timeline-marker">
                    <span class="marker-dot"></span>
                    <span class="marker-line"></span>
                  </div>
                  <div class="timeline-card">
                    <div class="timeline-card-header">
                      <span class="epoch-badge">${item.time}</span>
                      <span class="temp-badge">🌡️ ${item.temp}</span>
                    </div>
                    <h4>${item.epoch}</h4>
                    <p class="epoch-desc">${item.description}</p>
                    <div class="epoch-detail">
                      <strong>Cosmic Milestone:</strong> ${item.details}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'stars':
        return `
          <div class="stars-pane">
            <div class="pane-intro">
              <h3>The Stellar Life Cycle: From Nebulae to Remnants</h3>
              <p>Stars are cosmic alchemical factories. The initial mass of a collapsing gas cloud strictly dictates whether it dies quietly as a White Dwarf or explodes as a blinding Supernova leaving a Neutron Star or Black Hole.</p>
            </div>

            <div class="star-cycle-cards">
              ${starLifeCycle.map(star => `
                <div class="star-card" style="--star-accent: ${star.color};">
                  <div class="star-card-header">
                    <span class="star-stage-badge" style="background: ${star.color};"></span>
                    <h4>${star.stage}</h4>
                  </div>
                  <span class="star-temp">🔥 ${star.temp}</span>
                  <p class="star-desc">${star.description}</p>
                  <div class="star-example">
                    <strong>Observable Example:</strong> ${star.example}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'blackholes':
        return `
          <div class="blackholes-pane">
            <div class="pane-intro">
              <h3>Anatomy of a Black Hole & Spacetime Curvature</h3>
              <p>When matter is crushed beyond its Schwarzschild radius, escape velocity exceeds light speed. Spacetime warps infinitely, tearing the fabric of classical physics.</p>
            </div>

            <div class="bh-interactive-showcase">
              <div class="bh-visual-box">
                <div class="bh-art">
                  <div class="bh-jet-top"></div>
                  <div class="bh-accretion-disk"></div>
                  <div class="bh-photon-sphere"></div>
                  <div class="bh-event-horizon"></div>
                  <div class="bh-singularity-dot"></div>
                  <div class="bh-jet-bottom"></div>
                </div>
                <span class="bh-caption">Schematic of an Accreting Kerr (Spinning) Black Hole</span>
              </div>

              <div class="bh-features-grid">
                ${blackHoleAnatomy.map(item => `
                  <div class="bh-feature-card">
                    <h4>🕳️ ${item.feature}</h4>
                    <p>${item.definition}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;

      case 'darkuniverse':
        return `
          <div class="darkuniverse-pane">
            <div class="pane-intro">
              <h3>The 95% Cosmic Mystery: Dark Energy & Dark Matter</h3>
              <p>Everything ever cataloged by astronomy—every star, planet, nebula, and galaxy—is only 4.9% of the universe. The rest is completely invisible and non-baryonic.</p>
            </div>

            <div class="pie-breakdown-card">
              <div class="pie-graphic-wrap">
                <div class="pie-donut">
                  <div class="pie-center-label">
                    <span class="pie-pct">95.1%</span>
                    <span class="pie-sub">Invisible Universe</span>
                  </div>
                </div>
              </div>

              <div class="composition-breakdown-list">
                ${cosmicComposition.map(c => `
                  <div class="comp-item" style="--c-color: ${c.color};">
                    <div class="comp-top">
                      <span class="comp-bullet" style="background: ${c.color};"></span>
                      <h4>${c.name}</h4>
                      <span class="comp-pct-badge">${c.percent}%</span>
                    </div>
                    <p class="comp-desc">${c.role}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;

      case 'scale':
        return `
          <div class="scale-pane">
            <div class="pane-intro">
              <h3>Orders of Magnitude: The Cosmic Scale</h3>
              <p>Drag the slider below to journey from the quantum realm of Planck length to the outer horizons of the Observable Universe!</p>
            </div>

            <div class="scale-slider-wrap">
              <input type="range" id="scaleRangeSlider" min="0" max="${cosmicScale.length - 1}" value="5" step="1">
              <div class="scale-stops-row">
                <span>10⁻³⁵ m (Quantum)</span>
                <span>10⁰ m (Human)</span>
                <span>10²⁷ m (Universe)</span>
              </div>
            </div>

            <div class="scale-display-card" id="scaleDisplayCard">
              <!-- Dynamically populated -->
            </div>
          </div>
        `;

      default:
        return '';
    }
  }

  initScaleSlider() {
    const slider = document.getElementById('scaleRangeSlider');
    const displayCard = document.getElementById('scaleDisplayCard');
    if (!slider || !displayCard) return;

    const updateDisplay = (idx) => {
      const item = cosmicScale[idx];
      displayCard.innerHTML = `
        <div class="scale-info-box">
          <span class="scale-exponent-badge">10<sup>${item.exponent}</sup> meters</span>
          <h3>${item.name}</h3>
          <div class="scale-dimension"><strong>Physical Size:</strong> ${item.sizeMeters}</div>
          <p class="scale-description">${item.description}</p>
        </div>
      `;
    };

    updateDisplay(slider.value);
    slider.addEventListener('input', (e) => {
      sound.playPlanetBlip();
      updateDisplay(e.target.value);
    });
  }
}
