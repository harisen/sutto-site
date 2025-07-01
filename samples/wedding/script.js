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
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScrollTop = scrollTop;
});

// パララックス効果
const heroImage = document.querySelector('.hero-bg img');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    heroImage.style.transform = `translateY(${parallax}px)`;
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
document.querySelectorAll('.benefit-item, .concept-item, .plan-card, .fair-card, .voice-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    fadeInObserver.observe(el);
});

// ギャラリーのアニメーション
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            galleryObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    el.style.transitionDelay = `${index * 100}ms`;
    galleryObserver.observe(el);
});

// ギャラリーモーダル（簡易版）
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="modal-close">&times;</span>
            </div>
        `;
        document.body.appendChild(modal);
        
        // モーダルを閉じる
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.className === 'modal-close') {
                modal.remove();
            }
        });
    });
});

// アニメーションクラスの追加
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .hero-badge {
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    .benefit-icon {
        animation: bounce 2s ease-in-out infinite;
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
    
    .gallery-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 40px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        transform: scale(1.2);
    }
`;
document.head.appendChild(style);

// フェア日程のカウントダウン（デモ用）
document.querySelectorAll('.fair-date').forEach(date => {
    const month = parseInt(date.querySelector('.month').textContent);
    const day = parseInt(date.querySelector('.day').textContent);
    const targetDate = new Date(new Date().getFullYear(), month - 1, day);
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0 && diffDays <= 7) {
        const badge = document.createElement('span');
        badge.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            background: #FF6B6B;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        `;
        badge.textContent = `残${diffDays}日`;
        date.style.position = 'relative';
        date.appendChild(badge);
    }
});

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