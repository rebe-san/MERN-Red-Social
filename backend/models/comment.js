//Deconstructing
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  id_user: {
    type: String,
    required: true
  }
});

//Compiling our schema into a Model.
module.exports = model('user', commentSchema);



