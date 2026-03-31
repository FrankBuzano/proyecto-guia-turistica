export default class InteractiveMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._cam = { x: 0, y: 0, s: 1 };
    this._drag = { active: false, startX: 0, startY: 0, camStartX: 0, camStartY: 0, moved: false };
    this._destinos = [];
    this._provincias = {
      CRG:{nombre:'Guanacaste',color:'#D4841A', cx:300, cy:180, zoom:2.8},
      CRA:{nombre:'Alajuela',color:'#2E86DE', cx:500, cy:160, zoom:3.0},
      CRH:{nombre:'Heredia',color:'#8E44AD', cx:620, cy:185, zoom:4.5},
      CRSJ:{nombre:'San José',color:'#27AE60', cx:590, cy:310, zoom:3.5},
      CRC:{nombre:'Cartago',color:'#E85D4A', cx:680, cy:280, zoom:4.0},
      CRL:{nombre:'Limón',color:'#1ABC9C', cx:780, cy:280, zoom:2.2},
      CRP:{nombre:'Puntarenas',color:'#E67E22', cx:420, cy:400, zoom:1.6}
    };
  }

  async connectedCallback() {
    this._paths = await fetch('./antigravity/resources/mapa-interactivo-cr (1).html')
      .then(r => r.text())
      .then(t => this._extractPaths(t));
      
    this._destinos = await fetch('./data/destinos.json').then(r => r.json());
    
    this.shadowRoot.innerHTML = `<style>${this._css()}</style>${this._html()}`;
    this._bindAll();
  }

  _extractPaths(html) {
    const rawPaths = html.match(/<g>([\s\S]*?)<\/g>/)[1] || '';
    return rawPaths.replace(/class="prov"/g, 'class="prov"'); // Keeping raw SVG elements
  }

  _html() {
    let pins = this._destinos.map(d => {
      const c = this._provincias[d.region]?.color || '#a8d5a2';
      return `<g class="pin" data-id="${d.id}" data-p="${d.region}">
        <circle class="pin-ring" cx="${d.cx}" cy="${d.cy}" r="12" stroke="${c}" style="animation-delay:0s"/>
        <circle class="pin-dot" cx="${d.cx}" cy="${d.cy}" r="5" fill="${c}" />
        <text class="pin-lbl" x="${d.cx}" y="${d.cy-14}">${d.nombre}</text>
      </g>`;
    }).join('');

    return `
      <div class="wrap">
        <div class="vp" id="vp">
          <div class="cam" id="cam">
            <svg id="m" viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg">
              <rect width="1000" height="560" fill="transparent"/>
              <g id="map-paths">${this._paths}</g>
              <g>${pins}</g>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  _css() {
    return `
      :host { display: block; width: 100%; border-radius: var(--radius-xl); overflow: hidden; background: var(--color-surface-lowest); }
      .wrap { position: relative; width: 100%; height: 560px; }
      .vp { width: 100%; height: 100%; cursor: grab; overflow: hidden; touch-action: none; }
      .vp.dragging { cursor: grabbing; }
      .cam { width: 100%; height: 100%; transform-origin: 0 0; transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1); }
      .cam.no-transition { transition: none; }
      svg { width: 100%; height: 100%; display: block; }
      .prov { fill: var(--color-surface-dim); stroke: var(--color-outline-variant); stroke-width: 1px; transition: all 0.3s; cursor: pointer; }
      .prov:hover { fill: var(--color-surface-highest); }
      .prov.active { stroke: var(--color-primary); fill: var(--color-surface); z-index: 10; }
      .pin { cursor: pointer; }
      .pin-dot { stroke: var(--color-background); stroke-width: 1.5px; transition: r 0.2s; }
      .pin-ring { fill: none; stroke-width: 1.5px; opacity: 0; animation: pulse 2.5s infinite; }
      .pin-lbl { font-family: var(--font-body); font-size: 10px; font-weight: 600; fill: var(--color-on-surface); text-anchor: middle; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
      .pin:hover .pin-lbl { opacity: 1; }
      .pin:hover .pin-dot { r: 7; }
      @keyframes pulse { 0% { r: 10; opacity: 0 } 50% { r: 16; opacity: 0.4 } 100% { r: 22; opacity: 0 } }
    `;
  }

  _applyCam(animate=true) {
    const cam = this.shadowRoot.getElementById('cam');
    if(!animate) cam.classList.add('no-transition');
    else cam.classList.remove('no-transition');
    cam.style.transform = `translate(${this._cam.x}px, ${this._cam.y}px) scale(${this._cam.s})`;
  }

  _bindAll() {
    const vp = this.shadowRoot.getElementById('vp');
    vp.addEventListener('pointerdown', e => {
      this._drag.active = true;
      this._drag.startX = e.clientX;
      this._drag.startY = e.clientY;
      this._drag.camStartX = this._cam.x;
      this._drag.camStartY = this._cam.y;
      vp.classList.add('dragging');
      vp.setPointerCapture(e.pointerId);
    });

    vp.addEventListener('pointermove', e => {
      if (!this._drag.active) return;
      const dx = e.clientX - this._drag.startX;
      const dy = e.clientY - this._drag.startY;
      
      let newX = this._drag.camStartX + dx / this._cam.s;
      let newY = this._drag.camStartY + dy / this._cam.s;

      // Clamping bounds to keep map within view
      const maxW = 1000 - (1000 / this._cam.s);
      const maxH = 560 - (560 / this._cam.s);
      
      this._cam.x = Math.min(0, Math.max(-maxW, newX));
      this._cam.y = Math.min(0, Math.max(-maxH, newY));
      
      this._applyCam(false);
    });

    vp.addEventListener('pointerup', e => {
      this._drag.active = false;
      vp.classList.remove('dragging');
      vp.releasePointerCapture(e.pointerId);
    });

    vp.addEventListener('wheel', e => {
      e.preventDefault();
      const s = this._cam.s;
      const ns = e.deltaY > 0 ? Math.max(1, s * 0.9) : Math.min(6, s * 1.1);
      this._cam.s = ns;
      this._applyCam(false);
      setTimeout(() => this.shadowRoot.getElementById('cam').classList.remove('no-transition'), 50);
    }, { passive: false });
  }
}
customElements.define('interactive-map', InteractiveMap);
