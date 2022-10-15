import { UserModel, UserModelInterface } from '../Models/User.model'
interface ICreateUserInput {
    email: UserModelInterface['email'];
    name: UserModelInterface['name'];
}
async function CreateUser({
    email,
    name
}: ICreateUserInput): Promise<UserModelInterface> {

  const user = new UserModel({email, name})
  await user.save()

  return user
}
async function ListUser() {
  return UserModel.find()
}

export default {
  CreateUser, ListUser
};