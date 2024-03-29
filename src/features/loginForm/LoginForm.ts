import { Block, Props } from '@/app/lib'
import { Validator } from '@/shared/helpers'
import LoginFormStyles from './loginForm.module.css'
import { buttonContext, loginContext, passwordContext } from './models/context'
import { LoginFormTemplate } from './templates'
import { Input, Button } from './ui'

interface LoginFormProps extends Props {
  loginFormData: Record<string, string>
}

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super({
      ...props,
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps((props.loginFormData['login'] = value))
          this.setProps({
            value,
          })
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: true },
          { ruleName: 'min_length', ruleValue: 5 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          this.setProps((props.loginFormData['password'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: true },
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
      styles: {
        ...LoginFormStyles,
      },
    })
  }

  render() {
    return LoginFormTemplate
  }
}
