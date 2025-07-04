// DOM要素の取得
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
    
    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['name', 'phone', 'date1'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#FF6B35';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Show success message
                alert('ご予約ありがとうございます。\n確認のご連絡を差し上げますので、しばらくお待ちください。');
                
                // Reset form
                this.reset();
                
                // Here you would normally send the data to a server
                console.log('予約データ:', data);
            } else {
                alert('必須項目をご入力ください。');
            }
        });
    }
    
    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.feature-card, .menu-card, .voice-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Set min datetime for form
    const dateInputs = document.querySelectorAll('input[type="datetime-local"]');
    if (dateInputs.length > 0) {
        const now = new Date();
        now.setHours(now.getHours() + 1); // 1時間後から予約可能
        const minDateTime = now.toISOString().slice(0, 16);
        
        dateInputs.forEach(input => {
            input.min = minDateTime;
        });
    }
});

// Add CSS for animations and mobile menu
const style = document.createElement('style');
style.textContent = `
    .nav.active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background-color: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        gap: 16px;
        z-index: 99;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(7px, 7px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
    
    .header.scrolled {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease-out;
    }
    
    @media (max-width: 768px) {
        .nav {
            display: none;
        }
    }
`;
document.head.appendChild(style);