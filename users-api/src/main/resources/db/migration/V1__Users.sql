CREATE TABLE Users (
  id SERIAL UNIQUE,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email   VARCHAR(50) UNIQUE,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE Songs (
 id SERIAL UNIQUE,
 title VARCHAR(50),
 songLength INTEGER,
 artist VARCHAR(50)
);

CREATE TABLE Posts (
  id SERIAL UNIQUE,
  title VARCHAR(50),
  description VARCHAR(50),
  username VARCHAR(100),
  songId INTEGER
);