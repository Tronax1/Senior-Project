const express = require('express');
const router = express.Router();

const Ticket = require('../../Model/TicketSchema');
const Result = require('../../Model/LikertSchema');

router.get('/', async (req, res) =>{
    const Items = await Ticket.find();
    res.json(Items);
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