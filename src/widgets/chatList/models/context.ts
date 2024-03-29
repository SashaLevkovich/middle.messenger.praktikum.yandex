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

export const chatListContext: TChatsList = [
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Киноклуб',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
    badge: 2,
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: '1, 2, 3',
    message: 'Test',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
]
