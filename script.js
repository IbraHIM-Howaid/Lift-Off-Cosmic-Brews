gsap.registerPlugin(TextPlugin);

// ── DATA ──────────────────────────────────────────────────────────────────────

const INGREDIENTS = [
  // THE REFRESHER (Fruit + Sparkle)
  { id: 'solar', name: 'Zest Citrus',  color: '#ff8c42', icon: '🍋', glyph: '⎈', family: 'vivid', shape: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', speed: 0.5, tone: 523.25 },
  { id: 'comet', name: 'Sparkling Pop', color: '#a8ff78', icon: '🫧', glyph: '⌇', family: 'vivid', shape: 'polygon(100% 0, 0 100%, 100% 100%)', speed: 0.2, tone: 587.33 },

  // THE LATTE (Cream + Sweetener)
  { id: 'lunar', name: 'Moonlit Milk',   color: '#e8e0d0', icon: '☽', glyph: '⟁', family: 'pale',  shape: 'circle(50% at 50% 50%)', speed: 2.5, tone: 329.63 },
  { id: 'void',  name: 'Starry Syrup',    color: '#7b5ea7', icon: '★', glyph: '⏃', family: 'cool',  shape: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', speed: 0.4, tone: 349.23 },

  // THE BREW (Dark Roast + Topping)
  { id: 'pulsr', name: 'Espresso Bean', color: '#ff6eb4', icon: '☕', glyph: '⏁', family: 'vivid', shape: 'polygon(50% 0%, 0% 100%, 50% 100%)', speed: 0.05, tone: 659.25 },
  { id: 'nebul', name: 'Whipped Foam',  color: '#c872c8', icon: '☁️', glyph: '⏚', family: 'vivid', shape: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', speed: 0.8, tone: 440.00 },

  // THE TEA (Clean Water + Natural Bloom)
  { id: 'quark', name: 'Glowing Water', color: '#4a8aff', icon: '💧', glyph: '⍟', family: 'cool',  shape: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)', speed: 0.1, tone: 493.88 },
  { id: 'star',  name: 'Golden Nectar', color: '#f0c040', icon: '🌸', glyph: '⌖', family: 'warm',  shape: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', speed: 0.25, tone: 392.00 },

  // THE INFUSION (Heat + Ice)
  { id: 'nova',  name: 'Steeped Tea', color: '#e05555', icon: '🫖', glyph: '☍', family: 'warm',  shape: 'polygon(50% 0%, 0% 100%, 100% 100%)', speed: 0.15, tone: 261.63 },
  { id: 'cryo',  name: 'Crushed Ice',   color: '#4ab8c4', icon: '🧊', glyph: '⌬', family: 'cool',  shape: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', speed: 1.2, tone: 293.66 },
];

const RECIPES = [
  {
    id: 'r1',
    name: 'The Infusion',
    needs: ['nova', 'cryo', 'void'],
    fragments: 0, total: 3,
    lore: "A passenger from the cold rings orders it every shift. Something hot, something frozen, something to make the dark a little sweeter."
  },
  {
    id: 'r2',
    name: 'Comet Tail Latte',
    needs: ['lunar', 'star', 'comet'],
    fragments: 0, total: 3,
    lore: "Pale as moonlight, bright as a flower, with a fizz that hits the back of the throat. The mechanics in Bay 7 call it 'the one that sparkles.'"
  },
  {
    id: 'r3',
    name: 'Pulsar Punch',
    needs: ['quark', 'pulsr', 'solar'],
    fragments: 0, total: 3,
    lore: "Clear, dark, and sharp. The navigators won't touch anything that doesn't wake them up fast. Something wet, something bitter, something bright."
  },
  {
    id: 'r4',
    name: 'Cosmic Sunrise',
    needs: ['nebul', 'solar', 'star'],
    fragments: 0, total: 3,
    lore: "Built in layers — cloud-soft on top, citrus-sharp below, golden in the middle. Looks like a dawn nobody on this ship has seen in years."
  },
];

// ── CUSTOM ASSETS ─────────────────────────────────────────────────────────────
// Set background to an image URL/path to replace the default cafe scene.
// Map customer names to image URLs in characters to replace the drawn sprites.
//
// Examples:
//   CUSTOM_ASSETS.background = 'images/my-cafe.jpg';
//   CUSTOM_ASSETS.characters['Zyrex-7'] = 'images/zyrex.png';
const CUSTOM_ASSETS = {
  background: null,
  characters: {},
};

const CUSTOMERS = [
  { name: 'Zyrex-7',   planet: 'Planet Chromara', difficulty: 1, type: 'color',
    cipherSwaps: [['nova','cryo'], ['void','star']],
    mood: 'shy',     moodHintColor: '#6f8db4' },
  { name: 'Vel\'thi',  planet: 'Planet Chromara', difficulty: 1, type: 'color',
    cipherSwaps: [['lunar','solar'], ['nebul','comet']],
    mood: 'jovial',  moodHintColor: '#ff9b4a' },
  { name: 'Oq\'sinn',  planet: 'Planet Geometrix', difficulty: 2, type: 'shape',
    mood: 'precise', moodHintColor: '#7b5ea7' },
  { name: 'Threx',     planet: 'Planet Geometrix', difficulty: 2, type: 'shape',
    mood: 'gruff',   moodHintColor: '#c87a3a' },
  { name: 'Xal-9',     planet: 'Planet Glyphara',  difficulty: 3, type: 'glyph',
    mood: 'cryptic', moodHintColor: '#a8ff78' },
  { name: 'Vyrn\'oth', planet: 'Planet Glyphara',  difficulty: 3, type: 'glyph',
    mood: 'somber',  moodHintColor: '#7b5ea7' },
];

// ── STATE ─────────────────────────────────────────────────────────────────────

let state = {
  score: 0, lives: 3, served: 0, round: 1,
  currentOrder: [], playerOrder: [],
  patienceTimer: null, patienceTween: null, pulseTweens: [],
  knownIngredients: new Set(['nova', 'cryo', 'lunar']),
  gameActive: false,
  pendingSpawn: null, // Track timeout ID to prevent double-spawns
  // Per-customer learned color swaps: { 'Zyrex-7': Set of "nova|cryo" pair-keys discovered }
  learnedSwaps: {},
  // Glyph cipher: ingredient_id -> count of correct serves; reveals at >=1
  // Pre-seeded with the starter ingredients so the player has a foothold in Glyphara orders
  glyphServes: { nova: 1, cryo: 1, lunar: 1 },
  // Currently-shown customer (so reveal logic can reference them after serve)
  activeCustomer: null,
  // Drag-drop state: which orb slots have been confirmed correct this order
  confirmedOrbs: [],
  // For compound orbs: per-orb array of confirmed ingredient ids (so we know when an orb is full)
  compoundConfirmed: [],
  // First-contact tracking — show tutorial overlay only the first time you meet a species
  seenSpecies: new Set(),
  // Patience tween paused by overlay
  patiencePaused: false,
  // True between "customer exits" and "next customer entrance starts"
  inTransition: false,
  // Drip-feed glyph unlocks: counter increments on each correct order, fires every 3
  ordersSinceGlyphDrip: 0,
  // Recent ingredients used in correct orders (most recent first), used to bias drip selection
  recentIngredients: [],
};

// Look up what color/icon this customer "sees" for a true ingredient.
// If the ingredient is part of one of their cipher swap pairs, the partner's color is shown.
function displayedAs(cust, trueIng) {
  if (!cust || !cust.cipherSwaps) return trueIng;
  for (const [a, b] of cust.cipherSwaps) {
    if (trueIng.id === a) return INGREDIENTS.find(i => i.id === b);
    if (trueIng.id === b) return INGREDIENTS.find(i => i.id === a);
  }
  return trueIng;
}

function pairKey(a, b) {
  return [a, b].sort().join('|');
}

// Short label = the last word of the ingredient's full name (the cafe item itself).
// e.g., "Hot Espresso" → "Espresso"
function shortName(ing) {
  if (!ing || !ing.name) return '';
  const parts = ing.name.split(' ');
  return parts[parts.length - 1];
}

// Returns the swap-pair tuple [a, b] if dropped & expected are partners under this customer's cipher; else null.
function swapPairOf(cust, droppedId, expectedId) {
  if (!cust || !cust.cipherSwaps) return null;
  for (const [a, b] of cust.cipherSwaps) {
    if ((droppedId === a && expectedId === b) || (droppedId === b && expectedId === a)) {
      return [a, b];
    }
  }
  return null;
}

// First-contact intros — shown the first time you serve a customer of each species.
const SPECIES_INTROS = {
  Chromara: {
    title: 'First Contact: Chromara',
    body: 'Chromara species perceive color spectra differently than humans. The colors they show in their orders may not match the ingredients they want. Drag ingredients onto each orb to test your translation. Wrong drops cost time. Each Chromara individual has their own perception — your Codex will record what you learn about each one.',
  },
  Geometrix: {
    title: 'First Contact: Geometrix',
    body: 'Geometrix species communicate through compound geometric forms. Each orb displays multiple shapes layered together — every shape represents a separate ingredient that must be added to that orb. Drag both ingredients onto the orb to complete it. Wrong drops cost time.',
  },
  Glyphara: {
    title: 'First Contact: Glyphara',
    body: 'Glyphara species speak only in glyphs — pure symbol, no color, no shape. Each glyph radiates a faint aura that hints at the ingredient\'s color family: warm, cool, pale, or vivid. Use the aura to narrow down which ingredient a glyph represents, then drag to test. Serve a glyph correctly once and your Codex records it permanently. Wrong drops cost time.',
  },
};

function maybeShowSpeciesIntro(cust, onClose) {
  const species = (cust.planet || '').replace('Planet ', '');
  if (state.seenSpecies.has(species) || !SPECIES_INTROS[species]) {
    if (onClose) onClose();
    return;
  }
  state.seenSpecies.add(species);

  const intro = SPECIES_INTROS[species];
  const overlay = document.getElementById('tutorial-overlay');
  const stepIndicator = document.getElementById('tutorial-step-indicator');
  const titleEl = document.getElementById('tutorial-title');
  const textEl = document.getElementById('tutorial-text');
  const visualEl = document.getElementById('tutorial-visual');
  const nextBtn = document.getElementById('btn-tutorial-next');

  stepIndicator.textContent = '';
  titleEl.textContent = intro.title;
  textEl.textContent = intro.body;
  visualEl.innerHTML = '';
  nextBtn.textContent = 'Begin';

  // Pause patience while the overlay is up
  state.patiencePaused = true;
  if (state.patienceTween) state.patienceTween.pause();

  overlay.classList.add('active');
  overlay.classList.add('species-intro-mode');
  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4 });

  const closer = () => {
    nextBtn.removeEventListener('click', closer);
    gsap.to(overlay, { opacity: 0, duration: 0.3, onComplete: () => {
      overlay.classList.remove('active');
      overlay.classList.remove('species-intro-mode');
      state.patiencePaused = false;
      if (state.patienceTween) state.patienceTween.resume();
      if (onClose) onClose();
    }});
  };
  nextBtn.addEventListener('click', closer);
}

// ── STARFIELD ────────────────────────────────────────────────────────────────

function applyCustomAssets() {
  if (CUSTOM_ASSETS.background) {
    const scene = document.getElementById('cafe-scene');
    scene.style.backgroundImage = `url('${CUSTOM_ASSETS.background}')`;
    scene.style.backgroundSize = 'cover';
    scene.style.backgroundPosition = 'center';
  }
}

function cancelPendingSpawn() {
  if (state.pendingSpawn) {
    clearTimeout(state.pendingSpawn);
    state.pendingSpawn = null;
  }
}

function createStarfield() {
  const sf = document.getElementById('starfield') || (() => {
    const d = document.createElement('div');
    d.id = 'starfield';
    document.body.prepend(d);
    return d;
  })();
  sf.innerHTML = '';
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() < 0.8 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 1.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      opacity:${Math.random()*0.7+0.1};
    `;
    sf.appendChild(s);
    gsap.to(s, { opacity: Math.random() * 0.3 + 0.05, duration: Math.random() * 4 + 2, repeat: -1, yoyo: true, delay: Math.random() * 5, ease: 'sine.inOut' });
  }
}
createStarfield();

// ── VISIBILITY WATCHDOG ──────────────────────────────────────────────────────
// Belt-and-suspenders: every 250ms, verify the customer should be visible and force
// it back to opacity 1 if a stray killed/cancelled tween left it invisible.
setInterval(() => {
  if (!state.gameActive) return;
  if (state.inTransition) return;
  // Don't fight active overlays
  const unlock = document.getElementById('unlock-overlay');
  const tutorial = document.getElementById('tutorial-overlay');
  if (unlock && unlock.style.display === 'flex') return;
  if (unlock && unlock.classList.contains('active')) return;
  if (tutorial && tutorial.classList.contains('active')) return;

  const wrap = document.getElementById('customer-wrap');
  const tv = document.getElementById('tv-screen');
  if (!wrap || !tv) return;

  const wrapOpacity = parseFloat(getComputedStyle(wrap).opacity);
  const tvOpacity = parseFloat(getComputedStyle(tv).opacity);

  // If we're between rounds (no active customer set), don't enforce
  if (!state.activeCustomer) return;

  if (wrapOpacity < 0.95) {
    gsap.killTweensOf(wrap);
    gsap.set(wrap, { opacity: 1, y: 0, x: 0 });
  }
  if (tvOpacity < 0.95) {
    gsap.killTweensOf(tv);
    gsap.set(tv, { opacity: 1 });
  }
}, 250);

// ── DEADMAN'S SWITCH ─────────────────────────────────────────────────────────
// Recovery from stuck states: if the game thinks it's active but no patience timer
// is running, no overlay is up, and we're not in transition — we're stuck. Force-spawn.
let stuckCheckCount = 0;
setInterval(() => {
  if (!state.gameActive) { stuckCheckCount = 0; return; }
  if (state.inTransition) { stuckCheckCount = 0; return; }
  const unlock = document.getElementById('unlock-overlay');
  const tutorial = document.getElementById('tutorial-overlay');
  if (unlock && unlock.style.display === 'flex') { stuckCheckCount = 0; return; }
  if (tutorial && tutorial.classList.contains('active')) { stuckCheckCount = 0; return; }

  // Patience tween should be running OR we should be in the entrance/order-intro phase.
  // The patience fill having scaleX === 1 with no active tween is a stuck signal.
  const fill = document.getElementById('patience-fill');
  if (!fill) return;
  const hasPatience = state.patienceTween && state.patienceTween.isActive && state.patienceTween.isActive();

  if (!hasPatience) {
    stuckCheckCount += 1;
    if (stuckCheckCount >= 4) { // ~4 seconds of nothing happening
      console.warn('[deadman] Spawn pipeline appears stuck — forcing recovery.');
      stuckCheckCount = 0;
      // Force a clean spawn
      state.inTransition = false;
      cancelPendingSpawn();
      gsap.killTweensOf('#customer-wrap');
      gsap.killTweensOf('#tv-screen');
      gsap.killTweensOf('#order-seq .order-orb');
      spawnCustomer();
    }
  } else {
    stuckCheckCount = 0;
  }
}, 1000);

// ── TITLE SCREEN ─────────────────────────────────────────────────────────────

function animateTitle() {
  const tl = gsap.timeline({ delay: .3 });
  tl.to('.title-eyebrow', { opacity: 1, y: 0, duration: .8, ease: 'power2.out' })
    .to('.title-word', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=.3')
    .to('.title-divider', { opacity: 1, scaleX: 1, duration: .6, ease: 'power2.out' }, '-=.4')
    .to('.title-sub', { opacity: 1, y: 0, duration: .7, ease: 'power2.out' }, '-=.2')
    .to('.title-desc', { opacity: 1, y: 0, duration: .7, ease: 'power2.out' }, '-=.3')
    .to('.btn-start', { opacity: 1, y: 0, duration: .6, ease: 'power2.out' }, '-=.2');
}
animateTitle();

// ── BUILD UI ──────────────────────────────────────────────────────────────────

function buildIngredientGrid() {
  const grid = document.getElementById('ingredient-grid');
  grid.innerHTML = '';
  INGREDIENTS.forEach(ing => {
    const btn = document.createElement('button');
    btn.className = 'ing-btn';
    btn.dataset.id = ing.id;
    btn.draggable = true;
    btn.innerHTML = `
      <div class="ing-dot" style="background:${ing.color}">${ing.icon}</div>
      <div class="ing-name">${ing.name}</div>
    `;
    btn.addEventListener('dragstart', e => {
      if (!state.gameActive || state.patiencePaused) { e.preventDefault(); return; }
      e.dataTransfer.setData('text/plain', ing.id);
      e.dataTransfer.effectAllowed = 'copy';
      btn.classList.add('dragging');
    });
    btn.addEventListener('dragend', () => btn.classList.remove('dragging'));
    grid.appendChild(btn);
  });
}

function buildCodex() {
  const grid = document.getElementById('codex-grid');
  grid.innerHTML = '';
  INGREDIENTS.forEach(ing => {
    const isKnown = state.knownIngredients.has(ing.id);
    // Glyph is "decoded" if served correctly to a Glyphara alien at least once
    const glyphDecoded = (state.glyphServes[ing.id] || 0) >= 1;
    const el = document.createElement('div');
    el.className = 'codex-entry' + (isKnown ? ' known' : '');
    el.id = 'codex-' + ing.id;
    const glyphPart = isKnown && glyphDecoded
      ? `<div class="codex-glyph" title="Glyphara cipher decoded">${ing.glyph}</div>`
      : (isKnown ? `<div class="codex-glyph locked" title="Glyphara cipher unknown">?</div>` : '');
    el.innerHTML = `
      <div class="codex-dot" style="background:${isKnown ? ing.color : '#333'}">${isKnown ? ing.icon : '?'}</div>
      <div class="codex-label">${isKnown ? ing.name : '???'}</div>
      ${isKnown ? `<div class="codex-shape" style="clip-path:${ing.shape};background:${ing.color}"></div>` : ''}
      ${glyphPart}
    `;
    grid.appendChild(el);
  });

  // Below the codex grid, show discovered Chromara cipher swaps
  const swapsContainer = document.getElementById('codex-swaps') || (() => {
    const c = document.createElement('div');
    c.id = 'codex-swaps';
    c.className = 'codex-swaps';
    grid.parentElement.appendChild(c);
    return c;
  })();
  swapsContainer.innerHTML = '';
  Object.keys(state.learnedSwaps).forEach(custName => {
    const cust = CUSTOMERS.find(c => c.name === custName);
    if (!cust || !cust.cipherSwaps) return;
    const learned = state.learnedSwaps[custName];
    cust.cipherSwaps.forEach(([a, b]) => {
      if (learned.has(pairKey(a, b))) {
        const ingA = INGREDIENTS.find(i => i.id === a);
        const ingB = INGREDIENTS.find(i => i.id === b);
        const row = document.createElement('div');
        row.className = 'codex-swap-row';
        row.innerHTML = `
          <span class="codex-swap-name">${custName}</span>
          <span class="codex-swap-dot" style="background:${ingA.color}">${ingA.icon}</span>
          <span class="codex-swap-arrow">⇄</span>
          <span class="codex-swap-dot" style="background:${ingB.color}">${ingB.icon}</span>
        `;
        swapsContainer.appendChild(row);
      }
    });
  });
}

function buildRecipeList() {
  const list = document.getElementById('recipe-list');
  list.innerHTML = '';
  RECIPES.forEach(r => {
    const el = document.createElement('div');
    el.className = 'recipe-item' + (r.fragments >= r.total ? ' discovered' : '');
    el.id = 'recipe-' + r.id;
    const color = INGREDIENTS.find(i => i.id === r.needs[0])?.color || '#888';
    el.innerHTML = `
      <div class="recipe-dot" style="background:${color}"></div>
      <span>${r.fragments >= r.total ? r.name : `??? (${r.fragments}/${r.total})`}</span>
    `;
    gsap.set(el, { opacity: 0 });
    list.appendChild(el);
    gsap.to(el, { opacity: 1, delay: 0.1, duration: .4 });
  });
}

// ── CUSTOMER SVG GENERATOR ───────────────────────────────────────────────────

// Informative mood hints — given the order's true ingredients, generate a hint
// that narrows the search without naming the answer outright.
const FAMILY_LABEL = {
  warm:  'something warm-toned',
  cool:  'something cold or shadowed',
  pale:  'something pale, like moonlight',
  vivid: 'a bright, vivid hue',
};

function generateMoodHint(cust, order) {
  if (!cust || !cust.mood || !order || !order.length) return '';
  // Pick a random ingredient from the order to base the hint on
  const ing = order[Math.floor(Math.random() * order.length)];
  const familyLabel = FAMILY_LABEL[ing.family] || 'an ingredient';

  const phrases = {
    shy: [
      `*looks longingly at ${familyLabel}*`,
      `*its skin shifts to match ${familyLabel}*`,
    ],
    jovial: [
      `*beams brightly at the thought of ${familyLabel}*`,
      `*gestures eagerly toward ${familyLabel}*`,
    ],
    precise: [
      `*draws a precise glyph in the air, reminiscent of ${ing.name}*`,
      `*its eyes flicker through the spectrum, settling on ${familyLabel}*`,
    ],
    gruff: [
      `*grunts and points vaguely at ${familyLabel}*`,
      `*taps the counter near ${familyLabel}*`,
    ],
    cryptic: [
      `*its surface refracts hints of ${familyLabel}*`,
      `*emits a subharmonic that resonates with ${ing.name}*`,
    ],
    somber: [
      `*emits a low frequency reminiscent of ${ing.name}*`,
      `*stares into ${familyLabel}, lost in memory*`,
    ],
  };
  const moodSet = phrases[cust.mood] || [];
  if (!moodSet.length) return '';
  return moodSet[Math.floor(Math.random() * moodSet.length)];
}

function applyMoodAura(cust) {
  const wrap = document.getElementById('customer-wrap');
  if (!wrap) return;
  const color = (cust && cust.moodHintColor) || 'rgba(255,255,255,0.2)';
  // Subtle radial glow — placed via boxShadow so it sits behind the SVG/img
  wrap.style.filter = `drop-shadow(0 0 18px ${color}55)`;
}

function drawCustomer(svg, custName, difficulty) {
  const imgEl = document.getElementById('customer-img');
  const customImg = CUSTOM_ASSETS.characters[custName];
  if (customImg && imgEl) {
    imgEl.src = customImg;
    imgEl.style.display = 'block';
    svg.style.display = 'none';
    return;
  }
  if (imgEl) imgEl.style.display = 'none';
  svg.style.display = '';

  const colors = ['#4ab8c4','#7b5ea7','#c8a96e','#e05555','#a8ff78'];
  const bodyColor = colors[difficulty % colors.length];
  const eyeColor = colors[(difficulty + 2) % colors.length];

  const shapes = [
    `<ellipse cx="50" cy="35" rx="22" ry="22" fill="${bodyColor}" opacity=".85"/>`,
    `<path d="M28 72 Q30 55 50 52 Q70 55 72 72 L68 90 Q50 95 32 90 Z" fill="${bodyColor}" opacity=".7"/>`,
    `<circle cx="43" cy="33" r="5" fill="${eyeColor}"/><circle cx="57" cy="33" r="5" fill="${eyeColor}"/>`,
    `<circle cx="43" cy="33" r="2.5" fill="#000"/><circle cx="57" cy="33" r="2.5" fill="#000"/>`,
    `<ellipse cx="50" cy="35" rx="26" ry="26" fill="none" stroke="${bodyColor}" stroke-width="1.5" opacity=".3"/>`,
    difficulty >= 2 ? `<line x1="50" y1="13" x2="50" y2="4" stroke="${bodyColor}" stroke-width="2"/><circle cx="50" cy="3" r="3" fill="${eyeColor}"/>` : '',
    difficulty >= 3 ? `<line x1="28" y1="62" x2="15" y2="55" stroke="${bodyColor}" stroke-width="3" stroke-linecap="round"/><line x1="72" y1="62" x2="85" y2="55" stroke="${bodyColor}" stroke-width="3" stroke-linecap="round"/>` : '',
  ];
  svg.innerHTML = shapes.join('');
}

// ── SPAWN CUSTOMER ────────────────────────────────────────────────────────────

function spawnCustomer() {
  console.log('[spawn] called, gameActive=', state.gameActive, 'inTransition=', state.inTransition);
  cancelPendingSpawn(); // Cancel any scheduled spawn that might interrupt
  if (!state.gameActive) {
    console.log('[spawn] BAILED: gameActive is false');
    return;
  }
  state.inTransition = true; // Block watchdog while we set up the new customer
  state.pulseTweens.forEach(t => t.kill());
  state.pulseTweens = [];

  // Kill any in-flight exit animations and reset transform; opacity is set explicitly below.
  gsap.killTweensOf('#customer-wrap');
  gsap.killTweensOf('#tv-screen');
  gsap.set('#customer-wrap', { x: 0, y: 30 });

  // Reset serve-ready visual state
  document.getElementById('btn-serve').classList.remove('ready');

  const diff = Math.min(Math.floor(state.served / 3) + 1, 3);
  const pool = CUSTOMERS.filter(c => c.difficulty <= diff);
  const cust = pool[Math.floor(Math.random() * pool.length)];

  const orderLen = diff === 1 ? 2 : diff === 2 ? 3 : 4;
  const order = [];

  // Build a pool of known ingredient OBJECTS (not just ids), filtering out any orphan ids
  const knownIds = [...state.knownIngredients];
  const knownPool = knownIds
    .map(id => INGREDIENTS.find(i => i.id === id))
    .filter(Boolean);

  // Diagnostic: warn if knownIngredients has stale/invalid ids or is empty
  if (knownPool.length !== knownIds.length) {
    console.warn('[spawn] knownIngredients contains invalid ids:', knownIds, '→ valid:', knownPool.map(i => i.id));
  }
  if (knownIds.length === 0) {
    console.warn('[spawn] knownIngredients was EMPTY at spawn time — falling back to seed list');
  }

  // Defensive fallback: if for any reason knownPool is empty, use the seed list
  const seedPool = knownPool.length > 0
    ? knownPool
    : INGREDIENTS.filter(i => ['nova','cryo','lunar'].includes(i.id));

  // Seed with one known ingredient
  order.push(seedPool[Math.floor(Math.random() * seedPool.length)]);

  // Fill the rest from all ingredients, avoiding duplicates
  let safety = 50; // prevent infinite loop in pathological state
  while (order.length < orderLen && safety-- > 0) {
    const ing = INGREDIENTS[Math.floor(Math.random() * INGREDIENTS.length)];
    if (!ing) continue;
    if (!order.some(o => o && o.id === ing.id)) order.push(ing);
  }

  // Final sanity: drop any undefined entries that snuck in
  for (let i = order.length - 1; i >= 0; i--) {
    if (!order[i]) order.splice(i, 1);
  }
  order.sort(() => Math.random() - .5);

  state.currentOrder = order.map(i => i.id);
  state.playerOrder = [];
  state.activeCustomer = cust;
  // Compound-shape pairs for Geometrix: maps slot index -> pair of ingredient ids per orb
  state.compoundOrbs = null;
  if (cust.type === 'shape') {
    // Group order into compound orbs of 2 ingredients each (with last orb possibly being a single)
    const groups = [];
    for (let i = 0; i < order.length; i += 2) {
      groups.push(order.slice(i, i + 2));
    }
    state.compoundOrbs = groups;
  }

  const svg = document.getElementById('customer-svg');
  drawCustomer(svg, cust.name, cust.difficulty);
  document.getElementById('customer-planet').textContent = `From ${cust.planet}`;
  document.getElementById('customer-name').textContent = cust.name;
  applyMoodAura(cust);

  // Informative mood hints (~30% of orders): hint references the order's true ingredients
  const nameEl = document.getElementById('customer-name');
  let hintEl = document.getElementById('customer-mood-hint');
  if (!hintEl) {
    hintEl = document.createElement('div');
    hintEl.id = 'customer-mood-hint';
    hintEl.className = 'customer-mood-hint';
    nameEl.parentElement.appendChild(hintEl);
  }
  hintEl.textContent = '';
  if (cust.mood && Math.random() < 0.3) {
    const hint = generateMoodHint(cust, order);
    if (hint) {
      hintEl.textContent = hint;
      gsap.fromTo(hintEl, { opacity: 0, y: 4 }, { opacity: 0.85, y: 0, duration: 0.6, delay: 0.4 });
    }
  }

  // Build order Sequence based on Alien Type (Translation Mechanic)
  const seq = document.getElementById('order-seq');
  seq.innerHTML = '';
  document.getElementById('btn-replay-sound').style.display = 'none';

  // Reset confirmation tracking for the new order
  if (state.compoundOrbs) {
    // For compound orbs, each orb has multiple ingredients; track confirmed ids per orb
    state.compoundConfirmed = state.compoundOrbs.map(() => []);
    state.confirmedOrbs = state.compoundOrbs.map(() => false);
    state.eliminations = state.compoundOrbs.map(() => new Set());
  } else {
    state.confirmedOrbs = order.map(() => false);
    state.compoundConfirmed = [];
    state.eliminations = order.map(() => new Set());
  }

  if (cust.type === 'shape' && state.compoundOrbs) {
    // Render one orb per compound group, overlaying both ingredient shapes
    state.compoundOrbs.forEach((group, idx) => {
      const orb = document.createElement('div');
      orb.className = 'order-orb compound-orb';
      orb.dataset.orbIndex = idx;
      orb.style.background = 'transparent';
      orb.style.border = 'none';
      // Layered shape silhouettes — one inset slightly so both are visible
      const inner = group.map((ing, i) => {
        const inset = i === 0 ? '0' : '20%';
        const opacity = i === 0 ? '0.95' : '0.55';
        return `<div class="orb-shape-layer" data-shape-idx="${i}" style="position:absolute;inset:${inset};background:var(--text);clip-path:${ing.shape};opacity:${opacity}"></div>`;
      }).join('');
      orb.innerHTML = `<div class="orb-inner" style="position:relative;width:100%;height:100%">${inner}</div><span class="orb-num">${idx+1}</span><div class="orb-confirm-badge"></div>`;
      attachDropHandlers(orb, idx);
      seq.appendChild(orb);
    });
  } else {
    order.forEach((ing, idx) => {
      const orb = document.createElement('div');
      orb.className = 'order-orb';
      orb.dataset.orbIndex = idx;

      if (cust.type === 'color') {
        // Show the ingredient AS THIS CUSTOMER SEES IT (cipher applied)
        const shown = displayedAs(cust, ing);
        orb.style.background = shown.color;
        orb.style.color = shown.color;
        orb.innerHTML = `<span class="orb-icon" style="color:var(--void)">${shown.icon}</span><span class="orb-num">${idx+1}</span><div class="orb-confirm-badge"></div>`;

        // Option 6: if the player has already learned the swap pair this orb belongs to,
        // surface a small ghost icon of the TRUE ingredient in the corner.
        const learnedForCust = state.learnedSwaps[cust.name];
        if (learnedForCust && shown.id !== ing.id) {
          // Find which swap pair this true ingredient belongs to
          const pair = cust.cipherSwaps.find(([a, b]) => a === ing.id || b === ing.id);
          if (pair && learnedForCust.has(pairKey(pair[0], pair[1]))) {
            const ghost = document.createElement('div');
            ghost.className = 'orb-ghost-true';
            ghost.style.color = ing.color;
            ghost.textContent = ing.icon;
            ghost.title = `Known: actually ${ing.name}`;
            orb.appendChild(ghost);
          }
        }

        // Translation tell — ~30% chance to briefly flicker the TRUE color through
        if (shown.id !== ing.id && Math.random() < 0.3) {
          orb.classList.add('translation-tell');
          // Stash true color on the orb for the CSS animation via inline custom prop
          orb.style.setProperty('--tell-true-color', ing.color);
          // Remove the class after the animation so it doesn't re-trigger
          setTimeout(() => orb.classList.remove('translation-tell'), 1200);
        }
      }
      else if (cust.type === 'glyph') {
        // Show only the glyph — cipher-coded. Player must decode.
        orb.classList.add('glyph-orb');
        // If the glyph hasn't been decoded yet, give it a faint family-colored aura
        // as a hint about the ingredient's color family (warm/cool/pale/vivid).
        const glyphDecoded = (state.glyphServes[ing.id] || 0) >= 1;
        if (!glyphDecoded) {
          orb.classList.add('glyph-orb-unknown');
          orb.classList.add(`glyph-family-${ing.family}`);
          orb.title = 'Unknown glyph — the aura hints at its color family';
        }
        orb.innerHTML = `<span class="orb-glyph">${ing.glyph}</span><span class="orb-num">${idx+1}</span><div class="orb-confirm-badge"></div>`;
      }

      attachDropHandlers(orb, idx);
      seq.appendChild(orb);
    });
  }

  updateOrderTray();

  // Hard-set opacity to 1 immediately (no animation that could be killed mid-flight),
  // then animate y/x for a softer entrance look. Opacity is the critical visibility property.
  gsap.set('#customer-wrap', { opacity: 1, y: 30, x: 0 });
  gsap.set('#tv-screen', { opacity: 1 });

  // Triple-redundant visibility enforcement — re-set opacity over the next few frames
  // in case anything else messes with these elements during the spawn flow.
  requestAnimationFrame(() => {
    gsap.set('#customer-wrap', { opacity: 1, x: 0 });
    gsap.set('#tv-screen', { opacity: 1 });
  });
  setTimeout(() => {
    if (state.gameActive && !state.inTransition) {
      gsap.set('#customer-wrap', { opacity: 1, x: 0 });
      gsap.set('#tv-screen', { opacity: 1 });
    }
  }, 100);

  const tl = gsap.timeline();
  tl.fromTo('#customer-wrap',
        { y: 30 },
        { y: 0, duration: .6, ease: 'back.out(1.2)',
          onComplete: () => {
            // Final safety set
            gsap.set('#customer-wrap', { opacity: 1, y: 0, x: 0 });
            gsap.set('#tv-screen', { opacity: 1 });
            state.inTransition = false;
          } });

  playOrderSequence(order, cust.type, () => {
    maybeShowSpeciesIntro(cust, () => startPatience());
  });
}

function playOrderSequence(order, type, cb) {
  const seq = document.getElementById('order-seq');
  const orbs = seq.querySelectorAll('.order-orb');

  // Kill any prior orb-intro timeline so its callback doesn't fire on the wrong customer
  if (state.orbIntroTimeline) {
    state.orbIntroTimeline.kill();
    state.orbIntroTimeline = null;
  }

  const tl = gsap.timeline({ onComplete: () => {
    state.orbIntroTimeline = null;
    if (cb) cb();
  }});
  state.orbIntroTimeline = tl;

  order.forEach((_, i) => {
    tl.to(orbs[i], { opacity: 1, scale: 1.15, duration: .3, ease: 'power2.out' })
      .to(orbs[i], { scale: 1, duration: .2, ease: 'power2.in' })
      .to({}, { duration: .1 });
  });

  tl.to(orbs, { opacity: 1, duration: .4 });
}

// ── DRAG-DROP DECODING ────────────────────────────────────────────────────────

function attachDropHandlers(orb, orbIndex) {
  orb.addEventListener('dragover', e => {
    if (!state.gameActive || state.patiencePaused) return;
    if (state.confirmedOrbs[orbIndex]) return; // already locked
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    orb.classList.add('drag-over');
  });
  orb.addEventListener('dragleave', () => orb.classList.remove('drag-over'));
  orb.addEventListener('drop', e => {
    e.preventDefault();
    orb.classList.remove('drag-over');
    if (!state.gameActive || state.patiencePaused) return;
    const ingId = e.dataTransfer.getData('text/plain');
    if (!ingId) return;
    attemptDrop(orbIndex, ingId, orb);
  });
}

function attemptDrop(orbIndex, ingId, orbEl) {
  if (state.confirmedOrbs[orbIndex]) return;

  let isCorrect = false;
  let expectedIds = []; // for compound, both; for single, the one true ingredient

  if (state.compoundOrbs) {
    // For compound orbs: orb is correct when both ingredients in the group are dropped
    const group = state.compoundOrbs[orbIndex];
    expectedIds = group.map(g => g.id);
    const alreadyDropped = state.compoundConfirmed[orbIndex];
    if (expectedIds.includes(ingId) && !alreadyDropped.includes(ingId)) {
      alreadyDropped.push(ingId);
      // Reveal the matching shape layer in its true color
      const layerIdx = expectedIds.indexOf(ingId);
      const layer = orbEl.querySelector(`[data-shape-idx="${layerIdx}"]`);
      if (layer) {
        const ing = INGREDIENTS.find(i => i.id === ingId);
        layer.style.background = ing.color;
        layer.style.opacity = '1';
        gsap.fromTo(layer, { scale: 0.9 }, { scale: 1, duration: .3, ease: 'back.out(2)' });
      }
      if (alreadyDropped.length === expectedIds.length) {
        isCorrect = true;
      } else {
        // Partial progress, no penalty, not yet confirmed
        return;
      }
    } else if (!expectedIds.includes(ingId)) {
      // Wrong ingredient on compound orb — pass first unfilled expected id as "expected"
      const remaining = expectedIds.filter(id => !alreadyDropped.includes(id));
      onWrongDrop(orbEl, orbIndex, ingId, remaining[0]);
      return;
    } else {
      // Already-dropped duplicate — soft shake, no penalty
      gsap.fromTo(orbEl, { x: -3 }, { x: 0, duration: .2, ease: 'elastic.out(1,0.5)' });
      return;
    }
  } else {
    // Single-ingredient orb: ingId must match the true ingredient at this slot
    expectedIds = [state.currentOrder[orbIndex]];
    isCorrect = state.currentOrder[orbIndex] === ingId;
  }

  if (isCorrect) {
    confirmOrb(orbIndex, orbEl);
  } else {
    onWrongDrop(orbEl, orbIndex, ingId, expectedIds[0]);
  }
}

function confirmOrb(orbIndex, orbEl) {
  state.confirmedOrbs[orbIndex] = true;
  // Sync player order so serve-validation still works
  if (state.compoundOrbs) {
    state.playerOrder = [];
    state.compoundConfirmed.forEach((arr, i) => {
      if (state.confirmedOrbs[i]) state.playerOrder.push(...arr);
    });
  } else {
    state.playerOrder[orbIndex] = state.currentOrder[orbIndex];
  }

  orbEl.classList.add('confirmed');
  gsap.fromTo(orbEl, { scale: 1.2 }, { scale: 1, duration: .35, ease: 'back.out(2)' });
  const badge = orbEl.querySelector('.orb-confirm-badge');
  if (badge) {
    gsap.fromTo(badge,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: .35, ease: 'back.out(2.5)' });
  }

  updateOrderTray();

  if (state.confirmedOrbs.every(c => c)) {
    document.getElementById('btn-serve').classList.add('ready');
  }
}

function onWrongDrop(orbEl, orbIndex, droppedId, expectedId) {
  // Determine if this is a swap-pair near-miss (Option 1: amber flash)
  const cust = state.activeCustomer;
  const swapPair = swapPairOf(cust, droppedId, expectedId);

  // 2-second patience penalty
  if (state.patienceTween) {
    const totalDuration = state.patienceTween.duration();
    const progress = state.patienceTween.progress();
    const remaining = totalDuration * (1 - progress);
    const newRemaining = Math.max(remaining - 2, 0.5);
    state.patienceTween.kill();
    const fill = document.getElementById('patience-fill');
    state.patienceTween = gsap.to(fill, {
      scaleX: 0,
      duration: newRemaining,
      ease: 'none',
      onComplete: () => {
        if (!state.gameActive) return;
        loseLife('Too slow!');
      }
    });
    // Visual flash on patience bar
    gsap.fromTo(fill,
      { backgroundColor: '#ff6b6b' },
      { backgroundColor: '', duration: 0.6, clearProps: 'backgroundColor' });
  }

  gsap.fromTo(orbEl, { x: -8 }, { x: 0, duration: .4, ease: 'elastic.out(1,0.3)' });
  if (swapPair) {
    // Amber: "you're in the right swap-pair neighborhood"
    orbEl.classList.add('reject-amber');
    setTimeout(() => orbEl.classList.remove('reject-amber'), 700);
    showFeedback('NEAR — same cipher pair', 'amber');
  } else {
    orbEl.classList.add('reject');
    setTimeout(() => orbEl.classList.remove('reject'), 400);
    showFeedback('— 2s', 'wrong');
  }

  // Option 2: mark this ingredient as eliminated for THIS orb
  recordElimination(orbEl, orbIndex, droppedId);
}

// Track and visually display ingredients eliminated on a per-orb basis.
function recordElimination(orbEl, orbIndex, ingId) {
  if (!state.eliminations) state.eliminations = [];
  if (!state.eliminations[orbIndex]) state.eliminations[orbIndex] = new Set();
  if (state.eliminations[orbIndex].has(ingId)) return; // already shown
  state.eliminations[orbIndex].add(ingId);

  let row = orbEl.querySelector('.orb-eliminations');
  if (!row) {
    row = document.createElement('div');
    row.className = 'orb-eliminations';
    orbEl.appendChild(row);
  }
  const ing = INGREDIENTS.find(i => i.id === ingId);
  if (!ing) return;
  const tag = document.createElement('span');
  tag.className = 'orb-elim-tag';
  tag.style.background = ing.color;
  tag.innerHTML = `<span class="elim-x">×</span>`;
  row.appendChild(tag);
  gsap.fromTo(tag, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .3, ease: 'back.out(2)' });
}

// ── PATIENCE TIMER ────────────────────────────────────────────────────────────

function startPatience() {
  // Kill any prior patience tween — multiple concurrent tweens were causing stale "too slow" lives lost
  if (state.patienceTween) {
    state.patienceTween.kill();
    state.patienceTween = null;
  }
  // Don't start patience if the game isn't active or we're in a transition
  if (!state.gameActive || state.inTransition) return;

  const duration = Math.max(35 - state.round, 18); // Generous baseline; floor at 18s
  const fill = document.getElementById('patience-fill');
  gsap.set(fill, { scaleX: 1 });
  state.patienceTween = gsap.to(fill, {
    scaleX: 0,
    duration: duration,
    ease: 'none',
    onComplete: () => {
      if (!state.gameActive) return;
      loseLife('Too slow!');
    }
  });
}

function stopPatience() {
  if (state.patienceTween) {
    state.patienceTween.kill();
    state.patienceTween = null;
  }
}

// ── ORDER LOGIC ───────────────────────────────────────────────────────────────

function selectIngredient(ing) {
  if (!state.gameActive || state.playerOrder.length >= state.currentOrder.length) return;
  state.playerOrder.push(ing.id);
  updateOrderTray();
  const btn = document.querySelector(`[data-id="${ing.id}"]`);
  gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: .25, ease: 'back.out(2)' });
}

function updateOrderTray() {
  const tray = document.getElementById('order-tray');
  tray.innerHTML = '';
  const maxSlots = state.currentOrder.length || 3;

  for (let i = 0; i < maxSlots; i++) {
    const slot = document.createElement('div');
    slot.className = 'tray-slot';
    if (state.playerOrder[i]) {
      const ing = INGREDIENTS.find(x => x.id === state.playerOrder[i]);
      slot.classList.add('filled');
      slot.innerHTML = `<div class="ing-dot" style="background:${ing.color};width:26px;height:26px;">${ing.icon}</div>`;
      gsap.from(slot.querySelector('.ing-dot'), { scale: 0, duration: .25, ease: 'back.out(2)' });
    }
    tray.appendChild(slot);
  }
}

function clearOrder() {
  state.playerOrder = [];
  // Reset confirmation state
  state.confirmedOrbs = state.confirmedOrbs.map(() => false);
  // Clear eliminations both in state and DOM
  if (state.eliminations) {
    state.eliminations = state.eliminations.map(() => new Set());
  }
  document.querySelectorAll('.orb-eliminations').forEach(el => el.remove());
  if (state.compoundOrbs) {
    state.compoundConfirmed = state.compoundOrbs.map(() => []);
    // Restore compound orb shape layers to their pre-drop look
    document.querySelectorAll('.compound-orb').forEach((orb, idx) => {
      orb.classList.remove('confirmed');
      const group = state.compoundOrbs[idx];
      orb.querySelectorAll('.orb-shape-layer').forEach((layer, i) => {
        layer.style.background = 'var(--text)';
        layer.style.opacity = i === 0 ? '0.95' : '0.55';
      });
      const badge = orb.querySelector('.orb-confirm-badge');
      if (badge) gsap.set(badge, { opacity: 0, scale: 0 });
    });
  } else {
    document.querySelectorAll('.order-orb').forEach(orb => {
      orb.classList.remove('confirmed');
      const badge = orb.querySelector('.orb-confirm-badge');
      if (badge) gsap.set(badge, { opacity: 0, scale: 0 });
    });
  }
  document.getElementById('btn-serve').classList.remove('ready');
  updateOrderTray();
  gsap.fromTo('#order-tray', { x: -4 }, { x: 0, duration: .3, ease: 'elastic.out(1,0.5)' });
}

function serveOrder() {
  if (!state.gameActive) return;
  // With drag-drop validation, an order is correct iff every orb is confirmed
  if (!state.confirmedOrbs.length || !state.confirmedOrbs.every(c => c)) {
    gsap.fromTo('#order-tray', { x: -6 }, { x: 0, duration: .4, ease: 'elastic.out(1,0.3)' });
    return;
  }

  stopPatience();
  state.pulseTweens.forEach(t => t.kill());
  handleCorrectOrder();
}

function handleCorrectOrder() {
  cancelPendingSpawn(); // Prevent any stale timer from firing into this transition
  const earned = 10 + state.round * 5;
  state.score += earned;
  state.served += 1;
  if (state.served > 0 && state.served % 5 === 0) state.round++;

  state.currentOrder.forEach(id => {
    if (!state.knownIngredients.has(id)) {
      state.knownIngredients.add(id);
      revealCodexEntry(id);
    }
  });

  // Record cipher discoveries for Chromara customers
  const cust = state.activeCustomer;
  if (cust && cust.cipherSwaps) {
    if (!state.learnedSwaps[cust.name]) state.learnedSwaps[cust.name] = new Set();
    cust.cipherSwaps.forEach(([a, b]) => {
      if (state.currentOrder.includes(a) || state.currentOrder.includes(b)) {
        state.learnedSwaps[cust.name].add(pairKey(a, b));
      }
    });
  }

  // Record glyph cipher progress (Glyphara)
  if (cust && cust.type === 'glyph') {
    state.currentOrder.forEach(id => {
      state.glyphServes[id] = (state.glyphServes[id] || 0) + 1;
    });
  }

  // Update recent-ingredients history (most recent first, max 6 ids)
  state.currentOrder.forEach(id => {
    state.recentIngredients = [id, ...state.recentIngredients.filter(x => x !== id)].slice(0, 6);
  });

  // Drip-feed glyph unlock: every 3rd correct order, bank one undecoded glyph
  state.ordersSinceGlyphDrip += 1;
  if (state.ordersSinceGlyphDrip >= 3) {
    state.ordersSinceGlyphDrip = 0;
    const ing = pickGlyphToUnlock();
    if (ing) {
      // Defer slightly so the buildCodex() call below runs first and the glyph element exists
      setTimeout(() => unlockGlyph(ing), 300);
    }
  }

  updateHUD();
  buildCodex(); // Refresh codex to show newly-learned swaps and glyph decodes
  // checkRecipeFragments returns true if a recipe is about to unlock
  const willUnlock = checkRecipeFragments();
  showFeedback('CORRECT!', 'correct');

  state.inTransition = true;
  console.log('[transition] handleCorrectOrder exit start, willUnlock=', willUnlock);
  gsap.to('#customer-wrap', { opacity: 0, x: 80, duration: .5, delay: .4, ease: 'power2.in' });
  gsap.to('#tv-screen', { opacity: 0, duration: .4, delay: .3, ease: 'power2.in', onComplete: () => {
    console.log('[transition] tv-exit onComplete fired, scheduling spawn=', !willUnlock);
    state.playerOrder = [];
    updateOrderTray();
    cancelPendingSpawn();
    // If a recipe is unlocking, hideUnlock will spawn the next customer when player dismisses overlay.
    // Don't schedule a competing spawn timer.
    if (!willUnlock) {
      state.pendingSpawn = setTimeout(() => {
        console.log('[transition] spawn timer firing, gameActive=', state.gameActive);
        spawnCustomer();
      }, 800);
    }
  }});
}

function loseLife(reason) {
  cancelPendingSpawn(); // Prevent stacked spawn timers from previous cycles
  state.lives--;
  updateHUD();
  showFeedback(reason || 'MISSED!', 'wrong');

  if (state.lives <= 0) {
    setTimeout(gameOver, 1200);
    return;
  }

  state.inTransition = true;
  gsap.to('#customer-wrap', { opacity: 0, x: -80, duration: .5, delay: .5, ease: 'power2.in' });
  gsap.to('#tv-screen', { opacity: 0, duration: .4, delay: .4, ease: 'power2.in', onComplete: () => {
    state.playerOrder = [];
    updateOrderTray();
    cancelPendingSpawn();
    state.pendingSpawn = setTimeout(spawnCustomer, 600);
  }});
}

// ── FEEDBACK ──────────────────────────────────────────────────────────────────

function showFeedback(text, type) {
  const msg = document.getElementById('feedback-msg');
  msg.textContent = text;
  msg.className = 'feedback-msg ' + type;
  gsap.fromTo(msg,
    { opacity: 0, scale: 0.6, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: .35, ease: 'back.out(1.5)', onComplete: () => {
      gsap.to(msg, { opacity: 0, y: -30, duration: .5, delay: .7, ease: 'power2.in' });
    }}
  );
}

// ── CODEX REVEAL ──────────────────────────────────────────────────────────────

function revealCodexEntry(id) {
  const ing = INGREDIENTS.find(i => i.id === id);
  const entry = document.getElementById('codex-' + id);
  if (!entry) return;
  entry.classList.add('known');
  const dot = entry.querySelector('.codex-dot');
  dot.style.background = ing.color;
  dot.textContent = ing.icon;
  entry.querySelector('.codex-label').textContent = ing.name;
  gsap.fromTo(entry, { scale: 0.8, opacity: .35 }, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2)' });
}

// ── GLYPH DRIP-FEED ──────────────────────────────────────────────────────────
// Every 3 correct orders, unlock one undecoded glyph, preferring ingredients
// the player has actually used in recent orders.

function pickGlyphToUnlock() {
  // Build list of undecoded glyphs (glyphServes < 1)
  const undecoded = INGREDIENTS.filter(ing => (state.glyphServes[ing.id] || 0) < 1);
  if (undecoded.length === 0) return null;

  // Prefer ingredients used recently
  const recent = state.recentIngredients || [];
  for (const id of recent) {
    const match = undecoded.find(ing => ing.id === id);
    if (match) return match;
  }

  // Otherwise random among undecoded
  return undecoded[Math.floor(Math.random() * undecoded.length)];
}

function unlockGlyph(ing) {
  if (!ing) return;
  // Bank the glyph (pretend it was served correctly)
  state.glyphServes[ing.id] = Math.max(state.glyphServes[ing.id] || 0, 1);

  // Refresh the codex grid so the glyph indicator updates from "?" to the actual symbol
  buildCodex();

  // Highlight the entry that just gained its glyph
  const entry = document.getElementById('codex-' + ing.id);
  if (entry) {
    const glyphEl = entry.querySelector('.codex-glyph');
    if (glyphEl) {
      gsap.fromTo(glyphEl,
        { scale: 0.4, opacity: 0, color: '#fff' },
        { scale: 1, opacity: 1, color: '#a8ff78', duration: .6, ease: 'back.out(2)' });
    }
    gsap.fromTo(entry,
      { boxShadow: '0 0 0 2px rgba(168,255,120,0.8)' },
      { boxShadow: '0 0 0 0 rgba(168,255,120,0)', duration: 1.2, ease: 'power2.out' });
  }

  showGlyphToast(ing);
}

function showGlyphToast(ing) {
  // Floating notification — small, top-right of the cafe scene
  let toast = document.getElementById('glyph-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'glyph-toast';
    toast.className = 'glyph-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span class="glyph-toast-eyebrow">Glyph Decoded</span>
    <span class="glyph-toast-symbol">${ing.glyph}</span>
    <span class="glyph-toast-name">${ing.name}</span>
  `;
  gsap.killTweensOf(toast);
  gsap.fromTo(toast,
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: .5, ease: 'back.out(1.5)',
      onComplete: () => {
        gsap.to(toast, { opacity: 0, x: 40, duration: .5, delay: 2.5, ease: 'power2.in' });
      }});
}

// ── RECIPE FRAGMENTS ─────────────────────────────────────────────────────────

function checkRecipeFragments() {
  let unlocked = null;
  RECIPES.forEach(recipe => {
    if (recipe.fragments >= recipe.total) return;
    const overlap = state.currentOrder.filter(id => recipe.needs.includes(id));
    if (overlap.length > 0) {
      recipe.fragments = Math.min(recipe.fragments + overlap.length, recipe.total);
      if (recipe.fragments >= recipe.total && !unlocked) {
        unlocked = recipe;
      }
    }
  });

  buildRecipeList();

  if (unlocked) {
    setTimeout(() => showUnlock(unlocked), 800);
    return true;
  }
  return false;
}

// ── UNLOCK OVERLAY ────────────────────────────────────────────────────────────

function showUnlock(recipe) {
  state.gameActive = false;
  const overlay = document.getElementById('unlock-overlay');
  overlay.style.display = 'flex';

  document.getElementById('unlock-title').textContent = recipe.name;
  document.getElementById('unlock-sub').textContent = `Ingredients: ${recipe.needs.map(id => INGREDIENTS.find(i=>i.id===id).name).join(' · ')}`;
  document.getElementById('unlock-lore').textContent = `"${recipe.lore}"`;

  startParticles();

  const tl = gsap.timeline();
  tl.to('.unlock-eyebrow', { opacity: 1, y: 0, duration: .5 })
    .to('#unlock-title', { opacity: 1, y: 0, duration: .6, ease: 'back.out(1.2)' }, '-=.2')
    .to('#unlock-sub', { opacity: 1, duration: .5 }, '-=.1')
    .to('#unlock-lore', { opacity: 1, y: 0, duration: .6 }, '-=.2')
    .to('#unlock-continue', { opacity: 1, duration: .4 }, '+=.5');

  document.getElementById('unlock-continue').onclick = hideUnlock;
}

function hideUnlock() {
  cancelPendingSpawn(); // Cancel any scheduled spawn
  const overlay = document.getElementById('unlock-overlay');
  gsap.to(overlay, { opacity: 0, duration: .4, onComplete: () => {
    overlay.style.display = 'none';
    gsap.set(overlay, { opacity: 1 });
    gsap.set(['.unlock-eyebrow','#unlock-title','#unlock-sub','#unlock-lore','#unlock-continue'], { opacity: 0, y: 10 });
    stopParticles();
    state.gameActive = true;
    state.inTransition = false; // Reset before spawning so watchdog functions correctly
    cancelPendingSpawn();
    // Explicit visibility reset — kill any lingering exit-tween residue on customer/TV
    gsap.killTweensOf('#customer-wrap');
    gsap.killTweensOf('#tv-screen');
    spawnCustomer();
  }});
}

// ── PARTICLES ─────────────────────────────────────────────────────────────────

let particleInterval = null;
function startParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#c8a96e','#7b5ea7','#4ab8c4','#e8d5a3','#f0c040','#e05555'];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.5 + (Math.random() - .5) * 100,
      vx: (Math.random() - .5) * 4,
      vy: -(Math.random() * 4 + 1),
      r: Math.random() * 4 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      a: 1,
    });
  }

  particleInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.a -= 0.012;
      ctx.globalAlpha = Math.max(0, p.a);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    });
    particles.forEach((p, i) => { if (p.a <= 0) {
      particles[i] = {
        x: Math.random() * canvas.width,
        y: canvas.height * 0.5 + (Math.random() - .5) * 100,
        vx: (Math.random() - .5) * 4,
        vy: -(Math.random() * 4 + 1),
        r: Math.random() * 4 + 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: 1,
      };
    }});
  }, 16);
}
function stopParticles() {
  clearInterval(particleInterval);
  const canvas = document.getElementById('particles-canvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// ── AUDIO ENGINE ──────────────────────────────────────────────────────────────

let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playTone(frequency, duration = 0.3) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = frequency;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.log('Audio unavailable');
  }
}

function playOrderTones(order) {
  order.forEach((ing, idx) => {
    setTimeout(() => playTone(ing.tone, 0.2), idx * 300);
  });
}

// ── HUD ───────────────────────────────────────────────────────────────────────

function updateHUD() {
  document.getElementById('score-display').textContent = state.score;
  document.getElementById('served-display').textContent = state.served;
  document.getElementById('round-label').textContent = `Round ${state.round}`;
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((h, i) => {
    const lost = i >= state.lives;
    h.classList.toggle('lost', lost);
    if (lost) gsap.from(h, { scale: 1.4, duration: .3, ease: 'back.out(2)' });
  });
}

// ── GAME START / OVER ─────────────────────────────────────────────────────────

function startGame() {
  cancelPendingSpawn();
  state = {
    score: 0, lives: 3, served: 0, round: 1,
    currentOrder: [], playerOrder: [],
    patienceTimer: null, patienceTween: null, pulseTweens: [],
    knownIngredients: new Set(['nova','cryo','lunar']),
    gameActive: true,
    pendingSpawn: null,
    learnedSwaps: {},
    glyphServes: { nova: 1, cryo: 1, lunar: 1 },
    activeCustomer: null,
    confirmedOrbs: [],
    compoundConfirmed: [],
    seenSpecies: new Set(),
    patiencePaused: false,
    eliminations: [],
    // True between "customer exits" and "next customer entrance starts" — visibility watchdog ignores customer-wrap during this window
    inTransition: false,
    ordersSinceGlyphDrip: 0,
    recentIngredients: [],
  };
  RECIPES.forEach(r => r.fragments = 0);

  buildIngredientGrid();
  buildCodex();
  buildRecipeList();
  updateHUD();

  const title = document.getElementById('title-screen');
  const game = document.getElementById('game-screen');

  gsap.to(title, { opacity: 0, duration: .6, onComplete: () => {
    title.classList.remove('active');
    gsap.set(title, { opacity: 1 });
    game.classList.add('active');
    gsap.from('#game-screen', { opacity: 0, duration: .6 });
    applyCustomAssets();
    gsap.set('#customer-wrap', { opacity: 0, y: 30, x: 0 });
    gsap.set('#tv-screen', { opacity: 0 });
    setTimeout(spawnCustomer, 600);
  }});
}

function gameOver() {
  state.gameActive = false;
  stopPatience();
  state.pulseTweens.forEach(t => t.kill());
  const go = document.getElementById('gameover-screen');
  const game = document.getElementById('game-screen');

  document.getElementById('go-score').textContent = `${state.score} credits · ${state.served} orders served`;

  gsap.to(game, { opacity: 0, duration: .5, onComplete: () => {
    game.classList.remove('active');
    gsap.set(game, { opacity: 1 });
    go.classList.add('active');
    const tl = gsap.timeline();
    tl.to('.go-title', { opacity: 1, y: 0, duration: .7, ease: 'power3.out' })
      .to('.go-score', { opacity: 1, y: 0, duration: .5, ease: 'power2.out' }, '-=.2')
      .to('.go-sub', { opacity: 1, duration: .5 }, '-=.1')
      .to('.btn-restart', { opacity: 1, duration: .4 }, '-=.1');
  }});
}

function restartGame() {
  const go = document.getElementById('gameover-screen');
  gsap.to(go, { opacity: 0, duration: .4, onComplete: () => {
    go.classList.remove('active');
    gsap.set(go, { opacity: 1 });
    gsap.set(['.go-title','.go-score','.go-sub','.btn-restart'], { opacity: 0, y: 20 });
    startGame();
  }});
}

// ── EVENT LISTENERS ───────────────────────────────────────────────────────────

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-serve').addEventListener('click', serveOrder);
document.getElementById('btn-clear').addEventListener('click', clearOrder);
document.getElementById('btn-restart').addEventListener('click', restartGame);
document.getElementById('btn-replay-sound').addEventListener('click', () => {
  if (state.currentOrder.length > 0) {
    playOrderTones(state.currentOrder.map(id => INGREDIENTS.find(i => i.id === id)));
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') serveOrder();
  if (e.key === 'Escape' || e.key === 'Backspace') clearOrder();
  // Ingredient number-key shortcuts removed — interaction is drag-only now.
});

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - .5) * 12;
  const y = (e.clientY / window.innerHeight - .5) * 8;
  gsap.to('#starfield', { x, y, duration: 2, ease: 'power1.out' });
});