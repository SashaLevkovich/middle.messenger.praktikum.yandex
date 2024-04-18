export interface User {
  first_name: string
  second_name: string
  display_name: string
  login: string
  avatar: string
}

export interface Message {
  user: User
  time: string
  content: string
  id: number
}

export interface Chat {
  id: number
  title: string
  avatar: string
  created_by: number
  unread_count: number
  last_message: Message
}
