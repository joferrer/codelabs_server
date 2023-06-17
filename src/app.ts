import express from 'express';
import autoresRoutes from './routes/autoresRoutes';
import codelabsRoutes from './routes/codelabsRoutes'
import cors from 'cors';


//import librosRoutes from './routes/librosRoutes';
//import sucursalRoutes from './routes/sucursalRoutes';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/autores', autoresRoutes);
app.use('/codelabs', codelabsRoutes)
//app.use('/libros', librosRoutes);
//app.use('/sucursal', sucursalRoutes);

export default app;
