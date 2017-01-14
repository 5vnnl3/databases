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
      // models.messsages.get();
      var data = models.messages.get();
      console.log(data);
      res.end('hello world');
    },
// a function which handles a get request for all messages
    post: function (req, res) {
      res.end('hello world');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.end('hello world');
      // use model.get
    },
    post: function (req, res) {
      console.log(req.body);
      res.end('hello world');
    }
  }
};
