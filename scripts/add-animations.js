// Anime.jsアニメーション実装スクリプト
// アニメーションライブラリガイドラインに基づいて実装

const animationCode = `
<!-- Anime.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

<script>
// Anime.jsアニメーション
document.addEventListener('DOMContentLoaded', function() {
    // ヒーローセクションのアニメーション
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1200
    })
    .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
    })
    .add({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600
    }, '-=400')
    .add({
        targets: '.hero-actions .btn',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 600
    }, '-=200');

    // スクロールトリガーアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // カードのフェードイン
                if (entry.target.classList.contains('feature-card') || 
                    entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('pricing-card')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutQuad'
                    });
                }
                
                // 数値のカウントアップ
                if (entry.target.classList.contains('stat-number')) {
                    const finalValue = parseInt(entry.target.textContent);
                    anime({
                        targets: entry.target,
                        innerHTML: [0, finalValue],
                        round: 1,
                        duration: 2000,
                        easing: 'easeInOutExpo'
                    });
                }
                
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 監視対象の要素を追加
    document.querySelectorAll('.feature-card, .service-card, .pricing-card, .stat-number').forEach(el => {
        el.style.opacity = '0';
        animateOnScroll.observe(el);
    });

    // ボタンホバーアニメーション
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // グラフアニメーション（ECサイト用）
    const graphBars = document.querySelectorAll('.graph-fill');
    if (graphBars.length > 0) {
        const graphObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const percent = entry.target.getAttribute('data-percent');
                    anime({
                        targets: entry.target,
                        width: percent + '%',
                        duration: 1500,
                        easing: 'easeOutQuart'
                    });
                    graphObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        graphBars.forEach(bar => {
            bar.style.width = '0%';
            graphObserver.observe(bar);
        });
    }

    // タイムラインアニメーション（イベントサイト用）
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        anime({
            targets: '.timeline-item',
            opacity: [0, 1],
            translateX: [-30, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuad'
        });
    }

    // パララックススクロール効果
    let scrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // ヒーロー背景のパララックス
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            anime({
                targets: heroBg,
                translateY: scrollY * 0.5,
                duration: 0,
                easing: 'linear'
            });
        }
    });
});
</script>`;

const fs = require('fs');
const path = require('path');

// 各サンプルページにAnime.jsを追加
const samplesDir = path.join(__dirname, '..', 'samples');
const samples = ['beauty-salon', 'restaurant', 'ec-shop', 'event', 'professional'];

samples.forEach(sample => {
    const htmlPath = path.join(samplesDir, sample, 'index.html');
    
    try {
        let content = fs.readFileSync(htmlPath, 'utf8');
        
        // 既存のscript.jsの後にAnime.jsコードを追加
        if (!content.includes('anime.min.js')) {
            content = content.replace('</body>', animationCode + '\n</body>');
            fs.writeFileSync(htmlPath, content, 'utf8');
            console.log(`✅ Anime.js追加完了: ${sample}/index.html`);
        } else {
            console.log(`⚠️  既に追加済み: ${sample}/index.html`);
        }
    } catch (error) {
        console.error(`❌ エラー: ${sample}/index.html - ${error.message}`);
    }
});

console.log('\n🎉 Anime.jsの実装が完了しました！');
console.log('💡 ヒント: より高度なアニメーションを実装する場合は、');
console.log('   /documents/interactive-animation-guidelines.md を参照してください。');