import { SET_USER, SET_PASSWORD, ADD_CHATS } from './actions'
import { ChangePasswordFormData, Reducer, UserData } from '../lib/types'
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
      console.log(newState.chats)

      return newState
    default:
      return state
  }
}
