document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const orderNumber = document.getElementById('orderNumber').value;
    
    // Simulate checking order status
    const status = getOrderStatus(orderNumber);

    displayStatus(status);
});

function getOrderStatus(orderNumber) {
    // Here you would typically fetch the order status from a server/database
    // For the sake of example, we'll simulate different statuses based on the order number
    switch (orderNumber) {
        case '123':
            return 'Your order has been Shipped!';
        case '456':
            return 'Your order has been delivered.';
        default:
            return 'Order has been placed.';
    }
}

function displayStatus(status) {
    document.getElementById('status').textContent = status;
}
