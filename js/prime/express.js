const express = require('express');
const app = express();

// Function to check if a number is prime
function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Route to generate and serve prime numbers
app.get('/primes/:limit', (req, res) => {
    const limit = parseInt(req.params.limit);
    const primes = [];
    for(let i = 2; i <= limit; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    res.json(primes);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});