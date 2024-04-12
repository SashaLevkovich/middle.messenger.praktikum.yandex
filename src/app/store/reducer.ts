import { Reducer, UserData } from '../lib/types'
import { deepCopy } from '@/shared/helpers'

export const reducer: Reducer = (state, action) => {
  const newState = deepCopy(state)
  switch (action.type) {
    case 'SET_USER':
      newState.userConfig = {
        ...newState.userConfig,
        ...(action.payload as object),
      } as UserData
      return newState

    default:
      return state
  }
}
