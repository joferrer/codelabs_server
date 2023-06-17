import {Request, Response} from "express"
import unzipper from 'unzipper';
import markdownlint from 'markdownlint';
import fs from 'fs';

class ResponseS {
    status: boolean;
    message: string;
    body: any;
    constructor(pStatus: boolean,pMessage: string, pBody?:any){
        this.status = pStatus
        this.message = pMessage
        if(pBody) this.body = pBody
        else this.body =  pBody || {};
    }
}

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
    const zipFilePath =  await extractMarkdownFromZip(archivo)
    if(zipFilePath === "") return res.status(400).json(
        JSON.stringify(new ResponseS(false,"No se encontró ningún archivo.")))
    
    verifyCodelab(zipFilePath)
    
    return res.status(200).json(JSON.stringify(
        new ResponseS(true, "Se cargó el codelab exitosamente.")))


}

const extractMarkdownFromZip = async(zipFilePath : string): Promise<string>=>{
    if(zipFilePath === "") return "";
    return new Promise((resolve,reject)=>{
        const extractPath = 'temp/';

        fs.createReadStream(zipFilePath)
          .pipe(unzipper.Extract({ path: extractPath }))
          .on('close', () => {
            const files = fs.readdirSync(extractPath);
    
            
              const markdownFilePath = `${extractPath}${files[0]}`;
              resolve(markdownFilePath);
            
          })
          .on('error', reject);
    })
}


const verifyCodelab = (markdownPath: string)=> {
    const archivoMarkdown = markdownPath;
    // Leer el contenido del archivo Markdown
    const contenido = fs.readFileSync(archivoMarkdown, 'utf8');
    // Configurar las reglas de MarkdownLint
    const options: markdownlint.Options = {
      files: [archivoMarkdown],
      strings: {
        [archivoMarkdown]: contenido
      }
    };
    // Ejecutar la verificación de MarkdownLint
    markdownlint(options, function (err, result) {
      if (!err) {
        if (result && result[archivoMarkdown].length === 0) {
            console.log('El archivo Markdown está bien escrito.');
        } 
        else if (result && result[archivoMarkdown].length > 0) {
            console.log('El archivo Markdown contiene errores:');
            console.log(result[archivoMarkdown]);
        } 
        else {
            console.log('No se pudo obtener el resultado de MarkdownLint.');
        }
      } else {
        console.error(err);
      }
        });
}

const removeTempArchive = ()=>{


    // Ruta de la carpeta
    const carpeta = 'temp/';

    // Leer los archivos de la carpeta
    fs.readdir(carpeta, (err, archivos) => {
      if (err) {
        console.error('Error al leer los archivos de la carpeta:', err);
        return;
      }

      // Iterar sobre los archivos y borrarlos
      archivos.forEach(archivo => {
        const rutaArchivo = `${carpeta}/${archivo}`;

        // Borrar el archivo
        fs.unlink(rutaArchivo, err => {
          if (err) {
            console.error('Error al borrar el archivo:', err);
            return;
          }

          console.log(`Archivo ${rutaArchivo} borrado exitosamente.`);
        });
      });
});

}

// import { Request, Response } from 'express';
// import { autoresService } from '../services/autoresServices';

// export const getAutores = (req: Request, res: Response) => {
//   const autores = autoresService.getAllAutores();
//   res.json(autores);
// };

// // Otros métodos del controlador...
// export const createAutor = (req:Request, res: Response)=> {
//     autoresService.createAutor()
// }