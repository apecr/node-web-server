const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());


app.get('/', (requeste, response) => {
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Hello friends'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({errorMessage: 'Error handling the request'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});