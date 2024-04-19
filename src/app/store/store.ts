import { reducer } from './reducer'
import { Store } from '../lib/Store'
import { State } from '../lib/types'
import { ChatItem } from '@/entities/chatItem/ChatItem'

export const state: State = {
  userConfig: {
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    phone: '',
    nameInChat: '',
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
  activeChat: '',
}

export const store = Store.getInstance(reducer, state)

export function handleStateChange(state: State) {
  return state.chats.forEach((chat) => new ChatItem({ ...chat }))
}

store.subscribe(() => {
  handleStateChange(store.getState())
})
