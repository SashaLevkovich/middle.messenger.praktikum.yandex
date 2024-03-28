import SingUpStyles from './signUp.module.css'
import { Button, Input, Link, Title } from '@/components'
import ButtonStyles from '@/components/button/button.module.css'
import LinkStyles from '@/components/link/link.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { buttonContext } from '@/pages/login/context'
import {
  emailContext,
  lastNameContext,
  linkContext,
  loginContext,
  nameContext,
  passwordContext,
  phoneContext,
  titleContext,
} from '@/pages/signUp/context'
import { SignUpPageTemplate } from '@/templates'

export class SignUpPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      title: new Title({
        ...titleContext,
      }),
      email: new Input({
        ...emailContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          this.setProps({ buttonText: value })
        },
      }),
      button: new Button({
        ...buttonContext,
        events: {
          click: (e) => {
            e.preventDefault()
            window.location.href = '/chats'
          },
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
            window.location.href = '/login'
          },
        },
        styles: {
          ...LinkStyles,
        },
      }),
      styles: {
        ...SingUpStyles,
      },
    })
  }

  componentDidUpdate(
    _oldProps: { buttonText: string },
    _newProps: { buttonText: string },
  ) {
    if (_oldProps?.buttonText !== _newProps?.buttonText) {
      this.children.button.setProps({ text: _newProps?.buttonText })
    }

    return true
  }

  override render() {
    return SignUpPageTemplate
  }
}
