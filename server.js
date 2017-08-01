const express = require('express');
const hbs = require('hbs');
const multer = require('multer');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render("index.hbs");
});



app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});