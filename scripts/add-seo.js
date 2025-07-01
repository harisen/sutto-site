// SEO最適化スクリプト - メタタグと構造化データを追加

const fs = require('fs');
const path = require('path');

// 各サンプルページのSEO情報
const seoData = {
    'beauty-salon': {
        title: 'Salon de Beauté - 渋谷の隠れ家美容室 | カット・カラー・トリートメント',
        description: '渋谷駅徒歩5分の隠れ家的プライベートサロン。経験豊富なスタイリストが、あなたの魅力を最大限に引き出します。初回限定20%OFF。',
        keywords: '美容室,渋谷,ヘアサロン,カット,カラー,トリートメント,パーマ',
        ogImage: 'https://example.com/images/beauty-salon-og.jpg',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Salon de Beauté",
            "image": "https://example.com/images/salon-image.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "渋谷区神宮前1-2-3 ビル4F",
                "addressLocality": "渋谷区",
                "addressRegion": "東京都",
                "postalCode": "150-0001",
                "addressCountry": "JP"
            },
            "telephone": "+81-3-1234-5678",
            "openingHours": ["Tu-Fr 10:00-20:00", "Sa-Su 09:00-19:00"],
            "priceRange": "¥¥"
        }
    },
    'restaurant': {
        title: 'Ristorante Bella Vista - 本格イタリアンレストラン | 東京・青山',
        description: '厳選食材と熟練シェフが織りなす本格イタリアン。デート、接待、家族での特別な食事に。心に残る食事体験をお約束します。ランチ2,800円〜',
        keywords: 'イタリアン,レストラン,青山,ディナー,ランチ,デート,接待',
        ogImage: 'https://example.com/images/restaurant-og.jpg',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Ristorante Bella Vista",
            "image": "https://example.com/images/restaurant-image.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "港区南青山3-4-5",
                "addressLocality": "港区",
                "addressRegion": "東京都",
                "postalCode": "107-0062",
                "addressCountry": "JP"
            },
            "telephone": "+81-3-1234-5678",
            "servesCuisine": "Italian",
            "priceRange": "¥¥¥",
            "openingHours": ["Mo-Fr 11:30-14:30,18:00-22:00", "Sa-Su 11:30-15:00,17:30-22:00"]
        }
    },
    'ec-shop': {
        title: 'VitaBoost公式サイト - 健康サプリメント | 初回50%OFF',
        description: '初回限定50%OFF！厳選された天然成分配合の健康サプリメント。30日間返金保証付きで安心してお試しいただけます。送料無料。',
        keywords: '健康サプリ,サプリメント,健康食品,ビタミン,ミネラル,通販',
        ogImage: 'https://example.com/images/vitaboost-og.jpg',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "VitaBoost",
            "image": "https://example.com/images/vitaboost-product.jpg",
            "description": "厳選された天然成分を贅沢に配合した健康サプリメント",
            "brand": {
                "@type": "Brand",
                "name": "VitaBoost"
            },
            "offers": {
                "@type": "Offer",
                "price": "3990",
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock",
                "seller": {
                    "@type": "Organization",
                    "name": "株式会社ヘルスケア"
                }
            }
        }
    },
    'event': {
        title: 'Tech Conference 2025 - 日本最大級のテクノロジーカンファレンス',
        description: '2025年3月15-16日開催。AI、クラウド、セキュリティなど最新技術トレンドを2日間で学ぶ。早割チケット販売中！東京国際フォーラム。',
        keywords: 'テックカンファレンス,技術イベント,AI,クラウド,セキュリティ,東京',
        ogImage: 'https://example.com/images/techconf-og.jpg',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Tech Conference 2025",
            "startDate": "2025-03-15T10:00:00+09:00",
            "endDate": "2025-03-16T17:00:00+09:00",
            "location": {
                "@type": "Place",
                "name": "東京国際フォーラム",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "丸の内3-5-1",
                    "addressLocality": "千代田区",
                    "addressRegion": "東京都",
                    "postalCode": "100-0005",
                    "addressCountry": "JP"
                }
            },
            "offers": {
                "@type": "Offer",
                "name": "早割チケット",
                "price": "15000",
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01T00:00:00+09:00",
                "validThrough": "2025-02-15T23:59:59+09:00"
            }
        }
    },
    'professional': {
        title: '山田法律事務所 - 企業法務・M&A・知的財産 | 東京',
        description: '企業法務、M&A、知的財産を中心に、20年以上の実績と専門性で企業の成長を法的側面からサポート。初回相談無料。東京駅徒歩3分。',
        keywords: '法律事務所,企業法務,M&A,知的財産,弁護士,東京',
        ogImage: 'https://example.com/images/law-office-og.jpg',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "山田法律事務所",
            "image": "https://example.com/images/law-office.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "丸の内1-8-3 丸の内トラストタワー本館20階",
                "addressLocality": "千代田区",
                "addressRegion": "東京都",
                "postalCode": "100-0005",
                "addressCountry": "JP"
            },
            "telephone": "+81-3-1234-5678",
            "openingHours": "Mo-Fr 09:00-18:00",
            "areaServed": "JP",
            "priceRange": "¥¥¥¥"
        }
    }
};

// メタタグを生成する関数
function generateMetaTags(data) {
    return `
    <!-- SEO Meta Tags -->
    <meta name="keywords" content="${data.keywords}">
    <meta name="author" content="LP制作サービス">
    <link rel="canonical" href="https://example.com/samples/${data.path}/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://example.com/samples/${data.path}/">
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:image" content="${data.ogImage}">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://example.com/samples/${data.path}/">
    <meta property="twitter:title" content="${data.title}">
    <meta property="twitter:description" content="${data.description}">
    <meta property="twitter:image" content="${data.ogImage}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(data.structuredData, null, 2)}
    </script>`;
}

// 各サンプルページを更新
Object.entries(seoData).forEach(([folderName, data]) => {
    const filePath = path.join(__dirname, '..', 'samples', folderName, 'index.html');
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // titleタグを更新
        content = content.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);
        
        // descriptionメタタグを更新
        content = content.replace(
            /<meta name="description" content=".*?">/,
            `<meta name="description" content="${data.description}">`
        );
        
        // 追加のメタタグを挿入（</head>の前に）
        const metaTags = generateMetaTags({ ...data, path: folderName });
        content = content.replace('</head>', metaTags + '\n</head>');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ SEO最適化完了: ${folderName}/index.html`);
    } catch (error) {
        console.error(`❌ エラー: ${folderName}/index.html - ${error.message}`);
    }
});

console.log('\n🎉 すべてのSEO最適化が完了しました！');