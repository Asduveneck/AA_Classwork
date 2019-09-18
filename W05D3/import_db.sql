DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;
/* Hopefully right place here */


/* 
A table for 
  cats
    id, name, color, breed
  toys
    id, price, color, name
  cattoys
    id, cat_id, toy_id
*/

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255), /* variable type string under 255 characters */
  color VARCHAR(255),
  breed VARCHAR(255)
); /* SEMICOLON ENDS A COMMAND IN SQL */

CREATE TABLE toys (
  id SERIAL PRIMARY KEY,
  price FLOAT, 
  color VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE cattoys (
  id SERIAL PRIMARY KEY,
  cat_id INTEGER,
  toy_id INTEGER,
  /* FOREIGN KEY CONSTRAINTS */ 
  FOREIGN KEY (cat_id) REFERENCES cats(id),
  FOREIGN KEY (toy_id) REFERENCES toys(id)
);


INSERT INTO
  cats 
  (name, color, breed)
VALUES
  ('Fred', 'Yellow', 'Tabby'), 
  ('Draco', 'Blue', 'Bird'),
  ('Nelly', 'Black', 'Siamese'),
  ('Meowth', 'White', 'Pokemon'),
  ('Umbrion', 'Black', 'Pokemon');


INSERT INTO
  toys
  (price, color, name) 
VALUES 
  (2.99, 'blue', 'ball'),
  (4.00, 'red', 'pokeball'),
  (9.99, 'grey', 'catnip'),
  (100.00, 'red', 'lazer pointer'),
  (29.99, 'white', 'fake pizza');


INSERT INTO 
  cattoys
  (cat_id, toy_id) /* only insert what it accepts */
VALUES
  /*  Row 1 */ 
  ( 
     (SELECT id 
    FROM cats 
    WHERE name = 'Fred'),
    (SELECT id 
    FROM toys 
    WHERE name = 'ball')
     ),
  /*  Row 2 */
  ( 
     (SELECT id 
    FROM cats 
    WHERE name = 'Draco'),
    (SELECT id 
    FROM toys 
    WHERE name = 'pokeball')
     ),
  /*  Row 3 */
  ( 
     (SELECT id 
    FROM cats 
    WHERE name = 'Nelly'),
    (SELECT id 
    FROM toys 
    WHERE name = 'catnip')
     ), 
  /*  Row 4 */
  (
     (SELECT id 
    FROM cats 
    WHERE name = 'Meowth'),
    (SELECT id 
    FROM toys 
    WHERE name = 'lazer pointer')
     ), 
  /*  Row 5 */
  (
     (SELECT id 
    FROM cats 
    WHERE name = 'Umbrion'),
    (SELECT id 
    FROM toys 
    WHERE name = 'fake pizza')
     )
;
