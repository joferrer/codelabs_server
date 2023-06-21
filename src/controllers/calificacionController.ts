import { Request, Response } from "express";
import { ResponseS } from "../helpers/Class";
import {
  Calificacion,
  CalificacionModel,
  ICalificacion,
} from "../models/calificacionModels";
import { CodelabModel, ICodelab } from "../models/codelabModel";


export const getCalificaciones = async(req: Request, res: Response) => {
    try {
        const calificaciones = await CalificacionModel.find();
        return res.status(200).json(new ResponseS(true,"",calificaciones))
      } catch (error) {
        // Manejo de errores
        return res.status(400).json(new ResponseS(false,`Ha ocurrido un error: ${error}`))
      }
};
/**
 * 1. Extraer la idusuario, idCodelab, calificacion de la petición
 * 2. Buscar la calificación del codelab en la colección de calificaciones y si no existe crearla. 
 * 3. Actualizar la calificacón del codelab el la colección de codelabs.
 * 4. Enviar respuesta. 
 * @param req 
 * @param res 
 * @returns 
 */
export const postCalificacion = async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const idcodelabBusqueda = req.body.id ;
    const idUsuario: string = req.body.idusuario ;
    const pcalificacion = req.body.calificacion;
    console.log(idcodelabBusqueda,idUsuario,pcalificacion)
    if(!idcodelabBusqueda && !idUsuario && !pcalificacion){
        
        return res.status(400)
            .json(new ResponseS(false,"No ingresó todos los campos correctamente"))
    } 

    const codelab = await CodelabModel.findById(idcodelabBusqueda);
    console.log(codelab)
    if (codelab === null){
        return res.status(400)
            .json(
              new ResponseS(false, "No se encontró ningún codelab con esa id.")
            );
    }

    const codelabCalificacion = await CalificacionModel.findOne({ idcodelab: idcodelabBusqueda })
    const codelabCalificaciones = codelabCalificacion?.calificaciones || []
    
    if(codelabCalificacion === null){
        await createCalificacion(idcodelabBusqueda)
    }
    
    const nuevaCalificacion: Calificacion = new Calificacion({idUsuario,calificacion: pcalificacion})  
    const calificacionesActualizadas = [...codelabCalificaciones, nuevaCalificacion ]
    console.log("a",calificacionesActualizadas)
    await CalificacionModel.updateOne({idcodelab: idcodelabBusqueda},{calificaciones: calificacionesActualizadas})
    const nuevaCalificacionPromedio = (nuevaCalificacion.calificacion + codelab.calificacion) / calificacionesActualizadas.length
    console.log("p",nuevaCalificacionPromedio)
    await CodelabModel.updateOne({_id:idcodelabBusqueda},{calificacion:nuevaCalificacionPromedio})
    
    return res.status(200).json(new ResponseS(true, "Se califico el codelab correctamente."))
  } catch (error) {
    return res
      .status(400)
      .json(new ResponseS(false, `Ha ocurrido un error. ${error}`));
  }

};


const createCalificacion = async(idcodelabBusqueda:string)=>{
    const nuevaCalificacion: ICalificacion = {
        idcodelab: idcodelabBusqueda,
        calificaciones: []
    }
    await CalificacionModel.create(nuevaCalificacion)
}

const updateCalificacion = ()=>{

}