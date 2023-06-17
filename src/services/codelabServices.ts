import { autorModel } from '../models/autorModel';


export const codelabServices = {
  getAllAutores: () => {
    return autorModel.getAll();
  },
  // Otros métodos del servicio...

  createAutor: ()=>{
    autorModel.create( { id: 1, nombre: 'Autor 1' })
  },

  verificarCodelab: ()=>{
    

  },

  guardarCodelab: ()=>{
            
  }

};
