// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
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
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loading = document.getElementById('loading');
            loading.classList.add('loaded');
            
            // Remove from DOM after animation
            setTimeout(function() {
                loading.style.display = 'none';
            }, 600);
        }, 1000);
    });
}

// Header Scroll Effect
function initializeHeader() {
    const header = document.getElementById('header');
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
    document.body.appendChild(mobileMenu);
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Hero Slider (Swiper)
function initializeHeroSlider() {
    new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1500,
    });
}

// Facility Gallery
function initializeFacilityGallery() {
    const mainImage = document.getElementById('facility-main-image');
    const mainTitle = document.getElementById('facility-main-title');
    const thumbs = document.querySelectorAll('.facility-thumb');
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Update active state
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update main image
            const imageName = this.dataset.image;
            const title = this.dataset.title;
            
            // Fade out
            mainImage.style.opacity = '0';
            mainTitle.style.opacity = '0';
            
            setTimeout(() => {
                mainImage.src = `images/facility/${imageName}`;
                mainTitle.textContent = title;
                
                // Fade in
                mainImage.style.opacity = '1';
                mainTitle.style.opacity = '1';
            }, 300);
        });
    });
    
    // Add transition styles
    mainImage.style.transition = 'opacity 0.3s ease';
    mainTitle.style.transition = 'opacity 0.3s ease';
}

// Voice Slider (Swiper)
function initializeVoiceSlider() {
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

// Modal Functionality
function initializeModal() {
    const modal = document.getElementById('price-modal');
    const openButton = document.getElementById('open-simulator');
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    // Open modal
    openButton.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
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
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});