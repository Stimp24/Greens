//creating an Express server, attaching the cors and body-parser middleware and making the server listening on port 4000.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.PORT || 4000;
//Mongo set up
const connectedDB = require('./config/db')
const mongoose = require('mongoose')
const CONNECTION_URL = 'mongodb+srv://stimp24:IPhone_4@propertyporium.qbgba.mongodb.net/PropertyPorium?retryWrites=true&w=majority'

//Define Routes

app.use('/list', require('./Routes/list'))
app.use('/payments', require('./Routes/payments'))

//ConnectDB
connectedDB();
//Init middleware
app.use(express.json({ extended: false }));

// SERVER static assets in production
if (process.env.NODE_ENV === 'production') { //check if build is in production
    app.use(express.static('client/build')) //setting static folder

    app.get('*', (req, res) => {//setting up routing 
        res.sendFile(path.resolve(__dirname, 'client', 'build', index.html));// setting path
    });
}
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, function () {
//         console.log("Server is running on Port: " + PORT);
//     }))
//     .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)


