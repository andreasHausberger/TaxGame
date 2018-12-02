var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var failRouter = require('./routes/fail');
var thanksRouter = require('./routes/thanks');
var backendRouter = require('./routes/backend');

var app = express();

//start app without bin/www

var debug = require('debug')('untitled:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT);

if (port == null || port == "") {
    port = 8000;
}
app.set('port', port);
console.log("Connection on port: " + port);


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}


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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

console.log("made it past cookie setup ");


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/fail', failRouter);
app.use('/thanks', thanksRouter);
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

