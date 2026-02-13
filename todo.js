require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();
app.use(express.json());

async function dbConnect() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
dbConnect();
  // creat Port
const port = process.env.PORT || 3000;
// POST
app.post("/tasks", async (req, res) => {
  try {
    const {title, isCompleted} = req.body;
    if (!title || isCompleted === undefined) {
      return res
        .status(400)
        .json({ message: "Error: Missed Data. All fields are required" });
    }

    const task = await Task.create({ title, isCompleted });
    console.log("Received user data:", task);

    res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (err) {
    // Catch only handling errors related to server issues, 500 status code
    console.log(err);
  }
});
// GET
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json({ success: true, count: tasks.length, data: tasks });
});

// Run the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});