// Dependencies
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

// Utils
import { encrypt, setBase64, isPasswordMatch } from 'fogg-utils'

// Interface
import { IUser, IModels, IAuthPayload } from '../interfaces'

// Configuration
import { $security } from '../../config'

export const createToken = async (user: IUser): Promise<string> => {
  const { id, username, password, email, privilege, active } = user
  const token = setBase64(`${encrypt($security.secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    privilege,
    active,
    token
  }

  return jwt.sign(
    { data: setBase64(userData) },
    $security.secretKey,
    { expiresIn: $security.expiresIn })
}

export const getUserBy = async (
  where: any,
  models: IModels
): Promise<IUser> => {
  const user = await models.User.findOne({
    where,
    raw: true
  })

  return user
}

export const doLogin = async (
  email: string,
  password: string,
  models: IModels
): Promise<IAuthPayload> => {
  const user = await getUserBy({ email }, models)

  if (!user) {
    throw new AuthenticationError('Invalid Login')
  }

  const passwordMatch = isPasswordMatch(encrypt(password), user.password)
  const isActive = user.active

  if (!passwordMatch) {
    throw new AuthenticationError('Invalid Login')
  }

  if (!isActive) {
    throw new AuthenticationError('Your account is not activated yet')
  }

  const token = await createToken(user)

  return { token }
}