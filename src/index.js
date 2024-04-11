import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello from Hono running in Wasm Workers Server!");
});

app.get("/primes/:limit", (c) => {
  const limit = parseInt(c.req.param("limit"));
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return c.text(JSON.stringify(primes));
});

app.notFound((c) => {
  return c.text("Awww! This page is missing", 404);
});

export default app;
