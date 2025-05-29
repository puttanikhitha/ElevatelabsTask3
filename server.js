const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Book routes
app.use('/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
