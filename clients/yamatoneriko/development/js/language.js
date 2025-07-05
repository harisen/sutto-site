// Language translations
const translations = {
    ja: {
        // Header
        logo: "yamatoneriko",
        nav: {
            about: "ABOUT",
            service: "SERVICE", 
            works: "WORKS",
            contact: "CONTACT"
        },
        
        // Hero section
        hero: {
            tagline: "あなたの世界観、まるごとカタチにします。",
            subtitle: "「届けたい想い」が伝わるデザインを。",
            description: "イラストからWeb、グッズまで一貫制作",
            cta: "まずは相談してみる"
        },
        
        // Problems section
        problems: {
            title: "こんなお悩みありませんか？",
            subtitle: "クリエイティブな課題を、一緒に解決しましょう"
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "yamatonerikoが選ばれる理由",
            subtitle: "創造性と戦略性を兼ね備えた、トータルクリエイティブサポート",
            item1: {
                title: "イラスト制作",
                description: "キャラクターから背景まで、世界観に合わせたイラストを制作"
            },
            item2: {
                title: "デザイン制作",
                description: "ロゴ、名刺、チラシなど、ブランディングに必要なデザイン全般"
            },
            item3: {
                title: "Web制作",
                description: "LP、HP制作から運用まで。集客につながるWebサイトを"
            },
            item4: {
                title: "グッズ制作",
                description: "アクリルキーホルダーからTシャツまで、オリジナルグッズの企画・制作"
            }
        },
        
        // Works section
        works: {
            title: "制作実績",
            subtitle: "さまざまなクリエイティブワークをご紹介",
            viewMore: "もっと見る"
        },
        
        // Testimonials section
        testimonials: {
            title: "お客様の声",
            subtitle: "ご利用いただいた皆様からの嬉しいお言葉"
        },
        
        // FAQ section
        faq: {
            title: "よくあるご質問",
            subtitle: "お客様からよくいただくご質問にお答えします",
            items: [
                {
                    question: "初めてでも大丈夫ですか？",
                    answer: "はい、もちろん大丈夫です。ゼロからの世界観づくりもご一緒に伴走いたします。ヒアリングを重視し、お客様のイメージを丁寧に形にしていきます。"
                },
                {
                    question: "どのくらいの予算が必要ですか？",
                    answer: "内容により異なりますが、イラスト単体であれば5万円〜、総合的なブランディングは15万円〜ご相談可能です。まずはお気軽にご相談ください。"
                },
                {
                    question: "SNS用画像やバナーだけでも依頼できますか？",
                    answer: "はい、単発でのご依頼も承っております。継続的なSNS運用サポートも可能ですので、ご要望に合わせて柔軟に対応いたします。"
                },
                {
                    question: "グッズの入稿や業者選びもお願いできますか？",
                    answer: "ご希望があれば入稿サポート・印刷所のご紹介も可能です。品質とコストのバランスを考慮した最適な業者をご提案いたします。"
                },
                {
                    question: "納品までの流れを教えてください",
                    answer: "お問い合わせ→ヒアリング→ご提案・お見積もり→制作→確認・修正→納品という流れになります。詳しくは下記の「サービスの流れ」をご参照ください。"
                }
            ]
        },
        
        // Process section
        process: {
            title: "サービスの流れ",
            subtitle: "ご相談から納品まで、スムーズにサポートします",
            steps: [
                {
                    title: "お問い合わせ",
                    description: "まずはお気軽にご相談ください。ご要望やお悩みを丁寧にヒアリングいたします。"
                },
                {
                    title: "ご提案・お見積もり",
                    description: "内容に応じた最適なプランをご提案。費用感も明確にお伝えします。"
                },
                {
                    title: "制作・確認",
                    description: "ラフ制作から始まり、フィードバックを反映しながら完成度を高めていきます。"
                },
                {
                    title: "納品・アフターサポート",
                    description: "データ納品後も、必要に応じて運用のフォローをいたします。"
                }
            ]
        },
        
        // Contact section
        contact: {
            title: "CONTACT",
            subtitle: "お問い合わせ",
            description: "制作のご依頼・ご相談はお気軽に",
            form: {
                name: "お名前",
                email: "メールアドレス", 
                subject: "件名",
                message: "お問い合わせ内容",
                submit: "送信する"
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 yamatoneriko All Rights Reserved.",
            links: {
                about: "運営者情報",
                terms: "利用規約",
                privacy: "プライバシーポリシー",
                law: "特定商取引法に基づく表記"
            }
        },
        
        // Portfolio items
        portfolioItems: [
            {
                title: "キャラクターデザイン",
                description: "オリジナルキャラクター制作",
                tags: ["イラスト", "キャラクター"]
            },
            {
                title: "Webサイトデザイン",
                description: "コーポレートサイト制作",
                tags: ["Web", "UI/UX"]
            },
            {
                title: "グッズデザイン",
                description: "オリジナルグッズ展開",
                tags: ["グッズ", "プロダクト"]
            },
            {
                title: "SNS素材",
                description: "SNS用ビジュアル制作",
                tags: ["イラスト", "SNS"]
            },
            {
                title: "ロゴデザイン",
                description: "ブランドロゴ制作",
                tags: ["ロゴ", "ブランディング"]
            },
            {
                title: "イラストレーション",
                description: "書籍挿絵・表紙デザイン",
                tags: ["イラスト", "出版"]
            }
        ]
    },
    
    en: {
        // Header
        logo: "yamatoneriko",
        nav: {
            about: "ABOUT",
            service: "SERVICE",
            works: "WORKS", 
            contact: "CONTACT"
        },
        
        // Hero section
        hero: {
            tagline: "Bringing Your Entire Worldview to Life",
            subtitle: "Design that Conveys What You Want to Deliver",
            description: "Comprehensive creation from illustrations to web and merchandise",
            cta: "Get Started with a Consultation"
        },
        
        // Problems section
        problems: {
            title: "Do You Have These Concerns?",
            subtitle: "Let's solve your creative challenges together"
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "Why Choose yamatoneriko",
            subtitle: "Total creative support combining creativity and strategy",
            item1: {
                title: "Illustration",
                description: "Creating illustrations from characters to backgrounds that match your worldview"
            },
            item2: {
                title: "Design",
                description: "All design needs for branding including logos, business cards, and flyers"
            },
            item3: {
                title: "Web Development",
                description: "From LP and website creation to operation. Websites that lead to customer acquisition"
            },
            item4: {
                title: "Merchandise",
                description: "Planning and production of original goods from acrylic keychains to T-shirts"
            }
        },
        
        // Works section
        works: {
            title: "Portfolio",
            subtitle: "Showcasing our diverse creative works",
            viewMore: "View More"
        },
        
        // Testimonials section
        testimonials: {
            title: "Client Testimonials",
            subtitle: "Happy words from our valued clients"
        },
        
        // FAQ section
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Answers to common questions from our clients",
            items: [
                {
                    question: "Is it okay if I'm a first-timer?",
                    answer: "Yes, absolutely! We'll accompany you in creating your worldview from scratch. We emphasize listening to carefully shape your vision."
                },
                {
                    question: "What budget do I need?",
                    answer: "It varies by content, but illustrations start from 50,000 yen, and comprehensive branding starts from 150,000 yen. Please feel free to consult with us."
                },
                {
                    question: "Can I order just SNS images or banners?",
                    answer: "Yes, we accept one-off requests. We can also provide ongoing SNS management support, flexibly accommodating your needs."
                },
                {
                    question: "Can you help with merchandise submission and vendor selection?",
                    answer: "If desired, we can provide submission support and printing company recommendations. We'll suggest optimal vendors considering quality and cost balance."
                },
                {
                    question: "What's the delivery process?",
                    answer: "The flow is: Inquiry → Consultation → Proposal/Quote → Production → Review/Revision → Delivery. Please see 'Service Flow' below for details."
                }
            ]
        },
        
        // Process section
        process: {
            title: "Service Flow",
            subtitle: "Smooth support from consultation to delivery",
            steps: [
                {
                    title: "Inquiry",
                    description: "Feel free to contact us. We'll carefully listen to your needs and concerns."
                },
                {
                    title: "Proposal & Quote",
                    description: "We'll propose the optimal plan based on your needs and clearly communicate costs."
                },
                {
                    title: "Production & Review",
                    description: "Starting from rough drafts, we'll refine the work while incorporating your feedback."
                },
                {
                    title: "Delivery & Support",
                    description: "After data delivery, we'll provide operational support as needed."
                }
            ]
        },
        
        // Contact section  
        contact: {
            title: "CONTACT",
            subtitle: "Get in Touch",
            description: "Feel free to contact us for production requests and consultations",
            form: {
                name: "Name",
                email: "Email Address",
                subject: "Subject",
                message: "Message",
                submit: "Send Message"
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 yamatoneriko All Rights Reserved.",
            links: {
                about: "About Us",
                terms: "Terms of Service",
                privacy: "Privacy Policy",
                law: "Legal Notice"
            }
        },
        
        // Portfolio items
        portfolioItems: [
            {
                title: "Character Design",
                description: "Original character creation",
                tags: ["Illustration", "Character"]
            },
            {
                title: "Website Design",
                description: "Corporate website production",
                tags: ["Web", "UI/UX"]
            },
            {
                title: "Merchandise Design",
                description: "Original goods development",
                tags: ["Goods", "Product"]
            },
            {
                title: "SNS Materials",
                description: "Visual creation for social media",
                tags: ["Illustration", "SNS"]
            },
            {
                title: "Logo Design",
                description: "Brand logo creation",
                tags: ["Logo", "Branding"]
            },
            {
                title: "Illustration",
                description: "Book illustrations and cover design",
                tags: ["Illustration", "Publishing"]
            }
        ]
    },
    
    zh: {
        // Header
        logo: "yamatoneriko",
        nav: {
            about: "關於我們",
            service: "服務項目",
            works: "作品集",
            contact: "聯絡我們"
        },
        
        // Hero section
        hero: {
            tagline: "將您的世界觀完整呈現",
            subtitle: "傳達您想表達的心意的設計",
            description: "從插畫到網站、周邊商品的一站式製作",
            cta: "立即諮詢"
        },
        
        // Problems section
        problems: {
            title: "您有這些困擾嗎？",
            subtitle: "讓我們一起解決您的創意挑戰"
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "選擇yamatoneriko的理由",
            subtitle: "結合創造力與策略的全方位創意支援",
            item1: {
                title: "插畫製作",
                description: "從角色到背景，製作符合世界觀的插畫"
            },
            item2: {
                title: "設計製作",
                description: "標誌、名片、傳單等品牌所需的整體設計"
            },
            item3: {
                title: "網站製作", 
                description: "從登陸頁、官網製作到營運。打造能吸引客戶的網站"
            },
            item4: {
                title: "周邊商品製作",
                description: "從壓克力吊飾到T恤，原創商品的企劃與製作"
            }
        },
        
        // Works section
        works: {
            title: "作品集",
            subtitle: "展示我們多樣化的創意作品",
            viewMore: "查看更多"
        },
        
        // Testimonials section
        testimonials: {
            title: "客戶評價",
            subtitle: "來自滿意客戶的真心推薦"
        },
        
        // FAQ section
        faq: {
            title: "常見問題",
            subtitle: "回答客戶常見的疑問",
            items: [
                {
                    question: "第一次委託也可以嗎？",
                    answer: "當然可以！我們會陪伴您從零開始建立世界觀。重視傾聽，仔細將您的想法實現。"
                },
                {
                    question: "需要多少預算？",
                    answer: "視內容而定，插畫從5萬日圓起，綜合品牌塑造從15萬日圓起。歡迎隨時諮詢。"
                },
                {
                    question: "只要SNS圖片或橫幅也可以嗎？",
                    answer: "可以，我們接受單次委託。也可提供持續的SNS管理支援，靈活滿足您的需求。"
                },
                {
                    question: "周邊商品的入稿和廠商選擇也可以幫忙嗎？",
                    answer: "如果需要，我們可以提供入稿支援和印刷廠推薦。考慮品質與成本平衡，提供最佳建議。"
                },
                {
                    question: "交件流程是什麼？",
                    answer: "流程為：諮詢→洽談→提案/報價→製作→確認/修改→交件。詳情請參閱下方「服務流程」。"
                }
            ]
        },
        
        // Process section
        process: {
            title: "服務流程",
            subtitle: "從諮詢到交件，提供順暢的支援",
            steps: [
                {
                    title: "諮詢",
                    description: "歡迎聯絡我們。我們會仔細傾聽您的需求和困擾。"
                },
                {
                    title: "提案與報價",
                    description: "根據您的需求提供最佳方案，並清楚說明費用。"
                },
                {
                    title: "製作與確認",
                    description: "從草稿開始，根據您的反饋不斷完善作品。"
                },
                {
                    title: "交件與後續支援",
                    description: "資料交付後，我們也會根據需要提供營運支援。"
                }
            ]
        },
        
        // Contact section
        contact: {
            title: "聯絡我們",
            subtitle: "諮詢表單",
            description: "歡迎隨時諮詢製作委託事宜",
            form: {
                name: "姓名",
                email: "電子郵件",
                subject: "主旨",
                message: "諮詢內容",
                submit: "送出"
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 yamatoneriko 版權所有",
            links: {
                about: "營運者資訊",
                terms: "使用條款",
                privacy: "隱私權政策",
                law: "特定商業交易法相關標示"
            }
        },
        
        // Portfolio items
        portfolioItems: [
            {
                title: "角色設計",
                description: "原創角色製作",
                tags: ["插畫", "角色"]
            },
            {
                title: "網站設計",
                description: "企業網站製作",
                tags: ["網頁", "UI/UX"]
            },
            {
                title: "周邊設計",
                description: "原創周邊展開",
                tags: ["周邊", "產品"]
            },
            {
                title: "SNS素材",
                description: "社群媒體視覺製作",
                tags: ["插畫", "SNS"]
            },
            {
                title: "標誌設計",
                description: "品牌標誌製作",
                tags: ["標誌", "品牌"]
            },
            {
                title: "插畫作品",
                description: "書籍插圖與封面設計",
                tags: ["插畫", "出版"]
            }
        ]
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'ja';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Create language switcher if it doesn't exist
    if (!document.querySelector('.language-switcher')) {
        createLanguageSwitcher();
    }
    
    // Apply translations
    updateLanguage(currentLang);
});

// Create language switcher UI
function createLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
        <button class="lang-btn ${currentLang === 'ja' ? 'active' : ''}" data-lang="ja">日本語</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">English</button>
        <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" data-lang="zh">繁體中文</button>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .language-switcher {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 1001;
            display: flex;
            gap: 5px;
            background: rgba(255, 255, 255, 0.9);
            padding: 5px;
            border-radius: 25px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .lang-btn {
            padding: 8px 16px;
            border: none;
            background: transparent;
            color: var(--color-gray);
            font-size: 14px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Noto Sans JP', sans-serif;
        }
        
        .lang-btn:hover {
            background: var(--color-yellow);
            color: var(--color-dark);
        }
        
        .lang-btn.active {
            background: var(--color-yellow);
            color: var(--color-dark);
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .language-switcher {
                top: 70px;
                right: 10px;
                padding: 3px;
            }
            
            .lang-btn {
                padding: 6px 12px;
                font-size: 12px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to body
    document.body.appendChild(switcher);
    
    // Add event listeners
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            switchLanguage(lang);
        });
    });
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update page content
    updateLanguage(lang);
}

// Update page content with translations
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update page title
    document.title = `yamatoneriko | ${t.hero.tagline}`;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links li a');
    if (navLinks.length >= 3) {
        navLinks[0].textContent = t.nav.about;
        navLinks[1].textContent = 'Portfolio';  // Keep Portfolio in English
        navLinks[2].textContent = 'Flow';  // Keep Flow in English
        // Last button is the CTA button, update its content
        if (navLinks[3]) {
            navLinks[3].innerHTML = t.hero.cta + ' <i class="fas fa-arrow-right"></i>';
        }
    }
    
    // Update hero section
    const heroH1 = document.querySelector('.hero-text h1');
    if (heroH1) {
        // Split tagline for proper formatting
        const taglineParts = t.hero.tagline.split('、');
        if (lang === 'ja') {
            heroH1.innerHTML = `あなたの<span class="highlight">世界観</span>、<br>まるごとカタチにします。`;
        } else if (lang === 'en') {
            heroH1.innerHTML = `Bringing Your Entire <span class="highlight">Worldview</span><br>to Life`;
        } else if (lang === 'zh') {
            heroH1.innerHTML = `將您的<span class="highlight">世界觀</span><br>完整呈現`;
        }
    }
    
    const heroP = document.querySelector('.hero-text p');
    if (heroP) {
        if (lang === 'ja') {
            heroP.innerHTML = `イラスト・Web・グッズまで、一貫制作でブランド力アップ。<br>企画段階からご相談OK。"届けたい想い"が伝わるデザインを。`;
        } else {
            heroP.innerHTML = t.hero.description + '<br>' + t.hero.subtitle;
        }
    }
    
    const heroCta = document.querySelector('.hero-buttons .cta-button');
    if (heroCta) {
        heroCta.innerHTML = `<i class="fas fa-sparkles"></i> ${t.hero.cta}`;
    }
    
    // Update problems section
    const problemsTitle = document.querySelector('.problems .section-title h2');
    if (problemsTitle) problemsTitle.textContent = t.problems.title;
    
    const problemsSubtitle = document.querySelector('.problems .section-subtitle');
    if (problemsSubtitle) problemsSubtitle.textContent = t.problems.subtitle;
    
    // Update features section (Why choose yamatoneriko)
    const featuresTitle = document.querySelector('.features .section-title h2');
    if (featuresTitle) featuresTitle.textContent = t.features.title;
    
    const featuresSubtitle = document.querySelector('.features .section-subtitle');
    if (featuresSubtitle) featuresSubtitle.textContent = t.features.subtitle;
    
    const featureItems = document.querySelectorAll('.feature-card');
    if (featureItems.length >= 4) {
        featureItems[0].querySelector('h3').textContent = t.features.item1.title;
        featureItems[0].querySelector('p').textContent = t.features.item1.description;
        
        featureItems[1].querySelector('h3').textContent = t.features.item2.title;
        featureItems[1].querySelector('p').textContent = t.features.item2.description;
        
        featureItems[2].querySelector('h3').textContent = t.features.item3.title;
        featureItems[2].querySelector('p').textContent = t.features.item3.description;
        
        featureItems[3].querySelector('h3').textContent = t.features.item4.title;
        featureItems[3].querySelector('p').textContent = t.features.item4.description;
    }
    
    // Update works section
    const worksTitle = document.querySelector('.portfolio .section-title h2');
    if (worksTitle) worksTitle.textContent = t.works.title;
    
    const worksSubtitle = document.querySelector('.portfolio .section-subtitle');
    if (worksSubtitle) worksSubtitle.textContent = t.works.subtitle;
    
    // No view more button in current HTML
    
    // Update contact section (CTA section)
    const ctaTitle = document.querySelector('.cta-section h2');
    if (ctaTitle) {
        if (lang === 'ja') {
            ctaTitle.textContent = 'あなたの想いを、カタチにしませんか？';
        } else if (lang === 'en') {
            ctaTitle.textContent = 'Ready to Bring Your Ideas to Life?';
        } else if (lang === 'zh') {
            ctaTitle.textContent = '準備好將您的想法實現了嗎？';
        }
    }
    
    const ctaP = document.querySelector('.cta-section p');
    if (ctaP) ctaP.textContent = t.contact.description;
    
    // Update form placeholders
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput) nameInput.placeholder = t.contact.form.name;
    
    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput) emailInput.placeholder = t.contact.form.email;
    
    const subjectInput = document.querySelector('input[name="subject"]');
    if (subjectInput) subjectInput.placeholder = t.contact.form.subject;
    
    const messageInput = document.querySelector('textarea[name="message"]');
    if (messageInput) messageInput.placeholder = t.contact.form.message;
    
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = t.contact.form.submit;
    
    // Update footer
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t.footer.copyright;
    
    // Update footer links - they are in the second footer-links div
    const footerLinksDivs = document.querySelectorAll('.footer-links');
    if (footerLinksDivs.length >= 2) {
        const links = footerLinksDivs[1].querySelectorAll('a');
        if (links.length >= 4) {
            links[0].textContent = t.footer.links.about;
            links[1].textContent = t.footer.links.terms;
            links[2].textContent = t.footer.links.privacy;
            links[3].textContent = t.footer.links.law;
        }
    }
    
    // Update testimonials section
    const testimonialsTitle = document.querySelector('.testimonials .section-title h2');
    if (testimonialsTitle) testimonialsTitle.textContent = t.testimonials.title;
    
    const testimonialsSubtitle = document.querySelector('.testimonials .section-subtitle');
    if (testimonialsSubtitle) testimonialsSubtitle.textContent = t.testimonials.subtitle;
    
    // Update FAQ section
    const faqTitle = document.querySelector('.faq .section-title h2');
    if (faqTitle) faqTitle.textContent = t.faq.title;
    
    const faqSubtitle = document.querySelector('.faq .section-subtitle');
    if (faqSubtitle) faqSubtitle.textContent = t.faq.subtitle;
    
    // Update FAQ items
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqQuestions.length >= 5 && faqAnswers.length >= 5) {
        for (let i = 0; i < Math.min(5, faqQuestions.length); i++) {
            // Update question text (remove icon)
            const questionText = faqQuestions[i].childNodes[0];
            if (questionText && questionText.nodeType === 3) {
                questionText.textContent = t.faq.items[i].question;
            }
            // Update answer
            if (faqAnswers[i]) {
                faqAnswers[i].textContent = t.faq.items[i].answer;
            }
        }
    }
    
    // Update process section
    const processTitle = document.querySelector('.process .section-title h2');
    if (processTitle) processTitle.textContent = t.process.title;
    
    const processSubtitle = document.querySelector('.process .section-subtitle');
    if (processSubtitle) processSubtitle.textContent = t.process.subtitle;
    
    // Update process steps
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length >= 4) {
        for (let i = 0; i < 4; i++) {
            const h3 = processSteps[i].querySelector('h3');
            const p = processSteps[i].querySelector('p');
            if (h3) h3.textContent = t.process.steps[i].title;
            if (p) p.textContent = t.process.steps[i].description;
        }
    }
    
    // Update portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length >= 6 && t.portfolioItems) {
        for (let i = 0; i < Math.min(6, portfolioItems.length); i++) {
            const h3 = portfolioItems[i].querySelector('.portfolio-info h3');
            const p = portfolioItems[i].querySelector('.portfolio-info p');
            const tags = portfolioItems[i].querySelectorAll('.portfolio-tag');
            
            if (h3) h3.textContent = t.portfolioItems[i].title;
            if (p) p.textContent = t.portfolioItems[i].description;
            if (tags.length >= 2) {
                tags[0].textContent = t.portfolioItems[i].tags[0];
                tags[1].textContent = t.portfolioItems[i].tags[1];
            }
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    
    // Debug logging
    console.log('Language changed to:', lang);
}