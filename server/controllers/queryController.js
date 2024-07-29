const express = require("express");
// controllers/queryController.js
const Query = require("../model/query")

// Controller function to handle the submission of a query
async function submitQuery (req, res){
  const { name, email, message } = req.body;

  // Validate the input data
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new query document
    const newQuery = new Query({ name, email, message });

    // Save the query to the database
    await newQuery.save();

    // Send a success response
    res.status(201).json({ message: 'Query submitted successfully' });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports={
    submitQuery,
}