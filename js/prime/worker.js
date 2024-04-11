export default {
	fetch(request) {
    function isPrime(num) {
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }

    const url = new URL(request.url);

    const limit = parseInt(url.pathname.split('/')[2]);

    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
		return new Response(JSON.stringify(primes), {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};