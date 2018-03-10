const ResourceController = require("../ResourceController");
const Quiz = require('../../models/quiz')


class QuizController extends ResourceController {
    constructor(...args) {
        super(...args);
    }    
    // update(req,res){
    //     console.log("this is a function")
    // }


}
var qc = new QuizController(Quiz);
quiz = {
    create: (req, res) => {
        qc.create({ "quizName": "New Quiz", "year": "2018" }).then((result) => {
            res.send(result);
        });
    },
    list: (req, res) => {
        qc.index().then((result) => {
            res.send(result);
        });
    },
    show: (req, res) =>{
        qc.show(req.params._id).then((result)=>{
            res.send(result);
        });        
    }


}

module.exports = quiz