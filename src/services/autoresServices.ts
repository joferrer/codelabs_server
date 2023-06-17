import { autorModel } from '../models/autorModel';

export const autoresService = {
  getAllAutores: () => {
    return autorModel.getAll();
  },
  // Otros métodos del servicio...

  createAutor: ()=>{
    autorModel.create( { id: 1, nombre: 'Autor 1' })
  }
};
