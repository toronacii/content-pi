export type App = {
  appName: string
  identifier: string
  icon: string
  description: string
}

export type User = {
  username: string
  password: string
  email: string
  privilege: string
  active: boolean
}

export type Sequelize = Partial<{
  _defaults: any;
  name: string;
  options: any;
  associate: any;
}>