// Main JavaScript for Pet Resort WANCO

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initLoading();
    initHeader();
    initHeroSlider();
    initGallery();
    initVoiceSlider();
    initModal();
    initSmoothScroll();
});

// Loading Screen
function initLoading() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.classList.add('loaded');
                setTimeout(function() {
                    loading.style.display = 'none';
                }, 600);
            }
        }, 1000);
    });
}

// Header Scroll Effect
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}

// Hero Slider
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;

    new Swiper(heroSlider, {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Facility Gallery
function initGallery() {
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const images = document.querySelectorAll('.gallery-image');
    const infos = document.querySelectorAll('.room-info');

    if (thumbs.length === 0 || images.length === 0) return;

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const targetRoom = this.getAttribute('data-room');
            
            // Update active states
            thumbs.forEach(t => t.classList.remove('active'));
            images.forEach(i => i.classList.remove('active'));
            infos.forEach(i => i.classList.remove('active'));
            
            this.classList.add('active');
            
            // Show corresponding image and info
            const targetImage = document.querySelector(`.gallery-image[data-room="${targetRoom}"]`);
            const targetInfo = document.querySelector(`.room-info[data-room="${targetRoom}"]`);
            
            if (targetImage) targetImage.classList.add('active');
            if (targetInfo) targetInfo.classList.add('active');
        });
    });
}

// Voice Slider
function initVoiceSlider() {
    const voiceSlider = document.querySelector('.voice-slider');
    if (!voiceSlider) return;

    new Swiper(voiceSlider, {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Modal
function initModal() {
    const modal = document.getElementById('priceSimulator');
    const openBtn = document.getElementById('openSimulator');
    const closeBtn = document.querySelector('.modal-close');
    
    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Price Calculator
    const serviceSelect = document.getElementById('sim-service');
    const durationGroup = document.getElementById('sim-duration-group');
    const daycareGroup = document.getElementById('sim-daycare-group');

    if (serviceSelect && durationGroup && daycareGroup) {
        serviceSelect.addEventListener('change', function() {
            if (this.value === 'stay') {
                durationGroup.style.display = 'block';
                daycareGroup.style.display = 'none';
            } else {
                durationGroup.style.display = 'none';
                daycareGroup.style.display = 'block';
            }
            calculatePrice();
        });

        // Add event listeners for all form elements
        const formElements = modal.querySelectorAll('select, input');
        formElements.forEach(element => {
            element.addEventListener('change', calculatePrice);
        });

        calculatePrice(); // Initial calculation
    }
}

// Price Calculation
function calculatePrice() {
    const service = document.getElementById('sim-service').value;
    const pet = document.getElementById('sim-pet').value;
    const room = document.getElementById('sim-room').value;
    const duration = parseInt(document.getElementById('sim-duration').value) || 1;
    const daycareType = document.getElementById('sim-daycare-type').value;
    const options = document.querySelectorAll('input[name="options"]:checked');

    let basePrice = 0;

    // Base prices
    const prices = {
        stay: {
            'dog-small': { standard: 5000, suite: 8000 },
            'dog-medium': { standard: 7000, suite: 10000 },
            'dog-large': { standard: 9000, suite: 12000 },
            'cat': { standard: 4000, suite: 6000 }
        },
        daycare: {
            'dog-small': { half: 2500, full: 4000 },
            'dog-medium': { half: 3500, full: 5500 },
            'dog-large': { half: 4500, full: 7000 },
            'cat': { half: 2000, full: 3500 }
        }
    };

    // Calculate base price
    if (service === 'stay' && prices.stay[pet]) {
        basePrice = prices.stay[pet][room] * duration;
    } else if (service === 'daycare' && prices.daycare[pet]) {
        basePrice = prices.daycare[pet][daycareType];
    }

    // Add options
    let optionsPrice = 0;
    options.forEach(option => {
        if (option.value === 'trimming') optionsPrice += 3000;
        if (option.value === 'transport') optionsPrice += 2000;
    });

    const totalPrice = basePrice + optionsPrice;
    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString();
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}