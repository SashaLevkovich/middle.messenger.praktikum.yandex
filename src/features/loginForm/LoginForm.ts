import LoginFormStyles from './loginForm.module.css'
import { buttonContext, loginContext, passwordContext } from './models/context'
import { RULES } from './models/rules'
import { LoginFormTemplate } from './templates'

import { Block, Props } from '@/app/lib'
import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user/api/controller'
import { Button, Input } from '@/shared/components'

export class LoginForm extends Block {
  private userController: UserController

  constructor(props: Props) {
    super({
      ...props,
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.login,
        styles: {
          ...LoginFormStyles,
        },
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ password: value }))
        },
        rules: RULES.password,
        styles: {
          ...LoginFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          e.preventDefault()
          this.userController.login()
        },
        styles: {
          ...LoginFormStyles,
        },
      }),
      styles: {
        ...LoginFormStyles,
      },
    })

    this.userController = new UserController()
  }

  render() {
    return LoginFormTemplate
  }
}
