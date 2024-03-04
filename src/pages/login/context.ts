import { ITemplateData } from 'src/helpers/renderTemplate'

export const loginContext: ITemplateData = {
  hasLabel: false,
  type: 'text',
  name: 'login',
  placeholder: 'name@example.com',
  id: 'loginInput',
}

export const passwordContext: ITemplateData = {
  hasLabel: false,
  type: 'password',
  name: 'password',
  placeholder: 'Enter your password',
  id: 'passwordInput',
}

export const titleContext: ITemplateData = {
  title: 'Log in',
}

export const buttonContext: ITemplateData = {
  type: 'button',
  text: 'Sign in',
}

export const dividerContext: ITemplateData = {
  text: 'OR CONTINUE WITH',
}

export const linkContext: ITemplateData = {
  url: '/singUp',
  text: 'Create account',
}
