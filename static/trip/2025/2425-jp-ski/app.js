// ===== Leaflet Map =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize map centered on Hokkaido
  const map = L.map('trip-map', {
    scrollWheelZoom: false
  }).setView([43.15, 140.7], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  // Custom icons
  function createIcon(color, emoji) {
    return L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:' + color + ';width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,.3);border:2px solid #fff;">' + emoji + '</div>',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -20]
    });
  }

  var skiIcon = createIcon('#e53e3e', '⛷️');
  var hotelIcon = createIcon('#3498db', '🏨');
  var sightIcon = createIcon('#2ecc71', '📍');
  var transportIcon = createIcon('#f39c12', '✈️');

  // Markers
  // Ski Resorts
  L.marker([43.0758, 140.9875], { icon: skiIcon })
    .addTo(map)
    .bindPopup('<strong>Kiroro Snow World</strong><br>主雪場，6 日滑雪<br>23 條雪道，海拔 1,180m');

  L.marker([43.0833, 141.2167], { icon: skiIcon })
    .addTo(map)
    .bindPopup('<strong>札幌手稻滑雪場</strong><br>最終日滑雪<br>1972 冬奧場地');

  // Hotels
  L.marker([43.1975, 140.9947], { icon: hotelIcon })
    .addTo(map)
    .bindPopup('<strong>OMO5 小樽</strong><br>星野集團<br>1/4-1/11（7 晚）');

  L.marker([43.0687, 141.3508], { icon: hotelIcon })
    .addTo(map)
    .bindPopup('<strong>東橫 Inn 札幌站北口</strong><br>1/2-1/4 & 1/11-1/12');

  // Transport
  L.marker([42.7752, 141.6928], { icon: transportIcon })
    .addTo(map)
    .bindPopup('<strong>新千歲機場 (CTS)</strong><br>TPE/LHR/SFO 出發');

  // Sightseeing
  L.marker([43.1907, 140.9988], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>小樽運河</strong><br>冬季夜景必訪');

  L.marker([43.1925, 140.9975], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>堺町通り</strong><br>玻璃工藝、音樂盒、甜點');

  L.marker([43.1769, 140.9811], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>天狗山展望台</strong><br>北海道三大夜景');

  L.marker([43.1958, 141.0003], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>小樽三角市場</strong><br>新鮮海鮮早餐');

  L.marker([43.0583, 141.3547], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>大通公園</strong><br>AOAO SAPPORO 水族館');

  L.marker([43.0556, 141.3456], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>狸小路商店街</strong><br>藥妝、伴手禮');

  L.marker([43.0653, 141.3642], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>札幌啤酒博物館</strong><br>免費參觀 + 試飲');

  L.marker([43.0550, 141.3558], { icon: sightIcon })
    .addTo(map)
    .bindPopup('<strong>二條市場</strong><br>新鮮海鮮');

  // Route lines
  // Airport to Sapporo
  L.polyline([
    [42.7752, 141.6928],
    [43.0687, 141.3508]
  ], { color: '#f39c12', weight: 3, dashArray: '8,8', opacity: 0.7 })
    .addTo(map)
    .bindPopup('新千歲機場 → 札幌<br>JR 快速 37 分鐘');

  // Sapporo to Otaru
  L.polyline([
    [43.0687, 141.3508],
    [43.1975, 140.9947]
  ], { color: '#3498db', weight: 3, dashArray: '8,8', opacity: 0.7 })
    .addTo(map)
    .bindPopup('札幌 → 小樽<br>JR 函館本線 30-45 分鐘');

  // Otaru to Kiroro
  L.polyline([
    [43.1975, 140.9947],
    [43.0758, 140.9875]
  ], { color: '#e53e3e', weight: 3, dashArray: '8,8', opacity: 0.7 })
    .addTo(map)
    .bindPopup('小樽 → Kiroro<br>接駁巴士 50 分鐘');

  // Otaru to Teine
  L.polyline([
    [43.1975, 140.9947],
    [43.0833, 141.2167]
  ], { color: '#805ad5', weight: 3, dashArray: '8,8', opacity: 0.7 })
    .addTo(map)
    .bindPopup('小樽 → 手稻<br>JR 約 20 分鐘');

  // ===== Food Tabs =====
  var tabs = document.querySelectorAll('.food-tab');
  var contents = document.querySelectorAll('.food-content');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      contents.forEach(function(c) { c.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });

  // ===== Sticky Nav Scroll =====
  var nav = document.getElementById('nav');
  var backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    var sections = document.querySelectorAll('.section[id]');
    var scrollPos = window.scrollY + 100;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      }
    });
  });

  // ===== Mobile Nav Toggle =====
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });
});
