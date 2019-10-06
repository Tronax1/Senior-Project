const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBRoute = process.env.DATA_BASE_ROUTE;

mongoose.connect(mongoDBRoute, { useNewUrlParser: true});
console.log('route:',mongoDBRoute)
let db = mongoose.connection;

db.once('open', ()=> console.log('Connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var TicketData = require('./TicketData.json');

const Tickets= db.collection('TicketInfo')
Tickets.insertMany(TicketData, (err,result)=>{
    console.log('Ticket Data stored')
})
const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{console.log(`Server started running on port: ${PORT}`)});