const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var currentYear = new Date().getFullYear();

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/year/:age/:name', function(req, res) {
  var age = req.params.age;
  var name = req.params.name;
  var yearBorn = currentYear - age;
  response.render('hello_year.hbs', {
    title: 'Hello',
    name: name,
    yearBorn: yearBorn
  });
});

app.post('/year/:age/:name', function(req, res) {
  var age = req.params.age;
  var name = req.params.name;
  var yearBorn = currentYear - age;
  response.render('hello_year.hbs', {
    title: 'Hello',
    name: name,
    yearBorn: yearBorn
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
