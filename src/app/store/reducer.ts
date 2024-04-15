import { SET_USER, SET_PASSWORD } from './actions'
import { ChangePasswordFormData, Reducer, UserData } from '../lib/types'
import { deepCopy } from '@/shared/helpers'

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

    default:
      return state
  }
}
