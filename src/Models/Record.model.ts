import { Schema, Document , Model, model} from "mongoose"
export interface RecordModelInterface extends Document {
  level: Number
  user: String
  userId: String
}
const RecordSchema: Schema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: false,
    default: "anonimous"
  },
  userId: {
    required: false,
    type: String
  }
})

export const RecordModel: Model<RecordModelInterface> = model<RecordModelInterface>('Record', RecordSchema)