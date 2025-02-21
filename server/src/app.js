const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Default route
app.get("/", (req, res) => {
  res.send("Cosmic Colony Management System API is running...");
});

// Import Routes (to be implemented later)
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
