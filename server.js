require('./config/config.js');
const express = require('express');
const hbs = require('hbs');
const multer = require('multer');
const fs = require('fs');

var upload = multer({dest: 'files/', limits: {fileSize: 2000000}});
var app = express();
var port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render("index.hbs");
});

app.post('/api', upload.single('filepic'), (req, res) => {
  var filesize = req.file.size
  fs.unlink('./files/' + req.file.filename, (err) => {
    if(err){
       throw err;
    }
  });
  res.json({filesize});
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});