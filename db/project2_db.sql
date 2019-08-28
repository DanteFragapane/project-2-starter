USE project2_db;
CREATE TABLE users
(
  username VARCHAR
  (50) PRIMARY KEY UNIQUE NOT NULL,
  userpword TEXT NOT NULL,
  charactername VARCHAR
  (100),
  characterlevel INT
  (5),
  characterxp INT
  (10),
  charactertype VARCHAR
  (25)
);