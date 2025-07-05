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
            cta: "まずは相談してみる",
            cta2: "制作実績を見る",
            decorations: {
                illustration: "イラスト制作",
                web: "Web制作",
                goods: "グッズ展開"
            }
        },
        
        // Problems section
        problems: {
            title: "こんなお悩みありませんか？",
            subtitle: "クリエイティブな課題を、一緒に解決しましょう",
            cards: [
                {
                    title: "魅力的な見せ方がわからない",
                    description: "キャラクターやコンセプトはあるけど、どう表現すればいいか迷っている"
                },
                {
                    title: "世界観がバラバラに",
                    description: "デザインを複数人に依頼した結果、統一感がなくなってしまった"
                },
                {
                    title: "一貫して任せる人がいない",
                    description: "グッズやWeb、SNSまで総合的に相談できる相手が見つからない"
                }
            ]
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "yamatonerikoが選ばれる理由",
            subtitle: "創造性と戦略性を兼ね備えた、トータルクリエイティブサポート",
            item1: {
                title: "ビジュアル × プロモーション設計の両立",
                description: "ただ美しいだけでなく、ターゲットに「伝わる」デザインを。感性と戦略のバランスを大切に、あなたのメッセージを視覚化します。マーケティング視点も含めた総合的な提案で、ビジネスの成果につながるクリエイティブを実現します。"
            },
            item2: {
                title: "イラスト〜Webまで一貫制作でブレない世界観",
                description: "キャラクターデザインからWebサイト、各種グッズまで。すべてを一人で手がけるからこそ、細部まで統一された世界観を表現できます。ワンストップ対応で、時間もコストも効率的に。"
            },
            item3: {
                title: "SNSやファン心理を踏まえた企画提案力",
                description: "「拡散されるには？」「ファンに愛されるには？」実際にSNSやクラウドファンディングを運営してきた経験から、リアルなファン視点でのアドバイスが可能です。"
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
            viewMore: "もっと見る",
            filterButtons: {
                all: "すべて",
                illustration: "イラスト",
                web: "Web",
                goods: "グッズ"
            }
        },
        
        // Testimonials section
        testimonials: {
            title: "お客様の声",
            subtitle: "ご利用いただいた皆様からの嬉しいお言葉",
            items: [
                {
                    content: "キャラクターから世界観まで、すべてお任せできて本当に助かりました。統一感のあるデザインで、ファンの方々からも好評です！想像以上の仕上がりに大満足です。",
                    author: "A社様",
                    company: "エンタメ企業"
                }
            ]
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
            ctaDescription: "まずは無料相談から。お気軽にお問い合わせください。",
            ctaButtons: {
                consultation: "無料相談フォーム",
                email: "メールで相談"
            },
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
            about: {
                description: "イラストレーター兼デザイナーとして、あなたの世界観を視覚化します。<br>企画段階からの相談も歓迎。一貫した制作体制で、ブレない世界観を実現します。"
            },
            sectionTitles: {
                service: "サービス",
                other: "その他"
            },
            serviceLinks: {
                portfolio: "制作実績",
                flow: "サービスの流れ",
                faq: "よくある質問"
            },
            copyright: "© 2025 yamatoneriko All Rights Reserved.",
            links: {
                about: "会社概要",
                terms: "利用規約",
                privacy: "プライバシーポリシー",
                law: "特定商取引法"
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
            cta: "Get Started with a Consultation",
            cta2: "View Portfolio",
            decorations: {
                illustration: "Illustration",
                web: "Web Design",
                goods: "Merchandise"
            }
        },
        
        // Problems section
        problems: {
            title: "Do You Have These Concerns?",
            subtitle: "Let's solve your creative challenges together",
            cards: [
                {
                    title: "Don't know how to present attractively",
                    description: "Have characters and concepts but unsure how to express them effectively"
                },
                {
                    title: "Inconsistent worldview",
                    description: "Lost unity after commissioning multiple designers"
                },
                {
                    title: "No one-stop solution",
                    description: "Can't find someone to consult comprehensively about goods, web, and SNS"
                }
            ]
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "Why Choose yamatoneriko",
            subtitle: "Total creative support combining creativity and strategy",
            item1: {
                title: "Visual × Promotional Design Balance",
                description: "Not just beautiful designs, but designs that 'communicate' to your target audience. We visualize your message with a careful balance of creativity and strategy. Our comprehensive proposals include marketing perspectives to realize creative work that leads to business results."
            },
            item2: {
                title: "Consistent Worldview from Illustration to Web",
                description: "From character design to websites and various merchandise. Because everything is handled by one person, we can express a unified worldview down to the smallest detail. One-stop service saves both time and cost efficiently."
            },
            item3: {
                title: "Planning Power Based on SNS and Fan Psychology",
                description: "'How to go viral?' 'How to be loved by fans?' With actual experience running SNS and crowdfunding campaigns, we can provide advice from a real fan perspective."
            },
            item4: {
                title: "Merchandise Production",
                description: "Planning and production of original goods from acrylic keychains to T-shirts"
            }
        },
        
        // Works section
        works: {
            title: "Portfolio",
            subtitle: "Showcasing our diverse creative works",
            viewMore: "View More",
            filterButtons: {
                all: "All",
                illustration: "Illustration",
                web: "Web",
                goods: "Goods"
            }
        },
        
        // Testimonials section
        testimonials: {
            title: "Client Testimonials",
            subtitle: "Happy words from our valued clients",
            items: [
                {
                    content: "They handled everything from character design to worldview creation. The consistent design received great feedback from our fans! The results exceeded our expectations.",
                    author: "Company A",
                    company: "Entertainment Company"
                }
            ]
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
            ctaDescription: "Start with a free consultation. Feel free to contact us.",
            ctaButtons: {
                consultation: "Free Consultation Form",
                email: "Contact via Email"
            },
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
            about: {
                description: "As an illustrator and designer, we visualize your worldview.<br>Welcome consultations from the planning stage. With consistent production, we realize an unwavering worldview."
            },
            sectionTitles: {
                service: "Service",
                other: "Other"
            },
            serviceLinks: {
                portfolio: "Portfolio",
                flow: "Service Flow",
                faq: "FAQ"
            },
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
            cta: "立即諮詢",
            cta2: "查看作品",
            decorations: {
                illustration: "插畫製作",
                web: "網頁製作",
                goods: "周邊展開"
            }
        },
        
        // Problems section
        problems: {
            title: "您有這些困擾嗎？",
            subtitle: "讓我們一起解決您的創意挑戰",
            cards: [
                {
                    title: "不知道如何有魅力地展現",
                    description: "有角色和概念，但不確定如何有效表達"
                },
                {
                    title: "世界觀不一致",
                    description: "委託多位設計師後，失去了統一性"
                },
                {
                    title: "沒有一站式解決方案",
                    description: "找不到可以全面諮詢商品、網站和社群媒體的人"
                }
            ]
        },
        
        // Features section (Why choose yamatoneriko)
        features: {
            title: "選擇yamatoneriko的理由",
            subtitle: "結合創造力與策略的全方位創意支援",
            item1: {
                title: "視覺 × 推廣設計的平衡",
                description: "不只是美麗的設計，更是能「傳達」給目標受眾的設計。我們重視創意與策略的平衡，將您的訊息視覺化。包含行銷觀點的綜合提案，實現能帶來商業成果的創意作品。"
            },
            item2: {
                title: "從插畫到網站的一致世界觀",
                description: "從角色設計到網站、各種周邊商品。因為全部由一人負責，所以能夠表現出細節都統一的世界觀。一站式服務，時間和成本都更有效率。"
            },
            item3: {
                title: "基於SNS和粉絲心理的企劃提案力",
                description: "「如何擴散？」「如何受粉絲喜愛？」憑藉實際運營SNS和群眾募資的經驗，我們可以從真實的粉絲角度提供建議。"
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
            viewMore: "查看更多",
            filterButtons: {
                all: "全部",
                illustration: "插畫",
                web: "網頁",
                goods: "周邊"
            }
        },
        
        // Testimonials section
        testimonials: {
            title: "客戶評價",
            subtitle: "來自滿意客戶的真心推薦",
            items: [
                {
                    content: "從角色設計到世界觀建構，全部都能放心交給他們。統一的設計獲得了粉絲們的一致好評！成果超出我們的期望。",
                    author: "A公司",
                    company: "娛樂企業"
                }
            ]
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
            ctaDescription: "從免費諮詢開始。歡迎隨時聯絡我們。",
            ctaButtons: {
                consultation: "免費諮詢表單",
                email: "郵件諮詢"
            },
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
            about: {
                description: "作為插畫師和設計師，我們將您的世界觀視覺化。<br>歡迎從企劃階段開始諮詢。通過一致的製作體系，實現不搖擺的世界觀。"
            },
            sectionTitles: {
                service: "服務",
                other: "其他"
            },
            serviceLinks: {
                portfolio: "製作實績",
                flow: "服務流程",
                faq: "常見問題"
            },
            copyright: "© 2025 yamatoneriko 版權所有",
            links: {
                about: "公司概要",
                terms: "使用條款",
                privacy: "隱私權政策",
                law: "特定商業交易法"
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
    
    // Update second hero button
    const heroButtons = document.querySelectorAll('.hero-buttons .cta-button');
    if (heroButtons.length >= 2) {
        heroButtons[1].textContent = t.hero.cta2;
    }
    
    // Update hero decorations
    const decorations = document.querySelectorAll('.hero-decoration');
    if (decorations.length >= 3) {
        decorations[0].innerHTML = `<i class="fas fa-palette"></i> ${t.hero.decorations.illustration}`;
        decorations[1].innerHTML = `<i class="fas fa-laptop-code"></i> ${t.hero.decorations.web}`;
        decorations[2].innerHTML = `<i class="fas fa-gift"></i> ${t.hero.decorations.goods}`;
    }
    
    // Update problems section
    const problemsTitle = document.querySelector('.problems .section-title h2');
    if (problemsTitle) problemsTitle.textContent = t.problems.title;
    
    const problemsSubtitle = document.querySelector('.problems .section-subtitle');
    if (problemsSubtitle) problemsSubtitle.textContent = t.problems.subtitle;
    
    // Update problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    if (problemCards.length >= 3 && t.problems.cards) {
        for (let i = 0; i < Math.min(3, problemCards.length); i++) {
            const h3 = problemCards[i].querySelector('h3');
            const p = problemCards[i].querySelector('p');
            if (h3) h3.textContent = t.problems.cards[i].title;
            if (p) p.textContent = t.problems.cards[i].description;
        }
    }
    
    // Update features section (Why choose yamatoneriko)
    const featuresTitle = document.querySelector('.features .section-title h2');
    if (featuresTitle) featuresTitle.textContent = t.features.title;
    
    const featuresSubtitle = document.querySelector('.features .section-subtitle');
    if (featuresSubtitle) featuresSubtitle.textContent = t.features.subtitle;
    
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length >= 3) {
        const item1H3 = featureItems[0].querySelector('h3');
        const item1P = featureItems[0].querySelector('p');
        if (item1H3) item1H3.textContent = t.features.item1.title;
        if (item1P) item1P.textContent = t.features.item1.description;
        
        const item2H3 = featureItems[1].querySelector('h3');
        const item2P = featureItems[1].querySelector('p');
        if (item2H3) item2H3.textContent = t.features.item2.title;
        if (item2P) item2P.textContent = t.features.item2.description;
        
        const item3H3 = featureItems[2].querySelector('h3');
        const item3P = featureItems[2].querySelector('p');
        if (item3H3) item3H3.textContent = t.features.item3.title;
        if (item3P) item3P.textContent = t.features.item3.description;
    }
    
    // Update works section
    const worksTitle = document.querySelector('.portfolio .section-title h2');
    if (worksTitle) worksTitle.textContent = t.works.title;
    
    const worksSubtitle = document.querySelector('.portfolio .section-subtitle');
    if (worksSubtitle) worksSubtitle.textContent = t.works.subtitle;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length >= 4 && t.works.filterButtons) {
        filterButtons[0].textContent = t.works.filterButtons.all;
        filterButtons[1].textContent = t.works.filterButtons.illustration;
        filterButtons[2].textContent = t.works.filterButtons.web;
        filterButtons[3].textContent = t.works.filterButtons.goods;
    }
    
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
    if (ctaP) ctaP.textContent = t.contact.ctaDescription;
    
    // Update CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-white');
    if (ctaButtons.length >= 2) {
        ctaButtons[0].innerHTML = `<i class="fas fa-envelope"></i> ${t.contact.ctaButtons.consultation}`;
        ctaButtons[1].innerHTML = `<i class="fas fa-paper-plane"></i> ${t.contact.ctaButtons.email}`;
    }
    
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
    
    // Update footer about description
    const footerAbout = document.querySelector('.footer-about p');
    if (footerAbout) footerAbout.innerHTML = t.footer.about.description;
    
    // Update footer section titles
    const footerSectionTitles = document.querySelectorAll('.footer-links h4');
    if (footerSectionTitles.length >= 2) {
        footerSectionTitles[0].textContent = t.footer.sectionTitles.service;
        footerSectionTitles[1].textContent = t.footer.sectionTitles.other;
    }
    
    // Update footer service links
    const footerServiceLinks = document.querySelectorAll('.footer-links')[0]?.querySelectorAll('a');
    if (footerServiceLinks && footerServiceLinks.length >= 3) {
        footerServiceLinks[0].textContent = t.footer.serviceLinks.portfolio;
        footerServiceLinks[1].textContent = t.footer.serviceLinks.flow;
        footerServiceLinks[2].textContent = t.footer.serviceLinks.faq;
    }
    
    // Update footer other links
    const footerOtherLinks = document.querySelectorAll('.footer-links')[1]?.querySelectorAll('a');
    if (footerOtherLinks && footerOtherLinks.length >= 4) {
        footerOtherLinks[0].textContent = t.footer.links.about;
        footerOtherLinks[1].textContent = t.footer.links.terms;
        footerOtherLinks[2].textContent = t.footer.links.privacy;
        footerOtherLinks[3].textContent = t.footer.links.law;
    }
    
    // Update testimonials section
    const testimonialsTitle = document.querySelector('.testimonials .section-title h2');
    if (testimonialsTitle) testimonialsTitle.textContent = t.testimonials.title;
    
    const testimonialsSubtitle = document.querySelector('.testimonials .section-subtitle');
    if (testimonialsSubtitle) testimonialsSubtitle.textContent = t.testimonials.subtitle;
    
    // Update testimonial content
    const testimonialContent = document.querySelector('.testimonial-content');
    if (testimonialContent && t.testimonials.items && t.testimonials.items[0]) {
        testimonialContent.textContent = t.testimonials.items[0].content;
    }
    
    const authorName = document.querySelector('.author-info h4');
    if (authorName && t.testimonials.items && t.testimonials.items[0]) {
        authorName.textContent = t.testimonials.items[0].author;
    }
    
    const authorCompany = document.querySelector('.author-info p');
    if (authorCompany && t.testimonials.items && t.testimonials.items[0]) {
        authorCompany.textContent = t.testimonials.items[0].company;
    }
    
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