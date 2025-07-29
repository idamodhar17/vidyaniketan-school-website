import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const staticDir = path.join(__dirname, 'dist');

app.use((req, res, next) => {
  const filePath = path.join(staticDir, req.path);
  
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      express.static(staticDir)(req, res, next);
    } else {
      res.sendFile(path.join(staticDir, 'index.html'));
    }
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from: ${staticDir}`);
});