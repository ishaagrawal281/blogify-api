
// const express = require('express');
// const router = express.Router();

// // We will define our routes here...
// // This route now corresponds to GET /api/v1/posts/
// router.get('/', (req, res) => {
//   res.send('Fetching all blog posts from the modular router!');
// });

// // Let's add another route for creating a post
// // This will correspond to POST /api/v1/posts/
// router.post('/', (req, res) => {
//   res.send('Creating a new blog post...');
// });



// // GET /api/v1/posts
// router.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: 'All posts fetched successfully'
//   });
// });

// // 1. Import the controller
// const postController = require('../controllers/posts.controller.js');

// // 2. Use the controller function as the route handler
// // The router's job is now just to connect the path '/' to the 'getAllPosts' function.
// router.get('/', postController.getAllPosts);

// // We can remove the old inline function entirely!
// // router.get('/', (req, res) => { ... }); // This is now gone

// module.exports = router;

const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// GET all posts
router.get('/', postsController.getAllPosts);

// GET single post by ID (DYNAMIC ROUTE)
router.get('/:postId', postsController.getPostById);

module.exports = router;

// src/routes/users.routes.js

// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/users.controller.js');

// // Connect the route to the controller.
// router.get('/:userId', userController.getSingleUser);

// module.exports = router;