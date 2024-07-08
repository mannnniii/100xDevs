const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/full_todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
}

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { connectDB, Todo };
