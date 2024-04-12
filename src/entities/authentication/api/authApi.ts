import { Fetch } from '@/app/lib/Fetch'

export interface SignUpData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export class AuthAPI {
  private fetch: Fetch
  private url = `${import.meta.env.VITE_API_URL}/auth`

  constructor() {
    this.fetch = new Fetch()
  }

  async signup(data: Record<string, unknown>): Promise<XMLHttpRequest> {
    try {
      return await this.fetch.post(`${this.url}/signup`, {
        data,
      })
    } catch (error) {
      throw new Error(`Failed to sign up, ${error}`)
    }
  }

  async signin(data: {
    login: string
    password: string
  }): Promise<XMLHttpRequest> {
    try {
      return await this.fetch.post(`${this.url}/signin`, { data })
    } catch (error) {
      throw new Error(`Failed to sign in, ${error}`)
    }
  }

  async getUser() {
    try {
      return await this.fetch.get(`${this.url}/user`)
    } catch (error) {
      throw new Error(`Failed to get user, ${error}`)
    }
  }

  async logout() {
    try {
      return await this.fetch.post(`${this.url}/logout`)
    } catch (error) {
      throw new Error(`Failed to get user, ${error}`)
    }
  }
}
