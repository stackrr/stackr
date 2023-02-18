const mongoose = require('mongoose');

const { Schema } = mongoose;

const stackSchema = new Schema({
  name: String,
  pros: String,
  cons: String
})

const Stack = mongoose.model('stack', stackSchema);

module.exports = { Stack };