function placeOrder(orderId: number, orderAmount: number): void {
    if (isInvalidOrder(orderId)) {
        showInvalidOrderMessage();
        return;
    }

    const finalAmount = computeFinalAmount(orderAmount);
    persistOrder(orderId, finalAmount);
    showOrderPlacedMessage();
}

function computeFinalAmount(orderAmount: number): number {
    const discount = computeDiscount(orderAmount);
    const tax = computeTax(orderAmount);
    return orderAmount + tax - discount;
}

function computeDiscount(amount: number): number {
    return amount * 0.10;
}

function computeTax(amount: number): number {
    return amount * 0.18;
}

function isInvalidOrder(orderId: number): boolean {
    return orderId <= 0;
}

function showInvalidOrderMessage(): void {
    console.log("Order cannot be empty");
}

function showOrderPlacedMessage(): void {
    console.log("Order placed successfully");
}

function persistOrder(orderId: number, amount: number): void {
    console.log("Order saved in database");
}
