import app from './app';
import './db';
require('dotenv').config();

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
