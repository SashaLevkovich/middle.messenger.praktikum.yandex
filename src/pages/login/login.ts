import LoginFormStyles from './login.module.css'
import { Button, Input, Link, Title } from '@/components'
import ButtonStyles from '@/components/button/button.module.css'
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
          return validator.validate(value, rules)
        },
        loginRules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'min_length', ruleValue: 5 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          window.location.href = '/chats'
          e.preventDefault()
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
