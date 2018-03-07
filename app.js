const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(require('path').join(__dirname, 'public')));
app.use('/', require('./controllers/index'));

let port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port ', port)

module.exports = app

