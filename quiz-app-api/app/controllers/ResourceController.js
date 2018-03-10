class ResourceController {

    constructor(model) {
        this.model = model;
    }

    create(data) {
        return new Promise((resolve, reject) => {
            var model = new this.model(data)
            model.save((err, response) => {
                if (err) {
                    reject(err)
                }
                resolve(response);
            })
        })
    }

    index() {
        return new Promise((resolve, reject) => {
            var model = this.model
            model.find({}, (err, response) => {
                if (err) {
                    reject(err)
                }
                resolve(response);
            })
        })
    }

    show(id) {
        return new Promise((resolve, reject) => {
            var model = this.model
            model.find({_id:id}, (err, response) => {
                if (err) {
                    reject(err)
                }
                resolve(response);
            })
        })        
    }

    update(req, res) {
    	console.log('update called');
    	res.send('update called from resource controller')
    }

    delete() {

    }

}

module.exports = ResourceController;