// ===== Internationalization (i18n) System =====
const i18n = {
  currentLang: 'zh',

  translations: {
    // ===== Navigation =====
    'nav.overview': { zh: '總覽', en: 'Overview' },
    'nav.schedule': { zh: '行程', en: 'Schedule' },
    'nav.map': { zh: '地圖', en: 'Map' },
    'nav.stay': { zh: '住宿', en: 'Stay' },
    'nav.food': { zh: '美食', en: 'Food' },
    'nav.tips': { zh: '資訊', en: 'Tips' },

    // ===== Hero =====
    'hero.date': { zh: '2025 年 11 月 29 日 — 12 月 2 日', en: 'Nov 29 — Dec 2, 2025' },
    'hero.subtitle': { zh: '拿坡里 · 龐貝 · 卡塞塔', en: 'Napoli · Pompeii · Caserta' },
    'hero.tagline': {
      zh: '穿越古羅馬遺跡、波旁王宮，探訪披薩的故鄉',
      en: 'A journey through ancient ruins, royal palaces, and the birthplace of pizza'
    },
    'hero.cta': { zh: '探索行程', en: 'Explore the Itinerary' },

    // ===== Overview =====
    'overview.title': { zh: '旅行概覽', en: 'Trip Overview' },
    'overview.dates': { zh: '日期', en: 'Dates' },
    'overview.dates.value': { zh: '11/29（六）— 12/2（二）', en: 'Nov 29 (Sat) — Dec 2 (Tue)' },
    'overview.dates.detail': { zh: '4 天 3 夜', en: '4 days, 3 nights' },
    'overview.flight': { zh: '航班', en: 'Flight' },
    'overview.flight.arrive': { zh: '抵達：13:15 NAP', en: 'Arrive: 13:15 NAP' },
    'overview.flight.depart': { zh: '離開：15:40 NAP', en: 'Depart: 15:40 NAP' },
    'overview.accommodation': { zh: '住宿', en: 'Accommodation' },
    'overview.accommodation.detail': { zh: 'Via Galileo Ferraris, 4', en: 'Via Galileo Ferraris, 4' },
    'overview.highlights': { zh: '亮點', en: 'Highlights' },
    'overview.highlights.value': { zh: 'Pompeii、Caserta 王宮', en: 'Pompeii, Caserta Palace' },
    'overview.highlights.detail': { zh: '歷史中心、MANN 考古博物館', en: 'Historic Center, MANN Museum' },
    'overview.weather': { zh: '天氣', en: 'Weather' },
    'overview.weather.detail': { zh: '偏涼微濕，可能有雨', en: 'Moderately chilly, possible rain' },
    'overview.budget': { zh: '預估花費', en: 'Est. Budget' },
    'overview.budget.value': { zh: '約 €200-250 / 人', en: '~€200-250 / person' },
    'overview.budget.detail': { zh: '不含機票與住宿', en: 'Excl. flights & accommodation' },

    // ===== Schedule =====
    'schedule.title': { zh: '每日行程', en: 'Daily Itinerary' },
    'day1.theme': { zh: '抵達與舊城區', en: 'Arrival & Old Town' },
    'day2.theme': { zh: 'Caserta 王宮', en: 'Caserta Palace' },
    'day3.theme': { zh: 'Pompeii 與地下城', en: 'Pompeii & Underground' },
    'day4.theme': { zh: '博物館與回程', en: 'Museum & Departure' },

    // Day 1 header
    'day1.header': { zh: 'Day 1：抵達與歷史中心', en: 'Day 1: Arrival & Historic Center' },
    'day1.header.sub': { zh: '抵達拿坡里，初探千年古城', en: 'Arrive in Naples and explore the ancient city center' },

    // Day 1 items
    'day1.t1.title': { zh: '抵達拿坡里國際機場 (NAP)', en: 'Arrive at Naples International Airport (NAP)' },
    'day1.t1.desc': { zh: '抵達拿坡里國際機場，辦理入境手續、領取行李。', en: 'Arrive at Naples International Airport, clear immigration and collect luggage.' },
    'day1.t2.title': { zh: '搭乘 Alibus 前往市區', en: 'Alibus to City Center' },
    'day1.t2.desc': {
      zh: '搭乘 Alibus 機場巴士前往中央車站 (Stazione Centrale)。這是最便捷且經濟實惠的機場交通方式。',
      en: 'Take the Alibus airport shuttle to Stazione Centrale. This is the most convenient and affordable airport transfer option.'
    },
    'day1.t3.title': { zh: '入住 CX Naples Centrale', en: 'Check-in at CX Naples Centrale' },
    'day1.t3.desc': { zh: '入住飯店，稍作休息。位於中央車站附近，交通便利。', en: 'Check in to the hotel and take a short rest. Conveniently located near the central station.' },
    'day1.t4.title': { zh: 'Duomo di Napoli 拿坡里主教座堂', en: 'Duomo di Napoli' },
    'day1.t4.desc': {
      zh: '參觀供奉城市守護神聖熱內羅 (San Gennaro) 的主教座堂。這座建於 13 世紀的哥德式教堂，內部收藏了珍貴的藝術品和聖物，包括每年舉行的聖血液化奇蹟。',
      en: 'Visit the cathedral dedicated to the city\'s patron saint San Gennaro. This 13th-century Gothic cathedral houses precious artworks and relics, including the famous annual blood liquefaction miracle.'
    },
    'day1.t5.title': { zh: 'Cappella Sansevero 聖塞維羅禮拜堂', en: 'Cappella Sansevero' },
    'day1.t5.desc': {
      zh: '觀賞舉世聞名的「蒙紗的基督」(Cristo Velato) 雕塑，其精湛的大理石薄紗雕刻技藝令人嘆為觀止。這件由 Giuseppe Sanmartino 於 1753 年創作的傑作，被譽為世界上最偉大的雕塑之一。',
      en: 'Admire the world-famous "Veiled Christ" (Cristo Velato) sculpture, whose exquisite marble veil carving technique is breathtaking. Created by Giuseppe Sanmartino in 1753, it is considered one of the greatest sculptures in the world.'
    },
    'day1.t5.warning': { zh: '務必提前訂票！', en: 'Book in advance!' },
    'day1.t6.title': { zh: '晚餐：正宗拿坡里披薩', en: 'Dinner: Authentic Neapolitan Pizza' },
    'day1.t6.desc': {
      zh: '來到披薩的發源地，品嚐最正宗的拿坡里披薩！推薦 <strong>Sorbillo</strong> 或 <strong>L\'Antica Pizzeria da Michele</strong>，兩家都是世界聞名的披薩店。經典的 Margherita 只需 €5-8，但請準備好排隊。',
      en: 'Experience pizza at its birthplace! Try <strong>Sorbillo</strong> or <strong>L\'Antica Pizzeria da Michele</strong>, both world-renowned pizzerias. A classic Margherita costs just €5-8, but be prepared to queue.'
    },

    // Day 2 header
    'day2.header': { zh: 'Day 2：Caserta 王宮一日遊', en: 'Day 2: Royal Palace of Caserta' },
    'day2.header.sub': { zh: '波旁王朝的輝煌 — 卡塞塔王宮一日遊', en: 'The splendor of the Bourbon dynasty — a day trip to Caserta' },

    // Day 2 items
    'day2.t1.title': { zh: '早餐 & 前往車站', en: 'Breakfast & Head to Station' },
    'day2.t1.desc': {
      zh: '享用早餐後前往中央車站。拿坡里的咖啡文化舉世聞名，別忘了來一杯濃縮咖啡 (Caffè)。',
      en: 'Have breakfast and head to the central station. Naples is famous for its coffee culture — don\'t forget to grab an espresso (Caffè).'
    },
    'day2.t2.title': { zh: '搭火車前往 Caserta', en: 'Train to Caserta' },
    'day2.t2.desc': {
      zh: '從 Napoli Centrale 搭乘區域火車 (Regionale) 前往 Caserta 站。班次頻繁，可使用 Trenitalia App 查詢時刻。',
      en: 'Take a regional train (Regionale) from Napoli Centrale to Caserta station. Trains run frequently — use the Trenitalia App to check schedules.'
    },
    'day2.t3.title': { zh: 'Reggia di Caserta 卡塞塔王宮', en: 'Reggia di Caserta' },
    'day2.t3.desc': {
      zh: '世界上最大的宮殿之一，被譽為「義大利的凡爾賽宮」。由建築師 Luigi Vanvitelli 設計，擁有超過 1200 個房間和佔地 123 公頃的皇家花園。上午參觀宮殿內部的宏偉樓梯、皇室套房和華麗裝飾；下午探索壯觀的花園，沿途有噴泉、瀑布和雕塑。花園盡頭的英國花園 (Giardino Inglese) 不容錯過。冬季建議租自行車或搭乘園區巴士。',
      en: 'One of the largest palaces in the world, often called "Italy\'s Versailles." Designed by architect Luigi Vanvitelli, it boasts over 1,200 rooms and 123-hectare royal gardens. Explore the grand staircase, royal apartments, and lavish decorations in the morning; discover the spectacular gardens with fountains, waterfalls, and sculptures in the afternoon. Don\'t miss the English Garden (Giardino Inglese) at the far end. In winter, consider renting a bicycle or taking the park shuttle.'
    },
    'day2.t4.title': { zh: '在 Caserta 午餐', en: 'Lunch in Caserta' },
    'day2.t4.desc': {
      zh: '在卡塞塔鎮上享用午餐。當地以 Mozzarella di Bufala 水牛莫札瑞拉起司聞名。',
      en: 'Enjoy lunch in Caserta town. The area is famous for its Mozzarella di Bufala (buffalo mozzarella).'
    },
    'day2.t5.title': { zh: '搭火車返回拿坡里', en: 'Train back to Naples' },
    'day2.t5.desc': { zh: '搭乘區域火車返回 Napoli Centrale。', en: 'Take the regional train back to Napoli Centrale.' },
    'day2.t6.title': { zh: 'Piazza del Plebiscito 與周邊 平民表決廣場', en: 'Piazza del Plebiscito & Surroundings' },
    'day2.t6.desc': {
      zh: '拿坡里最宏偉的廣場，兩側分別是拿坡里王宮 (Palazzo Reale) 和聖方濟各保拉聖殿。順路參觀華麗的翁貝托一世拱廊街 (Galleria Umberto I)，其宏偉的玻璃穹頂和新古典主義建築令人驚嘆。',
      en: 'Naples\' grandest square, flanked by the Royal Palace (Palazzo Reale) and the Basilica of San Francesco di Paola. Also visit the elegant Galleria Umberto I nearby, with its magnificent glass dome and neoclassical architecture.'
    },

    // Day 3 header
    'day3.header': { zh: 'Day 3：Pompeii 與拿坡里地下城', en: 'Day 3: Pompeii & Underground Naples' },
    'day3.header.sub': { zh: '龐貝古城遺跡與地底探險', en: 'Ancient ruins and underground adventure' },

    // Day 3 items
    'day3.t1.title': { zh: '搭乘 Circumvesuviana 前往 Pompeii', en: 'Circumvesuviana to Pompeii' },
    'day3.t1.desc': {
      zh: '從 Napoli Centrale (Garibaldi) 搭乘環維蘇威線 (Circumvesuviana) 火車前往 Pompei Scavi - Villa dei Misteri 站。注意：此線路較為擁擠，建議提早出發。',
      en: 'Take the Circumvesuviana train from Napoli Centrale (Garibaldi) to Pompei Scavi - Villa dei Misteri station. Note: this line can be crowded, so leave early.'
    },
    'day3.t2.title': { zh: 'Pompeii 龐貝古城遺跡', en: 'Pompeii Archaeological Site' },
    'day3.t2.desc': {
      zh: '西元 79 年被維蘇威火山噴發掩埋的古羅馬城市，是世界上保存最完整的古代城市遺址之一。必看景點包括：圓形劇場 (Amphitheatre)、阿波羅神殿 (Temple of Apollo)、公共浴場 (Forum Baths)、悲劇詩人之家 (House of the Tragic Poet) 以及神秘別墅 (Villa of the Mysteries) 的壁畫。冬季開放時間 9:00-17:00，最後入場 15:30。',
      en: 'An ancient Roman city buried by the eruption of Mount Vesuvius in 79 AD, one of the best-preserved ancient city sites in the world. Must-see highlights include the Amphitheatre, Temple of Apollo, Forum Baths, House of the Tragic Poet, and the frescoes of the Villa of the Mysteries. Winter hours: 9:00-17:00, last entry 15:30.'
    },
    'day3.t3.title': { zh: '在 Pompeii 附近午餐', en: 'Lunch near Pompeii' },
    'day3.t3.desc': {
      zh: '在龐貝遺跡附近的餐廳用餐。推薦品嚐當地的海鮮義大利麵或烤蔬菜。',
      en: 'Dine at a restaurant near the Pompeii ruins. Try the local seafood pasta or grilled vegetables.'
    },
    'day3.t4.title': { zh: '返回拿坡里', en: 'Return to Naples' },
    'day3.t4.desc': { zh: '搭乘環維蘇威線返回 Napoli Centrale (Garibaldi)。', en: 'Take the Circumvesuviana back to Napoli Centrale (Garibaldi).' },
    'day3.t5.title': { zh: 'Napoli Sotterranea 拿坡里地下城', en: 'Napoli Sotterranea' },
    'day3.t5.desc': {
      zh: '探索拿坡里地底下長達 2400 年歷史的古羅馬水道系統和二戰防空洞。導覽行程約 1.5 小時，深入地下 40 公尺，穿越狹窄的隧道和巨大的蓄水池。這是一段令人難忘的地下冒險。',
      en: 'Explore 2,400 years of history beneath Naples — ancient Roman aqueducts and WWII bomb shelters. The guided tour lasts about 1.5 hours, descending 40 meters underground through narrow tunnels and vast cisterns. An unforgettable underground adventure.'
    },

    // Day 4 header
    'day4.header': { zh: 'Day 4：博物館與回程', en: 'Day 4: Museum & Departure' },
    'day4.header.sub': { zh: '最後巡禮與告別拿坡里', en: 'Final explorations and farewell to Naples' },

    // Day 4 items
    'day4.t1.title': { zh: 'MANN — 國立考古博物館', en: 'MANN — National Archaeological Museum' },
    'day4.t1.desc': {
      zh: '世界上最重要的古羅馬文物博物館之一，收藏了大量來自龐貝和赫庫蘭尼姆古城的珍貴壁畫、馬賽克和雕塑。必看展品包括：亞歷山大馬賽克 (Alexander Mosaic)、法爾內塞收藏 (Farnese Collection) 的巨型雕塑，以及「秘密房間」(Secret Cabinet) 中的古羅馬情色藝術品。與前一天的龐貝之行相輔相成。',
      en: 'One of the world\'s most important museums of Roman antiquities, housing precious frescoes, mosaics, and sculptures from Pompeii and Herculaneum. Must-see exhibits include the Alexander Mosaic, the monumental Farnese Collection sculptures, and the ancient Roman erotic art in the "Secret Cabinet." Perfectly complements the previous day\'s Pompeii visit.'
    },
    'day4.t2.title': { zh: '午餐', en: 'Lunch' },
    'day4.t2.desc': { zh: '在博物館附近快速用餐。', en: 'Quick lunch near the museum.' },
    'day4.t3.title': { zh: '退房 & 前往機場', en: 'Checkout & Head to Airport' },
    'day4.t3.desc': {
      zh: '退房並搭乘 Alibus 或計程車前往拿坡里機場 (NAP)。建議預留充足時間。',
      en: 'Check out and take the Alibus or a taxi to Naples Airport (NAP). Allow plenty of time.'
    },
    'day4.t4.title': { zh: '從 NAP 起飛', en: 'Departure from NAP' },
    'day4.t4.desc': { zh: '搭乘班機離開拿坡里。Arrivederci, Napoli!', en: 'Board the flight and leave Naples. Arrivederci, Napoli!' },

    // ===== Map =====
    'map.title': { zh: '景點地圖', en: 'Interactive Map' },
    'map.legend.attractions': { zh: '景點', en: 'Attractions' },
    'map.legend.food': { zh: '美食', en: 'Food' },
    'map.legend.stay': { zh: '住宿', en: 'Accommodation' },
    'map.legend.transport': { zh: '交通', en: 'Transport' },

    // ===== Accommodation =====
    'accommodation.title': { zh: '住宿資訊', en: 'Accommodation' },
    'accommodation.selected': { zh: '已選擇', en: 'Selected' },
    'accommodation.pros': { zh: '優點', en: 'Pros' },
    'accommodation.cons': { zh: '缺點', en: 'Cons' },
    'accommodation.pro1': { zh: '不用睡沙發', en: 'No need to sleep on sofa' },
    'accommodation.pro2': { zh: '靠近中央車站', en: 'Near central station' },
    'accommodation.pro3': { zh: '鄰近市中心', en: 'Close to city center' },
    'accommodation.con1': { zh: '青旅型態住宿', en: 'Hostel-style accommodation' },
    'accommodation.price': { zh: '€163 / 3 晚（總計）', en: '€163 / 3 nights (total)' },
    'accommodation.dates': { zh: '2025 年 11/29 — 12/2', en: 'Nov 29 — Dec 2, 2025' },
    'accommodation.view': { zh: '在 Booking.com 上查看', en: 'View on Booking.com' },
    'accommodation.others': { zh: '其他考慮過的選項', en: 'Other Options Considered' },
    'accommodation.opt1.desc': { zh: '1 張雙人床 + 1 張沙發床', en: '1 Double bed + 1 Sofa bed' },
    'accommodation.opt2.desc': { zh: '1 張雙人床 + 1 張上下舖（同房間）', en: '1 Double bed + 1 Bunk bed (same room)' },
    'accommodation.opt3.desc': { zh: '景觀不錯，但離市中心較遠', en: 'Nice view, but far from city center' },
    'accommodation.opt4.desc': { zh: '靠近車站、床位分開，但較貴', en: 'Near station, separate beds, but pricier' },

    // ===== Food =====
    'food.title': { zh: '美食推薦', en: 'Food & Dining' },
    'food.pizza.name': { zh: '拿坡里披薩', en: 'Neapolitan Pizza' },
    'food.pizza.sub': { zh: '披薩的發源地', en: 'Birthplace of pizza' },
    'food.pizza.desc': {
      zh: '拿坡里是披薩的發源地。經典的 Margherita 使用 San Marzano 番茄、Mozzarella di Bufala 和新鮮羅勒，在高溫窯爐中烤製 90 秒。',
      en: 'Naples is the birthplace of pizza. The classic Margherita uses San Marzano tomatoes, Mozzarella di Bufala, and fresh basil, baked in a wood-fired oven for 90 seconds.'
    },
    'food.pizza.rec': { zh: '推薦店家：', en: 'Recommended:' },
    'food.pizza.r1': { zh: '<strong>Sorbillo</strong> — Via dei Tribunali, 32（歷史中心最知名）', en: '<strong>Sorbillo</strong> — Via dei Tribunali, 32 (most famous in the historic center)' },
    'food.pizza.r2': { zh: '<strong>L\'Antica Pizzeria da Michele</strong> — Via Cesare Sersale, 1（1870 年創立）', en: '<strong>L\'Antica Pizzeria da Michele</strong> — Via Cesare Sersale, 1 (est. 1870)' },
    'food.pizza.r3': { zh: '<strong>Pizzeria Starita</strong> — Via Materdei, 27（炸披薩 Montanara 必試）', en: '<strong>Pizzeria Starita</strong> — Via Materdei, 27 (must-try fried pizza Montanara)' },

    'food.pepe.name': { zh: 'Pepe in Grani', en: 'Pepe in Grani' },
    'food.pepe.sub': { zh: '世界頂級披薩', en: 'World-class pizza' },
    'food.pepe.desc': {
      zh: '位於 Caiazzo 小鎮（距拿坡里約 1 小時車程），由披薩大師 Franco Pepe 主理。被多次評選為世界最佳披薩店之一，以輕盈易消化的麵團和創意高品質配料聞名。需要提前預約。',
      en: 'Located in the town of Caiazzo (~1 hour from Naples), run by pizza maestro Franco Pepe. Repeatedly voted one of the world\'s best pizzerias, known for its light, digestible dough and creative, high-quality toppings. Advance booking required.'
    },
    'food.pepe.info': { zh: '資訊：', en: 'Info:' },
    'food.pepe.addr': { zh: '<strong>地址：</strong>Vico San Giovanni Battista, 3, Caiazzo (CE)', en: '<strong>Address:</strong> Vico San Giovanni Battista, 3, Caiazzo (CE)' },
    'food.pepe.book': { zh: '<strong>預約：</strong>prenotazioni@pepeingrani.it', en: '<strong>Booking:</strong> prenotazioni@pepeingrani.it' },
    'food.pepe.note': { zh: '<strong>備註：</strong>距拿坡里約 1 小時，可搭配 Caserta 行程', en: '<strong>Note:</strong> Located ~1hr from Naples, consider combining with Caserta day trip' },

    'food.sfogliatella.name': { zh: 'Sfogliatella 千層酥', en: 'Sfogliatella' },
    'food.sfogliatella.sub': { zh: '拿坡里經典甜點', en: 'Classic Neapolitan pastry' },
    'food.sfogliatella.desc': {
      zh: '拿坡里最著名的甜點，有兩種形式：Riccia（酥脆千層）和 Frolla（柔軟餅皮）。內餡為甜味 Ricotta 起司混合糖漬水果和肉桂。',
      en: 'Naples\' most famous pastry, available in two forms: Riccia (crispy layers) and Frolla (soft shell). Filled with sweet ricotta cheese mixed with candied fruit and cinnamon.'
    },
    'food.sfogliatella.rec': { zh: '推薦店家：', en: 'Best spots:' },
    'food.sfogliatella.r1': { zh: '<strong>Attanasio</strong> — Vico Ferrovia, 1（中央車站旁）', en: '<strong>Attanasio</strong> — Vico Ferrovia, 1 (near Centrale station)' },
    'food.sfogliatella.r2': { zh: '<strong>Scaturchio</strong> — Piazza S. Domenico Maggiore, 19', en: '<strong>Scaturchio</strong> — Piazza S. Domenico Maggiore, 19' },

    'food.baba.name': { zh: 'Babà 蘭姆酒蛋糕', en: 'Babà' },
    'food.baba.sub': { zh: '拿坡里甜點代表', en: 'Iconic Neapolitan dessert' },
    'food.baba.desc': {
      zh: '浸泡在蘭姆酒糖漿中的蓬鬆蛋糕，是拿坡里甜點的代表之一。口感濕潤、酒香四溢，通常搭配鮮奶油享用。',
      en: 'A fluffy cake soaked in rum syrup, one of Naples\' most iconic desserts. Moist with a rich rum aroma, usually served with fresh cream.'
    },

    'food.caffe.name': { zh: 'Caffè Napoletano 拿坡里咖啡', en: 'Caffè Napoletano' },
    'food.caffe.sub': { zh: '獨特的咖啡文化', en: 'Unique coffee culture' },
    'food.caffe.desc': {
      zh: '拿坡里的咖啡文化獨樹一幟。當地人習慣站在吧台前快速喝完一杯濃縮咖啡。這裡還有「Caffè Sospeso」（懸浮咖啡）的傳統——多付一杯咖啡的錢，留給付不起的人。',
      en: 'Naples has a unique coffee culture. Locals drink their espresso standing at the bar. There\'s also the tradition of "Caffè Sospeso" (suspended coffee) — paying for an extra cup for someone who can\'t afford one.'
    },

    'food.seafood.name': { zh: '海鮮料理', en: 'Seafood' },
    'food.seafood.sub': { zh: '新鮮的港都美味', en: 'Fresh from the harbor' },
    'food.seafood.desc': {
      zh: '作為海港城市，拿坡里的海鮮新鮮美味。推薦品嚐 Spaghetti alle Vongole（蛤蜊義大利麵）、Frittura di Paranza（炸小魚）和 Impepata di Cozze（胡椒淡菜）。',
      en: 'As a port city, Naples offers incredibly fresh seafood. Try Spaghetti alle Vongole (clam pasta), Frittura di Paranza (fried small fish), and Impepata di Cozze (peppered mussels).'
    },

    // ===== Spots =====
    'spots.title': { zh: '重點景點介紹', en: 'Key Attractions' },
    'spots.pompeii.desc': {
      zh: '西元 79 年 8 月 24 日，維蘇威火山的猛烈噴發將這座繁榮的羅馬城市掩埋在數公尺厚的火山灰之下。直到 18 世紀才被重新發現，完整保存了古羅馬的街道、建築、壁畫和日常生活痕跡。佔地 66 公頃，是全球最大的露天考古遺址之一。',
      en: 'On August 24, 79 AD, a violent eruption of Mount Vesuvius buried this thriving Roman city under meters of volcanic ash. Rediscovered in the 18th century, it perfectly preserves ancient Roman streets, buildings, frescoes, and traces of daily life. Spanning 66 hectares, it is one of the largest open-air archaeological sites in the world.'
    },
    'spots.caserta.desc': {
      zh: '18 世紀由波旁王朝建造，是歐洲最後一座偉大的巴洛克宮殿。擁有超過 1200 個房間、一座皇家劇院，以及延伸 3 公里的壯觀花園。1997 年被列入聯合國世界文化遺產。宮殿的宏偉階梯 (Scalone d\'Onore) 曾出現在《星際大戰》前傳電影中。',
      en: 'Built by the Bourbon dynasty in the 18th century, it is the last great Baroque palace in Europe. With over 1,200 rooms, a royal theatre, and spectacular 3km-long gardens, it was designated a UNESCO World Heritage Site in 1997. The grand staircase (Scalone d\'Onore) appeared in the Star Wars prequel films.'
    },
    'spots.mann.desc': {
      zh: '收藏了世界上最豐富的古羅馬文物，包括龐貝出土的亞歷山大馬賽克和法爾內塞收藏。',
      en: 'Houses the world\'s richest collection of Roman antiquities, including the Alexander Mosaic from Pompeii and the Farnese Collection.'
    },
    'spots.sansevero.desc': {
      zh: '「蒙紗的基督」雕塑所在地，大理石薄紗的雕刻技藝令人嘆為觀止，被譽為世界雕塑傑作。',
      en: 'Home of the "Veiled Christ" sculpture, whose breathtaking marble veil carving is considered a masterpiece of world sculpture.'
    },
    'spots.sansevero.warn': { zh: '務必提前訂票！', en: 'Book ahead!' },
    'spots.underground.desc': {
      zh: '深入地下 40 公尺，探索 2400 年歷史的古羅馬水道系統和二戰防空洞。',
      en: 'Descend 40 meters underground to explore 2,400 years of ancient Roman aqueducts and WWII bomb shelters.'
    },
    'spots.duomo.desc': {
      zh: '供奉城市守護神聖熱內羅的哥德式教堂，每年舉行聖血液化奇蹟儀式。',
      en: 'Gothic cathedral dedicated to the city\'s patron saint San Gennaro, hosting the annual blood liquefaction miracle.'
    },
    'spots.churches': { zh: '教堂清單', en: 'Churches to Visit' },
    'spots.sunset.title': { zh: '日落觀景點：Castel Sant\'Elmo 聖埃莫堡', en: 'Sunset Spot: Castel Sant\'Elmo' },
    'spots.sunset.desc': {
      zh: '位於 Vomero 山丘上的中世紀城堡，是欣賞拿坡里灣和維蘇威火山日落的絕佳地點。建議預留約 1 小時。可搭乘纜車 (Funicolare) 上山。',
      en: 'A medieval castle on Vomero hill, offering stunning sunset views over the Bay of Naples and Mount Vesuvius. Allow about 1 hour. Take the Funicolare (cable car) up the hill.'
    },

    // ===== Budget =====
    'budget.title': { zh: '預算估算（每人）', en: 'Budget Estimate' },
    'budget.category': { zh: '類別', en: 'Category' },
    'budget.item': { zh: '項目', en: 'Item' },
    'budget.cost': { zh: '預估費用', en: 'Est. Cost' },
    'budget.tickets': { zh: '門票', en: 'Tickets' },
    'budget.transport': { zh: '交通', en: 'Transport' },
    'budget.food': { zh: '餐飲', en: 'Food' },
    'budget.alibus': { zh: 'Alibus（來回）', en: 'Alibus (x2)' },
    'budget.caserta.train': { zh: 'Caserta 火車（來回）', en: 'Train to Caserta (round trip)' },
    'budget.pompeii.train': { zh: 'Circumvesuviana 至 Pompeii（來回）', en: 'Circumvesuviana to Pompeii (round trip)' },
    'budget.local': { zh: '市區地鐵 / 巴士', en: 'Local metro/bus' },
    'budget.meals': { zh: '正餐（4 天）', en: 'Meals (4 days)' },
    'budget.snacks': { zh: '點心 & 咖啡', en: 'Snacks & Coffee' },
    'budget.total': { zh: '預估總計（每人，不含機票與住宿）', en: 'Estimated Total (per person, excl. flights & hotel)' },

    // ===== Tips =====
    'tips.title': { zh: '實用旅遊資訊', en: 'Travel Tips' },
    'tips.weather.title': { zh: '天氣', en: 'Weather' },
    'tips.weather.desc': {
      zh: '11 月底至 12 月初的拿坡里天氣較為濕冷，氣溫約 9-14°C。建議攜帶保暖外套、圍巾和雨具。室內景點如博物館和教堂是雨天的好選擇。',
      en: 'Naples in late November to early December is cool and damp, with temperatures around 9-14°C. Bring a warm jacket, scarf, and rain gear. Indoor attractions like museums and churches are great rainy-day options.'
    },
    'tips.tickets.title': { zh: '門票', en: 'Tickets' },
    'tips.tickets.desc': {
      zh: 'Cappella Sansevero 的門票必須提前數週甚至數月在官網預訂，否則幾乎無法入場。Pompeii 和 Reggia di Caserta 也建議提前線上購票以節省排隊時間。',
      en: 'Cappella Sansevero tickets must be booked weeks or even months in advance on the official website, or entry is nearly impossible. Pompeii and Reggia di Caserta tickets are also recommended to be purchased online in advance to save queuing time.'
    },
    'tips.transport.title': { zh: '交通', en: 'Transport' },
    'tips.transport.desc': {
      zh: 'Alibus 是機場到市區最便捷的交通方式（€5）。市區內可使用地鐵 Line 1（Toledo 站的藝術裝置值得一看）。前往 Pompeii 搭乘 Circumvesuviana，前往 Caserta 搭乘 Trenitalia 區域火車。',
      en: 'Alibus is the most convenient airport-to-city transfer (€5). Within the city, use Metro Line 1 (the art installations at Toledo station are worth seeing). Take the Circumvesuviana to Pompeii and Trenitalia regional trains to Caserta.'
    },
    'tips.safety.title': { zh: '安全', en: 'Safety' },
    'tips.safety.desc': {
      zh: '拿坡里整體安全，但在人多的地方（如中央車站、Spaccanapoli）要注意扒手。避免在偏僻巷弄中展示貴重物品。晚上盡量走在有燈光的主要道路上。',
      en: 'Naples is generally safe, but watch out for pickpockets in crowded areas (e.g., central station, Spaccanapoli). Avoid displaying valuables in secluded alleys. At night, stick to well-lit main roads.'
    },
    'tips.language.title': { zh: '語言', en: 'Language' },
    'tips.language.desc': {
      zh: '當地主要使用義大利語，觀光區英語溝通基本沒問題。學幾句簡單的義大利語會讓旅程更愉快：Grazie（謝謝）、Per favore（請）、Scusi（不好意思）。',
      en: 'Italian is the main language; English is generally fine in tourist areas. A few Italian phrases will enhance your trip: Grazie (thank you), Per favore (please), Scusi (excuse me).'
    },
    'tips.protips.title': { zh: '實用小撇步', en: 'Pro Tips' },
    'tips.protips.desc': {
      zh: '拿坡里的披薩店通常只收現金。建議準備足夠的歐元現金。義大利的餐廳通常會收取「Coperto」（座位費），約 €1-3/人，這是正常的。',
      en: 'Most pizzerias in Naples only accept cash. Make sure to carry enough euros. Italian restaurants typically charge a "Coperto" (cover charge) of about €1-3 per person — this is normal.'
    },

    // ===== Footer =====
    'footer.text': { zh: 'Napoli 之旅 2025 | 11/29 — 12/2', en: 'Napoli Trip 2025 | Nov 29 — Dec 2' },
    'footer.credit': { zh: '資料來源：Notion 與旅遊研究', en: 'Built with data from Notion & travel research' },
  },

  // Map marker translations
  mapTranslations: {
    'CX Naples Centrale': { zh: 'CX Naples Centrale', en: 'CX Naples Centrale', descZh: 'Via Galileo Ferraris, 4 — 我們的住宿', descEn: 'Via Galileo Ferraris, 4 — Our accommodation' },
    'Naples Airport (NAP)': { zh: '拿坡里國際機場 (NAP)', en: 'Naples Airport (NAP)', descZh: '拿坡里國際機場', descEn: 'Napoli International Airport' },
    'Napoli Centrale Station': { zh: 'Napoli Centrale 中央車站', en: 'Napoli Centrale Station', descZh: '主要火車站 — 所有行程的交通樞紐', descEn: 'Main train station — hub for all trips' },
    'Duomo di Napoli': { zh: 'Duomo di Napoli 拿坡里主教座堂', en: 'Duomo di Napoli', descZh: 'Day 1 — San Gennaro 主教座堂', descEn: 'Day 1 — Cathedral of San Gennaro' },
    'Cappella Sansevero': { zh: 'Cappella Sansevero 聖塞維羅禮拜堂', en: 'Cappella Sansevero', descZh: 'Day 1 — 蒙紗的基督 (Cristo Velato) 雕塑', descEn: 'Day 1 — Cristo Velato sculpture' },
    'Reggia di Caserta': { zh: 'Reggia di Caserta 卡塞塔王宮', en: 'Reggia di Caserta', descZh: 'Day 2 — 義大利的凡爾賽宮', descEn: 'Day 2 — Royal Palace of Caserta' },
    'Piazza del Plebiscito': { zh: 'Piazza del Plebiscito 平民表決廣場', en: 'Piazza del Plebiscito', descZh: 'Day 2 — 拿坡里最宏偉的廣場', descEn: 'Day 2 — Naples\' grandest square' },
    'Galleria Umberto I': { zh: 'Galleria Umberto I 翁貝托一世拱廊街', en: 'Galleria Umberto I', descZh: 'Day 2 — 華麗的購物拱廊', descEn: 'Day 2 — Elegant shopping arcade' },
    'Pompeii': { zh: 'Pompeii 龐貝古城', en: 'Pompeii', descZh: 'Day 3 — 被維蘇威火山掩埋的古羅馬城市', descEn: 'Day 3 — Ancient Roman city buried by Vesuvius' },
    'Napoli Sotterranea': { zh: 'Napoli Sotterranea 拿坡里地下城', en: 'Napoli Sotterranea', descZh: 'Day 3 — 地下拿坡里', descEn: 'Day 3 — Underground Naples' },
    'MANN Museum': { zh: 'MANN 國立考古博物館', en: 'MANN Museum', descZh: 'Day 4 — 國立考古博物館', descEn: 'Day 4 — National Archaeological Museum' },
    'Castel Sant\'Elmo': { zh: 'Castel Sant\'Elmo 聖埃莫堡', en: 'Castel Sant\'Elmo', descZh: '日落觀景點 — 全景視野', descEn: 'Sunset viewpoint — panoramic views' },
    'Chiesa del Gesù Nuovo': { zh: 'Chiesa del Gesù Nuovo 耶穌新教堂', en: 'Chiesa del Gesù Nuovo', descZh: '獨特外牆的巴洛克教堂', descEn: 'Baroque church with unique facade' },
    'Sorbillo': { zh: 'Sorbillo', en: 'Sorbillo', descZh: '知名拿坡里披薩 — Via dei Tribunali', descEn: 'Famous Neapolitan pizza — Via dei Tribunali' },
    'L\'Antica Pizzeria da Michele': { zh: 'L\'Antica Pizzeria da Michele', en: 'L\'Antica Pizzeria da Michele', descZh: '1870 年創立的歷史披薩店', descEn: 'Historic pizzeria since 1870' },
    'Attanasio': { zh: 'Attanasio', en: 'Attanasio', descZh: '最棒的 Sfogliatella — 中央車站旁', descEn: 'Best Sfogliatella — near Centrale station' },
  },

  // Get translation for a key
  t(key) {
    const entry = this.translations[key];
    if (!entry) return null;
    return entry[this.currentLang] || entry['zh'];
  },

  // Toggle language
  toggle() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    this.applyAll();
    localStorage.setItem('lang', this.currentLang);
    this.updateButton();
  },

  // Update button text
  updateButton() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = this.currentLang === 'zh' ? 'EN' : '中';
      btn.title = this.currentLang === 'zh' ? 'Switch to English' : '切換為中文';
    }
  },

  // Apply all translations
  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val !== null) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });
    // Update html lang attribute
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-Hant' : 'en';
    // Update map popups if map exists
    if (window.updateMapLanguage) {
      window.updateMapLanguage(this.currentLang);
    }
  },

  // Initialize
  init() {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'zh' || saved === 'en')) {
      this.currentLang = saved;
    }
    this.applyAll();
    this.updateButton();
  }
};
