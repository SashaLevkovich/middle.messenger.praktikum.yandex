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
import { Button, Input } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

interface SignUpFormProps extends Props {
  signUpFormData: Record<string, string>
}

export class SignUpForm extends Block {
  constructor(props: SignUpFormProps) {
    super({
      ...props,
      email: new Input({
        ...emailContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['email'] = value))
        },
        rules: RULES.email,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['login'] = value))
          this.setProps({
            value,
          })
        },
        rules: RULES.login,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['name'] = value))
        },
        rules: RULES.name,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['lastname'] = value))
        },
        rules: RULES.lastname,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['phone'] = value))
        },
        rules: RULES.phone,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['password'] = value))
        },
        rules: RULES.password,
        styles: {
          ...SingUpFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: () => {
          router.go('/messenger')
        },
        styles: {
          ...SingUpFormStyles,
        },
      }),
      styles: {
        ...SingUpFormStyles,
      },
    })
  }

  override render() {
    return SignUpFormTemplate
  }
}
