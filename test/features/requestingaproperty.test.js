process.env.NODE_ENV = 'test';
const app = require('../../app.js');
const assert = require('assert');
const Browser = require('zombie');
require('http').createServer(app).listen(3000);

Browser.localhost('example.com', 3000);

const browser = new Browser();

before((done) => {
  browser.visit('/', done);
});

describe('it should request a property', () => {
  before((done) => {
    browser.pressButton('#property-2', done);
  });

  it('it allows the user to request a property', () => {
    expect(browser.html()).to.include('Thank you for requesting Lolhost mansions');
  });
});
