const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Speech-to-Text Backend Running Successfully",
  });
});

// PORT
const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});