import { ChatController } from './controller'
import { TChatsList } from '../models/context'
import { Chat } from '../types'

export const chatList = {
  getChatList: async (): Promise<TChatsList[]> => {
    const chatListController = new ChatController()
    const chats = await chatListController.getChats()

    const chatDto = chats.map((item: Chat) => {
      const lastMessage = item.last_message
      if (!lastMessage || !lastMessage.user) {
        return {
          title: item.title,
        }
      }

      const title = item.title
      const message = lastMessage.content
      const time = new Date(lastMessage.time).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      })
      const avatarSrc = item.avatar

      return {
        title,
        message,
        time,
        avatarSrc,
      }
    })

    return chatDto
  },
}
