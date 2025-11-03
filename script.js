const activities = [
    // Live Music & Performances
    {
        id: 1,
        name: "Jazz After Dark",
        description: "Enjoy live jazz performances in an intimate lounge setting.",
        location: "Karel T Lounge",
        latitude: -1.2286167450017529,
        longitude: 36.804990349894496,
        schedule: "Saturdays from 7:00pm",
        category: "Live Music & Performances",
        tags: ["Jazz", "Live Music", "Nightlife"],
        timeOfDay: "night",
        image: "images/Jazz-After-Dark.webp",
        alt: "Diners seated at a cozy restaurant enjoying live jazz music",
        website: "https://karel.co.ke/reservations/",
        linkTitle: "Reservations"
    },
    {
        id: 2,
        name: "Măm Măm Vietnamese Westlands",
        description: "Experience live music performances while enjoying Vietnamese cuisine.",
        location: "Mwanzi Market",
        latitude: -1.2548348522702397,
        longitude: 36.799984124193045,
        schedule: "Fridays from 7:00pm",
        category: "Live Music & Performances",
        tags: ["Live Music", "Dining", "Entertainment"],
        timeOfDay: "night",
        image: "images/Maam-Maam.jpg",
        alt: "Smiling musician holding an instrument during a live performance",
        phone: "0791214597"
    },
    {
        id: 3,
        name: "Live Jazzy Sundays",
        description: "Relax with smooth jazz performances on Sunday evenings.",
        location: "Bamba",
        latitude: -1.2869062283734707,
        longitude: 36.76021289535711,
        schedule: "Sundays from 6:00pm",
        category: "Live Music & Performances",
        tags: ["Jazz", "Live Music", "Sunday"],
        timeOfDay: "night",
        image: "images/Sunday-Sessions.webp",
        alt: "Close-up of a violin under soft lighting",
        website: "https://eatout.co.ke/restaurant/bamba/",
        linkTitle: "Reservations"
    },
    {
        id: 4,
        name: "Nairobi Orchestra",
        description: "Classical orchestral performances featuring local and international repertoire.",
        location: "Sabis International School, Runda",
        latitude: -1.2077902877071145,
        longitude: 36.830101476868464,
        schedule: "Ongoing Shows in November",
        category: "Orchestras & Musicals",
        tags: ["Classical", "Orchestra", "Live Music"],
        image: "images/Nairobi-Orchestra.webp",
        alt: "Poster announcing upcoming Nairobi Orchestra performance with event details",
        website: "https://kenyabuzz.com/events/event/nairobi-orchestra-reverie-odyssey",
        linkTitle: "Buy Ticket"
    },
    {
        id: 5,
        name: "Pulchra Musica",
        description: "Classical music shows featuring talented local musicians.",
        location: "Holy Cross Hall, Lavington",
        latitude: -1.284326951068929,
        longitude: 36.7610829503172,
        schedule: "Ongoing Shows in November",
        category: "Orchestras & Musicals",
        tags: ["Classical", "Live Music", "Performance"],
        image: "images/Pulchra-Musica.webp",
        alt: "Promotional poster showing concert dates for Pulchra Musica",
        website: "https://docs.google.com/forms/d/e/1FAIpQLSc5OldJFVpJ27MlKKoau8DhrzDQ04TsD-2R9Was-GZn45z4Yw/viewform",
        linkTitle: "Buy Tickets"
    },
    {
        id: 18,
        name: "Saxophone Fridays",
        description: "When the sax speaks, the night listens. Live sax, golden jazz, and a room that glows. Signature cocktails, gourmet bites, refined company. An intimate evening—soulful, timeless, unforgettable.",
        location: "Pax Manor, Muthaiga",
        latitude: -1.2515882994966572,
        longitude: 36.82558546652108,
        schedule: "Fridays from 7:00pm",
        category: "Live Music & Performances",
        tags: ["Saxophone", "Live Music", "Friday", "Nightlife"],
        timeOfDay: "night",
        image: "images/Saxophone-Fridays.webp",
        alt: "Mahogany-toned background with a saxophone in focus",
        website: "https://eatapp.co/reserve/pax-manor-58-muthaiga-rd",
        linkTitle: "Reservations"
    },
    // Stand Up Comedy
    {
        id: 6,
        name: "Winedown Wednesday",
        description: "Laugh out loud with Nairobi's funniest comedians in a relaxed atmosphere.",
        location: "2 Grapes - Wine & Friends",
        latitude: -1.296306007333743,
        longitude: 36.793941921059165,
        schedule: "Wednesdays, 7 PM (Free)",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Free", "Entertainment"],
        timeOfDay: "night",
        image: "images/Stand-up-Wednesday.webp",
        alt: "Illustrated poster with people in a restaurant watching a stage performance, with event details visible",
        website: "https://www.instagram.com/punchlinecomedyclubnairobi/",
        linkTitle: "View More Upcoming Shows"
    },
    {
        id: 8,
        name: "Giggles & Tickles",
        description: "Regular comedy shows with a mix of established and upcoming comedians.",
        location: "Nairobi Laugh Bar",
        latitude: -1.2932647766332508,
        longitude: 36.76187245174493,
        schedule: "Wednesdays–Saturdays, 7 PM",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Entertainment", "Nightlife"],
        timeOfDay: "night",
        image: "images/Nairobi-Laugh-Bar.webp",
        alt: "Poster with event details, showing guests seated in a lively restaurant for a comedy night",
        website: "https://standupcollective.co.ke/shows",
        linkTitle: "View More Upcoming Shows"
    },
    {
        id: 7,
        name: "Sets in the City",
        description: "Comedy night featuring top local comedians in a vibrant venue.",
        location: "254 Beer District",
        latitude: -1.266167826824762,
        longitude: 36.80193810756618,
        schedule: "Thursdays, 7 PM (Free)",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Free", "Entertainment"],
        timeOfDay: "night",
        image: "images/Punchline-Comedy-Thursday.webp",
        alt: "Sketch-style poster showing people dining and watching a performance, with event timing and RSVP details",
        website: "https://www.instagram.com/punchlinecomedyclubnairobi/",
        linkTitle: "View More Upcoming Shows"
    },
    {
        id: 9,
        name: "Braeburn Theater",
        description: "Step into the Forest of Arden for a night of laughter, disguise, and love! Braeburn High School proudly presents As You Like It — A Musical Adaptation by Shaina Taub & Laurie Woolery of Shakespeare's timeless comedy brought to life by our talented students.",
        location: "Braeburn Theater",
        latitude: -1.2891353762889035,
        longitude: 36.75571346708775,
        schedule: "November Shows",
        category: "Theatre",
        tags: ["Theatre", "Performance", "Arts"],
        image: "images/Braeburn-Theatre.webp",
        alt: "Poster for Braeburn High School's theatre production",
        website: "https://www.theatres.braeburn.com/",
        linkTitle: "Buy Tickets"
    },
    {
        id: 10,
        name: "Kenya National Theatre",
        description: "Premier venue for stage productions, plays, and cultural performances.",
        location: "Kenya Cultural Centre",
        latitude: -1.277520744372908,
        longitude: 36.81817363547025,
        schedule: "November Shows",
        category: "Theatre",
        tags: ["Theatre", "Cultural", "Performance"],
        image: "images/Kenya-National-Theatre.webp",
        alt: "Audience seated in the Kenya National Theatre facing the stage",
        website: "https://theatreke.com/",
        linkTitle: "Buy Tickets",
        specialButton: true
    },
    // Workshops & Creative Experiences
    // Pottery
    {
        id: 12,
        name: "Pottery Class",
        description: "Art gallery offering workshops and classes in various artistic techniques.",
        location: "Enanka Art Gallery",
        latitude: -1.2646435267128173,
        longitude: 36.800984972637785,
        schedule: "Mon–Sat, 10am–6pm",
        category: "Workshops & Creative Experiences",
        tags: ["Art", "Gallery", "Creative"],
        timeOfDay: "day",
        image: "images/Enanka-Poster-Classes.webp",
        alt: "Poster showing pottery class schedule and charges, with a photo of a person molding clay",
        website: "https://enanka.co.ke/art/potteryandclay-experience/",
        linkTitle: "Book Class"
    },
    {
        id: 27,
        name: "Nairobi Sketch Tour",
        description: "We create and curate exciting cultural experiences all over Kenya centering on art. Also engage in private curated tours",
        location: "Various scenic locations (e.g., Ngong Hills)",
        schedule: "Mon–Fri, 9am–5pm; Sat, 9am–4pm",
        category: "Workshops & Creative Experiences",
        tags: ["Art", "Outdoor", "Cultural", "Sketching", "Tours", "Creative"],
        timeOfDay: "day",
        image: "images/Nairobi-Sketch-Tour.webp",
        alt: "Artistic landscape view",
        website: "https://nairobisketchtour.hustlesasa.shop/",
        linkTitle: "Buy Tickets"
    },
    {
        id: 14,
        name: "Art Class",
        description: "The Nairobi Art Centre is committed to providing creative, innovative visual art, craft and design education to learners and educators of differing abilities in an inspiring environment. We have 13 years of experience in teaching art.",
        location: "Nairobi Art Centre",
        latitude: -1.2671530827753854,
        longitude: 36.77757742399555,
        schedule: "",
        category: "Workshops & Creative Experiences",
        tags: ["Art", "Workshop", "Creative"],
        timeOfDay: "day",
        image: "images/Nairobi-Art-Center.webp",
        alt: "Poster describing art class activities and details",
        website: "https://nairobiartcentre.org/book-a-class/",
        linkTitle: "Book Class"
    },
    {
        id: 21,
        name: "Glass Blowing & Mosaic Classes",
        description: "Experience glass blowing from start to finish, create beautiful beads, or learn mosaic techniques in hands-on workshops.",
        location: "Kitengela Glass - Studio",
        latitude: -1.3887795781663663,
        longitude: 36.821407432009394,
        schedule: "Mon–Sun, 8am–4:30pm",
        category: "Workshops & Creative Experiences",
        tags: ["Glass Blowing", "Bead Making", "Mosaic", "Hands-on", "Creative"],
        timeOfDay: "day",
        image: "images/Kitengela-Glass.webp",
        alt: "Two people working together, one demonstrating how to shape molten glass",
        website: "https://www.kitengela.glass/products/experience-blown-to-life",
        linkTitle: "Book Experience"
    },
    {
        id: 19,
        name: "Roast & Brew Coffee Class",
        description: "Learn the art of coffee roasting and brewing in a hands-on workshop experience.",
        location: "Coffee Lab Nairobi",
        latitude: -1.2401498901927561,
        longitude: 36.76453663139096,
        schedule: "",
        category: "Workshops & Creative Experiences",
        tags: ["Coffee", "Workshop", "Hands-on", "Learning"],
        timeOfDay: "day",
        image: "images/Coffee-Lab.webp",
        alt: "Image of a person holding a coffee tasting rate card with class details in the background",
        website: "https://www.coffeelabnairobi.com/pages/coffee-cupping",
        linkTitle: "Book Experience"
    },
    // Outdoor & Adventure
    {
        id: 15,
        name: "Ziplining, Archery, Paintball",
        description: "Home to East Africa's longest Zipline tour with 2.2 kilometers. We offer a fantastic range of activities including paintball, archery, mountain biking, horse riding, footgolf, nature walks and delicious food from our canopy-view restaurant",
        location: "The Forest Adventure Centre and Restaurant",
        latitude: -0.946070812375075,
        longitude: 36.679964573870926,
        schedule: "Thur–Sun, 8:30am–5pm",
        category: "Outdoor & Adventure",
        tags: ["Adventure", "Outdoor", "Active"],
        timeOfDay: "day",
        image: "images/The-Forest.webp",
        alt: "Scenic view of a forest with a zipline running through the trees",
        website: "https://theforest.co.ke/#booking",
        linkTitle: "Book Activity"
    },
    {
        id: 16,
        name: "Shooting Range",
        description: "Shooting range and adventure activities for an unique and thrilling experience.",
        location: "National Gun Owners Association",
        latitude: -1.1217551638971501,
        longitude: 36.975533152781566,
        schedule: "Tue–Sun, 9am–5pm",
        category: "Outdoor & Adventure",
        tags: ["Adventure", "Outdoor", "Unique"],
        timeOfDay: "day",
        image: "images/Shooting-Range.jpg",
        alt: "Two rifles pointed toward a shooting range target area",
        phone: "0722199000"
    },
    {
        id: 43,
        name: "Paragliding",
        description: "Experience tandem paragliding over the scenic escarpment with trained pilots.",
        location: "Mawingu Forest Camp, Kijabe",
        latitude: -0.9033690239267615,
        longitude: 36.54618596094244,
        schedule: "Open 24 hours",
        category: "Outdoor & Adventure",
        tags: ["Paragliding", "Adventure", "Outdoor", "Aerial"],
        timeOfDay: "day",
        image: "images/Paragliding-Tandem.jpg",
        alt: "Paraglider soaring above green valleys",
        phone: "0725240949"
    },
    {
        id: 22,
        name: "Tea Farm Tour",
        description: "Take a walk in the indigenous forest with our resident Kenyan guide who will identify the plants and explain how they are traditionally used. Return to the house to enjoy three-course buffet lunch.",
        location: "Kiambethu Tea Farm",
        latitude: -1.1077090326819619,
        longitude: 36.68745077282931,
        schedule: "Thur–Sun, from 11am",
        category: "Outdoor & Adventure",
        tags: ["Tea", "Farm", "Tours", "Educational", "Outdoor"],
        timeOfDay: "day",
        image: "images/Kiambethu-Tea-Farm.jpg",
        alt: "Two people plucking tea leaves on a lush green farm",
        website: "https://www.kiambethufarm.com/tours",
        linkTitle: "Book Tour"
    },
    {
        id: 20,
        name: "Cinema in Nature",
        description: "An immersive audio film trek through Kenya's breathtaking landscapes, followed by a Picnic & Paint session where you bring history to life through art.",
        location: "Karura Forest",
        latitude: -1.234119191709093,
        longitude: 36.82984626930003,
        schedule: "",
        category: "Outdoor & Adventure",
        tags: ["Cinema", "Outdoor", "Nature", "Storytelling Experience", "Immersive Walk"],
        timeOfDay: "night",
        image: "images/Cinema-In-nature.webp",
        alt: "Poster for outdoor cinema experience with event details and a pair of headphones pictured",
        website: "https://cinemainnature.com/",
        linkTitle: "Book Experience"
    },
    // Cultural Heritage Sites
    {
        id: 24,
        name: "Kenya Railway Museum",
        description: "Explore Kenya's rail history through vintage locomotives, rolling stock, models, and artifacts.",
        location: "Kenya Railway Museum",
        latitude: -1.293351598335834,
        longitude: 36.8232066757956,
        schedule: "Mon–Sun, 8am–5pm",
        category: "Cultural Heritage Sites",
        tags: ["Museum", "History", "Heritage", "Educational"],
        timeOfDay: "day",
        image: "images/Nairobi-Railway-museum.jpg",
        alt: "Display of vintage telephones and locomotives inside the museum gallery"
    },
    {
        id: 26,
        name: "National Museum of Kenya",
        description: "Kenya's premier museum showcasing natural history, cultural heritage, and the story of Kenya's communities across time. Galleries include mammals, history, cycles of life, and numismatics.",
        location: "National Museum of Kenya",
        latitude: -1.273018928963737,
        longitude: 36.81631273601133,
        schedule: "Mon–Sun, 8:30am–5:30pm",
        category: "Cultural Heritage Sites",
        tags: ["Museum", "Natural History", "Cultural", "Heritage", "Educational"],
        timeOfDay: "day",
        image: "images/Nairobi-Museum.webp",
        alt: "Exhibition room featuring Kenyan historical artifacts"
    },
    {
        id: 25,
        name: "Kenya National Archives & Murumbi Gallery",
        description: "The national archives preserve Kenya's historical documents, photographs, and artifacts. The Murumbi Gallery exhibits Pan-African art and cultural heritage works.",
        location: "Kenya National Archives",
        latitude: -1.2846745066096323,
        longitude: 36.826474262845124,
        schedule: "Mon–Sun, 9am–4:30pm",
        category: "Cultural Heritage Sites",
        tags: ["Museum", "Archives", "Art", "Heritage", "Cultural"],
        timeOfDay: "day",
        image: "images/Kenya-National-Archives.webp",
        alt: "Interior view showing historical relics and artifacts"
    },
    // Fun & Games
    // Virtual Reality & Tech
    {
        id: 29,
        name: "REV Virtual Racing Experience",
        description: "Experience the thrill of professional racing with VR racing simulators.",
        location: "Village Market",
        latitude: -1.2290768099691873,
        longitude: 36.806056143939706,
        schedule: "Mon–Wed, 10am–9pm; Thu–Sun, 10am–10pm",
        category: "Fun & Games",
        subcategory: "Virtual Reality & Tech",
        tags: ["fun", "VR", "Racing", "Technology", "Indoor"],
        timeOfDay: "day",
        image: "images/Rev-Virtual-Racing.webp",
        alt: "Row of virtual racing simulators"
    },
    // Action & Adventure Games
    {
        id: 30,
        name: "Paintball Fury",
        description: "Engage in action-packed paintball battles in a thrilling outdoor setting.",
        location: "The Waterfront Karen",
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Action & Adventure Games",
        tags: ["fun", "Paintball", "Adventure", "Outdoor", "Active"],
        timeOfDay: "day",
        image: "images/Paintball.webp",
        alt: "Person firing a paintball gun at an outdoor range",
        hidden: true
    },
    // Optical Illusion & Interactive Experiences
    {
        id: 41,
        name: "Museum of Illusions",
        description: "Explore mind-bending optical illusions and interactive exhibits that challenge your perception.",
        location: "Museum of Illusions, Nairobi",
        latitude: -1.2678528696988007,
        longitude: 36.81758243400931,
        schedule: "Mon–Thu, 10am–8pm; Fri–Sun, 10am–10pm",
        category: "Fun & Games",
        subcategory: "Optical Illusion & Interactive Experiences",
        tags: ["fun", "Museum", "Illusions", "Interactive", "Indoor", "Educational"],
        timeOfDay: "day",
        image: "images/Museum-Of-Illusions.webp",
        alt: "Illusion table setup showing a head appearing on a plate"
    },
    // Go-Karting
    {
        id: 35,
        name: "Redhill Karting",
        description: "Experience the adrenaline rush of go-karting on a professional track.",
        location: "Redhill Karting Ltd",
        latitude: -1.1720647138096196,
        longitude: 36.71385030517299,
        schedule: "Tue–Sun, 11am–7pm",
        category: "Fun & Games",
        subcategory: "Go-Karting",
        tags: ["fun", "Go-Karting", "Racing", "Outdoor", "Adventure"],
        timeOfDay: "day",
        image: "images/Redhill-Karting.webp",
        alt: "Go-kart track with racers on the course"
    },
    // Mini Golf, Bowling & Indoor Play
    {
        id: 33,
        name: "The Yard Mini Golf",
        description: "Enjoy mini golf, bowling, and other indoor games in a lively atmosphere.",
        location: "Village Market",
        latitude: -1.2290768099691873,
        longitude: 36.806056143939706,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Mini Golf, Bowling & Indoor Play",
        tags: ["fun", "Mini Golf", "Bowling", "Indoor", "Entertainment"],
        timeOfDay: "day",
        image: "images/The-Yard.jpg",
        alt: "Night-time mini-golf course lit with neon lighting"
    },
    {
        id: 42,
        name: "Strikez Bowling",
        description: "Enjoy bowling in a modern alley setting.",
        location: "Westgate Shopping Mall",
        latitude: -1.2568315736335822,
        longitude: 36.80370898983064,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Mini Golf, Bowling & Indoor Play",
        tags: ["fun", "Bowling", "Indoor", "Entertainment"],
        timeOfDay: "day",
        image: "images/Strikez-Bowling.webp",
        alt: "Interior of a bowling alley with glowing lanes"
    },
    {
        id: 36,
        name: "Whistling Moran Go-Karting",
        description: "Race around the track on high-speed go-karts for an exhilarating experience.",
        location: "Whistling Moran Ltd",
        latitude: -1.4151964662405514,
        longitude: 36.998324097,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Go-Karting",
        tags: ["fun", "Go-Karting", "Racing", "Outdoor", "Adventure"],
        timeOfDay: "day",
        image: "images/Whistling-Moran.webp",
        alt: "Wide shot of the go-karting circuit"
    },
    // Ice Skating & Trampoline Parks
    {
        id: 37,
        name: "Panari Ice Skating Rink",
        description: "Glide across the ice at Nairobi's premier ice skating rink.",
        location: "Panari Sky Centre",
        latitude: -1.3286784093839588,
        longitude: 36.85700697764577,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Ice Skating & Trampoline Parks",
        tags: ["fun", "Ice Skating", "Indoor", "Entertainment", "Active"],
        timeOfDay: "day",
        image: "images/Panari-Ice-Skating.jpg",
        alt: "Indoor ice skating rink"
    },
    {
        id: 38,
        name: "Ozone Trampoline Park",
        description: "Bounce, jump, and play on trampolines in a safe and fun environment.",
        location: "Village Market",
        latitude: -1.2290768099691873,
        longitude: 36.806056143939706,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Ice Skating & Trampoline Parks",
        tags: ["fun", "Trampoline", "Indoor", "Entertainment", "Active"],
        timeOfDay: "day",
        image: "images/Ozone.jpg",
        alt: "Large indoor trampoline arena"
    },
    {
        id: 39,
        name: "Jump by the Flying Fox",
        description: "Adventure activities including racing zipline, airbag jump, giant swing, climbing wall, and abseiling.",
        location: "The Hub Karen",
        latitude: -1.320317234836205,
        longitude: 36.7042858475026,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Ice Skating & Trampoline Parks",
        tags: ["fun", "Zipline", "Climbing", "Adventure", "Outdoor", "Active"],
        timeOfDay: "day",
        image: "images/Jump-Nairobi.webp",
        alt: "Event poster with photo of a person mid-jump"
    },
    // Board Games & Chill Spots
    {
        id: 40,
        name: "Bao Box",
        description: "Enjoy board games while relaxing with food and drinks in a cozy atmosphere.",
        location: "Bao Box",
        latitude: -1.2501856782203402,
        longitude: 36.79009215914497,
        schedule: "Open daily",
        category: "Fun & Games",
        subcategory: "Board Games & Chill Spots",
        tags: ["fun", "Board Games", "Dining", "Indoor", "Relaxing"],
        timeOfDay: "day",
        image: "images/BaoBox.webp",
        alt: "Restaurant poster highlighting Eat, Play, Socialize"
    }
];

let activeFilters = {
    day: 'all', // 'all' = all days, 'weekday', 'weekend'
    time: 'all', // 'all', 'day', 'night'
    search: '', // Search term
    tokens: new Set(), // e.g., 'free', 'outdoor', 'spas'
    nearMe: false,
    userLocation: null, // { latitude: number, longitude: number }
    locationScope: 'all' // 'all' | 'within' | 'outside'
};

// Haversine formula to calculate distance between two coordinates (in kilometers)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Sets for location tagging
const withinNairobiNames = new Set([
    'Pottery class',
    'Art class',
    'Nairobi Sketch Tour',
    'Nairobi Orchestra',
    'Paltra Musica',
    'Pulchra Musica',
    'Cinema in Nature',
    'Braban Theatre',
    'Braeburn Theater',
    'Braeburn Theatre',
    'Kenya National Theatre',
    'Kenya Cultural Centre',
    'Live music performances',
    'Stand-up comedy',
    'Cultural Heritage Sites',
    'Cultural heritage sites'
]);

const outsideNairobiNames = new Set([
    'Glass Blowing & Mosaic Classes',
    'Kitengela Glass Studio',
    'Kitengela Glass - Studio',
    'Ziplining, Archery, Paintball',
    'The Forest Adventure Centre and Restaurant',
    'The Forest',
    'Shooting Range',
    'National Gun Owners Association',
    'Paragliding',
    'Tea Farm Tour',
    'Kiambethu Tea Farm',
    'Whistling Moran Go-Karting',
    'Whistling Moran Ltd',
    'The whitling moran',
    'Star Safari Experience',
    'Bunduz Safari & Camp',
    'Ragati Conservancy',
    'Castle Forest Lodge',
    'Castle Forest'
]);

function isWithinNairobi(activity) {
    const name = (activity.name || '').trim();
    if (withinNairobiNames.has(name)) return true;
    if (outsideNairobiNames.has(name)) return false;
    // Fallback: check by category hints
    const category = (activity.category || '').toLowerCase();
    if (category.includes('cultural heritage')) return true;
    // If unknown, default to within Nairobi for now
    return true;
}

function getDayType(activity) {
    if (activity.dayType) return activity.dayType;
    
    // Infer from schedule
    const schedule = activity.schedule?.toLowerCase() || '';
    if (schedule.includes('saturday') || schedule.includes('sunday') || schedule.includes('weekend')) {
        return 'weekend';
    }
    if (schedule.includes('monday') || schedule.includes('tuesday') || schedule.includes('wednesday') || 
        schedule.includes('thursday') || schedule.includes('friday') || schedule.includes('weekday')) {
        return 'weekday';
    }
    // Default to both if unclear
    return 'both';
}

function matchesFilters(activity) {
    // Hide activities marked as hidden
    if (activity.hidden === true) {
        return false;
    }
    
    // Search filter
    if (activeFilters.search) {
        const searchTerm = activeFilters.search.toLowerCase().trim();
        
        // For "play", show all Fun & Games activities
        if (searchTerm === 'play') {
            if (activity.category === 'Fun & Games') {
                // Include all Fun & Games activities, continue to check other filters
            } else {
                // Still search in other fields for other activities that might contain "play"
                const searchableText = [
                    activity.name,
                    activity.description,
                    activity.location,
                    activity.category,
                    ...(activity.tags || [])
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
        }
        // For specific keywords like "art", only search in tags
        else {
            const tagOnlyKeywords = ['art'];
            const isTagOnlySearch = tagOnlyKeywords.includes(searchTerm);
            
            if (isTagOnlySearch) {
                // Only search in tags for these keywords
                const tags = (activity.tags || []).map(tag => tag.toLowerCase());
                if (!tags.includes(searchTerm)) {
                    return false;
                }
            } else {
                // For other searches, search in all fields
                const searchableText = [
                    activity.name,
                    activity.description,
                    activity.location,
                    activity.category,
                    ...(activity.tags || [])
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
        }
    }
    
    // Time filter
    if (activeFilters.time !== 'all') {
        if (activity.timeOfDay !== activeFilters.time) {
            return false;
        }
    }
    
    // Day filter
    if (activeFilters.day !== 'all') {
        const dayType = getDayType(activity);
        if (dayType !== 'both' && dayType !== activeFilters.day) {
            return false;
        }
    }
    
    // Location scope filter
    if (activeFilters.locationScope && activeFilters.locationScope !== 'all') {
        const within = isWithinNairobi(activity);
        if (activeFilters.locationScope === 'within' && !within) return false;
        if (activeFilters.locationScope === 'outside' && within) return false;
    }

    // Token filters (pill tags)
    if (activeFilters.tokens && activeFilters.tokens.size > 0) {
        for (const token of activeFilters.tokens) {
            const t = String(token).toLowerCase();
            if (t === 'outdoor') {
                const tags = (activity.tags || []).map(x => String(x).toLowerCase());
                if (!tags.includes('outdoor')) return false;
            } else if (t === 'free') {
                const searchable = [activity.name, activity.description, activity.category, ...(activity.tags || [])]
                    .join(' ').toLowerCase();
                if (!searchable.includes('free')) return false;
            } else if (t === 'spas') {
                const searchable = [activity.category, ...(activity.tags || [])].join(' ').toLowerCase();
                if (!searchable.includes('spa')) return false;
            }
            // 'nearme' handled via UI behavior, not filtering (requires geolocation rules)
        }
    }
    
    return true;
}

function renderActivities() {
    const container = document.getElementById('categoriesList');
    
    // Filter activities first
    let filteredActivities = activities.filter(matchesFilters);
    
    // If "Near Me" is active and we have user location, sort by distance
    if (activeFilters.nearMe && activeFilters.userLocation) {
        filteredActivities = filteredActivities.map(activity => {
            // Validate coordinates exist and are numbers
            if (activity.latitude != null && activity.longitude != null && 
                typeof activity.latitude === 'number' && typeof activity.longitude === 'number' &&
                !isNaN(activity.latitude) && !isNaN(activity.longitude)) {
                const distance = calculateDistance(
                    activeFilters.userLocation.latitude,
                    activeFilters.userLocation.longitude,
                    activity.latitude,
                    activity.longitude
                );
                return { ...activity, distance };
            }
            // Activities without valid coordinates go to end
            return { ...activity, distance: Infinity };
        }).sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
    }
    
    // Group activities by category
    const categories = {};
    filteredActivities.forEach(activity => {
        if (!categories[activity.category]) {
            categories[activity.category] = [];
        }
        categories[activity.category].push(activity);
    });
    
    // Render by category with horizontal carousels
    let html = '';
    let categoryNames = Object.keys(categories);
    
    // Sort categories in this order:
    // 1) Workshops & Creative Experiences
    // 2) Orchestras & Musicals
    // 3) Outdoor & Adventure
    // 4) Theatre
    // then others, and Cultural Heritage Sites last
    const preferredOrder = ['Workshops & Creative Experiences', 'Orchestras & Musicals', 'Outdoor & Adventure', 'Theatre'];
    categoryNames = categoryNames.sort((a, b) => {
        // Always put Cultural Heritage Sites last
        const aIsHeritage = a === 'Cultural Heritage Sites';
        const bIsHeritage = b === 'Cultural Heritage Sites';
        if (aIsHeritage && !bIsHeritage) return 1;
        if (bIsHeritage && !aIsHeritage) return -1;

        // Then enforce preferred order
        const aIndex = preferredOrder.indexOf(a);
        const bIndex = preferredOrder.indexOf(b);
        const aPreferred = aIndex !== -1;
        const bPreferred = bIndex !== -1;

        if (aPreferred && bPreferred) return aIndex - bIndex;
        if (aPreferred && !bPreferred) return -1;
        if (!aPreferred && bPreferred) return 1;

        // Otherwise, keep original relative order
        return 0;
    });
    
    if (categoryNames.length === 0) {
        html = `
            <div class="no-results">
                <p>Hmm… we're coming up empty! If you have a suggestion for an activity we can add, let us know.</p>
                <a href="contact.html" class="suggest-activity-btn">Suggest an Activity</a>
            </div>
        `;
    } else {
        categoryNames.forEach((category) => {
            // Special handling for "Eat & Drink" category - make it a link section
            if (category === 'Eat & Drink') {
                html += `
                    <div class="category-section">
                        <div class="category-header">
                            <h3 class="category-title">
                                ${category}
                            </h3>
                        </div>
                    </div>
                `;
            } else {
                const carouselId = `carousel-${category.replace(/\s+/g, '-').toLowerCase()}`;
                const isStaticGrid = (categories[category] && categories[category].length <= 4);
                html += `
                    <div class="category-section">
                        <div class="category-header">
                            <h3 class="category-title">
                                ${category}
                            </h3>
                            <button class="category-arrow-btn" onclick="expandCategory('${category}')" aria-label="View all ${category}">
                                <svg class="arrow-head" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 2 L10 6 L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="carousel-container" tabindex="0" role="region" aria-label="${category} carousel" data-carousel-id="${carouselId}">
                            <div class="${isStaticGrid ? 'activities-carousel no-scroll' : 'activities-carousel'}" id="${carouselId}">
                                ${categories[category].map(activity => {
                                    const descId = `desc-${activity.id || category.toLowerCase().replace(/\s+/g, '-')}-${categories[category].indexOf(activity)}`;
                                    return `
                                    <div class="activity-card ${activity.name === 'Winedown Wednesday' || activity.name === 'Sets in the City' ? 'activity-card-large' : ''}">
                                        <div class="activity-card-image" onmouseenter="showDescription(this)" onmouseleave="hideDescription(this)">
                                            ${activity.image ? `<img src="${activity.image}" alt="${activity.alt || activity.name}" class="activity-card-img" width="300" height="240" loading="lazy" decoding="async">` : ''}
                                            <div class="activity-card-overlay"></div>
                                            <button class="description-toggle-btn" onclick="toggleDescription(this)" aria-expanded="false" aria-controls="${descId}" aria-label="Toggle description for ${activity.name}">
                                                <span class="visually-hidden">Show description</span>
                                            </button>
                                            <div id="${descId}" class="activity-card-description-overlay" role="region" aria-live="polite">${activity.description}</div>
                                        </div>
                                        <div class="activity-card-content">
                                            ${(() => { const bullets = getBulletPoints(activity); return bullets.length ? `<ul class="activity-card-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '' })()}
                                            <div class="activity-card-title">${activity.name}</div>
                                            <ul class="activity-card-info">
                                                <li>
                                                    <span class="icon-location-pin"></span>
                                                    <p>${activity.location}${activity.distance !== undefined && typeof activity.distance === 'number' && !isNaN(activity.distance) && isFinite(activity.distance) && activity.distance !== Infinity ? ` • ${activity.distance < 10 ? activity.distance.toFixed(1) : Math.round(activity.distance)} km` : ''}</p>
                                                </li>
                                                ${activity.schedule ? `
                                                <li>
                                                    <span class="icon-calendar"></span>
                                                    <p>${activity.schedule}</p>
                                                </li>
                                                ` : ''}
                                                ${activity.phone ? `
                                                <li>
                                                    <span class="icon-phone"></span>
                                                    <p><a href="tel:${activity.phone}">${activity.phone}</a></p>
                                                </li>
                                                ` : ''}
                                            </ul>
                                            ${activity.website ? `
                                            <a href="${activity.website}" target="_blank" rel="noopener noreferrer" class="activity-special-button">${activity.linkTitle || 'Visit Website'}</a>
                                            ` : ''}
                                            ${!activity.website ? `<div class="activity-button-spacer"></div>` : ''}
                                        </div>
                                    </div>
                                `;
                                }).join('')}
                            </div>
                            ${isStaticGrid ? '' : `
                            <div class="carousel-arrows">
                                <button class="carousel-arrow carousel-arrow-left" onclick="scrollCarousel('${carouselId}', -1)" aria-label="Scroll left">
                                    <svg class="arrow-head" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
                                        <path d="M4 2 L10 6 L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="carousel-arrow carousel-arrow-right" onclick="scrollCarousel('${carouselId}', 1)" aria-label="Scroll right">
                                    <svg class="arrow-head" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 2 L10 6 L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            `}
                        </div>
                    </div>
                `;
            }
        });
        
        // Add italic text after last category
        html += '<div class="new-activities-note"><em>New activities added regularly...</em></div>';
    }
    
    container.innerHTML = html;
    
    // Initialize carousel arrows and keyboard navigation after rendering
    setTimeout(() => {
        document.querySelectorAll('.activities-carousel').forEach(carousel => {
            updateCarouselArrows(carousel.id);
            // Add scroll listener to update arrow states
            carousel.addEventListener('scroll', () => {
                updateCarouselArrows(carousel.id);
            });
        });
        
        // Setup keyboard navigation for carousel containers
        document.querySelectorAll('.carousel-container').forEach(container => {
            setupCarouselKeyboardNav(container);
        });
    }, 100);
}

// Focus trap utilities
let previousActiveElement = null;
let modalFocusTrapHandlers = [];

// Get all focusable elements within a container
function getFocusableElements(container) {
    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]'
    ].join(', ');
    
    return Array.from(container.querySelectorAll(focusableSelectors)).filter(el => {
        // Filter out hidden elements
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && !el.hasAttribute('disabled');
    });
}

// Trap focus within a modal
function trapFocus(modalElement) {
    const focusableElements = getFocusableElements(modalElement);
    
    if (focusableElements.length === 0) return null;
    
    // Store first and last focusable elements
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus the first element
    setTimeout(() => {
        firstElement.focus();
    }, 0);
    
    // Handle Tab key to cycle through focusable elements
    const handleTabKey = (e) => {
        if (e.key !== 'Tab') return;
        
        // If Shift+Tab on first element, move to last
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }
        // If Tab on last element, move to first
        else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    };
    
    // Handle Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            // Check if we're inside a modal by looking for the modal container
            const modal = modalElement.closest('.modal, .more-filters-overlay');
            if (modal) {
                if (modal.id === 'viewAllModal') {
                    closeViewAllModal();
                } else if (modal.id === 'moreFiltersOverlay') {
                    closeMoreFilters();
                }
            } else {
                // Fallback: check if any modal is currently visible
                const viewAllModal = document.getElementById('viewAllModal');
                const moreFiltersOverlay = document.getElementById('moreFiltersOverlay');
                
                if (viewAllModal && viewAllModal.style.display !== 'none' && viewAllModal.style.display !== '') {
                    closeViewAllModal();
                } else if (moreFiltersOverlay && moreFiltersOverlay.style.display !== 'none' && moreFiltersOverlay.style.display !== '') {
                    closeMoreFilters();
                }
            }
        }
    };
    
    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);
    
    // Store handlers for cleanup
    const handlers = {
        tab: handleTabKey,
        escape: handleEscape
    };
    
    modalFocusTrapHandlers.push(handlers);
    
    return handlers;
}

// Release focus trap
function releaseFocusTrap() {
    // Remove all focus trap handlers
    modalFocusTrapHandlers.forEach(handlers => {
        document.removeEventListener('keydown', handlers.tab);
        document.removeEventListener('keydown', handlers.escape);
    });
    modalFocusTrapHandlers = [];
}

function expandCategory(category) {
    const filteredActivities = activities.filter(matchesFilters);
    const categoryActivities = filteredActivities.filter(a => a.category === category);
    
    if (categoryActivities.length === 0) return;
    
    // Store the element that triggered the modal
    previousActiveElement = document.activeElement;
    
    // Set modal title
    document.getElementById('viewAllTitle').textContent = category;
    
    // Render activities in grid
    const grid = document.getElementById('viewAllGrid');
    grid.innerHTML = categoryActivities.map((activity, index) => {
        const descId = `desc-modal-${activity.id || index}`;
        return `
        <div class="activity-card ${activity.name === 'Winedown Wednesday' || activity.name === 'Sets in the City' ? 'activity-card-large' : ''}">
            <div class="activity-card-image" onmouseenter="showDescription(this)" onmouseleave="hideDescription(this)">
                ${activity.image ? `<img src="${activity.image}" alt="${activity.name}" class="activity-card-img" width="300" height="240" loading="lazy" decoding="async">` : ''}
                <div class="activity-card-overlay"></div>
                <button class="description-toggle-btn" onclick="toggleDescription(this)" aria-expanded="false" aria-controls="${descId}" aria-label="Toggle description for ${activity.name}">
                    <span class="visually-hidden">Show description</span>
                </button>
                <div id="${descId}" class="activity-card-description-overlay" role="region" aria-live="polite">${activity.description}</div>
            </div>
            <div class="activity-card-content">
                <div class="activity-card-title">${activity.name}</div>
                ${(() => { const bullets = getBulletPoints(activity); return bullets.length ? `<ul class="activity-card-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '' })()}
                <ul class="activity-card-info">
                    <li>
                        <span class="icon-location-pin"></span>
                        <p>${activity.location}${activity.distance !== undefined && typeof activity.distance === 'number' && !isNaN(activity.distance) && isFinite(activity.distance) && activity.distance !== Infinity ? ` • ${activity.distance < 10 ? activity.distance.toFixed(1) : Math.round(activity.distance)} km` : ''}</p>
                    </li>
                    ${activity.schedule ? `
                    <li>
                        <span class="icon-calendar"></span>
                        <p>${activity.schedule}</p>
                    </li>
                    ` : ''}
                    ${activity.phone ? `
                    <li>
                        <span class="icon-phone"></span>
                        <p><a href="tel:${activity.phone}">${activity.phone}</a></p>
                    </li>
                    ` : ''}
                </ul>
                ${activity.website ? `
                <a href="${activity.website}" target="_blank" rel="noopener noreferrer" class="activity-special-button">${activity.linkTitle || 'Visit Website'}</a>
                ` : ''}
                ${!activity.website ? `<div class="activity-button-spacer"></div>` : ''}
            </div>
        </div>
    `;
    }).join('');
    
    // Show modal
    const modal = document.getElementById('viewAllModal');
    modal.style.display = 'flex';
    
    // Set ARIA attributes
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'viewAllTitle');
    
    // Trap focus inside modal
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        trapFocus(modalContent);
    }
}

function closeViewAllModal() {
    const modal = document.getElementById('viewAllModal');
    modal.style.display = 'none';
    
    // Release focus trap
    releaseFocusTrap();
    
    // Remove ARIA attributes
    modal.removeAttribute('role');
    modal.removeAttribute('aria-modal');
    modal.removeAttribute('aria-labelledby');
    
    // Restore focus to the element that opened the modal
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        setTimeout(() => {
            previousActiveElement.focus();
        }, 0);
    }
    previousActiveElement = null;
}

function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    // Determine exact step size = card width + gap
    const firstCard = carousel.querySelector('.activity-card');
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const style = getComputedStyle(carousel);
    const gapValue = style.getPropertyValue('column-gap') || style.getPropertyValue('gap') || '0';
    const gap = parseFloat(gapValue) || 0;
    const step = cardWidth + gap;

    const currentScroll = carousel.scrollLeft;
    let target = currentScroll + (direction * step);

    // Snap to nearest full-card position
    target = Math.round(target / step) * step;
    // Clamp bounds
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (target < 0) target = 0;
    if (target > maxScroll) target = maxScroll;

    carousel.scrollTo({ left: target, behavior: 'smooth' });
}

function updateCarouselArrows(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const container = carousel.closest('.carousel-container');
    if (!container) return;
    
    const leftArrow = container.querySelector('.carousel-arrow-left');
    const rightArrow = container.querySelector('.carousel-arrow-right');
    
    if (!leftArrow || !rightArrow) return;
    
    const canScrollLeft = carousel.scrollLeft > 0;
    const canScrollRight = carousel.scrollLeft < (carousel.scrollWidth - carousel.clientWidth - 1);
    
    // Update left arrow
    if (canScrollLeft) {
        leftArrow.classList.remove('carousel-arrow-disabled');
        leftArrow.classList.add('carousel-arrow-active');
    } else {
        leftArrow.classList.add('carousel-arrow-disabled');
        leftArrow.classList.remove('carousel-arrow-active');
    }
    
    // Update right arrow
    if (canScrollRight) {
        rightArrow.classList.remove('carousel-arrow-disabled');
        rightArrow.classList.add('carousel-arrow-active');
    } else {
        rightArrow.classList.add('carousel-arrow-disabled');
        rightArrow.classList.remove('carousel-arrow-active');
    }
}

// Setup keyboard navigation for carousel containers
function setupCarouselKeyboardNav(container) {
    if (!container) return;
    
    // Skip if this is a static grid (no scrolling)
    const carousel = container.querySelector('.activities-carousel');
    if (!carousel || carousel.classList.contains('no-scroll')) {
        // Remove tabindex if no scroll needed
        container.removeAttribute('tabindex');
        return;
    }
    
    const carouselId = carousel.id;
    if (!carouselId) return;
    
    // Handle keyboard events when focus is anywhere inside the container
    const handleKeyDown = (e) => {
        // Only handle arrow keys
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

        // Ensure the event originated within this container
        const targetInside = e.target && (e.target === container || container.contains(e.target));
        if (!targetInside) return;

        // Don't hijack typing inside inputs/textarea
        const tag = (e.target.tagName || '').toUpperCase();
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;

        const canScrollLeft = carousel.scrollLeft > 0;
        const canScrollRight = carousel.scrollLeft < (carousel.scrollWidth - carousel.clientWidth - 1);

        if (e.key === 'ArrowLeft' && canScrollLeft) {
            e.preventDefault();
            scrollCarousel(carouselId, -1);
        } else if (e.key === 'ArrowRight' && canScrollRight) {
            e.preventDefault();
            scrollCarousel(carouselId, 1);
        }
    };

    // Listen on the container so keys work when focus is on arrows or other elements inside
    container.addEventListener('keydown', handleKeyDown, true);
    
    // Store handler reference for cleanup if needed (using data attribute)
    container.setAttribute('data-keyboard-nav-setup', 'true');
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const container = dropdown.parentElement;
    
    // Close all other dropdowns
    document.querySelectorAll('.filter-dropdown-menu').forEach(menu => {
        if (menu.id !== dropdownId) {
            menu.style.display = 'none';
            menu.parentElement.classList.remove('open');
        }
    });
    
    // Toggle current dropdown
    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';
    container.classList.toggle('open');
}

function setDayFilter(value) {
    activeFilters.day = value;
    const text = value === 'all' ? 'All Days' : value === 'weekday' ? 'Weekdays' : 'Weekends';
    document.getElementById('dayFilterText').textContent = text;
    toggleDropdown('dayDropdown');
    renderActivities();
}

function setTimeFilter(value) {
    activeFilters.time = value;
    const text = value === 'all' ? 'All Times' : value === 'day' ? '☀️ Day' : '🌙 Night';
    document.getElementById('timeFilterText').textContent = text;
    toggleDropdown('timeDropdown');
    renderActivities();
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.filter-dropdown')) {
        document.querySelectorAll('.filter-dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
            menu.parentElement.classList.remove('open');
        });
    }
});

function getCategoryIcon(category) {
    const icons = {
        'Live Music & Performances': '♪',
        'Orchestras & Musicals': '♪',
        'Stand Up Comedy': '★',
        'Theatre': '🎭',
        'Workshops & Creative Experiences': '◆',
        'Outdoor & Adventure': '▲',
        'Eat & Drink': '◇',
        'Cultural Heritage Sites': '■',
        'Fun & Games': '◆'
    };
    return icons[category] || '○';
}

// Return bullet points shown under the image for selected venues
function getBulletPoints(activity) {
    const name = (activity.name || '').toLowerCase();
    const location = (activity.location || '').toLowerCase();

    // Karel T (Jazz After Dark)
    if (name === 'jazz after dark' || location.includes('karel t')) {
        return ['Restaurant', 'Free entry'];
    }
    // Bamba (Live Jazzy Sundays)
    if (name === 'live jazzy sundays' || location.includes('bamba')) {
        return ['Restaurant & bar', 'Free entry'];
    }
    // Măm Măm Vietnamese Westlands
    if (name.includes('măm măm') || location.includes('măm măm') || location.includes('mwanzi')) {
        return ['Restaurant', 'Free entry'];
    }
    // Pax Manor (Saxophone Fridays)
    if (name === 'saxophone fridays' || location.includes('pax manor')) {
        return ['Hotel & restaurant', 'Free entry'];
    }
    // Winedown Wednesday (Two Grapes)
    if (name === 'winedown wednesday' || location.includes('two grapes')) {
        return ['Restaurant & wine bar', 'Free entry'];
    }
    // Giggles & Tickles (Levels Hotel)
    if (name === 'giggles & tickles' || location.includes('levels')) {
        return ['Restaurant', 'Free entry'];
    }
    // Sets in the City (Beer District)
    if (name === 'sets in the city' || location.includes('beer district')) {
        return ['Restaurant & bar', 'Free entry'];
    }

    return [];
}


// Deprecated Date Planner feature: keep placeholder to avoid reference errors
let selectedActivities = [];

function toggleActivity(id) {
    const activity = activities.find(a => a.id === id);
    const index = selectedActivities.findIndex(a => a.id === id);
    
    if (index > -1) {
        selectedActivities.splice(index, 1);
    } else {
        selectedActivities.push(activity);
    }
    
    updateUI();
}

function updateUI() {
    renderActivities();
    renderSelectedActivities();
    renderItinerary();
}

function renderSelectedActivities() {
    const container = document.getElementById('selectedActivities');
    const clearBtn = document.getElementById('clearBtn');
    
    if (selectedActivities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💫</div>
                <p class="empty-state-text">Select activities to build your perfect date itinerary</p>
            </div>
        `;
        clearBtn.style.display = 'none';
    } else {
        container.innerHTML = `
            <div class="selected-list">
                ${selectedActivities.map((activity, index) => `
                    <div class="selected-item">
                        <div class="selected-item-header">
                            <div class="selected-item-number">${index + 1}</div>
                            <div class="selected-item-name">${activity.name}</div>
                        </div>
                        <div class="selected-item-location">${activity.location}</div>
                    </div>
                `).join('')}
            </div>
            <div class="sidebar-footer">
                <p><strong>${selectedActivities.length}</strong> activity${selectedActivities.length !== 1 ? 'ies' : 'y'} selected</p>
                <button class="btn-primary" onclick="scrollToItinerary()">Plan My Date</button>
            </div>
        `;
        clearBtn.style.display = 'block';
    }
}

function renderItinerary() {
    const itinerary = document.getElementById('itinerary');
    const content = document.getElementById('itineraryContent');
    
    if (selectedActivities.length === 0) {
        itinerary.style.display = 'none';
        return;
    }
    
    itinerary.style.display = 'block';
    content.innerHTML = selectedActivities.map((activity, index) => `
        <div class="itinerary-item">
            <div class="itinerary-number">${index + 1}</div>
            <div class="itinerary-content">
                <h3>${activity.name}</h3>
                <p>${activity.description}</p>
                <div class="activity-card-tags">
                    ${activity.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="itinerary-meta">
                    <span>📍 ${activity.location}</span>
                    ${activity.schedule ? `<span>⏰ ${activity.schedule}</span>` : ''}
                ${activeFilters.time !== 'all' && activity.timeOfDay === 'day' ? '<span class="time-indicator">☀️</span>' : ''}
                ${activeFilters.time !== 'all' && activity.timeOfDay === 'night' ? '<span class="time-indicator">🌙</span>' : ''}
                ${activity.category ? `<span>🏷️ ${activity.category}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function clearSelection() {
    selectedActivities = [];
    updateUI();
}

function scrollToItinerary() { return; }

// Sharing functionality
function shareDatePlan() { return; }

function closeShareModal() { return; }

function copyShareLink(event) { return; }

// Response functionality
function submitResponse(response) { return; }

function suggestAnotherDate() { return; }

function displayResponseStatus(response, senderName) { return; }

function renderSharedPlan(notesText, senderName, selectedDate, selectedTime) {
    // Create a simplified view for shared plans
    const main = document.querySelector('main');
    
    const nameDisplay = senderName ? senderName : 'Someone';
    const urlParams = new URLSearchParams(window.location.search);
    const responseParam = urlParams.get('response');
    
    // Format date for display
    let dateDisplay = '';
    if (selectedDate) {
        const date = new Date(selectedDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay = date.toLocaleDateString('en-US', options);
    }
    
    // Format time for display
    let timeDisplay = '';
    if (selectedTime) {
        const [hours, minutes] = selectedTime.split(':');
        const hour12 = parseInt(hours) % 12 || 12;
        const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
        timeDisplay = `${hour12}:${minutes} ${ampm}`;
    }
    
    let html = `
        <div class="shared-plan-container">
            <div class="shared-plan-card">
                <!-- Header Section -->
                <div class="shared-plan-card-header">
                    <h1>Date Plan Invitation</h1>
                    <p class="shared-plan-subtitle">${nameDisplay} has shared this plan with you!</p>
                </div>
                
                <!-- Activities Section -->
                <div class="shared-plan-card-section">
                    <h3 class="shared-plan-section-title">Activities</h3>
                    <div class="shared-plan-activities-list">
                ${selectedActivities.map((activity, index) => {
                    // Extract category type from category or tags
                    let categoryType = '';
                    
                    // Check category first (e.g., "Orchestras & Musicals" -> "Orchestra")
                    if (activity.category) {
                        if (activity.category.includes('Orchestras') || activity.category.includes('Musicals')) {
                            categoryType = activity.category.includes('Orchestras') ? 'Orchestra' : 'Musical';
                        } else if (activity.category.includes('Comedy')) {
                            categoryType = 'Comedy';
                        } else if (activity.category.includes('Workshops') || activity.category.includes('Classes')) {
                            categoryType = activity.category.includes('Workshops') ? 'Workshop' : 'Class';
                        } else if (activity.category.includes('Adventure')) {
                            categoryType = 'Adventure';
                        } else if (activity.category.includes('Live Music')) {
                            categoryType = 'Live Music';
                        }
                    }
                    
                    // If no category match, check tags
                    if (!categoryType && activity.tags && activity.tags.length > 0) {
                        const categoryKeywords = {
                            'Orchestra': ['Orchestra', 'Orchestras'],
                            'Musical': ['Musical', 'Musicals'],
                            'Comedy': ['Comedy'],
                            'Theatre': ['Theatre', 'Theater'],
                            'Jazz': ['Jazz'],
                            'Live Music': ['Live Music'],
                            'Workshop': ['Workshop', 'Workshops'],
                            'Class': ['Class', 'Classes'],
                            'Adventure': ['Adventure'],
                            'Outdoor': ['Outdoor'],
                            'Cinema': ['Cinema'],
                            'Running': ['Running']
                        };
                        
                        for (const [key, values] of Object.entries(categoryKeywords)) {
                            if (activity.tags.some(tag => values.some(v => tag.toLowerCase().includes(v.toLowerCase())))) {
                                categoryType = key;
                                break;
                            }
                        }
                        
                        // Fallback to first tag if no match
                        if (!categoryType && activity.tags[0]) {
                            categoryType = activity.tags[0];
                        }
                    }
                    
                    // Format: "Activity Name - Category"
                    const displayName = categoryType ? `${activity.name} - ${categoryType}` : activity.name;
                    
                    // Format description with "Let's..." prefix - fix grammar
                    let description = '';
                    if (activity.description) {
                        let desc = activity.description.charAt(0).toLowerCase() + activity.description.slice(1);
                        // Fix grammar: replace "your" with "our", remove redundant words
                        desc = desc.replace(/\byour\s+own\b/gi, 'our own');
                        desc = desc.replace(/\byour\b/gi, 'our');
                        desc = desc.replace(/\byou\b/gi, 'we');
                        desc = desc.replace(/\byourselves\b/gi, 'ourselves');
                        // Remove "together" at the end if it exists (redundant with "Let's")
                        desc = desc.replace(/\s+together\.?$/i, '');
                        // Remove redundant "our own" in common phrases (e.g., "create our own ceramic pieces" -> "create ceramic pieces")
                        desc = desc.replace(/\bcreate\s+our\s+own\s+/gi, 'create ');
                        desc = desc.replace(/\bmake\s+our\s+own\s+/gi, 'make ');
                        desc = desc.replace(/\bbuild\s+our\s+own\s+/gi, 'build ');
                        description = `Let's ${desc}`;
                    }
                    
                    return `
                        <div class="shared-activity-item">
                            ${activity.image ? `<div class="shared-activity-image"><img src="${activity.image}" alt="${activity.name}" class="shared-activity-img" width="300" height="200" loading="lazy" decoding="async"></div>` : ''}
                            <div class="shared-activity-content">
                                <div class="shared-activity-number">${index + 1}</div>
                                <div class="shared-activity-info">
                                    <h4>${displayName}</h4>
                                    <div class="shared-activity-details">
                                        <span class="shared-location">📍 ${activity.location}</span>
                                    </div>
                                    ${description ? `<p class="shared-activity-description">${description}</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
                    </div>
                </div>
                
                <!-- Date & Time Section -->
                ${dateDisplay || timeDisplay ? `
                <div class="shared-plan-card-section">
                    <h3 class="shared-plan-section-title">Date & Time</h3>
                    <div class="shared-plan-date-time">
                        ${dateDisplay ? `<div class="shared-date-time-item"><span class="date-time-icon">📅</span><span>${dateDisplay}</span></div>` : ''}
                        ${timeDisplay ? `<div class="shared-date-time-item"><span class="date-time-icon">🕐</span><span>${timeDisplay}</span></div>` : ''}
                    </div>
                </div>
                ` : ''}
                
                <!-- Notes Section -->
                ${notesText ? `
                <div class="shared-plan-card-section">
                    <h3 class="shared-plan-section-title">Notes</h3>
                    <div class="shared-notes-content">${notesText}</div>
                </div>
                ` : ''}
                
                <!-- Response Section -->
                <div id="responseSection" class="shared-plan-card-section">
                    <div class="response-header">
                        <h3 class="shared-plan-section-title">Your Response</h3>
                        <div id="responseStatus" class="response-status"></div>
                    </div>
                    <div class="response-body">
                        <p id="responseMessage">How do you feel about this date plan?</p>
                        <div class="response-buttons">
                            <button class="btn-response btn-yes" onclick="submitResponse('yes')">
                                <span>✓</span> Yes
                            </button>
                            <button class="btn-response btn-maybe" onclick="submitResponse('maybe')">
                                <span>?</span> Maybe
                            </button>
                            <button class="btn-response btn-no" onclick="submitResponse('no')">
                                <span>✗</span> No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Replace main content
    main.innerHTML = html;
    
    // Check for response in URL or localStorage
    let savedResponse = responseParam;
    
    if (!savedResponse || (savedResponse !== 'yes' && savedResponse !== 'maybe' && savedResponse !== 'no')) {
        // Check localStorage for saved response
        const shareParam = urlParams.get('share');
        if (shareParam) {
            const responseKey = `datePlanResponse_${shareParam}`;
            const storedResponse = localStorage.getItem(responseKey);
            if (storedResponse && (storedResponse === 'yes' || storedResponse === 'maybe' || storedResponse === 'no')) {
                savedResponse = storedResponse;
            }
        }
    }
    
    // Display response if found, otherwise show buttons
    if (savedResponse && (savedResponse === 'yes' || savedResponse === 'maybe' || savedResponse === 'no')) {
        const nameParam = urlParams.get('name');
        const senderName = nameParam ? decodeURIComponent(nameParam) : '';
        // Update URL to include response for consistency
        if (!responseParam) {
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('response', savedResponse);
            window.history.replaceState({}, '', newUrl);
        }
        displayResponseStatus(savedResponse, senderName);
    } else {
        // Ensure buttons are visible if no valid response
        setTimeout(() => {
            const responseButtons = document.querySelector('.response-buttons');
            if (responseButtons) {
                responseButtons.style.display = 'flex';
            }
        }, 100);
    }
}

function checkForSharedPlan() {
    const urlParams = new URLSearchParams(window.location.search);
    const shareParam = urlParams.get('share');
    const responseParam = urlParams.get('response');
    const notesParam = urlParams.get('notes');
    const nameParam = urlParams.get('name');
    const dateParam = urlParams.get('date');
    const timeParam = urlParams.get('time');
    
    if (shareParam) {
        // Load activities from share parameter
        const activityIds = shareParam.split(',').map(id => parseInt(id));
        selectedActivities = activities.filter(a => activityIds.includes(a.id));
        
        // Hide navigation, hero, activities section, and sidebar
        document.querySelector('header nav').style.display = 'none';
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('.grid-container').style.display = 'none';
        document.querySelector('.activities-section').style.display = 'none';
        
        // Decode name, notes, date, and time if they exist
        const decodedName = nameParam ? decodeURIComponent(nameParam) : '';
        const decodedNotes = notesParam ? decodeURIComponent(notesParam) : '';
        const decodedDate = dateParam ? decodeURIComponent(dateParam) : '';
        const decodedTime = timeParam ? decodeURIComponent(timeParam) : '';
        
        // Render the simplified shared plan view (includes response section)
        renderSharedPlan(decodedNotes, decodedName, decodedDate, decodedTime);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target == modal) {
        closeShareModal();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.getElementById('hamburgerMenu');
    
    if (nav && hamburger) {
        nav.classList.toggle('mobile-open');
        hamburger.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    nav.classList.remove('mobile-open');
                    const hamburger = document.getElementById('hamburgerMenu');
                    if (hamburger) {
                        hamburger.classList.remove('active');
                    }
                }
            });
        });
    }
});

// Skipping Town dropdown toggle
function toggleSkipTownDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('skipTownDropdown').parentElement;
    dropdown.classList.toggle('active');
}

// Cinema dropdown toggle
function toggleCinemaDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('cinemaDropdown').parentElement;
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    
    navDropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Simple client-side analytics
function trackEvent(eventName, payload) {
    try {
        const entry = { event: eventName, payload: payload || {}, ts: Date.now() };
        const key = 'analyticsEvents';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(entry);
        // Keep last 500 events to bound storage
        while (existing.length > 500) existing.shift();
        localStorage.setItem(key, JSON.stringify(existing));
        if (window.console && console.debug) console.debug('[analytics]', entry);
    } catch (e) {
        // no-op
    }
}

function incrementCounter(counterKey) {
    try {
        const counters = JSON.parse(localStorage.getItem('analyticsCounters') || '{}');
        counters[counterKey] = (counters[counterKey] || 0) + 1;
        localStorage.setItem('analyticsCounters', JSON.stringify(counters));
    } catch (e) {
        // no-op
    }
}

// Redirect overlay message
function showRedirect(message, redirectUrl) {
    let overlay = document.getElementById('redirectOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'redirectOverlay';
        overlay.className = 'redirect-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-live', 'polite');
        
        const messageBox = document.createElement('div');
        messageBox.className = 'redirect-overlay-message';
        overlay.appendChild(messageBox);
        
        document.body.appendChild(overlay);
    }
    
    const messageBox = overlay.querySelector('.redirect-overlay-message');
    messageBox.textContent = message;
    
    // Force reflow to restart animation when shown repeatedly
    // eslint-disable-next-line no-unused-expressions
    void overlay.offsetWidth;
    overlay.classList.add('show');
    
    // Clear any existing timeout
    clearTimeout(showRedirect._t);
    
    // Redirect after showing message (1500ms gives time to read)
    showRedirect._t = setTimeout(() => {
        overlay.classList.remove('show');
        // Small delay before redirect to allow fade-out
        setTimeout(() => {
            if (redirectUrl) {
                const win = window.open(redirectUrl, '_blank', 'noopener');
                if (!win) {
                    trackEvent('external_click_failed', { reason: 'popup_blocked', url: redirectUrl });
                }
            }
        }, 300);
    }, 1500);
}

// Intercept external links for messaging
function setupExternalRedirectMessaging() {
    document.addEventListener('click', function(event) {
        const anchor = event.target && event.target.closest && event.target.closest('a[href]');
        if (!anchor) return;
        const href = anchor.getAttribute('href') || '';
        if (href.includes('thelist.restaurant')) {
            event.preventDefault();
            trackEvent('external_click', { label: 'thelist', url: anchor.href });
            showRedirect("We're redirecting you to The List's official website...", anchor.href);
        } else if (href.includes('tigoni.life')) {
            event.preventDefault();
            trackEvent('external_click', { label: 'tigoni', url: anchor.href });
            showRedirect("We're redirecting you to Tigoni Life's official website...", anchor.href);
        }
    }, true);
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install button if it exists
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.style.display = 'block';
    }
});

// Handle install button click
function handleInstallClick() {
    if (!deferredPrompt) {
        return;
    }
    
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
        
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Clear stale food-related search params if user returns after redirect
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('q');
    if (searchParam) {
        const foodKeywords = ['food', 'restaurant', 'restaurants', 'dining', 'eat', 'dinner', 'lunch', 'breakfast', 'cafe', 'café'];
        const searchTerm = searchParam.toLowerCase().trim();
        if (foodKeywords.some(keyword => searchTerm.includes(keyword))) {
            // Clear the stale search param and reset search input
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('q');
            window.history.replaceState({}, '', currentUrl);
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
        }
    }
    
    renderActivities();
    setupExternalRedirectMessaging();
    setupActivityViewAnalytics();
    setupActivityClickAnalytics();
    setupCategoryArrowAnalytics();
    
    // Setup install button if it exists
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.addEventListener('click', handleInstallClick);
        // Hide button initially (will show when beforeinstallprompt fires)
        installBtn.style.display = 'none';
    }
    
    // Handle header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    function handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    // Enable transitions after initial state is set to prevent flash
    setTimeout(() => {
        header.classList.add('loaded');
    }, 10);
});

// Description overlay functions
function showDescription(element) {
    const overlay = element.querySelector('.activity-card-description-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }
}

function hideDescription(element) {
    const overlay = element.querySelector('.activity-card-description-overlay');
    if (overlay && !overlay.classList.contains('pinned')) {
        overlay.classList.remove('visible');
    }
}

function toggleDescription(element) {
    // element can be the button or the image container (for backward compatibility)
    const button = element.classList.contains('description-toggle-btn') ? element : element.querySelector('.description-toggle-btn');
    const imageContainer = element.classList.contains('activity-card-image') ? element : element.closest('.activity-card-image');
    
    if (!imageContainer) return;
    
    const overlay = imageContainer.querySelector('.activity-card-description-overlay');
    if (!overlay) return;
    
    const isExpanded = overlay.classList.contains('pinned') || overlay.classList.contains('visible');
    
    // Toggle the overlay
        overlay.classList.toggle('pinned');
        overlay.classList.toggle('visible');
    
    // Update ARIA attributes
    if (button) {
        button.setAttribute('aria-expanded', (!isExpanded).toString());
        const srText = button.querySelector('.visually-hidden');
        if (srText) {
            srText.textContent = !isExpanded ? 'Hide description' : 'Show description';
        }
    }
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    trackEvent('search_submit', { query: searchInput.value.trim(), queryLc: searchTerm });
    
    // Do not show results for single-letter queries
    if (searchTerm.length > 0 && searchTerm.length < 2) {
        return;
    }
    
    if (!searchTerm) {
        // If empty, show all activities
        activeFilters.search = '';
        renderActivities();
        return;
    }
    
    // Check for food/restaurant searches - redirect to restaurant link
    const foodKeywords = ['food', 'restaurant', 'restaurants', 'dining', 'eat', 'dinner', 'lunch', 'breakfast', 'cafe', 'café'];
    if (foodKeywords.some(keyword => searchTerm.includes(keyword))) {
        // Clear search param before redirect to prevent stale search on return
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete('q');
        window.history.replaceState({}, '', currentUrl);
        
        // Clear search input
        searchInput.value = '';
        
        trackEvent('search_redirect_external', { provider: 'thelist', query: searchTerm });
        showRedirect("We're redirecting you to The List's official website...", 'https://www.thelist.restaurant/categories');
        return;
    }
    
    // Set search filter
    activeFilters.search = searchTerm;
    
    // Scroll to activities section
    document.querySelector('.activities-section').scrollIntoView({ behavior: 'smooth' });
    
    // Re-render activities with search filter
    renderActivities();
}


function openMoreFilters() {
    const overlay = document.getElementById('moreFiltersOverlay');
    const btn = document.querySelector('.pill-more');
    
    if (!overlay) return;
    
    // Store the element that triggered the modal
    previousActiveElement = document.activeElement;
    
    // Show overlay
    overlay.style.display = 'flex';
    
    if (btn) {
        btn.setAttribute('aria-expanded', 'true');
    }
    
    // Trap focus inside modal
    const modal = overlay.querySelector('.more-filters-modal');
    if (modal) {
        trapFocus(modal);
    }
}

function closeMoreFilters() {
    const overlay = document.getElementById('moreFiltersOverlay');
    const btn = document.querySelector('.pill-more');
    
    if (!overlay) return;
    
    // Hide overlay
    overlay.style.display = 'none';
    
    if (btn) {
        btn.setAttribute('aria-expanded', 'false');
    }
    
    // Release focus trap
    releaseFocusTrap();
    
    // Restore focus to the element that opened the modal
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        setTimeout(() => {
            previousActiveElement.focus();
        }, 0);
    }
    previousActiveElement = null;
}

function clearExploreFilters() {
    activeFilters.day = 'all';
    activeFilters.time = 'all';
    activeFilters.tokens = new Set();
    activeFilters.nearMe = false;
    activeFilters.userLocation = null;
    activeFilters.search = '';
    sessionStorage.removeItem('userLocation');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    updateExploreUI();
    renderActivities();
}

function updateExploreUI() {
    // Pills active state
    document.querySelectorAll('.explore-pills .pill').forEach(p => {
        const key = p.getAttribute('data-filter');
        p.classList.remove('pill-active');
        p.setAttribute('aria-pressed', 'false');
        if (key === 'all') {
            if (activeFilters.day === 'all' && (!activeFilters.tokens || activeFilters.tokens.size === 0) && !activeFilters.nearMe) {
                p.classList.add('pill-active');
                p.setAttribute('aria-pressed', 'true');
            }
        } else if (key === 'weekday' && activeFilters.day === 'weekday') {
            p.classList.add('pill-active');
            p.setAttribute('aria-pressed', 'true');
        } else if (key === 'weekend' && activeFilters.day === 'weekend') {
            p.classList.add('pill-active');
            p.setAttribute('aria-pressed', 'true');
        } else if (activeFilters.tokens && activeFilters.tokens.has(key)) {
            p.classList.add('pill-active');
            p.setAttribute('aria-pressed', 'true');
        } else if (key === 'nearme' && activeFilters.nearMe) {
            p.classList.add('pill-active');
            p.setAttribute('aria-pressed', 'true');
        }
    });
    // Clear button visibility
    const clearBtn = document.getElementById('pillClearBtn');
    if (clearBtn) {
        const hasFilters = activeFilters.day !== 'all' || (activeFilters.tokens && activeFilters.tokens.size > 0) || activeFilters.nearMe || (activeFilters.search && activeFilters.search.length > 0) || (activeFilters.locationScope && activeFilters.locationScope !== 'all');
        clearBtn.style.display = hasFilters ? '' : 'none';
    }

    // Sync location scope checkboxes
    const withinChk = document.getElementById('withinNairobiChk');
    const outsideChk = document.getElementById('outsideNairobiChk');
    if (withinChk && outsideChk) {
        withinChk.checked = activeFilters.locationScope === 'within';
        outsideChk.checked = activeFilters.locationScope === 'outside';
    }
}

// Pill click handling (delegated)
document.addEventListener('click', function(event) {
    const pill = event.target && event.target.closest && event.target.closest('.pill');
    if (!pill) return;
    const key = pill.getAttribute('data-filter');
    if (!key) return;
    
    if (key === 'all') {
        activeFilters.day = 'all';
        activeFilters.tokens = new Set();
        activeFilters.nearMe = false;
        activeFilters.userLocation = null;
    } else if (key === 'weekday') {
        activeFilters.day = activeFilters.day === 'weekday' ? 'all' : 'weekday';
    } else if (key === 'weekend') {
        activeFilters.day = activeFilters.day === 'weekend' ? 'all' : 'weekend';
    } else if (key === 'nearme') {
        if (activeFilters.nearMe) {
            // Toggle off: clear location sorting
            activeFilters.nearMe = false;
            activeFilters.userLocation = null;
            sessionStorage.removeItem('userLocation');
            setNearMeLoading(false);
        } else {
            // Toggle on: request location
            handleNearMe();
        }
    } else {
        // Toggle token
        const set = activeFilters.tokens || new Set();
        if (set.has(key)) set.delete(key); else set.add(key);
        activeFilters.tokens = set;
    }
    updateExploreUI();
    renderActivities();
}, true);

// Set loading state on Near Me pill
function setNearMeLoading(isLoading) {
    const pill = document.querySelector('.explore-pills .pill[data-filter="nearme"]');
    if (!pill) return;
    if (isLoading) {
        if (!pill.dataset.label) pill.dataset.label = pill.textContent.trim();
        pill.classList.add('pill-loading');
        pill.setAttribute('aria-busy', 'true');
        pill.setAttribute('disabled', 'true');
        pill.textContent = 'Locating…';
    } else {
        pill.classList.remove('pill-loading');
        pill.removeAttribute('aria-busy');
        pill.removeAttribute('disabled');
        if (pill.dataset.label) pill.textContent = pill.dataset.label;
    }
}

// Location scope setter (called from More overlay checkboxes)
function setLocationScope(scope, checked) {
    if (!checked) {
        // If unchecked, revert to 'all' if currently set to this scope
        if (activeFilters.locationScope === scope) {
            activeFilters.locationScope = 'all';
        }
    } else {
        // Mutually exclusive: only one can be active
        activeFilters.locationScope = scope === 'within' ? 'within' : 'outside';
    }
    updateExploreUI();
    renderActivities();
}

function handleNearMe() {
    // Show loading state
    setNearMeLoading(true);
    // Check if we have stored location in session
    const storedLocation = sessionStorage.getItem('userLocation');
    if (storedLocation) {
        try {
            const locationData = JSON.parse(storedLocation);
            const now = Date.now();
            const cacheMaxAge = 2 * 60 * 1000; // 2 minutes in milliseconds
            
            // Check if location data has timestamp and if it's still valid
            if (locationData.timestamp && (now - locationData.timestamp) < cacheMaxAge) {
                // Use cached location
                activeFilters.userLocation = {
                    latitude: locationData.latitude,
                    longitude: locationData.longitude
                };
                activeFilters.nearMe = true;
                updateExploreUI();
                renderActivities();
                document.querySelector('.activities-section').scrollIntoView({ behavior: 'smooth' });
                setNearMeLoading(false);
                return;
            } else {
                // Location is stale or missing timestamp, clear it and request fresh location
                sessionStorage.removeItem('userLocation');
            }
        } catch (e) {
            // If stored location is invalid, clear it and request again
            sessionStorage.removeItem('userLocation');
        }
    }
    
    // Check if browser supports geolocation
    if (!navigator.geolocation) {
        showLocationError('Your browser does not support location services.');
        setNearMeLoading(false);
        return;
    }
    
    // Request location permission
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Success callback
            const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: Date.now() // Store timestamp for cache validation
            };
            
            // Store in session storage with timestamp
            sessionStorage.setItem('userLocation', JSON.stringify(userLocation));
            
            // Update filters and render (extract location data without timestamp)
            activeFilters.userLocation = {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
            };
            activeFilters.nearMe = true;
            updateExploreUI();
            renderActivities();
            
    // Scroll to activities section
    document.querySelector('.activities-section').scrollIntoView({ behavior: 'smooth' });
            setNearMeLoading(false);
        },
        function(error) {
            // Error callback
            let errorMessage = "Couldn't access your location. Try enabling location permissions or search manually.";
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location access denied. Please enable location permissions in your browser settings to use 'Near Me'.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information unavailable. Please try again later.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out. Please try again.";
                    break;
            }
            
            showLocationError(errorMessage);
            activeFilters.nearMe = false;
            activeFilters.userLocation = null;
            updateExploreUI();
            setNearMeLoading(false);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000 // Cache location for 5 minutes
        }
    );
}

function showLocationError(message) {
    // Create or update a toast/notification element
    let toast = document.getElementById('locationErrorToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'locationErrorToast';
        toast.setAttribute('role', 'alert');
        toast.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #ef4444; color: white; padding: 12px 40px 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10001; max-width: 90%; text-align: left; font-size: 14px; line-height: 1.4;';

        // Dismiss button
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.setAttribute('aria-label', 'Dismiss');
        closeBtn.textContent = '×';
        closeBtn.style.cssText = 'position: absolute; top: 6px; right: 10px; background: transparent; border: none; color: #fff; font-size: 18px; line-height: 1; cursor: pointer; padding: 4px;';
        closeBtn.addEventListener('click', () => {
            toast.style.display = 'none';
            if (showLocationError._timer) {
                clearTimeout(showLocationError._timer);
                showLocationError._timer = null;
            }
        });

        toast.appendChild(closeBtn);
        document.body.appendChild(toast);
    }

    // Set or update message (preserve close button)
    // If toast has only the close button, append text; else update firstChild nodeValue
    const existingTextNode = Array.from(toast.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    if (existingTextNode) {
        existingTextNode.nodeValue = message + ' ';
    } else {
        toast.insertBefore(document.createTextNode(message + ' '), toast.firstChild);
    }

    toast.style.display = 'block';

    // Persist longer (10s) before auto-hide
    if (showLocationError._timer) clearTimeout(showLocationError._timer);
    showLocationError._timer = setTimeout(() => {
        toast.style.display = 'none';
        showLocationError._timer = null;
    }, 10000);
}

// Set up activity view tracking via IntersectionObserver
function setupActivityViewAnalytics() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                const card = entry.target;
                const activityId = card.getAttribute('data-activity-id') || card.id || '';
                const title = card.getAttribute('data-title') || (card.querySelector('.activity-card-title') && card.querySelector('.activity-card-title').textContent.trim()) || '';
                if (activityId || title) {
                    trackEvent('activity_view', { id: activityId, title: title });
                    incrementCounter(`activity_view:${activityId || title}`);
                    observer.unobserve(card); // count once per view session
                }
            }
        });
    }, { threshold: [0.5] });

    document.querySelectorAll('.activity-card').forEach(card => observer.observe(card));
}

// Handle activity card action (click or keyboard activation)
function handleActivityCardAction(card, event) {
    // Do nothing on card background click. Only explicit links/buttons inside cards are interactive.
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    return;
}

// Track clicks on activity cards
function setupActivityClickAnalytics() {
    // Handle mouse clicks
    document.addEventListener('click', function(event) {
        const card = event.target && event.target.closest && event.target.closest('.activity-card');
        if (!card) return;
        // Do not treat the entire card as a clickable element.
        // Only native interactive elements (e.g., links, buttons) should act.
        // Therefore, no action here.
        return;
    });
    
    // Handle keyboard activation (Enter and Space keys)
    // Disabled: cards are not activatable via keyboard as a whole
    // document.addEventListener('keydown', ...)
}

// Track category arrow usage
function setupCategoryArrowAnalytics() {
    document.addEventListener('click', function(event) {
        const btn = event.target && event.target.closest && event.target.closest('.category-arrow-btn');
        if (!btn) return;
        const section = btn.closest && btn.closest('.category-section');
        let category = '';
        if (section) {
            category = section.getAttribute('data-category') || '';
            if (!category) {
                const titleEl = section.querySelector && section.querySelector('.category-title');
                if (titleEl) category = titleEl.textContent.trim();
            }
        }
        const direction = btn.getAttribute('data-direction') || (btn.classList.contains('next') ? 'next' : btn.classList.contains('prev') ? 'prev' : '');
        trackEvent('category_arrow_click', { category: category, direction: direction });
    });
}

