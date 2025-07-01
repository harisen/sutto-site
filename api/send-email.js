// Vercel Serverless Function for sending emails with Resend
// このファイルを /api/send-email.js に配置してください

import { Resend } from 'resend';

// Resend APIキーを環境変数から取得
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
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
    console.log('Received request:', req.method);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    
    const {
      name,
      email,
      company,
      phone,
      plan,
      business_type,
      target,
      purpose,
      reference,
      deadline,
      additional,
      file_link,
      file_password
    } = req.body;

    // メール本文を作成
    const emailHtml = `
      <h2>LP制作アンケートが送信されました</h2>
      
      <h3>お客様情報</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%;"><strong>お名前</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>会社名・屋号</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company || '未記入'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>メールアドレス</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>電話番号</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
      </table>
      
      <h3>プロジェクト詳細</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%;"><strong>ご希望のプラン</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${plan}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>業種・サービス内容</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${business_type}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>ターゲット層</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${target}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; vertical-align: top;"><strong>LPの目的</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${purpose}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; vertical-align: top;"><strong>参考サイト</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${reference || '未記入'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>希望納期</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${deadline || '未記入'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; vertical-align: top;"><strong>その他ご要望</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${additional || '未記入'}</td>
        </tr>
      </table>
      
      ${file_link ? `
        <h3>素材ファイル</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%;"><strong>ダウンロードリンク</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="${file_link}" style="color: #2563EB;">${file_link}</a></td>
          </tr>
          ${file_password ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>パスワード</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${file_password}</td>
          </tr>
          ` : ''}
        </table>
      ` : ''}
    `;

    // プレーンテキスト版も作成
    const emailText = `
LP制作アンケートが送信されました

【お客様情報】
お名前: ${name}
会社名・屋号: ${company || '未記入'}
メールアドレス: ${email}
電話番号: ${phone}

【プロジェクト詳細】
ご希望のプラン: ${plan}
業種・サービス内容: ${business_type}
ターゲット層: ${target}

LPの目的:
${purpose}

参考サイト・競合サイト:
${reference || '未記入'}

希望納期: ${deadline || '未記入'}

その他ご要望:
${additional || '未記入'}

${file_link ? `\n【素材ファイル】\nダウンロードリンク: ${file_link}` : ''}
${file_password ? `パスワード: ${file_password}` : ''}
`;

    // 1. 管理者へのメール送信
    const adminEmail = await resend.emails.send({
      from: 'LP Service <noreply@resend.dev>', // Resendのデフォルトドメインを使用
      to: 'sutto.apps@gmail.com', // 管理者メールアドレス
      replyTo: email,
      subject: `LP制作アンケート - ${name}様`,
      html: emailHtml,
      text: emailText
    });

    // 2. お客様への自動返信メール（ドメイン認証が必要なため一時的に無効化）
    // ドメイン認証後に有効化してください
    /*
    const customerEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: 'Helvetica Neue', Arial, sans-serif;">
        <h2 style="color: #2563EB; border-bottom: 2px solid #E5E7EB; padding-bottom: 16px;">LP制作のお申し込みありがとうございます</h2>
        
        <p>${name}様</p>
        
        <p>この度は、LP制作サービスにお申し込みいただき、誠にありがとうございます。</p>
        <p>以下の内容でアンケートを受け付けました。</p>
        
        <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1F2937; margin-top: 0;">お申し込み内容</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6B7280;"><strong>ご希望のプラン：</strong></td>
              <td style="padding: 8px 0;">${plan}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;"><strong>業種・サービス内容：</strong></td>
              <td style="padding: 8px 0;">${business_type}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;"><strong>希望納期：</strong></td>
              <td style="padding: 8px 0;">${deadline || '未記入'}</td>
            </tr>
          </table>
        </div>
        
        <h3 style="color: #1F2937;">今後の流れ</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="background-color: #F3F4F6; padding: 16px; border-radius: 8px;">
            <h4 style="color: #2563EB; margin: 0 0 8px 0;">ステップ1：アンケート記入 ✓</h4>
            <p style="margin: 0; color: #6B7280;">アンケートの送信が完了しました</p>
          </div>
          
          <div style="background-color: #EBF5FF; padding: 16px; border-radius: 8px; border-left: 4px solid #2563EB;">
            <h4 style="color: #1F2937; margin: 0 0 8px 0;">ステップ2：制作開始</h4>
            <p style="margin: 0; color: #4B5563;">アンケート内容を基に制作を開始いたします</p>
          </div>
          
          <div style="background-color: #F9FAFB; padding: 16px; border-radius: 8px;">
            <h4 style="color: #6B7280; margin: 0 0 8px 0;">ステップ3：テストページ確認・納品</h4>
            <p style="margin: 0; color: #9CA3AF;">制作したテストページをご確認後、各種データを納品いたします</p>
          </div>
          
          <div style="background-color: #F9FAFB; padding: 16px; border-radius: 8px;">
            <h4 style="color: #6B7280; margin: 0 0 8px 0;">ステップ4：お支払い</h4>
            <p style="margin: 0; color: #9CA3AF;">ご承諾後納品、1週間以内にお支払い</p>
          </div>
          
          <div style="background-color: #F9FAFB; padding: 16px; border-radius: 8px; opacity: 0.7;">
            <h4 style="color: #6B7280; margin: 0 0 8px 0;">ステップ5：修正対応（必要に応じて）</h4>
            <p style="margin: 0; color: #9CA3AF;">必要に応じて修正対応・追加お支払い</p>
          </div>
        </div>
        
        <div style="background-color: #FEF3C7; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400E;">
            <strong>ご注意：</strong><br>
            このメールは送信専用のアドレスから送信されています。<br>
            このメールに返信いただいても確認することができません。<br>
            お問い合わせは、担当者からの連絡をお待ちいただくか、<br>
            <span style="color: #2563EB;">sutto.apps@gmail.com</span> までご連絡ください。
          </p>
        </div>
        
        <p style="color: #6B7280; margin-top: 30px;">
          何かご不明な点がございましたら、お気軽にお問い合わせください。<br>
          今後ともよろしくお願いいたします。
        </p>
        
        <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
        
        <p style="color: #9CA3AF; font-size: 14px;">
          LP制作サービス<br>
          メール: sutto.apps@gmail.com<br>
          営業時間: 平日 10:00〜18:00
        </p>
      </div>
    `;

    const customerEmailText = `
${name}様

この度は、LP制作サービスにお申し込みいただき、誠にありがとうございます。
以下の内容でアンケートを受け付けました。

【お申し込み内容】
ご希望のプラン：${plan}
業種・サービス内容：${business_type}
希望納期：${deadline || '未記入'}

【今後の流れ】
ステップ1：アンケート記入 ✓
└ アンケートの送信が完了しました

ステップ2：制作開始（次のステップ）
└ アンケート内容を基に制作を開始いたします

ステップ3：テストページ確認・納品
└ 制作したテストページをご確認後、各種データを納品いたします

ステップ4：お支払い
└ ご承諾後納品、1週間以内にお支払い

ステップ5：修正対応（必要に応じて）
└ 必要に応じて修正対応・追加お支払い

【ご注意】
このメールは送信専用のアドレスから送信されています。
このメールに返信いただいても確認することができません。
お問い合わせは、担当者からの連絡をお待ちいただくか、
sutto.apps@gmail.com までご連絡ください。

何かご不明な点がございましたら、お気軽にお問い合わせください。
今後ともよろしくお願いいたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LP制作サービス
メール: sutto.apps@gmail.com
営業時間: 平日 10:00〜18:00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    await resend.emails.send({
      from: 'LP Service <noreply@resend.dev>', // 管理者メールと同じ形式
      to: email, // 配列ではなく文字列に変更
      subject: '【LP制作サービス】お申し込みありがとうございます',
      html: customerEmailHtml,
      text: customerEmailText
    });
    */

    res.status(200).json({ success: true, id: adminEmail.id });
  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error details:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}