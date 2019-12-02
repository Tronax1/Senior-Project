const express = require('express');
const router = express.Router();
const { Parser } = require('json2csv');
const fs = require('fs')
const path = require('path');
var mysql = require('mysql');
const fields = ['ID1', 'ID2', 'user', 'result', 'date'];
const opts = {fields};

const Ticket = require('../../Model/TicketSchema');
const Result = require('../../Model/LikertSchema');

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mathew',
    database: 'sunview'
});
  
// connect to database
dbConn.connect(); 

//gets the tickets from the database for ticket comparison page
//you need to change table_name to your database name or put it in as a variable somewhere
router.get('/tickets', async (req, res) =>{
    dbConn.query('SELECT * FROM tickets ORDER BY RAND() LIMIT 2', function (error, results, fields) {
    if (error) throw error;
	const item1 = results[0]
	const item2 = results[1]
    const tickets = [
        item1,
        item2
    ];
    res.json(tickets); 
	});
})

//gets values from results database
router.get('/scores', async (req, res) =>{
	dbConn.query('SELECT * FROM results where user=?', req.query.user, function (error, results, fields) {
		if (error) throw error;
		res.json(results);
	});
})

router.get('/exportCSV', async (req, res) =>{
    const startDate = new Date(req.query.dateOne);
    const endDate = new Date(req.query.dateTwo);
    let selector = ""
    selector += req.query.select

    if(selector === "Current"){ //for current user
		dbConn.query('SELECT * FROM results where user=? date BETWEEN ? AND  ?', [req.query.user,startDate,endDate], function (error, results, fields) {
			if (error) throw error;
			const parser = new Parser(opts);
			const csv = parser.parse(results);
			res.json(results);
			fs.writeFileSync('data.csv', csv);
			res.download(path.join(__dirname, '../../', 'data.csv'));
		});
    }
    if(selector === "All"){//for all users
        dbConn.query('SELECT * FROM results where user=? date BETWEEN ? AND  ?', [req.query.user,startDate,endDate], function (error, results, fields) {
			if (error) throw error;
			const parser = new Parser(opts);
			const csv = parser.parse(results);
			res.json(results);
			fs.writeFileSync('data.csv', csv);
			res.download(path.join(__dirname, '../../', 'data.csv'));
		});
    }
})

//selects previous tickets to rescore when editing
router.get('/previousScores', async (req, res)=>{
	var selected = req.query.selected.replace(/^\s+|\s+$/g, '');
	selected = selected.replace(/\s/g, ',');
	dbConn.query('SELECT '+selected+' FROM tickets where ItemID=? or ItemID=?', [req.query.OID1,req.query.OID2], function (error, results, fields) {
		if (error) throw error;
		results[0].constructor.name='';
		results[1].constructor.name='';
		const ticketOne = results[0]//JSON.parse(JSON.stringify(results[0]))
		const ticketTwo = results[1]//JSON.parse(JSON.stringify(results[1]))
		const selectedTickets = [
        ticketOne,
        ticketTwo
		]
		console.log(selectedTickets);
		res.json(selectedTickets);
	});
})

//returns number of comparisons for a grader
router.get('/results/total', async (req, res) =>{
	dbConn.query('SELECT COUNT(*) FROM results where user=?', req.query.user, function (error, results, fields) {
		res.json(results.length);
	});
})

//adds results to results database or table
router.post('/results', async (req, res) =>{
	var current_date=(new Date()).toISOString()
	dbConn.query("INSERT INTO results SET ? ", {
		_id: req.body.ID1+'-'+req.body.ID2+current_date,
		ID1: req.body.ID1,
        ID2: req.body.ID2,
        user: req.body.user,
        result: req.body.result,
		date:current_date,
        selectedFields: req.body.selectedFields }, function (error, results, fields) {
			res.json(results);
	});
})

router.delete('/results/delete/:id', async (req, res)=>{   
	dbConn.query('DELETE FROM results WHERE _id = ?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.send("ok");
    });
})
module.exports = router;