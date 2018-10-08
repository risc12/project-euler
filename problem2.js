// Problem 2:
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

const fibonacciTill = (num) => {
  let value = 0;
  let fibos = [1, 1];
  
  while(value < num) {
    let latest = fibos[fibos.length - 1] + fibos[fibos.length - 2];
    fibos.push(latest);

    value = latest;
  }
  
  return fibos;
}

const problem2 = () => {
  const ALL = fibonacciTill(4000000);
  
  return ALL.reduce((sum, el) => {
    if (el % 2 === 0) {
      return sum + el;
    }
    return sum;
  }, 0);
}

module.exports = {
  problem2,
};
