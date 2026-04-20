// ===== Currency Conversion =====
const RATES = { EUR: 1, NTD: 35, USD: 1.08, GBP: 0.86 };
const SYMBOLS = { EUR: '€', NTD: 'NT$', USD: '$', GBP: '£' };
let currentCurrency = 'NTD';

function formatPrice(eurVal, cur) {
  const converted = eurVal * RATES[cur];
  if (cur === 'NTD') return SYMBOLS[cur] + Math.round(converted).toLocaleString();
  if (converted >= 100) return SYMBOLS[cur] + Math.round(converted).toLocaleString();
  return SYMBOLS[cur] + converted.toFixed(2);
}

function updateAllPrices() {
  const cur = currentCurrency;
  // Update price-cell elements (tables, cards)
  document.querySelectorAll('.price-cell[data-eur]').forEach(el => {
    const eurVal = parseFloat(el.dataset.eur);
    const unit = el.dataset.unit || '';
    const priceSpan = el.querySelector('.price-val');
    if (priceSpan) {
      priceSpan.textContent = formatPrice(eurVal, cur) + unit;
    }
  });
  // Update flight prices
  document.querySelectorAll('.flight-price[data-eur]').forEach(el => {
    const eurVal = parseFloat(el.dataset.eur);
    const label = el.dataset.label || '';
    const priceSpan = el.querySelector('.price-val');
    if (priceSpan) {
      priceSpan.textContent = label + formatPrice(eurVal, cur);
    }
  });
  // Update budget totals
  document.querySelectorAll('.budget-total[data-eur-low]').forEach(el => {
    const low = parseFloat(el.dataset.eurLow);
    const high = parseFloat(el.dataset.eurHigh);
    const priceSpan = el.querySelector('.price-val');
    if (priceSpan) {
      priceSpan.textContent = formatPrice(low, cur) + ' ~ ' + formatPrice(high, cur);
    }
  });
  // Update ski stat prices
  document.querySelectorAll('.ski-stat.price-cell[data-eur]').forEach(el => {
    const eurVal = parseFloat(el.dataset.eur);
    const priceSpan = el.querySelector('.price-val');
    if (priceSpan) {
      priceSpan.textContent = formatPrice(eurVal, cur);
    }
  });
}

document.querySelectorAll('.cur-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cur-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCurrency = btn.dataset.cur;
    updateAllPrices();
  });
});

// ===== Region Toggle =====
document.querySelectorAll('.region-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.dataset.section;
    const region = btn.dataset.region;
    // Update buttons
    document.querySelectorAll(`.region-btn[data-section="${section}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Update content
    document.querySelectorAll(`.region-content[data-section="${section}"]`).forEach(c => c.classList.remove('active'));
    document.querySelector(`.region-content[data-section="${section}"][data-region="${region}"]`).classList.add('active');
  });
});

// ===== Calendar Generation =====
function generateCalendar(containerId, year, month, highlights, lang) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const monthNamesTW = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const monthNamesEN = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNamesTW = ['日', '一', '二', '三', '四', '五', '六'];
  const dayNamesEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthNames = lang === 'tw' ? monthNamesTW : monthNamesEN;
  const dayNames = lang === 'tw' ? dayNamesTW : dayNamesEN;

  const title = document.createElement('div');
  title.className = 'cal-title';
  title.textContent = lang === 'tw' ? `${year} 年 ${monthNames[month]}` : `${monthNames[month]} ${year}`;
  container.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'cal-grid';

  dayNames.forEach(d => {
    const h = document.createElement('div');
    h.className = 'cal-header';
    h.textContent = d;
    grid.appendChild(h);
  });

  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayEl = document.createElement('div');
    dayEl.className = 'cal-day';
    dayEl.textContent = d;

    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dow = new Date(year, month - 1, d).getDay();

    if (dow === 0 || dow === 6) dayEl.classList.add('weekend');
    if (highlights[dateStr]) {
      dayEl.classList.add(highlights[dateStr]);
    }

    grid.appendChild(dayEl);
  }

  container.appendChild(grid);

  const legend = document.createElement('div');
  legend.className = 'cal-legend';
  if (lang === 'tw') {
    legend.innerHTML = `
      <span><span class="cal-legend-dot" style="background:#fef2f2;border:1px solid #dc2626;"></span>國定假日</span>
      <span><span class="cal-legend-dot" style="background:#fef9c3;border:1px solid #854d0e;"></span>需請假</span>
      <span><span class="cal-legend-dot" style="background:#dbeafe;border:1px solid #1e40af;"></span>連休（週末）</span>
    `;
  } else {
    legend.innerHTML = `
      <span><span class="cal-legend-dot" style="background:#fef2f2;border:1px solid #dc2626;"></span>Federal Holiday</span>
      <span><span class="cal-legend-dot" style="background:#fef9c3;border:1px solid #854d0e;"></span>PTO Needed</span>
      <span><span class="cal-legend-dot" style="background:#dbeafe;border:1px solid #1e40af;"></span>Weekend</span>
    `;
  }
  container.appendChild(legend);
}

// Taiwan Calendar - Dec 2026
// 12/25 Fri = Constitution Day (holiday), 12/26 Sat, 12/27 Sun = weekend
// 12/28 Mon - 12/31 Thu = need leave
// 1/1 Fri = New Year's Day, 1/2 Sat, 1/3 Sun = weekend
const twDecHighlights = {
  '2026-12-25': 'holiday',
  '2026-12-26': 'vacation',
  '2026-12-27': 'vacation',
  '2026-12-28': 'leave',
  '2026-12-29': 'leave',
  '2026-12-30': 'leave',
  '2026-12-31': 'leave'
};
const twJanHighlights = {
  '2027-01-01': 'holiday',
  '2027-01-02': 'vacation',
  '2027-01-03': 'vacation'
};

// US Calendar - Dec 2026
// 12/25 Fri = Christmas Day (federal holiday), 12/26 Sat, 12/27 Sun = weekend
// 12/28 Mon - 12/31 Thu = need PTO
// 1/1 Fri = New Year's Day, 1/2 Sat, 1/3 Sun = weekend
const usDecHighlights = {
  '2026-12-25': 'holiday',
  '2026-12-26': 'vacation',
  '2026-12-27': 'vacation',
  '2026-12-28': 'leave',
  '2026-12-29': 'leave',
  '2026-12-30': 'leave',
  '2026-12-31': 'leave'
};
const usJanHighlights = {
  '2027-01-01': 'holiday',
  '2027-01-02': 'vacation',
  '2027-01-03': 'vacation'
};

generateCalendar('cal-dec-tw', 2026, 12, twDecHighlights, 'tw');
generateCalendar('cal-jan-tw', 2027, 1, twJanHighlights, 'tw');
generateCalendar('cal-dec-us', 2026, 12, usDecHighlights, 'en');
generateCalendar('cal-jan-us', 2027, 1, usJanHighlights, 'en');

// ===== Itinerary Tabs =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.itinerary-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(btn.dataset.tab);
    if (panel) panel.classList.add('active');
  });
});

// ===== Leaflet Maps =====
function createIcon(color, label) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background:${color};
      color:#fff;
      width:32px;height:32px;
      border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:14px;font-weight:700;
      box-shadow:0 2px 8px rgba(0,0,0,0.3);
      border:2px solid #fff;
    ">${label}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20]
  });
}

// Ski resort map
const skiMapEl = document.getElementById('skiMapView');
if (skiMapEl) {
  const skiMap = L.map('skiMapView').setView([47.2, 11.5], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(skiMap);

  const skiResorts = [
    { name: 'SkiWelt Wilder Kaiser', lat: 47.505, lng: 12.215, km: 275, price: '€372/6天', tag: 'CP值之王' },
    { name: 'Saalbach-Hinterglemm', lat: 47.391, lng: 12.636, km: 270, price: '€425/6天', tag: '中級天堂' },
    { name: 'Sölden', lat: 46.966, lng: 11.007, km: 142, price: '€432/6天', tag: '冰川壯景' },
    { name: 'St. Anton am Arlberg', lat: 47.129, lng: 10.268, km: 305, price: '€450/6天', tag: '傳奇雪場' }
  ];

  skiResorts.forEach(r => {
    L.marker([r.lat, r.lng], { icon: createIcon('#0ea5e9', '⛷') })
      .addTo(skiMap)
      .bindPopup(`<strong>${r.name}</strong><br>${r.tag}<br>雪道: ${r.km}km<br>價格: ${r.price}`);
  });

  const nearbyCities = [
    { name: '因斯布魯克 Innsbruck', lat: 47.269, lng: 11.404 },
    { name: '薩爾茲堡 Salzburg', lat: 47.809, lng: 13.055 },
    { name: '慕尼黑 München', lat: 48.135, lng: 11.582 }
  ];
  nearbyCities.forEach(c => {
    L.marker([c.lat, c.lng], { icon: createIcon('#64748b', '🏙') })
      .addTo(skiMap)
      .bindPopup(`<strong>${c.name}</strong><br>交通樞紐`);
  });
}

// Main interactive map
const mainMapEl = document.getElementById('mainMap');
if (mainMapEl) {
  const mainMap = L.map('mainMap').setView([48.0, 14.0], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mainMap);

  const allCities = [
    { name: '維也納 Wien', lat: 48.208, lng: 16.373, color: '#7c3aed', desc: '音樂之都', highlights: '美泉宮、聖史蒂芬大教堂、霍夫堡皇宮', market: '市政廳廣場聖誕市集' },
    { name: '薩爾茲堡 Salzburg', lat: 47.809, lng: 13.055, color: '#059669', desc: '莫札特故鄉', highlights: '薩爾茲堡要塞、米拉貝爾宮', market: '大教堂廣場聖誕市集' },
    { name: '慕尼黑 München', lat: 48.135, lng: 11.582, color: '#2563eb', desc: '巴伐利亞首府', highlights: '瑪利亞廣場、皇家啤酒屋', market: '瑪利亞廣場聖誕市集' },
    { name: '布拉格 Praha', lat: 50.075, lng: 14.437, color: '#dc2626', desc: '百塔之城', highlights: '布拉格城堡、查理大橋', market: '舊城廣場聖誕市集' },
    { name: '布達佩斯 Budapest', lat: 47.497, lng: 19.040, color: '#d97706', desc: '多瑙河明珠', highlights: '國會大廈、漁人堡、塞切尼溫泉', market: 'Vörösmarty廣場聖誕市集' },
    { name: '布拉提斯拉瓦 Bratislava', lat: 48.148, lng: 17.107, color: '#475569', desc: '距維也納60km', highlights: '城堡、藍色教堂', market: '舊城區聖誕市集' },
    { name: '因斯布魯克 Innsbruck', lat: 47.269, lng: 11.404, color: '#0d9488', desc: '阿爾卑斯山城', highlights: '黃金屋頂、北山纜車', market: '舊城區聖誕市集' },
    { name: '哈修塔特 Hallstatt', lat: 47.562, lng: 13.649, color: '#0891b2', desc: 'UNESCO世界遺產', highlights: '鹽礦、天空步道', market: '' },
    { name: '瓦杜茲 Vaduz', lat: 47.141, lng: 9.521, color: '#6366f1', desc: '列支敦斯登首都', highlights: '城堡、郵票博物館', market: '' }
  ];

  allCities.forEach(c => {
    const popupContent = `
      <div style="min-width:200px;">
        <strong style="font-size:14px;">${c.name}</strong>
        <p style="margin:4px 0;color:#475569;font-size:12px;">${c.desc}</p>
        <p style="margin:4px 0;font-size:12px;"><strong>必訪：</strong>${c.highlights}</p>
        ${c.market ? `<p style="margin:4px 0;font-size:12px;color:#dc2626;"><strong>聖誕市集：</strong>${c.market}</p>` : ''}
      </div>
    `;
    L.marker([c.lat, c.lng], { icon: createIcon(c.color, '🏙') })
      .addTo(mainMap)
      .bindPopup(popupContent);
  });

  const skiResorts = [
    { name: 'SkiWelt', lat: 47.505, lng: 12.215, tag: 'CP值之王' },
    { name: 'Saalbach', lat: 47.391, lng: 12.636, tag: '中級天堂' },
    { name: 'Sölden', lat: 46.966, lng: 11.007, tag: '冰川壯景' },
    { name: 'St. Anton', lat: 47.129, lng: 10.268, tag: '傳奇雪場' }
  ];

  skiResorts.forEach(r => {
    L.marker([r.lat, r.lng], { icon: createIcon('#0ea5e9', '⛷') })
      .addTo(mainMap)
      .bindPopup(`<strong>${r.name}</strong><br>${r.tag}`);
  });

  // Budget ski resorts markers
  const budgetResorts = [
    { name: 'Bansko 班斯科', lat: 41.836, lng: 23.488, country: '🇧🇬 保加利亞', tag: '最佳CP值', daily: '€121/天' },
    { name: 'Jasná 亞斯納', lat: 48.996, lng: 19.586, country: '🇸🇰 斯洛伐克', tag: '進階推薦', daily: '€165/天' },
    { name: 'Grandvalira', lat: 42.556, lng: 1.672, country: '🇦🇩 安道爾', tag: '最大雪場', daily: '€174/天' },
    { name: 'Borovets 博羅維茨', lat: 42.268, lng: 23.607, country: '🇧🇬 保加利亞', tag: '初學者友善', daily: '€110/天' },
    { name: 'Zakopane 扎科帕內', lat: 49.299, lng: 19.951, country: '🇵🇱 波蘭', tag: '纜車最便宜', daily: '€110/天' },
    { name: 'Poiana Brașov', lat: 45.594, lng: 25.555, country: '🇷🇴 羅馬尼亞', tag: '最美風景', daily: '€117/天' },
    { name: 'Kranjska Gora', lat: 46.484, lng: 13.786, country: '🇸🇮 斯洛維尼亞', tag: '近布萊德湖', daily: '€150/天' },
    { name: 'Gudauri 古道里', lat: 42.458, lng: 44.471, country: '🇬🇪 喬治亞', tag: '全歐最便宜', daily: '€88/天' }
  ];
  budgetResorts.forEach(r => {
    L.marker([r.lat, r.lng], { icon: createIcon('#27ae60', '💰') })
      .addTo(mainMap)
      .bindPopup(`<strong>${r.name}</strong><br>${r.country}<br>${r.tag}<br>每日花費: ${r.daily}`);
  });

  // Asia ski resort markers (Japan & Korea - shown on a separate mini-map or as info)
  // Note: Asia resorts are too far for the European map. We'll create a mini Asia map.

  // Create Asia mini map if container exists
  const asiaMapEl = document.getElementById('asiaMapView');
  if (asiaMapEl) {
    const asiaMap = L.map('asiaMapView').setView([37.5, 137], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(asiaMap);

    const asiaResorts = [
      { name: 'Niseko ニセコ', lat: 42.862, lng: 140.305, country: '🇯🇵 北海道', tag: '粉雪聖地', daily: '€180/天' },
      { name: 'Hakuba 白馬', lat: 36.698, lng: 137.832, country: '🇯🇵 長野', tag: '奧運聖地', daily: '€156/天' },
      { name: 'Nozawa Onsen 野沢温泉', lat: 36.921, lng: 138.626, country: '🇯🇵 長野', tag: '🏆 最佳CP值', daily: '€120/天' },
      { name: 'Furano 富良野', lat: 43.339, lng: 142.383, country: '🇯🇵 北海道', tag: '家庭首選', daily: '€108/天' },
      { name: 'Myoko 妙高高原', lat: 36.867, lng: 138.180, country: '🇯🇵 新潟', tag: '隱藏寶石', daily: '€100/天' },
      { name: 'Yongpyong 龍平', lat: 37.644, lng: 128.680, country: '🇰🇷 平昌', tag: '奧運場地', daily: '€128/天' },
      { name: 'High1 하이원', lat: 37.204, lng: 128.838, country: '🇰🇷 旌善', tag: 'Ski-in/out', daily: '€117/天' },
      { name: 'Phoenix 피닉스', lat: 37.583, lng: 128.326, country: '🇰🇷 平昌', tag: '均衡選擇', daily: '€108/天' },
      { name: 'Vivaldi 비발디', lat: 37.647, lng: 127.686, country: '🇰🇷 洪川', tag: '離首爾最近', daily: '€91/天' }
    ];
    asiaResorts.forEach(r => {
      const color = r.country.includes('🇯🇵') ? '#dc2626' : '#2563eb';
      L.marker([r.lat, r.lng], { icon: createIcon(color, r.country.includes('🇯🇵') ? '🗾' : '🇰🇷') })
        .addTo(asiaMap)
        .bindPopup(`<strong>${r.name}</strong><br>${r.country}<br>${r.tag}<br>每日花費: ${r.daily}`);
    });

    // Add Taipei marker
    L.marker([25.033, 121.565], { icon: createIcon('#f59e0b', '✈️') })
      .addTo(asiaMap)
      .bindPopup('<strong>台北 Taipei</strong><br>出發地');
  }

  // Route lines
  const routeA = [[48.135, 11.582], [47.809, 13.055], [47.505, 12.215], [48.208, 16.373], [50.075, 14.437]];
  L.polyline(routeA, { color: '#2563eb', weight: 2, opacity: 0.5, dashArray: '8, 8' }).addTo(mainMap).bindPopup('方案A：經典三國路線');

  const routeB = [[48.208, 16.373], [47.497, 19.040], [48.148, 17.107], [50.075, 14.437]];
  L.polyline(routeB, { color: '#7c3aed', weight: 2, opacity: 0.5, dashArray: '4, 8' }).addTo(mainMap).bindPopup('方案B：深度五國路線（延伸段）');
}

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll('.leave-card, .flight-card, .ski-card, .city-card, .budget-card, .mini-city, .timeline-item, .piste-card, .level-card');

revealElements.forEach(el => el.classList.add('reveal'));

setTimeout(() => {
  revealElements.forEach(el => el.classList.add('animate-ready'));
}, 100);

const observerOptions = { threshold: 0.05, rootMargin: '0px 0px -20px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Initialize prices with default currency (NTD)
updateAllPrices();


// ===== Language Toggle =====
let currentLang = 'zh';

function switchLanguage(lang) {
  currentLang = lang;
  
  // Update all elements with data-zh / data-en attributes
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      // Check if element has child nodes that should be preserved (like price-val spans)
      const priceVal = el.querySelector('.price-val');
      if (priceVal) {
        // Don't replace innerHTML for price cells
        return;
      }
      el.textContent = text;
    }
  });
  
  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');
}

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    switchLanguage(btn.dataset.lang);
  });
});
