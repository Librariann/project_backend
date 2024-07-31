import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
//main get route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

export default app;
