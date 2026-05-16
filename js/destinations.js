const destinations = [
  {
    destinationName: "Bali",
    country: "Indonesia",
    rating:"4.7",
    destinationImage: "destination-images/image1.jpg",
    bestTimeToVisit: "April to October",
    dailyBudget: "$80 - $150",
    travelVibes: "Relaxed / Tropical",
    weather: "26°C - 31°C",
    language: "Indonesian",
    currency: "IDR",
    destinationType: "Adventure",
    estimateDays: "7 - 10 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$50 - $80",
      moderate: "$80 - $150",
      luxury: "$150+"
    },
    destinationDescription:
      "Bali offers tropical beaches, rice terraces, waterfalls, and vibrant cultural experiences perfect for relaxing and adventure.",
    popularAttractions: [
      "Ubud Rice Terraces",
      "Tanah Lot Temple",
      "Nusa Penida"
    ]
  },

  {
    destinationName: "Maldives",
    country: "Maldives",
    rating:"4.8",
    destinationImage: "destination-images/image2.jpg",
    bestTimeToVisit: "November to April",
    dailyBudget: "$120 - $250",
    travelVibes: "Luxury / Tropical",
    weather: "27°C - 32°C",
    language: "Dhivehi",
    currency: "MVR",
    destinationType: "Beach",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$80 - $120",
      moderate: "$120 - $250",
      luxury: "$250+"
    },
    destinationDescription:
      "Crystal-clear waters, overwater villas, and coral reefs make the Maldives perfect for beach lovers and honeymooners.",
    popularAttractions: [
      "Coral Reefs",
      "Private Islands",
      "Snorkeling Tours"
    ]
  },

  {
    destinationName: "Tokyo",
    country: "Japan",
    rating:"4.9",
    destinationImage: "destination-images/image3.jpg",
    bestTimeToVisit: "March to May",
    dailyBudget: "$100 - $180",
    travelVibes: "Modern / Fast-paced",
    weather: "10°C - 25°C",
    language: "Japanese",
    currency: "JPY",
    destinationType: "City",
    estimateDays: "6 - 8 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$70 - $100",
      moderate: "$100 - $180",
      luxury: "$180+"
    },
    destinationDescription:
      "Tokyo combines futuristic city life, anime culture, delicious food, and historic temples in one exciting destination.",
    popularAttractions: [
      "Shibuya Crossing",
      "Tokyo Tower",
      "Senso-ji Temple"
    ]
  },

  {
    destinationName: "Paris",
    country: "France",
    rating:"4.9",
    destinationImage: "destination-images/image4.jpg",
    bestTimeToVisit: "April to June",
    dailyBudget: "$120 - $220",
    travelVibes: "Romantic / Cultural",
    weather: "12°C - 24°C",
    language: "French",
    currency: "EUR",
    destinationType: "City",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$80 - $120",
      moderate: "$120 - $220",
      luxury: "$220+"
    },
    destinationDescription:
      "Paris is famous for art, fashion, iconic landmarks, charming cafés, and romantic city experiences.",
    popularAttractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River"
    ]
  },

  {
    destinationName: "Santorini",
    country: "Greece",
    rating:"4.5",
    destinationImage: "destination-images/image5.jpg",
    bestTimeToVisit: "May to September",
    dailyBudget: "$90 - $170",
    travelVibes: "Relaxed / Romantic",
    weather: "20°C - 30°C",
    language: "Greek",
    currency: "EUR",
    destinationType: "Island",
    estimateDays: "4 - 6 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$70 - $90",
      moderate: "$90 - $170",
      luxury: "$170+"
    },
    destinationDescription:
      "Santorini features whitewashed villages, stunning sunsets, blue domes, and beautiful Mediterranean beaches.",
    popularAttractions: [
      "Oia Village",
      "Red Beach",
      "Caldera Views"
    ]
  },

  {
    destinationName: "Dubai",
    country: "UAE",
    rating:"4.4",
    destinationImage: "destination-images/image6.jpg",
    bestTimeToVisit: "November to March",
    dailyBudget: "$100 - $250",
    travelVibes: "Luxury / Modern",
    weather: "20°C - 35°C",
    language: "Arabic",
    currency: "AED",
    destinationType: "City",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$70 - $100",
      moderate: "$100 - $250",
      luxury: "$250+"
    },
    destinationDescription:
      "Dubai offers skyscrapers, desert adventures, luxury shopping, and world-class entertainment experiences.",
    popularAttractions: [
      "Burj Khalifa",
      "Desert Safari",
      "Palm Jumeirah"
    ]
  },

  {
    destinationName: "Swiss Alps",
    country: "Switzerland",
    rating:"4.8",
    destinationImage: "destination-images/image7.jpg",
    bestTimeToVisit: "December to February",
    dailyBudget: "$150 - $300",
    travelVibes: "Nature / Adventure",
    weather: "-5°C - 10°C",
    language: "German",
    currency: "CHF",
    destinationType: "Mountain",
    estimateDays: "7 - 10 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$100 - $150",
      moderate: "$150 - $300",
      luxury: "$300+"
    },
    destinationDescription:
      "Snowy mountains, skiing resorts, scenic train rides, and alpine villages define the Swiss Alps experience.",
    popularAttractions: [
      "Jungfraujoch",
      "Matterhorn",
      "Interlaken"
    ]
  },

  {
    destinationName: "Bangkok",
    country: "Thailand",
    rating:"4.8",
    destinationImage: "destination-images/image8.jpg",
    bestTimeToVisit: "November to February",
    dailyBudget: "$40 - $100",
    travelVibes: "Food / Nightlife",
    weather: "25°C - 34°C",
    language: "Thai",
    currency: "THB",
    destinationType: "City",
    estimateDays: "4 - 6 days",
    generalBudgetType: "Low Budget",
    budgetType: {
      low: "$40 - $60",
      moderate: "$60 - $100",
      luxury: "$100+"
    },
    destinationDescription:
      "Bangkok is known for street food, floating markets, nightlife, temples, and vibrant city energy.",
    popularAttractions: [
      "Grand Palace",
      "Chatuchak Market",
      "Wat Arun"
    ]
  },

  {
    destinationName: "Cape Town",
    country: "South Africa",
    rating:"4.5",
    destinationImage: "destination-images/image9.jpg",
    bestTimeToVisit: "November to March",
    dailyBudget: "$60 - $140",
    travelVibes: "Nature / Adventure",
    weather: "18°C - 29°C",
    language: "English",
    currency: "ZAR",
    destinationType: "Adventure",
    estimateDays: "6 - 8 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$60 - $80",
      moderate: "$80 - $140",
      luxury: "$140+"
    },
    destinationDescription:
      "Cape Town combines beaches, mountains, wildlife, and vibrant cultural attractions in one stunning location.",
    popularAttractions: [
      "Table Mountain",
      "Boulders Beach",
      "Cape Point"
    ]
  },

  {
    destinationName: "New York City",
    country: "USA",
    rating:"4.3",
    destinationImage: "destination-images/image10.jpg",
    bestTimeToVisit: "September to November",
    dailyBudget: "$120 - $250",
    travelVibes: "Urban / Entertainment",
    weather: "5°C - 28°C",
    language: "English",
    currency: "USD",
    destinationType: "City",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$80 - $120",
      moderate: "$120 - $250",
      luxury: "$250+"
    },
    destinationDescription:
      "NYC offers iconic landmarks, Broadway shows, shopping, museums, and nonstop city excitement.",
    popularAttractions: [
      "Times Square",
      "Central Park",
      "Statue of Liberty"
    ]
  },

  {
    destinationName: "Istanbul",
    country: "Turkey",
    rating:"4.8",
    destinationImage: "destination-images/image11.jpg",
    bestTimeToVisit: "April to May",
    dailyBudget: "$50 - $120",
    travelVibes: "Historic / Cultural",
    weather: "12°C - 27°C",
    language: "Turkish",
    currency: "TRY",
    destinationType: "Historic",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$50 - $70",
      moderate: "$70 - $120",
      luxury: "$120+"
    },
    destinationDescription:
      "Istanbul blends ancient architecture, colorful bazaars, delicious cuisine, and rich cultural history.",
    popularAttractions: [
      "Hagia Sophia",
      "Blue Mosque",
      "Grand Bazaar"
    ]
  },

  {
    destinationName: "Sydney",
    country: "Australia",
    rating:"4.8",
    destinationImage: "destination-images/image12.jpg",
    bestTimeToVisit: "September to November",
    dailyBudget: "$100 - $200",
    travelVibes: "Beach / Urban",
    weather: "15°C - 28°C",
    language: "English",
    currency: "AUD",
    destinationType: "City",
    estimateDays: "6 - 8 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$80 - $100",
      moderate: "$100 - $200",
      luxury: "$200+"
    },
    destinationDescription:
      "Sydney features iconic beaches, harbor views, surfing culture, and famous architectural landmarks.",
    popularAttractions: [
      "Sydney Opera House",
      "Bondi Beach",
      "Harbour Bridge"
    ]
  },

  {
    destinationName: "Machu Picchu",
    country: "Peru",
    rating:"4.7",
    destinationImage: "destination-images/image13.jpg",
    bestTimeToVisit: "May to September",
    dailyBudget: "$70 - $150",
    travelVibes: "Adventure / Hiking",
    weather: "10°C - 22°C",
    language: "Spanish",
    currency: "PEN",
    destinationType: "Historic",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$50 - $70",
      moderate: "$70 - $150",
      luxury: "$150+"
    },
    destinationDescription:
      "Machu Picchu offers breathtaking mountain scenery, ancient ruins, and unforgettable hiking experiences.",
    popularAttractions: [
      "Inca Trail",
      "Sun Gate",
      "Sacred Valley"
    ]
  },

  {
    destinationName: "Reykjavik",
    country: "Iceland",
    rating:"4.8",
    destinationImage: "destination-images/image14.jpg",
    bestTimeToVisit: "June to August",
    dailyBudget: "$120 - $220",
    travelVibes: "Nature / Exploration",
    weather: "5°C - 15°C",
    language: "Icelandic",
    currency: "ISK",
    destinationType: "Nature",
    estimateDays: "6 - 9 days",
    generalBudgetType: "Luxury Budget",
    budgetType: {
      low: "$90 - $120",
      moderate: "$120 - $220",
      luxury: "$220+"
    },
    destinationDescription:
      "Iceland is famous for volcanoes, waterfalls, glaciers, hot springs, and the northern lights.",
    popularAttractions: [
      "Blue Lagoon",
      "Golden Circle",
      "Northern Lights"
    ]
  },

  {
    destinationName: "Rio de Janeiro",
    country: "Brazil",
    rating:"4.7",
    destinationImage: "destination-images/image15.jpg",
    bestTimeToVisit: "December to March",
    dailyBudget: "$60 - $140",
    travelVibes: "Beach / Party",
    weather: "24°C - 34°C",
    language: "Portuguese",
    currency: "BRL",
    destinationType: "Beach",
    estimateDays: "5 - 7 days",
    generalBudgetType: "Medium Budget",
    budgetType: {
      low: "$50 - $70",
      moderate: "$70 - $140",
      luxury: "$140+"
    },
    destinationDescription:
      "Rio offers energetic nightlife, stunning beaches, mountain views, and world-famous carnival celebrations.",
    popularAttractions: [
      "Christ the Redeemer",
      "Copacabana Beach",
      "Sugarloaf Mountain"
    ]
  }
];