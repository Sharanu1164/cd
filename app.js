const express = require('express');

const bodyParser = require('body-parser');
// const cors = require('cors');
const dotenv = require('dotenv');

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

 const app = express();
app.use(bodyParser.json());
// app.use(cors());



// Middleware
// app.use('/students', () => {
//     console.log('Middleware Running');
// });


// Routes 
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });


// app.get('/students', (req, res) => {
//     res.send('Student');
// });

const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
app.use('/', require('./routes/index'));

app.listen(8000);



