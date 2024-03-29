import Block from '@/lib/Block'
import { ChangePasswordPage, SignUpPage } from '@/pages'
import { ChatsPage } from '@/pages/chats/chats'
import { LoginPage } from '@/pages/login/login'
import { ProfilePage } from '@/pages/profile/profile'

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
  email: '',
  login: '',
  name: '',
  lastname: '',
  phone: '',
  nameInChat: '',
}

const changePasswordFormData = {
  oldPassword: '',
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
