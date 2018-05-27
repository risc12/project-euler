const { problem1 } = require('./problem1.js')
const { problem2 } = require('./problem2.js')
const { problem3 } = require('./problem3.js')
const { problem4 } = require('./problem4.js')
const { problem5, problem5b } = require('./problem5.js')

try {
  // console.log('Problem 1', problem1());
  // console.log('Problem 2', problem2());
  // console.log('Problem 3', problem3());
  // console.log('Problem 4', problem4());
	console.time('a');
  console.log('Problem 5', problem5());
	console.timeEnd('a');
	console.time('b');
  console.log('Problem 5', problem5b());
	console.timeEnd('b');
} catch(e) {
  console.log(e);
}

