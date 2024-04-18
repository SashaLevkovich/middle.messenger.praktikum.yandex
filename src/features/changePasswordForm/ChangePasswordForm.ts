import ChangePasswordFormStyles from './changePasswordForm.module.css'
import {
  buttonContext,
  newPasswordContext,
  oldPasswordContext,
} from './models/context'
import { RULES } from './models/rules'
import { ChangePasswordFormTemplate } from './template'

import { Block, Props } from '@/app/lib'
import { setPassword } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'
import { Button, Input } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

interface ChangePasswordFormProps extends Props {
  changePasswordFormData: Record<string, string>
}

export class ChangePasswordForm extends Block {
  private userController: UserController

  constructor(props: ChangePasswordFormProps) {
    super({
      ...props,
      oldPassword: new Input({
        ...oldPasswordContext,
        onChange: (value: string) => {
          store.dispatch(setPassword({ oldPassword: value }))
        },
        rules: RULES.oldPassword,
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
      newPassword: new Input({
        ...newPasswordContext,
        onChange: (value: string) => {
          store.dispatch(setPassword({ newPassword: value }))
        },
        rules: RULES.newPassword,
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          e.preventDefault()
          this.userController.changePassword()
        },
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
    })

    this.userController = new UserController()
  }

  override async init() {
    super.init()

    this.componentDidMount()
  }

  override async componentDidMount() {
    const userController = new UserController()
    const user = await userController.getUser()

    if (isEmpty(user)) {
      router.go('/')
    } else {
      router.go('/change-password')
    }
  }

  override render() {
    return ChangePasswordFormTemplate
  }
}
