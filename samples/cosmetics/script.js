// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ヘッダーのスクロール時の挙動
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ヘッダーの背景を変更
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--bg-white)';
        header.style.backdropFilter = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// アニメーション（Intersection Observer）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// フェードインアニメーション対象要素
document.querySelectorAll('.concept-item, .ingredient-item, .usage-step, .review-card, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    fadeInObserver.observe(el);
});

// 数値カウントアップアニメーション
function animateNumber(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 統計数値のアニメーション
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('%')) {
                    const number = parseInt(text);
                    animateNumber(stat, 0, number, 2000, '%');
                } else if (text.includes('/')) {
                    // 評価の場合（例: 4.8/5）
                    const rating = parseFloat(text);
                    let current = 0;
                    const interval = setInterval(() => {
                        current += 0.1;
                        if (current >= rating) {
                            stat.textContent = rating + '/5.0';
                            clearInterval(interval);
                        } else {
                            stat.textContent = current.toFixed(1) + '/5.0';
                        }
                    }, 50);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reviews-stats').forEach(el => {
    statsObserver.observe(el);
});

// FAQアコーディオン
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === 'flex';
        
        // 他のFAQを閉じる
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.display = 'none';
        });
        
        // クリックしたFAQを開閉
        if (!isOpen) {
            answer.style.display = 'flex';
        }
    });
});

// 初期状態でFAQを閉じる
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

// アニメーションクラスの追加
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .hero-image img {
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .floating-badge {
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// 購入ボタンクリック
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.href && btn.href.includes('#purchase')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#purchase').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// 電話番号クリック時のトラッキング（デモ用）
document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
    tel.addEventListener('click', () => {
        console.log('Phone number clicked');
    });
});