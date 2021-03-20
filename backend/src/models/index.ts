// Dependencies
import { DataTypes, Sequelize } from 'sequelize'

// Utils
import { hasKey } from 'fogg-utils'

// Configuration
import { $db } from '../../config'

// Interfaces
import { IModels } from '../interfaces'

import App from './App';
import User from './User';

// Db Connection
const { dialect, port, host, database, username, password } = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: IModels = {
  App: App(sequelize),
  User: User(sequelize),
  sequelize
}

// Relationships
Object.keys(models).forEach((modelName: string) => {
  if (hasKey(models, modelName)) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }
})

export default models