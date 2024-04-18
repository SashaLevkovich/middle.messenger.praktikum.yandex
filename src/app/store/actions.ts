import { Chat } from '@/widgets/chatList/types'

export const SET_USER = 'SET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const ADD_CHATS = 'ADD_CHATS'

export function setUser(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_USER, payload }
}

export function setPassword(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_PASSWORD, payload }
}

export const addChats = (payload: Chat[]) => ({
  type: ADD_CHATS,
  payload: payload,
})
