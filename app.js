const models = require('./models/index');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/views`));

app.get('/', (req, res) => {
  models.Property.findAll().then((properties) => {
    res.render('properties/index.ejs', {
      properties,
    });
  });
});

app.get('/properties/new', (req, res) => {
  res.render('properties/new.ejs');
});

app.post('/properties', (req, res) => {
  const property = req.body;
  models.Property.create({
    name: property.name,
    description: property.desc,
    price: property.price,
    availablefrom: property.from,
    availableuntil: property.until,
  }).then(() => {
    res.redirect('/');
  });
});

app.get('/properties/request/new', (req, res) => {
  models.Property.findById(req.query.id).then((property) => {
    res.render('properties/new_request.ejs', {
      property,
    });
  });
});

app.post('/properties/request', (req, res) => {
  const request = req.body;
  if (request.from >= request.propFrom && request.from <= request.propUntil) {
    res.render('properties/request.ejs', {
      request,
    });
  } else {
    res.render('properties/unavailable.ejs', {
      request,
    });
  }
});


module.exports = app;

app.listen(8080);
console.log('Lolhost server started');
