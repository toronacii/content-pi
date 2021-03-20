// Types
import { App, User } from './types'

// Sequelize
// export interface IDataTypes {
//   UUID: string
//   UUIDV4(): string
//   STRING: string
//   BOOLEAN: boolean
//   TEXT: string
//   INTEGER: number
//   DATE: string
//   FLOAT: number
// }

export interface IApp extends App {
  id: string
  createdAt: Date
  updatedAt: Date
}

// User
export interface IUser extends User {
  id: string
  token: string
  createdAt: Date
  updatedAt: Date
}

// Models
export interface IModels {
  App: any
  User: any
  sequelize: any
}

export interface ICreateAppInput extends App { }
export interface ICreateUserInput extends User { }

export interface ILoginInput {
  email: string
  password: string
}

export interface IAuthPayload {
  token: string
}