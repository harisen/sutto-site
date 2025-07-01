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
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'var(--bg-white)';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
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
document.querySelectorAll('.problem-item, .service-card, .flow-step, .testimonial-card, .faq-item').forEach(el => {
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
        element.textContent = currentValue.toLocaleString() + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ヒーローセクションの統計アニメーション
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('件')) {
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    animateNumber(stat, 0, number, 2000, '件');
                } else if (text.includes('%')) {
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    animateNumber(stat, 0, number, 2000, '%');
                } else if (text.includes('年')) {
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    animateNumber(stat, 0, number, 1500, '年');
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-stats').forEach(el => {
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
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
        });
        
        // クリックしたFAQを開閉
        if (!isOpen) {
            answer.style.display = 'flex';
            question.classList.add('active');
        }
    });
});

// 初期状態でFAQを閉じる
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

// フローステップのアニメーション
const flowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, observerOptions);

document.querySelectorAll('.flow-step').forEach((el, index) => {
    el.style.transitionDelay = `${index * 150}ms`;
});

// アニメーションクラスの追加
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .hero-badge {
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .faq-question.active {
        background: var(--secondary-color);
    }
    
    .stat-number {
        font-variant-numeric: tabular-nums;
    }
`;
document.head.appendChild(style);

// 電話番号クリック時のトラッキング（デモ用）
document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
    tel.addEventListener('click', () => {
        console.log('Phone number clicked:', tel.href);
    });
});

// メールリンククリック時のトラッキング（デモ用）
document.querySelectorAll('a[href^="mailto:"]').forEach(email => {
    email.addEventListener('click', () => {
        console.log('Email link clicked:', email.href);
    });
});