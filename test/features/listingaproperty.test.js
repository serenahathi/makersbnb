console.log('running zombie test');

process.env.NODE_ENV = 'test';
var app = require('../../app.js');
var Browser = require('zombie');
var http = require('http').createServer(app).listen(3000);

Browser.localhost('example.com', 3000);

describe('Property form page', function(){

  const browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  });

  it('should display the list page', function(){
    browser.assert.success();
  });

})
