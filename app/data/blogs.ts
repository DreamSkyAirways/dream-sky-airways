export interface BlogPost {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  category: "India" | "Family" | "Tips" | "Honeymoon" | "Adventure";
  readTime: string;
  date: string;
  author: string;
  content: string;
}

export const blogs: BlogPost[] = [
  // ================= INDIA CATEGORY =================
  {
    title: "Golden Triangle India Tour Guide: Delhi, Agra & Jaipur",
    slug: "golden-triangle-tour-guide-delhi-agra-jaipur",
    image: "/Packages/Agra/Taj_mahal.webp",
    category: "India",
    readTime: "9 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Explore India's most famous heritage circuit—the Taj Mahal in Agra, Amber Fort in Jaipur, and India Gate in Delhi.",
    content: `
<h2>The Golden Triangle Experience</h2>
<p>The Golden Triangle is India's iconic cultural route connecting Delhi, Agra, and Jaipur. Experience Mughal architecture, Rajput fortresses, vibrant bazaars, and world heritage sites in 5 to 7 days.</p>
`,
  },
  {
    title: "Varanasi Spiritual Travel Guide: Ghats & Ganga Aarti",
    slug: "varanasi-spiritual-ganga-aarti-guide",
    image: "/Packages/domestic/varanasi_3_ganga_aarti(1).webp",
    category: "India",
    readTime: "7 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Witness the sacred evening Ganga Aarti at Triveni Ghat, sunrise boat rides, Kashi Vishwanath temple, and ancient alleyways.",
    content: `
<h2>Spiritual Essence of Varanasi</h2>
<p>Varanasi is one of the world's oldest living cities. A sunrise wooden boat ride along Dashashwamedh Ghat and attending the evening Ganga Aarti offer profound spiritual tranquility.</p>
`,
  },
  {
    title: "Leh Ladakh Road Trip & Pangong Lake Expedition",
    slug: "ladakh-bike-expedition-pangong-lake",
    image: "/Packages/honeymoon/leh_1_pangong_lake.webp",
    category: "India",
    readTime: "10 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Cross Khardung La pass, marvel at the azure Pangong Tso lake, explore Nubra Valley dunes, and experience high-altitude Himalayan adventure.",
    content: `
<h2>High-Altitude Himalayan Journey</h2>
<p>Leh Ladakh is a dream destination for motorcycling, mountain passes, Buddhist monasteries, and crystal blue lakes nestled 14,000 feet above sea level.</p>
`,
  },
  {
    title: "Jaipur Pink City Royal Heritage & Palace Guide",
    slug: "jaipur-pink-city-royal-heritage-guide",
    image: "/Packages/domestic/jaipur_1_hawa_mahal.webp",
    category: "India",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Discover the honeycomb facade of Hawa Mahal, Jal Mahal water palace, Amber Fort elephant rides, and Rajasthani thali dining.",
    content: `
<h2>Royal Heritage of Jaipur</h2>
<p>Jaipur combines grand forts, pink sandstone architecture, authentic handicraft shopping, and centuries of royal Rajasthani hospitality.</p>
`,
  },

  // ================= FAMILY CATEGORY =================
  {
    title: "How to Plan a Perfect Family Vacation in India",
    slug: "perfect-family-vacation-planning",
    image: "/Blog/family11.png",
    category: "Family",
    readTime: "8 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Step-by-step guide to planning a stress-free, memorable family vacation in India with kids and senior family members.",
    content: `
<h2>Family Holiday Planning Essentials</h2>
<p>A great family vacation balances sightseeing, leisure, safe accommodation, and short travel hours. Choose destinations with verified medical facilities and kid-friendly resorts.</p>
`,
  },
  {
    title: "Jim Corbett Wildlife Safari Family Tour Guide",
    slug: "jim-corbett-safari-family-guide",
    image: "/Packages/JimCorbett/JimCorbett1.png",
    category: "Family",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Jeep safaris in Dhikala zone, Royal Bengal tiger spotting, riverside resort stays, and nature walks for families.",
    content: `
<h2>Wildlife & Jungle Safaris for Families</h2>
<p>Jim Corbett National Park offers exciting tiger safaris, birdwatching tours, and luxury jungle resorts along the Ramganga river.</p>
`,
  },
  {
    title: "Top 10 Family-Friendly Hill Stations in India",
    slug: "best-family-hill-stations-india",
    image: "/Packages/Nanital/nanital_view.webp",
    category: "Family",
    readTime: "7 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Explore Nainital boating, Shimla Toy Train rides, Mussoorie waterfalls, and Ooty tea gardens for unforgettable family holidays.",
    content: `
<h2>Cool Climate Family Escapes</h2>
<p>Hill stations provide safe environments, pleasant weather, cable car rides, and scenic viewpoints perfect for family bonding.</p>
`,
  },
  {
    title: "South India Coastal & Temple Family Itinerary",
    slug: "south-india-temple-coastal-family-trip",
    image: "/Packages/domestic/goa_5_aerial_beach.webp",
    category: "Family",
    readTime: "8 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Explore Kerala houseboats, Madurai grand temples, Mysore Palace lights, and peaceful palm beaches.",
    content: `
<h2>Cultural & Coastal South India</h2>
<p>Discover peaceful backwaters, ancient temple architecture, and family resort stays across Kerala, Karnataka, and Tamil Nadu.</p>
`,
  },

  // ================= TIPS CATEGORY =================
  {
    title: "Best Cheap Holiday Packages in India 2026 – Budget Travel Guide",
    slug: "cheap-holiday-packages-india-2026",
    image: "/Packages/domestic/delhi_1_india_gate.webp",
    category: "Tips",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Find cheap holiday packages in India for 2026. Compare budget domestic tours, weekend getaways, and affordable family holidays.",
    content: `
<h2>Travel More, Spend Less</h2>
<p>Smart travelers choose curated domestic tour packages with breakfast included, transparent hotel pricing, and zero surge fees.</p>
`,
  },
  {
    title: "Insider Tips to Book Cheap Flights & Avoid Surge Fees",
    slug: "how-to-find-cheap-flight-tickets",
    image: "/Aboutus.webp",
    category: "Tips",
    readTime: "5 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Learn the best days to book air tickets, incognito flight search tricks, airfare price alerts, and GDS wholesale discounts.",
    content: `
<h2>Save Money on Airfare</h2>
<p>Discover how mid-week flight departures, booking 3 weeks in advance, and comparing flight aggregators save thousands on domestic and international flights.</p>
`,
  },
  {
    title: "Why You Need Travel Insurance Before Every Trip",
    slug: "travel-insurance-coverage-guide",
    image: "/Our_Value.webp",
    category: "Tips",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Understand flight cancellation coverage, emergency medical expense reimbursement, lost baggage claims, and 24/7 protection.",
    content: `
<h2>Protect Your Travel Investment</h2>
<p>Travel insurance gives peace of mind for flight delays, medical emergencies abroad, lost passports, and trip interruptions.</p>
`,
  },
  {
    title: "Step-by-Step Tourist Visa Document Checklist",
    slug: "visa-application-document-checklist",
    image: "/Contact.webp",
    category: "Tips",
    readTime: "7 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Complete guide to passport validity, cover letters, bank statement proof, flight reservations, and embassy interview preparation.",
    content: `
<h2>Ensure Fast Visa Approval</h2>
<p>Follow our verified document checklist to avoid visa delays or rejections for Schengen, Dubai, US, UK, and Asian countries.</p>
`,
  },

  // ================= HONEYMOON CATEGORY =================
  {
    title: "Best Honeymoon Destinations in India for Couples",
    slug: "best-honeymoon-destinations-india",
    image: "/Packages/honeymoon/manali_1_beas_river.webp",
    category: "Honeymoon",
    readTime: "8 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Discover romantic honeymoon escapes—Kashmir houseboats, Manali snow cabins, Goa beach resorts, and Mussoorie hill views.",
    content: `
<h2>Romantic Indian Escapes</h2>
<p>Plan a romantic getaway with couple-friendly boutique stays, candlelight dinners, private transfers, and light sightseeing itineraries.</p>
`,
  },
  {
    title: "Kashmir Romantic Paradise Honeymoon Guide",
    slug: "kashmir-romantic-paradise-honeymoon-guide",
    image: "/Packages/honeymoon/manali_1_beas_river.webp",
    category: "Honeymoon",
    readTime: "7 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Shikara rides on Dal Lake, Gulmarg gondola snow rides, Pahalgam pine valleys, and cozy houseboat stays for couples.",
    content: `
<h2>Romance in the Valleys of Kashmir</h2>
<p>Kashmir is Asia's premier honeymoon paradise. Enjoy snow peaks, flower gardens, and luxury houseboat retreats.</p>
`,
  },
  {
    title: "Goa Beach Honeymoon & Tour Package Guide",
    slug: "goa-tour-package-guide",
    image: "/Packages/domestic/goa_4_sunset_beach.webp",
    category: "Honeymoon",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Sunset beach walks in South Goa, private resort villas, candlelit seafood dining, and romantic sea cruises.",
    content: `
<h2>Coastal Honeymoon Romance</h2>
<p>Goa offers luxury beach resorts, quiet palm coves, vibrant shacks, and unforgettable sunsets over the Arabian Sea.</p>
`,
  },
  {
    title: "Mussoorie & Shimla Romantic Hills Couple Escape",
    slug: "mussoorie-romantic-hills-couple-escape",
    image: "/Packages/honeymoon/mussoorie_2_hills_view.webp",
    category: "Honeymoon",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Walk hand-in-hand along Mall Road, enjoy Kempty Falls view, stay in heritage mountain resorts, and watch valley sunsets.",
    content: `
<h2>Charming Hill Station Romance</h2>
<p>Mussoorie and Shimla provide cool mountain breeze, pine forests, colonial architecture, and cozy fireplace suites.</p>
`,
  },

  // ================= ADVENTURE CATEGORY =================
  {
    title: "Rishikesh Travel Guide: Rafting, Camping & Yoga Stays",
    slug: "rishikesh-travel-guide-rafting-yoga",
    image: "/Packages/Rishikesh/Rishikesh3.webp",
    category: "Adventure",
    readTime: "7 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "White-water rafting on the Ganga, cliff jumping, Shivpuri riverside camping, bungee jumping, and evening Triveni Aarti.",
    content: `
<h2>Thrill & Peace in Rishikesh</h2>
<p>Experience Grade III & IV river rafting rapids, cliff jumping, beach bonfire camping, and Himalayan yoga retreats.</p>
`,
  },
  {
    title: "Manali Snow Adventure & Solang Valley Paragliding",
    slug: "manali-snow-adventure-solang-valley",
    image: "/Packages/honeymoon/manali_2_solang_valley.webp",
    category: "Adventure",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Snowboarding, quad biking, paragliding over Solang Valley, and high-pass excursions to Rohtang & Atal Tunnel.",
    content: `
<h2>Snow Thrills in Himachal</h2>
<p>Solang Valley in Manali is India's hub for winter snow sports, high-altitude ropeways, zorbing, and paragliding flights.</p>
`,
  },
  {
    title: "Bir Billing Paragliding & Himalayan Trekking Guide",
    slug: "bir-billing-paragliding-guide",
    image: "/Packages/honeymoon/shimla_1_mall_road.webp",
    category: "Adventure",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Fly high at the world's second-highest paragliding takeoff site, explore Tibetan monasteries, and trek to Rajgundha valley.",
    content: `
<h2>World-Class Tandem Paragliding</h2>
<p>Bir Billing in Himachal Pradesh offers 25-minute tandem paragliding flights with breathtaking views of the Dhauladhar range.</p>
`,
  },
  {
    title: "Goa Scuba Diving & Water Sports Adventure Guide",
    slug: "goa-scuba-diving-water-sports",
    image: "/Packages/domestic/goa_5_aerial_beach.webp",
    category: "Adventure",
    readTime: "6 min read",
    date: "2026",
    author: "Dream Sky Editorial",
    excerpt: "Explore Grand Island underwater corals, jet skiing, parasailing, banana rides, and speed boat tours along Baga beach.",
    content: `
<h2>Oceanic Watersports & Scuba Diving</h2>
<p>Experience thrilling water sports, PADI scuba diving lessons, and dolphin watching tours in the clear waters of Goa.</p>
`,
  },
];
