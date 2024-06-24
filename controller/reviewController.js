const express = require("express");
// controllers/queryController.js
const REVIEW = require("../models/review")

// Controller function to handle the submission of a review
async function submitReview (req, res){
  const { name, email, message } = req.body;

  // Validate the input data
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new review document
    const newReview = new REVIEW({ name, email, message });

    // Save the review to the database
    await newReview.save();

    // Send a success response
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    // Handle any errors 
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports={
    submitReview,
}