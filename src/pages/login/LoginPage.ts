import LoginFormStyles from './login.module.css'
import { linkContext, titleContext } from './models/context'
import { LoginPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'

import { LoginForm } from '@/features'
import { Divider, Link, Title } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'

import { router } from '@/shared/helpers/routes'

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
      form: new LoginForm({
        login: store.getState().userConfig.login,
        password: store.getState().userConfig.password,
      }),
      divider: new Divider({
        text: 'OR CONTINUE WITH',
      }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e) => {
            e.preventDefault()
            router.go('/sign-up')
          },
        },
      }),
      styles: {
        ...LoginFormStyles,
      },
    })
  }

  override init() {
    super.init()

    this.componentDidMount()
  }

  override async componentDidMount() {
    const userController = new UserController()
    const user = await userController.getUser()
    console.log(store.getState())

    if (isEmpty(user)) {
      router.go('/')
    } else {
      router.go('/messenger')
    }
  }

  override render() {
    return LoginPageTemplate
  }
}
