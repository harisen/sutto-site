// GSAP アニメーション設定
document.addEventListener('DOMContentLoaded', function() {
    
    // GSAPプラグイン登録
    gsap.registerPlugin(ScrollTrigger);
    
    // ヒーローセクションのアニメーション
    gsap.timeline()
        .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-note', {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        .from('.hero-badges .badge', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.btn-animated', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.2');
    
    // 料金カードのスクロールアニメーション
    gsap.utils.toArray('.pricing-card').forEach((card, index) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // ホバー時の3D回転
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                rotateY: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // 価格のカウントアップアニメーションを削除
    
    // パーティクル背景の生成
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-bg';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
    // マウスフォロワー
    const mouseFollower = document.createElement('div');
    mouseFollower.className = 'mouse-follower';
    document.body.appendChild(mouseFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        mouseFollower.style.left = followerX + 'px';
        mouseFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // セクションタイトルのアニメーション
    gsap.utils.toArray('.section-title').forEach(title => {
        const letters = title.textContent.split('').map(letter => 
            `<span class="letter">${letter}</span>`
        ).join('');
        title.innerHTML = letters;
        
        gsap.from(title.querySelectorAll('.letter'), {
            y: 50,
            opacity: 0,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // AI技術セクションのアニメーション
    const aiSection = document.querySelector('.ai-development');
    if (aiSection) {
        gsap.from('.ai-feature', {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aiSection,
                start: 'top 70%'
            }
        });
        
        gsap.from('.ai-image img', {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aiSection,
                start: 'top 70%'
            }
        });
    }
    
    // ボタンクリック時の花火エフェクト
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            for (let i = 0; i < 8; i++) {
                const spark = document.createElement('div');
                spark.style.position = 'absolute';
                spark.style.width = '4px';
                spark.style.height = '4px';
                spark.style.background = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 4)];
                spark.style.borderRadius = '50%';
                spark.style.left = x + 'px';
                spark.style.top = y + 'px';
                spark.style.pointerEvents = 'none';
                this.appendChild(spark);
                
                const angle = (Math.PI * 2 * i) / 8;
                const velocity = 50 + Math.random() * 50;
                
                gsap.to(spark, {
                    x: Math.cos(angle) * velocity,
                    y: Math.sin(angle) * velocity,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete: () => spark.remove()
                });
            }
        });
    });
    
    // スクロール進行インジケーター
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
});