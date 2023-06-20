import mongoose, { Schema } from 'mongoose';

export class Calificiacion{
    idUsuario: string
    calificacion: number
    constructor({pIdUsuario="0",calificacion=0}){
        this.idUsuario = pIdUsuario
        this.calificacion = calificacion
    }
}

// Definición del esquema y el modelo
export interface ICalificacion {
  idcodelab: string;
  calificiaciones: Calificiacion[];

}

const CalificacionSchema = new Schema<ICalificacion>({
  idcodelab: { type: String, required: true },
  calificiaciones: { type: [Calificiacion], required: true },

 
});

export const CalificacionModel = mongoose.model<ICalificacion>('Calificacion', CalificacionSchema);
