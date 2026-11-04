// VERTEX: Cosmic Web & Spacetime Nodes Canvas Background
// Renders interconnected celestial vertices, constellation threads, and astronomical coordinates

export class VertexMeshCanvas {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.nodeCount = 65;
    this.mouse = { x: null, y: null, radius: 140 };
    this.animationFrameId = null;

    this.resize();
    this.initNodes();
    this.initEvents();
    this.start();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  initNodes() {
    this.nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(56, 189, 248, ', // Gold or Stellar Cyan
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  initEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initNodes();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  start() {
    const render = () => {
      this.draw();
      this.animationFrameId = requestAnimationFrame(render);
    };
    this.animationFrameId = requestAnimationFrame(render);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Connect nodes (Vertex constellation web)
    const maxDist = 115;
    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];

      // Update position
      a.x += a.vx;
      a.y += a.vy;

      // Wrap around screen boundaries
      if (a.x < 0) a.x = this.width;
      if (a.x > this.width) a.x = 0;
      if (a.y < 0) a.y = this.height;
      if (a.y > this.height) a.y = 0;

      // Pulse alpha gently
      a.pulseVal += a.pulseSpeed;
      const currentAlpha = a.alpha * (0.7 + 0.3 * Math.sin(a.pulseVal));

      // Draw vertex point
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${a.color}${currentAlpha})`;
      ctx.fill();

      // Connect to neighbors
      for (let j = i + 1; j < this.nodes.length; j++) {
        const b = this.nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse interaction
      if (this.mouse.x !== null) {
        const mdx = a.x - this.mouse.x;
        const mdy = a.y - this.mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < this.mouse.radius) {
          const mAlpha = (1 - mdist / this.mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
