import { ChatAPI } from './api'
import { createSocket, WSTransport } from '../../../app/lib/WSTransport'
import {
  addChats,
  setActiveChat,
  setMessages,
} from '../../../app/store/actions'
import { store } from '../../../app/store/store'
import { AuthAPI } from '../../../entities/authentication'
import { getFormData } from '../../../shared/helpers'

export class ChatController {
  private chatAPI: ChatAPI
  private authAPI: AuthAPI
  private static socket?: WebSocket

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

  async addUser() {
    const form = getFormData('addUser')

    const data = {
      users: [form?.addUser],
      chatId: store.getState().activeChat.id,
    }

    try {
      await this.chatAPI.addUser(data)
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }

  async deleteUser() {
    const form = getFormData('addUser')

    const data = {
      users: [form?.addUser],
      chatId: store.getState().activeChat.id,
    }

    try {
      await this.chatAPI.deleteUser(data)
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }

  async getChatMessage(id: number, title: string) {
    const response = await this.authAPI.getUser()
    const data = JSON.parse(response.response)
    store.dispatch(setActiveChat({ title, id }))

    const token = await this.chatAPI.getChatToken(id)
    const responseToken = JSON.parse(token.response)

    ChatController.socket = createSocket(data.id, id, responseToken.token)

    WSTransport(ChatController.socket)
  }

  sendMessage() {
    const data = getFormData('messageForm')

    store.dispatch(
      setMessages([data?.message as string, ...store.getState().messages]),
    )

    ChatController.socket &&
      ChatController.socket.send(
        JSON.stringify({
          content: data?.message,
          type: 'message',
        }),
      )
  }
}
