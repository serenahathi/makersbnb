const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/views`));

// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

app.get('/', (req, res) => {
  res.render('./views/properties.html');
});

app.get('/properties/new', (req, res) => {
  res.render('./views/form.html');
});

app.post('/properties', (req, res) => {
  res.send(req.params);
  // console.log(req.params);
  res.redirect('/');
});

module.exports = app;

app.listen(8080);
