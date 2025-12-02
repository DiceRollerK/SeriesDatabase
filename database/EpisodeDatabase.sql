PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

CREATE TABLE time(
time_id INT PRIMARY KEY NOT NULL,
start_date DATETIME,
end_date DATETIME);

INSERT INTO time VALUES(1,'2003-11-02','2019-04-15');
INSERT INTO time VALUES(2,'1989-07-05','1998-05-14');
INSERT INTO time VALUES(3,'2017-07-28','2020-10-09');
INSERT INTO time VALUES(4,'2019-03-15','present');

CREATE TABLE genre(
genre_id INT PRIMARY KEY NOT NULL,
genre1 VARCHAR(45),
genre2 VARCHAR(45),
genre3 VARCHAR(45));

INSERT INTO genre VALUES(1,'komēdija','satīra',NULL);
INSERT INTO genre VALUES(2,'komēdija','dzīves šķēle',NULL);

CREATE TABLE story(
story_id INT PRIMARY KEY NOT NULL,
element1 VARCHAR(45),
element2 VARCHAR(45),
element3 VARCHAR(45));

INSERT INTO story VALUES(2,'Zivis','Golfs','Elektroniskais organizētājs');
INSERT INTO story VALUES(1,'Balle','Krāpšana','Pirāti');

CREATE TABLE theme(
theme_id INT PRIMARY KEY NOT NULL,
theme1 VARCHAR(45),
theme2 VARCHAR(45),
theme3 VARCHAR(45));

INSERT INTO theme VALUES(1,'Ģimene','Melošana','Bagātība');
INSERT INTO theme VALUES(2,'Melošana','Attiecības',NULL);

CREATE TABLE episode(
episode_id INT PRIMARY KEY NOT NULL,
name VARCHAR(90),
date DATETIME,
season TINYINT,
episode TINYINT,
id_show INT);

INSERT INTO episode VALUES(1,'Pilot','2003-11-02',1,1,1);
INSERT INTO episode VALUES(2,'The Marine Biologist','1994-02-10',5,14,2);
INSERT INTO episode VALUES(3,'Pier Pressure','2004-01-11',1,10,1);
INSERT INTO episode VALUES(4,'Crossroads','2019-11-22',3,11,3);
INSERT INTO episode VALUES(5,'Three Robots','2019-03-15',1,2,4);
INSERT INTO episode VALUES(6,'Sonnie''s Edge','2019-03-15',1,1,4);
INSERT INTO episode VALUES(7,'The Witness','2019-03-15',1,3,4);

CREATE TABLE IF NOT EXISTS "show" (
	"show_id"	INT NOT NULL,
	"name"	VARCHAR(90) NOT NULL,
	"id_time"	INT,
	"logo"	TINYTEXT,
	PRIMARY KEY("show_id")
);

INSERT INTO show VALUES(1,'Arrested Development',1,'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Arrested_Development.svg/2560px-Arrested_Development.svg.png');
INSERT INTO show VALUES(2,'Seinfeld',2,'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Seinfeld_logo.svg/2560px-Seinfeld_logo.svg.png');
INSERT INTO show VALUES(3,'Room 104',3,'https://upload.wikimedia.org/wikipedia/en/d/d5/Room_104_teaser.png');
INSERT INTO show VALUES(4,'Love, Death & Robots',4,'https://upload.wikimedia.org/wikipedia/en/c/cb/Love%2C_Death_%26_Robots_Logo.png');
COMMIT;
