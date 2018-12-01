let model = require('../models')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgresfdn@localhost:5432/fdn');

module.exports = {
    getUsers:(req,res,next)=>{
        model.User.findAll({})
        .then(user=>{
            res.status(200).send(user)
        })
        .catch(err=>{
            console.log(err)
        })
    },

    addNewUser:(req,res,next)=>{
        model.User.create(req.body)
        .then(user=>{
            res.status(200).send(user)
        })
        .catch(err=>{
            console.log(err)
        })
    },

    removeUser:(req,res,next)=>{
        model.User.destroy({
            where:{
                id: req.body.id
            }
        })
        .then(userdestroyed=>{
            res.sendStatus(200).send(userdestroyed)
        })
        .catch(err=>{
            res.sendStatus(400).send(err)
        })
    },

    pivotTable:(req,res,next)=>{
        sequelize.query(`SELECT * FROM crosstab('SELECT concat("firstName","lastName") as fullname, item, quantity FROM "Users" ORDER  BY 1, 2', $$VALUES ('barang1'::text), ('barang2'::text), ('barang3'::text), ('barang4'::text), ('barang5'::text), ('barang6'::text)$$) AS final_result (fullname text, barang1 integer, barang2 integer, barang3 integer, barang4 integer, barang5 integer, barang6 integer);`)
        .then(queryresult=>{
            res.status(200).send(queryresult)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    },
    dynamicPivot:(req,res,next)=>{
        sequelize.query(`select
        "firstName",
        json_object_agg(item, quantity order by item) as pivotusers
        from "Users"
        right join
            (
                (select distinct "firstName" from "Users") a
                cross join
                (select distinct item from "Users") b
            ) c using ("firstName", item)
        group by "firstName"
        order by "firstName"
    ;`)
    .then(queryresult=>{
        res.status(200).send(queryresult)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
    }

}