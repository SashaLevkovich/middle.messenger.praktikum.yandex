import { connect } from '../../app/lib/Hoc'
import { Router } from '../../app/lib/Router'
import { State } from '../../app/lib/types'
import { ChatItem } from '../../entities/chatItem/ChatItem'
import { Login, SignUp, UserProfile, Chats, ChangePassword } from '../../pages'

function mapLoginToProps(state: State) {
  return {
    login: state.userConfig.login,
    password: state.userConfig.password,
  }
}

function mapSignUpToProps(state: State) {
  return {
    email: state.userConfig.email,
    first_name: state.userConfig.first_name,
    second_name: state.userConfig.second_name,
    phone: state.userConfig.phone,
    login: state.userConfig.login,
    password: state.userConfig.password,
  }
}

function mapUserProfileToProps(state: State) {
  return {
    email: state.userConfig.email,
    first_name: state.userConfig.first_name,
    second_name: state.userConfig.second_name,
    phone: state.userConfig.phone,
    login: state.userConfig.login,
    display_name: state.userConfig.display_name,
  }
}

function mapChatsToProps(state: State) {
  return {
    message: state.chatsFormData.message,
  }
}

function mapChangePasswordToProps(state: State) {
  return {
    oldPassword: state.changePasswordFormData.oldPassword,
    newPassword: state.changePasswordFormData.newPassword,
    repeatNewPassword: state.changePasswordFormData.repeatNewPassword,
  }
}

function mapChatItemToProps(state: State) {
  return {
    oldPassword: state.changePasswordFormData.oldPassword,
    newPassword: state.changePasswordFormData.newPassword,
    repeatNewPassword: state.changePasswordFormData.repeatNewPassword,
  }
}

export const router = new Router('root')

export const loginPage = connect(Login, mapLoginToProps)
export const chatItem = connect(ChatItem, mapChatItemToProps)
export const signPagePage = connect(SignUp, mapSignUpToProps)
export const profilePage = connect(UserProfile, mapUserProfileToProps)
export const chatsPage = connect(Chats, mapChatsToProps)
export const changePasswordPage = connect(
  ChangePassword,
  mapChangePasswordToProps,
)
