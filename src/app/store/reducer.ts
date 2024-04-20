import {
  SET_USER,
  SET_PASSWORD,
  ADD_CHATS,
  SET_ACTIVE_CHAT,
  SET_SOCKET,
  SET_MESSAGES,
} from './actions'
import {
  ActiveChat,
  ChangePasswordFormData,
  Reducer,
  UserData,
} from '../lib/types'
import { deepCopy } from '@/shared/helpers'
import { TChatsList } from '@/widgets/chatList/models/context'

export const reducer: Reducer = (state, action) => {
  const newState = deepCopy(state)
  switch (action.type) {
    case SET_USER:
      newState.userConfig = {
        ...newState.userConfig,
        ...(action.payload as object),
      } as UserData
      return newState

    case SET_PASSWORD:
      newState.changePasswordFormData = {
        ...newState.changePasswordFormData,
        ...(action.payload as object),
      } as ChangePasswordFormData
      return newState

    case ADD_CHATS:
      newState.chats = [...(action.payload as TChatsList[])]
      return newState

    case SET_ACTIVE_CHAT:
      newState.activeChat = {
        ...newState.activeChat,
        ...(action.payload as object),
      } as ActiveChat
      return newState

    case SET_SOCKET:
      newState.socket = action.payload as WebSocket
      return newState

    case SET_MESSAGES:
      newState.messages = [...(action.payload as string[])]
      return newState

    default:
      return state
  }
}
