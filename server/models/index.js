var db = require('../db'); // gives you access to mysql schema
var express = require('express');
var app = express();

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO users SET ?', message, function(err, res) {
        if (err) {
          throw err;
        }
        console.log('Last insert ID:', res.insertId);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

      // sql queries
    },
    post: function (user) {
      db.query('INSERT INTO users SET ?', user, function(err, res) {
        if (err) {
          throw err;
        }
      // console.log('Last insert ID:', res.insertId);
      });
    }
  }
};

//  model get/post requests interacts with database