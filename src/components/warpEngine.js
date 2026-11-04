// VERTEX: Hyperdrive Warp Engine & Intergalactic Flight Simulator
// Cinematic warp transition animation with star-stretching, hyperspace tunnel, cockpit HUD, and light-year telemetry

import { sound } from './soundFX.js';

export class WarpEngine {
  constructor(containerElement, onArrivalCallback) {
    this.container = containerElement;
    this.onArrival = onArrivalCallback;
    this.isWarping = false;
    this.canvas = null;
    this.ctx = null;
    this.stars = [];
    this.animId = null;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div id="warpOverlay" class="warp-overlay" style="display: none;">
        <canvas id="warpCanvas"></canvas>

        <!-- Spaceship Cockpit HUD Overlay -->
        <div class="cockpit-hud" id="cockpitHud">
          <div class="hud-top-bar">
            <div class="hud-status">
              <span class="hud-dot"></span>
              <span id="hudStatusText">STANDBY</span>
            </div>
            <div class="hud-nav-title">VERTEX HYPERDRIVE FLIGHT COMPUTER</div>
            <div class="hud-subspace">SUBSPACE SENSOR: ACTIVE</div>
          </div>

          <div class="hud-crosshair">
            <div class="reticle-circle"></div>
            <div class="reticle-h-line"></div>
            <div class="reticle-v-line"></div>
            <div class="reticle-data" id="reticleData">TARGET ACQUIRED</div>
          </div>

          <div class="hud-left-panel">
            <div class="hud-box-title">WARP TELEMETRY</div>
            <div class="hud-metric">
              <span class="m-lbl">Warp Factor:</span>
              <span class="m-val" id="hudWarpFactor">0.00</span>
            </div>
            <div class="hud-metric">
              <span class="m-lbl">Spacetime Curvature:</span>
              <span class="m-val" id="hudCurvature">0.0%</span>
            </div>
            <div class="hud-metric">
              <span class="m-lbl">Inertial Dampers:</span>
              <span class="m-val" style="color: #10b981;">100% ONLINE</span>
            </div>
          </div>

          <div class="hud-right-panel">
            <div class="hud-box-title">DESTINATION VECTOR</div>
            <div class="hud-metric">
              <span class="m-lbl">Target:</span>
              <span class="m-val text-gold" id="hudTargetName">---</span>
            </div>
            <div class="hud-metric">
              <span class="m-lbl">Distance:</span>
              <span class="m-val" id="hudDistanceLy">---</span>
            </div>
            <div class="hud-metric">
              <span class="m-lbl">Subspace Odometer:</span>
              <span class="m-val text-cyan" id="hudOdometer">0 LY</span>
            </div>
          </div>

          <!-- Spaceship Cockpit Struts Graphic -->
          <div class="cockpit-strut strut-left"></div>
          <div class="cockpit-strut strut-right"></div>
          <div class="cockpit-dashboard">
            <div class="dashboard-gauge">
              <span>WARP CORE ACCUMULATOR</span>
              <div class="gauge-bar"><div class="gauge-fill" id="warpGaugeFill"></div></div>
            </div>
            <div class="dashboard-msg" id="dashboardMsg">READY FOR JUMP SEQUENCE</div>
          </div>
        </div>

        <!-- Arrival Dossier Modal Screen -->
        <div class="arrival-dossier" id="arrivalDossier" style="display: none;">
          <div class="dossier-card" id="dossierCard">
            <!-- Dynamically populated upon arrival -->
          </div>
        </div>
      </div>
    `;

    this.canvas = document.getElementById('warpCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initStars();
  }

  resize() {
    if (!this.canvas) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initStars() {
    this.stars = [];
    const count = 550;
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * this.width * 2,
        y: (Math.random() - 0.5) * this.height * 2,
        z: Math.random() * this.width,
        pz: Math.random() * this.width,
        color: Math.random() > 0.3 ? '#38bdf8' : (Math.random() > 0.5 ? '#d4af37' : '#ffffff')
      });
    }
  }

  engageWarp(destination, origin = { name: "Milky Way (Earth)", distanceLy: 0 }) {
    if (this.isWarping) return;
    this.isWarping = true;

    const overlay = document.getElementById('warpOverlay');
    const hud = document.getElementById('cockpitHud');
    const arrivalDossier = document.getElementById('arrivalDossier');
    const hudStatus = document.getElementById('hudStatusText');
    const hudTarget = document.getElementById('hudTargetName');
    const hudDist = document.getElementById('hudDistanceLy');
    const dashMsg = document.getElementById('dashboardMsg');
    const warpGauge = document.getElementById('warpGaugeFill');
    const warpFactor = document.getElementById('hudWarpFactor');
    const curvature = document.getElementById('hudCurvature');
    const odometer = document.getElementById('hudOdometer');

    // Calculate light-year distance between origin and destination
    const deltaLy = Math.abs((destination.distanceLy || 0) - (origin.distanceLy || 0)) || destination.distanceLy || 1;

    overlay.style.display = 'block';
    hud.style.display = 'block';
    arrivalDossier.style.display = 'none';

    hudTarget.textContent = destination.name;
    hudDist.textContent = `${deltaLy.toLocaleString()} Light-Years`;
    hudStatus.textContent = 'CHARGING WARP CORE';
    dashMsg.textContent = `ALIGNING TACHYON EMITTERS TO ${destination.name.toUpperCase()}...`;
    warpGauge.style.width = '0%';

    sound.playHyperdriveCharge();

    // Flight variables
    let warpSpeed = 1;
    let maxWarpSpeed = 55;
    let elapsed = 0;
    const startTime = performance.now();
    const warpDurationMs = 4500; // 4.5 seconds cinematic journey

    // Animate starfield warp tunnel
    const animateWarp = (now) => {
      elapsed = now - startTime;
      const progress = Math.min(elapsed / warpDurationMs, 1);

      // Phase 1: Charge up (0 to 1.5s)
      if (progress < 0.3) {
        const p1 = progress / 0.3;
        warpSpeed = 1 + p1 * 12;
        warpGauge.style.width = `${p1 * 100}%`;
        warpFactor.textContent = (p1 * 4.2).toFixed(2);
        curvature.textContent = `${(p1 * 45).toFixed(1)}%`;
        dashMsg.textContent = 'WARP COILS ENERGIZED... LOCKING SPACETIME VECTOR';
        odometer.textContent = `${Math.floor(deltaLy * p1 * 0.05).toLocaleString()} LY`;
      } 
      // Phase 2: Hyperdrive Warp (1.5s to 3.8s)
      else if (progress < 0.85) {
        if (progress > 0.32 && progress < 0.35) {
          sound.playWarpJump();
        }
        const p2 = (progress - 0.3) / 0.55;
        warpSpeed = 20 + p2 * 45;
        hudStatus.textContent = 'HYPERDRIVE ACTIVE';
        warpFactor.textContent = (4.2 + p2 * 5.79).toFixed(2);
        curvature.textContent = `${(45 + p2 * 54.9).toFixed(1)}%`;
        dashMsg.textContent = `TRAVERSING HYPERSPACE TUNNEL AT WARP 9.99...`;
        odometer.textContent = `${Math.floor(deltaLy * p2).toLocaleString()} LY`;
      } 
      // Phase 3: Deceleration & Drop (3.8s to 4.5s)
      else {
        const p3 = (progress - 0.85) / 0.15;
        warpSpeed = Math.max(65 * (1 - p3), 2);
        hudStatus.textContent = 'DE-WARPING (DROPPING INTO SYSTEM)';
        dashMsg.textContent = `EXITING SUBSPACE AT ${destination.name.toUpperCase()}...`;
        odometer.textContent = `${deltaLy.toLocaleString()} LY`;
      }

      // Render stars & relativistic tunnel
      this.drawStarWarp(warpSpeed, progress);

      if (progress < 1) {
        this.animId = requestAnimationFrame(animateWarp);
      } else {
        // Arrived at destination!
        sound.playWarpDrop();
        this.completeArrival(destination, deltaLy, origin);
      }
    };

    this.animId = requestAnimationFrame(animateWarp);
  }

  drawStarWarp(speed, progress) {
    const ctx = this.ctx;
    const cx = this.width / 2;
    const cy = this.height / 2;

    // Motion trail blur effect
    ctx.fillStyle = 'rgba(6, 8, 15, 0.28)';
    ctx.fillRect(0, 0, this.width, this.height);

    // Tunnel glow in middle
    if (progress > 0.3 && progress < 0.85) {
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, this.width * 0.45);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
      grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.08)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    }

    // Render relativistic stars
    for (const star of this.stars) {
      star.pz = star.z;
      star.z -= speed;

      // Reset star when it passes the camera
      if (star.z <= 0) {
        star.z = this.width;
        star.pz = this.width;
        star.x = (Math.random() - 0.5) * this.width * 2;
        star.y = (Math.random() - 0.5) * this.height * 2;
      }

      const k = 250 / star.z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      const pk = 250 / star.pz;
      const ppx = star.x * pk + cx;
      const ppy = star.y * pk + cy;

      if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
        const starSize = Math.max((1 - star.z / this.width) * 3, 0.8);

        ctx.beginPath();
        // At warp, stretch into speed lines
        if (speed > 8) {
          ctx.moveTo(ppx, ppy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = starSize;
          ctx.stroke();
        } else {
          ctx.arc(px, py, starSize, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      }
    }
  }

  completeArrival(dest, deltaLy, origin) {
    cancelAnimationFrame(this.animId);
    this.isWarping = false;

    const dossier = document.getElementById('arrivalDossier');
    const dossierCard = document.getElementById('dossierCard');
    const hud = document.getElementById('cockpitHud');

    hud.style.display = 'none';
    dossier.style.display = 'flex';

    // Calculate travel times under various modes:
    // deltaLy light-years
    const distKm = deltaLy * 9.461e12; // 1 Light Year = 9.461 Trillion km
    
    // 1. Voyager 1 (17 km/s = ~61,200 km/h)
    const voyagerYears = (distKm / (61200 * 24 * 365.25));
    // 2. Solar Probe (692,000 km/h)
    const probeYears = (distKm / (692000 * 24 * 365.25));
    // 3. Sub-light Relativistic (0.99c)
    const sublightYears = (deltaLy / 0.99);
    // 4. Warp 9.9 (3,053x c)
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

    dossierCard.innerHTML = `
      <div class="dossier-header" style="--dest-color: ${dest.color || '#d4af37'};">
        <div class="dossier-badge-row">
          <span class="dossier-badge">WARP ARRIVAL CONFIRMED</span>
          <span class="dossier-badge gold-badge">${dest.type || 'Deep Space Entity'}</span>
        </div>
        <h2 class="dossier-title">✦ Welcome to ${dest.name}</h2>
        <p class="dossier-origin-meta">Traversed from <strong>${origin.name}</strong> • Vector Clearance: SECURED</p>
      </div>

      <div class="dossier-grid">
        <div class="dossier-preview-col">
          <div class="dossier-celestial-sphere" style="background: ${dest.gradient || 'radial-gradient(circle, #38bdf8, #030712)'}; box-shadow: 0 0 35px ${dest.color || '#38bdf8'};"></div>
          <div class="dossier-ly-badge">
            <span class="ly-num">${deltaLy.toLocaleString()}</span>
            <span class="ly-label">LIGHT-YEARS TRAVERSED</span>
          </div>
          <span class="dossier-km">${distKm.toExponential(2)} kilometers</span>
        </div>

        <div class="dossier-info-col">
          <h4 class="dossier-section-title">⏱️ Interstellar Travel Time Comparison</h4>
          <div class="travel-table">
            <div class="travel-row">
              <span class="tr-mode">🛸 Hyperdrive Warp 9.9 (3,053c):</span>
              <span class="tr-time highlight-gold">${formatWarpTime(warp9Hours)}</span>
            </div>
            <div class="travel-row">
              <span class="tr-mode">⚡ Speed of Light (1.0c):</span>
              <span class="tr-time">${formatYears(deltaLy)}</span>
            </div>
            <div class="travel-row">
              <span class="tr-mode">🚀 Relativistic Starship (0.99c):</span>
              <span class="tr-time">${formatYears(sublightYears)}</span>
            </div>
            <div class="travel-row">
              <span class="tr-mode">🛰️ Parker Solar Probe (692,000 km/h):</span>
              <span class="tr-time">${formatYears(probeYears)}</span>
            </div>
            <div class="travel-row">
              <span class="tr-mode">📡 Voyager 1 Spacecraft (61,200 km/h):</span>
              <span class="tr-time">${formatYears(voyagerYears)}</span>
            </div>
          </div>

          <h4 class="dossier-section-title" style="margin-top: 1.2rem;">🔭 Astrophysical Intelligence</h4>
          <p class="dossier-desc">${dest.overview || dest.description || 'Deep cosmos entity.'}</p>
          
          ${dest.centralBlackHole ? `<p class="dossier-stat"><strong>Central Singularity:</strong> ${dest.centralBlackHole}</p>` : ''}
          ${dest.starsCount ? `<p class="dossier-stat"><strong>Estimated Star Count:</strong> ${dest.starsCount}</p>` : ''}
          ${dest.habitableZonePlanets ? `<p class="dossier-stat"><strong>Habitable Worlds:</strong> ${dest.habitableZonePlanets}</p>` : ''}
          ${dest.eventHorizonRadiusKm ? `<p class="dossier-stat"><strong>Schwarzschild Radius:</strong> ${dest.eventHorizonRadiusKm}</p>` : ''}
          ${dest.discovery ? `<p class="dossier-stat"><strong>Human Discovery:</strong> ${dest.discovery}</p>` : ''}
        </div>
      </div>

      <div class="dossier-actions">
        <button class="dossier-btn primary" id="closeDossierBtn">✦ Disengage Flight Deck & Explore</button>
      </div>
    `;

    document.getElementById('closeDossierBtn').addEventListener('click', () => {
      sound.playPlanetBlip();
      const overlay = document.getElementById('warpOverlay');
      overlay.style.display = 'none';
      if (this.onArrival) this.onArrival(dest);
    });
  }
}
