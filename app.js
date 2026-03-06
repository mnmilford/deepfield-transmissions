// ============================================
//   THE CLAW FILES — app.js
// ============================================

const MANIFEST_URL = 'manifest.json';
const RESEARCH_BASE = "research/";

let manifest = null;
let currentSlug = null;

marked.setOptions({ breaks: true, gfm: true });

// ---- Init ----
async function init() {
  try {
    const res = await fetch(MANIFEST_URL + '?t=' + Date.now());
    if (!res.ok) throw new Error('No manifest');
    manifest = await res.json();

    updateTransmissionCount(manifest.entries.length);
    renderSidebar(manifest.entries);

    const hash = window.location.hash.slice(1);
    if (hash) {
      loadEntry(hash);
    } else if (manifest.entries.length > 0) {
      document.getElementById('latest-btn').style.display = 'inline-block';
    }
  } catch (e) {
    showEmptyState();
  }
}

function updateTransmissionCount(n) {
  document.getElementById('transmission-count').textContent = n;
}

// ---- Background ----
function setBackground(bgPath) {
  const el = document.getElementById('bg-image');
  if (!bgPath) {
    el.classList.remove('loaded');
    return;
  }
  el.classList.remove('loaded');
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url('${bgPath}')`;
    el.classList.add('loaded');
  };
  img.onerror = () => {
    el.classList.remove('loaded');
  };
  img.src = bgPath;
}

// ---- Location Banner ----
function showLocationBanner(entry) {
  const banner = document.getElementById('location-banner');
  const loc = entry.location;
  if (!loc) { banner.style.display = 'none'; return; }

  document.getElementById('location-name').textContent =
    `${loc.neighborhood ? loc.neighborhood + ', ' : ''}${loc.city}, ${loc.country}`;
  document.getElementById('location-hotel').textContent =
    loc.hotel ? `// ${loc.hotel}` : '';
  document.getElementById('location-coords').textContent =
    loc.coords || '';

  banner.style.display = 'flex';

  // Update footer
  document.getElementById('footer-location').textContent =
    `${loc.city}, ${loc.country}`;
}

// ---- Sidebar ----
function renderSidebar(entries) {
  const list = document.getElementById('entry-list');
  if (!entries || entries.length === 0) {
    list.innerHTML = '<div class="empty-state">No transmissions yet.<br/>The explorer is still in the field.</div>';
    return;
  }
  list.innerHTML = entries.map(e => `
    <div class="entry-item" data-slug="${e.slug}" onclick="loadEntry('${e.slug}')">
      <div class="entry-item-date">${formatDate(e.date)}</div>
      ${e.location ? `<div class="entry-item-location">📍 ${e.location.city}, ${e.location.country}</div>` : ''}
      <div class="entry-item-title">${e.title}</div>
      ${e.summary ? `<div class="entry-item-summary">${e.summary}</div>` : ''}
    </div>
  `).join('');
}

function setActiveEntry(slug) {
  document.querySelectorAll('.entry-item').forEach(el => {
    el.classList.toggle('active', el.dataset.slug === slug);
  });
}

// ---- Entry Loading ----
async function loadEntry(slug) {
  currentSlug = slug;
  window.location.hash = slug;
  setActiveEntry(slug);

  const entry = manifest?.entries.find(e => e.slug === slug);

  // Swap background
  setBackground(entry?.background || null);

  // Show location banner
  if (entry) showLocationBanner(entry);

  document.getElementById('welcome-splash').style.display = 'none';
  document.getElementById('research-entry').style.display = 'block';

  const bodyEl = document.getElementById('entry-body');
  const dateEl = document.getElementById('entry-date-display');

  bodyEl.innerHTML = '<div class="loading-state" style="padding:2rem;text-align:center">Receiving transmission...</div>';
  if (entry) dateEl.textContent = formatDate(entry.date);

  try {
    const res = await fetch(RESEARCH_BASE + slug + '.md?t=' + Date.now());
    if (!res.ok) throw new Error('Not found');
    const text = await res.text();
    bodyEl.innerHTML = marked.parse(text);
    document.querySelector('.content-panel').scrollTo(0, 0);
  } catch (e) {
    bodyEl.innerHTML = `
      <div style="text-align:center;padding:3rem;color:var(--text-muted)">
        <div style="font-size:3rem;margin-bottom:1rem">🗺️</div>
        <p style="font-family:var(--font-display);font-size:1.2rem;color:var(--cyan)">Transmission Lost</p>
        <p>This transmission appears lost in the void.</p>
      </div>`;
  }
}

// ---- Back & Welcome ----
document.getElementById('latest-btn').onclick = () => {
  if (manifest?.entries.length > 0) loadEntry(manifest.entries[0].slug);
};

document.getElementById('back-btn').addEventListener('click', () => {
  window.location.hash = '';
  currentSlug = null;
  document.getElementById('welcome-splash').style.display = 'block';
  document.getElementById('research-entry').style.display = 'none';
  document.getElementById('location-banner').style.display = 'none';
  document.getElementById('footer-location').textContent = 'Somewhere in the world';
  setBackground(null);
  document.querySelectorAll('.entry-item').forEach(el => el.classList.remove('active'));
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash && hash !== currentSlug) loadEntry(hash);
  else if (!hash) document.getElementById('back-btn').click();
});

// ---- Utilities ----
function showEmptyState() {
  document.getElementById('transmission-count').textContent = '0';
  document.getElementById('entry-list').innerHTML =
    '<div class="empty-state">No transmissions yet.<br/>The explorer is still in the field.</div>';
}

function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[+m-1]} ${day}, ${y}`;
}

init();
