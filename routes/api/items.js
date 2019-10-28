const express = require('express');
const router = express.Router();

const Ticket = require('../../Model/TicketSchema');
const Result = require('../../Model/LikertSchema');

router.get('/', async (req, res) =>{
    const count = await Ticket.countDocuments();
    const random1 = Math.floor(Math.random() * count);
    const item1 = await Ticket.findOne().skip(random1); 
    const random2 = Math.floor(Math.random() * count)
    const item2 = await Ticket.findOne().skip(random2);
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

router.get('/previousScores', async (req, res)=>{
    const ticketOne = await Ticket.findOne({ItemID: req.query.OID1}, req.query.selected);
    const ticketTwo = await Ticket.findOne({ItemID: req.query.OID2}, req.query.selected);
    const selectedTickets = [
        ticketOne,
        ticketTwo
    ]
    res.json(selectedTickets);
})
router.get('/total', async (req, res) =>{
    const count = await Result.countDocuments({user: req.query.user});
    res.json(count);
})

router.post('/', async (req, res) =>{
    const newResult = new Result({
        ID1: req.body.ID1,
        ID2: req.body.ID2,
        user: req.body.user,
        result: req.body.result,
        selectedFields: req.body.selectedFields
    });
    const addedEntry = await newResult.save();
    res.json(addedEntry);
})

module.exports = router;