/* <factory-3d> — czysta wizualizacja 3D fabryki KLAB (three.js, styl 21zmysłów) */
(function () {
  if (customElements.get('factory-3d')) return;

  const ACCENT = 0xFF6110;

  const THEMES = {
    light: {
      bg: 0xDCDBD6, floor: 0xB9B8B3, grid1: 0xA3A29D, grid2: 0xAEADA8, plate: 0xA8A7A2,
      zoneLabel: '#6B6B6B', body: 0xFFFFFF, bodyDark: 0x1B1A1E, plinth: 0x111013, cap: 0x111013, capDark: 0xF2F1EE,
      labelBg: 'rgba(255,255,255,0.85)', labelColor: '#111013', labelBorder: '#E6E5E1',
      hemiSky: 0xFFFFFF, hemiGround: 0xC5C3BE, hemiInt: 0.6, keyInt: 0.55, tubeOp: 0.55
    },
    dark: {
      bg: 0x111013, floor: 0x151418, grid1: 0x2E2D33, grid2: 0x211F26, plate: 0x1E1D23,
      zoneLabel: '#9B9A95', body: 0xE8E7E3, bodyDark: 0x35343B, plinth: 0x0B0B0E, cap: 0x111013, capDark: 0xF2F1EE,
      labelBg: 'rgba(26,25,32,0.85)', labelColor: '#FAFAF9', labelBorder: '#2A292F',
      hemiSky: 0x9A9AA5, hemiGround: 0x0B0B0E, hemiInt: 0.75, keyInt: 0.7, tubeOp: 0.6
    }
  };

  const STATIONS = [
    { id: 'in', name: 'Wsad: zużyte akumulatory LAB', zone: 'we', tag: 'Wejście', pos: [-26, 0, 0], size: [3, 2.4, 3], dark: true,
      desc: 'Standardowe zużyte akumulatory kwasowo-ołowiowe (LAB) — nominalnie 20 t/dobę. Ważenie brutto/netto, kontrola szczelności, identyfikacja partii w MES/LIMS.',
      kv: 'Przepustowość: 20 t/d · praca 2-zmianowa (16 h) · dostępność ≥85%' },
    { id: 'break', name: 'Breaker + separacja sink-float', zone: 'rec', tag: 'Recykling LAB', pos: [-18, 0, 0], size: [3.4, 2.6, 3.4],
      desc: 'Mechaniczne otwieranie i kruszenie, odsysanie elektrolitu, rozdział gęstościowy (ciecz 1,2–1,4 g/cm³) i przesiewanie na 4 frakcje: Pb metaliczny, pasta, H₂SO₄, PP. Pasta wstępnie odwadniana w wirówce.',
      kv: 'Wydajność węzła: 1,2–1,5 t/h (bufor do 2 t/h)' },
    { id: 'melt', name: 'Niskotemperaturowy wytop ~330 °C', zone: 'rec', tag: 'Odzysk Pb', pos: [-8, 0, -7], size: [3, 3, 3],
      desc: 'Frakcja metaliczna topiona w 300–400 °C (tuż nad Tm Pb = 327,5 °C) w piecach tyglowych/indukcyjnych. Łagodny reżim ogranicza dross, emisje i zużycie energii. Ciekły Pb kierowany bezpośrednio „hot-to-product”.',
      kv: 'Produkt: Pb ~28–34% m/m ≈ 5,6–6,8 t/d' },
    { id: 'hydro', name: 'Ługowanie Na₂CO₃ → PbO (α/β)', zone: 'rec', tag: 'Hydrometalurgia', pos: [-8, 0, 7], size: [3, 3, 3],
      desc: 'Pasta siarczanowa (PbSO₄/PbO₂/PbO) przetwarzana hydrometalurgicznie ścieżką Na₂CO₃ z kontrolą faz α/β. Powstający Na₂SO₄ wytrącany i odwadniany jako produkt uboczny/handlowy. Obiegi reagentu zamknięte.',
      kv: 'Produkt: PbO ~32–38% m/m ≈ 6,4–7,6 t/d · uboczny: Na₂SO₄' },
    { id: 'acid', name: 'Uzdatnianie i zawracanie H₂SO₄', zone: 'media', tag: 'Gospodarka mediów', pos: [-8, 0, 13], size: [2.6, 2, 2.6],
      desc: 'Elektrolit po filtracji, korekcie stężenia i chłodzeniu zawracany do procesów pomocniczych (płuczki/neutralizacja). Kondensaty i wody płuczne recyrkulowane — ograniczenie zużycia świeżej wody.',
      kv: 'Strumień: H₂SO₄ ~10–14% m/m ≈ 2,0–2,8 t/d' },
    { id: 'pp', name: 'Mycie i regranulacja PP', zone: 'media', tag: 'Gospodarka mediów', pos: [-18, 0, 10.5], size: [2.6, 2, 2.6],
      desc: 'Obudowy PP myte i regranulowane do ponownego wykorzystania. Element GOZ — minimalizacja odpadów kierowanych na zewnątrz.',
      kv: 'Produkt: regranulat PP ~10–14% m/m ≈ 2,0–2,8 t/d' },
    { id: 'elec', name: 'Elektroda szkieletowo-siatkowa 3D', zone: 'prod', tag: 'Produkcja KLAB', pos: [2, 0, -4], size: [3.2, 2.8, 3.2],
      desc: 'Rdzeń innowacji: lekka trójwymiarowa siatka węglowa z wtapianymi beleczkami ołowianymi (druk stopionym Pb). Duża powierzchnia czynna, niska rezystancja, brak „hotspotów”. Skala docelowa 18×34 cm → 25×50 cm.',
      kv: 'Zużycie Pb: 8,1 kg/kWh — redukcja 52% vs LAB (17 kg/kWh)' },
    { id: 'pack', name: 'Pakietyzacja: HC + AGM + bipolar', zone: 'prod', tag: 'Produkcja KLAB', pos: [10, 0, 2], size: [3.2, 2.8, 3.2],
      desc: 'Płyty wysoko-porowatego węgla „HC” z obu stron elektrody (bufor mocy / warstwa podwójna, peak-shaving). Separator AGM (elektrolit w macie szklanej). Architektura bipolarna ≥4 V, integralne kontaktowanie.',
      kv: 'Efekt: wysoka moc chwilowa, niska polaryzacja, wyższa trwałość' },
    { id: 'assy', name: 'Montaż ogniw + formowanie + BMS', zone: 'prod', tag: 'Produkcja KLAB', pos: [18, 0, -2], size: [3.2, 2.8, 3.2],
      desc: 'Układanie płyt, impregnacja elektrolitem, zamknięcie w szczelnej obudowie, formowanie elektrochemiczne. Integracja monitoringu SoC/SoH/T (BMS/EMS) i kontrola jakości.',
      kv: 'Cykliczność celowa: ~6000 cykli' },
    { id: 'out', name: 'Magazyny energii KLAB', zone: 'wy', tag: 'Produkt', pos: [26, 0, 3], size: [3.4, 3, 3.4], dark: true,
      desc: 'Gotowe kompozytowe akumulatory / banki magazynowe do sieci, infrastruktury krytycznej i zastosowań dual-use. Pełna identyfikowalność partii; recyklingowalne w tej samej pętli.',
      kv: 'Produkcja: 454 MWh/rok · personel: 94 osoby' },
  ];

  // semantic stream colors (MP096 palette + własne dopasowane)
  const COL = { pb: 0x6E7580, paste: 0x95122C, pbo: 0xCA3F16, acid: 0xD9A62E, pp: 0x4A7FB5, prod: 0x3F9C6B };

  const FLOWS = [
    ['in', 'break', COL.pb, 0.9],
    ['break', 'melt', COL.pb, 1.0],
    ['break', 'hydro', COL.paste, 1.0],
    ['break', 'acid', COL.acid, 0.8],
    ['break', 'pp', COL.pp, 0.8],
    ['melt', 'elec', COL.pb, 1.0],
    ['hydro', 'elec', COL.pbo, 0.8],
    ['hydro', 'pack', COL.pbo, 0.7],
    ['pp', 'elec', COL.pp, 0.5],
    ['acid', 'break', COL.acid, 0.5],
    ['elec', 'pack', COL.prod, 1.0],
    ['pack', 'assy', COL.prod, 1.0],
    ['assy', 'out', COL.prod, 1.1],
  ];

  const ZONES = [
    { name: 'Recykling LAB', min: [-22.5, -9.5], max: [-4.5, 9], },
    { name: 'Gospodarka mediów', min: [-21, 9.6], max: [-4.5, 15.5], },
    { name: 'Produkcja ogniw KLAB', min: [-1, -8], max: [29, 7], },
  ];

  function radialTex(inner, mid) {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(64, 64, 0, 64, 64, 62);
    r.addColorStop(0, inner); r.addColorStop(0.45, mid); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }
  function glowTex() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(128, 128, 0, 128, 128, 126);
    r.addColorStop(0, 'rgba(255,97,16,0.55)');
    r.addColorStop(0.4, 'rgba(255,97,16,0.22)');
    r.addColorStop(1, 'rgba(255,97,16,0)');
    g.fillStyle = r; g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  class Factory3D extends HTMLElement {
    static get observedAttributes() { return ['show-labels', 'flow-speed', 'auto-rotate', 'theme', 'show-flows', 'showlabels', 'flowspeed', 'autorotate', 'showflows']; }

    connectedCallback() {
      if (this._started) return;
      this._started = true;
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.position = this.style.position || 'relative';
      this._waitForThree();
    }
    attributeChangedCallback() { if (this._ready) this._sync(); }
    _attr(n) { const v = this.getAttribute(n); return v != null ? v : this.getAttribute(n.replace(/-/g, '')); }
    _attrBool(n, d) { const v = this._attr(n); return v == null ? d : v !== 'false'; }
    _attrNum(n, d) { const v = parseFloat(this._attr(n)); return isNaN(v) ? d : v; }

    _waitForThree() {
      if (window.THREE && THREE.OrbitControls && THREE.CSS2DRenderer) { this._build(); }
      else setTimeout(() => this._waitForThree(), 60);
    }

    _build() {
      const W = () => this.clientWidth || innerWidth, H = () => this.clientHeight || innerHeight;
      this._clock = new THREE.Clock();
      this._pick = []; this._flows = []; this._hover = null; this._sel = null;
      this._autoRotate = this._attrBool('auto-rotate', true);

      const scene = this._scene = new THREE.Scene();
      scene.background = new THREE.Color(0xFAFAF9);
      scene.fog = new THREE.Fog(0xFAFAF9, 70, 150);

      const camera = this._camera = new THREE.PerspectiveCamera(48, W() / H(), 0.1, 400);
      camera.position.set(-8, 32, 46);

      const renderer = this._renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
      renderer.setSize(W(), H());
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.domElement.style.cssText = 'position:absolute;inset:0;display:block';
      renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); cancelAnimationFrame(this._raf); }, false);
      renderer.domElement.addEventListener('webglcontextrestored', () => this._animate(), false);
      this.appendChild(renderer.domElement);
      renderer.setSize(W(), H());

      const labelRenderer = this._labelRenderer = new THREE.CSS2DRenderer();
      labelRenderer.setSize(W(), H());
      labelRenderer.domElement.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden';
      this.appendChild(labelRenderer.domElement);

      const controls = this._controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; controls.dampingFactor = 0.08;
      controls.target.set(0, 1, 0);
      controls.maxPolarAngle = Math.PI * 0.47;
      controls.minDistance = 16; controls.maxDistance = 110;

      // ---- lights: bright, soft, apple-studio ----
      const hemi = this._hemi = new THREE.HemisphereLight(0xFFFFFF, 0xE8E6E1, 0.85);
      scene.add(hemi);
      const key = this._key = new THREE.DirectionalLight(0xFFFFFF, 0.85);
      key.position.set(22, 42, 16); key.castShadow = true;
      key.shadow.mapSize.set(2048, 2048);
      key.shadow.camera.left = -50; key.shadow.camera.right = 50;
      key.shadow.camera.top = 50; key.shadow.camera.bottom = -50;
      key.shadow.camera.far = 140; key.shadow.bias = -0.0004; key.shadow.radius = 6;
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xF4EFE8, 0.18);
      fill.position.set(-28, 18, -22); scene.add(fill);

      // ---- floor ----
      const floor = this._floor = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 140),
        new THREE.MeshStandardMaterial({ color: 0xE3E2DD, roughness: 1, metalness: 0 }));
      floor.rotation.x = -Math.PI / 2; floor.position.y = -0.02; floor.receiveShadow = true;
      scene.add(floor);
      this._grid = null;

      // ---- zone plates ----
      this._plates = []; this._zoneEls = []; this._tubes = [];
      ZONES.forEach(z => {
        const w = z.max[0] - z.min[0], d = z.max[1] - z.min[1];
        const cx = (z.max[0] + z.min[0]) / 2, cz = (z.max[1] + z.min[1]) / 2;
        const plat = new THREE.Mesh(new THREE.BoxGeometry(w, 0.14, d),
          new THREE.MeshStandardMaterial({ color: 0xD8D7D1, roughness: 0.95 }));
        plat.position.set(cx, 0.07, cz); plat.receiveShadow = true; plat.castShadow = true; scene.add(plat);
        this._plates.push(plat);
        const el = document.createElement('div');
        el.textContent = z.name.toUpperCase();
        el.style.cssText = "font-family:'Space Grotesk',sans-serif;font-size:10px;font-weight:600;letter-spacing:1.6px;color:#B7B5B0;white-space:nowrap;pointer-events:none";
        const lo = new THREE.CSS2DObject(el);
        lo.position.set(cx, 0.35, z.min[1] - 0.9); scene.add(lo);
        el.dataset.role = 'zonelabel';
        this._zoneEls.push(el);
      });

      // ---- glow textures ----
      this._glowMap = glowTex();
      this._dotMap = radialTex('rgba(255,255,255,1)', 'rgba(255,255,255,0.75)');

      // ---- stations ----
      const byId = this._byId = {};
      STATIONS.forEach(s => {
        const g = new THREE.Group(); g.position.set(s.pos[0], 0.16, s.pos[2]);
        const [bw, bh, bd] = s.size;
        const bodyColor = s.dark ? 0x1B1A1E : 0xFFFFFF;
        const body = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd),
          new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.55, metalness: 0.05 }));
        body.position.y = bh / 2 + 0.14; body.castShadow = true; body.receiveShadow = true;
        g.add(body);
        // carbon plinth
        const plinth = new THREE.Mesh(new THREE.BoxGeometry(bw * 1.12, 0.14, bd * 1.12),
          new THREE.MeshStandardMaterial({ color: 0x111013, roughness: 0.7 }));
        plinth.position.y = 0.07; plinth.castShadow = true; plinth.receiveShadow = true; g.add(plinth);
        s._plinth = plinth;
        // roof detail
        const cap = new THREE.Mesh(new THREE.BoxGeometry(bw * 0.6, 0.5, bd * 0.6),
          new THREE.MeshStandardMaterial({ color: s.dark ? 0xF2F1EE : 0x111013, roughness: 0.6 }));
        cap.position.set(0, bh + 0.14 + 0.25, 0); cap.castShadow = true; g.add(cap);
        s._cap = cap;

        // ground glow (hover/selection)
        const glow = new THREE.Sprite(new THREE.SpriteMaterial({
          map: this._glowMap, transparent: true, opacity: 0, depthWrite: false }));
        glow.scale.set(Math.max(bw, bd) * 3.4, Math.max(bw, bd) * 3.4, 1);
        glow.position.y = 0.25; g.add(glow);

        // label pill
        const el = document.createElement('div');
        el.textContent = s.name;
        el.style.cssText = "font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:500;color:#111013;background:rgba(255,255,255,0.78);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid #E6E5E1;border-radius:999px;padding:3px 10px;white-space:nowrap;pointer-events:none;box-shadow:0 1px 4px rgba(17,16,19,0.06);transition:color 160ms,border-color 160ms";
        el.dataset.role = 'label';
        const lo = new THREE.CSS2DObject(el);
        lo.position.set(0, bh + 1.35, 0); g.add(lo);

        body.userData.station = s;
        plinth.userData.station = s; cap.userData.station = s;
        s._body = body; s._glow = glow; s._label = el; s._baseColor = bodyColor;
        this._pick.push(body, plinth, cap);
        byId[s.id] = s;
        scene.add(g);
      });

      // ---- flows ----
      this._flowObjs = [];
      FLOWS.forEach(([a, b, color, rate]) => {
        const pa = byId[a], pb = byId[b];
        const start = new THREE.Vector3(pa.pos[0], 1.1, pa.pos[2]);
        const end = new THREE.Vector3(pb.pos[0], 1.1, pb.pos[2]);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        mid.y += Math.min(4.5, 1.2 + dist * 0.14);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

        const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.045, 8, false),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.7 }));
        scene.add(tube);
        this._tubes.push(tube);
        // thicker tube shown only when this flow is highlighted
        const tubeHot = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.09, 8, false),
          new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.95 }));
        tubeHot.visible = false;
        scene.add(tubeHot);

        // direction arrow (cone) near the end of the curve
        const tip = curve.getPoint(0.86), tan = curve.getTangent(0.86);
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.7, 10),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 }));
        cone.position.copy(tip);
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan.normalize());
        scene.add(cone);

        const N = Math.round(dist * 1.3 * rate) + 6;
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
        const mat = new THREE.PointsMaterial({
          color, size: 0.75, map: this._dotMap, transparent: true, opacity: 1,
          sizeAttenuation: true, depthWrite: false, alphaTest: 0.05 });
        const pts = new THREE.Points(geo, mat); scene.add(pts);
        const offs = new Float32Array(N); for (let i = 0; i < N; i++) offs[i] = i / N;
        this._flows.push({ curve, geo, offs, N, speed: 0.09 + 0.06 * rate });
        this._flowObjs.push({ a, b, color, tube, tubeHot, cone, pts });
      });

      // ---- interaction ----
      this._ray = new THREE.Raycaster(); this._mouse = new THREE.Vector2();
      renderer.domElement.addEventListener('pointermove', e => this._onMove(e));
      renderer.domElement.addEventListener('click', e => this._onClick(e));
      this._ro = new ResizeObserver(() => this._onResize());
      this._ro.observe(this);
      this._cmdHandler = e => {
        const c = e.detail && e.detail.cmd;
        if (c === 'reset') { camera.position.set(-8, 32, 46); controls.target.set(0, 1, 0); }
        if (c === 'deselect') this._select(null);
        if (c === 'rotate') this._autoRotate = !!e.detail.value;
        if (c === 'filter') { this._filter = e.detail.value || null; this._tintFlows(this._sel); }
      };
      document.addEventListener('factory-cmd', this._cmdHandler);

      this._ready = true;
      this._sync();
      this.dispatchEvent(new CustomEvent('factory-ready', { bubbles: true }));
      this._animate();
    }

    _sync() {
      const show = this._attrBool('show-labels', true);
      this._labelRenderer.domElement.style.display = show ? '' : 'none';
      this._flowSpeed = this._attrNum('flow-speed', 1);
      this._autoRotate = this._attrBool('auto-rotate', this._autoRotate);
      const themeName = this.getAttribute('theme') === 'dark' ? 'dark' : 'light';
      if (themeName !== this._themeName) this._applyTheme(themeName);
      const showFlows = this._attrBool('show-flows', true);
      this._flowsVisible = showFlows;
      if (this._flowObjs) this._tintFlows(this._sel);
    }

    _applyTheme(name) {
      this._themeName = name;
      const th = this._th = THEMES[name];
      const scene = this._scene;
      scene.background.setHex(th.bg);
      scene.fog.color.setHex(th.bg);
      this._floor.material.color.setHex(th.floor);
      if (this._grid) { scene.remove(this._grid); this._grid.geometry.dispose(); this._grid.material.dispose(); }
      this._grid = new THREE.GridHelper(140, 70, th.grid1, th.grid2);
      this._grid.position.y = 0.005;
      scene.add(this._grid);
      this._plates.forEach(p => p.material.color.setHex(th.plate));
      this._zoneEls.forEach(el => { el.style.color = th.zoneLabel; });
      this._hemi.color.setHex(th.hemiSky); this._hemi.groundColor.setHex(th.hemiGround); this._hemi.intensity = th.hemiInt;
      this._key.intensity = th.keyInt;
      this._tubes.forEach(t => { t.material.opacity = 0.7; });
      STATIONS.forEach(s => {
        if (s !== this._sel) s._body.material.color.setHex(s.dark ? th.bodyDark : th.body);
        s._plinth.material.color.setHex(th.plinth);
        s._cap.material.color.setHex(s.dark ? th.capDark : th.cap);
        s._label.style.background = th.labelBg;
        s._label.style.boxShadow = name === 'dark' ? '0 1px 4px rgba(0,0,0,0.4)' : '0 1px 4px rgba(17,16,19,0.06)';
        if (s !== this._sel && s !== this._hover) {
          s._label.style.color = th.labelColor;
          s._label.style.borderColor = th.labelBorder;
        }
      });
    }

    _onResize() {
      const w = this.clientWidth || innerWidth, h = this.clientHeight || innerHeight;
      this._camera.aspect = w / h; this._camera.updateProjectionMatrix();
      this._renderer.setSize(w, h); this._labelRenderer.setSize(w, h);
    }

    _setPointer(e) {
      const r = this._renderer.domElement.getBoundingClientRect();
      this._mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this._mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    }
    _hit(e) {
      this._setPointer(e);
      this._ray.setFromCamera(this._mouse, this._camera);
      const h = this._ray.intersectObjects(this._pick)[0];
      return h ? h.object.userData.station : null;
    }
    _onMove(e) {
      const s = this._hit(e);
      if (this._hover && this._hover !== s) this._style(this._hover, this._hover === this._sel ? 'sel' : undefined);
      if (s) { this._style(s, s === this._sel ? 'sel' : 'hover'); this._renderer.domElement.style.cursor = 'pointer'; }
      else this._renderer.domElement.style.cursor = 'default';
      this._hover = s;
    }
    _onClick(e) {
      const s = this._hit(e);
      this._select(s);
    }
    _select(s) {
      if (this._sel && this._sel !== s) this._style(this._sel);
      this._sel = s;
      if (s) this._style(s, 'sel');
      this._tintFlows(s);
      this.dispatchEvent(new CustomEvent('factory-select', {
        bubbles: true, composed: true,
        detail: s ? { id: s.id, tag: s.tag, name: s.name, desc: s.desc, kv: s.kv } : null }));
    }
    _tintFlows(s) {
      if (!this._flowObjs) return;
      const filter = this._filter || null;
      this._flowObjs.forEach(f => {
        const shown = this._flowsVisible !== false && (!filter || f.color === filter);
        const hot = shown && s && (f.a === s.id || f.b === s.id);
        f.tubeHot.visible = !!hot;
        f.tube.visible = shown && !hot;
        f.cone.visible = shown;
        f.pts.visible = shown;
        f.cone.material.color.setHex(hot ? ACCENT : f.color);
        f.pts.material.color.setHex(hot ? ACCENT : f.color);
        f.tube.material.opacity = s ? 0.18 : 0.7;
        f.cone.material.opacity = hot ? 1 : (s ? 0.25 : 0.95);
        f.pts.material.opacity = hot ? 1 : (s ? 0.25 : 1);
        f.pts.material.size = hot ? 1.05 : 0.75;
      });
    }

    _style(s, mode) {
      const m = s._body.material;
      const th2 = this._th || THEMES.light;
      if (mode === 'sel') {
        m.color.setHex(ACCENT);
        m.emissive.setHex(ACCENT); m.emissiveIntensity = 0.45;
        s._glow.material.opacity = 0.9;
        s._body.scale.set(1.04, 1.04, 1.04);
        s._label.style.color = '#FF6110'; s._label.style.borderColor = '#FFA36B';
      } else if (mode === 'hover') {
        m.color.setHex(s.dark ? th2.bodyDark : th2.body);
        m.emissive.setHex(ACCENT); m.emissiveIntensity = s.dark ? 0.28 : 0.14;
        s._glow.material.opacity = 0.45;
        s._body.scale.set(1.03, 1.03, 1.03);
        s._label.style.color = '#FF6110'; s._label.style.borderColor = '#FFA36B';
      } else {
        const th = this._th || THEMES.light;
        m.color.setHex(s.dark ? th.bodyDark : th.body);
        m.emissive.setHex(0x000000); m.emissiveIntensity = 1;
        s._glow.material.opacity = 0;
        s._body.scale.set(1, 1, 1);
        s._label.style.color = th.labelColor; s._label.style.borderColor = th.labelBorder;
      }
    }

    _animate() {
      this._raf = requestAnimationFrame(() => this._animate());
      const dt = this._clock.getDelta();
      const t = this._clock.elapsedTime;
      const spd = this._flowSpeed == null ? 1 : this._flowSpeed;
      this._flows.forEach(f => {
        const pos = f.geo.attributes.position.array;
        for (let i = 0; i < f.N; i++) {
          f.offs[i] = (f.offs[i] + f.speed * spd * dt) % 1;
          const p = f.curve.getPoint(f.offs[i]);
          pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
        }
        f.geo.attributes.position.needsUpdate = true;
      });
      if (this._sel) this._sel._glow.material.opacity = 0.75 + 0.2 * Math.sin(t * 2.6);
      if (this._autoRotate) {
        const a = 0.1 * dt;
        const x = this._camera.position.x, z = this._camera.position.z;
        this._camera.position.x = x * Math.cos(a) - z * Math.sin(a);
        this._camera.position.z = x * Math.sin(a) + z * Math.cos(a);
      }
      this._controls.update();
      this._renderer.render(this._scene, this._camera);
      this._labelRenderer.render(this._scene, this._camera);
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      this._ro && this._ro.disconnect();
      document.removeEventListener('factory-cmd', this._cmdHandler);
    }
  }

  customElements.define('factory-3d', Factory3D);
})();
