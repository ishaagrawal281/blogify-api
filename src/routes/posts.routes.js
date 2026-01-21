
const express = require('express');
const router = express.Router();

// We will define our routes here...
// This route now corresponds to GET /api/v1/posts/
router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

// Let's add another route for creating a post
// This will correspond to POST /api/v1/posts/
router.post('/', (req, res) => {
  res.send('Creating a new blog post...');
});

module.exports = router;

// GET /api/v1/posts
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All posts fetched successfully'
  });
});

