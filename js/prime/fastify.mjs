import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

// Function to check if a number is prime
function isPrime(num) {
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if(num % i === 0) {
          return false;
      }
  }
  return num > 1;
}

fastify.get('/primes/:limit', (request, reply) => {
  const limit = parseInt(request.params.limit);
  const primes = [];
    for(let i = 2; i <= limit; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    reply.send(primes);
})

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})