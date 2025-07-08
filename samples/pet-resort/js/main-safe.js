// Main JavaScript File - Safe Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules with safety checks
    initializeHeader();
    initializeHeroSlider();
    initializeFacilityGallery();
    initializeVoiceSlider();
    initializeModal();
    initializeSmoothScroll();
    initializeLoading();
});

// Loading Screen
function initializeLoading() {
    // Don't wait for all images to load, just DOM ready
    setTimeout(function() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('loaded');
            
            // Remove from DOM after animation
            setTimeout(function() {
                loading.style.display = 'none';
                // Force scroll to top to ensure proper initialization
                window.scrollTo(0, 0);
            }, 600);
        }
    }, 1500); // Show loading for 1.5 seconds minimum
}

// Header Scroll Effect
function initializeHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScrollY = 0;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class when scrolling down
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (!mobileMenuToggle) return;
    
    const mobileMenu = document.createElement('nav');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <ul class="mobile-nav-list">
            <li><a href="#concept">コンセプト</a></li>
            <li><a href="#facility">施設案内</a></li>
            <li><a href="#service">サービス</a></li>
            <li><a href="#price">料金</a></li>
            <li><a href="#access">アクセス</a></li>
            <li><a href="#reservation" class="btn btn-primary">施設見学予約</a></li>
        </ul>
    `;
    header.appendChild(mobileMenu);
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Hero Slider (Swiper)
function initializeHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;
    
    new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1500,
    });
}

// Facility Gallery - Safe Implementation
function initializeFacilityGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    const roomInfos = document.querySelectorAll('.room-info');
    
    // Exit if elements not found
    if (galleryThumbs.length === 0 || galleryImages.length === 0) return;
    
    galleryThumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            const roomType = this.dataset.room;
            if (!roomType) return;
            
            // Update active states
            galleryThumbs.forEach(t => t.classList.remove('active'));
            galleryImages.forEach(img => img.classList.remove('active'));
            roomInfos.forEach(info => info.classList.remove('active'));
            
            // Add active to clicked thumb
            this.classList.add('active');
            
            // Show corresponding image and info
            const targetImage = document.querySelector(`.gallery-image[data-room="${roomType}"]`);
            const targetInfo = document.querySelector(`.room-info[data-room="${roomType}"]`);
            
            if (targetImage) targetImage.classList.add('active');
            if (targetInfo) targetInfo.classList.add('active');
        });
    });
}

// Voice Slider (Swiper)
function initializeVoiceSlider() {
    const voiceSlider = document.querySelector('.voice-slider');
    if (!voiceSlider) return;
    
    new Swiper('.voice-slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 800,
        spaceBetween: 30,
    });
}

// Modal
function initializeModal() {
    const modal = document.getElementById('priceSimulator');
    const openBtn = document.getElementById('openSimulator');
    const closeBtn = document.querySelector('.modal-close');
    
    if (!modal || !openBtn || !closeBtn) return;
    
    openBtn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

// Observe all images with data-src
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});