const express = require('express');      // Importing Express
const bodyParser = require('body-parser'); // For handling JSON data
const apiController = require('./controllers/apiController'); // Importing the controller we made

const app = express(); // Creating the Express app

// Middleware to parse JSON request bodies
app.use(bodyParser.json({ limit: '10mb' }));

// Setting up routes
app.post('/bfhl', apiController.handlePostRequest); // For POST requests to /bfhl
app.get('/bfhl', apiController.handleGetRequest);   // For GET requests to /bfhl

// Start the server
const PORT = process.env.PORT || 3000;  // Setting the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Console message when the server starts
});
