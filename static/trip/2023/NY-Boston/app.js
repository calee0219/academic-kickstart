// ===== Map Data =====
const bostonLocations = [
  { name: 'Logan International Airport', lat: 42.3656, lng: -71.0096, type: 'transport', icon: '✈️' },
  { name: '住宿: 871 Harrison Ave', lat: 42.3388, lng: -71.0700, type: 'stay', icon: '🏠' },
  { name: 'Museum of Fine Arts', lat: 42.3394, lng: -71.0943, type: 'attraction', icon: '🎨' },
  { name: 'Harvard University', lat: 42.3744, lng: -71.1169, type: 'attraction', icon: '🎓' },
  { name: 'MIT', lat: 42.3601, lng: -71.0942, type: 'attraction', icon: '🔬' },
  { name: 'Quincy Market', lat: 42.3602, lng: -71.0549, type: 'food', icon: '🦞' },
  { name: 'Freedom Trail (Start)', lat: 42.3554, lng: -71.0655, type: 'attraction', icon: '🚶' },
  { name: 'Long Wharf (Whale Watch)', lat: 42.3598, lng: -71.0480, type: 'attraction', icon: '🐋' },
  { name: 'Alive & Kicking Lobsters', lat: 42.3650, lng: -71.1030, type: 'food', icon: '🦞' },
  { name: 'Krasi', lat: 42.3490, lng: -71.0830, type: 'food', icon: '🍷' },
  { name: 'Asta', lat: 42.3445, lng: -71.0863, type: 'food', icon: '🍽️' },
  { name: 'South Station', lat: 42.3519, lng: -71.0552, type: 'transport', icon: '🚂' },
];

const nyLocations = [
  { name: '住宿: 242 Beacon Ave, NJ', lat: 40.7108, lng: -74.0640, type: 'stay', icon: '🏠' },
  { name: 'Central Park', lat: 40.7829, lng: -73.9654, type: 'attraction', icon: '🌳' },
  { name: 'Natural History Museum', lat: 40.7813, lng: -73.9740, type: 'attraction', icon: '🦕' },
  { name: 'Smith & Wollensky', lat: 40.7537, lng: -73.9690, type: 'food', icon: '🥩' },
  { name: 'Times Square', lat: 40.7580, lng: -73.9855, type: 'attraction', icon: '🌃' },
  { name: 'Statue of Liberty (Cruise)', lat: 40.6892, lng: -74.0445, type: 'attraction', icon: '🗽' },
  { name: 'Intrepid Museum', lat: 40.7645, lng: -73.9997, type: 'attraction', icon: '🚢' },
  { name: 'Empire State Building', lat: 40.7484, lng: -73.9857, type: 'attraction', icon: '🏙️' },
  { name: 'Chelsea Market', lat: 40.7425, lng: -74.0060, type: 'food', icon: '🍴' },
  { name: 'Starbucks Reserve Roastery', lat: 40.7421, lng: -74.0027, type: 'attraction', icon: '☕' },
  { name: 'Pier A Pergola, Hoboken', lat: 40.7365, lng: -74.0280, type: 'attraction', icon: '🌉' },
  { name: 'Brooklyn Bridge', lat: 40.7061, lng: -73.9969, type: 'attraction', icon: '🌉' },
  { name: 'Manhattan Bridge', lat: 40.7075, lng: -73.9908, type: 'attraction', icon: '🌉' },
  { name: "Ellen's Stardust Diner", lat: 40.7623, lng: -73.9838, type: 'food', icon: '🎤' },
  { name: 'Hamilton - Richard Rodgers Theatre', lat: 40.7590, lng: -73.9867, type: 'attraction', icon: '🎭' },
  { name: 'MoMA', lat: 40.7614, lng: -73.9776, type: 'attraction', icon: '🎨' },
  { name: 'Oxalis', lat: 40.6722, lng: -73.9640, type: 'food', icon: '🍽️' },
  { name: 'The Metropolitan Museum of Art', lat: 40.7794, lng: -73.9632, type: 'attraction', icon: '🏛️' },
  { name: '9/11 Memorial', lat: 40.7115, lng: -74.0134, type: 'attraction', icon: '🕊️' },
  { name: 'Charging Bull', lat: 40.7055, lng: -74.0134, type: 'attraction', icon: '🐂' },
  { name: 'The High Line', lat: 40.7480, lng: -74.0048, type: 'attraction', icon: '🌿' },
  { name: 'Porteño', lat: 40.7420, lng: -74.0010, type: 'food', icon: '🥘' },
  { name: 'Grand Central Terminal', lat: 40.7527, lng: -73.9772, type: 'attraction', icon: '🚉' },
];

// ===== Map Initialization =====
let map;
let currentMarkers = [];

function createCustomIcon(location) {
  let colorClass = 'newyork';
  if (location.type === 'stay') colorClass = 'stay';
  else if (bostonLocations.includes(location)) colorClass = 'boston';

  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-pin ${colorClass}"><span class="marker-icon">${location.icon}</span></div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
  });
}

function clearMarkers() {
  currentMarkers.forEach(m => map.removeLayer(m));
  currentMarkers = [];
}

function addMarkers(locations) {
  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createCustomIcon(loc) })
      .addTo(map)
      .bindPopup(`<strong>${loc.icon} ${loc.name}</strong>`);
    currentMarkers.push(marker);
  });
}

function showBostonMap() {
  clearMarkers();
  addMarkers(bostonLocations);
  map.setView([42.355, -71.075], 13);
}

function showNYMap() {
  clearMarkers();
  addMarkers(nyLocations);
  map.setView([40.745, -73.990], 12);
}

function showFullMap() {
  clearMarkers();
  addMarkers(bostonLocations);
  addMarkers(nyLocations);

  // Draw route line Boston -> NY
  const routeLine = L.polyline([
    [42.3519, -71.0552], // South Station
    [40.7527, -73.9772], // Grand Central
  ], {
    color: '#7c3aed',
    weight: 3,
    dashArray: '10, 10',
    opacity: 0.7,
  }).addTo(map);
  currentMarkers.push(routeLine);

  map.fitBounds([
    [42.40, -71.15],
    [40.65, -73.90],
  ], { padding: [40, 40] });
}

function initMap() {
  map = L.map('mainMap', {
    zoomControl: true,
    scrollWheelZoom: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  showBostonMap();
}

// ===== Map Tab Switching =====
document.querySelectorAll('.map-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.map-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const mapType = tab.dataset.map;
    if (mapType === 'boston') showBostonMap();
    else if (mapType === 'newyork') showNYMap();
    else showFullMap();
  });
});

// ===== Day Filtering =====
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const day = btn.dataset.day;
    document.querySelectorAll('.day-card').forEach(card => {
      if (day === 'all' || card.dataset.day === day) {
        card.classList.remove('hidden');
        card.style.display = '';
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });
  });
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== Navbar scroll effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
  }

  lastScroll = currentScroll;
});

// ===== Hero Particles =====
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(particle);
  }

  // Add keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// ===== Intersection Observer for animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

  document.querySelectorAll('.day-card, .overview-card, .attr-card, .food-card, .ref-card').forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
  });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  createParticles();
  initScrollAnimations();
  // Initialize i18n translation system
  if (typeof i18n !== 'undefined') {
    i18n.init();
  }
});
