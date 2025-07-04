// PowerFit 横浜店 - JavaScript

// カウントダウンタイマー
function updateCountdown() {
    // 2月末日を設定（2026年2月28日23:59:59）
    const endDate = new Date('2026-02-28T23:59:59');
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // キャンペーン終了
        document.querySelector('.countdown-wrapper').innerHTML = '<p class="countdown-label">キャンペーンは終了しました</p>';
    }
}

// 1秒ごとに更新
setInterval(updateCountdown, 1000);
updateCountdown(); // 初回実行

// FAQアコーディオン
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // 他のFAQを閉じる
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // クリックしたFAQをトグル
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// スムーススクロール
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// フォーム関連の処理は削除（フォームを使用しないため）

// スクロールアニメーション
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card, .process-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ページ読み込み後にアニメーションを初期化
window.addEventListener('load', animateOnScroll);

// ヒーローセクションのパララックス効果（無効化 - 文字の重なり問題対応）
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     
//     if (hero && scrolled < 800) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// モバイルメニュー用（将来的な拡張用）
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// 数値のカウントアップアニメーション
function animateNumbers() {
    const numbers = document.querySelectorAll('.price-number');
    
    numbers.forEach(number => {
        const originalText = number.textContent;
        const target = parseInt(originalText.replace(/,/g, ''));
        
        if (isNaN(target)) return; // 数値でない場合はスキップ
        
        const duration = 2000; // 2秒間
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        let hasAnimated = false; // アニメーション実行フラグ
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true; // 一度だけ実行
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        number.textContent = Math.floor(current).toLocaleString();
                    }, 16);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(number);
    });
}

// ページ読み込み後に数値アニメーションを初期化
window.addEventListener('load', animateNumbers);