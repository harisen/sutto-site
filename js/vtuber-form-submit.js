// VTuberフォーム送信処理
// EmailJSを使用したメール送信の実装

// EmailJS初期化（実際の使用時は適切なIDに置き換える必要があります）
(function() {
    // emailjs.init("YOUR_USER_ID"); // EmailJSのUser IDを設定
})();

// フォーム送信処理
async function submitVTuberForm(formData) {
    // フォームデータを整形
    const emailContent = formatEmailContent(formData);
    
    // メール送信パラメータ
    const templateParams = {
        to_email: 'sutto.apps@gmail.com',
        from_name: formData.contact_name,
        from_email: formData.email,
        subject: `VTuberプラン申し込み - ${formData.vtuber_name}様`,
        message: emailContent
    };
    
    // 実際のEmailJS送信（現在はコメントアウト）
    // try {
    //     const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
    //     console.log('メール送信成功:', response);
    //     return true;
    // } catch (error) {
    //     console.error('メール送信エラー:', error);
    //     throw error;
    // }
    
    // 開発環境用：コンソールに出力
    console.log('=== VTuberプラン申し込み内容 ===');
    console.log(emailContent);
    console.log('================================');
    
    // 仮の成功レスポンス
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}

// メール内容のフォーマット
function formatEmailContent(data) {
    let content = `
【VTuberプラン申し込み】

■ 基本情報
VTuber名: ${data.vtuber_name}
お名前（担当者様）: ${data.contact_name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未記入'}

■ 見積もり情報
暫定見積もり金額: ¥${parseInt(data.estimated_price).toLocaleString()}
選択オプション: ${data.selected_options.join('、') || 'なし'}

■ お友達紹介キャンペーン
利用: ${data.referral_use ? 'あり' : 'なし'}
${data.referral_use ? `紹介VTuber様: ${data.referral_name}
関連リンク: ${data.referral_link || '未記入'}
連絡先: ${data.referral_email || '未記入'}` : ''}

■ VTuberについて
コンセプト・世界観:
${data.concept}

主な配信内容: ${data.content_types.join('、')}
ターゲット層: ${data.target_audience || '未記入'}
配信プラットフォーム: ${data.platforms.join('、')}

■ SNS・配信リンク情報
X（旧Twitter）: ${data.x_url || '未記入'}
YouTube: ${data.youtube_url || '未記入'}
Twitch: ${data.twitch_url || '未記入'}
その他のリンク:
${data.other_links || '未記入'}

ハッシュタグ: ${data.hashtags || '未記入'}

■ サイトについて
掲載希望セクション: ${data.sections.join('、')}

希望するデザイン:
${data.design_preference || '未記入'}

参考サイト:
${data.reference_sites || '未記入'}

■ 提供可能な素材
${data.materials.length > 0 ? data.materials.join('、') : 'なし'}

素材ダウンロードリンク:
${data.material_links || '未記入'}

■ その他
希望納期: ${data.deadline || '特になし'}

その他ご要望:
${data.other_requests || '特になし'}

---
送信日時: ${new Date().toLocaleString('ja-JP')}
`;
    
    return content;
}

// 代替送信方法：フォームデータをメールクライアントで開く
function openMailClient(formData) {
    const subject = encodeURIComponent(`VTuberプラン申し込み - ${formData.vtuber_name}様`);
    const body = encodeURIComponent(formatEmailContent(formData));
    const mailtoLink = `mailto:sutto.apps@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
}

// エクスポート
window.submitVTuberForm = submitVTuberForm;
window.openMailClient = openMailClient;