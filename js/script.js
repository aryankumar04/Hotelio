// ========================================
// Hotelio - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the appropriate page
    if (document.getElementById('hotels-grid')) {
        initHomePage();
    } else if (document.getElementById('hotel-detail')) {
        initDetailPage();
    }
    
    // Initialize navbar scroll effect
    initNavbar();
});

// ========================================
// Navbar Scroll Effect
// ========================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.classList.contains('navbar-detail')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ========================================
// Home Page - Hotel Grid
// ========================================

function initHomePage() {
    const grid = document.getElementById('hotels-grid');
    
    hotels.forEach(hotel => {
        const card = createHotelCard(hotel);
        grid.appendChild(card);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('article');
    card.className = 'hotel-card';
    card.onclick = () => navigateToHotel(hotel.id);
    
    card.innerHTML = `
        <div class="hotel-card-image">
            <img src="${hotel.images[0]}" alt="${hotel.name}" loading="lazy">
            <span class="hotel-badge">${hotel.badge}</span>
            <span class="hotel-rating">${hotel.rating}</span>
        </div>
        <div class="hotel-card-content">
            <h3 class="hotel-card-title">${hotel.name}</h3>
            <p class="hotel-card-location">${hotel.location}</p>
            <div class="hotel-card-footer">
                <div class="hotel-price">
                    ₹${hotel.pricePerNight}<span>/night</span>
                </div>
                <button class="hotel-view-btn">View Details</button>
            </div>
        </div>
    `;
    
    return card;
}

function navigateToHotel(hotelId) {
    window.location.href = `hotel.html?id=${hotelId}`;
}

// ========================================
// Detail Page - Hotel Information
// ========================================

function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = parseInt(urlParams.get('id'));
    
    const hotel = hotels.find(h => h.id === hotelId);
    
    if (!hotel) {
        document.getElementById('hotel-detail').innerHTML = `
            <div style="text-align: center; padding: 60px;">
                <h2>Hotel not found</h2>
                <p>Sorry, we couldn't find the hotel you're looking for.</p>
                <a href="index.html" class="back-link">← Back to Hotels</a>
            </div>
        `;
        return;
    }
    
    // Update page title
    document.title = `${hotel.name} | Luxe Stay`;
    
    // Render hotel details
    renderHotelDetail(hotel);
    
    // Initialize calculator
    initCalculator(hotel.pricePerNight);
    
    // Initialize lightbox
    initLightbox(hotel.images);
    
    // Initialize map
    initMap(hotel);
}

function renderHotelDetail(hotel) {
    const container = document.getElementById('hotel-detail');
    
    container.innerHTML = `
        <!-- Photo Gallery -->
        <div class="hotel-gallery">
            <div class="gallery-main" data-index="0">
                <img src="${hotel.images[0]}" alt="${hotel.name}">
            </div>
            <div class="gallery-thumb" data-index="1">
                <img src="${hotel.images[1]}" alt="${hotel.name}">
            </div>
            <div class="gallery-thumb" data-index="2">
                <img src="${hotel.images[2]}" alt="${hotel.name}">
                <div class="gallery-more">+${hotel.images.length - 3} Photos</div>
            </div>
        </div>
        
        <!-- Hotel Header -->
        <div class="hotel-header">
            <div class="hotel-title-section">
                <h1>${hotel.name}</h1>
                <div class="hotel-meta">
                    <span class="hotel-meta-item">
                        <span class="icon">★</span>
                        ${hotel.rating} Rating
                    </span>
                    <span class="hotel-meta-item">
                        <span class="icon">◇</span>
                        ${hotel.location}
                    </span>
                </div>
            </div>
            <div class="hotel-price-badge">
                <div class="price-label">Starting from</div>
                <div class="price-value">₹${hotel.pricePerNight}<span>/night</span></div>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="hotel-content">
            <div class="hotel-info">
                <h2>About This Hotel</h2>
                <p class="hotel-description">${hotel.description}</p>
                
                <h2>Amenities</h2>
                <div class="amenities-grid">
                    ${hotel.amenities.map(amenity => `
                        <div class="amenity">
                            <div class="amenity-icon">${amenity.icon}</div>
                            <span>${amenity.name}</span>
                        </div>
                    `).join('')}
                </div>
                
                <h2>Contact Information</h2>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div class="contact-text">
                            <div class="contact-label">Address</div>
                            <div class="contact-value">${hotel.address}</div>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div class="contact-text">
                            <div class="contact-label">Phone</div>
                            <div class="contact-value">${hotel.phone}</div>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🌍</div>
                        <div class="contact-text">
                            <div class="contact-label">Location</div>
                            <div class="contact-value">${hotel.location}</div>
                        </div>
                    </div>
                </div>
                
                <h2>Location Map</h2>
                <div id="hotel-map" class="hotel-map"></div>
            </div>
            
            <!-- Booking Calculator -->
            <div class="booking-sidebar">
                <div class="calculator-card">
                    <h3>Calculate Your Stay</h3>
                    <form class="calculator-form" id="calculator-form">
                        <div class="form-group">
                            <label for="check-in">Check-in Date</label>
                            <input type="date" id="check-in" required>
                        </div>
                        <div class="form-group">
                            <label for="check-out">Check-out Date</label>
                            <input type="date" id="check-out" required>
                        </div>
                        <div class="form-group">
                            <label for="guests">Number of Guests</label>
                            <select id="guests">
                                <option value="1">1 Guest</option>
                                <option value="2" selected>2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="rooms">Number of Rooms</label>
                            <select id="rooms">
                                <option value="1" selected>1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                            </select>
                        </div>
                    </form>
                    <div class="calculator-result" id="calculator-result">
                        <div class="result-row">
                            <span>Room Rate</span>
                            <span id="room-rate">₹${hotel.pricePerNight} × 0 nights</span>
                        </div>
                        <div class="result-row">
                            <span>Rooms</span>
                            <span id="room-count">× 1 room</span>
                        </div>
                        <div class="result-row">
                            <span>Taxes & Fees (12%)</span>
                            <span id="taxes">₹0</span>
                        </div>
                        <div class="result-row total">
                            <span>Total</span>
                            <span id="total-price">₹0</span>
                        </div>
                    </div>
                    <button type="button" class="book-btn" onclick="handleBooking()">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Lightbox -->
        <div class="lightbox" id="lightbox">
            <div class="lightbox-content">
                <span class="lightbox-close" onclick="closeLightbox()">×</span>
                <span class="lightbox-nav lightbox-prev" onclick="changeLightboxImage(-1)">‹</span>
                <img src="" alt="" id="lightbox-image">
                <span class="lightbox-nav lightbox-next" onclick="changeLightboxImage(1)">›</span>
                <div class="lightbox-counter" id="lightbox-counter">1 / 5</div>
            </div>
        </div>
    `;
    
    // Set minimum dates for date inputs
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('check-in').min = today;
    document.getElementById('check-out').min = today;
}

// ========================================
// Price Calculator
// ========================================

let pricePerNight = 0;

function initCalculator(price) {
    pricePerNight = price;
    
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');
    const rooms = document.getElementById('rooms');
    
    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    checkIn.value = tomorrow.toISOString().split('T')[0];
    checkOut.value = dayAfter.toISOString().split('T')[0];
    
    // Add event listeners
    checkIn.addEventListener('change', () => {
        // Update checkout minimum date
        const checkInDate = new Date(checkIn.value);
        checkInDate.setDate(checkInDate.getDate() + 1);
        checkOut.min = checkInDate.toISOString().split('T')[0];
        
        // If checkout is before new minimum, update it
        if (new Date(checkOut.value) <= new Date(checkIn.value)) {
            checkOut.value = checkInDate.toISOString().split('T')[0];
        }
        
        calculatePrice();
    });
    
    checkOut.addEventListener('change', calculatePrice);
    rooms.addEventListener('change', calculatePrice);
    
    // Initial calculation
    calculatePrice();
}

function calculatePrice() {
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const roomCount = parseInt(document.getElementById('rooms').value);
    
    if (!checkIn || !checkOut) return;
    
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) return;
    
    const roomTotal = pricePerNight * nights;
    const subtotal = roomTotal * roomCount;
    const taxes = subtotal * 0.12;
    const total = subtotal + taxes;
    
    // Update display
    document.getElementById('room-rate').textContent = `₹${pricePerNight} × ${nights} night${nights > 1 ? 's' : ''}`;
    document.getElementById('room-count').textContent = `× ${roomCount} room${roomCount > 1 ? 's' : ''}`;
    document.getElementById('taxes').textContent = `₹${taxes.toFixed(2)}`;
    document.getElementById('total-price').textContent = `₹${total.toFixed(2)}`;
}

function handleBooking() {
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const rooms = document.getElementById('rooms').value;
    
    if (!checkIn || !checkOut) {
        alert('Please select check-in and check-out dates');
        return;
    }
    
    alert(`Booking Request Submitted!\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nRooms: ${rooms}\n\nWe'll contact you shortly to confirm your reservation.`);
}

// ========================================
// Lightbox Gallery
// ========================================

let lightboxImages = [];
let currentImageIndex = 0;

function initLightbox(images) {
    lightboxImages = images;
    
    // Add click handlers to gallery images
    document.querySelectorAll('.gallery-main, .gallery-thumb').forEach(el => {
        el.addEventListener('click', () => {
            const index = parseInt(el.dataset.index);
            openLightbox(index);
        });
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });
    
    // Close on background click
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');
    
    img.src = lightboxImages[index];
    updateLightboxCounter();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = lightboxImages.length - 1;
    } else if (currentImageIndex >= lightboxImages.length) {
        currentImageIndex = 0;
    }
    
    const img = document.getElementById('lightbox-image');
    img.src = lightboxImages[currentImageIndex];
    updateLightboxCounter();
}

function updateLightboxCounter() {
    const counter = document.getElementById('lightbox-counter');
    counter.textContent = `${currentImageIndex + 1} / ${lightboxImages.length}`;
}

// ========================================
// Map Integration
// ========================================

function initMap(hotel) {
    if (!hotel.coordinates) return;
    
    const { lat, lng } = hotel.coordinates;
    
    // Initialize the map
    const map = L.map('hotel-map').setView([lat, lng], 15);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Custom marker icon
    const hotelIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin">📍</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    
    // Add marker
    L.marker([lat, lng], { icon: hotelIcon })
        .addTo(map)
        .bindPopup(`<strong>${hotel.name}</strong><br>${hotel.address}`)
        .openPopup();
}

