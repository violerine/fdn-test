CREATE TABLE "Users" (
	id SERIAL PRIMARY KEY,
	"firstName" VARCHAR,
	"lastName" VARCHAR,
	email VARCHAR,
	item VARCHAR,
	"quantity" INTEGER,
	"totalPrice" DECIMAL
);

CREATE EXTENSION IF NOT EXISTS tablefunc;

INSERT INTO "Users" VALUES 
 ( 1, 'firstname1' , 'lastname1' , 'mail.com1', 'barang1', 1, 50000),
 ( 2, 'firstname2' , 'lastname2' ,'mail.com2','barang2', 2, 100000),
 ( 3, 'firstname3' , 'lastname3','mail.com3','barang2', 4, 200000),
 ( 4, 'firstname4' , 'lastname4' ,'mail.com4','barang3', 1 , 50000),
 ( 5, 'firstname5' , 'lastname5' ,'mail.com5','barang4', 3, 150000),
 ( 6, 'firstname6' , 'lastname6' ,'mail.com6','barang2', 3, 150000),
 ( 7, 'firstname7' , 'lastname7' ,'mail.com7','barang5', 3, 150000),
 ( 8, 'firstname8' , 'lastname8' ,'mail.com8','barang2', 5, 250000),
 ( 9, 'firstname9' , 'lastname9' ,'mail.com9','barang5', 8, 400000),
 ( 10, 'firstname10' , 'lastname10' ,'mail.com10','barang1', 1, 50000);


SELECT * FROM   crosstab(
       'SELECT concat("firstName","lastName") as fullname, item, quantity
        FROM   "Users"
        ORDER  BY 1, 2',

       $$VALUES ('barang1'::text), ('barang2'::text), ('barang3'::text), ('barang4'::text), ('barang5'::text), ('barang6'::text)$$
       )
AS final_result (fullname text, barang1 integer, barang2 integer, barang3 integer, barang4 integer, barang5 integer, barang6 integer);