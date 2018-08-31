const problem6 = () => {
  const range = Array.from(Array(100).keys()).map(num => num + 1); // [1 ... 100];
  
  const sumOfSquares = range.reduce((sum, num) => sum + Math.pow(num, 2));
  const squareOfSums = Math.pow(range.reduce((sum, num) => sum + num), 2);
  
  return squareOfSums - sumOfSquares;
}

module.exports = {
  problem6,
}
