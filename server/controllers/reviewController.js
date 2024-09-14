const express = require("express");
const REVIEW = require("../model/review");

// Controller function to handle the submission of a review
async function submitReview(req, res) {
  const { name, email, message, product, rating } = req.body;

  // Validate the input data
  if (!name || !email || !message || !product || rating == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate the product
  if (!['basic', 'premium'].includes(product)) {
    return res.status(400).json({ message: 'Invalid product type' });
  }

  // Validate the rating
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  try {
    // Check if a review from this user already exists
    const existingReview = await REVIEW.findOne({ email: email });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already submitted a review' });
    }

    // Create a new review document
    const newReview = new REVIEW({ name, email, message, product, rating });

    // Save the review to the database
    await newReview.save();

    // Send a success response
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = {
  submitReview,
}
