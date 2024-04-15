import { Fetch } from '@/app/lib/Fetch'

export class UserAPI {
  private fetch: Fetch
  private url = `${import.meta.env.VITE_API_URL}/user`

  constructor() {
    this.fetch = new Fetch()
  }

  async changeUser(data: Record<string, unknown>): Promise<XMLHttpRequest> {
    try {
      return await this.fetch.put(`${this.url}/profile`, {
        data,
      })
    } catch (error) {
      throw new Error(`Failed to sign up, ${error}`)
    }
  }

  async changeAvatar(data: Record<string, unknown>): Promise<XMLHttpRequest> {
    try {
      return await this.fetch.put(`${this.url}/profile/avatar`, {
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (error) {
      throw new Error(`Failed to sign up, ${error}`)
    }
  }
}
