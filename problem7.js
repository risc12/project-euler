let primes = [2];

const isPrime = (n) => {
  if(n === 2) return true;
  if(n % 2 === 0) return false;

  for(prime of primes) {
    if(n % prime === 0) return false;
  }

  return true;
}

const problem7 = () => {
  console.log('Finding prime #10001');

  let currentNumber = 3;

  while(primes.length < 10001) {
    if(isPrime(currentNumber)) primes.push(currentNumber);
    currentNumber++;
  }
  console.log(primes.length);
  return primes[primes.length - 1];
}

module.exports = {
  problem7,
}
