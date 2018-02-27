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
  res.render('properties/index.ejs');
});

app.get('/properties/new', (req, res) => {
  res.render('properties/new.ejs');
});

app.post('/properties', (req, res) => {
  const params = req.body;
  console.log(req.body.name),

  models.Property.create({
    name: req.body.name,
    description: req.body.desc,
    price: req.body.price,
    availablefrom: req.body.from,
    availableuntil: req.body.until,
  }).then((property) => {
    res.json(property);
  });

  res.redirect('/');
});

module.exports = app;

app.listen(8080);
console.log('Lolhost server started');
