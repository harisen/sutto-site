// Language translations for main site
const translations = {
    ja: {
        // Page metadata
        metadata: {
            title: "スッとサイト | 高品質なランディングページを迅速にお届け",
            description: "スッとサイトは、あなたのビジネスを加速させる高品質なランディングページを制作します。初期費用20,000円から。豊富な実績と充実したサポートで安心。"
        },
        
        // Navigation
        nav: {
            logo: "スッとサイト",
            logoSubtitle: "個人から企業まで最速・低価格でホームページ制作",
            service: "サービス",
            pricing: "料金",
            samples: "サンプルサイト",
            guide: "公開ガイド",
            contact: "お問い合わせ"
        },
        
        // Hero section
        hero: {
            title: "個人様から企業様まで<br>最速・低価格でホームページ制作",
            subtitle: "どんなニーズにも納得のクオリティでお応えします。<br>ウェブサイト・LP・ホームページ、なんでもご相談ください。",
            notice: "※即日納品は修正がない場合の最速納期です。詳細はお問い合わせください。",
            badges: {
                speed: "個人様歓迎",
                quality: "企業様対応",
                ai: "どんなサイトもお任せ"
            },
            cta: "お問い合わせはこちら"
        },
        
        // Service/Pricing section
        pricing: {
            title: "選べる2つのプラン",
            subtitle: "お客様のニーズに合わせた最適なプランをご用意",
            
            standard: {
                name: "スタンダードプラン",
                price: "¥20,000",
                priceNote: "（税込）",
                description: "シンプルで効果的なLP制作<br>基本機能をしっかり押さえた設計",
                features: [
                    "オリジナルデザイン",
                    "レスポンシブ対応",
                    "SEO基本設定",
                    "お問い合わせ先の表示",
                    "納期：最速即日〜※"
                ],
                cta: "このプランで相談する"
            },
            
            rich: {
                badge: "新登場",
                name: "リッチプラン",
                price: "¥50,000",
                priceNote: "（税込）",
                description: "GSAPアニメーションで魅せる<br>プレミアムなLP体験を提供",
                features: [
                    "GSAP高度アニメーション",
                    "パララックス効果",
                    "インタラクティブ要素",
                    "プレミアムデザイン",
                    "納期：最速即日〜※"
                ],
                cta: "詳細を見る"
            },
            
            disclaimer: "※納期は条件により異なります。即日納品は素材・情報が揃っており、標準的な構成で、<br>かつ修正がない場合の最速納期です。通常は2〜5営業日程度かかります。"
        },
        
        // AI Development section
        ai: {
            title: "最新のAI技術で実現する<br>高速・高品質なLP制作",
            description: "当サービスでは、最先端のAIコーディング技術を活用することで、従来の制作プロセスを大幅に効率化。人間のクリエイティビティとAIの正確性・速度を組み合わせることで、最速即日での納品を可能にしています。",
            features: [
                "AIによる高速コーディング",
                "最新のWeb標準に準拠",
                "SEO最適化された構造",
                "人間による最終品質チェック"
            ],
            badge: "AI Powered"
        },
        
        // Portfolio section
        portfolio: {
            title: "サンプルサイト",
            subtitle: "様々な業界のLPサンプルをご覧いただけます",
            items: {
                beautySalon: {
                    category: "美容院",
                    description: "新規顧客獲得を目的とした、高級感のある美容院のLP",
                    tag: "スタンダード"
                },
                beautySalonRich: {
                    category: "美容院",
                    title: "Hair Salon Lux - リッチ版",
                    description: "GSAPを活用した極上の美髪体験を演出するプレミアムLP",
                    tag: "リッチ版"
                },
                restaurant: {
                    category: "飲食店",
                    description: "予約促進を目的とした、本格イタリアンレストランのLP",
                    tag: "スタンダード"
                },
                restaurantRich: {
                    category: "飲食店",
                    title: "Restaurant Lumière - リッチ版",
                    description: "五感で愉しむ極上のフレンチダイニング体験を演出するLP",
                    tag: "リッチ版"
                },
                ecShop: {
                    category: "EC",
                    title: "健康サプリメント販売",
                    description: "商品購入を促進する、信頼感のあるECサイトのLP",
                    tag: "スタンダード"
                },
                ecShopRich: {
                    category: "EC",
                    title: "AURORA - リッチ版",
                    description: "自然派オーガニックコスメの世界観を表現するプレミアムLP",
                    tag: "リッチ版"
                }
            },
            cta: "サンプルサイトをもっと見る"
        },
        
        // Contact section
        contact: {
            title: "ホームページ制作のご相談はお気軽に",
            subtitle: "あなたのニーズに最適なサイトをご提案します。",
            cta: "無料で相談してみる"
        },
        
        // Footer
        footer: {
            companyName: "スッとサイト",
            description: "AI技術を活用した高速・高品質な<br>ランディングページ制作サービス",
            aiPowered: "最新技術でお手伝い",
            sections: {
                service: "サービス",
                contact: "お問い合わせ"
            },
            links: {
                serviceDetail: "サービス詳細",
                pricing: "料金プラン",
                samples: "サンプルサイト",
                contact: "お問い合わせ",
                faq: "よくある質問",
                privacy: "プライバシーポリシー",
                terms: "利用規約",
                cancellation: "キャンセルポリシー"
            },
            copyright: "© 2025 All rights reserved."
        },
        
        // Before/After section
        beforeAfter: {
            title: "こんなお悩みありませんか？",
            before: {
                title: "よくあるお悩み",
                items: [
                    "お店の情報が伝わらない",
                    "SNSだけでは物足りない",
                    "ホームページは高そう",
                    "作るのが難しそう"
                ]
            },
            after: {
                title: "スッとサイトなら解決！",
                items: [
                    "24時間お客様に情報を伝えられます",
                    "しっかりしたデザインで信頼されます",
                    "2万円から始められます",
                    "全部お任せでかんたんです"
                ]
            },
            techIcons: [
                "きれいな\nデザイン",
                "スマホでも\n見やすい",
                "すぐに\n完成",
                "安心の\n品質"
            ]
        }
    },
    
    en: {
        // Page metadata
        metadata: {
            title: "LP Creation Service | Quick Delivery of High-Quality Landing Pages",
            description: "LP Creation Service creates high-quality landing pages that accelerate your business. Starting from ¥20,000. Trust us with our extensive track record and comprehensive support."
        },
        
        // Navigation
        nav: {
            logo: "Sutto Site",
            logoSubtitle: "Fast & Affordable Website Creation for Everyone",
            service: "Service",
            pricing: "Pricing",
            samples: "Sample Sites",
            guide: "Publishing Guide",
            contact: "Contact"
        },
        
        // Hero section
        hero: {
            title: "Same-Day Delivery<br>LPs That Accelerate Your Business",
            subtitle: "Delivering with speed and satisfying quality.<br>Achieve results with high-quality landing pages.",
            notice: "*Same-day delivery is the fastest delivery time when there are no revisions. Please contact us for details.",
            badges: {
                speed: "🚀 Same-Day Delivery",
                quality: "✨ High-Quality Design",
                ai: "💻 AI Technology"
            },
            cta: "Contact Us"
        },
        
        // Service/Pricing section
        pricing: {
            title: "Choose from 2 Plans",
            subtitle: "We offer the optimal plan tailored to your needs",
            
            standard: {
                name: "Standard Plan",
                price: "¥20,000",
                priceNote: "(incl. tax)",
                description: "Simple and effective LP creation<br>Design that covers all the basics",
                features: [
                    "Original Design",
                    "Responsive Design",
                    "Basic SEO Settings",
                    "Contact Information Display",
                    "Delivery: From Same Day*"
                ],
                cta: "Consult About This Plan"
            },
            
            rich: {
                badge: "New",
                name: "Rich Plan",
                price: "¥50,000",
                priceNote: "(incl. tax)",
                description: "Captivating with GSAP animations<br>Providing premium LP experience",
                features: [
                    "GSAP Advanced Animations",
                    "Parallax Effects",
                    "Interactive Elements",
                    "Premium Design",
                    "Delivery: From Same Day*"
                ],
                cta: "View Details"
            },
            
            disclaimer: "*Delivery time varies by conditions. Same-day delivery is the fastest delivery time when materials and information are ready, with standard configuration, and no revisions. Usually takes 2-5 business days."
        },
        
        // AI Development section
        ai: {
            title: "High-Speed, High-Quality LP Creation<br>Powered by Latest AI Technology",
            description: "Our service dramatically streamlines the traditional production process by utilizing cutting-edge AI coding technology. By combining human creativity with AI accuracy and speed, we enable same-day delivery.",
            features: [
                "High-speed AI coding",
                "Compliant with latest web standards",
                "SEO-optimized structure",
                "Final quality check by humans"
            ],
            badge: "AI Powered"
        },
        
        // Portfolio section
        portfolio: {
            title: "Sample Sites",
            subtitle: "Browse LP samples from various industries",
            items: {
                beautySalon: {
                    category: "Beauty Salon",
                    description: "High-end beauty salon LP aimed at acquiring new customers",
                    tag: "Standard"
                },
                beautySalonRich: {
                    category: "Beauty Salon",
                    title: "Hair Salon Lux - Rich Version",
                    description: "Premium LP showcasing the ultimate hair care experience with GSAP",
                    tag: "Rich Version"
                },
                restaurant: {
                    category: "Restaurant",
                    description: "Authentic Italian restaurant LP aimed at promoting reservations",
                    tag: "Standard"
                },
                restaurantRich: {
                    category: "Restaurant",
                    title: "Restaurant Lumière - Rich Version",
                    description: "LP showcasing an exquisite French dining experience for all five senses",
                    tag: "Rich Version"
                },
                ecShop: {
                    category: "EC",
                    title: "Health Supplement Sales",
                    description: "Trustworthy EC site LP promoting product purchases",
                    tag: "Standard"
                },
                ecShopRich: {
                    category: "EC",
                    title: "AURORA - Rich Version",
                    description: "Premium LP expressing the world of natural organic cosmetics",
                    tag: "Rich Version"
                }
            },
            cta: "View More Sample Sites"
        },
        
        // Contact section
        contact: {
            title: "Feel Free to Consult About LP Creation",
            subtitle: "We'll propose the optimal LP for your business.",
            cta: "Get Free Consultation"
        },
        
        // Footer
        footer: {
            companyName: "Sutto Site",
            description: "High-speed, high-quality<br>landing page creation service utilizing AI technology",
            aiPowered: "Powered by Latest Technology",
            sections: {
                service: "Service",
                contact: "Contact"
            },
            links: {
                serviceDetail: "Service Details",
                pricing: "Pricing Plans",
                samples: "Sample Sites",
                contact: "Contact",
                faq: "FAQ",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                cancellation: "Cancellation Policy"
            },
            copyright: "© 2025 All rights reserved."
        },
        
        // Before/After section
        beforeAfter: {
            title: "Do You Have These Concerns?",
            before: {
                title: "Common Concerns",
                items: [
                    "Your store info isn't reaching customers",
                    "Social media alone isn't enough",
                    "Websites seem expensive",
                    "Creating one seems difficult"
                ]
            },
            after: {
                title: "Sutto Site Solves Everything!",
                items: [
                    "Share info with customers 24/7",
                    "Build trust with professional design",
                    "Start from just ¥20,000",
                    "Leave everything to us - it's easy"
                ]
            },
            techIcons: [
                "Beautiful\nDesign",
                "Mobile\nFriendly",
                "Quick\nCompletion",
                "Quality\nAssurance"
            ]
        }
    },
    
    zh: {
        // Page metadata
        metadata: {
            title: "LP製作服務 | 快速交付高品質登陸頁",
            description: "LP製作服務為您創建能夠加速業務發展的高品質登陸頁。起價20,000日元。憑藉豐富的成績和完善的支援值得信賴。"
        },
        
        // Navigation
        nav: {
            logo: "快速網站",
            logoSubtitle: "為個人和企業提供最快速、低價的網站製作",
            service: "服務",
            pricing: "價格",
            samples: "範例網站",
            guide: "發布指南",
            contact: "聯絡我們"
        },
        
        // Hero section
        hero: {
            title: "最快當日交付<br>加速您業務的LP",
            subtitle: "快速且品質滿意的交付。<br>以高品質登陸頁實現成果。",
            notice: "※當日交付是在沒有修改的情況下的最快交期。詳情請聯絡我們。",
            badges: {
                speed: "🚀 最快當日交付",
                quality: "✨ 高品質設計",
                ai: "💻 AI技術應用"
            },
            cta: "聯絡我們"
        },
        
        // Service/Pricing section
        pricing: {
            title: "可選擇的2種方案",
            subtitle: "我們提供符合客戶需求的最佳方案",
            
            standard: {
                name: "標準方案",
                price: "¥20,000",
                priceNote: "（含稅）",
                description: "簡單有效的LP製作<br>穩固掌握基本功能的設計",
                features: [
                    "原創設計",
                    "響應式設計",
                    "基本SEO設定",
                    "聯絡資訊顯示",
                    "交期：最快當日～※"
                ],
                cta: "諮詢此方案"
            },
            
            rich: {
                badge: "新登場",
                name: "豪華方案",
                price: "¥50,000",
                priceNote: "（含稅）",
                description: "以GSAP動畫呈現<br>提供頂級LP體驗",
                features: [
                    "GSAP高級動畫",
                    "視差效果",
                    "互動元素",
                    "頂級設計",
                    "交期：最快當日～※"
                ],
                cta: "查看詳情"
            },
            
            disclaimer: "※交期因條件而異。當日交付是在素材、資訊齊全，標準配置，<br>且無修改的情況下的最快交期。通常需要2～5個工作日。"
        },
        
        // AI Development section
        ai: {
            title: "運用最新AI技術實現<br>高速、高品質LP製作",
            description: "本服務通過活用最尖端的AI編碼技術，大幅提高傳統製作流程的效率。結合人類的創造力與AI的準確性、速度，實現最快當日交付。",
            features: [
                "AI高速編碼",
                "符合最新網路標準",
                "SEO優化結構",
                "人工最終品質檢查"
            ],
            badge: "AI Powered"
        },
        
        // Portfolio section
        portfolio: {
            title: "範例網站",
            subtitle: "可瀏覽各行業的LP範例",
            items: {
                beautySalon: {
                    category: "美容院",
                    description: "以獲得新客戶為目的的高級美容院LP",
                    tag: "標準版"
                },
                beautySalonRich: {
                    category: "美容院",
                    title: "Hair Salon Lux - 豪華版",
                    description: "運用GSAP演繹極致美髮體驗的頂級LP",
                    tag: "豪華版"
                },
                restaurant: {
                    category: "餐廳",
                    description: "以促進預約為目的的正宗義大利餐廳LP",
                    tag: "標準版"
                },
                restaurantRich: {
                    category: "餐廳",
                    title: "Restaurant Lumière - 豪華版",
                    description: "演繹五感享受的極致法式餐飲體驗的LP",
                    tag: "豪華版"
                },
                ecShop: {
                    category: "電商",
                    title: "健康保健品銷售",
                    description: "促進商品購買的值得信賴的電商網站LP",
                    tag: "標準版"
                },
                ecShopRich: {
                    category: "電商",
                    title: "AURORA - 豪華版",
                    description: "表現自然有機化妝品世界觀的頂級LP",
                    tag: "豪華版"
                }
            },
            cta: "查看更多範例網站"
        },
        
        // Contact section
        contact: {
            title: "歡迎諮詢LP製作",
            subtitle: "我們將為您的業務提供最佳LP方案。",
            cta: "免費諮詢"
        },
        
        // Footer
        footer: {
            companyName: "快速網站",
            description: "運用AI技術的高速、高品質<br>登陸頁製作服務",
            aiPowered: "最新技術支援",
            sections: {
                service: "服務",
                contact: "聯絡我們"
            },
            links: {
                serviceDetail: "服務詳情",
                pricing: "價格方案",
                samples: "範例網站",
                contact: "聯絡我們",
                faq: "常見問題",
                privacy: "隱私政策",
                terms: "使用條款",
                cancellation: "取消政策"
            },
            copyright: "© 2025 All rights reserved."
        },
        
        // Before/After section
        beforeAfter: {
            title: "您有這些煩惱嗎？",
            before: {
                title: "常見的煩惱",
                items: [
                    "店鋪資訊無法傳達",
                    "只有社交媒體不夠",
                    "網站似乎很貴",
                    "製作看起來很困難"
                ]
            },
            after: {
                title: "快速網站幫您解決！",
                items: [
                    "24小時向客戶傳達資訊",
                    "專業設計贏得信任",
                    "2萬日元起即可開始",
                    "全部交給我們，超簡單"
                ]
            },
            techIcons: [
                "精美的\n設計",
                "手機也\n易讀",
                "快速\n完成",
                "安心的\n品質"
            ]
        }
    }
};

// Current language
let currentLang = localStorage.getItem('mainSiteLanguage') || 'ja';

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
            background: rgba(255, 255, 255, 0.95);
            padding: 5px;
            border-radius: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .lang-btn {
            padding: 8px 16px;
            border: none;
            background: transparent;
            color: #666;
            font-size: 14px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .lang-btn:hover {
            background: #007AFF;
            color: white;
        }
        
        .lang-btn.active {
            background: #007AFF;
            color: white;
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
    
    // Add to header
    const header = document.querySelector('.header');
    if (header) {
        header.appendChild(switcher);
    } else {
        document.body.appendChild(switcher);
    }
    
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
    localStorage.setItem('mainSiteLanguage', lang);
    
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
    
    // Update page metadata
    document.title = t.metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = t.metadata.description;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    
    // Update navigation
    const logo = document.querySelector('.logo');
    if (logo) {
        // Update the main title
        const logoTitle = logo.querySelector('span:first-child');
        if (logoTitle) {
            logoTitle.textContent = t.nav.logo;
        }
        // Update the subtitle
        const logoSubtitle = logo.querySelector('span:last-child');
        if (logoSubtitle) {
            logoSubtitle.textContent = t.nav.logoSubtitle;
        }
    }
    
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = t.nav.service;
        navLinks[1].textContent = t.nav.pricing;
        navLinks[2].textContent = t.nav.samples;
        navLinks[3].textContent = t.nav.guide;
        navLinks[4].textContent = t.nav.contact;
    }
    
    // Update mobile navigation
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    if (mobileNavLinks.length >= 5) {
        mobileNavLinks[0].textContent = t.nav.service;
        mobileNavLinks[1].textContent = t.nav.pricing;
        mobileNavLinks[2].textContent = t.nav.samples;
        mobileNavLinks[3].textContent = t.nav.guide;
        mobileNavLinks[4].textContent = t.nav.contact;
    }
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerHTML = t.hero.subtitle;
    
    const heroNotice = document.querySelector('.hero-content p[style*="font-size: 1.2rem"]');
    if (heroNotice) heroNotice.textContent = t.hero.notice;
    
    const badges = document.querySelectorAll('.badge');
    if (badges.length >= 3) {
        badges[0].textContent = t.hero.badges.speed;
        badges[1].textContent = t.hero.badges.quality;
        badges[2].textContent = t.hero.badges.ai;
    }
    
    const heroCta = document.querySelector('.hero-content .btn-primary');
    if (heroCta) heroCta.textContent = t.hero.cta;
    
    // Update pricing section
    const pricingSectionTitle = document.querySelector('#service h2');
    if (pricingSectionTitle) pricingSectionTitle.textContent = t.pricing.title;
    
    const pricingSubtitle = document.querySelector('#service p.text-center');
    if (pricingSubtitle) pricingSubtitle.textContent = t.pricing.subtitle;
    
    // Update standard plan
    const standardCard = document.querySelector('.pricing-card:first-child');
    if (standardCard) {
        const title = standardCard.querySelector('h3');
        if (title) title.textContent = t.pricing.standard.name;
        
        const price = standardCard.querySelector('.pricing-price');
        if (price) price.innerHTML = `${t.pricing.standard.price}<span style="font-size: 2.4rem;">${t.pricing.standard.priceNote}</span>`;
        
        const description = standardCard.querySelector('p[style*="font-size: 1.6rem"]');
        if (description) description.innerHTML = t.pricing.standard.description;
        
        const features = standardCard.querySelectorAll('.pricing-features li');
        if (features.length >= 5) {
            features.forEach((feature, index) => {
                if (t.pricing.standard.features[index]) {
                    feature.textContent = t.pricing.standard.features[index];
                }
            });
        }
        
        const cta = standardCard.querySelector('.btn-primary');
        if (cta) cta.textContent = t.pricing.standard.cta;
    }
    
    // Update rich plan
    const richCard = document.querySelector('.pricing-card:last-child');
    if (richCard) {
        const badge = richCard.querySelector('div[style*="position: absolute"]');
        if (badge) badge.textContent = t.pricing.rich.badge;
        
        const title = richCard.querySelector('h3');
        if (title) title.textContent = t.pricing.rich.name;
        
        const price = richCard.querySelector('.pricing-price');
        if (price) price.innerHTML = `${t.pricing.rich.price}<span style="font-size: 2.4rem;">${t.pricing.rich.priceNote}</span>`;
        
        const description = richCard.querySelector('p[style*="font-size: 1.6rem"]');
        if (description) description.innerHTML = t.pricing.rich.description;
        
        const features = richCard.querySelectorAll('.pricing-features li');
        if (features.length >= 5) {
            features.forEach((feature, index) => {
                if (t.pricing.rich.features[index]) {
                    feature.textContent = t.pricing.rich.features[index];
                }
            });
        }
        
        const cta = richCard.querySelector('.btn-primary');
        if (cta) cta.textContent = t.pricing.rich.cta;
    }
    
    const disclaimer = document.querySelector('#service p[style*="text-align: center"][style*="font-size: 1.4rem"]');
    if (disclaimer) disclaimer.innerHTML = t.pricing.disclaimer;
    
    // Update AI section
    const aiTitle = document.querySelector('.ai-text h2');
    if (aiTitle) aiTitle.innerHTML = t.ai.title;
    
    const aiDescription = document.querySelector('.ai-text p');
    if (aiDescription) aiDescription.textContent = t.ai.description;
    
    const aiFeatures = document.querySelectorAll('.ai-feature span');
    if (aiFeatures.length >= 4) {
        aiFeatures.forEach((feature, index) => {
            if (t.ai.features[index]) {
                feature.textContent = t.ai.features[index];
            }
        });
    }
    
    const aiBadge = document.querySelector('.ai-badge span');
    if (aiBadge) aiBadge.textContent = t.ai.badge;
    
    // Update portfolio section
    const portfolioTitle = document.querySelector('#portfolio h2');
    if (portfolioTitle) portfolioTitle.textContent = t.portfolio.title;
    
    const portfolioSubtitle = document.querySelector('#portfolio p.text-center');
    if (portfolioSubtitle) portfolioSubtitle.textContent = t.portfolio.subtitle;
    
    // Update portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length >= 6) {
        // Beauty Salon Standard
        updatePortfolioItem(portfolioItems[0], t.portfolio.items.beautySalon);
        // Beauty Salon Rich
        updatePortfolioItem(portfolioItems[1], t.portfolio.items.beautySalonRich);
        // Restaurant Standard
        updatePortfolioItem(portfolioItems[2], t.portfolio.items.restaurant);
        // Restaurant Rich
        updatePortfolioItem(portfolioItems[3], t.portfolio.items.restaurantRich);
        // EC Shop Standard
        updatePortfolioItem(portfolioItems[4], t.portfolio.items.ecShop);
        // EC Shop Rich
        updatePortfolioItem(portfolioItems[5], t.portfolio.items.ecShopRich);
    }
    
    const portfolioCta = document.querySelector('#portfolio .btn-primary');
    if (portfolioCta) portfolioCta.textContent = t.portfolio.cta;
    
    // Update contact section
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = t.contact.title;
    
    const contactSubtitle = document.querySelector('#contact p');
    if (contactSubtitle) contactSubtitle.textContent = t.contact.subtitle;
    
    // Update CTA button - try multiple selectors
    const contactCta = document.querySelector('#contact .cta-button-white') || 
                      document.querySelector('#contact .btn-primary') ||
                      document.querySelector('#contact a[href="contact.html"]');
    if (contactCta) {
        const btnText = contactCta.querySelector('.cta-button-text') || 
                       contactCta.querySelector('.btn-text');
        if (btnText) {
            btnText.textContent = t.contact.cta;
        }
    }
    
    // Update footer
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) footerLogo.textContent = t.footer.companyName;
    
    const footerDescription = document.querySelector('.footer-content p');
    if (footerDescription) footerDescription.innerHTML = t.footer.description;
    
    // Update AI Powered text
    const aiPoweredText = document.querySelector('.footer-section p[style*="font-size: 1.2rem"]');
    if (aiPoweredText) aiPoweredText.textContent = t.footer.aiPowered;
    
    const footerSectionTitles = document.querySelectorAll('.footer-section h4');
    if (footerSectionTitles.length >= 3) {
        footerSectionTitles[0].textContent = t.footer.companyName;
        footerSectionTitles[1].textContent = t.footer.sections.service;
        footerSectionTitles[2].textContent = t.footer.sections.contact;
    }
    
    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    const linkMapping = [
        'serviceDetail', 'pricing', 'samples', 'contact',
        'faq', 'privacy', 'terms', 'cancellation'
    ];
    
    footerLinks.forEach((link, index) => {
        if (linkMapping[index] && t.footer.links[linkMapping[index]]) {
            link.textContent = t.footer.links[linkMapping[index]];
        }
    });
    
    // Update copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t.footer.copyright;
    
    // Update Before/After section
    if (t.beforeAfter) {
        const beforeAfterTitle = document.querySelector('.before-after-section h2');
        if (beforeAfterTitle) beforeAfterTitle.textContent = t.beforeAfter.title;
        
        // Update before box
        const beforeTitle = document.querySelector('.before-box h3');
        if (beforeTitle) beforeTitle.textContent = t.beforeAfter.before.title;
        
        const beforeItems = document.querySelectorAll('.before-box ul li');
        if (beforeItems.length >= 4) {
            beforeItems.forEach((item, index) => {
                if (t.beforeAfter.before.items[index]) {
                    item.textContent = t.beforeAfter.before.items[index];
                }
            });
        }
        
        // Update after box
        const afterTitle = document.querySelector('.after-box h3');
        if (afterTitle) afterTitle.textContent = t.beforeAfter.after.title;
        
        const afterItems = document.querySelectorAll('.after-box ul li');
        if (afterItems.length >= 4) {
            afterItems.forEach((item, index) => {
                if (t.beforeAfter.after.items[index]) {
                    item.textContent = t.beforeAfter.after.items[index];
                }
            });
        }
        
        // Update tech icons
        const techIcons = document.querySelectorAll('.tech-icon');
        if (techIcons.length >= 4) {
            techIcons.forEach((icon, index) => {
                if (t.beforeAfter.techIcons[index]) {
                    icon.innerHTML = t.beforeAfter.techIcons[index].replace('\n', '<br>');
                }
            });
        }
    }
    
    // Debug logging
    console.log('Language changed to:', lang);
}

// Helper function to update portfolio items
function updatePortfolioItem(item, data) {
    const category = item.querySelector('.portfolio-category');
    if (category) category.textContent = data.category;
    
    const title = item.querySelector('h3');
    if (title && data.title) title.textContent = data.title;
    
    const description = item.querySelector('p');
    if (description) description.textContent = data.description;
    
    const tag = item.querySelector('.portfolio-tag');
    if (tag) tag.textContent = data.tag;
}