// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Array to store scan codes (for demonstration purposes)
let scanCodes = [];

// Define a route for the GET request
app.get("/scan-codes", (req, res) => {
  // Return all scan codes
  res.json(scanCodes);
});

// Define a route for the POST request
app.post("/data", (req, res) => {
  // Extract data from the request body
  const { qrCode, id, scanTime, type } = req.body;

  // Store the received data (scan code) in the array
  scanCodes.push({ qrCode, id, scanTime, type });

  // Send a response
  res.send("Data received successfully!");
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the port provided by the environment or default to 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
