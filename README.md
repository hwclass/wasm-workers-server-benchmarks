# Wasm Workers Server Benchmarks

## Results (2,3 GHz Quad-Core Intel Core i7)

| Framework          | Med (ms)           | Min (ms)            | Max (ms)           |
| ------------       | ----------         | ------------------- | ------------------ |
| Fastify            | 8.48               | 6.31                | 77.24              |
| Express            | 10.62              | 6.77                | 212.23             |
| Cloudflare Workers | 12.28              | 7.8                 | 121.97             |
| WWS (with Hono)    | 503.87             | 272.96              | 1010               |

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

## Extras

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

