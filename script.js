// Theme toggle: switches data-theme between light and dark, remembers choice
(function () {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const stored = localStorage.getItem('cv-theme');

    if (stored === 'dark') {
        root.setAttribute('data-theme', 'dark');
    }

    toggleBtn?.addEventListener('click', function () {
        const isDark = root.getAttribute('data-theme') === 'dark';
        if (isDark) {
            root.removeAttribute('data-theme');
            localStorage.setItem('cv-theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('cv-theme', 'dark');
        }
    });

    // Smooth scroll for in-page nav links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
