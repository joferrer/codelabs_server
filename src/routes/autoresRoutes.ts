import express from 'express';
import { getAutores,  } from '../controllers/autoresController';

const router = express.Router();

router.get('/', getAutores);
//router.post('/', crearAutor);
//router.get('/:id', obtenerAutor);
//router.put('/:id', actualizarAutor);
//router.delete('/:id', eliminarAutor);

export default router;
