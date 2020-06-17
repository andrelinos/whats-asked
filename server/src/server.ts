import path from 'path';
import express from 'express';

import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('🚀 Server 🛰 started on port 3333! 🐁 🤣');
});
