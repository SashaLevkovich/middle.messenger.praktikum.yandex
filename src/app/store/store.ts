import { reducer } from './reducer'
import { Store } from '../lib/Store'
import { State } from '../lib/types'

const state: State = {
  userConfig: {
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    phone: '',
    nameInChat: '',
    password: '',
    avatar: '',
  },
  changePasswordFormData: {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  },
  chatsFormData: {
    message: '',
  },
}

export const store = Store.getInstance(reducer, state)
