// Hotel Data - Replace with your own data and images
const hotels = [
    {
        id: 1,
        name: "Ashok Vilas",
        location: "Buxar, Bihar",
        address: "123 Ocean Paradise Road, Male Atoll, Maldives 20026",
        phone: "+960 400-1234",
        rating: 4.9,
        pricePerNight: 2500,
        coordinates: { lat: 25.5643, lng: 83.9778 }, // Buxar coordinates
        badge: "Luxury",
        description: "Experience unparalleled luxury at The Grand Azure Resort, where crystal-clear waters meet pristine white sand beaches. Our overwater villas offer breathtaking views of the Indian Ocean, while our world-class spa and dining experiences will leave you refreshed and rejuvenated. Perfect for romantic getaways and those seeking the ultimate in relaxation.",
        amenities: [
            { name: "Private Pool", icon: "🏊" },
            { name: "Spa & Wellness", icon: "💆" },
            { name: "Fine Dining", icon: "🍽️" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Beach Access", icon: "🏖️" },
            { name: "Water Sports", icon: "🚤" }
        ],
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Aryan Lodge",
        location: "Gaya, Bihar",
        address: "456 Alpine Heights, Zermatt, Switzerland 3920",
        phone: "+41 27 966 0000",
        rating: 4.8,
        pricePerNight: 580,
        coordinates: { lat: 24.7955, lng: 84.9994 }, // Gaya coordinates
        badge: "Featured",
        description: "Nestled in the heart of the Swiss Alps, Mountain Peak Lodge offers spectacular views of the Matterhorn and surrounding peaks. Our cozy rooms feature traditional Alpine decor with modern amenities. Enjoy world-class skiing in winter and hiking trails in summer, followed by gourmet Swiss cuisine and our famous fondue nights.",
        amenities: [
            { name: "Mountain Views", icon: "🏔️" },
            { name: "Ski-in/Ski-out", icon: "⛷️" },
            { name: "Fireplace", icon: "🔥" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Restaurant", icon: "🍽️" },
            { name: "Spa", icon: "💆" }
        ],
        images: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "Dumraon Hotel",
        location: "Dumraon, Bihar",
        address: "789 Madison Avenue, Manhattan, NY 10065",
        phone: "+1 212-555-0123",
        rating: 4.7,
        pricePerNight: 1320,
        coordinates: { lat: 25.5515, lng: 84.1526 }, // Dumraon coordinates
        badge: "Trending",
        description: "Located in the heart of Manhattan, Urban Boutique Hotel combines contemporary design with timeless elegance. Steps away from Central Park and world-famous shopping, our hotel offers a tranquil retreat in the city that never sleeps. Each room features curated artwork and floor-to-ceiling windows with stunning city views.",
        amenities: [
            { name: "City Views", icon: "🌃" },
            { name: "Rooftop Bar", icon: "🍸" },
            { name: "Fitness Center", icon: "💪" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Concierge", icon: "🛎️" },
            { name: "Restaurant", icon: "🍽️" }
        ],
        images: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Buxar Garden Inn",
        location: "Buxar, Bihar",
        address: "234 Higashiyama-ku, Kyoto 605-0862, Japan",
        phone: "+81 75-561-1234",
        rating: 4.9,
        pricePerNight: 3290,
        coordinates: { lat: 25.5667, lng: 83.9833 }, // Buxar coordinates
        badge: "Cultural",
        description: "Experience authentic Japanese hospitality at Sakura Garden Inn. Our traditional ryokan features tatami rooms, private onsen baths, and serene Japanese gardens. Located near historic temples and the famous Gion district, immerse yourself in Japanese culture while enjoying modern comforts and kaiseki cuisine.",
        amenities: [
            { name: "Onsen Bath", icon: "♨️" },
            { name: "Japanese Garden", icon: "🌸" },
            { name: "Kaiseki Dining", icon: "🍱" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Tea Ceremony", icon: "🍵" },
            { name: "Yukata Robes", icon: "👘" }
        ],
        images: [
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80"
        ]
    },
    {
        id: 5,
        name: "RajKumar Villa",
        location: "Dumraon, Bihar",
        address: "567 Caldera View Road, Oia, Santorini 84702, Greece",
        phone: "+30 22860 71234",
        rating: 4.8,
        pricePerNight: 4420,
        coordinates: { lat: 25.5520, lng: 84.1530 }, // Dumraon coordinates
        badge: "Romantic",
        description: "Perched on the cliffs of Oia, Santorini Sunset Villa offers the most spectacular sunset views in the Mediterranean. Our whitewashed suites with private terraces overlook the famous caldera. Enjoy infinity pools, gourmet Greek cuisine, and the romantic ambiance that makes Santorini a dream destination for couples.",
        amenities: [
            { name: "Infinity Pool", icon: "🏊" },
            { name: "Sunset Views", icon: "🌅" },
            { name: "Private Terrace", icon: "🏛️" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Wine Tasting", icon: "🍷" },
            { name: "Airport Transfer", icon: "🚗" }
        ],
        images: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
            "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
            "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
            "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
        ]
    },
    {
        id: 6,
        name: "The Bihar Camp",
        location: "Bihar",
        address: "Serengeti National Park, Northern Tanzania",
        phone: "+255 27 250 8100",
        rating: 4.9,
        pricePerNight: 550,
        coordinates: { lat: 25.6093, lng: 85.1376 }, // Patna coordinates
        badge: "Adventure",
        description: "Experience the magic of the African savanna at Safari Wilderness Camp. Our luxury tented suites offer front-row seats to the Great Migration and incredible wildlife encounters. Expert guides lead daily game drives, while evenings feature gourmet bush dinners under the stars. An unforgettable adventure awaits.",
        amenities: [
            { name: "Game Drives", icon: "🦁" },
            { name: "Luxury Tents", icon: "⛺" },
            { name: "Bush Dining", icon: "🍽️" },
            { name: "Free WiFi", icon: "📶" },
            { name: "Stargazing", icon: "⭐" },
            { name: "Photography Tours", icon: "📷" }
        ],
        images: [
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800&q=80",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hotels;
}

