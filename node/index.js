const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(bodyParser.json());
app.use((req, res, next)  => {
res.setHeader('Access-Control-allow-Origin','*');
res.setHeader('Access-Control-allow-Methods','GET,POST,PUT,DELETE');
res.setHeader('Access-Control-allow-Headers','Content-Type,Authorization');
next();

});
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', /* MySQL User */
  password: '', /* MySQL Password */
  database: 'turf' /* MySQL Database */
});
   
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});
   
/**
 * Get All user
 *
 * @return response()
 */
app.get('/api/signup',(req, res) => {
  let sqlQuery = "SELECT * FROM userdetails";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/signup/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM userdetails WHERE uid=" + req.params.id;
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/signup',(req, res) => {
  let data = {firstname: req.body.firstname,Lastname: req.body.Lastname,username: req.body.username,email:req.body.email,password:req.body.password};
  
  let sqlQuery = "INSERT INTO userdetails SET ?";

  
  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
    
  });
});
   
/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/signup/:id',(req, res) => {
  let sqlQuery = "UPDATE userdetails SET Firstname='"+req.body.firstname+"',  Lastname='"+req.body.lastname+"', Username='"+req.body.username+"', Email='"+req.body.email+"', Password='"+req.body.password+"' WHERE uid="+req.params.id;
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/signupr/:id',(req, res) => {
  let sqlQuery = "DELETE FROM userdetalis WHERE uid="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});
  

/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3000...');


});
