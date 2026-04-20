// ===== Navigation Scroll Effect =====
const nav = document.getElementById('mainNav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile nav toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Day Tab Switching =====
const dayTabs = document.querySelectorAll('.day-tab');
const dayContents = document.querySelectorAll('.day-content');

dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const day = tab.dataset.day;

        dayTabs.forEach(t => t.classList.remove('active'));
        dayContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`day-${day}`).classList.add('active');
    });
});

// ===== Leaflet Map =====
const map = L.map('tripMap', {
    scrollWheelZoom: false
}).setView([40.8518, 14.2681], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Custom marker function
function createMarker(type) {
    const iconClass = `marker-${type}`;
    const icons = {
        sight: '<i class="fas fa-landmark"></i>',
        food: '<i class="fas fa-utensils"></i>',
        stay: '<i class="fas fa-hotel"></i>',
        transport: '<i class="fas fa-plane"></i>'
    };
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="custom-marker ${iconClass}">${icons[type] || ''}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -20]
    });
}

// Map markers data
const markers = [
    // Accommodation
    {
        lat: 40.8531, lng: 14.2726,
        type: 'stay',
        title: 'CX Naples Centrale',
        desc: 'Via Galileo Ferraris, 4 — Our accommodation'
    },
    // Transport
    {
        lat: 40.8840, lng: 14.2908,
        type: 'transport',
        title: 'Naples Airport (NAP)',
        desc: 'Napoli International Airport'
    },
    {
        lat: 40.8532, lng: 14.2722,
        type: 'transport',
        title: 'Napoli Centrale Station',
        desc: 'Main train station — hub for all trips'
    },
    // Day 1 Sights
    {
        lat: 40.8529, lng: 14.2594,
        type: 'sight',
        title: 'Duomo di Napoli',
        desc: 'Day 1 — Cathedral of San Gennaro'
    },
    {
        lat: 40.8490, lng: 14.2554,
        type: 'sight',
        title: 'Cappella Sansevero',
        desc: 'Day 1 — Cristo Velato sculpture'
    },
    // Day 2 Sights
    {
        lat: 41.0734, lng: 14.3270,
        type: 'sight',
        title: 'Reggia di Caserta',
        desc: 'Day 2 — Royal Palace of Caserta'
    },
    {
        lat: 40.8358, lng: 14.2488,
        type: 'sight',
        title: 'Piazza del Plebiscito',
        desc: 'Day 2 — Naples\' grandest square'
    },
    {
        lat: 40.8384, lng: 14.2490,
        type: 'sight',
        title: 'Galleria Umberto I',
        desc: 'Day 2 — Elegant shopping arcade'
    },
    // Day 3 Sights
    {
        lat: 40.7509, lng: 14.4869,
        type: 'sight',
        title: 'Pompeii',
        desc: 'Day 3 — Ancient Roman city buried by Vesuvius'
    },
    {
        lat: 40.8512, lng: 14.2565,
        type: 'sight',
        title: 'Napoli Sotterranea',
        desc: 'Day 3 — Underground Naples'
    },
    // Day 4 Sights
    {
        lat: 40.8534, lng: 14.2504,
        type: 'sight',
        title: 'MANN Museum',
        desc: 'Day 4 — National Archaeological Museum'
    },
    // Additional sights
    {
        lat: 40.8420, lng: 14.2385,
        type: 'sight',
        title: 'Castel Sant\'Elmo',
        desc: 'Sunset viewpoint — panoramic views'
    },
    {
        lat: 40.8462, lng: 14.2562,
        type: 'sight',
        title: 'Chiesa del Gesù Nuovo',
        desc: 'Baroque church with unique facade'
    },
    // Food
    {
        lat: 40.8516, lng: 14.2580,
        type: 'food',
        title: 'Sorbillo',
        desc: 'Famous Neapolitan pizza — Via dei Tribunali'
    },
    {
        lat: 40.8497, lng: 14.2632,
        type: 'food',
        title: 'L\'Antica Pizzeria da Michele',
        desc: 'Historic pizzeria since 1870'
    },
    {
        lat: 40.8543, lng: 14.2710,
        type: 'food',
        title: 'Attanasio',
        desc: 'Best Sfogliatella — near Centrale station'
    }
];

// Store marker layers for language updates
const markerLayers = [];
const markerGroup = L.featureGroup();

function getMarkerPopupContent(m, lang) {
    const mapTrans = i18n.mapTranslations[m.title];
    if (mapTrans && lang) {
        const title = lang === 'zh' ? mapTrans.zh : mapTrans.en;
        const desc = lang === 'zh' ? mapTrans.descZh : mapTrans.descEn;
        return `<h4>${title}</h4><p>${desc}</p>`;
    }
    return `<h4>${m.title}</h4><p>${m.desc}</p>`;
}

// Add markers to map
markers.forEach(m => {
    const lang = (typeof i18n !== 'undefined') ? i18n.currentLang : 'en';
    const marker = L.marker([m.lat, m.lng], {
        icon: createMarker(m.type)
    }).bindPopup(getMarkerPopupContent(m, lang));
    markerLayers.push({ marker, data: m });
    markerGroup.addLayer(marker);
});

markerGroup.addTo(map);

// Function to update map language (called by i18n)
window.updateMapLanguage = function(lang) {
    markerLayers.forEach(({ marker, data }) => {
        marker.setPopupContent(getMarkerPopupContent(data, lang));
    });
};

// Draw route lines
// Day 2: Naples -> Caserta
const casertaRoute = L.polyline([
    [40.8532, 14.2722], // Napoli Centrale
    [41.0734, 14.3270]  // Caserta
], {
    color: '#2b6cb0',
    weight: 2,
    dashArray: '8, 8',
    opacity: 0.6
}).addTo(map);

// Day 3: Naples -> Pompeii
const pompeiiRoute = L.polyline([
    [40.8532, 14.2722], // Napoli Centrale
    [40.7509, 14.4869]  // Pompeii
], {
    color: '#c53030',
    weight: 2,
    dashArray: '8, 8',
    opacity: 0.6
}).addTo(map);

// Fit map to show all markers
map.fitBounds(markerGroup.getBounds().pad(0.1));

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.overview-card, .food-card, .tip-card, .spot-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Initialize i18n =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof i18n !== 'undefined') {
        i18n.init();
    }
});
