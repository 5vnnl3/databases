-- CREATE DATABASE chat;
-- SHOW DATABASES;
USE chat;

drop table if exists messages;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text VARCHAR(200) NOT NULL,
  roomname VARCHAR(40) NOT NULL,
  PRIMARY KEY (ID)
);

drop table if exists users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY(ID)
);

drop table if exists rooms;

-- CREATE TABLE rooms (
-- room_id INT AUTO_INCREMENT PRIMARY KEY,
-- roomname VARCHAR(50) UNIQUE
-- );

-- SHOW TABLES;

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
