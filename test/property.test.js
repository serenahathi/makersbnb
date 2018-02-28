require('./helpers/chai.js');
require('../models/property.js');

describe('Property', () => {
  let property;

  beforeEach(() => {
    property = new Property();
  });

  it('is initialized with a name', () => {
    expect(property.name).to.equal('Watery willows');
  });
});
