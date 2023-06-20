import mongoose, { Schema, Document } from 'mongoose';

// Definición del esquema y el modelo
export interface ICodelab {
  titulo: string;
  descripcion: string;
  autor: string;
  contenido: string[];
  tags: string[];
  filename: string;
  calificacion: number;

}

const CodelabSchema = new Schema<ICodelab>({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  autor: { type: String, required: true },
  contenido: { type: [String], required: true },
  tags: { type: [String], required: true },
  filename: { type: String, required: true },
  calificacion: { type: Number, required: true },
});

export const CodelabModel = mongoose.model<ICodelab>('Codelab', CodelabSchema);
