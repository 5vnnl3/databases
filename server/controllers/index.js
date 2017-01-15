var models = require('../models');
// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, result) {
        if (err) {
          console.log('controller message GET error');
        }
        res.json(result);
      });
      // console.log(messageData);
    },
// a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, result) {
        if (err) {
          console.log('controller message POST error');
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function(req, res) {
      models.users.get(function(err, result) {
        if (err) {
          console.log('controller user GET error');
        }
        res.json(result);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, result) {
        if (err) {
          console.log('controller user POST error');
        }
        res.sendStatus(201);
      });
    } 
  },
};