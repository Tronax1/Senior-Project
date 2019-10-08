const express = require('express');
const router = express.Router();

const Ticket = require('../../Model/TicketSchema');

router.get('/', async (req, res) =>{
    const Items = await Ticket.find();
    res.json(Items);
})

module.exports = router;