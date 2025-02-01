
// call method doesn’t return a new function.
// .call() method in JavaScript is used to invoke a function with a specific this value and arguments.

// Common function to process payment
function processPayment(amount, currency) {
    console.log(`${this.gateway} is processing a payment of ${currency}${amount}`);
}

// Payment gateways as objects
const paypal = { gateway: "PayPal" };
const stripe = { gateway: "Stripe" };
const razorpay = { gateway: "Razorpay" };

// Using call() to invoke processPayment with different payment gateways
processPayment.call(paypal, 100, "USD");  // PayPal is processing a payment of USD100
processPayment.call(stripe, 200, "EUR");  // Stripe is processing a payment of EUR200
processPayment.call(razorpay, 500, "INR"); // Razorpay is processing a payment of INR500


// ===================================================== //

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyCall(nameObj, 42);