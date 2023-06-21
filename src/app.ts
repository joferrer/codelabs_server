import express from 'express';
import autoresRoutes from './routes/autoresRoutes';
import codelabsRoutes from './routes/codelabsRoutes'
import calificacionRoutes from './routes/calificacionesRoutes'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/autores', autoresRoutes);
app.use('/codelabs', codelabsRoutes)
app.use('/calificaciones',calificacionRoutes)
//app.use('/libros', librosRoutes);
//app.use('/sucursal', sucursalRoutes);

export default app;
