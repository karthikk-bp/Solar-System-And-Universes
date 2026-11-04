// Interactive Planetary Weight & Age Calculator
// Computes personal weight and orbital age across the solar system

import { sound } from './soundFX.js';

export class WeightAgeCalculator {
  constructor(containerElement, planetsData) {
    this.container = containerElement;
    this.planets = planetsData;
    this.userWeight = 70; // kg default
    this.weightUnit = 'kg'; // 'kg' or 'lbs'
    this.userAge = 25; // years default
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="calculator-wrapper">
        <div class="calc-header">
          <h3>⚖️ Planetary Weight & Age Calculator</h3>
          <p>Discover how gravity and orbital mechanics would transform your body's weight and chronological age across worlds!</p>
        </div>

        <div class="calc-inputs-card">
          <div class="calc-input-group">
            <label for="earthWeightInput">Your Earth Weight:</label>
            <div class="input-with-addon">
              <input type="number" id="earthWeightInput" value="${this.userWeight}" min="1" max="500" step="1">
              <select id="weightUnitSelect" class="unit-select">
                <option value="kg" ${this.weightUnit === 'kg' ? 'selected' : ''}>kg</option>
                <option value="lbs" ${this.weightUnit === 'lbs' ? 'selected' : ''}>lbs</option>
              </select>
            </div>
          </div>

          <div class="calc-input-group">
            <label for="earthAgeInput">Your Earth Age (Years):</label>
            <div class="input-with-addon">
              <input type="number" id="earthAgeInput" value="${this.userAge}" min="0.5" max="130" step="0.5">
              <span class="input-unit-label">years</span>
            </div>
          </div>
        </div>

        <!-- Results Grid -->
        <div class="calc-results-grid" id="calcResultsGrid">
          ${this.renderResults()}
        </div>
      </div>
    `;

    const weightInput = document.getElementById('earthWeightInput');
    const unitSelect = document.getElementById('weightUnitSelect');
    const ageInput = document.getElementById('earthAgeInput');

    const updateResults = () => {
      this.userWeight = parseFloat(weightInput.value) || 0;
      this.weightUnit = unitSelect.value;
      this.userAge = parseFloat(ageInput.value) || 0;
      document.getElementById('calcResultsGrid').innerHTML = this.renderResults();
    };

    weightInput.addEventListener('input', updateResults);
    unitSelect.addEventListener('change', () => {
      sound.playPlanetBlip();
      updateResults();
    });
    ageInput.addEventListener('input', updateResults);
  }

  renderResults() {
    // Add Moon for fun comparison
    const extendedBodies = [
      ...this.planets,
      {
        id: 'moon',
        name: "Earth's Moon",
        type: 'Natural Satellite',
        gravityEarthRelative: 0.166,
        orbitalPeriodDays: 27.3,
        color: '#d1d8e0',
        gradient: 'radial-gradient(circle at 30% 30%, #f1f2f6 0%, #a4b0be 70%, #57606f 100%)'
      }
    ];

    return extendedBodies.map(body => {
      const calcWeight = (this.userWeight * body.gravityEarthRelative).toFixed(1);
      
      let calcAge = '--';
      let ageNote = '';
      if (body.orbitalPeriodDays > 0) {
        const planetaryYearInEarthYears = body.orbitalPeriodDays / 365.25;
        const rawAge = this.userAge / planetaryYearInEarthYears;
        calcAge = rawAge >= 10 ? rawAge.toFixed(1) : rawAge.toFixed(2);
        
        if (rawAge < 1) {
          ageNote = `Less than 1 ${body.name} year old!`;
        } else if (rawAge > 100) {
          ageNote = `Centenarian on ${body.name}!`;
        } else {
          ageNote = `${calcAge} ${body.name} years`;
        }
      } else {
        calcAge = `${this.userAge}`;
        ageNote = 'The Sun is the cosmic reference';
      }

      // Fun gravity sensation comment
      let gravityComment = '';
      if (body.gravityEarthRelative > 2) {
        gravityComment = '💥 Heavy! You would feel completely crushed under extreme gravity.';
      } else if (body.gravityEarthRelative > 1.05) {
        gravityComment = '🏋️ Noticeably heavier than on Earth.';
      } else if (body.gravityEarthRelative >= 0.85 && body.gravityEarthRelative <= 1.05) {
        gravityComment = '⚖️ Feels nearly identical to Earth.';
      } else if (body.gravityEarthRelative >= 0.35 && body.gravityEarthRelative < 0.85) {
        gravityComment = '🦘 High leaps! You can jump much higher with little effort.';
      } else {
        gravityComment = '🪶 Ultra buoyant! You could leap over buildings like an astronaut.';
      }

      return `
        <div class="calc-card" style="--body-color: ${body.color};">
          <div class="calc-card-top">
            <div class="calc-sphere-mini" style="background: ${body.gradient};"></div>
            <div class="calc-card-title">
              <h4>${body.name}</h4>
              <span class="calc-gravity-factor">${body.gravityEarthRelative}g (${(body.gravityEarthRelative * 100).toFixed(0)}%)</span>
            </div>
          </div>

          <div class="calc-stat-block">
            <div class="calc-stat">
              <span class="stat-caption">Your Weight:</span>
              <span class="stat-number">${calcWeight} <small>${this.weightUnit}</small></span>
            </div>
            <div class="calc-stat">
              <span class="stat-caption">Your Age:</span>
              <span class="stat-number">${calcAge} <small>years</small></span>
            </div>
          </div>

          <div class="calc-footnote">
            <span class="age-note">${ageNote}</span>
            <p class="grav-comment">${gravityComment}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}
