import ViteExpress from 'vite-express';
import express from 'express';

const app = express();

// your API routes
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from API' });
});

// use vite-express to start both servers
ViteExpress.listen(app, 8080, () => {
  console.log('Server running at http://localhost:8080');
});