addEventListener("fetch", event => {
  return event.respondWith(
    new Response("Hello from Wasm Workers Server!")
  );
});