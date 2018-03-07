var api         = require('./api')
var admin         = require('./admin')  
var config = require('../../config/config.js')
module.exports = {
    apiBaseUri: config.apiBaseUri,
    adminBaseUri: config.adminBaseUri,
    api: api,
    admin: admin    
};