require('./helpers/chai.js')
require('../models/property.js')

describe('Property', function(){

  let property;

  beforeEach(()=> {
    property = new Property();
  });

  it('is initialized with a name', function(){
    expect(property.name).to.equal('Watery willows');
  });
});
