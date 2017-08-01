const express = require('express');
const hbs = require('hbs');
const multer = require('multer');
//need to add a limit
var upload = multer({dest: 'files/'})
var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render("index.hbs");
});

app.post('/api', upload.single('filepic'), (req, res) => {
var filesize = req.file.size
// console.log(JSON.stringify(req.file, undefined, 2));
res.json({filesize});
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});