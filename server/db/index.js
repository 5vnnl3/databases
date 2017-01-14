var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// First you need to create a connection to the db
var db = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  database: 'chat'
});

db.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

db.query('SELECT * FROM users', function(err, rows) {
  if (err) {
    throw err;
  }
  console.log('Data received from users:\n');
  console.log(rows);
});

db.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

module.exports = db;