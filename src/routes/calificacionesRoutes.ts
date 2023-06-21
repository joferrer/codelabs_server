import express from "express";
import { getCalificaciones, postCalificacion } from "../controllers/calificacionController";

const router = express.Router();

router.get("/",getCalificaciones)
router.post("/calificar", postCalificacion)

export default router;