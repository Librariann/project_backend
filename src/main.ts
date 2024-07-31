import dotenv from 'dotenv';
import app from './app';

dotenv.config();

console.log(process.env.PORT);
const hostname = 'localhost';
const PORT = parseInt(process.env.PORT || '6000');

const handleListening = () => {
  console.log(`Listening On http://${hostname}:${PORT}`);
};

app.listen(PORT, handleListening);
