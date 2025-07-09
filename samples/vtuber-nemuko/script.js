// GSAP plugins registration
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global variables
let isLoading = true;
let miniCharacter = null;
let characterSprite = null;
let isMoving = false;
let characterDirection = 1; // 1 for right, -1 for left

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();
    initializeMiniCharacter();
    initializeAnimations();
    initializeCountdown();
    initializeScrollEffects();
    initializeNavigation();
    initializeMouseFollower();
    initializeAcornCollection();
    initializeMobileMenu();
});

// Loading screen animation
function initializeLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingTransition = document.getElementById('loadingTransition');
    
    // Simulate loading time (minimum 2 seconds)
    setTimeout(() => {
        // Phase 2: Show loading_2.png from bottom
        gsap.set(loadingTransition, {
            display: 'block',
            bottom: '-100%',
            opacity: 1
        });
        
        // Phase 3: Slide up rapidly with "swoosh" effect
        gsap.to(loadingTransition, {
            bottom: '100%',
            duration: 0.8,
            ease: 'power4.in',
            onComplete: () => {
                // Phase 4: Fade out loading screen and show content
                gsap.to(loadingScreen, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingScreen.style.display = 'none';
                        loadingTransition.style.display = 'none';
                        isLoading = false;
                        
                        // Start main content animations
                        animateHeroContent();
                    }
                });
            }
        });
    }, 2000);
}

// Mini character interactive movement
function initializeMiniCharacter() {
    miniCharacter = document.getElementById('miniCharacter');
    characterSprite = document.getElementById('characterSprite');
    
    // Set initial position
    gsap.set(miniCharacter, {
        left: '50%',
        top: '50%',
        xPercent: -50,
        yPercent: -50
    });
    
    // Set initial direction
    characterSprite.style.transform = `scaleX(${characterDirection})`;
    
    // Add click event to document
    document.addEventListener('click', handleCharacterMovement);
    document.addEventListener('touchend', handleCharacterMovement);
}

function handleCharacterMovement(e) {
    // Don't move during loading or if already moving
    if (isLoading || isMoving) return;
    
    // Don't move if clicking on interactive elements
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || e.target.closest('button')) return;
    
    e.preventDefault();
    
    // Get click/touch coordinates
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    
    // Get current character position
    const charRect = miniCharacter.getBoundingClientRect();
    const charX = charRect.left + charRect.width / 2;
    const charY = charRect.top + charRect.height / 2;
    
    // Determine vertical direction and set appropriate sprite
    if (y < charY) {
        // Moving up - use back sprite
        characterSprite.src = 'images/walk_back.gif';
    } else {
        // Moving down - use front sprite
        characterSprite.src = 'images/walk_front.gif';
    }
    
    // Determine horizontal direction and flip sprite if needed
    if (x < charX) {
        // Moving left - flip the sprite
        characterDirection = -1;
        characterSprite.style.transform = 'scaleX(-1)';
    } else {
        // Moving right - normal orientation
        characterDirection = 1;
        characterSprite.style.transform = 'scaleX(1)';
    }
    
    // Calculate distance and duration
    const distance = Math.sqrt(Math.pow(x - charX, 2) + Math.pow(y - charY, 2));
    const duration = Math.min(distance / 200, 3); // Max 3 seconds
    
    isMoving = true;
    
    // Move character with GSAP
    gsap.to(miniCharacter, {
        left: x,
        top: y,
        duration: duration,
        ease: 'power2.inOut',
        onComplete: () => {
            // Return to idle animation with preserved direction
            characterSprite.src = 'images/idle.gif';
            characterSprite.style.transform = `scaleX(${characterDirection})`;
            isMoving = false;
            
            // Create leaf particles at destination
            createLeafParticles(x, y);
        }
    });
}

// Create leaf particle effects
function createLeafParticles(x, y) {
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf-particle';
        leaf.style.left = x + 'px';
        leaf.style.top = y + 'px';
        
        // Random leaf image
        const leafImages = ['autumn-leaves_1.png', 'autumn-leaves_2.png', 'ginkgo-leaf.png', 'yellow_leaf.png'];
        const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)];
        leaf.style.backgroundImage = `url(images/${randomLeaf})`;
        leaf.style.backgroundSize = 'contain';
        leaf.style.backgroundRepeat = 'no-repeat';
        leaf.style.width = '30px';
        leaf.style.height = '30px';
        
        document.body.appendChild(leaf);
        
        // Animate leaf
        gsap.fromTo(leaf, {
            scale: 0,
            rotation: 0,
            opacity: 0.8
        }, {
            scale: 1,
            rotation: Math.random() * 360 - 180,
            opacity: 0,
            x: (Math.random() - 0.5) * 100,
            y: Math.random() * 50 + 50,
            duration: 1.5,
            ease: 'power2.out',
            onComplete: () => {
                leaf.remove();
            }
        });
    }
}

// Hero section animations
function animateHeroContent() {
    // Animate hero logo first
    gsap.fromTo('.hero-logo', {
        opacity: 0,
        scale: 0.5,
        rotation: -180
    }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Add continuous floating animation to logo
    gsap.to('.hero-logo', {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1.5
    });
    
    // Then animate hero text
    gsap.fromTo('.hero-text', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Typewriter effect for subtitle
    gsap.to('#heroSubtitle', {
        text: 'ドーモ。特殊な訓練を受けたモモンガです。',
        duration: 2,
        ease: 'none',
        delay: 0.5
    });
    
    // Animate hero image with floating effect
    gsap.fromTo('.hero-image', {
        opacity: 0,
        scale: 0.8
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });
    
    // Continuous floating animation for main image
    gsap.to('.hero-image img', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // Animate buttons
    gsap.fromTo('.btn', {
        opacity: 0,
        scale: 0.9
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 1,
        ease: 'back.out(1.7)'
    });
}

// Initialize general animations
function initializeAnimations() {
    // Parallax effect for autumn background
    gsap.to('.autumn-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Clock icon swing animation with more bounce
    gsap.to('.clock-icon', {
        rotation: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'elastic.out(1, 0.5)',
        transformOrigin: '50% 10%'
    });
    
    // Floating acorns parallax
    gsap.to('.floating-acorn', {
        y: -20,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
            each: 0.5,
            from: 'random'
        }
    });
}

// Countdown timer for stream time
function initializeCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    let prevHours = -1;
    let prevMinutes = -1;
    let prevSeconds = -1;
    
    function animateDigitChange(element, newValue) {
        gsap.fromTo(element, {
            scale: 1.2,
            rotationX: -90,
            opacity: 0.5
        }, {
            scale: 1,
            rotationX: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.7)'
        });
    }
    
    function updateCountdown() {
        const now = new Date();
        const streamTime = new Date();
        streamTime.setHours(17, 0, 0, 0);
        
        // If past 17:00 today, set to tomorrow
        if (now > streamTime) {
            streamTime.setDate(streamTime.getDate() + 1);
        }
        
        // Skip weekends
        const dayOfWeek = streamTime.getDay();
        if (dayOfWeek === 0) { // Sunday
            streamTime.setDate(streamTime.getDate() + 1);
        } else if (dayOfWeek === 6) { // Saturday
            streamTime.setDate(streamTime.getDate() + 2);
        }
        
        const diff = streamTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Format with leading zeros
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        
        // Update and animate only changed digits
        if (hours !== prevHours) {
            hoursElement.textContent = formattedHours;
            animateDigitChange(hoursElement, formattedHours);
            prevHours = hours;
        }
        
        if (minutes !== prevMinutes) {
            minutesElement.textContent = formattedMinutes;
            animateDigitChange(minutesElement, formattedMinutes);
            prevMinutes = minutes;
        }
        
        if (seconds !== prevSeconds) {
            secondsElement.textContent = formattedSeconds;
            animateDigitChange(secondsElement, formattedSeconds);
            prevSeconds = seconds;
        }
        
        // Special effect at stream time
        if (hours === 0 && minutes === 0 && seconds === 0) {
            createCelebrationEffect();
            showStreamStartAnimation();
        }
    }
    
    // Initial animation for countdown container
    gsap.fromTo('.countdown-container', {
        scale: 0,
        rotation: -10,
        opacity: 0
    }, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
            trigger: '.countdown-container',
            start: 'top 80%',
            once: true
        }
    });
    
    // Continuous bounce animation for digits
    gsap.to('.countdown-digit', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2
    });
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Stream start animation
function showStreamStartAnimation() {
    const container = document.querySelector('.countdown-container');
    
    gsap.to(container, {
        scale: 1.2,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
            container.innerHTML = '<div style="font-size: 3rem; color: var(--primary-orange); font-weight: 900;">配信開始！🎉</div>';
            
            gsap.fromTo(container, {
                scale: 1.2,
                rotation: -5
            }, {
                scale: 1,
                rotation: 5,
                duration: 0.5,
                repeat: 5,
                yoyo: true,
                ease: 'power1.inOut'
            });
        }
    });
}

// Celebration effect for stream time
function createCelebrationEffect() {
    const colors = ['#FF8C00', '#FFD700', '#DC143C', '#556B2F'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        document.body.appendChild(particle);
        
        gsap.to(particle, {
            x: (Math.random() - 0.5) * window.innerWidth,
            y: (Math.random() - 0.5) * window.innerHeight,
            scale: 0,
            duration: 2,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        });
    }
}

// Scroll-triggered animations
function initializeScrollEffects() {
    // Section titles with decorative leaves
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                once: true,
                onComplete: () => {
                    // Animate decorative leaves
                    gsap.to(title.querySelector('::before'), {
                        opacity: 0.7,
                        x: -20,
                        rotation: -15,
                        duration: 1.5,
                        ease: 'elastic.out(1, 0.5)'
                    });
                    gsap.to(title.querySelector('::after'), {
                        opacity: 0.7,
                        x: 20,
                        rotation: 15,
                        duration: 1.5,
                        ease: 'elastic.out(1, 0.5)'
                    });
                }
            }
        });
        
        // Animate pseudo elements separately
        const titleElement = title;
        ScrollTrigger.create({
            trigger: titleElement,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                // Create actual decorative elements since pseudo elements can't be animated directly
                const leftLeaf = document.createElement('div');
                const rightLeaf = document.createElement('div');
                
                leftLeaf.className = 'section-leaf left-leaf';
                rightLeaf.className = 'section-leaf right-leaf';
                
                leftLeaf.style.cssText = `
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background-image: url('images/autumn-leaves_1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    top: 50%;
                    left: 15%;
                    transform: translateY(-50%);
                    opacity: 0;
                `;
                
                rightLeaf.style.cssText = `
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background-image: url('images/autumn-leaves_2.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    top: 50%;
                    right: 15%;
                    transform: translateY(-50%);
                    opacity: 0;
                `;
                
                titleElement.appendChild(leftLeaf);
                titleElement.appendChild(rightLeaf);
                
                // Animate leaves
                gsap.to(leftLeaf, {
                    opacity: 0.7,
                    x: -20,
                    rotation: -15,
                    duration: 1.5,
                    delay: 0.3,
                    ease: 'elastic.out(1, 0.5)'
                });
                
                gsap.to(rightLeaf, {
                    opacity: 0.7,
                    x: 20,
                    rotation: 15,
                    duration: 1.5,
                    delay: 0.3,
                    ease: 'elastic.out(1, 0.5)'
                });
                
                // Floating animation
                gsap.to(leftLeaf, {
                    y: -10,
                    rotation: -25,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    delay: 2,
                    ease: 'power1.inOut'
                });
                
                gsap.to(rightLeaf, {
                    y: -10,
                    rotation: 25,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    delay: 2.5,
                    ease: 'power1.inOut'
                });
            }
        });
    });
    
    // Profile content
    gsap.fromTo('.profile-content', {
        opacity: 0,
        scale: 0.95
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.profile-content',
            start: 'top 70%',
            once: true
        }
    });
    
    // Profile details stagger animation
    gsap.fromTo('.profile-detail', {
        opacity: 0,
        x: -30
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.profile-info',
            start: 'top 70%',
            once: true
        }
    });
}

// Smooth scroll navigation
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Create ambient leaf particles
function createAmbientLeaves() {
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            const leaf = document.createElement('div');
            leaf.className = 'leaf-particle';
            leaf.style.left = Math.random() * window.innerWidth + 'px';
            leaf.style.top = '-50px';
            
            const leafImages = ['autumn-leaves_1.png', 'autumn-leaves_2.png', 'ginkgo-leaf.png'];
            const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)];
            leaf.style.backgroundImage = `url(images/${randomLeaf})`;
            leaf.style.backgroundSize = 'contain';
            leaf.style.backgroundRepeat = 'no-repeat';
            leaf.style.width = '40px';
            leaf.style.height = '40px';
            
            document.body.appendChild(leaf);
            
            gsap.to(leaf, {
                y: window.innerHeight + 100,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 720,
                duration: 10 + Math.random() * 5,
                ease: 'none',
                onComplete: () => leaf.remove()
            });
        }
    }, 3000);
}

// Start ambient effects after loading
setTimeout(createAmbientLeaves, 3000);

// Mouse follower (acorn)
function initializeMouseFollower() {
    const mouseFollower = document.getElementById('mouseFollower');
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show follower when mouse moves
        if (!mouseFollower.classList.contains('active')) {
            mouseFollower.classList.add('active');
        }
    });
    
    // Hide follower when mouse leaves window
    document.addEventListener('mouseleave', () => {
        mouseFollower.classList.remove('active');
    });
    
    // Smooth follow animation
    function animateFollower() {
        // Lerp for smooth movement
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        mouseFollower.style.left = followerX + 'px';
        mouseFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Click animation
    document.addEventListener('click', (e) => {
        if (!e.target.closest('a') && !e.target.closest('button')) {
            gsap.to(mouseFollower, {
                scale: 0.5,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        }
    });
}

// Acorn collection game
function initializeAcornCollection() {
    const sections = ['hero', 'schedule-banner', 'profile'];
    const acornPositions = [
        { section: 0, top: '20%', left: '10%' },
        { section: 0, top: '70%', right: '15%' },
        { section: 1, top: '50%', left: '5%' },
        { section: 2, top: '30%', right: '10%' },
        { section: 2, bottom: '20%', left: '8%' }
    ];
    
    // Golden acorn positions - more hidden and spread across the page
    const goldenAcornPositions = [
        { section: 'hero', top: '5%', right: '5%', hidden: true },
        { section: 'header', bottom: '10px', left: '300px', hidden: true },
        { section: 'schedule-banner', top: '10px', right: '200px', hidden: false },
        { section: 'profile', bottom: '50px', left: '20px', hidden: true },
        { section: 'footer', top: '10px', right: '50px', hidden: true },
        { section: 'hero', bottom: '10%', left: '2%', hidden: true },
        { section: 'profile', top: '60%', right: '3%', hidden: false }
    ];
    
    let collectedCount = 0;
    let goldenCollectedCount = 0;
    const totalAcorns = acornPositions.length;
    const totalGoldenAcorns = goldenAcornPositions.length;
    const counter = document.getElementById('collectionCounter');
    const countSpan = document.getElementById('acornCount');
    const goldenCountSpan = document.getElementById('goldenCount');
    
    // Create hidden acorns
    acornPositions.forEach((pos, index) => {
        const section = document.getElementsByClassName('section')[pos.section] || 
                       document.getElementsByClassName(sections[pos.section])[0];
        
        if (section) {
            const acorn = document.createElement('div');
            acorn.className = 'hidden-acorn';
            acorn.dataset.index = index;
            
            // Set position
            Object.keys(pos).forEach(key => {
                if (key !== 'section') {
                    acorn.style[key] = pos[key];
                }
            });
            
            // Add click handler
            acorn.addEventListener('click', collectAcorn);
            
            // Add to section
            section.style.position = 'relative';
            section.appendChild(acorn);
            
            // Entrance animation
            gsap.fromTo(acorn, {
                scale: 0,
                rotation: -180
            }, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                delay: 3 + index * 0.2,
                ease: 'back.out(1.7)'
            });
        }
    });
    
    // Create golden acorns (initially hidden)
    goldenAcornPositions.forEach((pos, index) => {
        let section;
        if (pos.section === 'hero') {
            section = document.querySelector('.hero');
        } else if (pos.section === 'header') {
            section = document.querySelector('.header');
        } else if (pos.section === 'schedule-banner') {
            section = document.querySelector('.schedule-banner');
        } else if (pos.section === 'profile') {
            section = document.querySelector('#profile');
        } else if (pos.section === 'footer') {
            section = document.querySelector('.footer');
        }
        
        if (section) {
            const goldenAcorn = document.createElement('div');
            goldenAcorn.className = 'golden-acorn';
            goldenAcorn.dataset.index = index;
            
            // Set position
            Object.keys(pos).forEach(key => {
                if (key !== 'section' && key !== 'hidden') {
                    goldenAcorn.style[key] = pos[key];
                }
            });
            
            // Add click handler
            goldenAcorn.addEventListener('click', collectGoldenAcorn);
            
            // Add to section
            section.style.position = 'relative';
            section.appendChild(goldenAcorn);
            
            // Show some golden acorns from the start
            if (!pos.hidden) {
                goldenAcorn.classList.add('revealed');
            }
        }
    });
    
    function collectAcorn(e) {
        const acorn = e.target;
        if (acorn.classList.contains('collected')) return;
        
        // Mark as collected
        acorn.classList.add('collected');
        collectedCount++;
        
        // Update counter
        countSpan.textContent = collectedCount;
        if (!counter.classList.contains('show')) {
            counter.classList.add('show');
        }
        
        // Collection animation
        gsap.to(acorn, {
            scale: 1.5,
            rotation: 360,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                acorn.style.display = 'none';
            }
        });
        
        // Particle effect at collection point
        createAcornParticles(e.clientX, e.clientY);
        
        // Check if all normal acorns collected
        if (collectedCount === totalAcorns && goldenCollectedCount < totalGoldenAcorns) {
            revealGoldenAcorns();
        }
        
        // Check if all collected
        if (collectedCount === totalAcorns && goldenCollectedCount === totalGoldenAcorns) {
            setTimeout(showCompletionPopup, 500);
        }
    }
    
    function createAcornParticles(x, y) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.backgroundColor = '#FFD700';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            document.body.appendChild(particle);
            
            gsap.to(particle, {
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                scale: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => particle.remove()
            });
        }
    }
    
    function collectGoldenAcorn(e) {
        const goldenAcorn = e.target;
        if (goldenAcorn.classList.contains('collected')) return;
        
        // Mark as collected
        goldenAcorn.classList.add('collected');
        goldenCollectedCount++;
        
        // Update counter
        goldenCountSpan.textContent = goldenCollectedCount;
        
        // Collection animation - more spectacular for golden acorns
        gsap.to(goldenAcorn, {
            scale: 2,
            rotation: 720,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
                goldenAcorn.style.display = 'none';
            }
        });
        
        // Golden particle effect
        createGoldenParticles(e.clientX, e.clientY);
        
        // Check if all collected
        if (collectedCount === totalAcorns && goldenCollectedCount === totalGoldenAcorns) {
            setTimeout(showCompletionPopup, 500);
        }
    }
    
    function createGoldenParticles(x, y) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '15px';
            particle.style.height = '15px';
            particle.style.backgroundColor = '#FFD700';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
            
            document.body.appendChild(particle);
            
            gsap.to(particle, {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                scale: 0,
                rotation: Math.random() * 360,
                duration: 1.5,
                ease: 'power2.out',
                onComplete: () => particle.remove()
            });
        }
    }
    
    function revealGoldenAcorns() {
        // Show message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--white);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10002;
            text-align: center;
            font-size: 1.5rem;
            color: var(--primary-orange);
            font-weight: 700;
        `;
        message.innerHTML = '✨ ゴールデンどんぐりが現れた！ ✨<br><small>ページのどこかに隠れているよ！</small>';
        document.body.appendChild(message);
        
        gsap.fromTo(message, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(message, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => message.remove()
                    });
                }, 3000);
            }
        });
        
        // Reveal all hidden golden acorns
        document.querySelectorAll('.golden-acorn:not(.revealed)').forEach((acorn, index) => {
            setTimeout(() => {
                acorn.classList.add('revealed');
                gsap.fromTo(acorn, {
                    scale: 0,
                    rotation: -180
                }, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.5)'
                });
            }, index * 200);
        });
    }
    
    function showCompletionPopup() {
        const popup = document.getElementById('collectionPopup');
        popup.style.display = 'block';
        
        // Update message for golden acorns
        if (goldenCollectedCount === totalGoldenAcorns) {
            popup.querySelector('p').innerHTML = '全てのどんぐりとゴールデンどんぐりを集めました！<br>ねむこが特別に喜んでいます♪✨';
        }
        
        gsap.fromTo(popup, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Special celebration for Nemuko
        const nemuko = document.getElementById('miniCharacter');
        gsap.to(nemuko, {
            rotation: 360,
            duration: 1,
            ease: 'power2.inOut',
            repeat: 2
        });
        
        // Extra celebration for golden completion
        if (goldenCollectedCount === totalGoldenAcorns) {
            createCelebrationEffect();
        }
    }
}

// Close collection popup
window.closeCollectionPopup = function() {
    const popup = document.getElementById('collectionPopup');
    gsap.to(popup, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            popup.style.display = 'none';
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    // Toggle menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Update aria-expanded
        const isOpen = mobileMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    // Close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            
            closeMenu();
            
            // Smooth scroll to target after menu closes
            setTimeout(() => {
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                }
            }, 300);
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}