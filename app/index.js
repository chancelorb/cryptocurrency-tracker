const path = require('path');

const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/routes')

const PORT = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render('index');
// });
app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
