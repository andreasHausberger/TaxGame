var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var failRouter = require('./routes/fail');
var backendRouter = require('./routes/backend');

var app = express();

//mongoDB stuff

var mdbURI = (process.env.MONGODB_URI || 'mongodb://localhost/test');
mongoose.connect(mdbURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log("Connection succeeded! with " + mdbURI.toString());
});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
console.log("made it past mongo setup");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

console.log("made it past mongo setup");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("made it past cookie setup ");


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/fail', failRouter);
app.use('/backend', backendRouter);

console.log("made it past router setup");



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

console.log("made it past 404 setup");


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("made it past error status setup");


module.exports = app;

console.log("made it past app export");

