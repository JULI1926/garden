var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const plantasRouter = require('./routes/plantas');
const productosRouter = require('./routes/productos');
const proveedoresRouter = require('./routes/proveedores');
const clientesRouter = require('./routes/clientes');
const stockRouter = require('./routes/stock');
const ventasRouter = require('./routes/ventas');

var app = express();

// Habilitar CORS para permitir peticiones desde Angular
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/plantas', plantasRouter);
app.use('/api/productos', productosRouter);
app.use('/api/proveedores', proveedoresRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/stock', stockRouter);
app.use('/api/ventas', ventasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  const errorResponse = {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  };

  // enviar respuesta de error en formato JSON
  res.status(err.status || 500);
  res.json(errorResponse);
});

module.exports = app;
