process.env.NODE_ENV = 'test';
const app = require('../../app.js');

const assert = require('assert');
const Browser = require('zombie');

Browser.localhost('example.com', 3000);

const browser = new Browser();

describe('Index page', () => {
  before((done) => {
    browser.visit('/', done);
  });

  it('should display the list page', () => {
    browser.assert.success();
  });
});

describe('Property form page', () => {
  before((done) => {
    browser.visit('/properties/new', done);
  });

  it('should fill in listing form', () => {
    browser
      .fill('name', 'Villa Dorita')
      .fill('desc', 'Amazing Villa!')
      .fill('price', '6')
      .fill('from', '1990-01-04')
      .fill('until', '2018-01-04')
      .pressButton('List property')
      .then(() => {
        assert.ok(browser.success);
      });
  });
});
