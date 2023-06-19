import app from './app';
import mongoose from './db';
require('dotenv').config();

const port = 3000;


mongoose;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
