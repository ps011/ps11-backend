var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const aboutRouter = require('./routes/about');
const codingChallengeRouter = require('./routes/coding-challenge');
const subscribeRouter = require('./routes/subscribe');
const siteDataRouter = require('./routes/site-data');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/about', aboutRouter);
app.use('/cc', codingChallengeRouter);
app.use('/subscribe', subscribeRouter);
app.use('/site-data', siteDataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});``

module.exports = app;
