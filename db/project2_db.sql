USE project2_db;
DROP TABLE users;
CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
userpword  VARCHAR(200) NOT NULL,
charactername VARCHAR(100),
characterlevel INT(5),
characterxp INT(10),
charactertype VARCHAR
  (25),
  cookie TEXT

)
