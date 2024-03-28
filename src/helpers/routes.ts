import Block from '@/lib/Block'
import { ChangePasswordPage, SignUpPage } from '@/pages'
import { ChatsPage } from '@/pages/chats/chats'
import { LoginPage } from '@/pages/login/login'
import { ProfilePage } from '@/pages/profile/profile'

const loginFormData = {
  login: '',
  password: '',
}

export type ROUTE = {
  [key: string]: () => Block
}

export const ROUTE_MAP: ROUTE = {
  '/login': () => new LoginPage({ loginFormData }),
  '/signUp': () => new SignUpPage({}),
  '/chats': () => new ChatsPage({}),
  '/profile': () => new ProfilePage({}),
  '/changePassword': () => new ChangePasswordPage({}),
}
