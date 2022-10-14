import User,{ IUser } from '../Models/User.model';
interface ICreateUserInput {
    email: IUser['email'];
    name: IUser['name'];
}
async function CreateUser({
    email,
    name
  }: ICreateUserInput): Promise<IUser> {
    return User.create({
      email,
      name
    })
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  export default {
    CreateUser
  };