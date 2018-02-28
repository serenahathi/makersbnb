// If we want to run without requiring, we type:
// $ mocha test --require test/helpers/chai.js

const chai = require('chai');
const expect = require('chai').expect;

it('should work', () => {
  expect('hi').to.equal('hi');
  // expect('hello').to.equal('hi');
});

it('should work', () => {
  // expect('hello').to.equal('hi');
  expect('hello').to.equal('hello');
});
