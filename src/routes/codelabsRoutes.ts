import express from "express";
import { getAllCodelabsInfo, getCodelabByName, getConexion, saveCodelab } from "../controllers/codelabsController";
import multer from 'multer'
import fs from "fs";

const router = express.Router();

if(!fs.existsSync("codelabs/")) fs.mkdirSync("codelabs/")
if(!fs.existsSync("temp/")) fs.mkdirSync("temp/")


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
router.get("/all",getAllCodelabsInfo)
router.get("/",getConexion)
router.get("/buscar/:name",getCodelabByName)
export default router;