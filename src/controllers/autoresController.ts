import { Request, Response } from 'express';
import { autoresService } from '../services/autoresServices';

export const getAutores = (req: Request, res: Response) => {
  console.log("get autores")
  const autores = autoresService.getAllAutores();
  res.json(autores);
};

// Otros métodos del controlador...
export const createAutor = (req:Request, res: Response)=> {
    autoresService.createAutor()
}