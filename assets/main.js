// ── Theme toggle ─────────────────────────────────────────
(function () {
  var saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
})();

// ── Reading progress bar ─────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var bar = document.getElementById('progress');
    if (!bar) return;
    function update() {
      var s = window.scrollY;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min((s / h) * 100, 100) : 0) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  });
})();

// ── Active nav link ──────────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    document.querySelectorAll('.top-nav a').forEach(function (a) {
      var base = (a.getAttribute('href') || '').replace(/^(\.\.\/)*/, '').split('#')[0];
      if (base && path.endsWith(base)) a.classList.add('active');
    });
  });
})();
