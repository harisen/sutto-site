// モバイルメニュー
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // モバイルメニューを閉じる
            nav.classList.remove('active');
        }
    });
});

// ヘッダーのスクロール制御
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// メニュータブ切り替え
const tabButtons = document.querySelectorAll('.tab-button');
const menuCategories = document.querySelectorAll('.menu-category');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // アクティブクラスの切り替え
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // カテゴリー表示の切り替え
        menuCategories.forEach(cat => cat.classList.remove('active'));
        const targetCategory = document.getElementById(category);
        if (targetCategory) {
            targetCategory.classList.add('active');
        }
    });
});

// メールリンクのクリックトラッキング（オプション）
const emailLink = document.querySelector('.email-link');
if (emailLink) {
    emailLink.addEventListener('click', () => {
        console.log('Email link clicked');
    });
}

// 要素のフェードイン効果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 監視対象の要素を追加
document.querySelectorAll('.menu-item, .feature-item, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// フェードインクラスの追加
const style = document.createElement('style');
style.textContent = '.fade-in { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// ローディング完了時の処理
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// パララックス効果（ヒーロー背景）
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
});

// 数値のカウントアップアニメーション
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 料理の価格表示アニメーション
const priceElements = document.querySelectorAll('.price');
const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const price = entry.target.textContent.replace(/[^0-9]/g, '');
            entry.target.textContent = '¥';
            animateValue(entry.target, 0, parseInt(price), 1000);
            priceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

priceElements.forEach(el => {
    priceObserver.observe(el);
});