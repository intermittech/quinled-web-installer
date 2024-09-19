const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Define the directory containing your static files
const staticFilesDirectory = path.join(__dirname, 'src');

// Serve static files from the defined directory
app.use(express.static(staticFilesDirectory));

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
