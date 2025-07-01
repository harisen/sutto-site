// メニュータブの切り替え
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuPanels = document.querySelectorAll('.menu-panel');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetMenu = this.getAttribute('data-menu');
            
            // タブの切り替え
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // パネルの切り替え
            menuPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetMenu) {
                    panel.classList.add('active');
                }
            });
        });
    });
});

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

// モバイルメニューの開閉
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

mobileMenuToggle.addEventListener('click', function() {
    nav.classList.toggle('mobile-active');
    this.classList.toggle('active');
});

// ヘッダーのスクロール時の影
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 外部リンクのクリックトラッキング（オプション）
document.querySelectorAll('.external-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Google Analytics等でトラッキングする場合はここに記述
        console.log('External link clicked:', this.textContent);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 監視する要素を追加
document.querySelectorAll('.concept-item, .menu-item, .testimonial-card, .scene-card, .course-item').forEach(el => {
    observer.observe(el);
});

// 数値のカウントアップアニメーション
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            // 最終的な値を設定（小数点や単位を含む場合）
            if (obj.getAttribute('data-suffix')) {
                obj.innerHTML = end + obj.getAttribute('data-suffix');
            }
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
                // 小数点を含む場合（例：4.8）
                const num = parseFloat(value);
                el.innerHTML = '0.0';
                setTimeout(() => {
                    el.innerHTML = num.toFixed(1);
                }, 100);
            } else if (value.includes('%')) {
                // パーセンテージの場合
                const num = parseInt(value);
                el.setAttribute('data-suffix', '%');
                animateValue(el, 0, num, 2000);
            } else if (value.includes('+')) {
                // プラス記号を含む場合
                const num = parseInt(value.replace('+', ''));
                el.setAttribute('data-suffix', '+');
                animateValue(el, 0, num, 2000);
            } else {
                // 通常の数値
                const num = parseInt(value);
                animateValue(el, 0, num, 2000);
            }
            
            statsObserver.unobserve(el);
        }
    });
});

statNumbers.forEach(el => {
    statsObserver.observe(el);
});

// 現在の日付を予約フォームの最小値に設定
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    
    dateInput.min = `${year}-${month}-${day}`;
    dateInput.value = `${year}-${month}-${day}`;
}

// モバイルメニューのスタイル追加
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav {
            display: none;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--bg-white);
            flex-direction: column;
            padding: var(--spacing-md);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav.mobile-active {
            display: flex;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);