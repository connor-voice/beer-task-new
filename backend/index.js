const express = require('express');
const cors = require('cors');
const beerRoutes = require('./routes/beerRoutes.js');

const mongoose = require('mongoose');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.use((err, request, response, next) => {
    console.log(err.stack);
    response.status(500).send(err.message);
});

//DB CONNECTION
let dbURI = 'beerCollection';

// //TEST DB CONNECTION
// let dbURI = 'testBeerCollection';

//can change the name of the collection here to change db name
mongoose.connect(`mongodb://localhost:27017/${dbURI}`, {useNewUrlParser: true}, 
(error) => {
    if (error) {
        console.log('cannot connect to db');
    } else if (!error) {
        console.log('connected to the db');
    }
});

app.use('/beer', beerRoutes);

const server = app.listen(5015, () => {
    console.log('server started');
});

module.exports = server;