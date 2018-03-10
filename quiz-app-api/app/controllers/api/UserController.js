const ResourceController = require("../ResourceController");
const User = require('../../models/user')


class UserController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

}
var uc = new UserController(User);
user = {    
    create: function(req,res) {
        uc.create({ "name": "Another controller", "email": "vishal@jatana.ai" }).then((result)=>{
            res.send(result);
        });        
    }


}

module.exports = user