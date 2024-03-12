export const options = {
  ext: {
    loadimpact: {
      projectID: 3686264,
      // Test runs with the same name groups test runs together
      name: 'Default'
    }
  }
}

export default function() {
  http.get('http://localhost:8080');
  sleep(1);
}
