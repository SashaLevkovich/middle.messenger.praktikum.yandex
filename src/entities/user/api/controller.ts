import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { AuthAPI } from '@/entities/authentication'
import { getFormData } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

export class UserController {
  private authAPI: AuthAPI

  constructor() {
    this.authAPI = new AuthAPI()
  }

  public async getUser() {
    try {
      const response = await this.authAPI.getUser()
      const data = JSON.parse(response.response)

      switch (response.status) {
        case 200:
          store.dispatch(setUser(data))
          return data
        case 401:
          return null
        default:
          console.error(`Failed to get user, status: ${response.status}`)
          return null
      }
    } catch (error) {
      console.error(`Failed to get user, ${error}`)
      return null
    }
  }

  public async login() {
    const form = getFormData()
    const data = {
      login: form?.login as string,
      password: form?.password as string,
    }

    try {
      const response = await this.authAPI.signin(data)

      if (response.status === 200) {
        router.go('/messenger')
      } else {
        console.error(
          `Failed to login user. Server returned status: ${response.status}`,
        )
      }
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }
}
