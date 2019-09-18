/* Command History of important commands */

/* Phase 1: Inside and Outside the database */

/* OUTSIDE Database */

-- TO RESEED / reinitialize
cat import_db.sql | psql meowtime 

/* WITHIN DATABASE */

-- TO EXIT database
/q 

SELECT *
FROM cats
JOIN cattoys ON cattoys.cat_id = cats.id
JOIN toys ON toys.id = cattoys.toy_id
;


UPDATE toys
SET color = 'silver'
WHERE id = 1;

UPDATE cattoys SET toy_id = 3 WHERE id = 3;
DELETE FROM toys WHERE toys.id = 4; /* we just changed this reference earlier so we can delete this toyid */

DELETE FROM toys WHERE toys.id = 2; /* won't work because we use this toy row elsewhere in the cattoys table */

/*
ERROR:  update or delete on table "toys" violates foreign key constraint "cattoys_toy_id_fkey" on table "cattoys"
DETAIL:  Key (id)=(2) is still referenced from table "cattoys".
 */

 /* Phase 2: Query Planning/optimization (inside database) */

/* 
Notes:

Query PARSER:  understand your code and make sure it's syntactically correct. 

QUERY Planner & Optimizer: Make a plan and choose best approach.

Query Executor: Takes plan and runs it

Once you run a Query, you'll see something like

                      QUERY PLAN
------------------------------------------------------
 Seq Scan on cats  (cost=0.00..202.01 rows=2 width=6)
   Filter: ((name)::text = 'Jet'::text)
(2 rows)
*/

EXPLAIN SELECT cats.name FROM cats WHERE cats.name = 'Meowth';

EXPLAIN SELECT toys.name
FROM cats
JOIN cattoys ON cattoys.cat_id = cats.id
JOIN toys ON toys.id = cattoys.toy_id
WHERE cats.name = 'Meowth';

EXPLAIN SELECT cats.name, toys.name 
FROM cats
JOIN cattoys ON cattoys.cat_id = cats.id
JOIN toys ON toys.id = cattoys.toy_id
WHERE cats.color = 'Blue' AND toys.color = 'Blue'; 

EXPLAIN SELECT toys.name
FROM cats
JOIN cattoys ON cattoys.cat_id = cats.id
JOIN toys on toys.id = cattoys.toy_id
WHERE cats.breed = 'Pokemon';

EXPLAIN 
UPDATE cats
SET color = 'pink'
WHERE id = 1;

EXPLAIN
DELETE FROM toys
WHERE toys.id = 3;

EXPLAIN
INSERT INTO cattoys (cat_id, toy_id)
VALUES (
  (SELECT id 
  FROM cats
  WHERE name = 'Meowth'),
  (SELECT id
  FROM toys
  WHERE name = 'pokeball')
);

-- QUESTION
-- Use the visualization tool above comparing both EXPLAIN and EXPLAIN ANALYZE with your previous query to find all the cats with a particular name. We recommend keeping this tool open in a separate tab for the rest of the project for whenever you need a visual breakdown of a query plan.

-- Seems like this is only returning 0 since we have a small table.
-- Understanding the specifics of our QUERY plan beyond the first line is a whole other field and beyond the scope of this program/class.
-- First Line: cost. Initial and Final (total) cost to run the operation.
-- Width and Row: memory costs. Width: bytes. 




