// GSAP Animations for Rich Plan
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

    // Initialize all animations
    initHeroAnimations();
    initScrollAnimations();
    initParallaxEffects();
    initHoverAnimations();
    initCounterAnimations();
    initTextAnimations();
    initImageRevealAnimations();
});

// Hero Section Animations
function initHeroAnimations() {
    // Hero timeline
    const heroTL = gsap.timeline({
        delay: 1.5 // Wait for loading screen
    });

    // Hero content animation
    heroTL
        .from('.hero-title-main', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        })
        .from('.hero-title-sub', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.8")
        .from('.hero-description span', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.6")
        .from('.hero-actions .btn', {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .from('.hero-scroll', {
            opacity: 0,
            y: -20,
            duration: 0.8
        }, "-=0.2");

    // Header animation
    gsap.from('.header', {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out"
    });
}

// Scroll-triggered Animations
function initScrollAnimations() {
    // Brand Statement
    gsap.from('.brand-statement-text', {
        scrollTrigger: {
            trigger: '.brand-statement',
            start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power3.out"
    });

    // Promise Items
    gsap.from('.promise-item', {
        scrollTrigger: {
            trigger: '.promise-list',
            start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Promise Icons bounce effect
    ScrollTrigger.create({
        trigger: '.promise-list',
        start: 'top 60%',
        onEnter: () => {
            gsap.to('.promise-icon', {
                scale: 1.1,
                duration: 0.3,
                stagger: 0.1,
                ease: "back.out(1.7)",
                yoyo: true,
                repeat: 1
            });
        }
    });

    // Section Titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8
        });

        // Animated underline
        const underline = document.createElement('div');
        underline.style.cssText = `
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background-color: var(--color-gold);
        `;
        title.style.position = 'relative';
        title.appendChild(underline);

        gsap.to(underline, {
            scrollTrigger: {
                trigger: title,
                start: 'top 75%',
            },
            width: '60px',
            duration: 1,
            ease: "power2.out"
        });
    });

    // Service Cards
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

    // Voice Cards
    gsap.from('.voice-card', {
        scrollTrigger: {
            trigger: '.voice-slider',
            start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // CTA Section
    gsap.from('.cta-title', {
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 70%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    });

    gsap.from('.cta .btn', {
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });
}

// Parallax Effects
function initParallaxEffects() {
    // Hero parallax
    gsap.to('.hero-slider img', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Brand statement background
    gsap.to('.brand-statement', {
        backgroundPosition: '50% 100%',
        ease: "none",
        scrollTrigger: {
            trigger: '.brand-statement',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Facility images
    gsap.utils.toArray('.facility-thumb').forEach((thumb, i) => {
        gsap.from(thumb, {
            scrollTrigger: {
                trigger: '.facility-thumbs',
                start: 'top 80%',
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.7)"
        });
    });
}

// Hover Animations
function initHoverAnimations() {
    // Magnetic buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Service card 3D effect
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            gsap.to(card, {
                rotationY: (x - 0.5) * 10,
                rotationX: (y - 0.5) * -10,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Image zoom effect
    document.querySelectorAll('.service-card-image img').forEach(img => {
        img.parentElement.addEventListener('mouseenter', function() {
            gsap.to(img, {
                scale: 1.1,
                duration: 0.6,
                ease: "power2.out"
            });
        });

        img.parentElement.addEventListener('mouseleave', function() {
            gsap.to(img, {
                scale: 1,
                duration: 0.6,
                ease: "power2.out"
            });
        });
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = [
        { selector: '.promise-item:nth-child(1) .promise-title', prefix: '', suffix: '時間体制', target: 24 },
        { selector: '.facility-features li:nth-child(1)', prefix: '全室', suffix: '畳以上の完全個室', target: 8 },
    ];

    counters.forEach(counter => {
        const element = document.querySelector(counter.selector);
        if (!element) return;

        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    target: counter.target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: function() {
                        const value = Math.round(this.targets()[0].target);
                        element.textContent = counter.prefix + value + counter.suffix;
                    }
                });
            },
            once: true
        });
    });
}

// Text Split Animations
function initTextAnimations() {
    // Split text utility
    function splitText(element) {
        const text = element.textContent;
        const chars = text.split('');
        element.innerHTML = chars.map(char => 
            `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
        return element.querySelectorAll('.char');
    }

    // Animate section titles
    gsap.utils.toArray('.section-title-ja').forEach(title => {
        const chars = splitText(title);
        
        gsap.from(chars, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            },
            opacity: 0,
            y: 20,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    });
}

// Image Reveal Animations
function initImageRevealAnimations() {
    // Create reveal overlay for images
    gsap.utils.toArray('.service-card-image, .facility-main').forEach(container => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--color-beige);
            z-index: 1;
            transform-origin: left;
        `;
        container.style.position = 'relative';
        container.appendChild(overlay);

        gsap.to(overlay, {
            scrollTrigger: {
                trigger: container,
                start: 'top 70%',
            },
            scaleX: 0,
            duration: 1.2,
            ease: "power3.inOut"
        });
    });
}

// Smooth Parallax on Mouse Move (for hero)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    gsap.to('.hero-content', {
        x: mouseX * 20,
        y: mouseY * 20,
        duration: 1,
        ease: "power2.out"
    });
});

// Performance optimization: Pause animations when not in viewport
let scrollTriggers = ScrollTrigger.getAll();

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        scrollTriggers.forEach(st => st.disable());
    } else {
        scrollTriggers.forEach(st => st.enable());
    }
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Add smooth page transitions
window.addEventListener('beforeunload', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.3
    });
});