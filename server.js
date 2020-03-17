// Dependencies

const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Environment Connections
const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/perennial-portal';

// Database Connection

// ** on error/disconnect
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// ** on connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => (
    console.log('Mongoose connection established.')
))

// Middleware

app.use(express.json()); //use .json(), not .urlencoded()

// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions)) // all routes are now exposed, sometimes you just want to limit access (ie OMDB - it's ok for anyone to see the movies, but you don't want just anyone updating the movies)

// controllers

const caregiversController = require('./controllers/caregivers.js')
app.use('/perennial-api', caregiversController)

// Routes

app.get('/', (req, res) => {
    res.redirect('/perennial-api')
})

// Listen

app.listen(PORT, () => {
    console.log('API is running on port ' + PORT);
})
