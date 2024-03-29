import { Block, Props } from '@/app/lib'
import { Validator } from '@/shared/helpers'
import {
  buttonContext,
  newPasswordContext,
  newPasswordRepeatContext,
  oldPasswordContext,
} from './models/context'
import { ChasngePasswordFormTemplate } from './template'

import { Input, Button } from './ui'

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
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'min_length', ruleValue: 8 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      newPassword: new Input({
        ...newPasswordContext,
        onChange: (value: string) => {
          this.setProps((props.changePasswordFormData['newPassword'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'min_length', ruleValue: 8 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      newPasswordRepeat: new Input({
        ...newPasswordRepeatContext,
        onChange: (value: string) => {
          this.setProps(
            (props.changePasswordFormData['repeatNewPassword'] = value),
          )
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'min_length', ruleValue: 8 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          window.location.href = '/chats'
          e.preventDefault()
        },
      }),
    })
  }

  override render() {
    return ChasngePasswordFormTemplate
  }
}
