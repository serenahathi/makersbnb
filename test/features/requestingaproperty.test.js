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

describe('booking when property is unavailable', () => {
  it('Doesn\'t allow booking outside the available dates', (next) => {
    browser.visit('/properties/request/new?id=3', () => {
      browser
        .fill('from', '2018-06-01')
        .fill('until', '2018-06-14')
        .pressButton('Submit request')
        .then(() => {
          expect(browser.html()).to.include('Villa Dorita is only available between 1990-01-04 and 2018-01-04');
        });
      next();
    });
  });
});

describe('request form page', () => {
  it('allows a user to fill in a request form', (next) => {
    browser.visit('/properties/request/new?id=2', () => {
      browser
        .fill('from', '2018-03-07')
        .fill('until', '2018-03-15')
        .pressButton('Submit request')
        .then(() => {
          expect(browser.html()).to.include('Booking request for Lolhost mansions received');
        });
      next();
    });
  });
});
