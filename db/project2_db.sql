USE project2_db;
CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR
(50) NOT NULL,
userpword  VARCHAR
(50) NOT NULL,
charactername VARCHAR
(100),
characterlevel INT
(5),
characterxp INT
(10),
charactertype VARCHAR
(25)
);