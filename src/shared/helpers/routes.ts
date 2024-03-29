import { Block } from '@/app/lib'
import { Login, SignUp, Chats, UserProfile, ChangePassword } from '@/pages'

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
  '/': () => new Login({ loginFormData }),
  '/login': () => new Login({ loginFormData }),
  '/signUp': () => new SignUp({ signUpFormData }),
  '/chats': () => new Chats({}),
  '/profile': () => new UserProfile({ profileFormData }),
  '/changePassword': () => new ChangePassword({ changePasswordFormData }),
}
