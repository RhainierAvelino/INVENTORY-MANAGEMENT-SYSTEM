const mongoose = require('mongoose');
const Item = require('../../models/item');

//connection for database
mongoose.connect('mongodb://127.0.0.1:27017/inventory')
.then(() => {
    console.log("Connection Open");
})
.catch (err =>{
    console.log("Error");
    console.log(err);
})


//list of all Items
//reference what route na mahihit
// Get all items
exports.items = async(req, res) => {
    //render ejs file
    const items = await Item.find({});
    res.render('index', {items});
}


//add Item form
//fetch form
// Show form to add new item
exports.addItemForm = (req, res) => {
    res.render('new-item');
}

// Create a new item
exports.addItem = async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.redirect('/items?success=Item added successfully!');
}

// View a specific item
exports.viewItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('show-item', { item });
}

// Edit item form
exports.editItemForm = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('edit-item', { item });
}

// Update item
exports.updateItem = async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/items?success=Item updated successfully!');
}

// Delete an item
exports.deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items?success=Item deleted successfully!');
}





