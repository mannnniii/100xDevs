const express = require('express');
const { connectDB, Todo } = require('./db');
const { createTodo, updateTodo } = require('./types');

const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.post('/todo', async (req, res) => {
  const result = createTodo.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: "Invalid input", errors: result.error.errors });
  }

  try {
    await Todo.create({ ...result.data, completed: false });
    res.status(201).json({ message: "Todo created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put('/completed', async (req, res) => {
  const result = updateTodo.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: "Invalid input", errors: result.error.errors });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(result.data.id, { completed: true }, { new: true });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
};

startServer();
