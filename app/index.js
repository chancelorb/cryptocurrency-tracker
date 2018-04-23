require('dotenv').config();
const path = require('path');

const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session')

const authService  = require('./user/auth/AuthService');
const authRouter   = require('./user/auth/AuthRouter');
const homeRouter = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.set('superSecret', process.env.SERVER_SECRET);
app.set('view engine', 'ejs');

// some logging

app.use(session( {
    secret:             'superSecret',
    resave:             false,
    saveUninitialized:  false,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// this is a private route
app.get('/myHome', authService.loginRequired, (req, res) => {
  res.render('myHome', {
    info: req.session.user
  });
});

//route handler
app.use('/auth', authRouter);
app.use('/', homeRouter);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}, in ${app.get('env')} mode.`);
}).on('error', console.error);
