const expect = require('expect');
const initializeArrayWithRange = require('./initializeArrayWithRange.js');


  test('initializeArrayWithRange is a Function', () => {
  expect(initializeArrayWithRange).toBeInstanceOf(Function);
});
  t.deepEqual(initializeArrayWithRange(5), [0, 1, 2, 3, 4, 5], "Initializes an array containing the numbers in the specified range");
  
