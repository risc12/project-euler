// Problem 5
// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

const primeFactorsFor = (remainder) => {
  const primeArray = [];

  for (let i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      if (!primeArray.includes(i)) primeArray.push(i);
      remainder /= i;
    }
  }

  return primeArray;
}

const problem5 = () => {
  let allPrimes = [];

  for(let i = 2; i < 21; i++) {
    allPrimes = [...allPrimes, ...primeFactorsFor(i)];
  }

  return allPrimes
    .filter((el, i, arr) => arr.indexOf(el) > i)
    .reduce((sum, el) => { return sum * el; }, 0);
}

module.exports = {
  problem5,
};
