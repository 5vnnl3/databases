var db = require('../db'); 

module.exports = {
  messages: {
    get: function (callback) {
      queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                  from messages left outer join users on (messages.userid = users.id) \
                  order by messages.id desc';
      db.query(queryStr, function(err, result) {
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      queryStr = 'insert into messages(text, userid, roomname) \
                  value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, result) {
        callback(err, result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, result) {
        callback(err, result);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) value (?)';
      db.query(queryStr, params, function(err, result) {
        callback(err, result);
      });
    }
  }
};

//  model get/post requests interacts with database