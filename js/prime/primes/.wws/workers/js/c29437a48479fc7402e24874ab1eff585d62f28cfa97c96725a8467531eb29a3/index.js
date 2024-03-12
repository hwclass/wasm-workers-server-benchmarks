function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

/**
 * Builds a reply to the given request
 */
const reply = (req) => {
  // Build a new response
  const limit = parseInt(req.params.limit);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  // res.json(primes);

  return new Response(primes);
};

// Subscribe to the Fetch event
addEventListener("fetch", (event) => {
  return event.respondWith(reply(event.request));
});
