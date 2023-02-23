const models = require('./models');

const controller = {};

//get all data from a collection
controller.get = () => {
    models.YourModel.find({})
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

//get specific id from collection
controller.get = (idFromRequest) => {
    models.YourModel.find({_id: idFromRequest})
        .then(data => console.log(data[0]))
        .catch(err => console.log(err));
}

//add item to collection
constoller.add = () => {
    models.YourModel.create({
        key: value,
        key2, value2,
        //and so on
    }), (err, data) => {
        if(err) console.log(err);
        else console.log(data);
    }
}

module.exports = controller;