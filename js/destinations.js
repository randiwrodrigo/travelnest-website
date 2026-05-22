const destinations = [
  {
    destinationName: "Bali",
    country: "Indonesia",
    continent: "Asia",
    rating: "4.7",
    destinationImage: "destination-images/image1.webp",
    bestTimeToVisit: "April to October",
    dailyBudget: "$80 - $150",
    travelVibes: "Relaxed / Tropical",
    weather: "26°C - 31°C",
    language: "Indonesian",
    currency: "IDR",
    destinationType: "adventure",
    estimateDays: [7, 10],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [50, 80],
      moderate: [80, 150],
      luxury: [150]
    },

    destinationDescription:
      "Bali is a tropical paradise famous for stunning beaches, lush rice terraces, waterfalls, ancient temples, and vibrant nightlife.",

    popularAttractions: [
      "Ubud Rice Terraces",
      "Tanah Lot Temple",
      "Nusa Penida"
    ]
  },

  {
    destinationName: "Maldives",
    country: "Maldives",
    continent: "Asia",
    rating: "4.8",
    destinationImage: "destination-images/image2.webp",
    bestTimeToVisit: "November to April",
    dailyBudget: "$120 - $250",
    travelVibes: "Luxury / Tropical",
    weather: "27°C - 32°C",
    language: "Dhivehi",
    currency: "MVR",
    destinationType: "relaxation",
    estimateDays: [5, 7],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [80, 120],
      moderate: [120, 250],
      luxury: [250]
    },

    destinationDescription:
      "The Maldives is known for crystal-clear waters, white sandy beaches, luxury overwater villas, and colorful coral reefs.",

    popularAttractions: [
      "Coral Reefs",
      "Private Islands",
      "Snorkeling Tours"
    ]
  },

  {
    destinationName: "Tokyo",
    country: "Japan",
    continent: "Asia",
    rating: "4.9",
    destinationImage: "destination-images/image3.webp",
    bestTimeToVisit: "March to May",
    dailyBudget: "$100 - $180",
    travelVibes: "Modern / Fast-paced",
    weather: "10°C - 25°C",
    language: "Japanese",
    currency: "JPY",
    destinationType: "cultural",
    estimateDays: [6, 8],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [70, 100],
      moderate: [100, 180],
      luxury: [180]
    },

    destinationDescription:
      "Tokyo blends futuristic technology, anime culture, traditional temples, and incredible food experiences into one exciting city.",

    popularAttractions: [
      "Shibuya Crossing",
      "Tokyo Tower",
      "Senso-ji Temple"
    ]
  },

  {
    destinationName: "Paris",
    country: "France",
    continent: "Europe",
    rating: "4.9",
    destinationImage: "destination-images/image4.webp",
    bestTimeToVisit: "April to June",
    dailyBudget: "$120 - $220",
    travelVibes: "Romantic / Cultural",
    weather: "12°C - 24°C",
    language: "French",
    currency: "EUR",
    destinationType: "cultural",
    estimateDays: [5, 7],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [80, 120],
      moderate: [120, 220],
      luxury: [220]
    },

    destinationDescription:
      "Paris is one of the world’s most romantic cities, famous for iconic landmarks, luxury shopping, charming cafés, and historic architecture.",

    popularAttractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River"
    ]
  },

  {
    destinationName: "Santorini",
    country: "Greece",
    continent: "Europe",
    rating: "4.5",
    destinationImage: "destination-images/image5.webp",
    bestTimeToVisit: "May to September",
    dailyBudget: "$90 - $170",
    travelVibes: "Relaxed / Romantic",
    weather: "20°C - 30°C",
    language: "Greek",
    currency: "EUR",
    destinationType: "relaxation",
    estimateDays: [4, 6],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [70, 90],
      moderate: [90, 170],
      luxury: [170]
    },

    destinationDescription:
      "Santorini is famous for whitewashed buildings, blue domes, dramatic cliffs, and breathtaking sunsets overlooking the Aegean Sea.",

    popularAttractions: [
      "Oia Village",
      "Red Beach",
      "Caldera Views"
    ]
  },

  {
    destinationName: "Dubai",
    country: "UAE",
    continent: "Asia",
    rating: "4.4",
    destinationImage: "destination-images/image6.webp",
    bestTimeToVisit: "November to March",
    dailyBudget: "$100 - $250",
    travelVibes: "Luxury / Modern",
    weather: "20°C - 35°C",
    language: "Arabic",
    currency: "AED",
    destinationType: "adventure",
    estimateDays: [5, 7],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [70, 100],
      moderate: [100, 250],
      luxury: [250]
    },

    destinationDescription:
      "Dubai is a futuristic city known for luxury shopping, towering skyscrapers, desert adventures, and world-class entertainment.",

    popularAttractions: [
      "Burj Khalifa",
      "Desert Safari",
      "Palm Jumeirah"
    ]
  },

  {
    destinationName: "Swiss Alps",
    country: "Switzerland",
    continent: "Europe",
    rating: "4.8",
    destinationImage: "destination-images/image7.webp",
    bestTimeToVisit: "December to February",
    dailyBudget: "$150 - $300",
    travelVibes: "Nature / Adventure",
    weather: "-5°C - 10°C",
    language: "German",
    currency: "CHF",
    destinationType: "nature",
    estimateDays: [7, 10],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [100, 150],
      moderate: [150, 300],
      luxury: [300]
    },

    destinationDescription:
      "The Swiss Alps offer breathtaking snowy mountains, scenic train rides, skiing resorts, and peaceful alpine villages.",

    popularAttractions: [
      "Jungfraujoch",
      "Matterhorn",
      "Interlaken"
    ]
  },

  {
    destinationName: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    rating: "4.8",
    destinationImage: "destination-images/image8.webp",
    bestTimeToVisit: "November to February",
    dailyBudget: "$40 - $100",
    travelVibes: "Food / Nightlife",
    weather: "25°C - 34°C",
    language: "Thai",
    currency: "THB",
    destinationType: "cultural",
    estimateDays: [4, 6],
    generalBudgetType: "Low Budget",

    budgetType: {
      low: [40, 60],
      moderate: [60, 100],
      luxury: [100]
    },

    destinationDescription:
      "Bangkok is a vibrant city famous for street food, floating markets, nightlife, temples, and energetic city life.",

    popularAttractions: [
      "Grand Palace",
      "Chatuchak Market",
      "Wat Arun"
    ]
  },

  {
    destinationName: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    rating: "4.5",
    destinationImage: "destination-images/image9.webp",
    bestTimeToVisit: "November to March",
    dailyBudget: "$60 - $140",
    travelVibes: "Nature / Adventure",
    weather: "18°C - 29°C",
    language: "English",
    currency: "ZAR",
    destinationType: "nature",
    estimateDays: [6, 8],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [60, 80],
      moderate: [80, 140],
      luxury: [140]
    },

    destinationDescription:
      "Cape Town combines stunning beaches, dramatic mountains, wildlife experiences, and vibrant cultural attractions.",

    popularAttractions: [
      "Table Mountain",
      "Boulders Beach",
      "Cape Point"
    ]
  },

  {
    destinationName: "New York City",
    country: "USA",
    continent: "North America",
    rating: "4.3",
    destinationImage: "destination-images/image10.webp",
    bestTimeToVisit: "September to November",
    dailyBudget: "$120 - $250",
    travelVibes: "Urban / Entertainment",
    weather: "5°C - 28°C",
    language: "English",
    currency: "USD",
    destinationType: "cultural",
    estimateDays: [5, 7],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [80, 120],
      moderate: [120, 250],
      luxury: [250]
    },

    destinationDescription:
      "New York City is famous for iconic landmarks, Broadway shows, shopping districts, museums, and nonstop city energy.",

    popularAttractions: [
      "Times Square",
      "Central Park",
      "Statue of Liberty"
    ]
  },

  {
    destinationName: "Istanbul",
    country: "Turkey",
    continent: "Europe",
    rating: "4.8",
    destinationImage: "destination-images/image11.webp",
    bestTimeToVisit: "April to May",
    dailyBudget: "$50 - $120",
    travelVibes: "Historic / Cultural",
    weather: "12°C - 27°C",
    language: "Turkish",
    currency: "TRY",
    destinationType: "cultural",
    estimateDays: [5, 7],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [50, 70],
      moderate: [70, 120],
      luxury: [120]
    },

    destinationDescription:
      "Istanbul beautifully blends ancient history, colorful bazaars, rich culture, and delicious cuisine.",

    popularAttractions: [
      "Hagia Sophia",
      "Blue Mosque",
      "Grand Bazaar"
    ]
  },

  {
    destinationName: "Sydney",
    country: "Australia",
    continent: "Oceania",
    rating: "4.8",
    destinationImage: "destination-images/image12.webp",
    bestTimeToVisit: "September to November",
    dailyBudget: "$100 - $200",
    travelVibes: "Beach / Urban",
    weather: "15°C - 28°C",
    language: "English",
    currency: "AUD",
    destinationType: "relaxation",
    estimateDays: [6, 8],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [80, 100],
      moderate: [100, 200],
      luxury: [200]
    },

    destinationDescription:
      "Sydney is a vibrant coastal city known for its iconic harbor, beautiful beaches, surfing culture, and modern city lifestyle.",

    popularAttractions: [
      "Sydney Opera House",
      "Bondi Beach",
      "Harbour Bridge"
    ]
  },

  {
    destinationName: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    rating: "4.7",
    destinationImage: "destination-images/image13.webp",
    bestTimeToVisit: "May to September",
    dailyBudget: "$70 - $150",
    travelVibes: "Adventure / Hiking",
    weather: "10°C - 22°C",
    language: "Spanish",
    currency: "PEN",
    destinationType: "adventure",
    estimateDays: [5, 7],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [50, 70],
      moderate: [70, 150],
      luxury: [150]
    },

    destinationDescription:
      "Machu Picchu is an ancient Incan city surrounded by breathtaking mountain scenery and rich history.",

    popularAttractions: [
      "Inca Trail",
      "Sun Gate",
      "Sacred Valley"
    ]
  },

  {
    destinationName: "Reykjavik",
    country: "Iceland",
    continent: "Europe",
    rating: "4.8",
    destinationImage: "destination-images/image14.webp",
    bestTimeToVisit: "June to August",
    dailyBudget: "$120 - $220",
    travelVibes: "Nature / Exploration",
    weather: "5°C - 15°C",
    language: "Icelandic",
    currency: "ISK",
    destinationType: "nature",
    estimateDays: [6, 9],
    generalBudgetType: "Luxury Budget",

    budgetType: {
      low: [90, 120],
      moderate: [120, 220],
      luxury: [220]
    },

    destinationDescription:
      "Reykjavik is the gateway to Iceland’s incredible natural wonders, including glaciers, volcanoes, waterfalls, and hot springs.",

    popularAttractions: [
      "Blue Lagoon",
      "Golden Circle",
      "Northern Lights"
    ]
  },

  {
    destinationName: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    rating: "4.7",
    destinationImage: "destination-images/image15.webp",
    bestTimeToVisit: "December to March",
    dailyBudget: "$60 - $140",
    travelVibes: "Beach / Party",
    weather: "24°C - 34°C",
    language: "Portuguese",
    currency: "BRL",
    destinationType: "relaxation",
    estimateDays: [5, 7],
    generalBudgetType: "Medium Budget",

    budgetType: {
      low: [50, 70],
      moderate: [70, 140],
      luxury: [140]
    },

    destinationDescription:
      "Rio de Janeiro is famous for its lively beaches, energetic nightlife, mountain views, and world-renowned Carnival celebrations.",

    popularAttractions: [
      "Christ the Redeemer",
      "Copacabana Beach",
      "Sugarloaf Mountain"
    ]
  }
];