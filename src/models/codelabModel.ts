import mongoose, { Schema, Document } from 'mongoose';

// Definición del esquema y el modelo
interface ICodelab extends Document {
  titulo: string;
  autor: string;
}

const CodelabSchema = new Schema<ICodelab>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
});

export const CodelabModel = mongoose.model<ICodelab>('Codelab', CodelabSchema);
