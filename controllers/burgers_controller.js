const express = require('express');
const router = express.Router();
const burger = require('../models/burgers.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const handlebarsObject = {
            burgers: data,
        };
        res.render('index', handlebarsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const current_id = req.params.id
    console.log(current_id)
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        {
            id: current_id
        },
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;