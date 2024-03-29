import LoginFormStyles from './login.module.css'
import { linkContext, titleContext } from './models/context'
import { LoginPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { LoginForm } from '@/features'
import { Divider, Link, Title } from '@/shared/components'

interface LoginProps extends Props {
  loginFormData: Record<string, string>
}

export class Login extends Block {
  constructor(props: LoginProps) {
    super({
      ...props,
      title: new Title({
        ...titleContext,
      }),
      form: new LoginForm({ loginFormData: props.loginFormData }),
      divider: new Divider({
        text: 'OR CONTINUE WITH',
      }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e) => {
            e.preventDefault()
            window.location.href = linkContext.url
          },
        },
      }),
      styles: {
        ...LoginFormStyles,
      },
    })
  }

  override render() {
    return LoginPageTemplate
  }
}
