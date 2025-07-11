// Language switching functionality
let currentLang = 'ja';

// Initialize language system
function initializeLanguage() {
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('nemuko-lang');
    const browserLang = navigator.language.split('-')[0];
    
    // Set initial language
    if (savedLang && ['ja', 'en', 'zh', 'ko', 'id', 'pt'].includes(savedLang)) {
        currentLang = savedLang;
    } else if (['ja', 'en', 'zh', 'ko', 'id', 'pt'].includes(browserLang)) {
        currentLang = browserLang;
    }
    
    // Apply initial language
    updateLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Change language
function changeLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('nemuko-lang', lang);
    
    // Add transition effect
    document.body.classList.add('lang-transition');
    
    // Update language
    updateLanguage(lang);
    
    // Update button states
    updateButtonStates(lang);
    
    // Remove transition class
    setTimeout(() => {
        document.body.classList.remove('lang-transition');
    }, 400);
}

// Update all text content
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(t, key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update specific elements
    updateHeroSection(t);
    updateScheduleSection(t);
    updateProfileSection(t);
    updateGameElements(t);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Get nested translation by key path
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Update button states
function updateButtonStates(lang) {
    // Desktop buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Mobile buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Update hero section
function updateHeroSection(t) {
    // Hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = t.hero.name;
    
    // Hero subtitle (with typewriter effect)
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = ''; // Clear existing text
        gsap.to(heroSubtitle, {
            text: t.hero.subtitle,
            duration: 2,
            ease: 'none',
            delay: 0.5
        });
    }
    
    // Hero description
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        heroDesc.innerHTML = t.hero.description.replace(/\n/g, '<br>');
    }
    
    // Buttons
    const watchBtn = document.querySelector('.btn-primary span[data-translate]');
    if (watchBtn) watchBtn.textContent = t.hero.watchStream;
    
    const twitterBtn = document.querySelector('.btn-secondary span[data-translate]');
    if (twitterBtn) twitterBtn.textContent = t.hero.twitterFollow;
}

// Update schedule section
function updateScheduleSection(t) {
    const scheduleTitle = document.querySelector('.schedule-title');
    if (scheduleTitle) scheduleTitle.textContent = t.schedule.title;
    
    const streamTime = document.querySelector('.schedule-time');
    if (streamTime) streamTime.innerHTML = `${t.schedule.streamTime} ${t.schedule.platform}`;
    
    const countdownLabel = document.querySelector('.countdown-label');
    if (countdownLabel) countdownLabel.textContent = t.schedule.countdownLabel;
}

// Update profile section
function updateProfileSection(t) {
    const profileTitle = document.querySelector('#profile .section-title');
    if (profileTitle) {
        // 葉っぱの要素を保持
        const leftLeaf = profileTitle.querySelector('.left-leaf');
        const rightLeaf = profileTitle.querySelector('.right-leaf');
        
        // テキストのみを更新
        const textNode = Array.from(profileTitle.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
            textNode.textContent = t.profile.title;
        } else {
            profileTitle.textContent = t.profile.title;
            // 葉っぱを再追加
            if (leftLeaf) profileTitle.appendChild(leftLeaf);
            if (rightLeaf) profileTitle.appendChild(rightLeaf);
        }
        
        // フォントを確実に適用（複数の方法で設定）
        profileTitle.style.fontFamily = "'Klee One', cursive";
        profileTitle.style.fontWeight = '600';
        profileTitle.style.setProperty('font-family', "'Klee One', cursive", 'important');
    }
    
    // Update breeding info label
    const breedingInfo = document.querySelector('.profile-info::before');
    if (breedingInfo) {
        // Create style element to update pseudo element
        let styleEl = document.getElementById('breeding-info-style');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'breeding-info-style';
            document.head.appendChild(styleEl);
        }
        styleEl.textContent = `.profile-info::before { content: '${t.profile.breedingInfo}' !important; }`;
    }
    
    // Update profile details
    const profileDetails = [
        { selector: '[data-field="name"] strong', text: t.profile.name },
        { selector: '[data-field="name"] span', text: t.profile.nameValue },
        { selector: '[data-field="species"] strong', text: t.profile.species },
        { selector: '[data-field="species"] span', text: t.profile.speciesValue },
        { selector: '[data-field="birthday"] strong', text: t.profile.birthday },
        { selector: '[data-field="birthday"] span', text: t.profile.birthdayValue },
        { selector: '[data-field="height"] strong', text: t.profile.height },
        { selector: '[data-field="height"] span', text: t.profile.heightValue },
        { selector: '[data-field="weight"] strong', text: t.profile.weight },
        { selector: '[data-field="weight"] span', text: t.profile.weightValue },
        { selector: '[data-field="favorite-food"] strong', text: t.profile.favoriteFood },
        { selector: '[data-field="favorite-food"] span', text: t.profile.favoriteFoodValue },
        { selector: '[data-field="training"] strong', text: t.profile.training },
        { selector: '[data-field="training"] span', text: t.profile.trainingValue }
    ];
    
    profileDetails.forEach(detail => {
        const element = document.querySelector(detail.selector);
        if (element) element.textContent = detail.text;
    });
    
    // Update care info
    const careTitle = document.querySelector('.care-info-title');
    if (careTitle) {
        careTitle.textContent = t.profile.careTitle;
    }
    
    const careText = document.querySelector('.care-info p');
    if (careText) {
        careText.innerHTML = t.profile.cautionText.replace(/\\n/g, '<br>');
    }
}

// Update game elements
function updateGameElements(t) {
    // Update collection counter format
    window.acornCounterFormat = t.game.acornCounter;
    
    // Update popup texts
    const popupTitle = document.querySelector('#collectionPopup h3');
    if (popupTitle) popupTitle.textContent = t.game.completionTitle;
    
    const closeBtn = document.querySelector('#collectionPopup .btn');
    if (closeBtn) closeBtn.textContent = t.game.closeButton;
    
    // Store translations for dynamic use
    window.gameTranslations = t.game;
    window.chatTranslations = t.chat;
}

// Helper function to update counter display
function updateAcornCounter(normalCount, goldenCount) {
    const counter = document.getElementById('collectionCounter');
    if (counter && window.acornCounterFormat) {
        const text = window.acornCounterFormat
            .replace('{{count}}', normalCount)
            .replace('{{total}}', '5')
            .replace('{{golden}}', goldenCount)
            .replace('{{goldenTotal}}', '10');
        counter.textContent = text;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for translations to load
    if (typeof translations !== 'undefined') {
        initializeLanguage();
        // 初期化後にフォントを適用
        setTimeout(() => {
            applyProfileFont();
            
            // MutationObserverで変更を監視
            const profileTitle = document.querySelector('#profile .section-title');
            if (profileTitle) {
                const observer = new MutationObserver(() => {
                    // フォントが変更されたら再適用
                    if (profileTitle.style.fontFamily !== "'Klee One', cursive") {
                        profileTitle.style.fontFamily = "'Klee One', cursive";
                        profileTitle.style.fontWeight = '600';
                    }
                });
                
                observer.observe(profileTitle, {
                    attributes: true,
                    attributeFilter: ['style'],
                    childList: true,
                    subtree: true
                });
            }
        }, 100);
        
        // GSAPアニメーション完了後にも再適用
        setTimeout(() => {
            applyProfileFont();
        }, 3000);
    } else {
        // If translations not loaded, wait and retry
        setTimeout(initializeLanguage, 100);
    }
});

// プロフィールセクションのフォントを適用する関数
function applyProfileFont() {
    const profileTitle = document.querySelector('#profile .section-title');
    if (profileTitle) {
        profileTitle.style.fontFamily = "'Klee One', cursive";
        profileTitle.style.fontWeight = '600';
    }
    // profile-info内のすべての要素にもフォントを適用
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo) {
        profileInfo.style.fontFamily = "'Klee One', cursive";
        const allElements = profileInfo.querySelectorAll('*');
        allElements.forEach(el => {
            el.style.fontFamily = "'Klee One', cursive";
        });
    }
}