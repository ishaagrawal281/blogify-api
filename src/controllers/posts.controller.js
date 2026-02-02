
// // // This function will be our handler for "GET /api/v1/posts"
// const getAllPosts = (req, res) => {
//   // For now, the "business logic" is simple.
//   // In the future, this is where we would call a service to get data from a database.
//   // const posts = [
//   //   { id: 1, title: 'Controller Post 1' },
//   //   { id: 2, title: 'Controller Post 2' }
//   // ];

//   // The controller's job is to send the final response.
//   res.status(200).json({
//     message: 'Posts fetched successfully',
//     data: posts
//   });
// };

// // // We export the function in an object so we can easily add more functions later.
// // module.exports = {
// //   getAllPosts,
// // };


// const getPostById = (req, res) => {
//   const postId = req.params.postId;

//   res.status(200).json({
//     message: `You requested post with ID: ${postId}`
//   });
// };

// module.exports = {
//   getAllPosts,
//   getPostById
// };


// // const getSingleUser = (req, res) => {
// //   // Express puts all URL parameters into the `req.params` object.
// //   // The property name matches the parameter name from our route definition.
// //   const requestedUserId = req.params.userId;

// //   // Now we have the ID! We can use it to fetch the user from a database.
// //   // For now, let's just send it back to confirm we got it.
// //   res.status(200).json({
// //     message: `You requested data for User ID: ${requestedUserId}`
// //   });
// // };

// // module.exports = {
// //   getSingleUser,
// // };

// src/controllers/posts.controller.js

const posts = require("../data/posts"); // assuming posts data is imported

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

// GET /api/v1/posts/:id
const getPostById = (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === id);

  res.status(200).json({
    success: true,
    data: post
  });
};

module.exports = {
  getAllPosts,
  getPostById
};
