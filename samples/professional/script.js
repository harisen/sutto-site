// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ヘッダーのスクロール処理
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// フェードインアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// 監視する要素を追加
document.querySelectorAll('.feature-card, .service-card, .lawyer-card, .case-card, .flow-step, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    fadeObserver.observe(el);
});

// 数値のカウントアップアニメーション
function animateValue(element, start, end, duration) {
    const startTimestamp = Date.now();
    const step = () => {
        const timestamp = Date.now();
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        element.textContent = value.toLocaleString();
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 実績数値のアニメーション
const heroFeatures = document.querySelector('.hero-features');
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 相談実績5,000件
            const consultations = entry.target.querySelector('.feature:first-child span');
            if (consultations && consultations.textContent.includes('5,000')) {
                const span = document.createElement('span');
                span.textContent = '相談実績';
                const numberSpan = document.createElement('span');
                numberSpan.textContent = '0';
                consultations.textContent = '';
                consultations.appendChild(span);
                consultations.appendChild(document.createTextNode(' '));
                consultations.appendChild(numberSpan);
                consultations.appendChild(document.createTextNode('件以上'));
                animateValue(numberSpan, 0, 5000, 2000);
            }
            
            // 顧客満足度98%
            const satisfaction = entry.target.querySelector('.feature:nth-child(2) span');
            if (satisfaction && satisfaction.textContent.includes('98')) {
                const span = document.createElement('span');
                span.textContent = '顧客満足度';
                const numberSpan = document.createElement('span');
                numberSpan.textContent = '0';
                satisfaction.textContent = '';
                satisfaction.appendChild(span);
                satisfaction.appendChild(document.createTextNode(' '));
                satisfaction.appendChild(numberSpan);
                satisfaction.appendChild(document.createTextNode('%'));
                animateValue(numberSpan, 0, 98, 2000);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (heroFeatures) {
    statsObserver.observe(heroFeatures);
}

// サービスカードのホバーエフェクト
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
    });
});

// 弁護士カードのホバーエフェクト
const lawyerCards = document.querySelectorAll('.lawyer-card');
lawyerCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.lawyer-image img');
        if (image) {
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.lawyer-image img');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// 料金カードの強調表示
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.borderColor = 'var(--primary-light)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.borderColor = 'transparent';
        }
    });
});

// 電話番号・メールアドレスクリック時のトラッキング
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Phone number clicked:', this.href);
        // Google Analytics等のイベントトラッキング
    });
});

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Email address clicked:', this.href);
        // Google Analytics等のイベントトラッキング
    });
});

// パララックス効果（ヒーローセクション）
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// フローステップの順次表示
const flowSteps = document.querySelectorAll('.flow-step');
const flowObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
            
            flowObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

flowSteps.forEach(step => {
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'all 0.6s ease-out';
    flowObserver.observe(step);
});

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // アニメーション要素の初期化
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
    });
});