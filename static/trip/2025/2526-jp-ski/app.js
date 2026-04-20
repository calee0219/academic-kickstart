// ===== Navigation Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== Initialize Map =====
    initMap();
});

function initMap() {
    const map = L.map('tripMap', {
        scrollWheelZoom: false
    }).setView([36.5, 139.3], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Store map and markers globally for i18n updates
    window.tripMap = map;
    window.mapMarkers = [];

    // Get current language
    const lang = currentLang || 'zh';
    const locations = mapTranslations[lang];

    // Add markers
    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: createMapIcon(loc.color) })
            .addTo(map)
            .bindPopup(`
                <div style="font-family: 'Noto Sans TC', 'Inter', sans-serif; min-width: 180px;">
                    <strong style="font-size: 14px; color: #1a365d;">${loc.name}</strong>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #718096; line-height: 1.5;">${loc.desc}</p>
                </div>
            `);
        window.mapMarkers.push(marker);
    });

    // Draw route lines
    const routePoints = [
        [35.772, 140.393],  // Narita
        [35.714, 139.777],  // Ueno
        [36.934, 138.812],  // Echigo-Yuzawa
        [36.846, 138.779],  // Naeba
        [36.934, 138.812],  // Back to Echigo-Yuzawa
        [37.033, 138.917],  // Urasa
        [37.003, 138.883],  // Joetsu Kokusai
        [37.033, 138.917],  // Back to Urasa
        [36.934, 138.812],  // Echigo-Yuzawa
        [35.685, 139.783],  // Tokyo (APA Ningyocho)
        [35.772, 140.393],  // Narita
    ];

    L.polyline(routePoints, {
        color: '#2b6cb0',
        weight: 3,
        opacity: 0.6,
        dashArray: '8, 8',
        smoothFactor: 1
    }).addTo(map);

    // Fit bounds
    const bounds = L.latLngBounds(locations.map(l => [l.lat, l.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });
}

// ===== Scroll-based nav shadow =====
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }
});
