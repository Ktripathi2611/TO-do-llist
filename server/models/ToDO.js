const mongoose = require("mongoose");

// Define ToDO schema with optional fields and validation
const ToDOSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
    minlength: 3 // Optional: minimum length for title
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false // Optional: default to-do state as not completed
  },
  due_date: {
    type: Date // Optional: field for due date
  }
});

// Add validation rules (optional)
// ToDOSchema.pre('save', function(next) {
//   // Custom validation logic here
//   next();
// });

// Create ToDO model
const ToDo = mongoose.model("ToDo", ToDOSchema);

module.exports = ToDo;
