 <script>
        function processPayment() {
            const selectedMethod = document.querySelector('input[name="payment-method"]:checked');

            if (!selectedMethod) {
                alert('Please select a payment method.');
                return;
            }

            const paymentMethod = selectedMethod.value;

            // Perform further processing based on the selected payment method
            switch (paymentMethod) {
                case 'google-pay':
                    // Implement Google Pay integration
                    break;
                case 'credit-card':
                    // Redirect to credit card payment page
                    window.location.href = 'credit_card_payment.html';
                    break;
                default:
                    break;
            }
        }
    </script>