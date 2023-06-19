import {Request, Response} from "express"
import { extractMarkdownFromZip, extractZip, veirifyCodelabs } from "../helpers/CodelabsFileHelper";
import { ResponseS } from "../helpers/Class";

export const getConexion = (req: Request, res: Response)=>{
    res.status(200).send("Bienvenido !")
}

export const getCodelabById = (req: Request, res: Response)=>{
    const pt = req.body
    console.log(pt)
    res.json(pt)

}

export const saveCodelab = async(req: Request ,res: Response)=>{

    const archivo :string = req.file?.path || ""
    console.log("LLega: ", archivo)
    const zipFilePath =  await extractZip(archivo)

    if(zipFilePath === "") return res.status(400).json(
        new ResponseS(false,"No se encontró ningún archivo."))
    console.log(zipFilePath)
    const result: ResponseS[] = await veirifyCodelabs()

    if(result.length == 0) {
        return res.status(200).json(
            new ResponseS(
                true, 
                "Todos los codelabs fueron cargados con exito.")
        )
    }
    console.log(result)
    return res.status(400).json(new ResponseS(false, JSON.stringify(result)))
        

/** 
    

    if(!result.status) return res.status(400).json(JSON.parse(result.message)) 

    return res.status(200).json(JSON.stringify(
        new ResponseS(true, "Se cargó el codelab exitosamente.")))

*/
}