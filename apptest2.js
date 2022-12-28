const express = require('express');

const app = express();
const port = 8080;

/* Static content */
app.use(express.static('public/back'));

/* Add path */
app.get('/About', (req, res) => {
  res.send('About this page');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });