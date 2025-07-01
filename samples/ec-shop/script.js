// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 60;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ヘッダーのスクロール時の影
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// グラフアニメーション
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const graphObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const graphBars = entry.target.querySelectorAll('.graph-fill');
            graphBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                setTimeout(() => {
                    bar.style.width = percent + '%';
                }, 100);
            });
            graphObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const graphContainer = document.querySelector('.graph-container');
if (graphContainer) {
    graphObserver.observe(graphContainer);
}

// FAQアコーディオン
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // 他のFAQを閉じる
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // 現在のFAQをトグル
        item.classList.toggle('active');
    });
});

// 電話番号クリック時のアナリティクス（オプション）
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Phone number clicked:', this.href);
        // Google Analytics等のイベントトラッキングを追加可能
    });
});

// メールアドレスクリック時のアナリティクス（オプション）
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Email address clicked:', this.href);
        // Google Analytics等のイベントトラッキングを追加可能
    });
});

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// 監視する要素を追加
document.querySelectorAll('.problem-item, .feature-card, .testimonial-card, .pricing-card').forEach(el => {
    fadeObserver.observe(el);
});

// カウントアップアニメーション
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        if (obj.innerHTML.includes('.')) {
            // 小数点を含む場合
            const value = (progress * (end - start) + start).toFixed(1);
            obj.innerHTML = value;
        } else if (obj.innerHTML.includes('%')) {
            // パーセンテージの場合
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = value + '%';
        } else {
            // 通常の数値
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = value.toLocaleString();
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 統計数値のアニメーション
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const value = el.innerText;
            
            if (value.includes('.')) {
                // 小数点を含む場合（例：4.7）
                const num = parseFloat(value);
                el.innerHTML = '0.0';
                animateValue(el, 0, num, 2000);
            } else if (value.includes('%')) {
                // パーセンテージの場合
                const num = parseInt(value);
                el.innerHTML = '0%';
                animateValue(el, 0, num, 2000);
            } else if (value.includes('/')) {
                // スラッシュを含む場合（評価など）
                // アニメーションなしでそのまま表示
            } else {
                // 通常の数値
                const num = parseInt(value.replace(/[^0-9]/g, ''));
                el.innerHTML = '0';
                animateValue(el, 0, num, 2000);
            }
            
            statsObserver.unobserve(el);
        }
    });
});

statNumbers.forEach(el => {
    statsObserver.observe(el);
});

// タイマー機能（緊急性を演出）
function updateTimer() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const diff = endOfDay - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timerElement = document.querySelector('.offer-timer');
    if (timerElement) {
        timerElement.textContent = `残り時間: ${hours}時間${minutes}分${seconds}秒`;
    }
}

// タイマーを1秒ごとに更新
setInterval(updateTimer, 1000);

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // 初期のグラフ幅を0に設定
    document.querySelectorAll('.graph-fill').forEach(bar => {
        bar.style.width = '0%';
    });
    
    // タイマーの初期表示
    updateTimer();
});