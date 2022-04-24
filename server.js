const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs')
})

app.get('/about', (req, res) => {
  res.render(__dirname + '/views/about/index.ejs')
})

app.get('/contact', (req, res) => {
  res.render(__dirname + '/views/contact/index.ejs')
})

app.get('/portfolio', (req, res) => {
  res.render(__dirname + '/views/portfolio/index.ejs')
})

app.get('/objets', (req, res) => {
  res.render(__dirname + '/views/objets/index.ejs')
})

app.get('/objets/tous', (req, res) => {
  res.render(__dirname + '/views/objets/tous/index.ejs')
})

app.get('/objets/chaussures', (req, res) => {
  res.render(__dirname + '/views//objets/chaussures/index.ejs')
})

app.get('/objets/glasspaint', (req, res) => {
  res.render(__dirname + '/views//objets/glasspaint/index.ejs')
})

app.get('/objets/toiles', (req, res) => {
  res.render(__dirname + '/views//objets/toiles/index.ejs')
})

app.get('/objets/vinyles', (req, res) => {
  res.render(__dirname + '/views//objets/vinyles/index.ejs')
})

app.get('/objets/coques', (req, res) => {
  res.render(__dirname + '/views//objets/coques/index.ejs')
})

app.get('/objets/aquarelles', (req, res) => {
  res.render(__dirname + '/views//objets/aquarelles/index.ejs')
})

app.set('view engine', 'ejs');

app.listen(4000, function() {
  console.log('########server is running########');
})
