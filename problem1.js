// Problem 1:
// Find the sum of all multiples of 3 or 5 below 1000;

const problem1 = () => {
  const ALL = Array.from(Array(1000).keys());

  const answer = ALL.reduce((sum, el) => {
    if ( el % 3 === 0 || el % 5 === 0) return sum + el;
    return sum;
  }, 0);

  return answer;
}

module.exports = {
  problem1,
};
