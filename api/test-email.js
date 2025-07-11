// Test endpoint for Resend API
const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  // CORSヘッダーを設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log('Test email endpoint called');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key length:', process.env.RESEND_API_KEY?.length);
    
    if (req.method === 'GET') {
      // GETリクエストの場合は、APIキーの存在確認のみ
      res.status(200).json({ 
        success: true, 
        apiKeyExists: !!process.env.RESEND_API_KEY,
        apiKeyLength: process.env.RESEND_API_KEY?.length || 0,
        timestamp: new Date().toISOString()
      });
      return;
    }
    
    // POSTリクエストの場合は、テストメール送信
    const result = await resend.emails.send({
      from: 'Test <noreply@resend.dev>',
      to: 'sutto.apps@gmail.com',
      subject: 'Resend API Test Email',
      html: '<p>This is a test email from Resend API. If you receive this, the API is working correctly.</p>',
    });
    
    console.log('Test email sent:', result);
    
    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully',
      id: result.id,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}