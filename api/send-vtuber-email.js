// Vercel Serverless Function for sending VTuber plan emails with Resend
// このファイルを /api/send-vtuber-email.js に配置してください

const { Resend } = require('resend');

// Resend APIキーを環境変数から取得
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  // CORSヘッダーを設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONSリクエストの処理
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POSTリクエストのみ受け付ける
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Received VTuber plan request:', req.method);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    
    const data = req.body;

    // メール本文を作成
    const emailHtml = `
      <h2>VTuberプラン申し込みが送信されました</h2>
      
      <h3>基本情報</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>VTuber名</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.vtuber_name || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>お名前（担当者様）</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.contact_name || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>メールアドレス</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.email || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>電話番号</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.phone || '未記入'}</td>
        </tr>
      </table>

      <h3>見積もり情報</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>暫定見積もり金額</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">¥${parseInt(data.estimated_price || 0).toLocaleString()}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>選択オプション</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.selected_options?.join('、') || 'なし'}</td>
        </tr>
      </table>

      ${data.referral_use ? `
      <h3>お友達紹介キャンペーン</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>紹介VTuber様</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.referral_name || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>関連リンク</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.referral_link || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>連絡先</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.referral_email || '未記入'}</td>
        </tr>
      </table>
      ` : ''}

      <h3>VTuberについて</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>コンセプト・世界観</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.concept || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>主な配信内容</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.content_types?.join('、') || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>ターゲット層</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.target_audience || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>配信プラットフォーム</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.platforms?.join('、') || ''}</td>
        </tr>
      </table>

      <h3>SNS・配信リンク情報</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>X（旧Twitter）</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.x_url || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>YouTube</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.youtube_url || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>Twitch</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.twitch_url || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>その他のリンク</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.other_links || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>ハッシュタグ</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.hashtags || '未記入'}</td>
        </tr>
      </table>

      <h3>サイトについて</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>掲載セクション</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.sections?.join('、') || ''}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>デザインの希望</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.design_preference || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>参考サイト</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.reference_sites || '未記入'}</td>
        </tr>
      </table>

      <h3>提供素材・その他</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>提供可能な素材</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.materials?.join('、') || 'なし'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>素材ダウンロードリンク</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.material_links || '未記入'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>希望納期</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${data.deadline || '特になし'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;"><strong>その他ご要望</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.other_requests || '特になし'}</td>
        </tr>
      </table>

      <p style="margin-top: 20px; color: #666;">
        送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </p>
    `;

    // Resendでメール送信
    const emailData = await resend.emails.send({
      from: 'スッとサイト <noreply@resend.dev>',
      to: 'sutto.apps@gmail.com',
      replyTo: data.email,
      subject: `【VTuberプラン申し込み】${data.vtuber_name}様`,
      html: emailHtml,
    });

    console.log('Email sent successfully:', emailData);

    // 自動返信メール
    if (data.email) {
      const autoReplyHtml = `
        <h2>${data.contact_name}様</h2>
        <p>この度は、スッとサイトのVTuberプランにお申し込みいただき、誠にありがとうございます。</p>
        <p>以下の内容でお申し込みを承りました。</p>
        
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>VTuber名:</strong> ${data.vtuber_name}</p>
          <p><strong>暫定お見積もり金額:</strong> ¥${parseInt(data.estimated_price || 0).toLocaleString()}</p>
          <p><strong>選択オプション:</strong> ${data.selected_options?.join('、') || 'なし'}</p>
        </div>
        
        <p>内容を確認の上、担当者より2営業日以内にご連絡させていただきます。</p>
        <p>お急ぎの場合は、お手数ですが直接メールにてご連絡ください。</p>
        
        <hr style="margin: 30px 0;">
        
        <p style="color: #666;">
          スッとサイト<br>
          お問い合わせ: sutto.apps@gmail.com
        </p>
      `;

      await resend.emails.send({
        from: 'スッとサイト <noreply@resend.dev>',
        to: data.email,
        subject: '【スッとサイト】VTuberプランお申し込みありがとうございます',
        html: autoReplyHtml,
      });
    }

    res.status(200).json({ success: true, id: emailData.id });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: 'メール送信に失敗しました', 
      details: error.message
    });
  }
};