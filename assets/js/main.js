// Utility to render cards
function createCard({ title, summary, meta }) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <h4>${title}</h4>
    <p>${summary}</p>
    ${meta ? `<div class="meta">${meta}</div>` : ''}
  `;
  return div;
}

function renderFeaturedStrategies() {
  const container = document.getElementById('featured-strategies');
  if (!container || !Array.isArray(STRATEGIES)) return;
  STRATEGIES.slice(0, 3).forEach(s => {
    const meta = `${s.time} • ${s.classSize} • ${s.tags.join(', ')}`;
    const card = createCard({ title: s.title, summary: s.summary, meta });
    const link = document.createElement('a');
    link.href = `strategy.html?id=${encodeURIComponent(s.id)}`;
    link.textContent = 'View details';
    link.className = 'btn secondary';
    card.appendChild(document.createElement('div')).appendChild(link);
    container.appendChild(card);
  });
}

function renderFeaturedTools() {
  const container = document.getElementById('featured-tools');
  if (!container || !Array.isArray(TOOLS)) return;
  TOOLS.forEach(t => {
    const meta = `${t.type}`;
    const card = createCard({ title: t.title, summary: t.summary, meta });
    const link = document.createElement('a');
    link.href = t.href;
    link.textContent = 'Download';
    link.className = 'btn secondary';
    card.appendChild(document.createElement('div')).appendChild(link);
    container.appendChild(card);
  });
}

function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', () => {
  renderFeaturedStrategies();
  renderFeaturedTools();
  setYear();
});
