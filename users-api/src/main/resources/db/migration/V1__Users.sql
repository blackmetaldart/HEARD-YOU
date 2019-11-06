CREATE TABLE User (
  id SERIAL UNIQUE,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email   VARCHAR(50) UNIQUE,
  username VARCHAR(100) UNIQUE,
  password VARCHAR(255)
)