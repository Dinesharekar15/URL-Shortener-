const mongoose = require('mongoose');

async function connect(url) {
  try {
    await mongoose.connect(url, {});
    // console.log('Connected to MoB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}

module.exports = {
  connect,
};
