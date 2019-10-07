const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Ticket = require('./Model/TicketSchema');

const mongoDBRoute = process.env.DATA_BASE_ROUTE;

mongoose.connect(mongoDBRoute, { useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', ()=> console.log('Connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

getData(Ticket);
async function getData(Ticket){
    const data = await Ticket.find({OID: 1});
    console.log(data);
}
const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{console.log(`Server started running on port: ${PORT}`)});