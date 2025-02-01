// .apply() method in JavaScript is similar to .call(), but it takes arguments as an array instead of individual values.
// useful when the arguments are already stored in an array (e.g., coming from API responses or user inputs)./
// helpful when working with variable-length arguments dynamically.

// Common function to calculate ride fare
function calculateFare(distance, ratePerKm) {
    console.log(`${this.rideType} ride fare: $${(distance * ratePerKm).toFixed(2)}`);
}

// Different ride types as objects
const standardRide = { rideType: "Standard" };
const premiumRide = { rideType: "Premium" };
const luxuryRide = { rideType: "Luxury" };

// Using apply() to pass arguments as an array
calculateFare.apply(standardRide, [10, 1.5]);  // Standard ride fare: $15.00
calculateFare.apply(premiumRide, [10, 2.5]);   // Premium ride fare: $25.00
calculateFare.apply(luxuryRide, [10, 5.0]);    // Luxury ride fare: $50.00
