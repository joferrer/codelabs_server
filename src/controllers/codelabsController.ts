import { Request, Response } from "express"
import { extractZip, veirifyCodelabs } from "../helpers/CodelabsFileHelper";
import { ResponseS } from "../helpers/Class";
import { CodelabModel, ICodelab } from "../models/codelabModel";

export const getConexion = (req: Request, res: Response) => {
    res.status(200).send("Bienvenido !")
}

export const getCodelabById = (req: Request, res: Response) => {
    const pt = req.body
    console.log(pt)
    res.json(pt)

}

export const getAllCodelabsInfo = async(req: Request, res: Response)=>{
    try {
        const codelabs = await CodelabModel.find();
        return res.status(200).json(new ResponseS(true,"",codelabs))
      } catch (error) {
        // Manejo de errores
        return res.status(400).json(new ResponseS(false,`Ha ocurrido un error: ${error}`))
      }
}

export const saveCodelab = async (req: Request, res: Response) => {

    const archivo: string = req.file?.path || ""
    console.log("LLega: ", archivo)
    const zipFilePath = await extractZip(archivo)

    if (zipFilePath === "") return res.status(400).json(
        new ResponseS(false, "No se encontró ningún archivo."))
    const result: ResponseS[] = await veirifyCodelabs()

    if (result.length == 1) {
        console.log(result)
        const contenido = result[0].data
        try {
            const nuevoCodelab: ICodelab = {
                titulo: contenido.title,
                descripcion: contenido.descrip,
                autor: contenido.author,
                contenido: contenido.content,
                tags: contenido.tags,
                filename: contenido.filename,
              };
              console.log("khe es esto: ",nuevoCodelab)
            const codelabCreado = await CodelabModel.create(nuevoCodelab);
            return res.status(200).json(
                new ResponseS(
                    true,
                    "Todos los codelabs fueron cargados con exito.",
                    result)
            )
        } catch (error) {
            console.log(error)
            return res.status(400).json(
                new ResponseS(
                    false,
                    `No se pudo guardar en la db ${error}`,
                    result)
            )
        }

      
    }
    console.log(result)
    return res.status(400).json(new ResponseS(false, "Se encontraron errores en algunos archivos.", result))
}