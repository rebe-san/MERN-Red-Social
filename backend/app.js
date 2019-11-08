//Entry point
// app.js
const express = require('express');
const app = express();
const cors = require('cors')

//Execute db.js file
require('./db');

//setting port
const port = process.env.PORT || 4000;

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/books', require('./routes/books'));

//Binds and listens for connections on the specified host and port
app.listen(port, () => console.log(`Server running on port ${port}`));

