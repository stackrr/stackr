const mongoose = require('mogoose');

const MONGO_URI = 'Your Mongo URI (or hopefully an environment variable)';

mongoose.connect(MONGO_URI, {
    //connect method accepts options object
    //useNewUrlParser and useUnifiedTopology handle deprecation warnings stemming from an update to the MongoDB Node.js Driver
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //specifies which database to connect to
    dbName: '<your db name>',
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));


const Schema = mongoose.Schema;


const yourSchema = new Schema({
    //mongoose schema types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema
    property1: type,
    //provide object for options
    property2: {
        type: String,
        default: 'your default value',
        required: [true, 'message'],
    }
})

const YourModel = mongoose.model('yourSchemaName', yourSchema);


//export models for use in controller
module.exports = {
    YourModel,
}