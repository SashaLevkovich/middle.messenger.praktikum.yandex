import {
  buttonContext,
  emailContext,
  lastNameContext,
  loginContext,
  nameContext,
  passwordContext,
  phoneContext,
} from './models/context'
import SingUpFormStyles from './signUpForm.module.css'
import { SignUpFormTemplate } from './templates'
import { Button, Input } from './ui'
import { Block, Props } from '@/app/lib'
import { Validator } from '@/shared/helpers'

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
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'Email', ruleValue: null },
        ],
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['login'] = value))
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
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'min_length', ruleValue: 5 },
          { ruleName: 'Login', ruleValue: null },
        ],
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['name'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'Name', ruleValue: true },
        ],
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['lastname'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'Name', ruleValue: true },
        ],
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['phone'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'Phone', ruleValue: true },
        ],
      }),
      password: new Input({
        ...passwordContext,
        onChange: (value: string) => {
          this.setProps((props.signUpFormData['password'] = value))
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
        onClick: () => {
          window.location.href = '/chats'
          console.log(props.signUpFormData)
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
