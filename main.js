const express = require("express");

const { connect } = require('./connect');
const path = require("path");  // Import the 'path' module

const urlroute = require('./routes/url');
const userRoute = require('./routes/user');
const staticurl = require('./routes/staticurl');

const app = express();
const PORT = 7000;
app.set("view engine","ejs")
app.set("views", path.resolve("./views"))


// Connect to MongoDB
connect('mongodb://localhost:27017/shorturl')
  .then(() => {
    console.log("Connected to MongoDB");
   
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Use the routes
    app.use('/user', userRoute);
    app.use('/url', urlroute);
    app.use('/', staticurl);
    

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
