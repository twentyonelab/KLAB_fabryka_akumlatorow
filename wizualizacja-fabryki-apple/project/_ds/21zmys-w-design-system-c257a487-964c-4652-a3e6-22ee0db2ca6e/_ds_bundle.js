/* @ds-bundle: {"format":3,"namespace":"Ds21zmysWDesignSystem_c257a4","components":[],"sourceHashes":{"ui_kits/marketing-site/App.jsx":"89aea40cf19e","ui_kits/marketing-site/Chrome.jsx":"d43eb60f3e8e","ui_kits/marketing-site/Sections.jsx":"68c47dd679a2","ui_kits/marketing-site/Tile.jsx":"9984b16c0454"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds21zmysWDesignSystem_c257a4 = window.Ds21zmysWDesignSystem_c257a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing-site/App.jsx
try { (() => {
const {
  useState
} = React;
const App = () => {
  const [page, setPage] = useState('Portfolio');
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('All');
  const [cookie, setCookie] = useState(true);
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return /*#__PURE__*/React.createElement("div", {
    className: "site",
    "data-screen-label": `01 ${page}`
  }, /*#__PURE__*/React.createElement(Nav, {
    active: page,
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement(RightRail, {
    theme: theme,
    setTheme: setTheme
  }), page === 'Portfolio' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Filters, {
    active: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement(Portfolio, {
    filter: filter
  })), page === 'Home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Audience, null)), page !== 'Home' && page !== 'Portfolio' && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '200px 56px 200px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(48px,6vw,88px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.02
    }
  }, page, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '48ch',
      margin: '24px auto 0',
      color: 'var(--fg-3)'
    }
  }, "Placeholder \u2014 not in source screenshots.")), cookie && /*#__PURE__*/React.createElement(Cookie, {
    onClose: () => setCookie(false)
  }), /*#__PURE__*/React.createElement(SearchFab, null));
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Chrome.jsx
try { (() => {
// Official brand logo (raster PNG provided by the brand team)
const BrandLogo = ({
  height = 32
}) => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/21-zmyslow-poziome-kolor.png",
  alt: "21 zmys\u0142\xF3w",
  style: {
    height,
    width: 'auto',
    display: 'block'
  }
});
const Icon = {
  search: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  arrow: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
};
const Nav = ({
  active,
  onNavigate
}) => {
  const items = ['Home', 'Portfolio', 'Usługi', 'Lab21™', 'Kontakt'];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo",
    onClick: () => onNavigate('Home')
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 56
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: `nav-link ${i === active ? 'active' : ''}`,
    onClick: () => onNavigate(i)
  }, i))));
};
const SunGlyph = () => /*#__PURE__*/React.createElement("svg", {
  className: "glyph",
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5 V 5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 19 V 21.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 12 H 5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 12 H 21.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.2 5.2 L 7 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 17 L 18.8 18.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.2 18.8 L 7 17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 7 L 18.8 5.2"
}));
const MoonGlyph = () => /*#__PURE__*/React.createElement("svg", {
  className: "glyph",
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 14 A 8 8 0 1 1 10 4 A 6.5 6.5 0 0 0 20 14 Z"
}));
const RightRail = ({
  theme,
  setTheme
}) => /*#__PURE__*/React.createElement("div", {
  className: "rail"
}, /*#__PURE__*/React.createElement("div", {
  className: "toggle",
  onClick: () => setTheme(theme === 'light' ? 'dark' : 'light')
}, /*#__PURE__*/React.createElement("div", {
  className: `toggle-seg ${theme === 'dark' ? 'active' : ''}`
}, /*#__PURE__*/React.createElement("span", {
  className: "lbl"
}, "Dark"), theme === 'dark' && /*#__PURE__*/React.createElement(MoonGlyph, null)), /*#__PURE__*/React.createElement("div", {
  className: `toggle-seg ${theme === 'light' ? 'active' : ''}`
}, /*#__PURE__*/React.createElement("span", {
  className: "lbl"
}, "Light"), theme === 'light' && /*#__PURE__*/React.createElement(SunGlyph, null))), /*#__PURE__*/React.createElement("div", {
  className: "in-mark"
}, "in"), /*#__PURE__*/React.createElement("span", {
  className: "dash"
}, "\u2014"), /*#__PURE__*/React.createElement("span", {
  className: "vtext"
}, "Follow Us"));
const Cookie = ({
  onClose
}) => /*#__PURE__*/React.createElement("div", {
  className: "cookie"
}, /*#__PURE__*/React.createElement("span", {
  className: "c-ico"
}, "\uD83C\uDF6A"), /*#__PURE__*/React.createElement("span", null, "Strona korzysta z plik\xF3w cookies. ", /*#__PURE__*/React.createElement("b", null, "Polityka prywatno\u015Bci")), /*#__PURE__*/React.createElement("span", {
  className: "close",
  onClick: onClose
}, "\xD7"));
const SearchFab = () => /*#__PURE__*/React.createElement("div", {
  className: "fab"
}, Icon.search);
Object.assign(window, {
  BrandLogo,
  Icon,
  Nav,
  RightRail,
  Cookie,
  SearchFab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "hero"
}, /*#__PURE__*/React.createElement("h1", null, "Mamy zmys\u0142 do", /*#__PURE__*/React.createElement("br", null), "robienia rzeczy inaczej", /*#__PURE__*/React.createElement("span", {
  className: "stop"
}, ".")), /*#__PURE__*/React.createElement("p", null, "Zobacz wybrane projekty z bran\u017C, kt\xF3re znamy.", /*#__PURE__*/React.createElement("br", null), "A je\u015Bli chcesz eksplorowa\u0107 z nami nowe obszary \u2014 jeste\u015Bmy gotowi."));
const FILTERS = [{
  k: 'All',
  n: '11'
}, {
  k: 'Czyste powietrze',
  n: '02'
}, {
  k: 'Innowacje 21',
  n: '03'
}, {
  k: 'Klimat wnętrz',
  n: '02'
}, {
  k: 'Mobilność',
  n: '05'
}, {
  k: 'Obieg zamknięty',
  n: '01'
}, {
  k: 'Odzysk energii',
  n: '04'
}];
const Filters = ({
  active,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "filters"
}, /*#__PURE__*/React.createElement("span", {
  className: "label"
}, "Filter by"), FILTERS.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: f.k
}, /*#__PURE__*/React.createElement("span", {
  className: `chip ${active === f.k ? 'active' : ''}`,
  onClick: () => onChange(f.k)
}, f.k, /*#__PURE__*/React.createElement("sup", null, f.n)), i < FILTERS.length - 1 && /*#__PURE__*/React.createElement("span", {
  className: "sep"
}, "/"))));
const PORTFOLIO = [{
  t: 'UniCore',
  tag: 'Klimat wnętrz, Odzysk energii',
  s: 'w-8',
  seed: 'unicore',
  label: 'UNI',
  cat: 'Klimat wnętrz'
}, {
  t: 'Rekuperator reQ F.350 ERV',
  tag: 'Czyste powietrze',
  s: 'w-4',
  seed: 'req',
  label: 'reQ',
  cat: 'Czyste powietrze'
}, {
  t: 'We\u2019re Studio',
  tag: 'Mobilność',
  s: 'w-3',
  seed: 'studio',
  label: 'VOL',
  cat: 'Mobilność'
}, {
  t: 'Living Shelf™',
  tag: 'Mobilność, Obieg zamknięty',
  s: 'w-4',
  seed: 'shelf',
  label: 'SHLF',
  cat: 'Obieg zamknięty'
}, {
  t: 'Zażółć gęślą jaźń',
  tag: 'Innowacje 21',
  s: 'w-4',
  seed: 'jazn',
  label: '21',
  cat: 'Innowacje 21'
}, {
  t: 'Aeromed Filter Stack',
  tag: 'Czyste powietrze, Odzysk energii',
  s: 'w-6',
  seed: 'aero',
  label: 'AERO',
  cat: 'Odzysk energii'
}, {
  t: 'HeatBack 400',
  tag: 'Odzysk energii',
  s: 'w-3',
  seed: 'hb400',
  label: 'HB',
  cat: 'Odzysk energii'
}, {
  t: 'Grid Loop',
  tag: 'Innowacje 21',
  s: 'w-3',
  seed: 'grid',
  label: 'GRID',
  cat: 'Innowacje 21'
}];
const Portfolio = ({
  filter
}) => {
  const items = PORTFOLIO.filter(p => filter === 'All' || p.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, items.map(p => /*#__PURE__*/React.createElement(Tile, {
    key: p.t,
    size: p.s,
    title: p.t,
    tags: p.tag,
    seed: p.seed,
    label: p.label
  })));
};
const Audience = () => /*#__PURE__*/React.createElement("section", {
  className: "audience"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "Dla kogo jeste\u015Bmy"), /*#__PURE__*/React.createElement("div", {
  className: "audience-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "audience-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "img",
  style: {
    background: 'linear-gradient(160deg,#9c9a93,#545049)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(60% 80% at 40% 60%, rgba(255,255,255,0.08), transparent 70%)'
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "audience-card inv"
}, /*#__PURE__*/React.createElement("div", {
  className: "img",
  style: {
    background: 'linear-gradient(160deg,#b0a298,#3a3439)'
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "overlay-text"
}, "Dajemy dost\u0119p do projekt\xF3w deep-tech o wysokim potencjale rynkowym w obszarze energetyki, HVAC, Smart Building i technologii \u015Brodowiskowych ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: '#FF6110'
  }
}, "\u2192"), " z potencja\u0142em skalowania i komercjalizacji IP."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "audience-caps"
}, "DLA PRODUCENT\xD3W"), /*#__PURE__*/React.createElement("div", {
  className: "audience-caps"
}, "DLA INWESTOR\xD3W")));
Object.assign(window, {
  Hero,
  Filters,
  Portfolio,
  Audience,
  FILTERS,
  PORTFOLIO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Tile.jsx
try { (() => {
// Placeholder imagery component — gradient tile with soft "product photograph" feel.
// Used where real brand photography would sit.

const Placeholder = ({
  seed,
  label
}) => {
  // Deterministic pseudo-random palette from seed
  const palettes = [['#3f4146', '#1c1b20'],
  // dark industrial
  ['#bfb8ad', '#7b7466'],
  // concrete warm
  ['#d8d5cf', '#a39f96'],
  // plaster
  ['#2b2a2e', '#4a4850'],
  // carbon
  ['#c7beb0', '#8a8275'],
  // limestone
  ['#5a6660', '#343a38'] // steel green
  ];
  const p = palettes[Math.abs(hash(seed || 'x')) % palettes.length];
  return /*#__PURE__*/React.createElement("div", {
    className: "tile-img",
    style: {
      background: `radial-gradient(120% 80% at 30% 30%, ${p[0]}, ${p[1]})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(60% 50% at 70% 70%, rgba(255,255,255,0.06), transparent 70%)`
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      color: 'rgba(255,255,255,0.18)',
      fontSize: 72,
      fontWeight: 800,
      letterSpacing: '-0.04em',
      whiteSpace: 'nowrap'
    }
  }, label));
};
function hash(s) {
  let h = 0;
  for (const c of s) h = h * 31 + c.charCodeAt(0) | 0;
  return h;
}
const Tile = ({
  size = 'w-4',
  title,
  tags,
  seed,
  label
}) => /*#__PURE__*/React.createElement("div", {
  className: `tile ${size}`
}, /*#__PURE__*/React.createElement(Placeholder, {
  seed: seed,
  label: label
}), /*#__PURE__*/React.createElement("div", {
  className: "tile-shade"
}), /*#__PURE__*/React.createElement("div", {
  className: "tile-cap"
}, /*#__PURE__*/React.createElement("div", {
  className: "title"
}, title), /*#__PURE__*/React.createElement("div", {
  className: "tags"
}, tags)));
Object.assign(window, {
  Placeholder,
  Tile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Tile.jsx", error: String((e && e.message) || e) }); }

})();
