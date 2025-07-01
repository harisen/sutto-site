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
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// スケジュールタブ切り替え
const tabButtons = document.querySelectorAll('.tab-button');
const scheduleDays = document.querySelectorAll('.schedule-day');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        
        // アクティブクラスの切り替え
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // スケジュール表示の切り替え
        scheduleDays.forEach(schedule => {
            schedule.classList.remove('active');
            if (schedule.id === `day${day}`) {
                schedule.classList.add('active');
            }
        });
    });
});

// カウントアップアニメーション
function animateValue(element, start, end, duration) {
    const startTimestamp = Date.now();
    const step = () => {
        const timestamp = Date.now();
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (element.textContent.includes('+')) {
            element.textContent = value + '+';
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 統計数値のアニメーション
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = stat.textContent;
                let end = 0;
                
                if (value.includes('+')) {
                    end = parseInt(value.replace('+', ''));
                } else {
                    end = parseInt(value);
                }
                
                animateValue(stat, 0, end, 2000);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// フェードインアニメーション
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
document.querySelectorAll('.about-card, .speaker-card, .ticket-card, .timeline-item').forEach(el => {
    fadeObserver.observe(el);
});

// 早割カウントダウンタイマー
function updateCountdown() {
    const deadline = new Date('2025-02-15T23:59:59');
    const now = new Date();
    const diff = deadline - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const countdownElements = document.querySelectorAll('.ticket-deadline');
        countdownElements.forEach(el => {
            el.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 4V8L10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                残り${days}日${hours}時間${minutes}分
            `;
        });
    }
}

// カウントダウンを1分ごとに更新
setInterval(updateCountdown, 60000);
updateCountdown();

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gridPattern = document.querySelector('.grid-pattern');
    
    if (gridPattern) {
        gridPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// 登壇者カードのホバーエフェクト
const speakerCards = document.querySelectorAll('.speaker-card');
speakerCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) scale(1)';
    });
});

// タイムラインアイテムの順次表示
const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.6s ease-out';
    timelineObserver.observe(item);
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

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // アニメーションのリセット
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
    });
});