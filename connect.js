const mongoose = require('mongoose');

 function connect() {
  console.log('Connecting to MongoDB...');
   mongoose.connect('mongodb://localhost:27017/shorturl')
   .then(()=>{
    console.log('Connected to MongoDB');
   })
   .catch((err) => {
    console.log('error connecting to database');
    console.log(err);
});
}

module.exports = {
  connect,
};
