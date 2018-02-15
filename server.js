const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (requeste, response) => {
  //response.send('<h1>Hello Express!</h1>');
  //response.send({name: 'Alberto', likes: ['chess', 'football']});
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Hello friends'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({errorMessage: 'Error handling the request'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});