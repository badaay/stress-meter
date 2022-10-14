import mongoose, { Schema, Document } from "mongoose"
export interface IUser extends Document {
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
export default mongoose.model < IUser > ("User", UserSchema)