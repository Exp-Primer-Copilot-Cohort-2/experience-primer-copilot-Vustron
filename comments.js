// create web server
const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// create a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// create a route
app.get('/comments/new', (req, res) => {
  res.send('New Comments');
});

// create a route
app.get('/comments/:id', (req, res) => {
  res.send('Show Comments');
});

// create a route
app.get('/comments/:id/edit', (req, res) => {
  res.send('Edit Comments');
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});