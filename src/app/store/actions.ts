import { ActiveChat } from '../lib/types'
import { Chat } from '@/widgets/chatList/types'

export const SET_USER = 'SET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const ADD_CHATS = 'ADD_CHATS'
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'
export const SET_SOCKET = 'SET_SOCKET'
export const SET_MESSAGES = 'SET_MESSAGES'

export function setUser(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_USER, payload }
}

export function setPassword(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_PASSWORD, payload }
}

export function addChats(payload: Chat[]) {
  return { type: ADD_CHATS, payload: payload }
}

export function setActiveChat(payload: ActiveChat) {
  return { type: SET_ACTIVE_CHAT, payload: payload }
}

export function setSocket(payload: WebSocket) {
  return { type: SET_SOCKET, payload: payload }
}

export function setMessages(payload: string[]) {
  return { type: SET_MESSAGES, payload: payload }
}
