
 /* Destination Data for TravelNest*/


const destinations = [
    {
        id: 1,
        name: "Mirissa",
        country: "Sri Lanka",
        continent: "Asia",
        type: "relaxation",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1000",
        description: "A small, beautiful beach town on the southern coast of Sri Lanka, known for its golden sandy beaches and turquoise waters.",
        attractions: ["Whale Watching", "Coconut Tree Hill", "Parrot Rock"],
        costs: { budget: "$30", moderate: "$80", luxury: "$200" }
    },
    {
        id: 2,
        name: "Santorini",
        country: "Greece",
        continent: "Europe",
        type: "cultural",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000",
        description: "Famous for its stunning sunsets, white-washed buildings, and steep cliffs overlooking the Aegean Sea.",
        attractions: ["Oia Village", "Red Beach", "Akrotiri Archaeological Site"],
        costs: { budget: "$100", moderate: "$250", luxury: "$600" }
    },
    {
        id: 3,
        name: "Kyoto",
        country: "Japan",
        continent: "Asia",
        type: "cultural",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
        description: "The heart of traditional Japanese culture, featuring thousands of classical Buddhist temples and Shinto shrines.",
        attractions: ["Fushimi Inari Shrine", "Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove"],
        costs: { budget: "$60", moderate: "$150", luxury: "$400" }
    },
    {
        id: 4,
        name: "Machu Picchu",
        country: "Peru",
        continent: "South America",
        type: "adventure",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000",
        description: "An Incan citadel set high in the Andes Mountains, world-renowned for its sophisticated dry-stone walls.",
        attractions: ["Inca Trail", "Temple of the Sun", "Huayna Picchu"],
        costs: { budget: "$50", moderate: "$120", luxury: "$350" }
    },
    {
        id: 5,
        name: "Maasai Mara",
        country: "Kenya",
        continent: "Africa",
        type: "nature",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
        description: "One of the world's most famous safari destinations, home to the Great Migration and the 'Big Five'.",
        attractions: ["Great Migration Safari", "Hot Air Balloon Ride", "Maasai Village Visit"],
        costs: { budget: "$150", moderate: "$400", luxury: "$900" }
    },
    {
        id: 6,
        name: "Banff National Park",
        country: "Canada",
        continent: "North America",
        type: "nature",
        image: "https://images.unsplash.com/photo-1439396087961-99bc12bd8730?q=80&w=1000",
        description: "Canada's oldest national park, featuring turquoise glacial lakes and snow-capped Rocky Mountain peaks.",
        attractions: ["Lake Louise", "Moraine Lake", "Banff Upper Hot Springs"],
        costs: { budget: "$80", moderate: "$180", luxury: "$450" }
    },
    {
        id: 7,
        name: "Amalfi Coast",
        country: "Italy",
        continent: "Europe",
        type: "relaxation",
        image: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=1000",
        description: "A 50-kilometer stretch of coastline featuring sheer cliffs and a rugged shoreline dotted with pastel-colored fishing villages.",
        attractions: ["Positano Village", "Path of the Gods", "Villa Cimbrone"],
        costs: { budget: "$120", moderate: "$300", luxury: "$800" }
    },
    {
        id: 8,
        name: "Great Barrier Reef",
        country: "Australia",
        continent: "Oceania",
        type: "nature",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000",
        description: "The world's largest coral reef system, visible from outer space and teeming with diverse marine life.",
        attractions: ["Scuba Diving", "Whitsunday Islands", "Heart Reef"],
        costs: { budget: "$140", moderate: "$350", luxury: "$700" }
    },
    {
        id: 9,
        name: "Petra",
        country: "Jordan",
        continent: "Asia",
        type: "cultural",
        image: "https://images.unsplash.com/photo-1579606030136-39806647240c?q=80&w=1000",
        description: "An archaeological site containing caves, temples, and tombs carved into pink sandstone cliffs.",
        attractions: ["The Treasury (Al-Khazneh)", "The Monastery", "Siq Canyon"],
        costs: { budget: "$70", moderate: "$160", luxury: "$380" }
    },
    {
        id: 10,
        name: "Reykjavik",
        country: "Iceland",
        continent: "Europe",
        type: "adventure",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000",
        description: "A gateway to Iceland's natural wonders, including volcanic landscapes and the Northern Lights.",
        attractions: ["Blue Lagoon", "Golden Circle", "Hallgrímskirkja Church"],
        costs: { budget: "$130", moderate: "$280", luxury: "$650" }
    },
    {
        id: 11,
        name: "Cairo",
        country: "Egypt",
        continent: "Africa",
        type: "cultural",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000",
        description: "Set on the Nile River, Cairo is home to the iconic Giza Pyramid Complex and the Great Sphinx.",
        attractions: ["Pyramids of Giza", "The Egyptian Museum", "Khan el-Khalili Bazaar"],
        costs: { budget: "$40", moderate: "$100", luxury: "$250" }
    },
    {
        id: 12,
        name: "Queenstown",
        country: "New Zealand",
        continent: "Oceania",
        type: "adventure",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000",
        description: "The adventure capital of the world, offering bungee jumping, skiing, and jet boating.",
        attractions: ["Milford Sound", "Bungy Jumping", "Skyline Gondola"],
        costs: { budget: "$90", moderate: "$220", luxury: "$550" }
    }
];