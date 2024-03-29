import LoginFormStyles from './login.module.css'
import { Button, Input, Link, Title } from '@/components'
import ButtonStyles from '@/components/button/button.module.css'
import InputStyles from '@/components/input/input.module.css'
import LinkStyles from '@/components/link/link.module.css'
import { Validator } from '@/helpers/Validator'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import {
  buttonContext,
  linkContext,
  loginContext,
  passwordContext,
  titleContext,
} from '@/pages/login/context'
import { LoginPageTemplate } from '@/templates'

interface LoginPageProps extends Props {
  loginFormData: Record<string, string>
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super({
      title: new Title({
        ...titleContext,
      }),
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
        styles: {
          ...InputStyles,
        },
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
        styles: {
          ...InputStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: () => {
          window.location.href = '/chats'
          console.log(props.loginFormData)
        },
        styles: {
          ...ButtonStyles,
        },
      }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e) => {
            e.preventDefault()
            window.location.href = '/signUp'
          },
        },
        styles: {
          ...LinkStyles,
        },
      }),
      styles: {
        ...LoginFormStyles,
      },
    })
  }

  private _hasError: boolean = false

  get hasError() {
    return this._hasError
  }

  set hasError(value: boolean) {
    this._hasError = value
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps.text !== newProps.text) {
      this.children.button.setProps({ text: newProps.text })
    }
    return true
  }

  override render() {
    return LoginPageTemplate
  }
}
