require('../../models/index.js');
require('../../models/property.js');

// Try and create a file to clean dB

before((done) => {
  Property.sync({ force: true })
    .success(() => {
      done(null);
    })
    .error((error) => {
      done(error);
    });
});
