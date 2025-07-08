// Language translations for subpages
const subpageTranslations = {
    ja: {
        // Common navigation and footer (same as main page)
        nav: {
            logo: "スッとサイト",
            service: "サービス",
            pricing: "料金",
            samples: "サンプルサイト",
            guide: "公開ガイド",
            contact: "お問い合わせ"
        },
        
        footer: {
            companyName: "スッとサイト",
            description: "AI技術を活用した高速・高品質な<br>ランディングページ制作サービス",
            aiPowered: "🤖 AI Powered Development",
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
        
        // Service page
        service: {
            title: "サービス詳細",
            subtitle: "スッとサイトの特徴と提供内容",
            hero: {
                title: "あなたのビジネスを成功に導く<br>スッとサイト",
                subtitle: "AI技術を活用した高速・高品質なランディングページ制作"
            },
            features: {
                title: "サービスの特徴",
                items: [
                    {
                        title: "最速即日納品",
                        description: "AI技術を活用することで、従来の制作期間を大幅に短縮。最速即日での納品が可能です。"
                    },
                    {
                        title: "高品質デザイン",
                        description: "プロのデザイナーによる監修で、ビジネスに最適な高品質なデザインを提供します。"
                    },
                    {
                        title: "柔軟な対応",
                        description: "お客様のニーズに合わせて、デザインや機能をカスタマイズ。理想のLPを実現します。"
                    },
                    {
                        title: "充実のサポート",
                        description: "制作後も安心。修正対応や運用相談など、継続的なサポートを提供します。"
                    }
                ]
            },
            process: {
                title: "制作の流れ",
                steps: [
                    {
                        title: "お問い合わせ",
                        description: "まずはお気軽にご相談ください"
                    },
                    {
                        title: "ヒアリング",
                        description: "ご要望を詳しくお伺いします"
                    },
                    {
                        title: "デザイン制作",
                        description: "AI技術を活用して迅速に制作"
                    },
                    {
                        title: "確認・修正",
                        description: "ご満足いただけるまで調整"
                    },
                    {
                        title: "納品",
                        description: "完成したLPをお渡しします"
                    }
                ]
            },
            cta: {
                title: "今すぐLP制作を始めましょう",
                button: "お問い合わせはこちら"
            }
        },
        
        // Pricing page
        pricing: {
            title: "料金プラン",
            subtitle: "お客様のニーズに合わせた最適なプランをご用意",
            hero: {
                title: "シンプルで分かりやすい<br>料金体系",
                subtitle: "初期費用のみ。月額費用は一切かかりません"
            },
            comparison: {
                title: "プラン比較表",
                features: [
                    "オリジナルデザイン",
                    "レスポンシブ対応",
                    "SEO基本設定",
                    "お問い合わせフォーム",
                    "GSAPアニメーション",
                    "パララックス効果",
                    "インタラクティブ要素",
                    "プレミアムデザイン",
                    "納期"
                ],
                standard: {
                    name: "スタンダードプラン",
                    price: "¥20,000",
                    features: {
                        "納期": "最速即日〜"
                    }
                },
                rich: {
                    name: "リッチプラン",
                    price: "¥50,000",
                    features: {
                        "納期": "最速即日〜"
                    }
                }
            },
            faq: {
                title: "料金に関するよくある質問",
                items: [
                    {
                        question: "追加料金はかかりますか？",
                        answer: "基本的にはプラン料金のみで、追加料金はかかりません。ただし、大幅な仕様変更や追加機能のご要望がある場合は、別途お見積りをさせていただきます。"
                    },
                    {
                        question: "支払い方法は？",
                        answer: "銀行振込またはクレジットカード決済に対応しています。詳細はお問い合わせ時にご案内いたします。"
                    }
                ]
            }
        },
        
        // Portfolio page
        portfolio: {
            title: "サンプルサイト",
            subtitle: "様々な業界のLP制作実績をご覧ください",
            hero: {
                title: "豊富な制作実績",
                subtitle: "お客様のビジネスに最適なデザインをご提案します"
            },
            filter: {
                all: "すべて",
                standard: "スタンダード",
                rich: "リッチ版"
            },
            viewSite: "サイトを見る",
            categories: {
                beauty: "美容院",
                restaurant: "飲食店",
                ec: "EC",
                fitness: "フィットネス",
                education: "教育",
                medical: "医療",
                tech: "テクノロジー",
                event: "イベント",
                realestate: "不動産",
                apparel: "アパレル",
                travel: "旅行",
                npo: "NPO"
            }
        },
        
        // Contact page
        contact: {
            title: "お問い合わせ",
            subtitle: "LP制作に関するご相談はお気軽にどうぞ",
            hero: {
                title: "お問い合わせ",
                subtitle: "ご不明な点やご相談がございましたら、お気軽にお問い合わせください"
            },
            form: {
                name: "お名前",
                namePlaceholder: "山田太郎",
                email: "メールアドレス",
                emailPlaceholder: "example@email.com",
                company: "会社名（任意）",
                companyPlaceholder: "株式会社〇〇",
                plan: "ご興味のあるプラン",
                planOptions: {
                    select: "選択してください",
                    standard: "スタンダードプラン（¥20,000）",
                    rich: "リッチプラン（¥50,000）",
                    undecided: "未定"
                },
                message: "お問い合わせ内容",
                messagePlaceholder: "LP制作についてのご要望やご質問をお書きください",
                submit: "送信する",
                submitting: "送信中...",
                required: "必須"
            },
            success: {
                title: "送信完了",
                message: "お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡させていただきます。"
            },
            error: {
                title: "送信エラー",
                message: "送信中にエラーが発生しました。お手数ですが、しばらく経ってから再度お試しください。"
            }
        },
        
        // FAQ page
        faq: {
            title: "よくある質問",
            subtitle: "お客様からよくいただくご質問にお答えします",
            categories: {
                general: "一般的な質問",
                production: "制作について",
                pricing: "料金について",
                support: "サポートについて"
            },
            backToTop: "トップに戻る"
        },
        
        // About page
        about: {
            title: "私たちについて",
            subtitle: "スッとサイトの想い",
            hero: {
                title: "あなたのビジネスの<br>成長パートナーとして",
                subtitle: "最新技術と創造性で、成果を生み出すLPを制作します"
            },
            mission: {
                title: "私たちのミッション",
                content: "すべてのビジネスに、効果的なWebプレゼンスを。私たちは、AI技術を活用した高速・高品質なLP制作を通じて、お客様のビジネス成長を支援します。"
            },
            values: {
                title: "大切にしている価値観",
                items: [
                    {
                        title: "スピード",
                        description: "ビジネスチャンスを逃さない、迅速な対応"
                    },
                    {
                        title: "品質",
                        description: "妥協のない、高品質なデザインと機能"
                    },
                    {
                        title: "革新",
                        description: "最新技術を活用した、効率的な制作プロセス"
                    },
                    {
                        title: "誠実",
                        description: "お客様との信頼関係を第一に"
                    }
                ]
            }
        },
        
        // Privacy Policy page
        privacyPolicy: {
            title: "Privacy Policy",
            subtitle: "How we handle your personal information",
            lastUpdated: "Last updated",
            sections: {
                intro: "LP Creation Service (hereinafter referred to as \"we\" or \"our company\") is committed to protecting our customers' personal information. This Privacy Policy explains how we handle personal information collected from our customers.",
                article1: {
                    title: "Article 1 (Definition of Personal Information)",
                    content: "In this Privacy Policy, \"personal information\" refers to personal information as defined by the Personal Information Protection Act."
                },
                article2: {
                    title: "Article 2 (Information We Collect)",
                    content: "We may collect the following information:",
                    items: ["Name", "Email address", "Company name", "Inquiry content", "Other information provided by customers"]
                },
                article3: {
                    title: "Article 3 (Purpose of Use)",
                    content: "Collected personal information will be used for the following purposes:",
                    items: ["Service provision and operation", "Response to inquiries", "Service improvement and new service development", "Other related operations"]
                },
                article4: {
                    title: "Article 4 (Third-Party Provision)",
                    content: "We will not provide personal information to third parties without customer consent, except as required by law."
                },
                article5: {
                    title: "Article 5 (Security Management)",
                    content: "We implement appropriate security measures to prevent leakage, loss, or damage of personal information."
                },
                contactTitle: "Contact Information",
                contactEmail: "Email Address"
            }
        },
        
        // Terms of Service page
        terms: {
            title: "Terms of Service",
            subtitle: "For using this service",
            lastUpdated: "Last updated",
            sections: {
                intro: "These Terms of Service (hereinafter referred to as \"Terms\") set forth the conditions for use of the LP Creation Service (hereinafter referred to as \"Service\") provided by LP Creation Service (hereinafter referred to as \"we\" or \"our company\").",
                article1: {
                    title: "Article 1 (Application)",
                    content: "These Terms shall apply to all relationships between customers and our company regarding the use of this Service."
                },
                article2: {
                    title: "Article 2 (Registration)",
                    content: "Those who wish to use this Service shall apply for registration in the manner prescribed by our company after agreeing to these Terms."
                },
                article3: {
                    title: "Article 3 (Fees and Payment Methods)",
                    content: "Customers shall pay the fees separately determined by our company as consideration for using this Service in the manner specified by our company."
                },
                article4: {
                    title: "Article 4 (Prohibited Items)",
                    content: "Customers must not engage in the following acts when using this Service:",
                    items: ["Acts that violate laws or public order and morals", "Acts related to criminal activities", "Acts that may interfere with the operation of our services", "Other acts deemed inappropriate by our company"]
                },
                article5: {
                    title: "Article 5 (Disclaimer)",
                    content: "We shall not be liable for any damages incurred by customers in relation to this Service, except in cases of our intentional misconduct or gross negligence."
                }
            }
        },
        
        // Specified Commercial Transaction Act page
        law: {
            title: "Notation Based on Specified Commercial Transaction Act",
            subtitle: "Seller Information",
            sections: {
                serviceName: {
                    label: "Service Name",
                    value: "LP Creation Service"
                },
                description: {
                    label: "Service Content",
                    value: "Landing page creation and design"
                },
                price: {
                    label: "Sales Price",
                    value: "Listed on each plan page"
                },
                additionalFees: {
                    label: "Additional Fees",
                    value: "None (all included in displayed price)"
                },
                paymentMethod: {
                    label: "Payment Method",
                    value: "Bank transfer / Credit card payment"
                },
                paymentTiming: {
                    label: "Payment Timing",
                    value: "Within 1 week after delivery"
                },
                delivery: {
                    label: "Delivery Time",
                    value: "Same day to 5 business days after application"
                },
                cancellation: {
                    label: "Cancellation",
                    value: "Please check the cancellation policy page"
                },
                contact: {
                    label: "Contact",
                    value: "Please contact us through the inquiry form"
                }
            }
        },
        
        // Cancellation Policy page
        cancellationPolicy: {
            title: "Cancellation Policy",
            subtitle: "About cancellation and refunds",
            lastUpdated: "Last updated",
            sections: {
                intro: "This cancellation policy establishes the regulations for cancellation and refunds of the LP Creation Service.",
                beforeProduction: {
                    title: "Cancellation Before Production Start",
                    content: "After application, if before production starts, cancellation is possible free of charge."
                },
                duringProduction: {
                    title: "Cancellation During Production",
                    content: "For cancellations after production has started, the following fees will apply according to progress:",
                    stages: [
                        {
                            stage: "After hearing completion",
                            fee: "30% of fee"
                        },
                        {
                            stage: "After design proposal submission",
                            fee: "50% of fee"
                        },
                        {
                            stage: "After test site confirmation",
                            fee: "100% of fee (no refund)"
                        }
                    ]
                },
                afterDelivery: {
                    title: "Cancellation After Delivery",
                    content: "Cancellations and refunds after delivery completion are not accepted."
                },
                modifications: {
                    title: "About Modifications",
                    content: "Modifications before delivery are free up to 2 times. Additional fees may apply from the 3rd modification onward."
                },
                contact: {
                    title: "Cancellation Contact",
                    content: "If you wish to cancel, please contact us by email as soon as possible."
                }
            }
        }
    },
    
    en: {
        // Common navigation and footer
        nav: {
            logo: "LP Creation Service",
            service: "Service",
            pricing: "Pricing",
            samples: "Sample Sites",
            guide: "Publishing Guide",
            contact: "Contact"
        },
        
        footer: {
            companyName: "LP Creation Service",
            description: "High-speed, high-quality<br>landing page creation service utilizing AI technology",
            aiPowered: "🤖 AI Powered Development",
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
        
        // Service page
        service: {
            title: "Service Details",
            subtitle: "Features and offerings of our LP creation service",
            hero: {
                title: "LP Creation Service to<br>Lead Your Business to Success",
                subtitle: "High-speed, high-quality landing page creation utilizing AI technology"
            },
            features: {
                title: "Service Features",
                items: [
                    {
                        title: "Same-Day Delivery",
                        description: "By utilizing AI technology, we significantly reduce traditional production time. Same-day delivery is possible."
                    },
                    {
                        title: "High-Quality Design",
                        description: "Supervised by professional designers, we provide high-quality designs optimal for your business."
                    },
                    {
                        title: "Flexible Support",
                        description: "We customize design and features according to your needs. Realize your ideal LP."
                    },
                    {
                        title: "Comprehensive Support",
                        description: "Peace of mind after production. We provide ongoing support including revisions and operational consultation."
                    }
                ]
            },
            process: {
                title: "Production Flow",
                steps: [
                    {
                        title: "Inquiry",
                        description: "Please feel free to contact us"
                    },
                    {
                        title: "Consultation",
                        description: "We'll listen to your requirements in detail"
                    },
                    {
                        title: "Design Production",
                        description: "Quick production using AI technology"
                    },
                    {
                        title: "Review & Revision",
                        description: "Adjustments until you're satisfied"
                    },
                    {
                        title: "Delivery",
                        description: "We deliver the completed LP"
                    }
                ]
            },
            cta: {
                title: "Start Your LP Creation Now",
                button: "Contact Us"
            }
        },
        
        // Pricing page
        pricing: {
            title: "Pricing Plans",
            subtitle: "We offer optimal plans tailored to your needs",
            hero: {
                title: "Simple and Clear<br>Pricing Structure",
                subtitle: "One-time fee only. No monthly charges"
            },
            comparison: {
                title: "Plan Comparison",
                features: [
                    "Original Design",
                    "Responsive Design",
                    "Basic SEO Settings",
                    "Contact Form",
                    "GSAP Animations",
                    "Parallax Effects",
                    "Interactive Elements",
                    "Premium Design",
                    "Delivery Time"
                ],
                standard: {
                    name: "Standard Plan",
                    price: "¥20,000",
                    features: {
                        "Delivery Time": "From Same Day"
                    }
                },
                rich: {
                    name: "Rich Plan",
                    price: "¥50,000",
                    features: {
                        "Delivery Time": "From Same Day"
                    }
                }
            },
            faq: {
                title: "Frequently Asked Questions About Pricing",
                items: [
                    {
                        question: "Are there any additional charges?",
                        answer: "Basically, only the plan fee is charged, with no additional fees. However, for major specification changes or additional feature requests, we will provide a separate quote."
                    },
                    {
                        question: "What payment methods are available?",
                        answer: "We accept bank transfer or credit card payment. Details will be provided when you contact us."
                    }
                ]
            }
        },
        
        // Portfolio page
        portfolio: {
            title: "Sample Sites",
            subtitle: "Browse LP creation examples from various industries",
            hero: {
                title: "Extensive Portfolio",
                subtitle: "We propose the optimal design for your business"
            },
            filter: {
                all: "All",
                standard: "Standard",
                rich: "Rich Version"
            },
            viewSite: "View Site",
            categories: {
                beauty: "Beauty Salon",
                restaurant: "Restaurant",
                ec: "E-Commerce",
                fitness: "Fitness",
                education: "Education",
                medical: "Medical",
                tech: "Technology",
                event: "Event",
                realestate: "Real Estate",
                apparel: "Apparel",
                travel: "Travel",
                npo: "NPO"
            }
        },
        
        // Contact page
        contact: {
            title: "Contact",
            subtitle: "Feel free to consult about LP creation",
            hero: {
                title: "Contact Us",
                subtitle: "Please feel free to contact us if you have any questions or consultations"
            },
            form: {
                name: "Name",
                namePlaceholder: "John Doe",
                email: "Email Address",
                emailPlaceholder: "example@email.com",
                company: "Company (Optional)",
                companyPlaceholder: "Company Inc.",
                plan: "Plan of Interest",
                planOptions: {
                    select: "Please select",
                    standard: "Standard Plan (¥20,000)",
                    rich: "Rich Plan (¥50,000)",
                    undecided: "Undecided"
                },
                message: "Message",
                messagePlaceholder: "Please write your requirements or questions about LP creation",
                submit: "Submit",
                submitting: "Submitting...",
                required: "Required"
            },
            success: {
                title: "Submission Complete",
                message: "Thank you for your inquiry. We will review your message and contact you soon."
            },
            error: {
                title: "Submission Error",
                message: "An error occurred during submission. Please try again later."
            }
        },
        
        // FAQ page
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Answers to questions we often receive from customers",
            categories: {
                general: "General Questions",
                production: "About Production",
                pricing: "About Pricing",
                support: "About Support"
            },
            backToTop: "Back to Top"
        },
        
        // About page
        about: {
            title: "About Us",
            subtitle: "Our philosophy behind LP Creation Service",
            hero: {
                title: "As Your Business<br>Growth Partner",
                subtitle: "Creating LPs that generate results with the latest technology and creativity"
            },
            mission: {
                title: "Our Mission",
                content: "Effective web presence for every business. We support our customers' business growth through high-speed, high-quality LP creation using AI technology."
            },
            values: {
                title: "Values We Cherish",
                items: [
                    {
                        title: "Speed",
                        description: "Quick response to not miss business opportunities"
                    },
                    {
                        title: "Quality",
                        description: "Uncompromising high-quality design and functionality"
                    },
                    {
                        title: "Innovation",
                        description: "Efficient production process using the latest technology"
                    },
                    {
                        title: "Integrity",
                        description: "Prioritizing trust with our customers"
                    }
                ]
            }
        },
        
        // Privacy Policy page
        privacyPolicy: {
            title: "プライバシーポリシー",
            subtitle: "個人情報の取り扱いについて",
            lastUpdated: "最終更新日",
            sections: {
                intro: "スッとサイト（以下「当社」といいます。）は、お客様の個人情報の保護に努めております。本プライバシーポリシーは、当社がお客様から収集する個人情報の取り扱いについて説明するものです。",
                article1: {
                    title: "第1条（個人情報の定義）",
                    content: "本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指します。"
                },
                article2: {
                    title: "第2条（収集する情報）",
                    content: "当社は、以下の情報を収集することがあります。",
                    items: ["氏名", "メールアドレス", "会社名", "お問い合わせ内容", "その他お客様から提供いただく情報"]
                },
                article3: {
                    title: "第3条（利用目的）",
                    content: "収集した個人情報は、以下の目的で利用します。",
                    items: ["サービスの提供・運営", "お問い合わせへの対応", "サービスの改善・新サービスの開発", "その他上記に付随する業務"]
                },
                article4: {
                    title: "第4条（第三者提供）",
                    content: "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。"
                },
                article5: {
                    title: "第5条（安全管理）",
                    content: "当社は、個人情報の漏洩・紛失・破損等を防止するため、適切な安全管理措置を講じます。"
                },
                contactTitle: "お問い合わせ窓口",
                contactEmail: "メールアドレス"
            }
        },
        
        // Terms of Service page
        terms: {
            title: "利用規約",
            subtitle: "本サービスのご利用にあたって",
            lastUpdated: "最終更新日",
            sections: {
                intro: "本利用規約（以下「本規約」といいます。）は、スッとサイト（以下「当社」といいます。）が提供するスッとサイト（以下「本サービス」といいます。）の利用条件を定めるものです。",
                article1: {
                    title: "第1条（適用）",
                    content: "本規約は、お客様と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。"
                },
                article2: {
                    title: "第2条（利用登録）",
                    content: "本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。"
                },
                article3: {
                    title: "第3条（料金および支払方法）",
                    content: "お客様は、本サービスの利用対価として、当社が別途定める料金を、当社が指定する方法により支払うものとします。"
                },
                article4: {
                    title: "第4条（禁止事項）",
                    content: "お客様は、本サービスの利用にあたり、以下の行為をしてはなりません。",
                    items: ["法令または公序良俗に違反する行為", "犯罪行為に関連する行為", "当社のサービスの運営を妨害するおそれのある行為", "その他、当社が不適切と判断する行為"]
                },
                article5: {
                    title: "第5条（免責事項）",
                    content: "当社は、本サービスに関して、お客様に生じた損害について、当社の故意または重過失による場合を除き、一切の責任を負わないものとします。"
                }
            }
        },
        
        // Specified Commercial Transaction Act page
        law: {
            title: "特定商取引法に基づく表記",
            subtitle: "販売業者情報",
            sections: {
                serviceName: {
                    label: "サービス名",
                    value: "スッとサイト"
                },
                description: {
                    label: "サービス内容",
                    value: "ランディングページの制作・デザイン"
                },
                price: {
                    label: "販売価格",
                    value: "各プランページに記載"
                },
                additionalFees: {
                    label: "追加料金",
                    value: "なし（表示価格に全て含まれます）"
                },
                paymentMethod: {
                    label: "支払方法",
                    value: "銀行振込・クレジットカード決済"
                },
                paymentTiming: {
                    label: "支払時期",
                    value: "納品後1週間以内"
                },
                delivery: {
                    label: "納品時期",
                    value: "お申込み後、最短即日〜5営業日"
                },
                cancellation: {
                    label: "キャンセル",
                    value: "キャンセルポリシーページをご確認ください"
                },
                contact: {
                    label: "お問い合わせ",
                    value: "お問い合わせフォームよりご連絡ください"
                }
            }
        },
        
        // Cancellation Policy page
        cancellationPolicy: {
            title: "キャンセルポリシー",
            subtitle: "キャンセル・返金について",
            lastUpdated: "最終更新日",
            sections: {
                intro: "本キャンセルポリシーは、スッとサイトのキャンセルおよび返金に関する規定を定めるものです。",
                beforeProduction: {
                    title: "制作開始前のキャンセル",
                    content: "お申し込み後、制作開始前であれば、無料でキャンセルが可能です。"
                },
                duringProduction: {
                    title: "制作中のキャンセル",
                    content: "制作開始後のキャンセルは、進行状況に応じて以下の料金が発生します。",
                    stages: [
                        {
                            stage: "ヒアリング完了後",
                            fee: "料金の30%"
                        },
                        {
                            stage: "デザイン案提出後",
                            fee: "料金の50%"
                        },
                        {
                            stage: "テストサイト確認後",
                            fee: "料金の100%（返金なし）"
                        }
                    ]
                },
                afterDelivery: {
                    title: "納品後のキャンセル",
                    content: "納品完了後のキャンセル・返金はお受けできません。"
                },
                modifications: {
                    title: "修正対応について",
                    content: "納品前の修正は2回まで無料で対応いたします。3回目以降は別途料金が発生する場合があります。"
                },
                contact: {
                    title: "キャンセルのご連絡",
                    content: "キャンセルをご希望の場合は、お早めにメールにてご連絡ください。"
                }
            }
        }
    },
    
    zh: {
        // Common navigation and footer
        nav: {
            logo: "LP製作服務",
            service: "服務",
            pricing: "價格",
            samples: "範例網站",
            guide: "發布指南",
            contact: "聯絡我們"
        },
        
        footer: {
            companyName: "LP製作服務",
            description: "運用AI技術的高速、高品質<br>登陸頁製作服務",
            aiPowered: "🤖 AI Powered Development",
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
        
        // Service page
        service: {
            title: "服務詳情",
            subtitle: "LP製作服務的特色與提供內容",
            hero: {
                title: "引領您的業務邁向成功的<br>LP製作服務",
                subtitle: "運用AI技術的高速、高品質登陸頁製作"
            },
            features: {
                title: "服務特色",
                items: [
                    {
                        title: "最快當日交付",
                        description: "透過運用AI技術，大幅縮短傳統製作期間。最快可當日交付。"
                    },
                    {
                        title: "高品質設計",
                        description: "由專業設計師監修，提供最適合您業務的高品質設計。"
                    },
                    {
                        title: "靈活應對",
                        description: "根據客戶需求，客製化設計和功能。實現理想的LP。"
                    },
                    {
                        title: "完善的支援",
                        description: "製作後也安心。提供持續的支援，包括修改對應和營運諮詢。"
                    }
                ]
            },
            process: {
                title: "製作流程",
                steps: [
                    {
                        title: "諮詢",
                        description: "請隨時與我們聯絡"
                    },
                    {
                        title: "需求訪談",
                        description: "詳細了解您的需求"
                    },
                    {
                        title: "設計製作",
                        description: "運用AI技術快速製作"
                    },
                    {
                        title: "確認、修改",
                        description: "調整至您滿意為止"
                    },
                    {
                        title: "交付",
                        description: "交付完成的LP"
                    }
                ]
            },
            cta: {
                title: "立即開始LP製作",
                button: "聯絡我們"
            }
        },
        
        // Pricing page
        pricing: {
            title: "價格方案",
            subtitle: "我們提供符合客戶需求的最佳方案",
            hero: {
                title: "簡單明瞭的<br>價格體系",
                subtitle: "僅需初期費用。無任何月費"
            },
            comparison: {
                title: "方案比較表",
                features: [
                    "原創設計",
                    "響應式設計",
                    "基本SEO設定",
                    "聯絡表單",
                    "GSAP動畫",
                    "視差效果",
                    "互動元素",
                    "頂級設計",
                    "交期"
                ],
                standard: {
                    name: "標準方案",
                    price: "¥20,000",
                    features: {
                        "交期": "最快當日～"
                    }
                },
                rich: {
                    name: "豪華方案",
                    price: "¥50,000",
                    features: {
                        "交期": "最快當日～"
                    }
                }
            },
            faq: {
                title: "關於價格的常見問題",
                items: [
                    {
                        question: "是否有額外費用？",
                        answer: "基本上只收取方案費用，無額外費用。但如有重大規格變更或額外功能需求，將另行報價。"
                    },
                    {
                        question: "付款方式有哪些？",
                        answer: "我們接受銀行轉帳或信用卡付款。詳情將在諮詢時說明。"
                    }
                ]
            }
        },
        
        // Portfolio page
        portfolio: {
            title: "範例網站",
            subtitle: "瀏覽各行業的LP製作實績",
            hero: {
                title: "豐富的製作實績",
                subtitle: "我們為您的業務提供最佳設計方案"
            },
            filter: {
                all: "全部",
                standard: "標準版",
                rich: "豪華版"
            },
            viewSite: "查看網站",
            categories: {
                beauty: "美容院",
                restaurant: "餐廳",
                ec: "電商",
                fitness: "健身",
                education: "教育",
                medical: "醫療",
                tech: "科技",
                event: "活動",
                realestate: "房地產",
                apparel: "服飾",
                travel: "旅遊",
                npo: "非營利組織"
            }
        },
        
        // Contact page
        contact: {
            title: "聯絡我們",
            subtitle: "歡迎諮詢LP製作相關事宜",
            hero: {
                title: "聯絡我們",
                subtitle: "如有任何疑問或需要諮詢，請隨時與我們聯絡"
            },
            form: {
                name: "姓名",
                namePlaceholder: "王小明",
                email: "電子郵件",
                emailPlaceholder: "example@email.com",
                company: "公司名稱（選填）",
                companyPlaceholder: "○○股份有限公司",
                plan: "感興趣的方案",
                planOptions: {
                    select: "請選擇",
                    standard: "標準方案（¥20,000）",
                    rich: "豪華方案（¥50,000）",
                    undecided: "未定"
                },
                message: "諮詢內容",
                messagePlaceholder: "請寫下您對LP製作的需求或問題",
                submit: "送出",
                submitting: "送出中...",
                required: "必填"
            },
            success: {
                title: "送出完成",
                message: "感謝您的諮詢。我們將確認內容後，由負責人與您聯絡。"
            },
            error: {
                title: "送出錯誤",
                message: "送出時發生錯誤。請稍後再試。"
            }
        },
        
        // FAQ page
        faq: {
            title: "常見問題",
            subtitle: "回答客戶經常提出的問題",
            categories: {
                general: "一般問題",
                production: "關於製作",
                pricing: "關於價格",
                support: "關於支援"
            },
            backToTop: "回到頂部"
        },
        
        // About page
        about: {
            title: "關於我們",
            subtitle: "LP製作服務的理念",
            hero: {
                title: "作為您的業務<br>成長夥伴",
                subtitle: "以最新技術和創意，製作產生成果的LP"
            },
            mission: {
                title: "我們的使命",
                content: "為所有企業提供有效的網路形象。我們透過運用AI技術的高速、高品質LP製作，支援客戶的業務成長。"
            },
            values: {
                title: "我們重視的價值觀",
                items: [
                    {
                        title: "速度",
                        description: "不錯過商機的迅速應對"
                    },
                    {
                        title: "品質",
                        description: "毫不妥協的高品質設計和功能"
                    },
                    {
                        title: "創新",
                        description: "運用最新技術的高效製作流程"
                    },
                    {
                        title: "誠信",
                        description: "以客戶信任關係為首"
                    }
                ]
            }
        },
        
        // Privacy Policy page
        privacyPolicy: {
            title: "隱私政策",
            subtitle: "關於個人資訊的處理",
            lastUpdated: "最後更新日期",
            sections: {
                intro: "LP製作服務（以下稱「本公司」）致力於保護客戶的個人資訊。本隱私政策說明本公司如何處理從客戶收集的個人資訊。",
                article1: {
                    title: "第1條（個人資訊的定義）",
                    content: "本隱私政策中的「個人資訊」是指個人資訊保護法所定義的個人資訊。"
                },
                article2: {
                    title: "第2條（收集的資訊）",
                    content: "本公司可能收集以下資訊：",
                    items: ["姓名", "電子郵件地址", "公司名稱", "諮詢內容", "其他客戶提供的資訊"]
                },
                article3: {
                    title: "第3條（使用目的）",
                    content: "收集的個人資訊將用於以下目的：",
                    items: ["服務的提供、營運", "回應諮詢", "服務改善、新服務開發", "其他相關業務"]
                },
                article4: {
                    title: "第4條（第三方提供）",
                    content: "除法律規定的情況外，本公司不會在未經客戶同意的情況下向第三方提供個人資訊。"
                },
                article5: {
                    title: "第5條（安全管理）",
                    content: "本公司採取適當的安全管理措施，防止個人資訊的洩露、遺失或損壞。"
                },
                contactTitle: "聯絡窗口",
                contactEmail: "電子郵件地址"
            }
        },
        
        // Terms of Service page
        terms: {
            title: "使用條款",
            subtitle: "關於本服務的使用",
            lastUpdated: "最後更新日期",
            sections: {
                intro: "本使用條款（以下稱「本條款」）規定了LP製作服務（以下稱「本公司」）提供的LP製作服務（以下稱「本服務」）的使用條件。",
                article1: {
                    title: "第1條（適用）",
                    content: "本條款適用於客戶與本公司之間關於本服務使用的所有關係。"
                },
                article2: {
                    title: "第2條（使用註冊）",
                    content: "希望使用本服務的人，在同意本條款後，應按照本公司規定的方式申請使用註冊。"
                },
                article3: {
                    title: "第3條（費用及付款方式）",
                    content: "客戶應按照本公司指定的方式支付本公司另行規定的費用作為使用本服務的對價。"
                },
                article4: {
                    title: "第4條（禁止事項）",
                    content: "客戶在使用本服務時，不得從事以下行為：",
                    items: ["違反法律或公共秩序良俗的行為", "與犯罪行為相關的行為", "可能妨礙本公司服務營運的行為", "其他本公司認為不適當的行為"]
                },
                article5: {
                    title: "第5條（免責條款）",
                    content: "除因本公司故意或重大過失的情況外，本公司對客戶因本服務而產生的損害不承擔任何責任。"
                }
            }
        },
        
        // Specified Commercial Transaction Act page
        law: {
            title: "基於特定商業交易法的標示",
            subtitle: "銷售業者資訊",
            sections: {
                serviceName: {
                    label: "服務名稱",
                    value: "LP製作服務"
                },
                description: {
                    label: "服務內容",
                    value: "登陸頁的製作、設計"
                },
                price: {
                    label: "銷售價格",
                    value: "記載於各方案頁面"
                },
                additionalFees: {
                    label: "額外費用",
                    value: "無（全部包含在顯示價格中）"
                },
                paymentMethod: {
                    label: "付款方式",
                    value: "銀行轉帳、信用卡付款"
                },
                paymentTiming: {
                    label: "付款時期",
                    value: "交付後1週內"
                },
                delivery: {
                    label: "交付時期",
                    value: "申請後，最快當日～5個工作日"
                },
                cancellation: {
                    label: "取消",
                    value: "請確認取消政策頁面"
                },
                contact: {
                    label: "聯絡方式",
                    value: "請透過諮詢表單聯絡我們"
                }
            }
        },
        
        // Cancellation Policy page
        cancellationPolicy: {
            title: "取消政策",
            subtitle: "關於取消和退款",
            lastUpdated: "最後更新日期",
            sections: {
                intro: "本取消政策規定了LP製作服務的取消和退款相關規定。",
                beforeProduction: {
                    title: "製作開始前的取消",
                    content: "申請後，如果在製作開始前，可以免費取消。"
                },
                duringProduction: {
                    title: "製作中的取消",
                    content: "製作開始後的取消，將根據進度收取以下費用：",
                    stages: [
                        {
                            stage: "需求訪談完成後",
                            fee: "費用的30%"
                        },
                        {
                            stage: "設計方案提交後",
                            fee: "費用的50%"
                        },
                        {
                            stage: "測試網站確認後",
                            fee: "費用的100%（不退款）"
                        }
                    ]
                },
                afterDelivery: {
                    title: "交付後的取消",
                    content: "交付完成後不接受取消、退款。"
                },
                modifications: {
                    title: "關於修改對應",
                    content: "交付前的修改免費對應2次。第3次起可能產生額外費用。"
                },
                contact: {
                    title: "取消聯絡",
                    content: "如希望取消，請儘早透過電子郵件聯絡我們。"
                }
            }
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
    updateSubpageLanguage(currentLang);
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
    updateSubpageLanguage(lang);
}

// Update page content with translations
function updateSubpageLanguage(lang) {
    const t = subpageTranslations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
    
    // Update common navigation
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = t.nav.logo;
    
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
    
    // Update footer
    const footerSectionTitles = document.querySelectorAll('.footer-section h4');
    if (footerSectionTitles.length >= 3) {
        footerSectionTitles[0].textContent = t.footer.companyName;
        footerSectionTitles[1].textContent = t.footer.sections.service;
        footerSectionTitles[2].textContent = t.footer.sections.contact;
    }
    
    const footerDescription = document.querySelector('.footer-content p');
    if (footerDescription) footerDescription.innerHTML = t.footer.description;
    
    const aiPoweredText = document.querySelector('.footer-section p[style*="font-size: 1.2rem"]');
    if (aiPoweredText) aiPoweredText.textContent = t.footer.aiPowered;
    
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
    
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t.footer.copyright;
    
    // Page-specific translations
    const pageName = detectCurrentPage();
    updatePageSpecificContent(pageName, t);
    
    // Debug logging
    console.log('Language changed to:', lang, 'on page:', pageName);
}

// Detect current page
function detectCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('service.html')) return 'service';
    if (path.includes('pricing.html')) return 'pricing';
    if (path.includes('portfolio.html')) return 'portfolio';
    if (path.includes('contact.html')) return 'contact';
    if (path.includes('faq.html')) return 'faq';
    if (path.includes('about.html')) return 'about';
    if (path.includes('privacy.html')) return 'privacy';
    if (path.includes('terms.html')) return 'terms';
    if (path.includes('law.html')) return 'law';
    if (path.includes('cancellation-policy.html')) return 'cancellationPolicy';
    if (path.includes('questionnaire.html')) return 'questionnaire';
    return 'unknown';
}

// Update page-specific content
function updatePageSpecificContent(pageName, t) {
    switch (pageName) {
        case 'service':
            updateServicePage(t.service);
            break;
        case 'pricing':
            updatePricingPage(t.pricing);
            break;
        case 'portfolio':
            updatePortfolioPage(t.portfolio);
            break;
        case 'contact':
            updateContactPage(t.contact);
            break;
        case 'faq':
            updateFAQPage(t.faq);
            break;
        case 'about':
            updateAboutPage(t.about);
            break;
        case 'privacy':
            updatePrivacyPage(t.privacyPolicy);
            break;
        case 'terms':
            updateTermsPage(t.terms);
            break;
        case 'law':
            updateLawPage(t.law);
            break;
        case 'cancellationPolicy':
            updateCancellationPolicyPage(t.cancellationPolicy);
            break;
        case 'questionnaire':
            updateQuestionnairePage(t.questionnaire || {});
            break;
    }
}

// Update Service page
function updateServicePage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    // Update features section
    const featuresTitle = document.querySelector('.features-section h2');
    if (featuresTitle) featuresTitle.textContent = t.features.title;
    
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems.length >= 4) {
        featureItems.forEach((item, index) => {
            if (t.features.items[index]) {
                const title = item.querySelector('h3');
                const description = item.querySelector('p');
                if (title) title.textContent = t.features.items[index].title;
                if (description) description.textContent = t.features.items[index].description;
            }
        });
    }
    
    // Update process section
    const processTitle = document.querySelector('.process-section h2');
    if (processTitle) processTitle.textContent = t.process.title;
    
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length >= 5) {
        processSteps.forEach((step, index) => {
            if (t.process.steps[index]) {
                const title = step.querySelector('h3');
                const description = step.querySelector('p');
                if (title) title.textContent = t.process.steps[index].title;
                if (description) description.textContent = t.process.steps[index].description;
            }
        });
    }
    
    // Update CTA
    const ctaTitle = document.querySelector('.cta-section h2');
    if (ctaTitle) ctaTitle.textContent = t.cta.title;
    
    const ctaButton = document.querySelector('.cta-section .btn-primary');
    if (ctaButton) ctaButton.textContent = t.cta.button;
}

// Update Pricing page
function updatePricingPage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    // Update comparison table
    const comparisonTitle = document.querySelector('.comparison-section h2');
    if (comparisonTitle) comparisonTitle.textContent = t.comparison.title;
    
    // Update plan names and prices
    const standardPlan = document.querySelector('.plan-column.standard');
    if (standardPlan) {
        const name = standardPlan.querySelector('h3');
        const price = standardPlan.querySelector('.price');
        if (name) name.textContent = t.comparison.standard.name;
        if (price) price.textContent = t.comparison.standard.price;
    }
    
    const richPlan = document.querySelector('.plan-column.rich');
    if (richPlan) {
        const name = richPlan.querySelector('h3');
        const price = richPlan.querySelector('.price');
        if (name) name.textContent = t.comparison.rich.name;
        if (price) price.textContent = t.comparison.rich.price;
    }
    
    // Update FAQ section
    const faqTitle = document.querySelector('.faq-section h2');
    if (faqTitle) faqTitle.textContent = t.faq.title;
    
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 2) {
        faqItems.forEach((item, index) => {
            if (t.faq.items[index]) {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                if (question) question.textContent = t.faq.items[index].question;
                if (answer) answer.textContent = t.faq.items[index].answer;
            }
        });
    }
}

// Update Portfolio page
function updatePortfolioPage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    // Update filter buttons - only update the 'all' button
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length >= 1) {
        filterButtons[0].textContent = t.filter.all;
        // Do not update other filter buttons as they are category-specific
    }
    
    // Update portfolio categories
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    portfolioCategories.forEach(category => {
        const categoryText = category.textContent.trim();
        // Map Japanese categories to translation keys
        const categoryMap = {
            '美容院': 'beauty',
            '飲食店': 'restaurant',
            'EC': 'ec',
            'フィットネス': 'fitness',
            '教育': 'education',
            '医療': 'medical',
            'テクノロジー': 'tech',
            'イベント': 'event',
            '不動産': 'realestate',
            'アパレル': 'apparel',
            '旅行': 'travel',
            'NPO': 'npo'
        };
        
        const categoryKey = categoryMap[categoryText];
        if (categoryKey && t.categories[categoryKey]) {
            category.textContent = t.categories[categoryKey];
        }
    });
    
    // Update "View Site" buttons
    const viewSiteButtons = document.querySelectorAll('.portfolio-link');
    viewSiteButtons.forEach(button => {
        if (button.textContent.includes('サイトを見る')) {
            button.textContent = t.viewSite;
        }
    });
}

// Update Contact page
function updateContactPage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    // Update form labels
    const formLabels = {
        'お名前': t.form.name,
        'メールアドレス': t.form.email,
        '会社名（任意）': t.form.company,
        'ご興味のあるプラン': t.form.plan,
        'お問い合わせ内容': t.form.message
    };
    
    document.querySelectorAll('.form-group label').forEach(label => {
        const labelText = label.textContent.replace('*', '').trim();
        if (formLabels[labelText]) {
            const required = label.textContent.includes('*');
            label.innerHTML = formLabels[labelText] + (required ? `<span class="required">*</span>` : '');
        }
    });
    
    // Update placeholders
    const namePlaceholder = document.querySelector('input[name="name"]');
    if (namePlaceholder) namePlaceholder.placeholder = t.form.namePlaceholder;
    
    const emailPlaceholder = document.querySelector('input[name="email"]');
    if (emailPlaceholder) emailPlaceholder.placeholder = t.form.emailPlaceholder;
    
    const companyPlaceholder = document.querySelector('input[name="company"]');
    if (companyPlaceholder) companyPlaceholder.placeholder = t.form.companyPlaceholder;
    
    const messagePlaceholder = document.querySelector('textarea[name="message"]');
    if (messagePlaceholder) messagePlaceholder.placeholder = t.form.messagePlaceholder;
    
    // Update select options
    const planSelect = document.querySelector('select[name="plan"]');
    if (planSelect) {
        planSelect.options[0].textContent = t.form.planOptions.select;
        planSelect.options[1].textContent = t.form.planOptions.standard;
        planSelect.options[2].textContent = t.form.planOptions.rich;
        planSelect.options[3].textContent = t.form.planOptions.undecided;
    }
    
    // Update submit button
    const submitButton = document.querySelector('.submit-btn');
    if (submitButton && !submitButton.disabled) {
        submitButton.textContent = t.form.submit;
    }
    
    // Update required text
    const requiredText = document.querySelector('.required');
    if (requiredText) requiredText.textContent = t.form.required;
}

// Update FAQ page
function updateFAQPage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    // Update category titles
    const categoryTitles = document.querySelectorAll('.faq-category h2');
    if (categoryTitles.length >= 4) {
        categoryTitles[0].textContent = t.categories.general;
        categoryTitles[1].textContent = t.categories.production;
        categoryTitles[2].textContent = t.categories.pricing;
        categoryTitles[3].textContent = t.categories.support;
    }
    
    // Update back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) backToTop.textContent = t.backToTop;
}

// Update About page
function updateAboutPage(t) {
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    // Update mission section
    const missionTitle = document.querySelector('.mission-section h2');
    if (missionTitle) missionTitle.textContent = t.mission.title;
    
    const missionContent = document.querySelector('.mission-content');
    if (missionContent) missionContent.textContent = t.mission.content;
    
    // Update values section
    const valuesTitle = document.querySelector('.values-section h2');
    if (valuesTitle) valuesTitle.textContent = t.values.title;
    
    const valueItems = document.querySelectorAll('.value-item');
    if (valueItems.length >= 4) {
        valueItems.forEach((item, index) => {
            if (t.values.items[index]) {
                const title = item.querySelector('h3');
                const description = item.querySelector('p');
                if (title) title.textContent = t.values.items[index].title;
                if (description) description.textContent = t.values.items[index].description;
            }
        });
    }
}// Legal page update functions for subpage-language.js

// Update Privacy Policy page
function updatePrivacyPage(t) {
    if (!t) return;
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    // Update last updated
    const lastUpdated = document.querySelector('.last-updated');
    if (lastUpdated) {
        const date = lastUpdated.textContent.match(/\d{4}年\d{1,2}月\d{1,2}日/);
        if (date) {
            lastUpdated.textContent = t.lastUpdated + ': ' + date[0];
        }
    }
    
    // Update intro
    const intro = document.querySelector('.content > p:first-of-type');
    if (intro && t.sections.intro) intro.textContent = t.sections.intro;
    
    // Update articles
    const articles = ['article1', 'article2', 'article3', 'article4', 'article5'];
    articles.forEach(articleKey => {
        if (t.sections[articleKey]) {
            const titleSelector = `h2:contains("第${articleKey.slice(-1)}条")`;
            const titleElement = Array.from(document.querySelectorAll('h2')).find(h2 => 
                h2.textContent.includes(`第${articleKey.slice(-1)}条`)
            );
            if (titleElement) {
                titleElement.textContent = t.sections[articleKey].title;
                const contentElement = titleElement.nextElementSibling;
                if (contentElement && contentElement.tagName === 'P') {
                    contentElement.textContent = t.sections[articleKey].content;
                }
                // Handle list items if they exist
                if (t.sections[articleKey].items) {
                    let listElement = contentElement.nextElementSibling;
                    if (listElement && listElement.tagName === 'UL') {
                        const listItems = listElement.querySelectorAll('li');
                        listItems.forEach((li, index) => {
                            if (t.sections[articleKey].items[index]) {
                                li.textContent = t.sections[articleKey].items[index];
                            }
                        });
                    }
                }
            }
        }
    });
    
    // Update contact section
    const contactTitle = Array.from(document.querySelectorAll('h2')).find(h2 => 
        h2.textContent.includes('お問い合わせ窓口')
    );
    if (contactTitle && t.sections.contactTitle) {
        contactTitle.textContent = t.sections.contactTitle;
    }
}

// Update Terms of Service page
function updateTermsPage(t) {
    if (!t) return;
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    // Update last updated
    const lastUpdated = document.querySelector('.last-updated');
    if (lastUpdated) {
        const date = lastUpdated.textContent.match(/\d{4}年\d{1,2}月\d{1,2}日/);
        if (date) {
            lastUpdated.textContent = t.lastUpdated + ': ' + date[0];
        }
    }
    
    // Update intro
    const intro = document.querySelector('.content > p:first-of-type');
    if (intro && t.sections.intro) intro.textContent = t.sections.intro;
    
    // Update articles
    const articles = ['article1', 'article2', 'article3', 'article4', 'article5'];
    articles.forEach(articleKey => {
        if (t.sections[articleKey]) {
            const titleElement = Array.from(document.querySelectorAll('h2')).find(h2 => 
                h2.textContent.includes(`第${articleKey.slice(-1)}条`)
            );
            if (titleElement) {
                titleElement.textContent = t.sections[articleKey].title;
                const contentElement = titleElement.nextElementSibling;
                if (contentElement && contentElement.tagName === 'P') {
                    contentElement.textContent = t.sections[articleKey].content;
                }
                // Handle list items if they exist
                if (t.sections[articleKey].items) {
                    let listElement = contentElement.nextElementSibling;
                    if (listElement && listElement.tagName === 'UL') {
                        const listItems = listElement.querySelectorAll('li');
                        listItems.forEach((li, index) => {
                            if (t.sections[articleKey].items[index]) {
                                li.textContent = t.sections[articleKey].items[index];
                            }
                        });
                    }
                }
            }
        }
    });
}

// Update Law (Specified Commercial Transaction Act) page
function updateLawPage(t) {
    if (!t) return;
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    // Update table rows
    const tableRows = document.querySelectorAll('.info-table tr');
    const sectionKeys = ['serviceName', 'description', 'price', 'additionalFees', 'paymentMethod', 
                        'paymentTiming', 'delivery', 'cancellation', 'contact'];
    
    tableRows.forEach((row, index) => {
        if (sectionKeys[index] && t.sections[sectionKeys[index]]) {
            const th = row.querySelector('th');
            const td = row.querySelector('td');
            if (th) th.textContent = t.sections[sectionKeys[index]].label;
            if (td) td.textContent = t.sections[sectionKeys[index]].value;
        }
    });
}

// Update Cancellation Policy page
function updateCancellationPolicyPage(t) {
    if (!t) return;
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = t.title + ' | ' + subpageTranslations[currentLang].nav.logo;
    
    // Update hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.title;
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    
    // Update last updated
    const lastUpdated = document.querySelector('.last-updated');
    if (lastUpdated) {
        const date = lastUpdated.textContent.match(/\d{4}年\d{1,2}月\d{1,2}日/);
        if (date) {
            lastUpdated.textContent = t.lastUpdated + ': ' + date[0];
        }
    }
    
    // Update intro
    const intro = document.querySelector('.content > p:first-of-type');
    if (intro && t.sections.intro) intro.textContent = t.sections.intro;
    
    // Update sections
    const sectionMappings = {
        '制作開始前のキャンセル': 'beforeProduction',
        '制作中のキャンセル': 'duringProduction',
        '納品後のキャンセル': 'afterDelivery',
        '修正対応について': 'modifications',
        'キャンセルのご連絡': 'contact'
    };
    
    Object.entries(sectionMappings).forEach(([jpTitle, sectionKey]) => {
        const section = t.sections[sectionKey];
        if (!section) return;
        
        const titleElement = Array.from(document.querySelectorAll('h2')).find(h2 => 
            h2.textContent.includes(jpTitle)
        );
        
        if (titleElement) {
            titleElement.textContent = section.title;
            const contentElement = titleElement.nextElementSibling;
            if (contentElement && contentElement.tagName === 'P') {
                contentElement.textContent = section.content;
            }
            
            // Handle stages table for during production
            if (sectionKey === 'duringProduction' && section.stages) {
                const table = titleElement.parentElement.querySelector('table');
                if (table) {
                    const rows = table.querySelectorAll('tbody tr');
                    rows.forEach((row, index) => {
                        if (section.stages[index]) {
                            const cells = row.querySelectorAll('td');
                            if (cells[0]) cells[0].textContent = section.stages[index].stage;
                            if (cells[1]) cells[1].textContent = section.stages[index].fee;
                        }
                    });
                }
            }
        }
    });
}

// Update Questionnaire page (placeholder for now)
function updateQuestionnairePage(t) {
    // Questionnaire page specific translations can be added later
    const pageTitle = document.querySelector('title');
    if (pageTitle) pageTitle.textContent = 'お問い合わせ | ' + subpageTranslations[currentLang].nav.logo;
}