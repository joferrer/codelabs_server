import app from './app';
import mongoose from './db';
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
