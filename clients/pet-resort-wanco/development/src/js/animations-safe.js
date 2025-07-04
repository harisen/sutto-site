// GSAP Animations for Rich Plan - Safe Version
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM and GSAP to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP defaults
    gsap.defaults({
        ease: "power2.out",
        duration: 1
    });

    // ScrollTrigger defaults
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse",
        start: "top 80%",
    });

    // Initialize all animations with safety checks
    initHeroAnimations();
    initScrollAnimations();
    initParallaxEffects();
    initHoverAnimations();
});

// Safe animation helper
function animateIfExists(selector, options) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
        gsap.from(elements, options);
    }
}

// Hero Section Animations
function initHeroAnimations() {
    // Hero timeline
    const heroTL = gsap.timeline({
        delay: 2 // Wait for loading screen
    });

    // Hero content animation with safety checks
    if (document.querySelector('.hero-title-main')) {
        heroTL.from('.hero-title-main', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    if (document.querySelector('.hero-title-sub')) {
        heroTL.from('.hero-title-sub', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.8");
    }

    animateIfExists('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 2.4,
        ease: "power2.out"
    });

    animateIfExists('.hero-cta .btn', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 2.8,
        ease: "back.out(1.7)"
    });

    animateIfExists('.hero-scroll', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 3
    });

    // Header animation
    animateIfExists('.header', {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out"
    });
}

// Scroll-triggered Animations
function initScrollAnimations() {
    // Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
        if (header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 30,
                duration: 1,
            });
        }
    });

    // Section Titles with underline
    gsap.utils.toArray('.section-title').forEach(title => {
        if (title) {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8
            });
        }
    });

    // Concept Features
    if (document.querySelector('.concept-features')) {
        gsap.from('.feature-item', {
            scrollTrigger: {
                trigger: '.concept-features',
                start: 'top 75%',
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Service Cards
    if (document.querySelector('.service-grid')) {
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.service-grid',
                start: 'top 70%',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: {
                amount: 0.6,
                from: "start"
            },
            ease: "power3.out"
        });
    }

    // Facility Gallery
    if (document.querySelector('.facility-gallery')) {
        gsap.from('.gallery-main', {
            scrollTrigger: {
                trigger: '.facility-gallery',
                start: 'top 70%',
            },
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from('.gallery-thumbs', {
            scrollTrigger: {
                trigger: '.facility-gallery',
                start: 'top 65%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out"
        });
    }

    // Price Tables
    if (document.querySelector('.price-tables')) {
        gsap.from('.price-table', {
            scrollTrigger: {
                trigger: '.price-tables',
                start: 'top 70%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Voice Cards
    if (document.querySelector('.voice-slider')) {
        gsap.from('.voice-slider', {
            scrollTrigger: {
                trigger: '.voice-slider',
                start: 'top 70%',
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }

    // Form elements
    if (document.querySelector('.reservation-form')) {
        gsap.from('.form-group', {
            scrollTrigger: {
                trigger: '.reservation-form',
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
}

// Parallax Effects
function initParallaxEffects() {
    // Hero parallax
    if (document.querySelector('.hero-slider')) {
        gsap.to('.hero-slider img', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
            y: 100,
            ease: "none"
        });
    }

    // Video slideshow parallax
    if (document.querySelector('.video-slideshow')) {
        gsap.to('.video-slideshow img', {
            scrollTrigger: {
                trigger: '.video-slideshow',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: -50,
            ease: "none"
        });
    }
}

// Hover Animations
function initHoverAnimations() {
    // Service cards hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        if (card) {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -10,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        if (btn) {
            btn.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        }
    });
}

// Refresh ScrollTrigger on resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        ScrollTrigger.refresh();
    }, 250);
});