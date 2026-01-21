// console.log("hello world")

// // 1. Import the Express library
// const express = require('express');

// // 2. Create an instance of an Express application
// const app = express();

// // 3. Define the port (a good practice to use a variable)
// const PORT = 3000;

// // 4. Define the route handler for the root URL
// app.get('/', (req, res) => {
//   // Use the res.send() helper to send the response
//   res.send('Hello Express!');
// });

// // 5. Start the server and have it listen on the defined port
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}/`);
// });
// src/index.js

const express = require('express');
const app = express();
const PORT = 3000;

// 1. Import our new post router
const postRouter = require('./routes/posts.routes.js');

// Main welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// 2. Mount the router
// This tells Express: "For any request that starts with /api/v1/posts,
// hand it over to the postRouter to handle."
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});


const postsRouter = require('./routes/posts.routes');

// Mounting the posts router
app.use('/api/v1/posts', postsRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});