const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const { dbPropertyConnection } = require('../db/property')
const { Server } = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS
app.use(cors({ origin: 'https://localhost:8080' }));
app.use((req, res, next)=> {
    res.header('Access-control-Allow-Origin', 'https://localhost:8080');
    res.header('Access-control-Allow-Credentials', 'true');
    res.header(
        'Access-control-Allow-Headers',
        'Origin', 'X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    next();
});

//ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);

//DB connection
dbPropertyConnection();

module.exports = app;
