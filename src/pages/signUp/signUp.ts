import SingUpStyles from './signUp.module.css'
import { Button, Input, Link, Title } from '@/components'
import ButtonStyles from '@/components/button/button.module.css'
import InputStyles from '@/components/input/input.module.css'
import LinkStyles from '@/components/link/link.module.css'
import { Validator } from '@/helpers/Validator'
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

interface SignUpPageProps extends Props {
  signUpFormData: Record<string, string>
}

export class SignUpPage extends Block {
  constructor(props: SignUpPageProps) {
    super({
      ...props,
      title: new Title({
        ...titleContext,
      }),
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
        styles: {
          ...InputStyles,
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
        styles: {
          ...InputStyles,
        },
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
        styles: {
          ...InputStyles,
        },
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
        styles: {
          ...InputStyles,
        },
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
        styles: {
          ...InputStyles,
        },
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
        styles: {
          ...InputStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: () => {
          window.location.href = '/chats'
          console.log(props.signUpFormData)
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

  override render() {
    return SignUpPageTemplate
  }
}
