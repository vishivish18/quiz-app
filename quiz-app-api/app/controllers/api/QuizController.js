const ResourceController = require("../ResourceController");
const Quiz = require('../../models/quiz')


class QuizController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

}
var qc = new QuizController(Quiz);
quiz = {    
    create: function(req,res) {
        qc.create({ "quizName": "New Quiz", "year": "2018" }).then((result)=>{
            res.send(result);
        });        
    }


}

module.exports = quiz