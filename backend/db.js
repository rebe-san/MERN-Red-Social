const mongoose = require('mongoose');
 //environment variables
require('dotenv').config();
//Choose URI between .env or local path
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/merndatabase';
console.log(process.env.MONGODB_URI)   

//Connection
const connectDB = async () => {
    try {
      await mongoose.connect(
        URI,
        {
          useUnifiedTopology: true,
          useNewUrlParser:true
        }
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1); //Exits with an exit code of 1 from the current Node.js process 
    }
  };
  

  connectDB();