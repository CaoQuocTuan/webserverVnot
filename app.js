var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var manager = require('./routes/manager');
var notification = require('./routes/notification');
var desinger = require('./routes/desinger');
var model = require('./routes/model');
var diagram = require('./routes/diagram');
var video = require('./routes/video');


var userManagement = require('./routes/Admin/userManagement');
var designerManagement = require('./routes/Admin/designerManagement');
var modelManagement = require('./routes/Admin/modelManagement');
var diagramManagement = require('./routes/Admin/diagramManagement');
var videoManagement = require('./routes/Admin/videoManagement');
var notificationManagement = require('./routes/Admin/notificationManagement');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/manager', manager);
app.use('/notification', notification);
app.use('/desinger', desinger);
app.use('/model', model);
app.use('/diagram', diagram);
app.use('/video', video);

app.use('/userManagement', userManagement);
app.use('/designerManagement', designerManagement);
app.use('/modelManagement', modelManagement);
app.use('/diagramManagement', diagramManagement);
app.use('/videoManagement', videoManagement);
app.use('/notificationManagement', notificationManagement);
app.use('/data', express.static('data_os'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message : err.message,
			error : err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message : err.message,
		error : {}
	});
});

module.exports = app;
