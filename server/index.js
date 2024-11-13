const express = require('express');
const app = express();
const PORT = 80;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
