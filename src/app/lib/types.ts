import { ChatItem } from '@/entities/chatItem/ChatItem'
import { TChatsList } from '@/widgets/chatList/models/context'

export type Listener<T extends unknown[] = unknown[]> = (...args: T) => void

export type EventMap = {
  [event: string]: EventListener
}

export type Props = {
  events?: EventMap
  styles?: Record<string, string>
  list?: ChatItem[]
  [key: string]: unknown
}

export enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export enum StoreEvents {
  Updated = 'updated',
}

export interface LoginFormData {
  login: string
  password: string
}

export interface SignUpFormData {
  email: string
  login: string
  name: string
  lastname: string
  phone: string
  password: string
}

export interface ProfileFormData {
  email: string
  login: string
  name: string
  lastname: string
  phone: string
  nameInChat: string
}

export interface UserData {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  nameInChat: string
  avatar?: string
  password: string
}

export interface ChangePasswordFormData {
  oldPassword: string
  newPassword: string
  repeatNewPassword: string
}

export interface ChatsFormData {
  message: string
}

export interface ActiveChat {
  title: string
  id: number
}

export interface State {
  changePasswordFormData: ChangePasswordFormData
  chatsFormData: ChatsFormData
  userConfig: UserData
  chats: TChatsList[]
  activeChat: ActiveChat
  socket?: WebSocket
  messages?: string[]
}

export interface Action {
  type: string
  payload?: unknown | unknown[] | Record<string, unknown | unknown[]>
}

export type Reducer = (state: State, action: Action) => State

export type Middleware = (
  action: Action,
  next: (action: Action) => void,
) => void
