export interface IChatItem {
  avatar?: string
  userName: string
  message: string
  time: string
  badge?: number
}

export const linkContext = {
  url: '/profile',
  text: 'Profile',
}

export type TChatsList = IChatItem[]
