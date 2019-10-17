const express = require('express');
const router = express.Router();

const Ticket = require('../../Model/TicketSchema');
const Result = require('../../Model/LikertSchema');

router.get('/', async (req, res) =>{
    const item1 = await Ticket.findOne(); 
    const item2 = await Ticket.findOne();
    const tickets = [
        item1,
        item2
    ];
    res.json(tickets);
});

router.get('/scores', async (req, res) =>{
    const results = await Result.find({user: req.query.user});
    res.json(results);
})

router.post('/', async (req, res) =>{
    const newResult = new Result({
        ID1: req.body.ID1,
        ID2: req.body.ID2,
        user: req.body.user,
        result: req.body.result,
    });
    const addedEntry = await newResult.save();
    res.json(addedEntry);
})

module.exports = router;