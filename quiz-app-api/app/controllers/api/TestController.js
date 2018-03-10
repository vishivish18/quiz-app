const ResourceController = require("../ResourceController");
const User = require('../../models/user')


class TestController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

}
var tc = new TestController(User);
newtest = {
    testFunction: function(req, res) {        
        var response = tc.returnNameAndAge();
        res.send(response);
    },
    anotherFunction: function(req, res) {        
        var response = tc.returnName();
        res.send(response);
    },
    create: function(req,res) {
        tc.create({ "name": "Another controller", "email": "vishal@jatana.ai" }).then((result)=>{
            res.send(result);
        });        
    }


}

module.exports = newtest