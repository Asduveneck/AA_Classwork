---- Getting into the new database

psql meowtime ...

---- Running the following queries with Explain Analyze

/*
Find all of the breeds for the cats named 'Noel'
Find all the toys that belong to the cat named 'Freyja'
Find all the toys and cats that are the color 'Red'
Find all the toys that belong to the cats with the breed of 'British Shorthair'
Find all the toys with a price of less than 10.
 */

 EXPLAIN SELECT cats.breed
 FROM cats 
 WHERE cats.name = 'Noel';

EXPLAIN SELECT toys.name 
FROM toys 
JOIN cattoys ON cattoys.toy_id = toys.id 
JOIN cats ON cats.id = cattoys.cat_id 
WHERE cats.name = 'Freyja';

EXPLAIN SELECT 
toys.name AS toy_name, toys.color AS toy_color, 
cats.name AS cat_name, cats.color AS cat_color
FROM cats 
JOIN cattoys ON cattoys.cat_id = cats.id 
JOIN toys ON toys.id = cattoys.toy_id 
WHERE cats.color = 'Red' OR toys.color = 'Red';

EXPLAIN SELECT 
toys.name AS toy_name, toys.color AS toy_color, 
cats.name AS cat_name, cats.color AS cat_color
FROM cats 
JOIN cattoys ON cattoys.cat_id = cats.id 
JOIN toys ON toys.id = cattoys.toy_id 
WHERE cats.color = 'Red' AND toys.color = 'Red';

-- All toys belong to cats with breed British Shorthair 

EXPLAIN SELECT 
toys.name 
FROM toys 
JOIN cattoys ON cattoys.toy_id = toys.id 
JOIN cats ON cats.id = cattoys.cat_id 
WHERE cats.breed = 'British Shorthair';

EXPLAIN ANALYZE SELECT 
toys.name 
FROM cats 
JOIN cattoys ON cattoys.cat_id = cats.id 
JOIN toys ON toys.id = cattoys.toy_id 
WHERE toys.price < 10.0;

--Notes from Phase 3 

/*
  Subqueries in SQL are like the (SELECT FROM ) blablabla.
  Subqueries require two separate queries, while JOIN does only one query.
  So it depends on whether the cost of joining the tables exceeds running 
    two separate queries. 
  
 */