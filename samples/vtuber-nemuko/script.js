// GSAP plugins registration
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Global variables
let isLoading = true;
let miniCharacter = null;
let characterSprite = null;
let isMoving = false;
let characterDirection = 1; // 1 for normal, -1 for flipped

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system first
    if (typeof initializeLanguage === 'function') {
        initializeLanguage();
    }
    
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
    
    if (!loadingScreen) {
        console.error('Loading screen not found');
        isLoading = false;
        // Try to start animations anyway
        setTimeout(() => animateHeroContent(), 100);
        return;
    }
    
    function hideLoadingScreen() {
        // Wait for critical images to load
        const criticalImages = [
            'images/logo_nemuko.png',
            'images/main.png',
            'images/autumn-pattern_1.jpg'
        ];
        
        const imagePromises = criticalImages.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve; // Resolve even on error
                img.src = src;
            });
        });
        
        Promise.all(imagePromises).then(() => {
            isLoading = false;
            
            // Use both GSAP and CSS for reliability
            if (typeof gsap !== 'undefined') {
                gsap.to(loadingScreen, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingScreen.style.display = 'none';
                        if (loadingTransition) {
                            loadingTransition.style.display = 'none';
                        }
                        animateHeroContent();
                    }
                });
            } else {
                // Fallback without GSAP
                loadingScreen.style.transition = 'opacity 0.5s';
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    if (loadingTransition) {
                        loadingTransition.style.display = 'none';
                    }
                    animateHeroContent();
                }, 500);
            }
        });
    }
    
    // Wait for window load event which ensures all resources are loaded
    if (document.readyState === 'complete') {
        // Already loaded
        setTimeout(hideLoadingScreen, 500);
    } else {
        // Wait for window load
        window.addEventListener('load', () => {
            setTimeout(hideLoadingScreen, 500);
        });
        
        // Fallback: hide after 3 seconds no matter what
        setTimeout(() => {
            if (isLoading) {
                console.log('Forcing loading screen hide');
                hideLoadingScreen();
            }
        }, 3000);
    }
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
    const x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    const y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
    
    // Get current character position
    const charRect = miniCharacter.getBoundingClientRect();
    const charX = charRect.left + charRect.width / 2;
    const charY = charRect.top + charRect.height / 2;
    
    // Determine vertical direction and set appropriate sprite first
    if (y < charY) {
        // Moving up - use back sprite with horizontal flipping
        characterSprite.src = 'images/walk_back.gif';
        
        // Apply horizontal flipping for back sprite too
        if (x < charX) {
            // Moving left - flip the back sprite
            characterDirection = -1;
            characterSprite.style.transform = 'scaleX(-1)';
        } else {
            // Moving right - normal orientation for back sprite
            characterDirection = 1;
            characterSprite.style.transform = 'scaleX(1)';
        }
    } else {
        // Moving down - use front sprite with horizontal flipping
        characterSprite.src = 'images/walk_front.gif';
        
        // Apply horizontal flipping for front sprite
        if (x < charX) {
            // Moving left - normal orientation for left movement
            characterDirection = 1;
            characterSprite.style.transform = 'scaleX(1)';
        } else {
            // Moving right - flip the sprite for right movement
            characterDirection = -1;
            characterSprite.style.transform = 'scaleX(-1)';
        }
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
        const leafImages = ['autumn-leaves_1.png', 'autumn-leaves_2.png', 'yellow_leaf.png'];
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
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        // Show content without animation
        const heroLogo = document.querySelector('.hero-logo');
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        if (heroLogo) heroLogo.style.opacity = '1';
        if (heroText) heroText.style.opacity = '1';
        if (heroImage) heroImage.style.opacity = '1';
        return;
    }
    
    // Create timeline for coordinated animations
    const tl = gsap.timeline();
    
    // First, animate the autumn background
    tl.fromTo('.autumn-bg', {
        opacity: 0,
        scale: 1.2
    }, {
        opacity: 0.3,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
    })
    
    // Animate hero text container
    .fromTo('.hero-text', {
        opacity: 0
    }, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=1')
    
    // Then animate hero logo with a bounce
    .fromTo('.hero-logo', {
        opacity: 0,
        scale: 0.3,
        rotation: -180
    }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.8')
    
    // Animate hero text elements
    .fromTo('.hero-subtitle', {
        opacity: 0,
        y: 30,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    
    .fromTo('.hero-description', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.3')
    
    // Animate hero image with special effect
    .fromTo('.hero-image', {
        opacity: 0,
        scale: 0.5,
        rotation: -15
    }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(2)'
    }, '-=0.8')
    
    // Animate buttons with stagger
    .fromTo('.btn', {
        opacity: 0,
        scale: 0.8,
        y: 20
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.3');
    
    // Add continuous floating animation to logo after timeline completes
    tl.call(() => {
        gsap.to('.hero-logo', {
            y: -10,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });
    
    // Typewriter effect for subtitle after animations
    setTimeout(() => {
        const subtitle = document.getElementById('heroSubtitle');
        if (subtitle && window.translations) {
            const currentLang = localStorage.getItem('nemuko-lang') || 'ja';
            const isMobile = window.innerWidth <= 768;
            let subtitleText = window.translations[currentLang]?.hero?.subtitle || 'ドーモ。\n特殊な訓練を受けたモモンガです。';
            
            // PC版の場合は改行位置を調整
            if (!isMobile && currentLang === 'ja') {
                subtitleText = 'ドーモ。\n特殊な訓練を受けたモモンガです。';
            }
            
            gsap.to(subtitle, {
                text: subtitleText,
                duration: 2,
                ease: 'none'
            });
        }
    }, 1000);
    
    // Add hover interaction
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            gsap.to(heroImage, {
                y: -30,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.to(heroImage, {
                        y: 0,
                        duration: 0.3,
                        ease: 'bounce.out'
                    });
                }
            });
        });
    }
    
    // Add click interaction with speech bubbles
    initializeHeroCharacterChat();
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
                once: true
            },
            onComplete: () => {
                // プロフィールセクションのタイトルの場合はフォントを適用
                if (title.closest('#profile')) {
                    title.style.fontFamily = "'Klee One', cursive";
                    title.style.fontWeight = '600';
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
                    ease: 'elastic.out(1, 0.5)',
                    onComplete: () => {
                        // プロフィールタイトルの場合はフォントを再適用
                        if (titleElement.id === 'profile' || titleElement.closest('#profile')) {
                            titleElement.style.fontFamily = "'Klee One', cursive";
                            titleElement.style.fontWeight = '600';
                        }
                    }
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
            
            const leafImages = ['autumn-leaves_1.png', 'autumn-leaves_2.png', 'yellow_leaf.png'];
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

// Hero character chat system
function initializeHeroCharacterChat() {
    const heroImage = document.querySelector('.hero-image img');
    const heroImageContainer = document.querySelector('.hero-image');
    let currentBubble = null;
    
    // Get chat translations dynamically based on current language
    function getChatTranslations() {
        const currentLang = localStorage.getItem('nemuko-lang') || 'ja';
        // Always check window.chatTranslations first (set by language-switcher.js)
        if (window.chatTranslations) {
            return window.chatTranslations;
        }
        // Fallback to translations object
        if (window.translations && window.translations[currentLang]) {
            return window.translations[currentLang].chat;
        }
        // Final fallback to Japanese
        return {
            messages: [
                'ぼくの名前はねむこだよ！',
                '{food}たべたい',
                'ねむくなってきたぁ…',
                'ゲームしよ～',
                '今日も17時から配信だよ！',
                'どんぐりあつめた？',
                'モモンガは夜行性なんだ',
                '原神たのしい！',
                'みんな元気？',
                'ふわふわ～'
            ],
            foods: [
                'チョコレート', 'ケーキ', 'プリン', 'アイスクリーム', 'どんぐり',
                'クッキー', 'ドーナツ', 'パンケーキ', 'マカロン', 'シュークリーム',
                'たいやき', 'だんご', 'もち', 'せんべい', 'ポテトチップス',
                'ラーメン', 'カレー', 'すし', 'ピザ', 'ハンバーガー',
                'おにぎり', 'うどん', 'そば', 'やきとり', 'からあげ',
                'メロンパン', 'あんぱん', 'カステラ', 'ようかん', 'まんじゅう'
            ]
        };
    }
    
    // Add appropriate event based on device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        heroImage.addEventListener('touchend', handleHeroClick);
    } else {
        heroImage.addEventListener('click', handleHeroClick);
    }
    
    let lastClickTime = 0;
    function handleHeroClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Prevent double-click on mobile
        const now = Date.now();
        if (now - lastClickTime < 300) return;
        lastClickTime = now;
        
        // Remove existing bubble if any
        if (currentBubble) {
            currentBubble.remove();
        }
        
        // Get current language translations
        const chatTranslations = getChatTranslations();
        const messages = chatTranslations.messages;
        const foods = chatTranslations.foods;
        
        // Create new bubble
        const bubble = document.createElement('div');
        bubble.className = 'character-bubble';
        
        // Select random message
        let message = messages[Math.floor(Math.random() * messages.length)];
        
        // Replace {food} placeholder with random food
        if (message.includes('{food}')) {
            const randomFood = foods[Math.floor(Math.random() * foods.length)];
            message = message.replace('{food}', randomFood);
        }
        
        bubble.textContent = message;
        heroImageContainer.appendChild(bubble);
        
        // Position bubble randomly (left or right)
        const isMobile = window.innerWidth <= 768;
        const isLeft = Math.random() > 0.5;
        
        if (isMobile) {
            // モバイルでは常に画面内に収まるように調整
            bubble.style.left = '50%';
            bubble.style.transform = 'translateX(-50%) scale(0)';
            bubble.style.right = 'auto';
            bubble.style.maxWidth = '80%';
            bubble.style.whiteSpace = 'normal';
            bubble.style.textAlign = 'center';
            
            // 吹き出しの矢印を下向きに
            const style = document.createElement('style');
            style.textContent = `.character-bubble::before { 
                left: 50% !important; 
                transform: translateX(-50%) !important;
                top: auto !important; 
                bottom: -15px !important;
                border-left-color: transparent !important; 
                border-right-color: transparent !important;
                border-top-color: var(--white) !important;
                border-bottom-color: transparent !important;
            }`;
            bubble.appendChild(style);
        } else if (isLeft) {
            bubble.style.right = 'auto';
            bubble.style.left = '-50px';
            bubble.style.transform = 'scale(0) translateX(20px)';
            
            // Adjust arrow for left side
            const style = document.createElement('style');
            style.textContent = `.character-bubble::before { 
                left: auto; 
                right: -15px; 
                border-right-color: transparent; 
                border-left-color: var(--white); 
            }`;
            bubble.appendChild(style);
        }
        
        // Random vertical position
        if (isMobile) {
            // モバイルではキャラクターのすぐ上に配置
            bubble.style.top = '-40px';
            bubble.style.position = 'absolute';
        } else {
            bubble.style.top = (Math.random() * 60 + 10) + '%';
        }
        
        // Show bubble with proper animation
        setTimeout(() => {
            if (isMobile) {
                bubble.style.transform = 'translateX(-50%) scale(1)';
                bubble.style.opacity = '1';
            } else {
                bubble.classList.add('show');
            }
        }, 10);
        
        currentBubble = bubble;
        
        // Jump animation for character
        gsap.to(heroImage, {
            y: -40,
            rotation: Math.random() * 20 - 10,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(heroImage, {
                    y: 0,
                    rotation: 0,
                    duration: 0.4,
                    ease: 'bounce.out'
                });
            }
        });
        
        // Auto hide bubble after 3 seconds
        setTimeout(() => {
            if (currentBubble === bubble) {
                bubble.classList.remove('show');
                setTimeout(() => {
                    if (bubble.parentNode) {
                        bubble.remove();
                    }
                }, 500);
            }
        }, 3000);
    }
}

// Mouse follower (acorn)
function initializeMouseFollower() {
    // Check if on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return; // Don't show mouse follower on mobile
    
    const mouseFollower = document.getElementById('mouseFollower');
    if (!mouseFollower) {
        console.error('Mouse follower element not found');
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationId = null;
    
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
        
        animationId = requestAnimationFrame(animateFollower);
    }
    
    // Start animation
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

// Helper function to update acorn counter display
function updateAcornCounterDisplay(normalCount, goldenCount) {
    const counter = document.getElementById('collectionCounter');
    const mobileCounter = document.getElementById('mobileCollectionCounter');
    const format = window.gameTranslations?.acornCounter || 'どんぐり: {{count}}/{{total}} | ゴールデン: {{golden}}/{{goldenTotal}}';
    const text = format
        .replace('{{count}}', normalCount)
        .replace('{{total}}', '5')
        .replace('{{golden}}', goldenCount)
        .replace('{{goldenTotal}}', '10');
    
    if (counter) {
        counter.textContent = text;
    }
    if (mobileCounter) {
        mobileCounter.textContent = text;
    }
}

// Acorn collection game
function initializeAcornCollection() {
    // モバイルデバイス検出
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const acornPositions = [
        { selector: '.hero', top: '20%', left: '10%' },
        { selector: '.hero', top: '70%', right: '15%' },
        { selector: '.schedule-banner', top: '50%', left: '5%' },
        { selector: '#profile', top: '30%', right: '10%' },
        { selector: '#profile', bottom: '20%', left: '8%' }
    ];
    
    // Golden acorn positions - 10 total, more hidden and spread across the page
    const goldenAcornPositions = isMobile ? [
        // モバイル用の位置設定（画面内に収まるように調整）
        { section: 'hero', top: '10%', right: '10%', hidden: true },
        { section: 'hero', top: '85%', left: '10%', hidden: true },
        { section: 'schedule-banner', top: '20px', right: '25%', hidden: false },
        { section: 'profile', top: '80%', left: '20px', hidden: true },
        { section: 'footer', top: '20px', right: '20%', hidden: true },
        { section: 'hero', top: '70%', right: '8%', hidden: true },
        { section: 'profile', top: '50%', right: '10%', hidden: false },
        { section: 'schedule-banner', top: '70%', left: '15%', hidden: true },
        { section: 'hero', top: '45%', left: '5%', hidden: true },
        { section: 'hero', top: '25%', left: '25%', hidden: true }
    ] : [
        // PC用の位置設定（元の設定）
        { section: 'hero', top: '5%', right: '5%', hidden: true },
        { section: 'header', bottom: '10px', left: '300px', hidden: true },
        { section: 'schedule-banner', top: '10px', right: '200px', hidden: false },
        { section: 'profile', bottom: '50px', left: '20px', hidden: true },
        { section: 'footer', top: '10px', right: '50px', hidden: true },
        { section: 'hero', bottom: '10%', left: '2%', hidden: true },
        { section: 'profile', top: '60%', right: '3%', hidden: false },
        { section: 'schedule-banner', bottom: '20px', left: '100px', hidden: true },
        { section: 'hero', top: '50%', left: '10px', hidden: true },
        { section: 'header', top: '15px', right: '400px', hidden: true }
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
        const section = document.querySelector(pos.selector);
        
        if (section) {
            const acorn = document.createElement('div');
            acorn.className = 'hidden-acorn';
            acorn.dataset.index = index;
            
            // Set position
            Object.keys(pos).forEach(key => {
                if (key !== 'selector') {
                    acorn.style[key] = pos[key];
                }
            });
            
            // Add click and touch handlers with better mobile support
            if (isTouch) {
                acorn.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    collectAcorn(e);
                }, { passive: false });
                // Also add click for hybrid devices
                acorn.addEventListener('click', function(e) {
                    e.preventDefault();
                    collectAcorn(e);
                });
            } else {
                acorn.addEventListener('click', collectAcorn);
            }
            
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
            // For header golden acorns, place them in hero section instead
            section = document.querySelector('.hero');
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
            
            // Set position - adjust header acorns to be positioned at the top of hero section
            if (pos.section === 'header' && !isMobile) {
                // PC版のヘッダー用どんぐりをヒーローセクション上部に配置
                goldenAcorn.style.top = '120px'; // ヘッダーの高さを考慮
                if (pos.left === '300px') {
                    goldenAcorn.style.left = '25%';
                } else if (pos.right === '400px') {
                    goldenAcorn.style.right = '30%';
                }
            } else if (pos.section === 'header' && isMobile) {
                // モバイル版は既に処理済み
                Object.keys(pos).forEach(key => {
                    if (key !== 'section' && key !== 'hidden') {
                        goldenAcorn.style[key] = pos[key];
                    }
                });
            } else {
                Object.keys(pos).forEach(key => {
                    if (key !== 'section' && key !== 'hidden') {
                        goldenAcorn.style[key] = pos[key];
                    }
                });
            }
            
            // Add click and touch handlers with better mobile support
            if (isTouch) {
                goldenAcorn.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    collectGoldenAcorn(e);
                }, { passive: false });
                // Also add click for hybrid devices
                goldenAcorn.addEventListener('click', function(e) {
                    e.preventDefault();
                    collectGoldenAcorn(e);
                });
            } else {
                goldenAcorn.addEventListener('click', collectGoldenAcorn);
            }
            
            // Add to section or body for mobile to avoid overflow issues
            if (isMobile && pos.section === 'hero') {
                // モバイルでヒーローセクションのどんぐりはbody直下に配置
                document.body.appendChild(goldenAcorn);
                
                // 位置を調整（固定位置に変更）
                goldenAcorn.style.position = 'fixed';
                const heroRect = section.getBoundingClientRect();
                
                if (pos.top) {
                    const topValue = parseFloat(pos.top);
                    goldenAcorn.style.top = (heroRect.top + (heroRect.height * topValue / 100)) + 'px';
                }
                if (pos.left) {
                    const leftValue = parseFloat(pos.left);
                    goldenAcorn.style.left = leftValue + '%';
                }
                if (pos.right) {
                    const rightValue = parseFloat(pos.right);
                    goldenAcorn.style.right = rightValue + '%';
                }
            } else {
                section.style.position = 'relative';
                section.appendChild(goldenAcorn);
            }
            
            // All golden acorns start hidden until normal acorns are collected
            // Remove the initial reveal logic
        }
    });
    
    function collectAcorn(e) {
        const acorn = e.target;
        if (acorn.classList.contains('collected')) return;
        
        // Mark as collected
        acorn.classList.add('collected');
        collectedCount++;
        
        // Update counter
        updateAcornCounterDisplay(collectedCount, goldenCollectedCount);
        if (!counter.classList.contains('show')) {
            counter.classList.add('show');
        }
        
        // Show mobile counter too
        const mobileCounter = document.getElementById('mobileCollectionCounter');
        if (mobileCounter && !mobileCounter.classList.contains('show')) {
            mobileCounter.classList.add('show');
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
        if (collectedCount === totalAcorns && goldenCollectedCount === 0) {
            const message = window.gameTranslations?.rewards?.allNormal || 'すべてのどんぐりを集めました！';
            showReward('images/reward4.png', message);
            setTimeout(revealGoldenAcorns, 3000);
        }
        
        // Check if all collected
        if (collectedCount === totalAcorns && goldenCollectedCount === totalGoldenAcorns) {
            setTimeout(showCompletionPopup, 500);
        }
    }
    
    function createAcornParticles(x, y) {
        // モバイルでは少ないパーティクル
        const particleCount = isMobile ? 5 : 10;
        
        for (let i = 0; i < particleCount; i++) {
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
                duration: isMobile ? 0.8 : 1,
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
        updateAcornCounterDisplay(collectedCount, goldenCollectedCount);
        
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
        
        // Show rewards at milestones
        if (goldenCollectedCount === 1) {
            const message = window.gameTranslations?.rewards?.firstGolden || '初めてのゴールデンどんぐり！';
            showReward('images/reward1.png', message);
        } else if (goldenCollectedCount === 5) {
            const message = window.gameTranslations?.rewards?.halfGolden || 'ゴールデンどんぐり5個達成！';
            showReward('images/reward2.png', message);
        } else if (goldenCollectedCount === 10) {
            const message = window.gameTranslations?.rewards?.allGolden || '完全制覇！すべてのゴールデンどんぐりをゲット！';
            showReward('images/reward3.png', message);
            setTimeout(showCompletionPopup, 3000);
        }
    }
    
    function createGoldenParticles(x, y) {
        // モバイルでは少ないパーティクル
        const particleCount = isMobile ? 10 : 20;
        
        for (let i = 0; i < particleCount; i++) {
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
                duration: isMobile ? 1.2 : 1.5,
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
        const goldenText = window.gameTranslations?.goldenAcornAppeared || '✨ ゴールデンどんぐりが現れた！ ✨<br><small>ページのどこかに隠れているよ！</small>';
        message.innerHTML = goldenText;
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
            const message = window.gameTranslations?.goldenCompletionMessage || '全てのどんぐりとゴールデンどんぐりを集めました！<br>ねむこが特別に喜んでいます♪✨';
            popup.querySelector('p').innerHTML = message;
        } else {
            const message = window.gameTranslations?.completionMessage || '全てのどんぐりを集めました！<br>ねむこがとても喜んでいます♪';
            popup.querySelector('p').innerHTML = message;
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

// Show reward image
function showReward(imagePath, message) {
    const overlay = document.getElementById('rewardOverlay');
    const image = document.getElementById('rewardImage');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    image.src = imagePath;
    overlay.classList.add('show');
    
    // Show message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'reward-message';
    
    // モバイル向けのスタイル調整
    const fontSize = isMobile ? '1.2rem' : '1.5rem';
    const padding = isMobile ? '15px 25px' : '20px 40px';
    const top = isMobile ? '5%' : '10%';
    
    messageDiv.style.cssText = `
        position: fixed;
        top: ${top};
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95);
        padding: ${padding};
        border-radius: 30px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10004;
        text-align: center;
        font-size: ${fontSize};
        color: var(--primary-orange);
        font-weight: 700;
        width: 90%;
        max-width: 400px;
        border: 2px solid var(--primary-orange);
    `;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    gsap.fromTo(messageDiv, {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideReward();
        gsap.to(messageDiv, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            onComplete: () => messageDiv.remove()
        });
    }, 5000);
}

// Hide reward overlay
window.hideReward = function() {
    const overlay = document.getElementById('rewardOverlay');
    overlay.classList.remove('show');
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
    hamburger.addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    menuOverlay.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeMenu();
    });
    
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