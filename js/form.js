// Form handling JavaScript

// メール送信の設定
// 以下から選択してください：

// 1. Resend を使用する場合（推奨）
// - Vercelにデプロイ
// - Resendでアカウント作成（https://resend.com）
// - 環境変数 RESEND_API_KEY を設定
const USE_RESEND = true; // Resendを使用
const RESEND_ENDPOINT = '/api/send-email'; // Vercel Functionsのエンドポイント

// 2. Formspree を使用する場合
// const USE_RESEND = false;
// const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// 3. テストモード（メール送信せずに動作確認）
const USE_TEST_MODE = false; // 本番ではfalseに設定

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const lpRequestForm = document.getElementById('lpRequestForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Note: If using Formspree or similar services, 
            // you might want to keep the default form submission
            // Comment out e.preventDefault() in that case
            
            // e.preventDefault();
            
            // Basic validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#EF4444';
                } else {
                    field.style.borderColor = '#E5E7EB';
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailField && !emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#EF4444';
            }
            
            // Phone number validation (optional field)
            const phoneField = contactForm.querySelector('#phone');
            if (phoneField && phoneField.value) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(phoneField.value)) {
                    isValid = false;
                    phoneField.style.borderColor = '#EF4444';
                }
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('必須項目を正しく入力してください。');
                return false;
            }
            
            // If you want to handle form submission via JavaScript:
            /*
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;
            
            // Example: Send to your backend
            fetch('YOUR_BACKEND_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    alert('お問い合わせありがとうございます。\n2営業日以内にご返信いたします。');
                    contactForm.reset();
                } else {
                    throw new Error('送信に失敗しました');
                }
            })
            .catch(error => {
                alert('送信に失敗しました。しばらくしてから再度お試しください。');
                console.error('Error:', error);
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
            */
        });
        
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#EF4444';
                } else {
                    this.style.borderColor = '#E5E7EB';
                }
                
                // Email validation on blur
                if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        this.style.borderColor = '#EF4444';
                    }
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#2563EB';
            });
        });
    }
    
    // LP Request Form handling
    if (lpRequestForm) {
        lpRequestForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = lpRequestForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#EF4444';
                } else {
                    field.style.borderColor = '#E5E7EB';
                }
            });
            
            // Email validation
            const emailField = lpRequestForm.querySelector('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailField && !emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#EF4444';
            }
            
            // Phone validation (required for LP request)
            const phoneField = lpRequestForm.querySelector('#phone');
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (phoneField && !phoneRegex.test(phoneField.value)) {
                isValid = false;
                phoneField.style.borderColor = '#EF4444';
            }
            
            if (!isValid) {
                alert('必須項目を正しく入力してください。');
                return false;
            }
            
            // Show loading state
            const submitButton = lpRequestForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;
            
            try {
                // Prepare form data
                const formData = new FormData(lpRequestForm);
                
                // テストモードの場合
                if (USE_TEST_MODE) {
                    // フォームデータをコンソールに表示
                    console.log('=== フォーム送信データ ===');
                    console.log('お名前:', formData.get('name'));
                    console.log('会社名・屋号:', formData.get('company') || '未記入');
                    console.log('メールアドレス:', formData.get('email'));
                    console.log('電話番号:', formData.get('phone'));
                    console.log('ご希望のプラン:', formData.get('plan'));
                    console.log('業種・サービス内容:', formData.get('business-type'));
                    console.log('ターゲット層:', formData.get('target'));
                    console.log('LPの目的:', formData.get('purpose'));
                    console.log('参考サイト:', formData.get('reference') || '未記入');
                    console.log('希望納期:', formData.get('deadline') || '未記入');
                    console.log('素材リンク:', formData.get('file-link') || '未記入');
                    console.log('パスワード:', formData.get('file-password') || '未記入');
                    console.log('その他:', formData.get('additional') || '未記入');
                    
                    // 送信成功を模擬
                    setTimeout(() => {
                        alert('【テストモード】\nアンケートを送信しました。\n実際にはメールは送信されていません。');
                        lpRequestForm.reset();
                    }, 1000);
                    
                    return;
                }
                
                // Resendを使用する場合
                if (USE_RESEND) {
                    console.log('Resendを使用してメール送信します');
                    console.log('エンドポイント:', RESEND_ENDPOINT);
                    
                    // APIに送信するデータを準備
                    const emailData = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        company: formData.get('company'),
                        phone: formData.get('phone'),
                        plan: formData.get('plan') === 'standard' ? 'スタンダードプラン（2万円）' : 'リッチプラン（5万円）',
                        business_type: formData.get('business-type'),
                        target: formData.get('target'),
                        purpose: formData.get('purpose'),
                        reference: formData.get('reference'),
                        deadline: formData.get('deadline'),
                        additional: formData.get('additional'),
                        file_link: formData.get('file-link'),
                        file_password: formData.get('file-password')
                    };
                    
                    // Resend APIエンドポイントに送信
                    const response = await fetch(RESEND_ENDPOINT, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(emailData)
                    });
                    
                    if (response.ok) {
                        alert('アンケートを送信しました。\n\n【今後の流れ】\n1. アンケート内容を確認いたします\n2. 2営業日以内に sutto.apps@gmail.com よりご連絡いたします\n3. 制作を開始し、テストページをご確認いただきます\n4. 納品後、お支払いをお願いいたします\n\nご不明な点は sutto.apps@gmail.com までお問い合わせください。');
                        lpRequestForm.reset();
                    } else {
                        throw new Error('送信に失敗しました');
                    }
                    
                    return;
                }
                
                // Formspreeが設定されている場合
                if (typeof FORMSPREE_ENDPOINT !== 'undefined' && FORMSPREE_ENDPOINT !== 'https://formspree.io/f/YOUR_FORM_ID') {
                    // フォームデータを整形
                    const submissionData = new FormData();
                    
                    // 基本情報
                    submissionData.append('_replyto', formData.get('email'));
                    submissionData.append('_subject', 'LP制作アンケート - ' + formData.get('name'));
                    
                    // フォームの内容
                    submissionData.append('お名前', formData.get('name'));
                    submissionData.append('会社名・屋号', formData.get('company') || '未記入');
                    submissionData.append('メールアドレス', formData.get('email'));
                    submissionData.append('電話番号', formData.get('phone'));
                    submissionData.append('ご希望のプラン', formData.get('plan'));
                    submissionData.append('業種・サービス内容', formData.get('business-type'));
                    submissionData.append('ターゲット層', formData.get('target'));
                    submissionData.append('LPの目的', formData.get('purpose'));
                    submissionData.append('参考サイト・競合サイト', formData.get('reference') || '未記入');
                    submissionData.append('希望納期', formData.get('deadline') || '未記入');
                    submissionData.append('その他ご要望', formData.get('additional') || '未記入');
                    
                    // 画像ファイルを追加
                    const fileInput = lpRequestForm.querySelector('#images');
                    if (fileInput && fileInput.files.length > 0) {
                        for (let i = 0; i < fileInput.files.length; i++) {
                            submissionData.append(`画像${i + 1}`, fileInput.files[i]);
                        }
                    }
                    
                    // Formspreeに送信
                    const response = await fetch(FORMSPREE_ENDPOINT, {
                        method: 'POST',
                        body: submissionData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        alert('アンケートを送信しました。2営業日以内にご連絡いたします。');
                        lpRequestForm.reset();
                    } else {
                        throw new Error('送信に失敗しました');
                    }
                } else {
                    // Formspreeが設定されていない場合は、従来のmailtoリンクを使用
                    const emailBody = `
LP制作アンケートが送信されました。

【お客様情報】
お名前: ${formData.get('name')}
会社名・屋号: ${formData.get('company') || '未記入'}
メールアドレス: ${formData.get('email')}
電話番号: ${formData.get('phone')}

【ご希望のプラン】
${formData.get('plan')}

【プロジェクト詳細】
業種・サービス内容: ${formData.get('business-type')}
ターゲット層: ${formData.get('target')}

LPの目的:
${formData.get('purpose')}

参考サイト・競合サイト:
${formData.get('reference') || '未記入'}

希望納期: ${formData.get('deadline') || '未記入'}

その他ご要望:
${formData.get('additional') || '未記入'}

※画像を添付する場合は、メールクライアントで手動で添付してください。
`;
                    
                    const subject = encodeURIComponent('LP制作アンケート');
                    const body = encodeURIComponent(emailBody);
                    const mailtoLink = `mailto:sutto.apps@gmail.com?subject=${subject}&body=${body}`;
                    
                    window.location.href = mailtoLink;
                    alert('メールクライアントが開きます。画像を添付する場合は、メールクライアントで手動で添付してください。');
                }
            } catch (error) {
                console.error('送信エラー:', error);
                alert('送信に失敗しました。しばらくしてから再度お試しください。');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
        
        // Real-time validation for LP request form
        const inputs = lpRequestForm.querySelectorAll('.form-input, .form-select, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#EF4444';
                } else {
                    this.style.borderColor = '#E5E7EB';
                }
                
                // Email validation on blur
                if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(this.value)) {
                        this.style.borderColor = '#EF4444';
                    }
                }
                
                // Phone validation on blur
                if (this.type === 'tel' && this.value) {
                    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                    if (!phoneRegex.test(this.value)) {
                        this.style.borderColor = '#EF4444';
                    }
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#2563EB';
            });
        });
    }
});