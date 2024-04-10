# Wasm Workers Server Benchmarks

## Results (2,3 GHz Quad-Core Intel Core i7)

| Framework        | Average (ms)       | Min (ms)            | Max (ms)           |
| ------------     | ----------         | ------------------- | ------------------ |
| WWS (with Hono)  | 0.6826833333333335 | 0.6826833333333335  | 0.6826833333333335 |
| Fastify          | 2.334613333333334  | 0.348               | 7.228              |
| Express          | 2.6119366666666664 | 2.6119366666666664  | 2.6119366666666664 |

## Setup

### Install WWS

```sh
curl -fsSL https://workers.wasmlabs.dev/install | bash
wws --help
```

### Install k6

```sh
brew install k6
```

### Create a file called index.js

```js
addEventListener("fetch", event => {
  return event.respondWith(
    new Response("Hello from Wasm Workers Server!")
  );
});
```

## Run WWS

```sh
wws .

➜  wasm-workers-server-benchmarks git:(main) ✗ wws .
⚙️  Preparing the project from: .
⚙️  Loading routes from: .
⏳ Loading workers from 1 routes...
✅ Workers loaded in 726.965769ms.
    - http://127.0.0.1:8080/
      => ./index.js
🚀 Start serving requests at http://127.0.0.1:8080

[2024-03-12T17:22:52Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET / HTTP/1.1" 200 31 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" 0.113979
[2024-03-12T17:22:52Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /favicon.ico HTTP/1.1" 404 0 "http://127.0.0.1:8080/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" 0.000036
[2024-03-12T17:23:01Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET / HTTP/1.1" 200 31 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" 0.076056
```

### Create your K6 Grafana Cloud [here](https://grafana.com/docs/k6/latest/get-started/running-k6/).

### Login to k6

```sh
k6 login cloud --token <YOUR_TOKEN>
```

### Create a k6 load test

```sh
# under the specific directory (eg. ssr) do this
k6 new
# this command will create a new default `script.js` file

# or you can create your own as follows:
```

### Update the test file content like the following:

```js
export const options = {
  ext: {
    loadimpact: {
      projectID: <YOUR_PROJECT_ID>,
      // Test runs with the same name groups test runs together
      name: 'Default'
    }
  }
}
```

### Run the k6 load test on Grafana Cloud

```sh
cd ./js/ssr
k6 cloud loadTest.js
```

### Increase vus (Parallel virtual users) with another run:

```sh
k6 cloud --vus 10 --duration 30s loadTest.js
```

## Resources

- [Wasm Workers Server](https://workers.wasmlabs.dev/)
- [Wasm Workers Server - Quickstart](https://workers.wasmlabs.dev/docs/get-started/quickstart)

