const expect = require('expect');
const matchesWith = require('./matchesWith.js');


  test('matchesWith is a Function', () => {
  expect(matchesWith).toBeInstanceOf(Function);
});
  const isGreeting = val => /^h(?:i|ello)$/.test(val);
  t.true(matchesWith(
    { greeting: 'hello' },
    { greeting: 'hi' },
    (oV, sV) => isGreeting(oV) && isGreeting(sV)
  ), 'Returns true for two objects with similar values, based on the provided function');
  

