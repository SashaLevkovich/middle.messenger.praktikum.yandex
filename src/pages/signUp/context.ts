import { ITemplateData } from '@/helpers/renderTemplate'

export const emailContext: ITemplateData = {
  hasLabel: true,
  label: 'Email',
  type: 'text',
  name: 'email',
  placeholder: 'name@example.com',
  id: 'emailSignUpInput',
}

export const loginContext: ITemplateData = {
  hasLabel: true,
  label: 'Login',
  type: 'text',
  name: 'login',
  placeholder: 'Your login',
  id: 'loginSignUpInput',
}

export const nameContext: ITemplateData = {
  hasLabel: true,
  label: 'Name',
  type: 'text',
  name: 'first_name',
  placeholder: 'Enter your name',
  id: 'nameSignUpInput',
}

export const lastNameContext: ITemplateData = {
  hasLabel: true,
  label: 'Lastname',
  type: 'text',
  name: 'second_name',
  placeholder: 'Enter your lastname',
  id: 'lastNameSignUpInput',
}

export const phoneContext: ITemplateData = {
  hasLabel: true,
  label: 'Phone number',
  type: 'phone',
  name: 'phone',
  placeholder: 'Enter your phone',
  id: 'phoneSignUpInput',
}

export const passwordContext: ITemplateData = {
  hasLabel: true,
  label: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'Enter your password',
  id: 'passwordSignUpInput',
}

export const titleContext: ITemplateData = {
  title: 'Sing up',
}

export const buttonContext: ITemplateData = {
  type: 'button',
  text: 'Sign up',
  id: 'signUpButton',
}

export const linkContext: ITemplateData = {
  url: '/login',
  text: 'Login',
}
