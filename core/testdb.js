var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
  user:"root",
  password:"",
  host:"localhost",
  database:"jesuschristtv"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});