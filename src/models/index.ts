// Dependencies
import { Sequelize } from 'sequelize'

// Utils
import { hasKey } from 'fogg-utils'

// Configuration
import { $db } from '../../config'

// Interfaces
import { IModels } from '../interfaces'

// Db Connection
const { dialect, port, host, database, username, password } = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: IModels = {
  App: sequelize.import('./App'),
  User: sequelize.import('./User'),
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