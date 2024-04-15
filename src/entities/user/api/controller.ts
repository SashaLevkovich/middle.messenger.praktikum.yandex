import { UserAPI } from './userApi'
import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { AuthAPI } from '@/entities/authentication'
import { getFormData } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

export class UserController {
  private authAPI: AuthAPI
  private userAPI: UserAPI

  constructor() {
    this.authAPI = new AuthAPI()
    this.userAPI = new UserAPI()
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

  public async signup() {
    const form = getFormData()

    const data = {
      email: form?.email,
      login: form?.login,
      first_name: form?.first_name,
      second_name: form?.second_name,
      phone: form?.phone,
      password: form?.password,
    }

    try {
      const response = await this.authAPI.signup(data)
      if (response.status === 200) {
        this.getUser()
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

  public async signin() {
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

  public async logout() {
    try {
      const response = await this.authAPI.logout()

      if (response.status === 200) {
        router.go('/')
      } else {
        console.error(
          `Failed to login user. Server returned status: ${response.status}`,
        )
      }
    } catch (error) {
      console.error(`Failed to login user, ${error}`)
    }
  }

  async changeUser() {
    const form = getFormData()

    const data = {
      email: form?.email,
      login: form?.login,
      first_name: form?.first_name,
      second_name: form?.second_name,
      phone: form?.phone,
      display_name: form?.display_name,
    }

    try {
      const response = await this.userAPI.changeUser(data)
      if (response.status === 200) {
        this.getUser()
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

  async changePassword() {
    const form = getFormData()

    const data = {
      oldPassword: form?.oldPassword,
      newPassword: form?.newPassword,
    }

    try {
      const response = await this.userAPI.changePassword(data)
      if (response.status === 200) {
        this.getUser()
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

  public async changeAvatar() {
    const form = document.getElementById('formAvatar') as HTMLFormElement

    const formData = new FormData(form)

    try {
      const response = await this.userAPI.changeAvatar(formData)
      if (response.status === 200) {
        this.getUser()
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
