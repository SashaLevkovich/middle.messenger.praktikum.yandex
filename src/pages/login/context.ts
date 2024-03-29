import { ITemplateData } from '@/helpers/renderTemplate'

export const loginContext: ITemplateData = {
  type: 'text',
  name: 'login',
  placeholder: 'name@example.com',
  id: 'loginInput',
  autocomplete: 'username',
  ariaLabel: 'Username',
}

export const passwordContext: ITemplateData = {
  type: 'text',
  name: 'password',
  placeholder: 'Enter your password',
  id: 'passwordInput',
  autocomplete: 'new-password',
  ariaLabel: 'Password',
}

export const titleContext: ITemplateData = {
  title: 'Log in',
}

export const buttonContext: ITemplateData = {
  id: 'signInButton',
  type: 'button',
  text: 'Sign in',
}

export const dividerContext: ITemplateData = {
  text: 'OR CONTINUE WITH',
}

export const linkContext: ITemplateData = {
  url: '/signUp',
  text: 'Create account',
}
