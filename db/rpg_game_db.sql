DROP DATABASE IF EXISTS rpg_game_db;
DROP DATABASE IF EXISTS rpg_game_db;
CREATE DATABASE rpg_game_db;

USE rpg_game_db;
DROP TABLE IF EXISTS PlayerStat;
CREATE TABLE PlayerStat(
id INT(10) UNIQUE,
playerName VARCHAR(100),
playerType VARCHAR(25),
strength INT(10) NOT NULL,
constitution INT(10) NOT NULL,
dexterity INT(10) NOT NULL,
intelligence INT(10) NOT NULL,
wisdom INT(10) NOT NULL,
utility INT(10) NOT NULL,
XP INT(10) NOT NULL
);
DROP TABLE IF EXISTS humanSkill;
CREATE TABLE humanSkill(
name VARCHAR(50) NOT NULL,
description VARCHAR(255),
energyCost INT(10),
dmg_Heal INT(10),
damMult FLOAT (10,2)
);
DROP TABLE IF EXISTS cyborgSkill;
CREATE TABLE cyborKill(
name VARCHAR(50) NOT NULL,
description VARCHAR(255),
energyCost INT(10),
dmg_Heal INT(10),
damMult FLOAT (10,2)
);
DROP TABLE IF EXISTS alienSkill;
CREATE TABLE alienSkill(
name VARCHAR(50) NOT NULL,
description VARCHAR(255),
energyCost INT(10),
dmg_Heal INT(10),
damMult FLOAT (10,2)
);
DROP TABLE IF EXISTS machineSkill;
CREATE TABLE machineSkill(
name VARCHAR(50) NOT NULL,
description VARCHAR(255),
energyCost INT(10),
dmg_Heal INT(10),
damMult FLOAT (10,2)
);



