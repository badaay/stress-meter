import { RecordModel, RecordModelInterface } from '../Models/Record.model'
interface ICreateRecordInput {
    level: RecordModelInterface['level'];
    user: RecordModelInterface['user'];
    userId: RecordModelInterface['userId'];
}

const Records = {

  async Create({
      level,
      user,
      userId,
  }: ICreateRecordInput): Promise<RecordModelInterface> {

    const record = new RecordModel({level, user, userId})
    await record.save()

    return record
  },

  index() {
    return RecordModel.find()
  }
}
export default Records;