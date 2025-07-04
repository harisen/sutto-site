// Price Simulator Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializePriceSimulator();
});

function initializePriceSimulator() {
    const form = document.getElementById('price-calculator');
    if (!form) return;

    // Price configuration
    const prices = {
        dog: {
            small: 12000,
            medium: 15000,
            large: 18000
        },
        cat: {
            all: 10000
        }
    };

    const optionPrices = {
        transport: 0, // Free
        trimming: 5000,
        'special-food': 1000 // Per day
    };

    // Form elements
    const petTypeInputs = form.querySelectorAll('input[name="pet-type"]');
    const petSizeInputs = form.querySelectorAll('input[name="pet-size"]');
    const nightsInput = form.querySelector('input[name="nights"]');
    const optionInputs = form.querySelectorAll('input[name="options"]');
    const totalPriceElement = document.getElementById('total-price');
    const dogSizeGroup = document.getElementById('dog-size-group');
    const proceedButton = document.getElementById('proceed-reservation');

    // Calculate price function
    function calculatePrice() {
        let basePrice = 0;
        let optionsPrice = 0;
        const nights = parseInt(nightsInput.value) || 1;
        const petType = form.querySelector('input[name="pet-type"]:checked').value;

        // Base price calculation
        if (petType === 'dog') {
            const size = form.querySelector('input[name="pet-size"]:checked').value;
            basePrice = prices.dog[size] * nights;
        } else {
            basePrice = prices.cat.all * nights;
        }

        // Options price calculation
        optionInputs.forEach(input => {
            if (input.checked) {
                const optionValue = input.value;
                if (optionValue === 'special-food') {
                    optionsPrice += optionPrices[optionValue] * nights;
                } else {
                    optionsPrice += optionPrices[optionValue];
                }
            }
        });

        // Total calculation
        const total = basePrice + optionsPrice;

        // Animate price update
        animatePrice(totalPriceElement, total);
    }

    // Animate price change
    function animatePrice(element, newPrice) {
        const currentPrice = parseInt(element.textContent.replace(/,/g, '')) || 0;
        const duration = 500;
        const startTime = performance.now();

        function updatePrice(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = 1 - Math.pow(1 - progress, 2);
            
            const displayPrice = Math.round(currentPrice + (newPrice - currentPrice) * easeProgress);
            element.textContent = displayPrice.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updatePrice);
            }
        }

        requestAnimationFrame(updatePrice);
    }

    // Show/hide dog size options
    function updatePetTypeUI() {
        const petType = form.querySelector('input[name="pet-type"]:checked').value;
        
        if (petType === 'cat') {
            dogSizeGroup.style.display = 'none';
            // Animate hide
            gsap.to(dogSizeGroup, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    dogSizeGroup.style.display = 'none';
                }
            });
        } else {
            dogSizeGroup.style.display = 'block';
            // Animate show
            gsap.from(dogSizeGroup, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        }
    }

    // Event listeners
    petTypeInputs.forEach(input => {
        input.addEventListener('change', () => {
            updatePetTypeUI();
            calculatePrice();
        });
    });

    petSizeInputs.forEach(input => {
        input.addEventListener('change', calculatePrice);
    });

    nightsInput.addEventListener('input', function() {
        // Validate input
        if (this.value < 1) this.value = 1;
        if (this.value > 30) this.value = 30;
        calculatePrice();
    });

    // Add number increment/decrement buttons
    const nightsWrapper = nightsInput.parentElement;
    const decrementBtn = document.createElement('button');
    const incrementBtn = document.createElement('button');
    
    decrementBtn.type = 'button';
    incrementBtn.type = 'button';
    decrementBtn.className = 'nights-btn nights-decrement';
    incrementBtn.className = 'nights-btn nights-increment';
    decrementBtn.innerHTML = '-';
    incrementBtn.innerHTML = '+';
    
    nightsWrapper.style.position = 'relative';
    nightsWrapper.appendChild(decrementBtn);
    nightsWrapper.appendChild(incrementBtn);
    
    // Style the buttons
    const btnStyles = `
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border: 1px solid var(--color-gray);
        background: var(--color-white);
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    `;
    
    decrementBtn.style.cssText = btnStyles + 'left: 10px;';
    incrementBtn.style.cssText = btnStyles + 'right: 10px;';
    nightsInput.style.textAlign = 'center';
    nightsInput.style.paddingLeft = '50px';
    nightsInput.style.paddingRight = '50px';
    
    decrementBtn.addEventListener('click', () => {
        if (nightsInput.value > 1) {
            nightsInput.value = parseInt(nightsInput.value) - 1;
            calculatePrice();
            
            // Animate button press
            gsap.to(decrementBtn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
        }
    });
    
    incrementBtn.addEventListener('click', () => {
        if (nightsInput.value < 30) {
            nightsInput.value = parseInt(nightsInput.value) + 1;
            calculatePrice();
            
            // Animate button press
            gsap.to(incrementBtn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
        }
    });

    optionInputs.forEach(input => {
        input.addEventListener('change', calculatePrice);
    });

    // Proceed to reservation
    proceedButton.addEventListener('click', function() {
        // Get form data
        const petType = form.querySelector('input[name="pet-type"]:checked').value;
        const petSize = petType === 'dog' ? form.querySelector('input[name="pet-size"]:checked').value : 'all';
        const nights = nightsInput.value;
        const options = Array.from(optionInputs)
            .filter(input => input.checked)
            .map(input => input.value);
        const totalPrice = totalPriceElement.textContent;

        // Store in sessionStorage
        const reservationData = {
            petType,
            petSize,
            nights,
            options,
            totalPrice
        };
        sessionStorage.setItem('reservationData', JSON.stringify(reservationData));

        // Animate and redirect
        gsap.to('.modal-content', {
            scale: 0.9,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                // Close modal
                document.getElementById('price-modal').classList.remove('active');
                document.body.style.overflow = '';
                
                // Scroll to reservation form
                setTimeout(() => {
                    const reservationSection = document.getElementById('reservation');
                    if (reservationSection) {
                        reservationSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        // If no reservation section, scroll to CTA
                        document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            }
        });
    });

    // Initial calculation
    updatePetTypeUI();
    calculatePrice();

    // Add hover effects to options
    const checkboxLabels = form.querySelectorAll('.checkbox-label');
    checkboxLabels.forEach(label => {
        label.addEventListener('mouseenter', function() {
            gsap.to(this, {
                x: 5,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        label.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });

    // Add tooltip for special food option
    const specialFoodLabel = Array.from(checkboxLabels).find(label => 
        label.querySelector('input[value="special-food"]')
    );
    
    if (specialFoodLabel) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'アレルギー対応食や療法食など';
        tooltip.style.cssText = `
            position: absolute;
            background: var(--color-navy);
            color: var(--color-white);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-100%) translateX(-50%);
            left: 50%;
            top: -10px;
            transition: opacity 0.2s ease;
        `;
        
        specialFoodLabel.style.position = 'relative';
        specialFoodLabel.appendChild(tooltip);
        
        specialFoodLabel.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });
        
        specialFoodLabel.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    }
}

// Export for use in other modules
window.priceSimulator = {
    open: function() {
        document.getElementById('open-simulator').click();
    },
    getReservationData: function() {
        return JSON.parse(sessionStorage.getItem('reservationData') || '{}');
    }
};