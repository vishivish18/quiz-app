var router = require('express').Router()
var users = require('./api/users')
var analytics = require('./api/analytics')

var clients = require('./admin/clients')
var adminUsers = require('./admin/adminUsers')
module.exports = {
    // Extras
    // init: init,
    // http: http,
    
    // API Endpoints
    users: users,
    analytics: analytics,
    
    // Admin Endpoints
    clients: clients,
    adminUsers: adminUsers
};
