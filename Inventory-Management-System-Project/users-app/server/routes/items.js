//define yung route gagamitin
const express = require('express');
//Iorganize yung web
const router = express.Router();

//importing then assign sa itemcontroller
const itemsController = require('../controllers/itemsController');

//ano yung icacall niyang function
// Home page (View all items)
router.get('/', itemsController.items);

//show the form to add a new item
router.get('/new', itemsController.addItemForm);

//create new item
router.post('/', itemsController.addItem);

//viewspecific item
router.get('/:id', itemsController.viewItem);

//edit form
router.get('/:id/edit', itemsController.editItemForm);

//update an item
router.put('/:id', itemsController.updateItem);

//delete an item
router.delete('/:id', itemsController.deleteItem);

//para maexport
module.exports = router;