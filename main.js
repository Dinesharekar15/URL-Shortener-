const express = require("express");
const route = require('./router');
const { connect } = require('./connect');
const app = express();
const PORT = 7001;

// Connect to MongoDB
connect('mongodb://localhost:27017/shorturl')
  .then(() => {
    console.log("Connected to MongoDB");

    app.use(express.json());
        // Use the routes
    app.use('/', route);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
