const { where } = require('sequelize');
const db = require('../models');  // Assuming this is the correct path
const Category = db.Category;
const New = db.New;

// get list of a news
exports.readlist = async (req,res) => {
    try {
        const NewList = await New.findAll({});
        res.json(NewList);
        if (!NewList) {
            return res.status(400).json({ message: 'News dont found' });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Failed'
      });
    }
}

// get a new by id 
exports.getnewByID = async (req,res) => {
    try {
        const id = req.params.id
        const NewData = await New.findOne({ // find a new id 
            where: {
                id:id
            }
        });
        if (!NewData) {
            return res.status(400).json({ message: 'ID not found' });
        }
        res.json(NewData);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server failed'
      });
    }
}

// create a new 
exports.createnew = async (req, res) => {
    const { title, description, post_by, count_view, img, category_id } = req.body;
    try {
        const category = await Category.findByPk(category_id);
        if (!category) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }
        if (!title || !description || !post_by) { // check required fields must have in body 
            return res.status(401).json({
                message: 'Missing required fields'
            });
        }
        console.log(title,description,post_by)

        const newData = await New.create({ // create a new 
            title,
            description,
            post_by,
            count_view,
            img,
            category_id
        });
        res.status(201).json(newData);
    } catch (err) {
        console.log("Error:", err); 
        res.status(500).json({
              message: 'server failed'
        });
    }
};

// udpate a new by params id 
exports.updatenew = async (req,res) => {
    const updateData = req.body;
    try {
        const newData = await New.findOne({where: {id: req.params.id} });
        if (!newData) {
            return res.status(404).json({ message: 'A new ID not found.' });
        }
        await newData.update(updateData);
        res.json(newData);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Failed to update a new'
      });
    }
}

// delete a new with params id 
exports.deletenew = async (req,res) => {
    try {
        const deletedNews = await New.destroy({ where: { id: req.params.id } });
        if (!deletedNews) {
            return res.status(404).json({message:"A new ID not found."})
        }
        res.json({ message: 'A new deleted successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to delete new')
    }
}

// create a category 
exports.createcategory = async (req, res) => {
    const { category } = req.body; 
    try {
        if (!category) {
            return res.status(400).json({ message: 'Missing category fields' });
        }
        const categoryData = await Category.create({category}); // create a category 
        res.status(201).json(categoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'server failed'
      });
    }
};


// exports.readcategory = async (req, res) => {
//     try {
//         const categoryList = await Category.findAll({});
//         res.json(categoryList);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: 'server failed'
//       });
//     }
// };