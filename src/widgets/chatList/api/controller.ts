import { ChatAPI } from './api'
import { createSocket, WSTransport } from '@/app/lib/WSTransport'
import { addChats, setActiveChat } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { AuthAPI } from '@/entities/authentication'
import { getFormData } from '@/shared/helpers'

export class ChatController {
  private chatAPI: ChatAPI
  private authAPI: AuthAPI

  constructor() {
    this.chatAPI = new ChatAPI()
    this.authAPI = new AuthAPI()
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
      this.getChats()
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }

  async getChatMessage(id: number, title: string) {
    const response = await this.authAPI.getUser()
    const data = JSON.parse(response.response)
    store.dispatch(setActiveChat(title))

    const token = await this.chatAPI.getChatToken(id)
    const responseToken = JSON.parse(token.response)

    const socket = createSocket(data.id, id, responseToken.token)

    WSTransport(socket)
  }
}
