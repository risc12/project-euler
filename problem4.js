const problem4 = () => {
  const palindromes = [];

  const a = 999;
  const b = 999;

  const isPalindrome = (num) => {
    return num.toString() === num.toString().split('').reverse().join('');
  }

  for (let i = a; i > 0; i--) {
    for (let j = b; j > 0; j--) {
      const product = i * j;
      if (isPalindrome(product)) {
        palindromes.push(product);
        break;
      }
    }
  }


  return Math.max(...palindromes);
}

module.exports = {
  problem4,
};
