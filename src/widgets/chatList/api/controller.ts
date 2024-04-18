import { ChatAPI } from './api'
import { addChats } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { getFormData } from '@/shared/helpers'

export class ChatController {
  private chatAPI: ChatAPI

  constructor() {
    this.chatAPI = new ChatAPI()
  }

  async getChats() {
    try {
      const response = await this.chatAPI.getChats()
      const chats = JSON.parse(response.response)

      store.dispatch(addChats(chats))

      return chats
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }

  async addChat() {
    const form = getFormData('addChat')
    const data = {
      title: form?.addChat as string,
    }

    try {
      await this.chatAPI.addChat(data)
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }
}
