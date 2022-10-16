import { Schema, Document , Model, model} from "mongoose"
export interface UserModelInterface extends Document {
  email: String;
  name: String;
}
const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  }
})

export const UserModel: Model<UserModelInterface> = model<UserModelInterface>('User', UserSchema)