const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (requeste, response) => {
  //response.send('<h1>Hello Express!</h1>');
  response.send({name: 'Alberto', likes: ['chess', 'football']});
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({errorMessage: 'Error handling the request'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});