const express = require('express');
const uuidv4 = require('uuid/v4');
const users = require('../services/users').default;

// we'll talk about this in a minute:
const serverRenderer = require('./renderer').default;

const PORT = 8080;
const path = require('path');

// initialize the application and create the routes
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
// root (/) should always serve our server rendered page
app.use(cookieUUID);
app.post('/api/login', login);
app.post('/api/logout', logout);
app.get('/api/users', getUser);
app.get('/', serverRenderer);
app.use(express.static(
    path.resolve(__dirname, '../..', 'build'),
));
app.get('*', serverRenderer);

// other static resources should just be served as they are

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});

function cookieUUID(req, res, next) {
    if (!req.cookies.uuid && !/^\/.+\..+$/.test(req.url)) {
        req.cookies.uuid = uuidv4();
        users.setValue(req.cookies.uuid, false);
        res.cookie('uuid', req.cookies.uuid, { maxAge: 900000, httpOnly: true });
    }
    return next()
}

function login(req, res, next) {
    users.setValue(req.cookies.uuid, true);
  return res.redirect('/admin')
}

function logout(req, res, next) {
    users.setValue(req.cookies.uuid, false);
  return res.redirect('/')
}

function getUser(req, res, next) {
  return res.json({isLoggedIn: users[req.cookies.uuid]});
}