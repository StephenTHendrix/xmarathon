CREATE TABLE runners (
  ID SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  age NUMERIC NOT NULL
);

INSERT INTO runners (full_name, age)
VALUES  ('Trenton Kennedy', 30);