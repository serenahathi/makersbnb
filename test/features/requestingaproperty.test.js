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

describe('it should show the request page a property', () => {
  before((done) => {
    browser.pressButton('#property-2', done);
  });

  it('it allows the user to request a property', () => {
    expect(browser.html()).to.include('Make a request for Lolhost mansions');
  });
});


describe('request form page', () => {
  before((done) => {
    browser.visit('/properties/request/new?id=2');
    browser
      .fill('from', '2018-01-01')
      .fill('until', '2018-02-01')
      .pressButton('Submit request', done)
      .then(() => {
        assert.ok(browser.success);
      });
  });

  it('allows a user to fill in a request form', () => {
    // browser
    //   .fill('from', '2018-01-01')
    //   .fill('until', '2018-02-01')
    //   .pressButton('Submit request')
    //   .then(() => {
    //     assert.ok(browser.success);
    //   });
    expect(browser.html()).to.include('Booking request for Lolhost mansions received');
  });
});

// describe('request received', () => {
//   before((done) => {
//     browser.visit('/properties/request/new?id=2', done);
//   });
// });
