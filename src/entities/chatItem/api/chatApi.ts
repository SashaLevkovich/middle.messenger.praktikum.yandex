import { Fetch } from '@/app/lib/fetch'

export class ChatAPI {
  private fetch: Fetch
  private url = `${import.meta.env.VITE_API_URL}/chats`

  constructor() {
    this.fetch = new Fetch()
  }

  async getChats() {
    try {
      return await this.fetch.get(`${this.url}`)
    } catch (error) {
      throw new Error(`Failed to sign up, ${error}`)
    }
  }
}
