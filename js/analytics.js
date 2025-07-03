// Google Analytics設定
const GA_MEASUREMENT_ID = 'G-2W2NSTXJNG'; // LP制作サービス本番サイト

// Google Analytics gtag.js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// 基本設定
gtag('config', GA_MEASUREMENT_ID, {
    // クッキーの設定
    cookie_domain: 'auto',
    cookie_expires: 63072000, // 2年
    cookie_prefix: 'lp_service',
    cookie_update: true,
    
    // プライバシー設定
    anonymize_ip: true, // IPアドレスの匿名化
    allow_google_signals: true,
    allow_ad_personalization_signals: false,
    
    // その他の設定
    send_page_view: true // 自動ページビュー送信
});

// カスタムイベント関数
const Analytics = {
    // ページビューを手動で送信
    trackPageView: function(pagePath, pageTitle) {
        gtag('event', 'page_view', {
            page_path: pagePath,
            page_title: pageTitle
        });
    },
    
    // フォーム送信をトラッキング
    trackFormSubmit: function(formName) {
        gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: formName,
            value: 1
        });
    },
    
    // 外部リンククリックをトラッキング
    trackOutboundLink: function(url) {
        gtag('event', 'click', {
            event_category: 'outbound',
            event_label: url,
            transport_type: 'beacon'
        });
    },
    
    // スクロール深度をトラッキング
    trackScrollDepth: function(percentage) {
        gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: percentage + '%',
            value: percentage
        });
    },
    
    // CTAボタンクリックをトラッキング
    trackCTAClick: function(buttonName, location) {
        gtag('event', 'cta_click', {
            event_category: 'engagement',
            event_label: buttonName,
            button_location: location
        });
    },
    
    // サンプルサイト閲覧をトラッキング
    trackSampleView: function(sampleName) {
        gtag('event', 'view_item', {
            event_category: 'samples',
            event_label: sampleName,
            value: 1
        });
    }
};

// スクロール深度トラッキングの設定
let scrollDepthMarks = [25, 50, 75, 100];
let scrollDepthHit = [];

window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
    
    scrollDepthMarks.forEach(function(mark) {
        if (scrollPercent >= mark && !scrollDepthHit.includes(mark)) {
            scrollDepthHit.push(mark);
            Analytics.trackScrollDepth(mark);
        }
    });
});

// 外部リンクの自動トラッキング
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            Analytics.trackOutboundLink(this.href);
        });
    });
    
    // CTAボタンのトラッキング
    const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta, .pricing-cta, [class*="cta"]');
    
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.className || 'unknown';
            Analytics.trackCTAClick(buttonText, section);
        });
    });
});

// エクスポート（他のスクリプトから使用可能）
window.Analytics = Analytics;