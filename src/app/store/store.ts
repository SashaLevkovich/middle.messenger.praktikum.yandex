import { reducer } from './reducer'
import { ChatItem } from '../../entities/chatItem/ChatItem'
import { Store } from '../lib/Store'
import { State } from '../lib/types'

export const state: State = {
  userConfig: {
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    phone: '',
    display_name: '',
    avatar: '',
    password: '',
  },
  changePasswordFormData: {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  },
  chatsFormData: {
    message: '',
  },
  chats: [],
  activeChat: {
    title: '',
    id: 0,
  },
  messages: [],
}

export const store = Store.getInstance(reducer, state)

export function handleStateChange(state: State) {
  return state.chats.forEach((chat) => new ChatItem({ ...chat }))
}

store.subscribe(() => {
  handleStateChange(store.getState())
})
