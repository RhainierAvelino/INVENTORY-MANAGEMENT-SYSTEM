//if you want to have test data
//put data sa database

const mongoose = require('mongoose');
const Item = require('../models/item'); // Ensure correct import

//connection for database
mongoose.connect('mongodb://127.0.0.1:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection Open");
})
.catch(err => {
    console.log("Error");
    console.log(err);
});

//modern js keyword
//define function as synchronous
//await - pinopause the execution of the function until rejection
//makes the code synch but asynch

// Seed data array
const seedData = [
    {
        name: "Laptop",
        category: "Electronics",
        quantity: 10,
        price: 58058,
        description: "A high-end laptop."
    },
    {
        name: "Smartphone",
        category: "Electronics",
        quantity: 20,
        price: 29290,
        description: "Latest model smartphone."
    },
    {
        name: "Office Chair",
        category: "Furniture",
        quantity: 15,
        price: 8700,
        description: "Ergonomic office chair."
    },
    {
        name: "Desk Lamp",
        category: "Furniture",
        quantity: 25,
        price: 1740,
        description: "Adjustable desk lamp with LED light."
    }
];

// Function para ma seed yung database
const seedDb = async () => {
    try {
        // Clear
        await Item.deleteMany({});
        console.log("Existing data cleared.");

        // Insert 
        await Item.insertMany(seedData);
        console.log("Database seeded with test data.");
    } catch (err) {
        console.error("Error seeding the database:", err);
    } finally {
        // Close database connection
        mongoose.connection.close();
        console.log("Database connection closed.");
    }
};

// pang run sa seeder
seedDb();
