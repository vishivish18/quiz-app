class ResourceController {

    constructor(model) {
        this.model = model;
    }

    returnName() {
        return this.name;
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

    }

    show() {

    }

    update() {

    }

    delete() {

    }

}

module.exports = ResourceController;