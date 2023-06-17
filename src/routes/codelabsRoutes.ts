import express from "express";
import { getCodelabById, getConexion, saveCodelab } from "../controllers/codelabsController";
import multer from 'multer'
const router = express.Router();

// Configurar la ubicación de almacenamiento de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'temp/'); // Carpeta temporal para guardar el archivo ZIP
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  // Configurar multer con la ubicación de almacenamiento
  const upload = multer({ storage: storage });

router.post("/publicar", upload.single("file"),saveCodelab);
router.get("/",getConexion)
export default router;

// import express from 'express';
// import { getAutores,  } from '../controllers/autoresController';

// const router = express.Router();

// router.get('/', getAutores);
// //router.post('/', crearAutor);
// //router.get('/:id', obtenerAutor);
// //router.put('/:id', actualizarAutor);
// //router.delete('/:id', eliminarAutor);

// export default router;