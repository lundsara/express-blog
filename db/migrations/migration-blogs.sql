\c blogs_dev;

CREATE TABLE IF NOT EXISTS blog (
  id SERIAL PRIMARY KEY,
  title TEXT,
  img VARCHAR(255),
  issuetime VARCHAR(255),
  category VARCHAR(255),
  author VARCHAR(255),
  entry TEXT

);
