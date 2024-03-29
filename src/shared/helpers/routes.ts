import { Block } from '@/app/lib'
import { ChangePasswordPage, ChatsPage, ProfilePage, SignUpPage } from '@/pages'
import { LoginPage } from '@/pages/Login/LoginPage'

const loginFormData = {
  login: '',
  password: '',
}

const signUpFormData = {
  email: '',
  login: '',
  name: '',
  lastname: '',
  phone: '',
  password: '',
}

const profileFormData = {
  email: 'pochta@yandex.ru',
  login: 'Ivan',
  name: 'Ivan',
  lastname: 'Ivanivanov',
  phone: '+7 (909) 967 30 30',
  nameInChat: 'Ivan',
}

const changePasswordFormData = {
  oldPassword: 'someOldPassword',
  newPassword: '',
  repeatNewPassword: '',
}

export type ROUTE = {
  [key: string]: () => Block
}

export const ROUTE_MAP: ROUTE = {
  '/login': () => new LoginPage({ loginFormData }),
  '/signUp': () => new SignUpPage({ signUpFormData }),
  '/chats': () => new ChatsPage({}),
  '/profile': () => new ProfilePage({ profileFormData }),
  '/changePassword': () => new ChangePasswordPage({ changePasswordFormData }),
}
