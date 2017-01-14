var models = require('../models');
// var express = require('express');
// var app = express();
var cors = require('cors');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function(req, res) {
      var messageData = models.messages.get();
      console.log(messageData);
      res.end('end message post');
    },
// a function which handles a get request for all messages
    post: function (req, res) {
      console.log('message data?', req.body);
      models.messages.post(req.body);
      res.end('end message post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var userData = models.users.get();
      console.log(userData);
      res.end('end users get');
    },
    post: function (req, res) {
      console.log('user data?', req.body);
      models.users.post(req.body);
      res.end('end user post');
    }
  }
};