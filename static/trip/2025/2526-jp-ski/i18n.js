// ===== i18n Translation System =====
const translations = {
    // ===== Navigation =====
    'nav.logo': { zh: '🗾 滑雪團', en: '🗾 Ski Trip' },
    'nav.overview': { zh: '總覽', en: 'Overview' },
    'nav.schedule': { zh: '行程', en: 'Schedule' },
    'nav.resorts': { zh: '雪場', en: 'Resorts' },
    'nav.map': { zh: '地圖', en: 'Map' },
    'nav.accommodation': { zh: '住宿', en: 'Stay' },
    'nav.transport': { zh: '交通', en: 'Transport' },
    'nav.sightseeing': { zh: '觀光', en: 'Explore' },
    'nav.members': { zh: '成員', en: 'Members' },
    'nav.planning': { zh: '籌備', en: 'Planning' },

    // ===== Hero =====
    'hero.title': { zh: '🗾 日本滑雪團', en: '🗾 Japan Ski Trip' },
    'hero.subtitle': { zh: '苗場 · 上越國際 · 越後湯澤 · 東京', en: 'Naeba · Joetsu Kokusai · Echigo-Yuzawa · Tokyo' },
    'hero.days': { zh: '天', en: 'Days' },
    'hero.resorts': { zh: '雪場', en: 'Resorts' },
    'hero.people': { zh: '人', en: 'People' },
    'hero.cta': { zh: '查看行程 ↓', en: 'View Itinerary ↓' },

    // ===== Overview =====
    'overview.title': { zh: '行程總覽', en: 'Trip Overview' },
    'overview.desc': { zh: '一場橫跨年末年初的日本滑雪之旅，從新潟的粉雪天堂到東京的都市探索。', en: 'A year-end ski adventure across Japan — from Niigata\'s powder paradise to Tokyo\'s urban exploration.' },
    'overview.depart.title': { zh: '出發', en: 'Departure' },
    'overview.depart.desc': { zh: '12/24 抵達成田機場<br>Skyliner 前往東京', en: '12/24 Arrive at Narita Airport<br>Skyliner to Tokyo' },
    'overview.naeba.title': { zh: '苗場滑雪', en: 'Naeba Skiing' },
    'overview.naeba.desc': { zh: '12/26 — 12/28<br>苗場 + 神樂雪場<br>3 天滑雪', en: '12/26 — 12/28<br>Naeba + Kagura<br>3 Days Skiing' },
    'overview.joetsu.title': { zh: '上越國際', en: 'Joetsu Kokusai' },
    'overview.joetsu.desc': { zh: '12/29 — 12/31<br>日本最大單一雪場<br>3 天滑雪 + 夜滑', en: '12/29 — 12/31<br>Japan\'s Largest Single Resort<br>3 Days + Night Skiing' },
    'overview.return.title': { zh: '觀光 & 回程', en: 'Sightseeing & Return' },
    'overview.return.desc': { zh: '1/1 — 1/4<br>越後湯澤 · 東京觀光<br>自由活動 · 回程', en: '1/1 — 1/4<br>Echigo-Yuzawa · Tokyo<br>Free Time · Return' },

    // ===== Schedule =====
    'schedule.title': { zh: '每日行程', en: 'Daily Itinerary' },
    'schedule.desc': { zh: '12 月 24 日至 1 月 4 日的完整行程安排', en: 'Complete schedule from December 24 to January 4' },
    'tag.travel': { zh: '移動日', en: 'Travel' },
    'tag.ski': { zh: '滑雪日', en: 'Ski Day' },
    'tag.sightseeing': { zh: '觀光日', en: 'Sightseeing' },
    'tag.return': { zh: '回程', en: 'Return' },

    // Schedule Day 24
    'day24.month': { zh: '12月', en: 'Dec' },
    'day24.weekday': { zh: '三', en: 'Wed' },
    'day24.title': { zh: '抵達東京', en: 'Arrive in Tokyo' },
    'day24.li1': { zh: '成田機場抵達（hchsu 16:50 / yaowen, kuohh, hclee, syujy 19:20）', en: 'Arrive at Narita Airport (hchsu 16:50 / yaowen, kuohh, hclee, syujy 19:20)' },
    'day24.li2': { zh: 'Skyliner 前往上野（現場買票）', en: 'Skyliner to Ueno (buy tickets on-site)' },
    'day24.li3': { zh: '採買雪場所需物資', en: 'Purchase supplies for the ski trip' },
    'day24.stay': { zh: '🏨 APA Hotel 上野稻荷町駅北', en: '🏨 APA Hotel Ueno Inaricho-Eki Kita' },

    // Schedule Day 25
    'day25.month': { zh: '12月', en: 'Dec' },
    'day25.weekday': { zh: '四', en: 'Thu' },
    'day25.title': { zh: '前往苗場', en: 'Travel to Naeba' },
    'day25.li1': { zh: '上野 → 越後湯澤（新幹線 Toki 323，13:46–14:56）', en: 'Ueno → Echigo-Yuzawa (Shinkansen Toki 323, 13:46–14:56)' },
    'day25.li2': { zh: '越後湯澤 → 二居田代（公車 15:30 發車）', en: 'Echigo-Yuzawa → Futai-Tashiro (Bus departs 15:30)' },
    'day25.li3': { zh: '購買苗場雪票', en: 'Purchase Naeba lift tickets' },
    'day25.stay': { zh: '🏠 Little Japan Echigo（3+3+3 人房，3 晚）', en: '🏠 Little Japan Echigo (3+3+3 rooms, 3 nights)' },

    // Schedule Day 26
    'day26.month': { zh: '12月', en: 'Dec' },
    'day26.weekday': { zh: '五', en: 'Fri' },
    'day26.title': { zh: '苗場滑雪 Day 1', en: 'Naeba Skiing Day 1' },
    'day26.li1': { zh: '苗場 + 神樂雪場全日滑雪', en: 'Full-day skiing at Naeba + Kagura' },
    'day26.li2': { zh: '雪票：早鳥 ¥6,200 / 一般 ¥7,000 / 全山 ¥9,800', en: 'Lift pass: Early bird ¥6,200 / Regular ¥7,000 / All-mountain ¥9,800' },
    'day26.li3': { zh: '田代租借站可租雪具（需身份證明）', en: 'Equipment rental at Tashiro station (ID required)' },
    'day26.stay': { zh: '🏠 Little Japan Echigo', en: '🏠 Little Japan Echigo' },

    // Schedule Day 27
    'day27.month': { zh: '12月', en: 'Dec' },
    'day27.weekday': { zh: '六', en: 'Sat' },
    'day27.title': { zh: '苗場滑雪 Day 2 [SB 教練日]', en: 'Naeba Skiing Day 2 [SB Lesson Day]' },
    'day27.li1': { zh: '單板教練課程（calee / yaowen / syujy / yahsieh / 學妹）', en: 'Snowboard lesson — Group 1 (calee / yaowen / syujy / yahsieh / junior)' },
    'day27.li2': { zh: '單板教練課程（kuohh / hclee）', en: 'Snowboard lesson — Group 2 (kuohh / hclee)' },
    'day27.li3': { zh: '可滑至下午，已確認大眾班表', en: 'Ski until afternoon; group class schedule confirmed' },
    'day27.stay': { zh: '🏠 Little Japan Echigo', en: '🏠 Little Japan Echigo' },

    // Schedule Day 28
    'day28.month': { zh: '12月', en: 'Dec' },
    'day28.weekday': { zh: '日', en: 'Sun' },
    'day28.title': { zh: '苗場滑雪 Day 3 → 移動至上越', en: 'Naeba Day 3 → Transfer to Joetsu' },
    'day28.li1': { zh: '苗場整日滑雪', en: 'Full-day skiing at Naeba' },
    'day28.li2': { zh: '公車回越後湯澤（末三便 17:00 / 18:30 / 19:47）', en: 'Bus back to Echigo-Yuzawa (last 3 buses: 17:00 / 18:30 / 19:47)' },
    'day28.li3': { zh: 'JR 越後湯澤 → 浦佐（Urasa）', en: 'JR Echigo-Yuzawa → Urasa' },
    'day28.li4': { zh: '步行至民宿（1.1 公里，約 16 分鐘）', en: 'Walk to guesthouse (1.1 km, ~16 min)' },
    'day28.stay': { zh: '🏠 浦佐 Airbnb 民宿', en: '🏠 Urasa Airbnb Guesthouse' },

    // Schedule Day 29
    'day29.month': { zh: '12月', en: 'Dec' },
    'day29.weekday': { zh: '一', en: 'Mon' },
    'day29.title': { zh: '上越國際 Day 1', en: 'Joetsu Kokusai Day 1' },
    'day29.li1': { zh: '上越國際スキー場前駅搭車上山', en: 'Take train to Joetsu Kokusai Ski-jo Mae Station' },
    'day29.li2': { zh: '電子票（文組持有）', en: 'E-tickets (held by the arts group)' },
    'day29.li3': { zh: '可夜滑至 21:00（¥1,500）', en: 'Night skiing until 21:00 (¥1,500)' },
    'day29.li4': { zh: 'Annex 日歸溫泉', en: 'Annex day-trip onsen' },
    'day29.stay': { zh: '🏠 浦佐 Airbnb 民宿', en: '🏠 Urasa Airbnb Guesthouse' },

    // Schedule Day 30
    'day30.month': { zh: '12月', en: 'Dec' },
    'day30.weekday': { zh: '二', en: 'Tue' },
    'day30.title': { zh: '上越國際 Day 2', en: 'Joetsu Kokusai Day 2' },
    'day30.li1': { zh: '全日滑雪', en: 'Full-day skiing' },
    'day30.li2': { zh: '22 條雪道、4 大區域', en: '22 runs, 4 major zones' },
    'day30.stay': { zh: '🏠 浦佐 Airbnb 民宿', en: '🏠 Urasa Airbnb Guesthouse' },

    // Schedule Day 31
    'day31.month': { zh: '12月', en: 'Dec' },
    'day31.weekday': { zh: '三', en: 'Wed' },
    'day31.title': { zh: '上越國際 Day 3 — 跨年夜', en: 'Joetsu Kokusai Day 3 — New Year\'s Eve' },
    'day31.li1': { zh: '全日滑雪', en: 'Full-day skiing' },
    'day31.li2': { zh: '跨年夜滑雪迎接新年', en: 'Ring in the New Year on the slopes' },
    'day31.stay': { zh: '🏠 浦佐 Airbnb 民宿', en: '🏠 Urasa Airbnb Guesthouse' },

    // Schedule Day 01
    'day01.month': { zh: '1月', en: 'Jan' },
    'day01.weekday': { zh: '四', en: 'Thu' },
    'day01.title': { zh: '新年觀光 → 回東京', en: 'New Year Sightseeing → Back to Tokyo' },
    'day01.li1': { zh: '越後湯澤觀光（ぽんしゅ館、溫泉等）', en: 'Echigo-Yuzawa sightseeing (Ponshukan, onsen, etc.)' },
    'day01.li2': { zh: '新幹線 Tanigawa 86 回東京（17:08→18:20）', en: 'Shinkansen Tanigawa 86 to Tokyo (17:08→18:20)' },
    'day01.stay': { zh: '🏨 APA Hotel 人形町駅東（1/1–1/4，3 晚）', en: '🏨 APA Hotel Ningyocho-Eki Higashi (1/1–1/4, 3 nights)' },

    // Schedule Day 02
    'day02.month': { zh: '1月', en: 'Jan' },
    'day02.weekday': { zh: '五', en: 'Fri' },
    'day02.title': { zh: '東京自由活動', en: 'Free Day in Tokyo' },
    'day02.li1': { zh: '10:45 モンハン酒場（9 人，ID: 2VN4SJ）', en: '10:45 Monster Hunter Bar (9 pax, ID: 2VN4SJ)' },
    'day02.li2': { zh: 'yahsieh 成田 19:30 離開', en: 'yahsieh departs Narita 19:30' },
    'day02.li3': { zh: '自由活動', en: 'Free time' },
    'day02.stay': { zh: '🏨 APA Hotel 人形町駅東', en: '🏨 APA Hotel Ningyocho-Eki Higashi' },

    // Schedule Day 03
    'day03.month': { zh: '1月', en: 'Jan' },
    'day03.weekday': { zh: '六', en: 'Sat' },
    'day03.title': { zh: '東京自由活動', en: 'Free Day in Tokyo' },
    'day03.li1': { zh: '自由活動', en: 'Free time' },
    'day03.li2': { zh: '推薦：備長名古屋鰻魚飯（東京天空樹店）', en: 'Recommended: Bincho Nagoya Unagi Rice (Tokyo Skytree branch)' },
    'day03.stay': { zh: '🏨 APA Hotel 人形町駅東', en: '🏨 APA Hotel Ningyocho-Eki Higashi' },

    // Schedule Day 04
    'day04.month': { zh: '1月', en: 'Jan' },
    'day04.weekday': { zh: '日', en: 'Sun' },
    'day04.title': { zh: '回程日', en: 'Departure Day' },
    'day04.li1': { zh: 'yaowen / hclee / kuohh / syujy — 成田 13:00', en: 'yaowen / hclee / kuohh / syujy — Narita 13:00' },
    'day04.li2': { zh: 'hchsu — 成田 15:30', en: 'hchsu — Narita 15:30' },
    'day04.li3': { zh: 'calee — 成田 17:00', en: 'calee — Narita 17:00' },

    // ===== Ski Resorts =====
    'resorts.title': { zh: '雪場介紹', en: 'Ski Resorts' },
    'resorts.desc': { zh: '兩座新潟縣頂級雪場，享受日本最優質的粉雪體驗', en: 'Two premier Niigata resorts — experience Japan\'s finest powder snow' },

    // Naeba
    'naeba.name': { zh: '苗場滑雪場 + 神樂', en: 'Mt. Naeba + Kagura' },
    'naeba.subtitle': { zh: 'Mt. Naeba / Kagura — 新潟縣湯澤町', en: 'Mt. Naeba / Kagura — Yuzawa, Niigata' },
    'naeba.label.season': { zh: '營業期間', en: 'Season' },
    'naeba.label.elevation': { zh: '海拔', en: 'Elevation' },
    'naeba.label.runs': { zh: '雪道數', en: 'Runs' },
    'naeba.val.runs': { zh: '24 條', en: '24 runs' },
    'naeba.label.night': { zh: '夜滑', en: 'Night Skiing' },
    'naeba.val.night': { zh: '12/20 — 3/21（每日）', en: '12/20 — 3/21 (daily)' },
    'naeba.label.gondola': { zh: 'Dragondola', en: 'Dragondola' },
    'naeba.val.gondola': { zh: '日本最長纜車 5.5km', en: 'Japan\'s longest gondola 5.5km' },
    'naeba.label.feature': { zh: '特色', en: 'Features' },
    'naeba.val.feature': { zh: '高品質粉雪、大型度假村', en: 'Premium powder snow, large resort' },
    'naeba.price.title': { zh: '雪票價格', en: 'Lift Pass Prices' },
    'naeba.price.type': { zh: '類型', en: 'Type' },
    'naeba.price.1p': { zh: '1 人', en: '1 Pax' },
    'naeba.price.2p': { zh: '2 人', en: '2 Pax' },
    'naeba.price.4p': { zh: '4 人', en: '4 Pax' },
    'naeba.price.early': { zh: '早鳥預售', en: 'Early Bird' },
    'naeba.price.day': { zh: '當日券', en: 'Day Pass' },
    'naeba.price.all': { zh: '全山滑走', en: 'All-Mountain' },
    'naeba.link': { zh: '官方網站 →', en: 'Official Website →' },

    // Joetsu
    'joetsu.name': { zh: '上越國際滑雪場', en: 'Joetsu Kokusai Ski Resort' },
    'joetsu.subtitle': { zh: 'Joetsu Kokusai Ski Resort — 新潟縣南魚沼市', en: 'Joetsu Kokusai Ski Resort — Minamiuonuma, Niigata' },
    'joetsu.label.area': { zh: '面積', en: 'Area' },
    'joetsu.val.area': { zh: '380 公頃（日本最大單一雪場）', en: '380 ha (Japan\'s largest single resort)' },
    'joetsu.label.runs': { zh: '雪道數', en: 'Runs' },
    'joetsu.val.runs': { zh: '22 條 / 4 大區域', en: '22 runs / 4 zones' },
    'joetsu.label.night': { zh: '夜滑', en: 'Night Skiing' },
    'joetsu.val.night': { zh: '12/27 — 3/22（每日至 21:00）', en: '12/27 — 3/22 (daily until 21:00)' },
    'joetsu.label.access': { zh: '交通', en: 'Access' },
    'joetsu.val.access': { zh: 'JR 上越國際スキー場前駅直達', en: 'Direct from JR Joetsu Kokusai Ski-jo Mae Stn' },
    'joetsu.label.nightpass': { zh: '夜滑票', en: 'Night Pass' },
    'joetsu.label.feature': { zh: '特色', en: 'Features' },
    'joetsu.val.feature': { zh: '超廣闊雪場、車站直達', en: 'Vast terrain, station-direct access' },
    'joetsu.price.title': { zh: '雪票 & 租借', en: 'Lift Pass & Rental' },
    'joetsu.price.item': { zh: '項目', en: 'Item' },
    'joetsu.price.price': { zh: '價格', en: 'Price' },
    'joetsu.price.day': { zh: '1 日券', en: '1-Day Pass' },
    'joetsu.price.set': { zh: '雪具 Set', en: 'Gear Set' },
    'joetsu.price.rental': { zh: 'Rental Set（1日券+雪具）', en: 'Rental Set (1-Day + Gear)' },
    'joetsu.price.night': { zh: '夜滑', en: 'Night Skiing' },
    'joetsu.link': { zh: '官方網站 →', en: 'Official Website →' },

    // ===== Map =====
    'map.title': { zh: '行程地圖', en: 'Trip Map' },
    'map.desc': { zh: '從東京出發，前往新潟雪國的完整路線', en: 'Complete route from Tokyo to Niigata\'s snow country' },
    'map.airport': { zh: '機場', en: 'Airport' },
    'map.station': { zh: '車站', en: 'Station' },
    'map.resort': { zh: '雪場', en: 'Resort' },
    'map.hotel': { zh: '住宿', en: 'Hotel' },
    'map.spot': { zh: '觀光', en: 'Sightseeing' },

    // ===== Accommodation =====
    'accom.title': { zh: '住宿安排', en: 'Accommodation' },
    'accom.desc': { zh: '從溫馨民宿到都市飯店，每晚的落腳處', en: 'From cozy guesthouses to city hotels — where we stay each night' },
    'accom1.name': { zh: 'APA Hotel 上野稻荷町駅北', en: 'APA Hotel Ueno Inaricho-Eki Kita' },
    'accom1.location': { zh: '📍 東京都台東區', en: '📍 Taito-ku, Tokyo' },
    'accom1.desc': { zh: '抵達東京首晚住宿，鄰近上野車站，方便隔日搭乘新幹線前往越後湯澤。', en: 'First night in Tokyo, near Ueno Station. Convenient for next-day Shinkansen to Echigo-Yuzawa.' },
    'accom1.meta1': { zh: '單人房', en: 'Single Room' },
    'accom1.meta2': { zh: '1 晚', en: '1 Night' },
    'accom2.name': { zh: 'Little Japan Echigo', en: 'Little Japan Echigo' },
    'accom2.location': { zh: '📍 新潟縣湯澤町（苗場附近）', en: '📍 Yuzawa, Niigata (near Naeba)' },
    'accom2.desc': { zh: '苗場雪場附近的溫馨民宿，3+3+3 人房配置。提供簡易廚房（IH 爐、冰箱、微波爐、電鍋）、免費飲品（咖啡、紅茶、綠茶）。', en: 'Cozy guesthouse near Naeba, 3+3+3 room layout. Kitchen (IH stove, fridge, microwave, rice cooker), free drinks (coffee, tea, green tea).' },
    'accom2.meta1': { zh: '10 人 / 3 間房', en: '10 pax / 3 rooms' },
    'accom2.meta2': { zh: '3 晚', en: '3 Nights' },
    'accom3.name': { zh: '浦佐 Airbnb 民宿', en: 'Urasa Airbnb Guesthouse' },
    'accom3.location': { zh: '📍 新潟縣南魚沼市浦佐', en: '📍 Urasa, Minamiuonuma, Niigata' },
    'accom3.desc': { zh: '靠近上越國際滑雪場的村舍，4 間臥室、8 張床、2.5 間浴室。從浦佐站步行約 16 分鐘（1.1 公里）。', en: 'Cottage near Joetsu Kokusai: 4 bedrooms, 8 beds, 2.5 bathrooms. ~16 min walk (1.1 km) from Urasa Station.' },
    'accom3.meta1': { zh: '4 臥室', en: '4 Bedrooms' },
    'accom3.meta2': { zh: '4 晚', en: '4 Nights' },
    'accom4.name': { zh: 'APA Hotel 人形町駅東', en: 'APA Hotel Ningyocho-Eki Higashi' },
    'accom4.location': { zh: '📍 東京都中央區', en: '📍 Chuo-ku, Tokyo' },
    'accom4.desc': { zh: '東京觀光期間住宿，7 間房（2 間雙人 + 5 間單人）。位於日本橋人形町，交通便利，周邊美食豐富。', en: 'Tokyo sightseeing base: 7 rooms (2 double + 5 single). Located in Nihonbashi Ningyocho — great transit access and dining.' },
    'accom4.meta1': { zh: '7 間房', en: '7 Rooms' },
    'accom4.meta2': { zh: '3 晚', en: '3 Nights' },

    // ===== Transport =====
    'transport.title': { zh: '交通資訊', en: 'Transportation' },
    'transport.desc': { zh: '新幹線、公車、Skyliner — 完整的交通接駁安排', en: 'Shinkansen, bus, Skyliner — complete transit connections' },
    'tr1.title': { zh: '成田機場 → 上野', en: 'Narita Airport → Ueno' },
    'tr1.desc': { zh: 'Skyliner（現場買票）約 41 分鐘', en: 'Skyliner (buy on-site) ~41 min' },
    'tr2.title': { zh: '上野 → 越後湯澤', en: 'Ueno → Echigo-Yuzawa' },
    'tr2.desc': { zh: '上越新幹線 Toki 323（13:46 → 14:56）約 70 分鐘', en: 'Joetsu Shinkansen Toki 323 (13:46 → 14:56) ~70 min' },
    'tr3.title': { zh: '越後湯澤 → 苗場（二居田代）', en: 'Echigo-Yuzawa → Naeba (Futai-Tashiro)' },
    'tr3.desc': { zh: '公車 約 45 分鐘（末三便 15:30 / 17:15 / 18:40）', en: 'Bus ~45 min (last 3: 15:30 / 17:15 / 18:40)' },
    'tr4.title': { zh: '苗場 → 越後湯澤', en: 'Naeba → Echigo-Yuzawa' },
    'tr4.desc': { zh: '公車（末三便 17:00 / 18:30 / 19:47）', en: 'Bus (last 3: 17:00 / 18:30 / 19:47)' },
    'tr5.title': { zh: '越後湯澤 → 浦佐', en: 'Echigo-Yuzawa → Urasa' },
    'tr5.desc': { zh: 'JR 上越線（彈性時間）', en: 'JR Joetsu Line (flexible timing)' },
    'tr6.title': { zh: '浦佐 → 上越國際スキー場前駅', en: 'Urasa → Joetsu Kokusai Ski-jo Mae Stn' },
    'tr6.desc': { zh: 'JR 上越線（車站直達雪場）', en: 'JR Joetsu Line (station-direct to resort)' },
    'tr7.title': { zh: '越後湯澤 → 東京', en: 'Echigo-Yuzawa → Tokyo' },
    'tr7.desc': { zh: '上越新幹線 Tanigawa 86（17:08 → 18:20）約 72 分鐘', en: 'Joetsu Shinkansen Tanigawa 86 (17:08 → 18:20) ~72 min' },
    'tr8.title': { zh: '東京 → 成田機場', en: 'Tokyo → Narita Airport' },
    'tr8.desc': { zh: 'Skyliner 回程', en: 'Skyliner return' },

    // ===== Sightseeing =====
    'sight.title': { zh: '觀光景點', en: 'Sightseeing Spots' },
    'sight.desc': { zh: '滑雪之外，探索越後湯澤與東京的精彩', en: 'Beyond skiing — explore Echigo-Yuzawa and Tokyo' },
    'sight.yuzawa': { zh: '🍶 越後湯澤 / 南魚沼', en: '🍶 Echigo-Yuzawa / Minamiuonuma' },
    'sight.tokyo': { zh: '🗼 東京', en: '🗼 Tokyo' },
    'sight.kansai': { zh: '⛩️ 關西（Calee 個人行程 12/19–12/25）', en: '⛩️ Kansai (Calee\'s solo trip 12/19–12/25)' },

    'spot.ponshukan.title': { zh: 'ぽんしゅ館（Ponshukan）', en: 'Ponshukan (ぽんしゅ館)' },
    'spot.ponshukan.desc': { zh: '越後湯澤車站內的清酒博物館，可品嚐超過 100 種新潟地酒。投幣式品酒體驗，是日本酒愛好者的天堂。', en: 'Sake museum inside Echigo-Yuzawa Station. Taste 100+ Niigata local sakes via coin-operated tasting. A paradise for sake lovers.' },
    'spot.ponshukan.link': { zh: '官網 →', en: 'Website →' },
    'spot.kiyotsu.title': { zh: '清津峽 / Tunnel of Light', en: 'Kiyotsu Gorge / Tunnel of Light' },
    'spot.kiyotsu.desc': { zh: '日本三大峽谷之一，隧道內的藝術裝置將自然與現代藝術完美結合。鏡面水池倒映峽谷美景，是新潟最具代表性的打卡景點。', en: 'One of Japan\'s top 3 gorges. Art installations inside the tunnel blend nature with modern art. The mirror pool reflecting the gorge is Niigata\'s most iconic photo spot.' },
    'spot.hakkai.title': { zh: '八海山索道', en: 'Mt. Hakkai Ropeway' },
    'spot.hakkai.desc': { zh: '搭乘纜車登上八海山，俯瞰南魚沼平原的壯麗雪景。八海山也是知名清酒品牌的發源地。', en: 'Ride the ropeway up Mt. Hakkai for panoramic views of the snowy Minamiuonuma plain. Also the birthplace of the famous Hakkaisan sake brand.' },
    'spot.hakkai.link': { zh: '詳情 →', en: 'Details →' },
    'spot.uonuma.title': { zh: '魚沼之里', en: 'Uonuma no Sato' },
    'spot.uonuma.desc': { zh: '八海釀造的複合設施，包含酒藏、餐廳、甜點店。可參觀清酒釀造過程，品嚐以八海山清酒製作的甜點。', en: 'Hakkai Brewing complex with sake brewery, restaurants, and dessert shops. Tour the brewing process and taste Hakkaisan sake-infused sweets.' },
    'spot.uonuma.link': { zh: '官網 →', en: 'Website →' },
    'spot.hoshitoge.title': { zh: '星峠梯田', en: 'Hoshitoge Rice Terraces' },
    'spot.hoshitoge.desc': { zh: '被選為「日本棚田百選」的絕美梯田，冬季被白雪覆蓋時呈現夢幻般的景色。', en: 'Selected as one of Japan\'s "100 Best Terraced Rice Fields." Covered in snow during winter, creating a dreamlike landscape.' },
    'spot.soba.title': { zh: '大源太蕎麥麵體驗', en: 'Daigenta Soba Making Experience' },
    'spot.soba.desc': { zh: '親手製作正宗越後蕎麥麵的體驗工房，使用當地石磨蕎麥粉，體驗日本傳統手打蕎麥的樂趣。', en: 'Hands-on workshop to make authentic Echigo soba noodles using locally stone-ground buckwheat flour.' },
    'spot.soba.link': { zh: '詳情 →', en: 'Details →' },
    'spot.unagi.title': { zh: '備長名古屋鰻魚飯', en: 'Bincho Nagoya Unagi Rice' },
    'spot.unagi.desc': { zh: '東京天空樹 Solamachi 店。正宗名古屋鰻魚三吃（ひつまぶし），可享受三種不同吃法。', en: 'Tokyo Skytree Solamachi branch. Authentic Nagoya-style hitsumabushi — enjoy eel rice three different ways.' },
    'spot.monhun.title': { zh: 'モンハン酒場', en: 'Monster Hunter Bar' },
    'spot.monhun.desc': { zh: 'Monster Hunter 主題餐廳，1/2 上午 10:45 已預約 9 人（ID: 2VN4SJ）。', en: 'Monster Hunter themed restaurant. Reserved 1/2 at 10:45 for 9 pax (ID: 2VN4SJ).' },

    'spot.kyoto.title': { zh: '京都景點', en: 'Kyoto Highlights' },
    'spot.kyoto.desc': { zh: '鴨川、祗園、三千院、延曆寺、嵐山祐斎亭、車折神社、下鴨神社、貴船神社、京都御苑、三十三間堂、上賀茂神社、東寺、宇治', en: 'Kamogawa, Gion, Sanzen-in, Enryaku-ji, Arashiyama Yusai-tei, Kurumazaki Shrine, Shimogamo Shrine, Kifune Shrine, Kyoto Gyoen, Sanjusangen-do, Kamigamo Shrine, Toji, Uji' },
    'spot.amanohashidate.title': { zh: '天橋立', en: 'Amanohashidate' },
    'spot.amanohashidate.desc': { zh: '日本三景之一。推薦搭 JR 直達車「はしだて特急」從京都出發（約 2 小時）。飛龍觀回廊的「從跨下窺看」是必做體驗。', en: 'One of Japan\'s Three Scenic Views. Take the JR Hashidate Express from Kyoto (~2 hrs). The "peek between your legs" view from Hiryukan is a must.' },
    'spot.kyotofood.title': { zh: '京都美食', en: 'Kyoto Food' },
    'spot.kyotofood.desc': { zh: 'Gion Duck Rice、THE TERMINAL KYOTO、上賀茂神社旁神馬堂麻糬（需早上 10 點前排隊）', en: 'Gion Duck Rice, THE TERMINAL KYOTO, Shinbado Mochi near Kamigamo Shrine (queue before 10 AM)' },
    'spot.osakafood.title': { zh: '大阪美食', en: 'Osaka Food' },
    'spot.osakafood.desc': { zh: '松よし（鶴橋燒肉）、Tori Soba Zagin（雞白湯拉麵）、Tempura nuu nuu（天婦羅）、Yakitori Matsuri（北新地燒鳥）', en: 'Matsuyoshi (Tsuruhashi yakiniku), Tori Soba Zagin (chicken ramen), Tempura nuu nuu, Yakitori Matsuri (Kitashinchi)' },
    'spot.tsubamesanjo.title': { zh: '燕三條', en: 'Tsubame-Sanjo' },
    'spot.tsubamesanjo.desc': { zh: '12/25 下午前往。日本金屬加工重鎮，以菜刀、餐具聞名世界。燕三條 Wing 可參觀職人工藝。', en: '12/25 afternoon visit. Japan\'s metalworking hub, world-famous for knives and cutlery. Visit artisan workshops at Tsubame-Sanjo Wing.' },

    // ===== Members =====
    'members.title': { zh: '團員資訊', en: 'Team Members' },
    'members.desc': { zh: '雪具需求與航班資訊一覽', en: 'Equipment needs and flight information' },
    'members.th.name': { zh: '成員', en: 'Member' },
    'members.th.type': { zh: '滑雪類型', en: 'Ski Type' },
    'members.th.gear': { zh: '雪具需求', en: 'Gear Needed' },
    'members.th.arrive': { zh: '抵達', en: 'Arrival' },
    'members.th.depart': { zh: '離開', en: 'Departure' },

    'member.calee.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.calee.gear': { zh: '全套自備', en: 'Full set (own)' },
    'member.calee.arrive': { zh: '12/20 起日本 remote', en: '12/20 remote in Japan' },
    'member.yahsieh.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.yahsieh.gear': { zh: '全套自備', en: 'Full set (own)' },
    'member.yahsieh.arrive': { zh: '12/7 起日本 remote', en: '12/7 remote in Japan' },
    'member.yaowen.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.yaowen.gear': { zh: '需要單板', en: 'Need board' },
    'member.syujy.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.syujy.gear': { zh: '需要單板', en: 'Need board' },
    'member.kuohh.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.kuohh.gear': { zh: '需要單板 + 鞋子', en: 'Need board + boots' },
    'member.hclee.type': { zh: '單板 SB', en: 'Snowboard' },
    'member.hclee.gear': { zh: '需要單板 + 鞋子', en: 'Need board + boots' },
    'member.yysung.type': { zh: '雙板 SK', en: 'Ski' },
    'member.yysung.gear': { zh: '需要雙板 + 雪杖', en: 'Need skis + poles' },
    'member.yysung.depart': { zh: '未定', en: 'TBD' },
    'member.wangtr.type': { zh: '雙板 SK', en: 'Ski' },
    'member.wangtr.gear': { zh: '需要雙板 + 雪杖', en: 'Need skis + poles' },
    'member.wangtr.depart': { zh: '未定', en: 'TBD' },
    'member.hchsu.type': { zh: '雙板 SK', en: 'Ski' },
    'member.hchsu.gear': { zh: '需要雙板 + 鞋子 + 雪杖', en: 'Need skis + boots + poles' },

    'instructor.title': { zh: '教練安排', en: 'Instructor Arrangements' },
    'inst1.title': { zh: '單板教練 — 第一組', en: 'Snowboard Instructor — Group 1' },
    'inst1.members': { zh: 'calee / yaowen / syujy / yahsieh / 學妹', en: 'calee / yaowen / syujy / yahsieh / junior' },
    'inst1.date': { zh: '12/27（六）', en: '12/27 (Sat)' },
    'inst2.title': { zh: '單板教練 — 第二組', en: 'Snowboard Instructor — Group 2' },
    'inst2.date': { zh: '12/27（六）', en: '12/27 (Sat)' },
    'inst3.title': { zh: '雙板教練', en: 'Ski Instructor' },
    'inst3.members': { zh: 'yysung（偏好中文教練，一整天）', en: 'yysung (prefers Chinese-speaking instructor, full day)' },
    'inst3.date': { zh: '待定', en: 'TBD' },

    // ===== Planning =====
    'planning.title': { zh: '籌備歷程', en: 'Planning History' },
    'planning.desc': { zh: '從初步構想到最終定案的完整討論過程', en: 'The complete journey from initial concept to final plan' },
    'plan0.title': { zh: '初步構想', en: 'Initial Concept' },
    'plan0.p1': { zh: '最初考慮的目的地涵蓋全球：法國三峽谷、霞慕尼，奧地利 Arlberg，義大利多洛米蒂，日本岩手夏油高原、長野，以及哈爾濱。經過假期統計與討論，決定分為兩個團：2026 年歐洲/紐西蘭/北美團，以及 2025 年底日本團。', en: 'Initial destinations spanned the globe: France (Les 3 Vallées, Chamonix), Austria (Arlberg), Italy (Dolomites), Japan (Iwate Geto, Nagano), and Harbin. After schedule coordination, we split into two groups: a 2026 Europe/NZ/NA trip and a late-2025 Japan trip.' },
    'plan0.p2': { zh: '日本雪場候選：白馬岩越、白馬八方尾根、白馬五龍、志賀高原、奧志賀高原、高鷲 Snow Park。', en: 'Japan resort candidates: Hakuba Iwatake, Hakuba Happo-one, Hakuba Goryu, Shiga Kogen, Okushiga Kogen, Takasu Snow Park.' },
    'plan0.p3': { zh: '提出三個方案投票：(1) 高鷲 Snow Park + 名古屋觀光 (2) 白馬兩雪場 + 觀光 (3) 志賀高原兩雪場 + 觀光。', en: 'Three proposals put to vote: (1) Takasu Snow Park + Nagoya sightseeing (2) Two Hakuba resorts + sightseeing (3) Two Shiga Kogen resorts + sightseeing.' },
    'plan1.title': { zh: '地點與日期定案', en: 'Location & Dates Finalized' },
    'plan1.p1': { zh: '投票結果：白馬方案獲得最多支持（yahsieh、yaowen、hclee、Calee）。日期定案為 12/25–1/4 滑雪，12/20–12/25 個人自由安排。機票方向：去程可選大阪或東京，回程統一東京。', en: 'Vote result: Hakuba plan won (yahsieh, yaowen, hclee, Calee). Dates set: 12/25–1/4 skiing, 12/20–12/25 personal free time. Flights: inbound via Osaka or Tokyo, outbound from Tokyo.' },
    'plan1.p2': { zh: '觀光願望清單：大阪京都、名古屋、白馬村、長野縣、金澤 21 世紀美術館、安康魚、河豚。', en: 'Sightseeing wishlist: Osaka/Kyoto, Nagoya, Hakuba Village, Nagano Prefecture, 21st Century Museum of Contemporary Art Kanazawa, anglerfish, fugu.' },
    'plan2.title': { zh: '行程草案', en: 'Draft Itinerary' },
    'plan2.p1': { zh: '雪場方案調整為苗場 + 上越國際。制定初版行程表：12/25 抵達東京後前往苗場，12/26–28 苗場滑雪，12/28 移動至上越，12/29–31 上越滑雪，1/1 後回東京觀光。', en: 'Resort plan changed to Naeba + Joetsu Kokusai. Draft itinerary: 12/25 arrive Tokyo then head to Naeba, 12/26–28 ski Naeba, 12/28 transfer to Joetsu, 12/29–31 ski Joetsu, 1/1 onward Tokyo sightseeing.' },
    'plan2.p2': { zh: '住宿研究：苗場王子飯店（4 人房 ¥15,951/天/人）、上越地區待定。', en: 'Accommodation research: Naeba Prince Hotel (4-person room ¥15,951/night/person), Joetsu area TBD.' },
    'plan3.title': { zh: '交通與住宿確認', en: 'Transport & Accommodation Confirmed' },
    'plan3.p1': { zh: '確認苗場交通：從越後湯澤有公車，單程 45 分鐘，最早 8:12 發車。苗場雪票一日 ¥7,200。', en: 'Naeba transport confirmed: bus from Echigo-Yuzawa, 45 min one-way, earliest 8:12 AM. Naeba day pass ¥7,200.' },
    'plan3.p2': { zh: '已訂住宿：苗場 — Little Japan Echigo（Booking.com）、上越 — Airbnb 村舍（4 臥室 8 床 2.5 浴室）。', en: 'Booked: Naeba — Little Japan Echigo (Booking.com), Joetsu — Airbnb cottage (4 bedrooms, 8 beds, 2.5 baths).' },
    'plan4.title': { zh: '景點研究與教練', en: 'Sightseeing Research & Instructors' },
    'plan4.p1': { zh: '深入研究周邊景點：湯澤/南魚沼（ぽんしゅ館、清津峽、八海山索道、星峠梯田）、沼田（溫泉、城遺址）、前橋（不倒翁體驗、赤城神社）、新潟市（佐渡金山、燕三條菜刀、彌彥神社）。', en: 'In-depth sightseeing research: Yuzawa/Minamiuonuma (Ponshukan, Kiyotsu Gorge, Mt. Hakkai Ropeway, Hoshitoge Terraces), Numata (onsen, castle ruins), Maebashi (daruma experience, Akagi Shrine), Niigata City (Sado Gold Mine, Tsubame-Sanjo knives, Yahiko Shrine).' },
    'plan4.p2': { zh: '教練聯繫：SNOWDAY、SNOWPiNK。', en: 'Instructor contacts: SNOWDAY, SNOWPiNK.' },
    'plan5.title': { zh: '最終行程確認', en: 'Final Itinerary Confirmed' },
    'plan5.p1': { zh: '確認所有成員時間與進出方式。最終行程表定案，教練分組確認：單板兩組、雙板一組。新幹線時刻確認，住宿從苗場王子飯店改為神樂民宿。', en: 'All member schedules and travel arrangements confirmed. Final itinerary locked. Instructor groups: 2 snowboard groups, 1 ski group. Shinkansen times confirmed. Accommodation changed from Naeba Prince Hotel to Kagura guesthouse.' },
    'plan6.title': { zh: '預訂完成', en: 'Bookings Complete' },
    'plan6.p1': { zh: '新幹線 Toki 323 已訂（0 元票，現場可能需處理付款）。Skyliner 現場買票。APA Hotel 1/1–1/4 官網預約完成（現場付款）。苗場雪票可出國前訂。上越國際電子票已訂。', en: 'Shinkansen Toki 323 booked (¥0 ticket, may need on-site payment). Skyliner: buy on-site. APA Hotel 1/1–1/4 booked via official site (pay on-site). Naeba lift pass: book before departure. Joetsu Kokusai e-tickets purchased.' },
    'plan6.p2': { zh: '東京美食：備長名古屋鰻魚飯（天空樹店）。', en: 'Tokyo dining: Bincho Nagoya Unagi Rice (Skytree branch).' },

    // ===== Useful Info =====
    'info.title': { zh: '實用資訊', en: 'Useful Information' },
    'info.tickets': { zh: '🎿 雪票購買連結', en: '🎿 Lift Ticket Links' },
    'info.tickets.naeba': { zh: '苗場早鳥雪票（Webket）', en: 'Naeba Early Bird Ticket (Webket)' },
    'info.tickets.kagura': { zh: '神樂雪票（官網）', en: 'Kagura Lift Pass (Official)' },
    'info.tickets.joetsu': { zh: '上越國際雪票', en: 'Joetsu Kokusai Lift Pass' },
    'info.bus': { zh: '🚌 公車時刻表', en: '🚌 Bus Timetables' },
    'info.bus.weekday': { zh: '苗場公車（平日）', en: 'Naeba Bus (Weekdays)' },
    'info.bus.holiday': { zh: '苗場公車（假日）', en: 'Naeba Bus (Holidays)' },
    'info.bus.joetsu': { zh: '上越國際交通', en: 'Joetsu Kokusai Access' },
    'info.hotel': { zh: '🏨 住宿連結', en: '🏨 Accommodation Links' },
    'info.hotel.lj': { zh: 'Little Japan Echigo（Booking）', en: 'Little Japan Echigo (Booking)' },
    'info.hotel.airbnb': { zh: '浦佐民宿（Airbnb）', en: 'Urasa Guesthouse (Airbnb)' },
    'info.instructor': { zh: '📱 教練聯繫', en: '📱 Instructor Contacts' },

    // ===== Trip Series =====

    // ===== Footer =====
    'series.title': 'Ski Trip Series',
    'series.current': 'Current',
    'series.2024.title': 'Fukushima Ski Trip',
    'series.2024.desc': 'Fukushima · Aizu · Nikko · Tokyo',
    'series.2024.meta': '9 Days · 8 People · Listel Ski Fantasia',
    'series.2025I.title': 'Hokkaido Kiroro Ski Trip',
    'series.2025I.desc': 'Hokkaido · Kiroro · Otaru · Sapporo',
    'series.2025I.meta': '11 Days · 8 People · Kiroro Snow World',
    'series.2025II.title': 'Niigata Ski Trip',
    'series.2025II.desc': 'Naeba · Joetsu Kokusai · Echigo-Yuzawa · Tokyo',
    'series.2025II.meta': '11 Days · 9 People · Naeba + Joetsu Kokusai',
    'series.2026.title': 'Europe Ski + City Tour',
    'series.2026.desc': 'Austria · Christmas Markets · Alpine Skiing',
    'series.2026.meta': 'Planning · 4 Austrian Resorts',
    'footer.main': { zh: '🗾 2025-26 日本滑雪團 — 苗場 · 上越國際 · 越後湯澤 · 東京', en: '🗾 2025-26 Japan Ski Trip — Naeba · Joetsu Kokusai · Echigo-Yuzawa · Tokyo' },
    'series.title': 'Ski Trip Series',
    'series.current': 'Current',
    'series.2024.title': 'Fukushima Ski Trip',
    'series.2024.desc': 'Fukushima · Aizu · Nikko · Tokyo',
    'series.2024.meta': '9 Days · 8 People · Listel Ski Fantasia',
    'series.2025I.title': 'Hokkaido Kiroro Ski Trip',
    'series.2025I.desc': 'Hokkaido · Kiroro · Otaru · Sapporo',
    'series.2025I.meta': '11 Days · 8 People · Kiroro Snow World',
    'series.2025II.title': 'Niigata Ski Trip',
    'series.2025II.desc': 'Naeba · Joetsu Kokusai · Echigo-Yuzawa · Tokyo',
    'series.2025II.meta': '11 Days · 9 People · Naeba + Joetsu Kokusai',
    'series.2026.title': 'Europe Ski + City Tour',
    'series.2026.desc': 'Austria · Christmas Markets · Alpine Skiing',
    'series.2026.meta': 'Planning · 4 Austrian Resorts',
    'footer.note': { zh: '本頁面整理自團隊 Notion 籌備文件，僅供團員參考使用', en: 'This page is compiled from the team\'s Notion planning documents, for team members\' reference only' },
};

// Map marker translations
const mapTranslations = {
    zh: [
        { lat: 35.772, lng: 140.393, name: '成田國際機場', desc: '12/24 抵達 · 1/2–4 離開', color: '#e74c3c' },
        { lat: 35.714, lng: 139.777, name: '上野車站', desc: '新幹線出發站', color: '#3498db' },
        { lat: 36.934, lng: 138.812, name: '越後湯澤車站', desc: '轉乘公車前往苗場 · ぽんしゅ館', color: '#3498db' },
        { lat: 37.033, lng: 138.917, name: '浦佐車站', desc: '上越住宿最近車站', color: '#3498db' },
        { lat: 36.846, lng: 138.779, name: '苗場滑雪場 + 神樂', desc: '12/26–28 滑雪 · 24 條雪道 · 海拔 900–1789m', color: '#2ecc71' },
        { lat: 37.003, lng: 138.883, name: '上越國際滑雪場', desc: '12/29–31 滑雪 · 日本最大 380 公頃 · 22 條雪道', color: '#2ecc71' },
        { lat: 35.714, lng: 139.779, name: 'APA Hotel 上野稻荷町駅北', desc: '12/24 住宿', color: '#f39c12' },
        { lat: 36.846, lng: 138.780, name: 'Little Japan Echigo', desc: '12/25–27 住宿 · 苗場附近民宿', color: '#f39c12' },
        { lat: 37.030, lng: 138.910, name: '浦佐 Airbnb 民宿', desc: '12/28–31 住宿 · 4 臥室村舍', color: '#f39c12' },
        { lat: 35.685, lng: 139.783, name: 'APA Hotel 人形町駅東', desc: '1/1–3 住宿 · 東京觀光據點', color: '#f39c12' },
        { lat: 36.860, lng: 138.680, name: '清津峽 / Tunnel of Light', desc: '日本三大峽谷 · 藝術裝置', color: '#9b59b6' },
        { lat: 37.028, lng: 138.929, name: '八海山索道', desc: '俯瞰南魚沼平原', color: '#9b59b6' },
        { lat: 37.066, lng: 138.942, name: '魚沼之里', desc: '八海釀造複合設施', color: '#9b59b6' },
        { lat: 35.710, lng: 139.811, name: '東京天空樹', desc: '備長名古屋鰻魚飯', color: '#9b59b6' },
    ],
    en: [
        { lat: 35.772, lng: 140.393, name: 'Narita International Airport', desc: '12/24 Arrive · 1/2–4 Depart', color: '#e74c3c' },
        { lat: 35.714, lng: 139.777, name: 'Ueno Station', desc: 'Shinkansen departure', color: '#3498db' },
        { lat: 36.934, lng: 138.812, name: 'Echigo-Yuzawa Station', desc: 'Transfer to Naeba bus · Ponshukan', color: '#3498db' },
        { lat: 37.033, lng: 138.917, name: 'Urasa Station', desc: 'Nearest station to Joetsu accommodation', color: '#3498db' },
        { lat: 36.846, lng: 138.779, name: 'Mt. Naeba + Kagura', desc: '12/26–28 Skiing · 24 runs · 900–1789m', color: '#2ecc71' },
        { lat: 37.003, lng: 138.883, name: 'Joetsu Kokusai Ski Resort', desc: '12/29–31 Skiing · Japan\'s largest 380 ha · 22 runs', color: '#2ecc71' },
        { lat: 35.714, lng: 139.779, name: 'APA Hotel Ueno Inaricho', desc: '12/24 Stay', color: '#f39c12' },
        { lat: 36.846, lng: 138.780, name: 'Little Japan Echigo', desc: '12/25–27 Stay · Near Naeba', color: '#f39c12' },
        { lat: 37.030, lng: 138.910, name: 'Urasa Airbnb Cottage', desc: '12/28–31 Stay · 4 bedrooms', color: '#f39c12' },
        { lat: 35.685, lng: 139.783, name: 'APA Hotel Ningyocho', desc: '1/1–3 Stay · Tokyo base', color: '#f39c12' },
        { lat: 36.860, lng: 138.680, name: 'Kiyotsu Gorge / Tunnel of Light', desc: 'Top 3 gorges in Japan · Art installation', color: '#9b59b6' },
        { lat: 37.028, lng: 138.929, name: 'Mt. Hakkai Ropeway', desc: 'Panoramic views of Minamiuonuma', color: '#9b59b6' },
        { lat: 37.066, lng: 138.942, name: 'Uonuma no Sato', desc: 'Hakkai Brewing complex', color: '#9b59b6' },
        { lat: 35.710, lng: 139.811, name: 'Tokyo Skytree', desc: 'Bincho Nagoya Unagi Rice', color: '#9b59b6' },
    ]
};

// ===== Language State =====
let currentLang = localStorage.getItem('lang') || 'zh';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key][lang];
            } else {
                el.innerHTML = translations[key][lang];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

    // Update page title
    document.title = lang === 'zh' ? '🗾 2025-26 日本滑雪團' : '🗾 2025-26 Japan Ski Trip';

    // Update language toggle button
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? 'EN' : '中';
        langBtn.title = lang === 'zh' ? 'Switch to English' : '切換為中文';
    }

    // Update map markers
    if (window.tripMap && window.mapMarkers) {
        window.mapMarkers.forEach(marker => marker.remove());
        window.mapMarkers = [];
        const locations = mapTranslations[lang];
        locations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lng], { icon: createMapIcon(loc.color) })
                .addTo(window.tripMap)
                .bindPopup(`
                    <div style="font-family: 'Noto Sans TC', 'Inter', sans-serif; min-width: 180px;">
                        <strong style="font-size: 14px; color: #1a365d;">${loc.name}</strong>
                        <p style="margin: 4px 0 0; font-size: 12px; color: #718096; line-height: 1.5;">${loc.desc}</p>
                    </div>
                `);
            window.mapMarkers.push(marker);
        });
    }
}

function createMapIcon(color) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            width: 24px; height: 24px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -14]
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'zh' ? 'en' : 'zh');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
