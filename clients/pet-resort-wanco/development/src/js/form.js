// Form Handling and Validation
document.addEventListener('DOMContentLoaded', function() {
    initializeReservationForm();
    initializeContactForm();
});

// Reservation Form
function initializeReservationForm() {
    const reservationForm = document.getElementById('reservation-form');
    if (!reservationForm) return;

    // Form validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: /^[ぁ-んァ-ヶー一-龯a-zA-Z\s]+$/,
            message: 'お名前を正しく入力してください'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '有効なメールアドレスを入力してください'
        },
        phone: {
            required: true,
            pattern: /^[0-9]{10,11}$/,
            message: '電話番号は10〜11桁の数字で入力してください'
        },
        petName: {
            required: true,
            minLength: 1,
            maxLength: 30,
            message: 'ペットのお名前を入力してください'
        },
        visitDate: {
            required: true,
            futureDate: true,
            message: '見学希望日を選択してください'
        }
    };

    // Add form fields dynamically based on reservation data
    const reservationData = window.priceSimulator?.getReservationData();
    if (reservationData && Object.keys(reservationData).length > 0) {
        addReservationSummary(reservationForm, reservationData);
    }

    // Form submission
    reservationForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form
        if (!validateForm(this, validationRules)) {
            return;
        }

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading-spinner"></span>送信中...';

        try {
            // Simulate API call
            await simulateFormSubmission(this);

            // Success animation
            showSuccessMessage(this);
            
            // Reset form
            this.reset();
            
            // Clear reservation data
            sessionStorage.removeItem('reservationData');

        } catch (error) {
            showErrorMessage(this, error.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    // Real-time validation
    addRealtimeValidation(reservationForm, validationRules);
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            message: 'お名前を入力してください'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '有効なメールアドレスを入力してください'
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            message: 'お問い合わせ内容を入力してください（10文字以上）'
        }
    };

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!validateForm(this, validationRules)) {
            return;
        }

        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading-spinner"></span>送信中...';

        try {
            await simulateFormSubmission(this);
            showSuccessMessage(this);
            this.reset();
        } catch (error) {
            showErrorMessage(this, error.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    addRealtimeValidation(contactForm, validationRules);
}

// Validation Functions
function validateForm(form, rules) {
    let isValid = true;
    const formData = new FormData(form);

    for (const [fieldName, fieldRules] of Object.entries(rules)) {
        const field = form.elements[fieldName];
        if (!field) continue;

        const value = formData.get(fieldName);
        const errorElement = field.parentElement.querySelector('.error-message') || createErrorElement(field);

        // Reset error state
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';

        // Validate required
        if (fieldRules.required && !value) {
            showFieldError(field, errorElement, fieldRules.message || '必須項目です');
            isValid = false;
            continue;
        }

        // Validate pattern
        if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
            showFieldError(field, errorElement, fieldRules.message);
            isValid = false;
            continue;
        }

        // Validate length
        if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
            showFieldError(field, errorElement, `${fieldRules.minLength}文字以上入力してください`);
            isValid = false;
            continue;
        }

        if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
            showFieldError(field, errorElement, `${fieldRules.maxLength}文字以内で入力してください`);
            isValid = false;
            continue;
        }

        // Validate future date
        if (fieldRules.futureDate && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate <= today) {
                showFieldError(field, errorElement, '本日以降の日付を選択してください');
                isValid = false;
                continue;
            }
        }
    }

    return isValid;
}

function showFieldError(field, errorElement, message) {
    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Animate error message
    gsap.from(errorElement, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
    });

    // Shake animation for field
    gsap.to(field, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: "power2.inOut"
    });
}

function createErrorElement(field) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
        display: none;
        color: #e74c3c;
        font-size: 12px;
        margin-top: 5px;
        display: block;
    `;
    field.parentElement.appendChild(errorElement);
    return errorElement;
}

// Real-time Validation
function addRealtimeValidation(form, rules) {
    for (const [fieldName, fieldRules] of Object.entries(rules)) {
        const field = form.elements[fieldName];
        if (!field) continue;

        field.addEventListener('blur', function() {
            validateField(this, fieldRules);
        });

        if (field.type === 'text' || field.type === 'email' || field.tagName === 'TEXTAREA') {
            field.addEventListener('input', debounce(function() {
                if (this.value) {
                    validateField(this, fieldRules);
                }
            }, 500));
        }
    }
}

function validateField(field, rules) {
    const value = field.value;
    const errorElement = field.parentElement.querySelector('.error-message') || createErrorElement(field);

    // Reset error state
    field.classList.remove('error', 'success');
    errorElement.textContent = '';
    errorElement.style.display = 'none';

    // Skip validation if empty and not required
    if (!value && !rules.required) {
        return true;
    }

    // Run validations
    let isValid = true;

    if (rules.required && !value) {
        showFieldError(field, errorElement, rules.message || '必須項目です');
        isValid = false;
    } else if (rules.pattern && value && !rules.pattern.test(value)) {
        showFieldError(field, errorElement, rules.message);
        isValid = false;
    } else if (rules.minLength && value && value.length < rules.minLength) {
        showFieldError(field, errorElement, `${rules.minLength}文字以上入力してください`);
        isValid = false;
    } else if (rules.maxLength && value && value.length > rules.maxLength) {
        showFieldError(field, errorElement, `${rules.maxLength}文字以内で入力してください`);
        isValid = false;
    }

    if (isValid && value) {
        field.classList.add('success');
        // Success checkmark animation
        const checkmark = createCheckmark(field);
        gsap.from(checkmark, {
            scale: 0,
            rotation: -180,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    }

    return isValid;
}

// Helper Functions
function addReservationSummary(form, data) {
    const summary = document.createElement('div');
    summary.className = 'reservation-summary';
    summary.innerHTML = `
        <h4>予約内容</h4>
        <dl>
            <dt>ペットの種類</dt>
            <dd>${data.petType === 'dog' ? '犬' : '猫'}</dd>
            ${data.petType === 'dog' ? `
                <dt>サイズ</dt>
                <dd>${getSizeLabel(data.petSize)}</dd>
            ` : ''}
            <dt>宿泊数</dt>
            <dd>${data.nights}泊</dd>
            ${data.options.length > 0 ? `
                <dt>オプション</dt>
                <dd>${data.options.map(opt => getOptionLabel(opt)).join(', ')}</dd>
            ` : ''}
            <dt>合計金額</dt>
            <dd class="total-price">¥${data.totalPrice}</dd>
        </dl>
    `;

    form.insertBefore(summary, form.firstChild);

    // Animate summary appearance
    gsap.from(summary, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
    });
}

function getSizeLabel(size) {
    const labels = {
        small: '小型犬',
        medium: '中型犬',
        large: '大型犬'
    };
    return labels[size] || size;
}

function getOptionLabel(option) {
    const labels = {
        transport: '送迎サービス',
        trimming: 'トリミング',
        'special-food': '特別食'
    };
    return labels[option] || option;
}

function createCheckmark(field) {
    const existing = field.parentElement.querySelector('.checkmark');
    if (existing) existing.remove();

    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';
    checkmark.innerHTML = '✓';
    checkmark.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #27ae60;
        font-weight: bold;
        font-size: 18px;
    `;
    
    field.parentElement.style.position = 'relative';
    field.parentElement.appendChild(checkmark);
    
    return checkmark;
}

async function simulateFormSubmission(form) {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 90% success rate for demo
            if (Math.random() > 0.1) {
                resolve({ success: true, message: '送信完了しました' });
            } else {
                reject(new Error('一時的なエラーが発生しました。もう一度お試しください。'));
            }
        }, 2000);
    });
}

function showSuccessMessage(form) {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-icon">✓</div>
        <h3>送信完了しました</h3>
        <p>お問い合わせありがとうございます。<br>担当者より2営業日以内にご連絡いたします。</p>
    `;
    
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        text-align: center;
        z-index: 9999;
    `;

    document.body.appendChild(message);

    // Animate message
    gsap.from(message, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        gsap.to(message, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => message.remove()
        });
    }, 5000);
}

function showErrorMessage(form, errorMessage) {
    const message = document.createElement('div');
    message.className = 'error-banner';
    message.textContent = errorMessage;
    
    message.style.cssText = `
        background: #e74c3c;
        color: white;
        padding: 15px;
        border-radius: 4px;
        margin-bottom: 20px;
        text-align: center;
    `;

    form.insertBefore(message, form.firstChild);

    // Animate message
    gsap.from(message, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.out"
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        gsap.to(message, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => message.remove()
        });
    }, 5000);
}

// Utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}