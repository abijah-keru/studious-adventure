const activities = [
    // Live Music & Performances
    {
        id: 1,
        name: "Jazz After Dark - Karel T Lounge",
        description: "Enjoy live jazz performances in an intimate lounge setting.",
        location: "Karel T Lounge",
        schedule: "Every other Saturday, from 7 PM",
        category: "Live Music & Performances",
        tags: ["Jazz", "Live Music", "Nightlife"],
        timeOfDay: "night"
    },
    {
        id: 2,
        name: "Roots & Rhythms - Mamm M Vietnamese Kitchen & Bar",
        description: "Experience live music performances while enjoying Vietnamese cuisine.",
        location: "Mamm M Vietnamese Kitchen & Bar",
        schedule: "Fridays, from 7 PM",
        category: "Live Music & Performances",
        tags: ["Live Music", "Dining", "Entertainment"],
        timeOfDay: "night",
        image: "https://i.ibb.co/Myyn64nQ/Screenshot-20251029-152706-Instagram.png"
    },
    {
        id: 3,
        name: "Live Jazzy Sundays - Bamba Kenya",
        description: "Relax with smooth jazz performances on Sunday evenings.",
        location: "Bamba Kenya",
        schedule: "Every Sunday, from 6 PM",
        category: "Live Music & Performances",
        tags: ["Jazz", "Live Music", "Sunday"],
        timeOfDay: "night",
        image: "https://i.ibb.co/Wpsx6mFT/Screenshot-20251029-152759-Instagram.png"
    },
    {
        id: 4,
        name: "Nairobi Orchestra",
        description: "Classical orchestral performances featuring local and international repertoire.",
        location: "Various Venues",
        schedule: "Performs every two months",
        category: "Orchestras & Musicals",
        tags: ["Classical", "Orchestra", "Live Music"]
    },
    {
        id: 5,
        name: "Pulchra Musica",
        description: "Classical music shows featuring talented local musicians.",
        location: "Various Venues",
        schedule: "Shows every other month",
        category: "Orchestras & Musicals",
        tags: ["Classical", "Live Music", "Performance"]
    },
    {
        id: 18,
        name: "Saxophone Fridays at Pax Manor",
        description: "When the sax speaks, the night listens. Live sax, golden jazz, and a room that glows. Signature cocktails, gourmet bites, refined company. An intimate evening—soulful, timeless, unforgettable.",
        location: "Pax Manor, Muthaiga",
        schedule: "Fridays",
        category: "Live Music & Performances",
        tags: ["Saxophone", "Live Music", "Friday", "Nightlife"],
        timeOfDay: "night"
    },
    // Stand Up Comedy
    {
        id: 6,
        name: "Punchline Comedy Club Nairobi - Two Grapes",
        description: "Laugh out loud with Nairobi's funniest comedians in a relaxed atmosphere.",
        location: "Two Grapes",
        schedule: "Wednesdays, 7 PM (Free)",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Free", "Entertainment"],
        timeOfDay: "night"
    },
    {
        id: 7,
        name: "Punchline Comedy Club Nairobi - Beer District",
        description: "Comedy night featuring top local comedians in a vibrant venue.",
        location: "Beer District",
        schedule: "Thursdays, 7 PM (Free)",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Free", "Entertainment"],
        timeOfDay: "night"
    },
    {
        id: 8,
        name: "Nairobi Laugh Bar",
        description: "Regular comedy shows with a mix of established and upcoming comedians.",
        location: "Inside Levels Hotel",
        schedule: "Wednesdays–Saturdays, 7 PM",
        category: "Stand Up Comedy",
        tags: ["Comedy", "Entertainment", "Nightlife"],
        timeOfDay: "night"
    },
    {
        id: 9,
        name: "Braeburn Theatres",
        description: "Quality theatrical productions in an intimate theatre setting.",
        location: "Braeburn Theatres",
        schedule: "Shows every other month",
        category: "Stand Up Comedy",
        tags: ["Theatre", "Performance", "Arts"]
    },
    {
        id: 10,
        name: "Kenya National Theatre",
        description: "Premier venue for stage productions, plays, and cultural performances.",
        location: "Kenya National Theatre",
        schedule: "Ongoing stage productions",
        category: "Stand Up Comedy",
        tags: ["Theatre", "Cultural", "Performance"]
    },
    // Workshops & Classes
    {
        id: 11,
        name: "Kuzi Pottery Studio",
        description: "Learn pottery making and create your own ceramic pieces together.",
        location: "Kuzi Pottery Studio",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Pottery", "Hands-on", "Creative"],
        timeOfDay: "day"
    },
    {
        id: 12,
        name: "Enkara Art Gallery",
        description: "Art gallery offering workshops and classes in various artistic techniques.",
        location: "Enkara Art Gallery",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Art", "Gallery", "Creative"],
        timeOfDay: "day"
    },
    {
        id: 13,
        name: "Tope Pottery",
        description: "Hands-on pottery classes where you can create beautiful ceramic art together.",
        location: "Tope Pottery",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Pottery", "Hands-on", "Creative"],
        timeOfDay: "day"
    },
    {
        id: 14,
        name: "Nairobi Art Centre",
        description: "Arts center offering various workshops and classes in painting, drawing, and more.",
        location: "Nairobi Art Centre",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Art", "Workshop", "Creative"],
        timeOfDay: "day"
    },
    {
        id: 19,
        name: "Roast & Brew Coffee Class - Coffee Lab Nairobi",
        description: "Learn the art of coffee roasting and brewing in a hands-on workshop experience.",
        location: "Coffee Lab Nairobi",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Coffee", "Workshop", "Hands-on", "Learning"],
        timeOfDay: "day"
    },
    {
        id: 21,
        name: "Kitengela Glass",
        description: "Experience glass blowing from start to finish, create beautiful beads, or learn mosaic techniques in hands-on workshops.",
        location: "Kitengela Glass",
        schedule: "Check website for class schedules",
        category: "Workshops & Classes",
        tags: ["Glass Blowing", "Bead Making", "Mosaic", "Hands-on", "Creative"],
        timeOfDay: "day"
    },
    // Outdoor & Adventure
    {
        id: 15,
        name: "The Forest",
        description: "Adventure activities including ziplining, archery, and paintball for an exciting date.",
        location: "The Forest",
        schedule: "Open daily",
        category: "Outdoor & Adventure",
        tags: ["Adventure", "Outdoor", "Active"],
        timeOfDay: "day"
    },
    {
        id: 16,
        name: "Ammodump Kwenia",
        description: "Shooting range and adventure activities for an unique and thrilling experience.",
        location: "Ammodump Kwenia",
        schedule: "Check website for hours",
        category: "Outdoor & Adventure",
        tags: ["Adventure", "Outdoor", "Unique"],
        timeOfDay: "day"
    },
    {
        id: 20,
        name: "Cinema in Nature - Karura Forest",
        description: "Experience cinema in a natural setting with an immersive outdoor movie experience in Karura Forest.",
        location: "Karura Forest",
        schedule: "Check website for screening schedules",
        category: "Outdoor & Adventure",
        tags: ["Cinema", "Outdoor", "Nature", "Storytelling Experience", "Immersive Walk"],
        timeOfDay: "night"
    },
    {
        id: 22,
        name: "Kiambethu Tea Farm Tour",
        description: "Explore a working tea farm, learn about tea cultivation, and enjoy a traditional Kenyan tea experience.",
        location: "Kiambethu Tea Farm",
        schedule: "Check website for tour schedules",
        category: "Outdoor & Adventure",
        tags: ["Tea", "Farm", "Tours", "Educational", "Outdoor"],
        timeOfDay: "day"
    },
    // Clubs & Communities
    {
        id: 17,
        name: "We Run Nairobi",
        description: "Join a running social club for community runs and meetups around the city.",
        location: "Various locations around Nairobi",
        schedule: "Check social media for run schedules",
        category: "Clubs & Communities",
        tags: ["Running", "Community", "Active", "Social"]
    }
];

let selectedActivities = [];
let activeFilters = {
    day: 'all', // 'all' = all days, 'weekday', 'weekend'
    time: 'all' // 'all', 'day', 'night'
};

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
    
    return true;
}

function renderActivities() {
    const container = document.getElementById('categoriesContainer');
    
    // Filter activities first
    const filteredActivities = activities.filter(matchesFilters);
    
    // Group activities by category
    const categories = {};
    filteredActivities.forEach(activity => {
        if (!categories[activity.category]) {
            categories[activity.category] = [];
        }
        categories[activity.category].push(activity);
    });
    
    // Render by category with dropdowns
    let html = '';
    const categoryNames = Object.keys(categories);
    if (categoryNames.length === 0) {
        html = '<div class="no-results"><p>No activities match your selected filters. Try adjusting your filters!</p></div>';
    } else {
        categoryNames.forEach((category, index) => {
            const categoryId = `category-${index}`;
            const isOpen = index === 0; // First category open by default
            html += `
                <div class="category-dropdown">
                    <button class="category-dropdown-header" onclick="toggleCategory('${categoryId}')">
                        <span class="category-icon">${getCategoryIcon(category)}</span>
                        <span class="category-name">${category}</span>
                        <span class="dropdown-arrow" id="arrow-${categoryId}">▼</span>
                    </button>
                    <div class="category-content ${isOpen ? 'open' : ''}" id="${categoryId}">
                        <div class="activities-in-category">
                            ${categories[category].map(activity => `
                            <div class="activity-card ${selectedActivities.some(a => a.id === activity.id) ? 'selected' : ''}" 
                                 onclick="toggleActivity(${activity.id}); event.stopPropagation();">
                                <div class="activity-card-image">
                                    ${activity.image ? `<img src="${activity.image}" alt="${activity.name}" class="activity-card-img" loading="lazy" decoding="async">` : ''}
                                    <div class="activity-card-overlay"></div>
                                    <div class="activity-card-checkbox">
                                        ${selectedActivities.some(a => a.id === activity.id) ? '✓' : '+'}
                                    </div>
                                    <div class="activity-card-title">${activity.name}</div>
                                </div>
                                <div class="activity-card-content">
                                    <p class="activity-card-description">${activity.description}</p>
                                    <div class="activity-card-meta">
                                        <span>📍 ${activity.location}</span>
                                        ${activity.schedule ? `<span>⏰ ${activity.schedule}</span>` : ''}
                                        ${activity.timeOfDay === 'day' ? '<span class="time-indicator time-day">☀️ Day</span>' : ''}
                                        ${activity.timeOfDay === 'night' ? '<span class="time-indicator time-night">⭐ Night</span>' : ''}
                                    </div>
                                    <div class="activity-card-tags">
                                        ${activity.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        });
    }
    
    container.innerHTML = html;
}

function handleFilterClick(event) {
    const button = event.target;
    const filterType = button.getAttribute('data-filter');
    const filterValue = button.getAttribute('data-type');
    
    // Update active filter
    if (filterType === 'day') {
        activeFilters.day = filterValue;
    } else if (filterType === 'time') {
        activeFilters.time = filterValue;
    }
    
    // Update button states
    const filterButtons = document.querySelectorAll(`[data-filter="${filterType}"]`);
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Re-render activities
    renderActivities();
}

function getCategoryIcon(category) {
    const icons = {
        'Live Music & Performances': '🎷',
        'Orchestras & Musicals': '🎼',
        'Stand Up Comedy': '🎭',
        'Workshops & Classes': '🖌️',
        'Outdoor & Adventure': '🏞️',
        'Clubs & Communities': '🤝',
        'Eat & Drink': '🍴'
    };
    return icons[category] || '📍';
}

function toggleCategory(categoryId) {
    const content = document.getElementById(categoryId);
    const arrow = document.getElementById(`arrow-${categoryId}`);
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        arrow.textContent = '▶';
    } else {
        content.classList.add('open');
        arrow.textContent = '▼';
    }
}

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
                    ${activity.timeOfDay === 'day' ? '<span class="time-indicator time-day">☀️ Day</span>' : ''}
                    ${activity.timeOfDay === 'night' ? '<span class="time-indicator time-night">⭐ Night</span>' : ''}
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

function scrollToItinerary() {
    document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth' });
}

// Sharing functionality
function shareDatePlan() {
    if (selectedActivities.length === 0) {
        alert('Please select at least one activity before sharing!');
        return;
    }
    
    // Create shareable link with selected activity IDs
    const activityIds = selectedActivities.map(a => a.id).join(',');
    const notesTextarea = document.getElementById('datePlanNotes');
    const notes = notesTextarea ? notesTextarea.value.trim() : '';
    const nameInput = document.getElementById('senderName');
    const senderName = nameInput ? nameInput.value.trim() : '';
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker ? datePicker.value : '';
    const timePicker = document.getElementById('timePicker');
    const selectedTime = timePicker ? timePicker.value : '';
    
    let shareUrl = `${window.location.origin}${window.location.pathname}?share=${activityIds}`;
    
    // Add name to URL if provided
    if (senderName) {
        shareUrl += `&name=${encodeURIComponent(senderName)}`;
    }
    
    // Add date to URL if provided
    if (selectedDate) {
        shareUrl += `&date=${encodeURIComponent(selectedDate)}`;
    }
    
    // Add time to URL if provided
    if (selectedTime) {
        shareUrl += `&time=${encodeURIComponent(selectedTime)}`;
    }
    
    // Add notes to URL if they exist
    if (notes) {
        shareUrl += `&notes=${encodeURIComponent(notes)}`;
    }
    
    document.getElementById('shareLink').value = shareUrl;
    document.getElementById('shareModal').style.display = 'flex';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function copyShareLink(event) {
    const shareInput = document.getElementById('shareLink');
    shareInput.select();
    shareInput.setSelectionRange(0, 99999); // For mobile devices
    
    const copyBtn = event ? event.target : document.querySelector('.btn-copy');
    const originalText = copyBtn.textContent;
    
    try {
        document.execCommand('copy');
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#10b981';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '#9333ea';
        }, 2000);
    } catch (err) {
        // Fallback for modern browsers
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareInput.value).then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '#9333ea';
                }, 2000);
            });
        }
    }
}

// Response functionality
function submitResponse(response) {
    const urlParams = new URLSearchParams(window.location.search);
    const shareParam = urlParams.get('share');
    
    if (!shareParam) return;
    
    // Get sender's name from URL
    const senderName = urlParams.get('name') ? decodeURIComponent(urlParams.get('name')) : '';
    
    // Store response in localStorage with share ID
    const responseKey = `datePlanResponse_${shareParam}`;
    localStorage.setItem(responseKey, response);
    
    // Update URL to include response
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('response', response);
    window.history.replaceState({}, '', newUrl);
    
    // Update UI to show response
    displayResponseStatus(response, senderName);
}

function suggestAnotherDate() {
    // Clear everything and redirect to landing page to create a new plan
    selectedActivities = [];
    if (document.getElementById('datePlanNotes')) {
        document.getElementById('datePlanNotes').value = '';
    }
    if (document.getElementById('senderName')) {
        document.getElementById('senderName').value = '';
    }
    if (document.getElementById('datePicker')) {
        document.getElementById('datePicker').value = '';
    }
    if (document.getElementById('timePicker')) {
        document.getElementById('timePicker').value = '';
    }
    // Redirect to the landing page (remove all URL parameters)
    window.location.href = window.location.origin + window.location.pathname;
}

function displayResponseStatus(response, senderName) {
    const responseSection = document.getElementById('responseSection');
    if (!responseSection) return;
    
    const responseStatus = document.getElementById('responseStatus');
    const responseMessage = document.getElementById('responseMessage');
    const responseButtons = document.querySelector('.response-buttons');
    
    if (!responseStatus || !responseMessage || !responseButtons) return;
    
    // Remove any existing status classes
    responseStatus.className = 'response-status';
    
    // Only process valid responses
    const senderDisplay = senderName || 'The person who shared this plan';
    
    if (response === 'yes') {
        responseStatus.textContent = '✓ Yes';
        responseStatus.classList.add('yes');
        responseMessage.textContent = `You said YES to this date plan! 🎉 ${senderDisplay} will be notified of your response.`;
        responseButtons.style.display = 'none';
    } else if (response === 'maybe') {
        responseStatus.textContent = '? Maybe';
        responseStatus.classList.add('maybe');
        responseMessage.textContent = `You responded with MAYBE. ${senderDisplay} will be notified of your response. 💭`;
        responseButtons.style.display = 'none';
    } else if (response === 'no') {
        responseStatus.textContent = '✗ No';
        responseStatus.classList.add('no');
        responseMessage.textContent = `You said NO. That's okay! ${senderDisplay} will be notified of your response. 💔`;
        responseButtons.style.display = 'none';
    } else {
        // Invalid or no response - ensure buttons are visible
        if (responseButtons) {
            responseButtons.style.display = 'flex';
        }
        if (responseStatus) {
            responseStatus.textContent = '';
            responseStatus.className = 'response-status';
        }
    }
}

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
                            ${activity.image ? `<div class="shared-activity-image"><img src="${activity.image}" alt="${activity.name}" class="shared-activity-img"></div>` : ''}
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clearBtn').addEventListener('click', clearSelection);
    
    // Set up filter button listeners
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Initialize date picker - set min date to today
    const datePicker = document.getElementById('datePicker');
    if (datePicker) {
        const today = new Date().toISOString().split('T')[0];
        datePicker.setAttribute('min', today);
        
        // Make entire input clickable to open date picker
        datePicker.addEventListener('click', function(e) {
            // Ensure the picker opens when clicking anywhere in the input
            if (this.showPicker) {
                this.showPicker();
            } else {
                // Fallback for browsers without showPicker()
                this.focus();
                this.click();
            }
        });
    }
    
    // Initialize time picker - make entire input clickable
    const timePicker = document.getElementById('timePicker');
    if (timePicker) {
        // Make entire input clickable to open time picker
        timePicker.addEventListener('click', function(e) {
            // Ensure the picker opens when clicking anywhere in the input
            if (this.showPicker) {
                this.showPicker();
            } else {
                // Fallback for browsers without showPicker()
                this.focus();
                this.click();
            }
        });
    }
    
    renderActivities();
    checkForSharedPlan();
});
