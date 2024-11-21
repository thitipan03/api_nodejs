const { where } = require('sequelize');
const db = require('../models');
const Product = db.Product;

exports.productAll = async (req,res) => {
    try {
        const NewList = await Product.findAll({});
        if (NewList.length === 0) {
            return res.status(400).json({ message: 'A news not found' });
        }
        res.json(NewList);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Failed'
      });
    }
}

exports.createproduct = async (req, res) => {
    const { name, price} = req.body;
    try {

        if (!name || !price) { // check required fields must have in body 
            return res.status(401).json({
                message: 'Missing required fields'
            });
        }
        console.log(name, price)
        const newData = await Product.create({ // create a new 
            name,
            price
        });
        res.status(201).json(newData);
    } catch (err) {
        console.log("Error:", err); 
        res.status(500).json({
              message: 'server failed'
        });
    }
};

