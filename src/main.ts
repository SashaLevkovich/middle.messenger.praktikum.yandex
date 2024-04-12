import avatarUrl from './app/assets/icons/photo.svg'
import pinUrl from './app/assets/icons/pin.svg'
import cameraUrl from './app/assets/images/camera.png'
import { Block } from './app/lib'
import { RequestOptions } from './app/lib/Fetch'
import { AuthAPI } from './entities/authentication'
import { UserController } from './entities/user/api/controller'

import { registerPartials } from './shared/helpers/registerPartials'
import {
  router,
  loginPage,
  signPagePage,
  profilePage,
  chatsPage,
  changePasswordPage,
} from './shared/helpers/routes'

import * as Templates from './shared/templates/index'

import './style.module.css'

registerPartials(Templates)

const photoImg = document.getElementById(cameraUrl) as HTMLImageElement
const pinImg = document.getElementById('pin') as HTMLImageElement
const avatarImg = document.getElementById('userAvatarImg') as HTMLImageElement

if (pinImg) pinImg.src = pinUrl
if (photoImg) photoImg.src = cameraUrl
if (avatarImg) avatarImg.src = avatarUrl

router
  .use('/', loginPage)
  .use('/sign-up', signPagePage)
  .use('/messenger', chatsPage)
  .use('/settings', profilePage)
  .use('/change-password', changePasswordPage)
  .start()

const data = {
  first_name: 'John',
  second_name: 'Doe',
  login: 'afsmdflsmd',
  email: 'john_doeqweqwe123@example.com',
  phone: '+71234567891',
  password: 'securePassword123',
}

const options: RequestOptions = {
  credentials: 'include',
  mode: 'cors',
  headers: {},
  data: data,
}

// const authAPI = new AuthAPI()
// authAPI
//   .signup(options.data as Record<string, unknown>)
//   .then((response) => {
//     console.log('Регистрация прошла успешно:', response)
//   })
//   .catch((error) => {
//     console.error('Ошибка регистрации:', error)
//   })

// authAPI
//   .signin(options.data?.login, options.data?.password)
//   .then((response) => {
//     console.log('Вход выполнен успешно:', response)
//   })
//   .catch((error) => {
//     console.error('Ошибка входа:', error)
//   })

// authAPI
//   .getUser()
//   .then((response) => {
//     console.log('Информация о пользователе получена:', response)
//   })
//   .catch((error) => {
//     console.error('Ошибка получения информации о пользователе:', error)
//   })

// authAPI
//   .logout()
//   .then((response) => {
//     console.log('Выход выполнен успешно:', response)
//   })
//   .catch((error) => {
//     console.error('Ошибка выхода:', error)
//   })
