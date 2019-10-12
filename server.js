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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('my-app/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'));
    });
}

const port = 5000 || process.env.PORT;

app.listen(port, '0.0.0.0', ()=>{console.log(`Server started running on port: ${port}`)});