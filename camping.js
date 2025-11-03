const campingDestinations = [
    {
        id: 1,
        name: "Ragati Conservancy",
        location: "Karatina",
        description: "Experience the beauty of nature at Ragati Conservancy, where you can enjoy fishing in pristine rivers, relax in cozy cabins, and immerse yourself in the serene environment.",
        images: [
            "images/Ragati-Conservancy-Cabin.jpg",
            "images/Ragati-Conservancy-River.jpg"
        ],
        bookingLink: "https://ragati.com",
        latitude: -0.3461758268398377,
        longitude: 37.247560846954414
    },
    {
        id: 2,
        name: "Castle Forest Lodge",
        location: "Mount Kenya",
        description: "Nestled in the heart of Mount Kenya, Castle Forest Lodge offers a unique blend of luxury and wilderness, with stunning views, riverside accommodations, and an array of outdoor activities.",
        images: [
            "images/Castle-Forest-Lodge-Sunny.webp",
            "images/Castle-Forest-Lodge-Cloudy.webp",
            "images/Castle-Forest-Lodge-River.webp"
        ],
        bookingLink: "https://castleforestlodge.com",
        latitude: -0.3785697131691021,
        longitude: 37.31140386654011
    },
    {
        id: 3,
        name: "Star Safari Experience",
        location: "Bunduz Safari & Camp",
        description: "A magical evening under the cosmos at Bunduz Safari & Camp. Guests will have the opportunity to observe distant planets, star clusters, nebulae, and galaxies through powerful telescopes.",
        images: [
            "images/Star-Safari-Experience.webp"
        ],
        schedule: "Evenings (check local schedule)",
        bookingLink: "https://travellingtelescope.co.uk/star-safari-experience/",
        latitude: -1.4799036954111904,
        longitude: 36.66075920702517
    }
];

function renderCampingCards() {
    const grid = document.getElementById('campingGrid');
    
    grid.innerHTML = campingDestinations.map(destination => `
        <div class="camping-card">
            <div class="camping-card-image-container">
                <div class="camping-card-images" id="images-${destination.id}">
                    ${destination.images.map((image, index) => `
                        <img src="${image}" 
                             alt="${destination.name} - Image ${index + 1}" 
                             class="camping-card-image ${index === 0 ? 'active' : ''}"
                             loading="lazy">
                    `).join('')}
                </div>
                <button class="camping-arrow prev" onclick="changeImage(${destination.id}, -1)">‹</button>
                <button class="camping-arrow next" onclick="changeImage(${destination.id}, 1)">›</button>
                <div class="camping-carousel-controls">
                    <span id="image-counter-${destination.id}">1 / ${destination.images.length}</span>
                </div>
                <div class="camping-image-credit">Image source: Google Listings</div>
            </div>
            <div class="camping-card-content">
                <h2 class="camping-card-title">${destination.name}</h2>
                <ul class="camping-card-location">
                    <li>
                        <span class="icon-location-pin"></span>
                        <p>${destination.location}</p>
                    </li>
                </ul>
                <p class="camping-card-description">${destination.description}</p>
                ${destination.bookingLink ? `<div class="camping-card-website"><a href="${destination.bookingLink}" target="_blank" rel="noopener noreferrer"><span class="icon-link"></span> Visit ${destination.name} for bookings</a></div>` : ''}
            </div>
        </div>
    `).join('');
}

let currentImageIndices = {};

function changeImage(destinationId, direction) {
    // Initialize index if not set
    if (!currentImageIndices[destinationId]) {
        currentImageIndices[destinationId] = 0;
    }
    
    const destination = campingDestinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    const images = document.querySelectorAll(`#images-${destinationId} .camping-card-image`);
    const counter = document.getElementById(`image-counter-${destinationId}`);
    
    if (images.length === 0) return;
    
    // Calculate new index
    currentImageIndices[destinationId] += direction;
    
    if (currentImageIndices[destinationId] < 0) {
        currentImageIndices[destinationId] = images.length - 1;
    } else if (currentImageIndices[destinationId] >= images.length) {
        currentImageIndices[destinationId] = 0;
    }
    
    // Update active image
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentImageIndices[destinationId]);
    });
    
    // Update counter
    if (counter) {
        counter.textContent = `${currentImageIndices[destinationId] + 1} / ${images.length}`;
    }
}

// Skip Town dropdown toggle
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderCampingCards();
});

