// Interfaces
import { IUser, ICreateUserInput, IModels } from '../../interfaces'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: IModels }
    ): IUser[] => models.User.findAll()
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: ICreateUserInput },
      { models }: { models: IModels }
    ): IUser => models.User.create({ ...input })
  }
}