const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

// Import routes and controller
const items = require('./server/routes/items');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middleware para ma parse yung request
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Execute
app.use('/items', items);





app.listen(3000, (req, res) => {
    console.log("Serving on port 3000.")
})
