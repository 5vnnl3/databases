var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// First you need to create a connection to the db
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
  // password: "jay"
});

db.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

db.query('SELECT * FROM messages', function(err, rows) {
  if (err) {
    throw err;
  }
  console.log('Data received from Db:\n');
  console.log(rows);
});

// var user = {username: 'Kevin'};
// db.query('INSERT INTO users SET ?', user, function(err, res) {
//   if (err) {
//     throw err;
//   }
//   console.log('Last insert ID:', res.insertId);
// });

db.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

module.exports = db;