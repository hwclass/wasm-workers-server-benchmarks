// function isPrime(num) {
//   for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// /**
//  * Builds a reply to the given request
//  */
// const reply = (req) => {
//   // Build a new response
//   const limit = parseInt(req.params.limit);
//   const primes = [];
//   for (let i = 2; i <= limit; i++) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//   return new Response(JSON.stringify(primes));
// };

// // Subscribe to the Fetch event
// addEventListener("fetch", (event) => {
//   return event.respondWith(reply(event.request));
// });

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

app.get('/', (c) => {
  return c.text('Hello from Hono running in Wasm Workers Server!')
});

app.get('/hello', (c) => {
  return c.text('You can get a custom hello message by accessing /hello/your-name')
});

app.get('/hello/:name', (c) => {
  const name = c.req.param('name');
  return c.text(`Hello ${name}! This app is running in Wasm Workers Server`)
});

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

