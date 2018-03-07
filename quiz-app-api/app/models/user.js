var db = require('./db')
var user = db.Schema({   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['ADMIN', 'SUPERADMIN'],
        default: 'ADMIN'
    },
    password: {
        type: String,
        required: true,
        //select: false  // TODO : Vishal : Redo this, find a way to select more fields
    },
    verified: {
        type: Boolean,
        default: false

    }

})


module.exports = db.model('User', user)
