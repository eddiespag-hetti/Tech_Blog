const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Comment Routes

// Route to retrieve existing comments
router.get('/api/comments', async (req, res) => {
    try {
      // Retrieve comments from the database
      const comments = await Comment.find();
  
      // Send the comments as a JSON response
      res.json(comments);
    } catch (error) {
      // Handle any errors
      console.error('Error retrieving comments:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to add a new comment
  router.post('/api/comments', async (req, res) => {
    try {
      // Extract the comment data from the request body
      const { comment } = req.body;
  
      // Create a new comment instance
      const newComment = new Comment({ text: comment });
  
      // Save the new comment to the database
      await newComment.save();
  
      // Send a success response
      res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
      // Handle any errors
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  module.exports = router;