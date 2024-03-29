import ProfilePageStyles from './profile.module.css'
import { ITemplateData } from '@/helpers/renderTemplate'

export const linkContext: ITemplateData = {
  url: '/chats',
}

export const title: ITemplateData = { title: 'Ivan' }

export const fileInputContext: ITemplateData = {
  name: 'avatar',
  id: 'avatarInput',
}

export const emailContext: ITemplateData = {
  label: 'Email:',
  type: 'text',
  name: 'email',
  id: 'emailInputProfile',
  value: 'pochta@yandex.ru',
}

export const loginContext: ITemplateData = {
  label: 'Login:',
  type: 'text',
  name: 'login',
  id: 'loginInputProfile',
  value: 'Ivan',
}

export const nameContext: ITemplateData = {
  label: 'Name:',
  type: 'text',
  name: 'first_name',
  id: 'nameInputProfile',
  value: 'Ivan',
}

export const lastNameContext: ITemplateData = {
  label: 'Lastname:',
  type: 'text',
  name: 'second_name',
  id: 'lastnameInputProfile',
  value: 'Ivanivanov',
}

export const phoneContext: ITemplateData = {
  label: 'Phone:',
  type: 'phone',
  name: 'phone',
  id: 'phoneInputProfile',
  value: '+7 (909) 967 30 30',
}

export const nameInChatContext: ITemplateData = {
  label: 'Name in chat:',
  type: 'text',
  name: 'display_name',
  id: 'displayNameInputProfile',
  value: 'Ivan',
}

export const changePassword = {
  text: 'Change password',
  id: 'changePasswordButton',
  className: ProfilePageStyles.changeButton,
}

export const changeProfile = {
  text: 'Save profile',
  id: 'changeProfileButton',
  className: ` ${ProfilePageStyles.changeButton}`,
}

export const logoutLink = {
  url: '/login',
  text: 'Log out',
  className: ` ${ProfilePageStyles.logoutLink} `,
}
