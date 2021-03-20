// Interfaces
import { IUser, ICreateUserInput, IModels, ILoginInput, IAuthPayload } from '../../interfaces'

import { doLogin } from '../../lib/auth'

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
    ): IUser => models.User.create({ ...input }),
    login: (
      _: object,
      { input }: { input: ILoginInput },
      { models }: { models: IModels }
    ): Promise<IAuthPayload> => doLogin(input.email, input.password, models)
  }
}