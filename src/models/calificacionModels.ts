import mongoose, { Schema } from 'mongoose';

export class Calificacion{
    idUsuario: string
    calificacion: number
    constructor({idUsuario,calificacion=0}:{ idUsuario: string; calificacion?: number }){
        this.idUsuario = idUsuario
        this.calificacion = calificacion
    }
}

// Definición del esquema y el modelo
export interface ICalificacion {
  idcodelab: string;
  calificaciones: Calificacion[];
 

}

const CalificacionSchema = new Schema<ICalificacion>({
  idcodelab: { type: String, required: true },
  calificaciones: { type: [], required: true },

 
});

export const CalificacionModel = mongoose.model<ICalificacion>('Calificacion', CalificacionSchema);