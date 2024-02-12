const express = require("express");
const {restrictuserlogin,cheakauth}=require('./middelware/auth')
const { connect } = require('./connect');
const path = require("path");  // Import the 'path' module
const cookieParser = require('cookie-parser');

const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/staticurl');

const app = express();
const PORT = 7000;
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


// Connect to MongoDB
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Use the routes
app.use('/url', restrictuserlogin,urlRoute);
app.use('/user', userRoute);
app.use('/',cheakauth, staticRoute);

// Start the serve
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
