const express = require('express');
const jsonServer = require('json-server');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a json-server instance
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use middlewares and router
server.use(middlewares);
server.use(router);

// Create a route to handle POST requests for reviews
app.post('/reviews', (req, res) => {
  const review = req.body;

  // Add the new review to the database
  router.db.get('reviews').push(review).write();

  // Respond with the added review
  res.json(review);
});

// Mount json-server on the root path
app.use('/', server);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
