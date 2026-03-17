/* shared.js — injects header + footer into every page */
const NAV_ITEMS = [
  { href: '../index.html',        label: 'Home' },
  { href: '../pages/about.html',  label: 'About' },
  { href: '../pages/lgref.html',  label: 'LGREF' },
  { href: '../pages/lgmap.html',  label: 'LGMAP' },
  { href: '../pages/lgdi.html',   label: 'LGDI' },
  { href: '../pages/gita.html',   label: 'GITA Center' },
  { href: '../pages/participate.html', label: 'Participate' },
];

// Determine active page
function getActive() {
  const p = window.location.pathname.split('/').pop();
  return p || 'index.html';
}

function buildNav(root='..') {
  const active = getActive();
  return NAV_ITEMS.map(item => {
    const href = item.href.replace('..', root);
    const isActive = href.endsWith(active) ? ' class="active"' : '';
    return `<li><a href="${href}"${isActive}>${item.label}</a></li>`;
  }).join('');
}

function injectHeader(root='..') {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
    <div class="top-banner">
      Republic of Liberia &nbsp;|&nbsp; Liberia Land Authority · DLSC · LISGIS &nbsp;|&nbsp; Demonstration Operational Prototype (DOP)
    </div>
    <header>
      <div class="header-inner">
        <div class="logo-group">
          <div class="logo-emblem">
            <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="21" fill="none" stroke="#c8102e" stroke-width="2.2"/>
              <circle cx="23" cy="23" r="21" fill="rgba(255,255,255,0.08)"/>
              <ellipse cx="23" cy="23" rx="21" ry="8" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width=".9"/>
              <line x1="2" y1="23" x2="44" y2="23" stroke="rgba(255,255,255,0.35)" stroke-width=".9"/>
              <ellipse cx="23" cy="23" rx="10" ry="21" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width=".9"/>
              <polygon points="23,11 24.8,17 31,17 26,21 28,27 23,23 18,27 20,21 15,17 21.2,17" fill="#c8102e" opacity=".9"/>
              <circle cx="23" cy="23" r="21" fill="none" stroke="#c9a84c" stroke-width="1.2" stroke-dasharray="4 3"/>
            </svg>
          </div>
          <div>
            <div class="logo-title">LrOneMap</div>
            <div class="logo-sub">LrOneMap.com &nbsp;·&nbsp; liberiaidp.net</div>
          </div>
        </div>
        <div class="page-headline">The &nbsp;<span class="one">LIBERIA</span>&nbsp;ONEMAP</div>
        <nav><ul>${buildNav(root)}</ul></nav>
      </div>
    </header>`;
}

function injectFooter(root='..') {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <footer>
      <div class="footer-inner">
        <div>
          <h4>Liberia OneMap</h4>
          <p>A Demonstration Operational Prototype (DOP) for the Liberia Geospatial Data Infrastructure (LGDI).<br><br>
          Hosted at <strong style="color:var(--gold)">LrOneMap.com</strong> · liberiaidp.net<br><br>
          Report Reference: LGREF-ONEMAP-2026-001</p>
        </div>
        <div>
          <h4>Programs</h4>
          <ul>
            <li><a href="${root}/pages/lgref.html">LGREF — Reference System</a></li>
            <li><a href="${root}/pages/lgmap.html">LGMAP — Base Mapping</a></li>
            <li><a href="${root}/pages/lgdi.html">LGDI — Data Infrastructure</a></li>
            <li><a href="${root}/pages/gita.html">GITA Center · UL</a></li>
          </ul>
        </div>
        <div>
          <h4>Data &amp; Tools</h4>
          <ul>
            <li><a href="${root}/pages/lgref.html">Geodetic Monument Viewer</a></li>
            <li><a href="${root}/pages/lgmap.html">Bomi County Map Viewer</a></li>
            <li><a href="${root}/pages/lgdi.html">Metadata Catalog</a></li>
            <li><a href="${root}/pages/participate.html">Submit Data</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="#">LLA — Liberia Land Authority</a></li>
            <li><a href="#">Lake Piso Solutions (LPS)</a></li>
            <li><a href="https://liberiaidp.net" target="_blank">liberiaidp.net</a></li>
            <li><a href="mailto:matt.elious@gmail.com">matt.elious@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Liberia OneMap · LrOneMap.com · Republic of Liberia</span>
        <span>Demonstration Operational Prototype — For Official Use Only</span>
      </div>
    </footer>`;
}
