import { ChangePasswordPage, renderError, SignUpPage } from '@/pages'

import { LoginPage } from '@/pages/login/login.ts'
import { ProfilePage } from '@/pages/profile/profile'
import { ChatsPage } from '@/pages/chats/chats.ts'

const loginFormData = {
  login: '',
  password: '',
}

export const ROUTE_MAP = {
  '/login': () => new LoginPage({ loginFormData }),
  '/signUp': () => new SignUpPage({}),
  '/chats': () => new ChatsPage({}),
  '/profile': () => new ProfilePage({}),
  '/changePassword': () => new ChangePasswordPage({}),
  '/notFound': () =>
    renderError({
      error: '404',
      text: 'not found',
    }),
  '500': () =>
    renderError({
      error: '500',
      text: 'we are already fixing it',
    }),
}
