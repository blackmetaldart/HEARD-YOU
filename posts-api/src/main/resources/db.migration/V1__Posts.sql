CREATE TABLE Posts (
  id SERIAL UNIQUE,
  title VARCHAR(50),
  description VARCHAR(50),
  username VARCHAR(100),
  songId INTEGER
)