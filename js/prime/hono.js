import { Hono } from 'hono'

const app = new Hono()

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

app.get('/primes/:limit', (c) => {
  const limit = parseInt(c.req.param('limit'));
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return c.text(primes);
});

app.notFound((c) => {
  return c.text('Awww! This page is missing', 404)
})

export default app;

