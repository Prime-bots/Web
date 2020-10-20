const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
// settings
app.set('port', process.env.PORT || 3000);
app.engine("html", require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes/index'));
// static files
(express.static(path.join(__dirname, 'views')))

// listening the Server
app.listen(app.get('port'), () => {
  console.log('HOLA PERRO', app.get('port'));
});