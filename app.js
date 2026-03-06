// ============================================
//   THE CLAW FILES — app.js
//   Research Journal Dashboard for Lil Mike
// ============================================

const MANIFEST_URL = 'manifest.json';
const RESEARCH_BASE = 'research/';

let manifest = null;
let currentSlug = null;

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true,
});

// ---- Init ----
async function init() {
  try {
    const res = await fetch(MANIFEST_URL + '?t=' + Date.now());
    if (!res.ok) throw new Error('No manifest found');
    manifest = await res.json();

    updateDispatchCount(manifest.entries.length);
    renderSidebar(manifest.entries);

    // Handle hash routing
    const hash = window.location.hash.slice(1);
    if (hash) {
      loadEntry(hash);
    } else if (manifest.entries.length > 0) {
      showLatestButton();
    }
  } catch (err) {
    showEmptyState();
  }
}

function updateDispatchCount(count) {
  document.getElementById('dispatch-count').textContent = count;
}

// ---- Sidebar ----
function renderSidebar(entries) {
  const list = document.getElementById('entry-list');
  if (!entries || entries.length === 0) {
    list.innerHTML = '<div class="empty-state">No dispatches yet.<br/>The explorer is still in the field.</div>';
    return;
  }

  list.innerHTML = entries.map(entry => `
    <div class="entry-item" data-slug="${entry.slug}" onclick="loadEntry('${entry.slug}')">
      <div class="entry-item-date">${formatDate(entry.date)}</div>
      <div class="entry-item-title">${entry.title}</div>
      ${entry.summary ? `<div class="entry-item-summary">${entry.summary}</div>` : ''}
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

  const splash = document.getElementById('welcome-splash');
  const entryEl = document.getElementById('research-entry');
  const bodyEl = document.getElementById('entry-body');
  const dateEl = document.getElementById('entry-date-display');

  splash.style.display = 'none';
  entryEl.style.display = 'block';
  bodyEl.innerHTML = '<div class="loading-state">Retrieving dispatch from the field...</div>';

  try {
    const res = await fetch(RESEARCH_BASE + slug + '.md?t=' + Date.now());
    if (!res.ok) throw new Error('Dispatch not found');
    const text = await res.text();

    // Extract date from manifest entry
    const entry = manifest?.entries.find(e => e.slug === slug);
    if (entry) {
      dateEl.textContent = formatDate(entry.date);
    }

    bodyEl.innerHTML = marked.parse(text);

    // Scroll to top
    document.querySelector('.content-panel').scrollTo(0, 0);
  } catch (err) {
    bodyEl.innerHTML = `
      <div style="text-align:center;padding:3rem;color:var(--text-muted)">
        <div style="font-size:3rem;margin-bottom:1rem">🗺️</div>
        <p style="font-family:var(--font-display);font-size:1.2rem;color:var(--accent-gold)">Dispatch Not Found</p>
        <p>This field report appears to have been lost at sea.</p>
      </div>
    `;
  }
}

// ---- Welcome Splash ----
function showLatestButton() {
  const btn = document.getElementById('latest-btn');
  btn.style.display = 'inline-block';
  btn.onclick = () => {
    if (manifest?.entries.length > 0) {
      loadEntry(manifest.entries[0].slug);
    }
  };
}

function showEmptyState() {
  document.getElementById('dispatch-count').textContent = '0';
  document.getElementById('entry-list').innerHTML =
    '<div class="empty-state">No dispatches yet.<br/>The explorer is still in the field.</div>';
}

// ---- Back Button ----
document.getElementById('back-btn').addEventListener('click', () => {
  window.location.hash = '';
  document.getElementById('welcome-splash').style.display = 'block';
  document.getElementById('research-entry').style.display = 'none';
  document.querySelectorAll('.entry-item').forEach(el => el.classList.remove('active'));
  currentSlug = null;
});

// ---- Hash Routing ----
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash && hash !== currentSlug) {
    loadEntry(hash);
  } else if (!hash) {
    document.getElementById('welcome-splash').style.display = 'block';
    document.getElementById('research-entry').style.display = 'none';
  }
});

// ---- Utilities ----
function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[parseInt(month, 10) - 1]} ${day}, ${year}`;
}

// ---- Start ----
init();
