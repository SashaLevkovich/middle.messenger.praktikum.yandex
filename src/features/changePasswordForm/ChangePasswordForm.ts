import ChangePasswordFormStyles from './changePasswordForm.module.css'
import {
  buttonContext,
  newPasswordContext,
  newPasswordRepeatContext,
  oldPasswordContext,
} from './models/context'
import { RULES } from './models/rules'
import { ChangePasswordFormTemplate } from './template'

import { Block, Props } from '@/app/lib'
import { Button, Input } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

interface ChangePasswordFormProps extends Props {
  changePasswordFormData: Record<string, string>
}

export class ChangePasswordForm extends Block {
  constructor(props: ChangePasswordFormProps) {
    super({
      ...props,
      oldPassword: new Input({
        ...oldPasswordContext,
        onChange: (value: string) => {
          this.setProps((props.changePasswordFormData['oldPassword'] = value))
        },
        rules: RULES.oldPassword,
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
      newPassword: new Input({
        ...newPasswordContext,
        onChange: (value: string) => {
          this.setProps((props.changePasswordFormData['newPassword'] = value))
        },
        rules: RULES.newPassword,
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
      newPasswordRepeat: new Input({
        ...newPasswordRepeatContext,
        onChange: (value: string) => {
          this.setProps(
            (props.changePasswordFormData['repeatNewPassword'] = value),
          )
        },
        rules: RULES.repeatNewPassword,
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          e.preventDefault()
          router.go('/settings')
        },
        styles: {
          ...ChangePasswordFormStyles,
        },
      }),
    })
  }

  override render() {
    return ChangePasswordFormTemplate
  }
}
