// Side-by-Side Planet Comparison Tool
// Compare physical properties, size, mass, gravity, and atmospheres between any two planets

import { sound } from './soundFX.js';

export class PlanetComparator {
  constructor(containerElement, planetsData) {
    this.container = containerElement;
    this.planets = planetsData;
    this.planetA = planetsData.find(p => p.id === 'earth') || planetsData[2];
    this.planetB = planetsData.find(p => p.id === 'mars') || planetsData[3];
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="comparator-wrapper">
        <div class="comparator-header">
          <h3>🪐 Side-by-Side Planetary Comparison</h3>
          <p>Select any two worlds to contrast their internal physical scales, orbital dynamics, and environments.</p>
        </div>

        <div class="comparator-selectors">
          <div class="selector-group">
            <label for="selectPlanetA">Planet 1:</label>
            <select id="selectPlanetA" class="planet-select">
              ${this.planets.map(p => `
                <option value="${p.id}" ${p.id === this.planetA.id ? 'selected' : ''}>${p.name} (${p.type})</option>
              `).join('')}
            </select>
          </div>

          <div class="vs-badge">VS</div>

          <div class="selector-group">
            <label for="selectPlanetB">Planet 2:</label>
            <select id="selectPlanetB" class="planet-select">
              ${this.planets.map(p => `
                <option value="${p.id}" ${p.id === this.planetB.id ? 'selected' : ''}>${p.name} (${p.type})</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Visual spheres comparison -->
        <div class="spheres-comparison-card">
          <div class="compare-sphere-box">
            <div class="compare-sphere" style="background: ${this.planetA.gradient}; box-shadow: 0 0 25px ${this.planetA.glowColor};"></div>
            <h4>${this.planetA.name}</h4>
            <span class="compare-subtitle">${this.planetA.type}</span>
          </div>

          <div class="compare-vs-center">
            <span class="ratio-metric">Mass Ratio: <strong>${(this.planetA.massEarths / Math.max(this.planetB.massEarths, 0.0001)).toFixed(2)}x</strong></span>
            <span class="ratio-metric">Diameter Ratio: <strong>${(this.planetA.diameterKm / this.planetB.diameterKm).toFixed(2)}x</strong></span>
          </div>

          <div class="compare-sphere-box">
            <div class="compare-sphere" style="background: ${this.planetB.gradient}; box-shadow: 0 0 25px ${this.planetB.glowColor};"></div>
            <h4>${this.planetB.name}</h4>
            <span class="compare-subtitle">${this.planetB.type}</span>
          </div>
        </div>

        <!-- Comparative Metrics Table / Bar charts -->
        <div class="metrics-comparison-container">
          ${this.renderMetricRow('Diameter', `${this.planetA.diameterKm.toLocaleString()} km`, `${this.planetB.diameterKm.toLocaleString()} km`, this.planetA.diameterKm, this.planetB.diameterKm, 140000)}
          ${this.renderMetricRow('Surface Gravity', `${this.planetA.gravityMs2} m/s²`, `${this.planetB.gravityMs2} m/s²`, this.planetA.gravityMs2, this.planetB.gravityMs2, 280)}
          ${this.renderMetricRow('Distance from Sun', `${this.planetA.distanceFromSunAU} AU`, `${this.planetB.distanceFromSunAU} AU`, this.planetA.distanceFromSunAU, this.planetB.distanceFromSunAU, 40)}
          ${this.renderMetricRow('Orbital Period (Year)', `${this.planetA.orbitalPeriodDays} days`, `${this.planetB.orbitalPeriodDays} days`, this.planetA.orbitalPeriodDays, this.planetB.orbitalPeriodDays, 91000)}
          ${this.renderMetricRow('Day Length', `${Math.abs(this.planetA.rotationPeriodHours)} hrs`, `${Math.abs(this.planetB.rotationPeriodHours)} hrs`, Math.abs(this.planetA.rotationPeriodHours), Math.abs(this.planetB.rotationPeriodHours), 6000)}
          ${this.renderMetricRow('Confirmed Moons', `${this.planetA.moonsCount}`, `${this.planetB.moonsCount}`, this.planetA.moonsCount, this.planetB.moonsCount, 150)}
          ${this.renderMetricRow('Mean Temperature', `${this.planetA.surfaceTempC} °C`, `${this.planetB.surfaceTempC} °C`, this.planetA.surfaceTempC + 273, this.planetB.surfaceTempC + 273, 5800)}
        </div>
      </div>
    `;

    document.getElementById('selectPlanetA').addEventListener('change', (e) => {
      this.planetA = this.planets.find(p => p.id === e.target.value);
      sound.playPlanetBlip();
      this.render();
    });

    document.getElementById('selectPlanetB').addEventListener('change', (e) => {
      this.planetB = this.planets.find(p => p.id === e.target.value);
      sound.playPlanetBlip();
      this.render();
    });
  }

  renderMetricRow(label, displayValA, displayValB, numValA, numValB, maxRef) {
    const pctA = Math.min(Math.max((numValA / maxRef) * 100, 4), 100);
    const pctB = Math.min(Math.max((numValB / maxRef) * 100, 4), 100);

    return `
      <div class="metric-row">
        <div class="metric-side left-side">
          <span class="metric-val">${displayValA}</span>
          <div class="metric-bar-wrap right-align">
            <div class="metric-bar bar-a" style="width: ${pctA}%;"></div>
          </div>
        </div>

        <div class="metric-label-center">
          <span>${label}</span>
        </div>

        <div class="metric-side right-side">
          <div class="metric-bar-wrap left-align">
            <div class="metric-bar bar-b" style="width: ${pctB}%;"></div>
          </div>
          <span class="metric-val">${displayValB}</span>
        </div>
      </div>
    `;
  }
}
