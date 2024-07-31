import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
//main get route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/test/1', (req, res) => {
  res.send('router test');
});

export default app;
