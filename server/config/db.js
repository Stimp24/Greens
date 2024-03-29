const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
      try {
            await mongoose.connect(db, {
                  useNewUrlParser: true,
                  useCreateIndex: true,
                  useUnifiedTopology: true,
                  useFindAndModify: false
            });
            console.log('mongo DB connected .......');
      }
      catch (err) {
            console.log(err);
            process.exit(1) //exit process when failure
      }
}
module.exports = connectDB