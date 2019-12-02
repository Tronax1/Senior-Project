require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const items = require('./routes/api/items');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
  
// connect to database
db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 const port =  4000;
  app.listen(port, '127.0.0.1', ()=>{console.log('Connected to the database')});
});

app.use('/api', items);

const port =  5000;

app.listen(port, '127.0.0.1', ()=>{console.log(`Server started running on port: ${port}`)});