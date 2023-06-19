import fs from "fs";
import unzipper from "unzipper";
import markdownlint from "markdownlint";
import marked from "marked";
import path from "path";
import crypto from "crypto";
import { ResponseS } from "./Class";


export const extractZip = async (zipFilePath: string) => {
  const tempFolderPath = path.join(__dirname, "temp");

  // Crea la carpeta temporal si no existe
  if (!fs.existsSync(tempFolderPath)) {
    fs.mkdirSync(tempFolderPath);
  }

  const directory = await unzipper.Open.file(zipFilePath);
  if (directory.files.length == 0) return "";
  await directory.extract({ path: tempFolderPath });
  console.log("Archivo ZIP extraído correctamente en: ");
};


export const removeTempArchive = (folder: string) => {
  // Ruta de la carpeta
  const carpeta = folder;

  // Leer los archivos de la carpeta
  fs.readdir(carpeta, (err, archivos) => {
    if (err) {
      console.error("Error al leer los archivos de la carpeta:", err);
      return;
    }

    // Iterar sobre los archivos y borrarlos
    archivos.forEach((archivo) => {
      const rutaArchivo = `${carpeta}/${archivo}`;

      // Borrar el archivo
      fs.unlink(rutaArchivo, (err) => {
        if (err) {
          console.error("Error al borrar el archivo:", err);
          return;
        }
        console.log(`Archivo ${rutaArchivo} borrado exitosamente.`);
      });
    });
  });
};



export const veirifyCodelabs = async (): Promise<ResponseS[]> => {
  const codelabsFolderPath = path.join(__dirname, "temp"); // Ruta de la carpeta "temp"
  const responsesList: ResponseS[] = [];
  const files = await fs.promises.readdir(codelabsFolderPath);

  for (const file of files) {
    const filePath = path.join(codelabsFolderPath, file);

    // Ignora subcarpetas y otros tipos de archivos
    const fileStat = await fs.promises.stat(filePath);
    if (
      fileStat.isFile() &&
      !file.includes(".zip") &&
      !file.includes("contenido")
    ) {
      const verifyCodelabFile = await verifyCodelab(filePath);
      if (!verifyCodelabFile.status) {
        responsesList.push(verifyCodelabFile);
      }
    }
  }
  if (responsesList.length === 0) moveFilesToTargetFolder();
  removeTempArchive("temp/");
  removeTempArchive(codelabsFolderPath)
  console.log("AK:" + responsesList.length);
  return responsesList;
};


export const verifyCodelab = (markdownPath: string): ResponseS => {
  const archivoMarkdown = markdownPath;
  console.log(`Analizando el archivo ${archivoMarkdown}`);
  const contenido = fs.readFileSync(archivoMarkdown, "utf8");
  // Configurar las reglas de MarkdownLint
  const options: markdownlint.Options = {
    files: [archivoMarkdown],
    strings: {
      [archivoMarkdown]: contenido,
    },
  };

  // Ejecutar la verificación de MarkdownLint
  const result = markdownlint.sync(options);
  if (result && result[archivoMarkdown].length === 0) {
    return new ResponseS(true, "El archivo Markdown está bien escrito.");
  } else if (result && result[archivoMarkdown].length > 0) {
    console.log(result);
    const message = archivoMarkdown.split("temp\\")[1];

    return new ResponseS(false, message, result[archivoMarkdown]);
  }
  return new ResponseS(
    false,
    "No se pudo obtener el resultado de MarkdownLint."
  );
};


export const convertMarkdownToHtml = (markdownPath: string): string => {
  const markdown = fs.readFileSync(markdownPath, "utf-8");
  const html = marked.marked(markdown);
  return html;
};


const moveFilesToTargetFolder = () => {
  const sourceFolderPath = path.join(__dirname, "temp");
  const targetFolderName = "codelabs/";

  // Generar un nombre de carpeta único utilizando un hash
  const hash = crypto.randomBytes(8).toString("hex");
  const targetFolderNameWithHash = `codelabs_${hash}`;

  // Ruta de la carpeta de destino
  const targetFolderPath = path.join(
    targetFolderName,
    targetFolderNameWithHash
  );

  // Crear la carpeta de destino con el nombre generado
  fs.mkdirSync(targetFolderPath);

  // Obtener la lista de archivos en la carpeta fuente
  const files = fs.readdirSync(sourceFolderPath);

  // Mover los archivos a la carpeta de destino
  files.forEach((file) => {
    if (!file.includes(".zip")) {
      const sourceFilePath = path.join(sourceFolderPath, file);
      const targetFilePath = path.join(targetFolderPath, file);
      fs.renameSync(sourceFilePath, targetFilePath);
    }
  });

  console.log("Archivos movidos exitosamente.");
  console.log(`Carpeta de destino: ${targetFolderPath}`);
};
