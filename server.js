const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

const mongoDBRoute = process.env.DATA_BASE_ROUTE;

mongoose.connect(mongoDBRoute, { useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

db.once('open', ()=> console.log('Connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/items', items);

const port = 5000 || process.env.PORT;

app.listen(port, ()=>{console.log(`Server started running on port: ${port}`)});