document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseInt(button.getAttribute('data-price'));
            totalPrice += price;
            totalPriceDisplay.textContent = `₹${totalPrice}`;
            const item = document.createElement('li');
            item.textContent = `${button.parentNode.querySelector('h2').textContent} - ₹${price}`;
            cartItemsList.appendChild(item);
        });
    });
});