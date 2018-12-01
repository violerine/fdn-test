CREATE TABLE "Users" (
	id SERIAL PRIMARY KEY,
	"firstName" VARCHAR,
	"lastName" VARCHAR,
	email VARCHAR,
	item VARCHAR,
	"quantity" INTEGER,
	"totalPrice" DECIMAL
);


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


SELECT
    "firstName",
    json_object_agg(item, quantity order by item) as pivotusers
FROM
    "Users"
    right join
    (
        (select distinct "firstName" from "Users") a
        cross join
        (select distinct item from "Users") b
    ) c using ("firstName", item)
group by "firstName"
order by "firstName"
;