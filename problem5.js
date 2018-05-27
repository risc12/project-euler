const problem5 = () => {
  const isModZero = (numA, numB) => (numA % numB) === 0;
  
  let answer = 1;
  let isAnswered = false;

  while(!isAnswered) {
    if(
      isModZero(answer, 1) &&
      isModZero(answer, 2) &&
      isModZero(answer, 3) &&
      isModZero(answer, 4) &&
      isModZero(answer, 5) &&
      isModZero(answer, 6) &&
      isModZero(answer, 7) &&
      isModZero(answer, 8) &&
      isModZero(answer, 9) &&
      isModZero(answer, 10) &&
      isModZero(answer, 11) &&
      isModZero(answer, 12) &&
      isModZero(answer, 13) &&
      isModZero(answer, 14) &&
      isModZero(answer, 15) &&
      isModZero(answer, 16) &&
      isModZero(answer, 17) &&
      isModZero(answer, 18) &&
      isModZero(answer, 19) &&
      isModZero(answer, 20)
    ) {
      isAnswered = true;
    }
    answer = answer + 1;
  }

  return answer - 1;
}
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

const problem5b = () => {
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
  problem5b,
};
