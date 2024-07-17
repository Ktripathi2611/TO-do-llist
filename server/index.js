const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ToDo = require("./models/ToDo"); // Assuming model is in models/ToDo.js

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

// Validate and handle potential errors in environment variables
if (!mongoUrl) {
  console.error("Error: Missing MONGO_URL environment variable.");
  process.exit(1); // Exit with an error code
}

// Improved database connection with error handling
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit with an error code if connection fails
  });

// Get all TODO items
app.get("/get", async (req, res) => {
  try {
    const todos = await ToDo.find({});
    if (!todos.length) {
      return res.status(404).send("No TODO items found"); // Handle no data
    }
    res.json(todos);
  } catch (error) {
    console.error("Error getting TODOs:", error);
    res.status(500).send("Error retrieving TODO items"); // Send appropriate error response
  }
});

// Get TODO by ID (optional)
// ... (add route if needed)

// Delete TODO by ID with basic security check (replace with proper authorization)
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ToDo.findByIdAndDelete(id).exec();
    res.send("TODO deleted");
  } catch (error) {
    console.error("Error deleting TODO:", error);
    res.status(500).send("Error deleting TODO item"); // Send appropriate error response
  }
});

//update 
app.put("/update/:id", async (req, res) => {
  const { newTitle, newDescription } = req.body; // Destructure data from request body
  const id = req.params.id; // Get the ID from URL parameters

  try {
    // Find the TODO item to update
    const todo = await ToDo.findByIdAndUpdate(id, {
      title: newTitle, // Update title if provided
      description: newDescription, // Update description if provided
    }, { new: true }); // Return the updated document

    if (!todo) {
      return res.status(404).send("No TODO item found with that ID"); // Handle not found
    }

    res.json(todo); // Send the updated TODO item
  } catch (error) {
    console.error("Error updating TODO:", error);
    res.status(500).send("Error updating TODO item"); // Send appropriate error response
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
