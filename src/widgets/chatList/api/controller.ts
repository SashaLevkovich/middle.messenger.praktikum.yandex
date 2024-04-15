import { ChatAPI } from '@/entities/chatItem/api/chatApi'

export class ChatController {
  private chatAPI: ChatAPI

  constructor() {
    this.chatAPI = new ChatAPI()
  }

  async getChats() {
    const response = await this.chatAPI.getChats()
    return JSON.parse(response.response)
  }
}
