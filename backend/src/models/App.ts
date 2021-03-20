// Interface
import { DataTypes } from 'sequelize'
import { IApp } from '../interfaces'

export default (sequelize: any): IApp => {
  const App = sequelize.define('App', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    appName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return App
}