// Interactive Solar System Orrery Canvas
// Renders Sun, planets, orbits, asteroid belt, rings, pan & zoom, and click detection

import { sound } from './soundFX.js';

export class OrreryCanvas {
  constructor(canvasElement, planetsData, onSelectPlanet) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.planets = planetsData;
    this.onSelectPlanet = onSelectPlanet;

    // Viewport transform (Pan & Zoom)
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;

    // Simulation timing & controls
    this.isPlaying = true;
    this.speedMultiplier = 1;
    this.lastTimestamp = 0;
    this.showOrbits = true;
    this.scaleMode = 'stylized'; // 'stylized' or 'realistic'
    this.focusedPlanetId = null;

    // Planet visual orbital properties
    this.orbitalData = [
      { id: 'mercury', dist: 70, size: 4.5, speed: 4.15, angle: 0.5, color: '#a8a8a8' },
      { id: 'venus',   dist: 110, size: 7.5, speed: 1.62, angle: 1.8, color: '#e3bb76' },
      { id: 'earth',   dist: 160, size: 8.0, speed: 1.00, angle: 3.2, color: '#2f80ed' },
      { id: 'mars',    dist: 215, size: 5.5, speed: 0.53, angle: 4.5, color: '#e05638' },
      { id: 'jupiter', dist: 310, size: 19.0, speed: 0.084, angle: 0.2, color: '#d4a373' },
      { id: 'saturn',  dist: 410, size: 16.0, speed: 0.034, angle: 2.1, color: '#e2bf7d', hasRings: true },
      { id: 'uranus',  dist: 505, size: 11.0, speed: 0.012, angle: 5.0, color: '#72d5d9', hasRings: true },
      { id: 'neptune', dist: 595, size: 10.5, speed: 0.006, angle: 3.7, color: '#2759e6' },
      { id: 'pluto',   dist: 670, size: 3.5, speed: 0.004, angle: 1.1, color: '#c9b197' }
    ];

    // Generate Asteroid Belt Particles between Mars (215) and Jupiter (310)
    this.asteroids = [];
    for (let i = 0; i < 350; i++) {
      const radius = 245 + Math.random() * 45;
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.28 + Math.random() * 0.08) * (260 / radius);
      const size = 0.8 + Math.random() * 1.6;
      const alpha = 0.2 + Math.random() * 0.6;
      this.asteroids.push({ radius, angle, speed, size, alpha });
    }

    // Hover state
    this.hoveredPlanet = null;
    this.mouseScreenX = 0;
    this.mouseScreenY = 0;

    this.initEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.startLoop();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.displayWidth = rect.width;
    this.displayHeight = rect.height;

    // Center pan if not yet shifted
    if (this.panX === 0 && this.panY === 0) {
      this.panX = this.displayWidth / 2;
      this.panY = this.displayHeight / 2;
    }
  }

  initEvents() {
    // Mouse Drag Pan
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseScreenX = e.clientX - rect.left;
      this.mouseScreenY = e.clientY - rect.top;

      if (this.isDragging) {
        this.panX = e.clientX - this.dragStartX;
        this.panY = e.clientY - this.dragStartY;
      } else {
        this.checkHover(this.mouseScreenX, this.mouseScreenY);
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch Support for Mobile / Tablet
    let initialPinchDistance = null;
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.dragStartX = e.touches[0].clientX - this.panX;
        this.dragStartY = e.touches[0].clientY - this.panY;
      } else if (e.touches.length === 2) {
        initialPinchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        this.panX = e.touches[0].clientX - this.dragStartX;
        this.panY = e.touches[0].clientY - this.dragStartY;
      } else if (e.touches.length === 2 && initialPinchDistance) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = dist / initialPinchDistance;
        this.setZoom(this.zoom * factor, this.displayWidth / 2, this.displayHeight / 2);
        initialPinchDistance = dist;
      }
    }, { passive: true });

    this.canvas.addEventListener('touchend', () => {
      this.isDragging = false;
      initialPinchDistance = null;
    });

    // Mouse Wheel Zoom
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      this.setZoom(this.zoom * zoomFactor, this.mouseScreenX, this.mouseScreenY);
    }, { passive: false });

    // Click to Inspect Planet or Sun
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const clicked = this.findPlanetAt(x, y);
      if (clicked) {
        sound.playPlanetBlip();
        this.onSelectPlanet(clicked.id);
      }
    });
  }

  setZoom(newZoom, centerX = this.displayWidth / 2, centerY = this.displayHeight / 2) {
    const clampedZoom = Math.min(Math.max(newZoom, 0.25), 4.5);
    // Zoom toward point
    this.panX = centerX - (centerX - this.panX) * (clampedZoom / this.zoom);
    this.panY = centerY - (centerY - this.panY) * (clampedZoom / this.zoom);
    this.zoom = clampedZoom;
  }

  resetView() {
    this.zoom = 1;
    this.panX = this.displayWidth / 2;
    this.panY = this.displayHeight / 2;
    this.focusedPlanetId = null;
  }

  focusPlanet(planetId) {
    this.focusedPlanetId = planetId;
    if (planetId === 'sun') {
      this.panX = this.displayWidth / 2;
      this.panY = this.displayHeight / 2;
      this.zoom = 1.3;
      return;
    }
    const p = this.orbitalData.find(item => item.id === planetId);
    if (!p) return;
    const worldX = Math.cos(p.angle) * p.dist;
    const worldY = Math.sin(p.angle) * p.dist;
    this.zoom = 1.8;
    this.panX = this.displayWidth / 2 - worldX * this.zoom;
    this.panY = this.displayHeight / 2 - worldY * this.zoom;
  }

  findPlanetAt(screenX, screenY) {
    // Transform screen coordinates to world coordinates
    const worldX = (screenX - this.panX) / this.zoom;
    const worldY = (screenY - this.panY) / this.zoom;

    // Check Sun (center)
    const sunDist = Math.hypot(worldX, worldY);
    if (sunDist <= 28) {
      return { id: 'sun', name: 'The Sun' };
    }

    // Check orbiting planets
    for (const p of this.orbitalData) {
      const px = Math.cos(p.angle) * p.dist;
      const py = Math.sin(p.angle) * p.dist;
      const d = Math.hypot(worldX - px, worldY - py);
      // Give a generous hit area for ease of clicking
      const hitRadius = Math.max(p.size * 1.5, 12);
      if (d <= hitRadius) {
        return p;
      }
    }
    return null;
  }

  checkHover(screenX, screenY) {
    const hovered = this.findPlanetAt(screenX, screenY);
    if (hovered !== this.hoveredPlanet) {
      this.hoveredPlanet = hovered;
      this.canvas.style.cursor = hovered ? 'pointer' : 'grab';
    }
  }

  startLoop() {
    const loop = (timestamp) => {
      if (!this.lastTimestamp) this.lastTimestamp = timestamp;
      const deltaSec = (timestamp - this.lastTimestamp) / 1000;
      this.lastTimestamp = timestamp;

      this.update(deltaSec);
      this.draw();

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update(deltaSec) {
    if (!this.isPlaying) return;

    const baseSpeed = 0.5 * this.speedMultiplier;

    // Update planets' angles
    for (const p of this.orbitalData) {
      p.angle += p.speed * baseSpeed * deltaSec;
      if (p.angle > Math.PI * 2) p.angle -= Math.PI * 2;
    }

    // Update asteroid belt
    for (const a of this.asteroids) {
      a.angle += a.speed * baseSpeed * 0.4 * deltaSec;
      if (a.angle > Math.PI * 2) a.angle -= Math.PI * 2;
    }

    // If locked onto a planet, smoothly follow it
    if (this.focusedPlanetId && this.focusedPlanetId !== 'sun') {
      const target = this.orbitalData.find(item => item.id === this.focusedPlanetId);
      if (target) {
        const targetWorldX = Math.cos(target.angle) * target.dist;
        const targetWorldY = Math.sin(target.angle) * target.dist;
        const desiredPanX = this.displayWidth / 2 - targetWorldX * this.zoom;
        const desiredPanY = this.displayHeight / 2 - targetWorldY * this.zoom;
        this.panX += (desiredPanX - this.panX) * 0.08;
        this.panY += (desiredPanY - this.panY) * 0.08;
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.displayWidth, this.displayHeight);

    ctx.save();
    // Apply pan & zoom
    ctx.translate(this.panX, this.panY);
    ctx.scale(this.zoom, this.zoom);

    // 1. Draw Orbits
    if (this.showOrbits) {
      ctx.lineWidth = 1 / this.zoom;
      for (const p of this.orbitalData) {
        ctx.beginPath();
        ctx.arc(0, 0, p.dist, 0, Math.PI * 2);
        ctx.strokeStyle = (this.hoveredPlanet && this.hoveredPlanet.id === p.id) 
          ? 'rgba(255, 255, 255, 0.45)' 
          : 'rgba(255, 255, 255, 0.12)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // 2. Draw Asteroid Belt
    for (const a of this.asteroids) {
      const ax = Math.cos(a.angle) * a.radius;
      const ay = Math.sin(a.angle) * a.radius;
      ctx.fillStyle = `rgba(180, 175, 170, ${a.alpha})`;
      ctx.beginPath();
      ctx.arc(ax, ay, a.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Draw The Sun
    this.drawSun(ctx);

    // 4. Draw Vertex Constellation Lines between planets
    if (this.showOrbits && this.orbitalData.length > 1) {
      ctx.beginPath();
      for (let i = 0; i < this.orbitalData.length; i++) {
        const pt = this.orbitalData[i];
        const px = Math.cos(pt.angle) * pt.dist;
        const py = Math.sin(pt.angle) * pt.dist;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.18)'; // Gold vertex triangulation
      ctx.lineWidth = 0.8 / this.zoom;
      ctx.stroke();
    }

    // 5. Draw Orbiting Planets
    for (const p of this.orbitalData) {
      const px = Math.cos(p.angle) * p.dist;
      const py = Math.sin(p.angle) * p.dist;

      const isHovered = this.hoveredPlanet && this.hoveredPlanet.id === p.id;
      const isFocused = this.focusedPlanetId === p.id;

      // Vertex crosshair and ring marker
      ctx.beginPath();
      ctx.arc(px, py, p.size * 1.6, 0, Math.PI * 2);
      ctx.strokeStyle = isHovered ? '#d4af37' : 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 0.8 / this.zoom;
      ctx.stroke();

      // Glow highlight if hovered or focused
      if (isHovered || isFocused) {
        ctx.beginPath();
        ctx.arc(px, py, p.size * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.fill();

        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 1.5 / this.zoom;
        ctx.stroke();
      }

      // Planet Shadow & Gradient (sunlight originates from center 0,0)
      const sunAngle = Math.atan2(py, px);
      const sunGrad = ctx.createRadialGradient(
        px - Math.cos(sunAngle) * (p.size * 0.4),
        py - Math.sin(sunAngle) * (p.size * 0.4),
        p.size * 0.1,
        px,
        py,
        p.size
      );
      sunGrad.addColorStop(0, '#ffffff');
      sunGrad.addColorStop(0.3, p.color);
      sunGrad.addColorStop(1, '#05070f');

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.fill();

      // Saturn & Uranus Rings
      if (p.id === 'saturn') {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(0.4);
        ctx.scale(1, 0.35);
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(226, 191, 125, 0.7)';
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, p.size * 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(190, 160, 100, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      } else if (p.id === 'uranus') {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(1.7);
        ctx.scale(1, 0.2);
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(114, 213, 217, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // Classical Serif Label text (Times New Roman)
      ctx.font = `italic 700 ${Math.max(11, 13 / Math.sqrt(this.zoom))}px 'Times New Roman', Times, serif`;
      ctx.fillStyle = isHovered ? '#d4af37' : 'rgba(240, 240, 245, 0.9)';
      ctx.textAlign = 'center';
      const labelY = py + p.size + (15 / this.zoom);
      ctx.fillText(p.id.toUpperCase(), px, labelY);
    }

    ctx.restore();

    // 6. Draw Tooltip for Hovered Planet (in screen space)
    if (this.hoveredPlanet) {
      this.drawTooltip(ctx);
    }
  }

  drawSun(ctx) {
    const isHovered = this.hoveredPlanet && this.hoveredPlanet.id === 'sun';

      // Solar Corona Pulsing Glow
      const time = performance.now() * 0.002;
      const pulse = Math.sin(time) * 3;
      const sunRadius = 24;

      const coronaGrad = ctx.createRadialGradient(0, 0, sunRadius * 0.5, 0, 0, (sunRadius + 22) + pulse);
      coronaGrad.addColorStop(0, 'rgba(255, 220, 100, 1)');
      coronaGrad.addColorStop(0.3, 'rgba(255, 140, 0, 0.75)');
      coronaGrad.addColorStop(0.7, 'rgba(255, 60, 0, 0.25)');
      coronaGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(0, 0, (sunRadius + 22) + pulse, 0, Math.PI * 2);
      ctx.fillStyle = coronaGrad;
      ctx.fill();

      // Solid core
      const coreGrad = ctx.createRadialGradient(-5, -5, 2, 0, 0, sunRadius);
      coreGrad.addColorStop(0, '#ffffff');
      coreGrad.addColorStop(0.4, '#ffea75');
      coreGrad.addColorStop(0.8, '#ff9900');
      coreGrad.addColorStop(1, '#ff4500');

      ctx.beginPath();
      ctx.arc(0, 0, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // If hovered, outline
      if (isHovered) {
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2 / this.zoom;
        ctx.stroke();
      }

      // Sun Label in Times New Roman
      ctx.font = `bold italic ${Math.max(12, 14 / Math.sqrt(this.zoom))}px 'Times New Roman', Times, serif`;
      ctx.fillStyle = '#ffcc00';
      ctx.textAlign = 'center';
      ctx.fillText('SOL (VERTEX PRIME)', 0, sunRadius + (17 / this.zoom));
    }

    drawTooltip(ctx) {
      const p = this.hoveredPlanet;
      const fullData = this.planets.find(item => item.id === p.id);
      if (!fullData) return;

      const pad = 14;
      const title = fullData.name;
      const type = fullData.type;
      const nodeAngle = p.angle ? `Vertex Angle: ${(p.angle * 180 / Math.PI).toFixed(1)}°` : 'System Center';
      const hint = 'Click to examine planetary layers & physics';

      ctx.font = 'bold 15px "Times New Roman", Times, serif';
      const titleWidth = ctx.measureText(title).width;
      ctx.font = 'italic 12px "Times New Roman", Times, serif';
      const typeWidth = ctx.measureText(type).width;
      const hintWidth = ctx.measureText(hint).width;

      const boxWidth = Math.max(titleWidth, typeWidth, hintWidth) + pad * 2 + 30;
      const boxHeight = 78;

      let bx = this.mouseScreenX + 15;
      let by = this.mouseScreenY + 15;
      if (bx + boxWidth > this.displayWidth) bx = this.mouseScreenX - boxWidth - 15;
      if (by + boxHeight > this.displayHeight) by = this.mouseScreenY - boxHeight - 15;

      // Tooltip Card background with gold vertex trim
      ctx.fillStyle = 'rgba(8, 12, 22, 0.96)';
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxWidth, boxHeight, 6);
      ctx.fill();
      ctx.stroke();

      // Vertex Corner Accents
      ctx.strokeStyle = '#f59e0b';
      ctx.strokeRect(bx + 3, by + 3, 5, 5);

      // Texts in Times New Roman
      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px "Times New Roman", Times, serif';
      ctx.fillText(title, bx + pad, by + 22);

      ctx.fillStyle = '#d4af37';
      ctx.font = 'italic 12px "Times New Roman", Times, serif';
      ctx.fillText(`${type} • ${nodeAngle}`, bx + pad, by + 42);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px "Times New Roman", Times, serif';
      ctx.fillText(hint, bx + pad, by + 62);
  }
}
