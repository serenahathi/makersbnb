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
  const property = req.body;

  res.redirect('/');
});

module.exports = app;

app.listen(8080);
console.log('Lolhost server started');
