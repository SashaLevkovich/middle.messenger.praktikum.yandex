export type Listener<T extends unknown[] = unknown[]> = (...args: T) => void

export type EventMap = {
  [event: string]: EventListener
}

export type Props = {
  events?: EventMap
  styles?: Record<string, string>
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

export interface State {
  changePasswordFormData: ChangePasswordFormData
  chatsFormData: ChatsFormData
  userConfig: UserData
}

export interface Action {
  type: string
  payload?: unknown | unknown[] | Record<string, unknown | unknown[]>
}

export type Reducer = (state: State, action: Action) => State

export interface MiddlewareFunction {
  (next: () => void): void
}
