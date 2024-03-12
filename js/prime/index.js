/**
 * Builds a reply to the given request
 */
const reply = (req) => {
  // Build a new response
  return new Response(`Hey! I got this parameter: ${req.params.id}`);
}

// Subscribe to the Fetch event
addEventListener("fetch", event => {
  return event.respondWith(reply(event.request));
});