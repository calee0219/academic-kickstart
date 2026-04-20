// ===== Internationalization (i18n) System =====
const i18n = {
  currentLang: 'zh',

  translations: {
    // ===== Navigation =====
    'nav.overview': { zh: 'Overview', en: 'Overview' },
    'nav.map': { zh: 'Map', en: 'Map' },
    'nav.itinerary': { zh: 'Itinerary', en: 'Itinerary' },
    'nav.food': { zh: 'Food', en: 'Food' },
    'nav.attractions': { zh: 'Attractions', en: 'Attractions' },
    'nav.reference': { zh: 'Reference', en: 'Reference' },

    // ===== Hero =====
    'hero.subtitle': {
      zh: '從倫敦出發，橫跨大西洋的 12 天美東之旅',
      en: 'A 12-day journey across the Atlantic from London to the US East Coast'
    },
    'hero.desc': {
      zh: '白山國家公園 · 波士頓美術館 · 哈佛 · MIT · 自由之路 · 賞鯨<br>中央公園 · 自由女神 · 帝國大廈 · Hamilton · 大都會博物館',
      en: 'White Mountains · Museum of Fine Arts · Harvard · MIT · Freedom Trail · Whale Watching<br>Central Park · Statue of Liberty · Empire State Building · Hamilton · The Met'
    },
    'hero.days': { zh: 'Days', en: 'Days' },
    'hero.cities': { zh: 'Cities', en: 'Cities' },
    'hero.museums': { zh: 'Museums', en: 'Museums' },

    // ===== Overview =====
    'overview.title': { zh: 'Trip Overview', en: 'Trip Overview' },
    'overview.flight': { zh: 'Flight', en: 'Flight' },
    'overview.flight.detail': { zh: '11/3 出發 · 11/14 返回', en: 'Depart 11/3 · Return 11/14' },
    'overview.accommodation': { zh: 'Accommodation', en: 'Accommodation' },
    'overview.transportation': { zh: 'Transportation', en: 'Transportation' },
    'overview.transport.detail': { zh: '從 South Station 出發', en: 'Departing from South Station' },
    'overview.highlights': { zh: 'Highlights', en: 'Highlights' },
    'overview.highlights.citypass': { zh: 'CityPass 暢遊紐約景點', en: 'CityPass for NYC attractions' },
    'overview.timeline': { zh: '行程總覽', en: 'Trip Timeline' },

    // ===== Map =====
    'map.title': { zh: 'Interactive Map', en: 'Interactive Map' },
    'map.full': { zh: 'Full Route', en: 'Full Route' },

    // ===== Itinerary =====
    'itinerary.title': { zh: 'Daily Itinerary', en: 'Daily Itinerary' },

    // --- Day 1 ---
    'day1.title': { zh: '11月3日 (五) — London → Boston', en: 'Nov 3 (Fri) — London → Boston' },
    'day1.tag': { zh: '✈ Travel Day', en: '✈ Travel Day' },
    'day1.t1.title': { zh: '從家裡出發', en: 'Depart from home' },
    'day1.t1.desc': { zh: '前往 Heathrow 機場', en: 'Head to Heathrow Airport' },
    'day1.t2.title': { zh: '抵達 Heathrow 機場', en: 'Arrive at Heathrow Airport' },
    'day1.t3.title': { zh: '飛機起飛', en: 'Flight departure' },
    'day1.t3.desc': { zh: 'London Heathrow → Boston Logan International', en: 'London Heathrow → Boston Logan International' },
    'day1.t4.title': { zh: '降落波士頓', en: 'Land in Boston' },
    'day1.t4.desc': { zh: 'Logan International Airport, Terminal E', en: 'Logan International Airport, Terminal E' },
    'day1.t5.title': { zh: '預計出關', en: 'Expected customs clearance' },
    'day1.t5.desc': { zh: '前往住宿：871 Harrison Avenue, Boston', en: 'Head to accommodation: 871 Harrison Avenue, Boston' },

    // --- Day 2 ---
    'day2.title': { zh: '11月4日 (六) — 白山國家公園', en: 'Nov 4 (Sat) — White Mountain National Forest' },
    'day2.tag': { zh: '🏔 Nature', en: '🏔 Nature' },
    'day2.t1.desc': {
      zh: '白山國家公園位於新罕布夏州，距離波士頓約 2.5 小時車程。11 月初的白山已過了秋葉高峰期，但仍可欣賞到壯麗的山景和初冬的寧靜氛圍。',
      en: 'White Mountain National Forest is located in New Hampshire, about 2.5 hours from Boston. By early November, the peak foliage season has passed, but you can still enjoy magnificent mountain views and the serene atmosphere of early winter.'
    },
    'day2.info.title': { zh: '旅遊資訊', en: 'Travel Information' },
    'day2.info.1': { zh: '距離波士頓約 140 英里，車程約 2.5 小時', en: 'About 140 miles from Boston, approximately 2.5-hour drive' },
    'day2.info.2': { zh: '11 月氣溫約 -2°C ~ 10°C，需準備保暖衣物', en: 'November temperatures around -2°C to 10°C, warm clothing needed' },
    'day2.info.3': { zh: 'Kancamagus Highway 是著名的景觀公路', en: 'Kancamagus Highway is a famous scenic byway' },
    'day2.info.4': { zh: '可搭乘 Conway Scenic Railroad 觀光火車', en: 'Take the Conway Scenic Railroad for a scenic train ride' },

    // --- Day 3 ---
    'day3.title': { zh: '11月5日 (日) — 波士頓文化巡禮', en: 'Nov 5 (Sun) — Boston Cultural Tour' },
    'day3.tag': { zh: '🎨 Culture', en: '🎨 Culture' },
    'day3.mfa.desc': {
      zh: '波士頓美術館是全美最大的博物館之一，擁有超過 50 萬件藝術品，橫跨 100 多個展廳。必看亮點包括莫內的《吉維尼附近的罌粟花田》、梵谷的《郵差約瑟夫·魯蘭》及埃及木乃伊收藏。',
      en: 'The Museum of Fine Arts is one of the largest museums in the US, housing over 500,000 artworks across 100+ galleries. Must-see highlights include Monet\'s "Poppy Field near Giverny", Van Gogh\'s "Postman Joseph Roulin", and the Egyptian mummy collection.'
    },
    'day3.harvard.desc': {
      zh: '創立於 1636 年，是美國最古老的高等學府。漫步 Harvard Yard，參觀 John Harvard 雕像（摸左腳據說能帶來好運），以及 Widener Library 壯觀的階梯。',
      en: 'Founded in 1636, it is the oldest institution of higher education in the US. Stroll through Harvard Yard, visit the John Harvard statue (rubbing the left foot is said to bring good luck), and admire the grand staircase of Widener Library.'
    },
    'day3.harvardmuseum.desc': {
      zh: '哈佛自然歷史博物館收藏了著名的玻璃花（Blaschka Glass Flowers）— 超過 4,000 件精緻的玻璃植物模型。',
      en: 'The Harvard Museum of Natural History houses the famous Blaschka Glass Flowers — over 4,000 exquisite glass botanical models.'
    },
    'day3.mit.desc': {
      zh: '麻省理工學院，世界頂尖的理工大學。校園內的 Stata Center（Frank Gehry 設計）和 MIT Media Lab 值得一看。',
      en: 'Massachusetts Institute of Technology, one of the world\'s top engineering universities. The Stata Center (designed by Frank Gehry) and MIT Media Lab are worth visiting.'
    },
    'day3.meet.title': { zh: 'Meet Chun-Chen Yao', en: 'Meet Chun-Chen Yao' },
    'day3.meet.desc': { zh: '與在波士頓的朋友碰面', en: 'Meet up with a friend in Boston' },
    'day3.lobster.desc': {
      zh: '隱藏在 Cambridge 住宅區的龍蝦小店，外觀毫不起眼卻是當地人的最愛。招牌龍蝦三明治用料實在，新鮮龍蝦肉配上義大利麵包，是波士頓最道地的龍蝦體驗之一。',
      en: 'A hidden lobster shack in a Cambridge residential area — unassuming on the outside but a local favorite. The signature lobster sandwich is generously filled with fresh lobster meat on Italian bread, one of the most authentic lobster experiences in Boston.'
    },

    // --- Day 4 ---
    'day4.title': { zh: '11月6日 (一) — 賞鯨 & 自由之路', en: 'Nov 6 (Mon) — Whale Watching & Freedom Trail' },
    'day4.tag': { zh: '🐋 Adventure', en: '🐋 Adventure' },
    'day4.whale.desc': {
      zh: '搭乘高速雙體船前往 Stellwagen Bank 國家海洋保護區賞鯨。波士頓是全球最佳賞鯨地點之一，11 月仍有機會看到座頭鯨和長鬚鯨。航程約 3-4 小時。',
      en: 'Board a high-speed catamaran to Stellwagen Bank National Marine Sanctuary for whale watching. Boston is one of the best whale watching spots in the world — in November, you may still see humpback and fin whales. The trip takes about 3-4 hours.'
    },
    'day4.whale.addr': { zh: '出發地點：Long Wharf', en: 'Departure: Long Wharf' },
    'day4.quincy.desc': {
      zh: '建於 1826 年的歷史市場，是波士頓最具代表性的美食廣場。可以品嚐新英格蘭蛤蜊巧達濃湯（Clam Chowder）、龍蝦捲等當地美食。',
      en: 'Built in 1826, this historic market is Boston\'s most iconic food hall. Try the New England Clam Chowder, lobster rolls, and other local specialties.'
    },
    'day4.freedom.desc': {
      zh: '自由之路是一條 2.5 英里的紅磚步道，串連 16 個美國獨立革命的歷史景點。從 Boston Common 出發，途經麻州議會大廈、Park Street Church、Old North Church，最終到達 Bunker Hill Monument。',
      en: 'The Freedom Trail is a 2.5-mile red-brick walking path connecting 16 historic sites of the American Revolution. Starting from Boston Common, it passes the Massachusetts State House, Park Street Church, Old North Church, and ends at Bunker Hill Monument.'
    },
    'day4.freedom.info.title': { zh: '必看景點', en: 'Must-See Sites' },
    'day4.freedom.info.1': { zh: 'Boston Common — 美國最古老的公園 (1634)', en: 'Boston Common — America\'s oldest park (1634)' },
    'day4.freedom.info.2': { zh: 'Massachusetts State House — 金色圓頂地標', en: 'Massachusetts State House — Golden dome landmark' },
    'day4.freedom.info.3': { zh: 'Granary Burying Ground — Paul Revere、Samuel Adams 長眠之地', en: 'Granary Burying Ground — Resting place of Paul Revere & Samuel Adams' },
    'day4.freedom.info.4': { zh: 'Old North Church — "One if by land, two if by sea"', en: 'Old North Church — "One if by land, two if by sea"' },
    'day4.freedom.info.5': { zh: 'Faneuil Hall — "自由的搖籃"', en: 'Faneuil Hall — "The Cradle of Liberty"' },
    'day4.krasi.desc': {
      zh: 'Back Bay 的希臘小酒館，以精緻的 meze 小菜和豐富的希臘葡萄酒聞名。每週三的 Symposium Wednesday 是希臘葡萄酒文化的慶典。',
      en: 'A Greek taverna in Back Bay, known for refined meze small plates and an extensive Greek wine list. The weekly Symposium Wednesday is a celebration of Greek wine culture.'
    },

    // --- Day 5 ---
    'day5.title': { zh: '11月7日 (二) — Work Day', en: 'Nov 7 (Tue) — Work Day' },
    'day5.tag': { zh: '💻 Work', en: '💻 Work' },
    'day5.desc': { zh: '工作日', en: 'Work day' },

    // --- Day 6 ---
    'day6.title': { zh: '11月8日 (三) — Remote Work + Asta', en: 'Nov 8 (Wed) — Remote Work + Asta' },
    'day6.tag': { zh: '💻 Work', en: '💻 Work' },
    'day6.work.title': { zh: 'Remote Work', en: 'Remote Work' },
    'day6.work.desc': { zh: '遠端工作', en: 'Remote work' },
    'day6.asta.desc': {
      zh: 'Back Bay 的 tasting menu 餐廳，主廚 Alex Crabb 以創意十足的季節性料理聞名。開放式廚房讓你近距離觀賞料理過程，是波士頓最具創意的餐廳之一。僅供 tasting menu，週日和週一公休。',
      en: 'A tasting menu restaurant in Back Bay. Chef Alex Crabb is known for creative seasonal cuisine. The open kitchen lets you watch the cooking process up close — one of Boston\'s most creative restaurants. Tasting menu only; closed Sundays and Mondays.'
    },

    // --- Day 7 ---
    'day7.title': { zh: '11月9日 (四) — Remote Work', en: 'Nov 9 (Thu) — Remote Work' },
    'day7.tag': { zh: '💻 Work', en: '💻 Work' },
    'day7.desc': { zh: '遠端工作', en: 'Remote work' },

    // --- Day 8 ---
    'day8.title': { zh: '11月10日 (五) — Boston → New York', en: 'Nov 10 (Fri) — Boston → New York' },
    'day8.tag': { zh: '🛫 NYC Day 1', en: '🛫 NYC Day 1' },
    'day8.transit.title': { zh: 'Boston → New York', en: 'Boston → New York' },
    'day8.transit.desc': {
      zh: '從 South Station 搭乘巴士/火車前往紐約，車程約 4 小時。',
      en: 'Take a bus/train from South Station to New York, approximately 4 hours.'
    },
    'day8.office.title': { zh: '辦公室巡禮 & 買 Hamilton 票', en: 'Office Visit & Buy Hamilton Tickets' },
    'day8.office.desc': {
      zh: '抵達紐約後先到辦公室放行李，順便到 Richard Rodgers Theatre 現場購買 Hamilton 門票（現場買可省去 $20 online fee）。',
      en: 'After arriving in NYC, drop off luggage at the office, then buy Hamilton tickets at the Richard Rodgers Theatre box office (save $20 online fee by buying in person).'
    },
    'day8.centralpark.desc': {
      zh: '紐約的綠色心臟，佔地 843 英畝。11 月的中央公園秋色正濃，Bethesda Fountain、Bow Bridge 和 The Mall 都是經典景點。',
      en: 'The green heart of New York, spanning 843 acres. In November, Central Park is ablaze with autumn colors. Bethesda Fountain, Bow Bridge, and The Mall are classic spots.'
    },
    'day8.amnh.desc': {
      zh: '美國自然歷史博物館，電影《乜都唔識又嚟博物館》的取景地。必看恐龍化石展廳和海洋生物大廳的藍鯨模型。',
      en: 'The American Museum of Natural History, filming location of "Night at the Museum". Must-see: the dinosaur fossil halls and the blue whale model in the Ocean Life Hall.'
    },
    'day8.steak.desc': {
      zh: '紐約經典牛排館，股神巴菲特（Warren Buffett）每年在此舉辦慈善午餐拍賣。巴菲特的招牌點餐：五分熟牛排配薯餅和櫻桃可樂。',
      en: 'A classic NYC steakhouse where Warren Buffett held his annual charity lunch auction. Buffett\'s signature order: medium-well steak with hash browns and Cherry Coke.'
    },
    'day8.times.title': { zh: 'Times Square 夜景', en: 'Times Square at Night' },
    'day8.times.desc': {
      zh: '時代廣場的霓虹燈在夜晚最為壯觀，感受「世界的十字路口」的繁華。',
      en: 'Times Square\'s neon lights are most spectacular at night — experience the hustle of "The Crossroads of the World".'
    },

    // --- Day 9 ---
    'day9.title': { zh: '11月11日 (六) — 自由女神 & 帝國大廈', en: 'Nov 11 (Sat) — Statue of Liberty & Empire State Building' },
    'day9.tag': { zh: '🏙 NYC Day 2', en: '🏙 NYC Day 2' },
    'day9.cruise.desc': {
      zh: 'Circle Line 遊船環繞曼哈頓，近距離觀賞自由女神像。自由女神像於 1886 年由法國贈送，高 93 公尺，是美國最具代表性的地標。',
      en: 'Circle Line cruise around Manhattan with close-up views of the Statue of Liberty. Gifted by France in 1886, standing 93 meters tall, it is America\'s most iconic landmark.'
    },
    'day9.intrepid.desc': {
      zh: '無畏號航空母艦博物館，停泊在哈德遜河畔的退役航母上。館內展示太空梭 Enterprise、潛艇 Growler、協和號超音速客機等。',
      en: 'The Intrepid Museum, housed on a retired aircraft carrier on the Hudson River. Exhibits include the Space Shuttle Enterprise, submarine Growler, and the Concorde supersonic jet.'
    },
    'day9.esb.desc': {
      zh: '帝國大廈 86 樓觀景台看夕陽和夜景。建於 1931 年，高 443 公尺，曾是世界最高建築。11 月日落約 16:40，建議提前到達佔好位置。',
      en: 'Watch sunset and night views from the Empire State Building\'s 86th floor observatory. Built in 1931, standing 443 meters tall, it was once the world\'s tallest building. November sunset is around 4:40 PM — arrive early for the best spot.'
    },
    'day9.esb.info.title': { zh: '觀景台資訊', en: 'Observatory Information' },
    'day9.esb.info.1': { zh: '86F — 室外觀景台，360 度全景', en: '86F — Outdoor observatory, 360-degree panoramic views' },
    'day9.esb.info.2': { zh: '102F — 室內觀景台，需額外付費', en: '102F — Indoor observatory, additional fee required' },
    'day9.esb.info.3': { zh: '11 月日落約 16:40，建議 16:00 前到達', en: 'November sunset around 4:40 PM, arrive before 4:00 PM' },
    'day9.chelsea.desc': {
      zh: '雀兒喜市場是紐約最受歡迎的美食市場之一，前身是 Nabisco 餅乾工廠。推薦 Los Tacos No. 1 的墨西哥捲餅和 Lobster Place 的海鮮。',
      en: 'Chelsea Market is one of NYC\'s most popular food halls, formerly a Nabisco cookie factory. Try Los Tacos No. 1 for tacos and Lobster Place for seafood.'
    },
    'day9.starbucks.desc': {
      zh: '全球僅有 6 家的星巴克臻選烘焙工坊，三層樓的空間展示咖啡從生豆到杯中的完整旅程。',
      en: 'One of only 6 Starbucks Reserve Roasteries worldwide. The three-story space showcases the complete coffee journey from green bean to cup.'
    },
    'day9.hoboken.title': { zh: 'Hoboken 看曼哈頓夜景', en: 'Manhattan Skyline from Hoboken' },
    'day9.hoboken.desc': {
      zh: '從 Pier A Pergola, Hoboken 眺望曼哈頓天際線，是觀賞紐約夜景的絕佳地點，比布魯克林更少遊客。',
      en: 'View the Manhattan skyline from Pier A Pergola, Hoboken — an excellent spot for NYC night views with fewer tourists than Brooklyn.'
    },

    // --- Day 10 ---
    'day10.title': { zh: '11月12日 (日) — Brooklyn Bridge & Hamilton', en: 'Nov 12 (Sun) — Brooklyn Bridge & Hamilton' },
    'day10.tag': { zh: '🎭 NYC Day 3', en: '🎭 NYC Day 3' },
    'day10.bridge.desc': {
      zh: '曼哈頓大橋和布魯克林大橋是紐約最具標誌性的橋樑。布魯克林大橋建於 1883 年，步行橫跨約需 30 分鐘，可欣賞曼哈頓天際線的壯麗景色。',
      en: 'Manhattan Bridge and Brooklyn Bridge are NYC\'s most iconic bridges. Brooklyn Bridge, built in 1883, takes about 30 minutes to walk across with stunning views of the Manhattan skyline.'
    },
    'day10.ellens.desc': {
      zh: '紐約最有名的主題餐廳之一，服務生都是追夢百老匯的歌手，邊用餐邊欣賞現場演唱。被稱為「百老匯最便宜的演出」。',
      en: 'One of NYC\'s most famous themed restaurants — the waitstaff are aspiring Broadway singers who perform live while you dine. Known as "Broadway\'s cheapest show".'
    },
    'day10.hamilton.desc': {
      zh: '百老匯音樂劇《Hamilton》，以嘻哈音樂講述美國開國元勳 Alexander Hamilton 的故事。2015 年首演以來橫掃 11 座東尼獎，是百老匯最受歡迎的音樂劇之一。現場購票可省去 $20 online fee。',
      en: 'The Broadway musical "Hamilton" tells the story of Founding Father Alexander Hamilton through hip-hop music. Since its 2015 premiere, it has won 11 Tony Awards and is one of Broadway\'s most popular musicals. Buy tickets at the box office to save the $20 online fee.'
    },
    'day10.hamilton.info.title': { zh: '觀劇小提示', en: 'Theater Tips' },
    'day10.hamilton.info.1': { zh: '建議提前 30-40 分鐘到場', en: 'Arrive 30-40 minutes early' },
    'day10.hamilton.info.2': { zh: '穿著 business casual 即可', en: 'Business casual dress code' },
    'day10.hamilton.info.3': { zh: '建議先熟悉歌曲和美國獨立戰爭歷史', en: 'Familiarize yourself with the songs and American Revolution history beforehand' },
    'day10.hamilton.info.4': { zh: '演出時長約 2 小時 45 分鐘（含中場休息）', en: 'Runtime approximately 2 hours 45 minutes (including intermission)' },
    'day10.moma.desc': {
      zh: '現代藝術博物館，收藏了梵谷《星夜》、畢卡索《亞維儂的少女》、莫內《睡蓮》等經典作品。太晚到達時，售票口免費讓我們進場。',
      en: 'The Museum of Modern Art, home to Van Gogh\'s "Starry Night", Picasso\'s "Les Demoiselles d\'Avignon", Monet\'s "Water Lilies", and more. When we arrived late, the ticket office let us in for free.'
    },
    'day10.ladym.desc': {
      zh: '以千層蛋糕聞名的法式甜點店，招牌 Mille Crêpes 有 20 層薄如紙的法式可麗餅。',
      en: 'A French patisserie famous for its Mille Crêpes — the signature cake has 20 paper-thin layers of French crêpes.'
    },
    'day10.oxalis.desc': {
      zh: '布魯克林的精緻餐廳，位於 Brooklyn Museum 和 Prospect Park 附近。提供 carte blanche tasting menu，以當季食材創作的精緻料理。',
      en: 'A fine dining restaurant in Brooklyn, near the Brooklyn Museum and Prospect Park. Offers a carte blanche tasting menu featuring seasonal ingredients in refined dishes.'
    },

    // --- Day 11 ---
    'day11.title': { zh: '11月13日 (一) — 大都會 & 華爾街', en: 'Nov 13 (Mon) — The Met & Wall Street' },
    'day11.tag': { zh: '🏛 NYC Day 4', en: '🏛 NYC Day 4' },
    'day11.office.title': { zh: '辦公室參觀 & 早餐', en: 'Office Visit & Breakfast' },
    'day11.office.desc': { zh: '行李運到辦公室，參觀辦公室', en: 'Bring luggage to the office, office tour' },
    'day11.met.desc': {
      zh: '大都會博物館是西半球最大的藝術博物館，擁有超過 200 萬件藏品。從古埃及的 Temple of Dendur 到歐洲繪畫大師的傑作，一天根本逛不完。',
      en: 'The Metropolitan Museum of Art is the largest art museum in the Western Hemisphere, with over 2 million works. From the ancient Egyptian Temple of Dendur to European masterpieces — one day is never enough.'
    },
    'day11.met.info.title': { zh: '必看展區', en: 'Must-See Galleries' },
    'day11.met.info.5': { zh: 'The Roof Garden (季節性開放)', en: 'The Roof Garden (seasonal)' },
    'day11.911.desc': {
      zh: '911 紀念博物館建在世貿中心遺址上，兩個巨大的瀑布水池標記著雙子塔的原址。地下博物館展示了 2001 年 9 月 11 日的歷史，令人深思。',
      en: 'The 9/11 Memorial Museum is built on the World Trade Center site. Two massive waterfall pools mark where the Twin Towers once stood. The underground museum chronicles the events of September 11, 2001 — deeply moving.'
    },
    'day11.bull.desc': {
      zh: '華爾街銅牛（Charging Bull）是紐約金融區的標誌性雕塑，象徵著華爾街的力量和樂觀。重達 3,200 公斤的銅牛由藝術家 Arturo Di Modica 於 1989 年創作。',
      en: 'The Charging Bull is an iconic sculpture in NYC\'s Financial District, symbolizing Wall Street\'s strength and optimism. The 3,200 kg bronze bull was created by artist Arturo Di Modica in 1989.'
    },
    'day11.highline.desc': {
      zh: '高架公園是由廢棄的高架鐵路改建而成的空中花園，全長 1.45 英里。沿途可欣賞哈德遜河景色和獨特的城市藝術裝置。',
      en: 'The High Line is an elevated park built on a disused railway, stretching 1.45 miles. Enjoy views of the Hudson River and unique urban art installations along the way.'
    },
    'day11.porteno.desc': {
      zh: '附近隨便找的阿根廷餐廳，提供道地的南美料理。',
      en: 'A nearby Argentinian restaurant we stumbled upon, serving authentic South American cuisine.'
    },
    'day11.office3.title': { zh: '辦公室參觀 3', en: 'Office Visit 3' },
    'day11.office3.desc': { zh: '第三次辦公室參觀', en: 'Third office visit' },
    'day11.grand.desc': {
      zh: '中央車站是紐約最壯觀的建築之一，Beaux-Arts 風格的大廳天花板繪有星座圖。即使只是快速經過，也值得抬頭欣賞。',
      en: 'Grand Central Terminal is one of NYC\'s most spectacular buildings. The Beaux-Arts main hall ceiling features a constellation mural. Even a quick pass-through is worth looking up to admire.'
    },

    // --- Day 12 ---
    'day12.title': { zh: '11月14日 (二) — 返回倫敦', en: 'Nov 14 (Tue) — Return to London' },
    'day12.tag': { zh: '✈ Travel Day', en: '✈ Travel Day' },
    'day12.bus.title': { zh: '夜車回 Boston', en: 'Night bus back to Boston' },
    'day12.bus.desc': { zh: '搭乘夜間巴士從紐約返回波士頓', en: 'Take the overnight bus from New York back to Boston' },
    'day12.morning.desc': { zh: '最後再走一次自由之路和 Quincy Market，把握最後的波士頓時光。', en: 'Walk the Freedom Trail and Quincy Market one last time — making the most of the final moments in Boston.' },
    'day12.airport.desc': { zh: '前往機場 Terminal E', en: 'Head to airport Terminal E' },
    'day12.depart.title': { zh: '飛機起飛', en: 'Flight departure' },
    'day12.depart.desc': { zh: 'Boston → London Heathrow', en: 'Boston → London Heathrow' },
    'day12.arrive.title': { zh: '抵達倫敦', en: 'Arrive in London' },
    'day12.arrive.desc': { zh: 'Heathrow Terminal 5，隔天 9:00 上班', en: 'Heathrow Terminal 5, back to work at 9:00 AM the next day' },

    // ===== Food Section =====
    'food.title': { zh: 'Food & Dining', en: 'Food & Dining' },
    'food.boston.lobster.desc': { zh: 'Cambridge 的隱藏版龍蝦小店，招牌龍蝦三明治用料實在', en: 'Hidden lobster shack in Cambridge, generous lobster sandwich' },
    'food.boston.lobster.tag': { zh: '龍蝦', en: 'Lobster' },
    'food.boston.quincy.desc': { zh: '歷史市場美食廣場，必嚐 Clam Chowder', en: 'Historic market food hall, must-try Clam Chowder' },
    'food.boston.quincy.tag': { zh: '市場', en: 'Market' },
    'food.boston.krasi.desc': { zh: 'Back Bay 希臘小酒館，精緻 meze 小菜配葡萄酒', en: 'Greek taverna in Back Bay, refined meze with wine' },
    'food.boston.krasi.tag': { zh: '希臘', en: 'Greek' },
    'food.boston.asta.desc': { zh: '創意 tasting menu，開放式廚房，波士頓最具創意的餐廳', en: 'Creative tasting menu, open kitchen, Boston\'s most creative restaurant' },
    'food.ny.steak.desc': { zh: '巴菲特最愛的牛排館，經典紐約牛排體驗', en: 'Buffett\'s favorite steakhouse, classic NYC steak experience' },
    'food.ny.steak.tag': { zh: '牛排', en: 'Steak' },
    'food.ny.ellens.desc': { zh: '服務生現場演唱的主題餐廳，百老匯最便宜的演出', en: 'Themed restaurant with singing waitstaff, Broadway\'s cheapest show' },
    'food.ny.ellens.tag': { zh: '美式', en: 'American' },
    'food.ny.oxalis.desc': { zh: '布魯克林精緻餐廳，carte blanche tasting menu', en: 'Brooklyn fine dining, carte blanche tasting menu' },
    'food.ny.chelsea.desc': { zh: '前 Nabisco 工廠改建的美食市場，Los Tacos No. 1 必吃', en: 'Former Nabisco factory turned food hall, Los Tacos No. 1 is a must' },
    'food.ny.chelsea.tag': { zh: '市場', en: 'Market' },
    'food.ny.porteno.desc': { zh: '阿根廷料理', en: 'Argentinian cuisine' },
    'food.ny.porteno.tag': { zh: '南美', en: 'South American' },
    'food.ny.ladym.desc': { zh: '法式千層蛋糕，招牌 Mille Crêpes', en: 'French Mille Crêpes, signature layered cake' },
    'food.ny.ladym.tag': { zh: '甜點', en: 'Dessert' },

    // ===== Attractions =====
    'attr.title': { zh: 'Attractions Guide', en: 'Attractions Guide' },
    'attr.mfa.desc': { zh: '超過 50 萬件藝術品，100+ 展廳', en: 'Over 500,000 artworks, 100+ galleries' },
    'attr.mfa.time': { zh: '🕐 建議 3-4 小時', en: '🕐 Suggested 3-4 hours' },
    'attr.harvard.desc': { zh: '美國最古老的大學 (1636)，Harvard Yard 必訪', en: 'America\'s oldest university (1636), Harvard Yard is a must-visit' },
    'attr.harvard.time': { zh: '🕐 建議 1-2 小時', en: '🕐 Suggested 1-2 hours' },
    'attr.freedom.desc': { zh: '2.5 英里紅磚步道，16 個歷史景點', en: '2.5-mile red-brick trail, 16 historic sites' },
    'attr.freedom.time': { zh: '🕐 建議 2-3 小時', en: '🕐 Suggested 2-3 hours' },
    'attr.whale.desc': { zh: '高速雙體船前往 Stellwagen Bank 賞鯨', en: 'High-speed catamaran to Stellwagen Bank for whale watching' },
    'attr.esb.desc': { zh: '86F 室外觀景台，360 度紐約全景', en: '86F outdoor observatory, 360-degree NYC panorama' },
    'attr.esb.time': { zh: '🕐 建議 1-2 小時', en: '🕐 Suggested 1-2 hours' },
    'attr.cruise.desc': { zh: '遊船環繞曼哈頓，近距離看自由女神', en: 'Cruise around Manhattan, close-up Statue of Liberty views' },
    'attr.intrepid.desc': { zh: '退役航母上的海空太空博物館', en: 'Sea, air & space museum on a retired aircraft carrier' },
    'attr.intrepid.time': { zh: '🕐 建議 2-3 小時', en: '🕐 Suggested 2-3 hours' },
    'attr.met.desc': { zh: '西半球最大藝術博物館，200 萬件藏品', en: 'Largest art museum in the Western Hemisphere, 2 million works' },
    'attr.met.time': { zh: '🕐 建議 4+ 小時', en: '🕐 Suggested 4+ hours' },
    'attr.911.desc': { zh: '世貿中心遺址上的紀念博物館', en: 'Memorial museum on the World Trade Center site' },
    'attr.911.time': { zh: '🕐 建議 2-3 小時', en: '🕐 Suggested 2-3 hours' },
    'attr.moma.desc': { zh: '現代藝術博物館，梵谷《星夜》所在地', en: 'Museum of Modern Art, home of Van Gogh\'s "Starry Night"' },
    'attr.moma.time': { zh: '🕐 建議 2-3 小時', en: '🕐 Suggested 2-3 hours' },
    'attr.highline.desc': { zh: '廢棄高架鐵路改建的空中花園', en: 'Elevated park built on a disused railway' },
    'attr.highline.time': { zh: '🕐 建議 1-2 小時', en: '🕐 Suggested 1-2 hours' },
    'attr.hamilton.desc': { zh: '嘻哈音樂劇，11 座東尼獎', en: 'Hip-hop musical, 11 Tony Awards' },

    // ===== Reference =====
    'ref.title': { zh: 'Reference & Discussion', en: 'Reference & Discussion' },
    'ref.desc': {
      zh: '以下為行前蒐集的參考資料與討論紀錄，包含另一次紐約旅行的推薦景點與餐廳。',
      en: 'Below are pre-trip reference materials and discussion notes, including recommended attractions and restaurants from another NYC trip.'
    },
    'ref.food.title': { zh: '🍴 紐約餐廳推薦 (Reference)', en: '🍴 NYC Restaurant Recommendations (Reference)' },
    'ref.food.th1': { zh: '餐廳', en: 'Restaurant' },
    'ref.food.th2': { zh: '類型', en: 'Type' },
    'ref.food.th3': { zh: '備註', en: 'Notes' },
    'ref.food.r1.type': { zh: '早餐', en: 'Breakfast' },
    'ref.food.r1.note': { zh: 'Brooklyn 貝果名店', en: 'Famous Brooklyn bagel shop' },
    'ref.food.r2.type': { zh: '龍蝦堡', en: 'Lobster Roll' },
    'ref.food.r3.type': { zh: '披薩', en: 'Pizza' },
    'ref.food.r3.note': { zh: '紐約經典薄皮披薩', en: 'Classic NYC thin-crust pizza' },
    'ref.food.r4.type': { zh: '墨西哥', en: 'Mexican' },
    'ref.food.r4.note': { zh: 'Chelsea Market 內', en: 'Inside Chelsea Market' },
    'ref.food.r5.type': { zh: '韓式', en: 'Korean' },
    'ref.food.r6.type': { zh: '漢堡', en: 'Burger' },
    'ref.food.r7.type': { zh: '清真餐車', en: 'Halal Cart' },
    'ref.food.r7.note': { zh: '街頭美食經典', en: 'Classic street food' },
    'ref.food.r8.type': { zh: '川菜', en: 'Sichuan' },
    'ref.food.r8.note': { zh: '川山甲，Manhattan', en: 'Mountain House, Manhattan' },

    'ref.attractions.title': { zh: '🏛 紐約景點推薦 (Reference)', en: '🏛 NYC Attraction Recommendations (Reference)' },
    'ref.attractions.th1': { zh: '景點', en: 'Attraction' },
    'ref.attractions.th2': { zh: '區域', en: 'Area' },
    'ref.attractions.th3': { zh: '備註', en: 'Notes' },
    'ref.attractions.r1.note': { zh: 'Rooftop 直面曼哈頓大橋', en: 'Rooftop facing Manhattan Bridge' },
    'ref.attractions.r3.note': { zh: '100-102F 觀景台', en: '100-102F observatory' },
    'ref.attractions.r4.note': { zh: '二樓拍照平台', en: '2nd floor photo platform' },
    'ref.attractions.r5.note': { zh: '逛街購物區', en: 'Shopping district' },
    'ref.attractions.r6.note': { zh: '哈德遜河上的人造島公園', en: 'Man-made island park on the Hudson River' },
    'ref.attractions.r7.note': { zh: '蜂巢造型建築', en: 'Honeycomb-shaped structure' },
    'ref.attractions.r8.note': { zh: 'Top of the Rock 360 度全景', en: 'Top of the Rock 360-degree panorama' },
    'ref.attractions.r9.note': { zh: '曼哈頓中城最高觀景台', en: 'Tallest observatory in Midtown Manhattan' },
    'ref.attractions.r10.note': { zh: '名牌暢貨中心，需租車', en: 'Designer outlet, car rental needed' },

    'ref.broadway.title': { zh: '📚 Broadway 參考', en: '📚 Broadway Reference' },
    'ref.broadway.th1': { zh: '劇目', en: 'Show' },
    'ref.broadway.th2': { zh: '劇院', en: 'Theater' },
    'ref.broadway.th3': { zh: '備註', en: 'Notes' },
    'ref.broadway.r1.note': { zh: '本次行程觀看，現場購票', en: 'Watched on this trip, bought at box office' },
    'ref.broadway.r2.note': { zh: 'Reference 行程觀看，Ticket Master 購票 $663', en: 'Watched on reference trip, Ticket Master $663' },

    'ref.citypass.title': { zh: '💰 CityPass 使用紀錄', en: '💰 CityPass Usage Record' },
    'ref.citypass.th1': { zh: '景點', en: 'Attraction' },
    'ref.citypass.th2': { zh: '備註', en: 'Notes' },
    'ref.citypass.r1.note': { zh: 'CityPass 包含', en: 'Included in CityPass' },
    'ref.citypass.r2.note': { zh: 'CityPass + $10', en: 'CityPass + $10' },
    'ref.citypass.r3.note': { zh: 'CityPass 包含', en: 'Included in CityPass' },
    'ref.citypass.r4.note': { zh: 'CityPass 包含', en: 'Included in CityPass' },

    // ===== Footer =====
    'footer.built': { zh: 'Built with Leaflet & OpenStreetMap', en: 'Built with Leaflet & OpenStreetMap' },
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
    // Save preference
    localStorage.setItem('lang', this.currentLang);
    // Update button text
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
  },

  // Initialize
  init() {
    // Check saved preference
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'zh' || saved === 'en')) {
      this.currentLang = saved;
    }
    this.applyAll();
    this.updateButton();
  }
};
