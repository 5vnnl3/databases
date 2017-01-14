-- CREATE DATABASE chat;
SHOW DATABASES;
USE chat;

CREATE TABLE users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) UNIQUE
);

CREATE TABLE messages (
message_id INT AUTO_INCREMENT PRIMARY KEY,
object_id VARCHAR(50) UNIQUE,
U_Id int,
message_text VARCHAR(500),
roomname VARCHAR(50),
created_at VARCHAR(50),
FOREIGN KEY (U_Id) REFERENCES users(user_id)
);

SHOW TABLES;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

