var db = require('../db'); 
var express = require('express');
var app = express();

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', function(err, rows) {
        if (err) {
          throw err;
        }
        console.log('Data received from messages:\n');
        console.log(rows);
        var messageGet = rows;
      });
      return messageGet;
    }, // a function which produces all the messages
    post: function (message) {
      db.addMessage(message);
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {
      db.query('SELECT * FROM users', function(err, rows) {
        if (err) {
          console.log('get error');
          throw err;
        }
        console.log('Data received from users:\n');
        console.log(rows);
        var userGet = rows;
      });
      return userGet;
    },
    post: function (user) {
      db.addUser(user);
    }
  }
};

//  model get/post requests interacts with database