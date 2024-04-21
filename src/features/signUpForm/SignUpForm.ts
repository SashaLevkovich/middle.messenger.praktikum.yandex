import {
  buttonContext,
  emailContext,
  lastNameContext,
  loginContext,
  nameContext,
  passwordContext,
  phoneContext,
} from './models/context'
import { RULES } from './models/rules'
import SingUpFormStyles from './signUpForm.module.css'
import { SignUpFormTemplate } from './templates'
import { Block, Props } from '@/app/lib'
import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'
import { Button, Input } from '@/shared/components'

interface SignUpFormProps extends Props {
  signUpFormData: Record<string, string>
}

export class SignUpForm extends Block {
  private userController: UserController

  constructor(props: SignUpFormProps) {
    super({
      ...props,
      email: new Input({
        ...emailContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ email: value }))
        },
        rules: RULES.email,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.login,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ first_name: value }))
        },
        rules: RULES.name,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ second_name: value }))
        },
        rules: RULES.lastname,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ phone: value }))
        },
        rules: RULES.phone,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ password: value }))
        },
        rules: RULES.password,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          e.preventDefault()
          this.userController.signup()
        },
        styles: {
          ...SingUpFormStyles,
        },
      }),
      styles: {
        ...SingUpFormStyles,
      },
    })

    this.userController = new UserController()
  }

  override render() {
    return SignUpFormTemplate
  }
}
