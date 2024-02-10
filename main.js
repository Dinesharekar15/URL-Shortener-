const express = require("express");

const { connect } = require('./connect');
const path = require("path");  // Import the 'path' module

const urlroute = require('./routes/url');
const userRoute = require('./routes/user');
const staticurl = require('./routes/staticurl');

const app = express();
const PORT = 7000;
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


// Connect to MongoDB
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes
app.use('/', staticurl);
app.use('/user', userRoute);
app.use('/', urlroute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
