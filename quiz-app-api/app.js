/**
 * Module dependencies.
 */
"use-strict"

var express = require('express')
var mongoose = require("mongoose")
var bodyParser = require('body-parser')
var routes = require("./app/routes")


var app = express();
var router = require('express').Router()
var path = require('path')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-auth, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({ limit: 153791147 }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: 153791147
}));

var port = process.env.PORT || 1818;

var server = app.listen(port, function() {
    console.log('Magic begins at port ', port);
});
console.log("Base for API", routes.apiBaseUri);
console.log("Base for Admin", routes.adminBaseUri);

app.get('/ignition', function(req, res){
	res.send('App is running');
});

app.use(require('./config/auth'));

// API specific Routes
app.use(routes.apiBaseUri, routes.api(app));

// Admin specific Routes
app.use(routes.adminBaseUri, routes.admin(app));

// app.use(express.static(path.resolve('public/assets/')))
// app.use(express.static(path.resolve('public/app/views')))
// app.get('*', function(req, res) {
//     res.sendFile(path.resolve('public/index.html'));
// });
