//Deconstructing
const { Schema, model } = require('mongoose');


//Defining schema for post
const postSchema = new Schema({   
    //    date: {
    //     type: number,
    //     required: true
    //   },
      name: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      id_user: {
        type: String,
        required: true
      }
})


//Defining schema for user

//Compiling our schema into a Model.
module.exports = model('post', postSchema);