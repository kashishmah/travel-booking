const hotels = [
    {
        id: 1,
        name: "The Grand Palace",
        city: "New Delhi",
        location: "Connaught Place, New Delhi, India",
        rating: 4.6,
        reviews: 1250,
        price: 3499,

        description:
            "The Grand Palace is a luxurious hotel located in the heart of New Delhi. It offers comfortable rooms, excellent dining, modern facilities and easy access to major attractions.",

        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Free Wi-Fi",
            "Swimming Pool",
            "Free Parking",
            "Restaurant",
            "Fitness Centre",
            "Air Conditioning"
        ],

        rooms: [
            {
                name: "Deluxe Room",
                guests: 2,
                beds: "1 King Bed",
                price: 3499,
                available: true,
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Executive Room",
                guests: 2,
                beds: "1 King Bed",
                price: 4499,
                available: true,
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Luxury Suite",
                guests: 4,
                beds: "2 King Beds",
                price: 6999,
                available: true,
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Rahul Sharma",
                rating: 5,
                text: "Excellent hotel with clean rooms and very helpful staff."
            },
            {
                name: "Priya Singh",
                rating: 4,
                text: "Great location and comfortable rooms. Breakfast was also very good."
            }
        ]
    },

    {
        id: 2,
        name: "Mumbai Sea View Hotel",
        city: "Mumbai",
        location: "Marine Drive, Mumbai, India",
        rating: 4.8,
        reviews: 980,
        price: 5200,

        description:
            "Enjoy beautiful sea views, premium rooms and excellent hospitality at this stylish hotel in Mumbai.",

        images: [
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Free Wi-Fi",
            "Sea View",
            "Restaurant",
            "Gym",
            "Room Service",
            "Air Conditioning"
        ],

        rooms: [
            {
                name: "Sea View Room",
                guests: 2,
                beds: "1 King Bed",
                price: 5200,
                available: true,
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Premium Suite",
                guests: 4,
                beds: "2 King Beds",
                price: 7500,
                available: true,
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Aman Verma",
                rating: 5,
                text: "Amazing sea view and excellent service."
            },
            {
                name: "Neha Gupta",
                rating: 5,
                text: "One of the best hotels I have stayed at."
            }
        ]
    },

    {
        id: 3,
        name: "Goa Paradise Resort",
        city: "Goa",
        location: "Calangute, Goa, India",
        rating: 4.5,
        reviews: 875,
        price: 4299,

        description:
            "Relax at this beautiful resort near Calangute Beach with swimming pools, comfortable rooms and easy beach access.",

        images: [
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Beach Access",
            "Swimming Pool",
            "Restaurant",
            "Free Wi-Fi",
            "Spa",
            "Parking"
        ],

        rooms: [
            {
                name: "Garden Room",
                guests: 2,
                beds: "1 King Bed",
                price: 4299,
                available: true,
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Beach Suite",
                guests: 4,
                beds: "2 Beds",
                price: 6500,
                available: true,
                image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Riya Kapoor",
                rating: 5,
                text: "Beautiful resort and very close to the beach."
            }
        ]
    },

    {
        id: 4,
        name: "Royal Jaipur Palace",
        city: "Jaipur",
        location: "Pink City, Jaipur, India",
        rating: 4.3,
        reviews: 650,
        price: 2899,

        description:
            "Experience the royal charm of Jaipur in this beautiful heritage-style property.",

        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Free Wi-Fi",
            "Restaurant",
            "Parking",
            "Breakfast",
            "Room Service"
        ],

        rooms: [
            {
                name: "Royal Deluxe",
                guests: 2,
                beds: "1 King Bed",
                price: 2899,
                available: true,
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
            },
            {
                name: "Royal Suite",
                guests: 4,
                beds: "2 Beds",
                price: 4999,
                available: true,
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Arjun Mehta",
                rating: 4,
                text: "Beautiful property with a royal atmosphere."
            }
        ]
    },

    {
        id: 5,
        name: "Bangalore Tech Park Hotel",
        city: "Bangalore",
        location: "Whitefield, Bangalore, India",
        rating: 4.4,
        reviews: 720,
        price: 3800,

        description:
            "A modern business hotel perfect for travellers visiting Bangalore.",

        images: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Free Wi-Fi",
            "Gym",
            "Restaurant",
            "Parking",
            "Business Centre"
        ],

        rooms: [
            {
                name: "Business Room",
                guests: 2,
                beds: "1 King Bed",
                price: 3800,
                available: true,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Karan Malhotra",
                rating: 4,
                text: "Good hotel for business travellers."
            }
        ]
    },

    {
        id: 6,
        name: "Manali Mountain Resort",
        city: "Manali",
        location: "Old Manali, Himachal Pradesh, India",
        rating: 4.9,
        reviews: 540,
        price: 6100,

        description:
            "A peaceful mountain resort surrounded by breathtaking Himalayan scenery.",

        images: [
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
        ],

        amenities: [
            "Mountain View",
            "Restaurant",
            "Free Wi-Fi",
            "Parking",
            "Fireplace"
        ],

        rooms: [
            {
                name: "Mountain View Room",
                guests: 2,
                beds: "1 King Bed",
                price: 6100,
                available: true,
                image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
            }
        ],

        reviewsList: [
            {
                name: "Simran Kaur",
                rating: 5,
                text: "Amazing mountain views and peaceful atmosphere."
            }
        ]
    }
];