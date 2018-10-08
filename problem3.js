// Problem 3
// What is the largest prime factor of the number 600851475143 ?

const problem3 = () => {
  const primeArray = [];

  let remainder = 600851475143;

  for (let i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      if (!primeArray.includes(i)) primeArray.push(i);
        remainder /= i;
      }
  }

  return Math.max(...primeArray);
}

module.exports = {
  problem3,
};
