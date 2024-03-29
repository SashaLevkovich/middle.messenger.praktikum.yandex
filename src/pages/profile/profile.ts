import {
  changePassword,
  changeProfile,
  emailContext,
  fileInputContext,
  lastNameContext,
  linkContext,
  loginContext,
  logoutLink,
  nameContext,
  nameInChatContext,
  phoneContext,
  title,
} from './context'
import ProfilePageStyles from './profile.module.css'
import { Button, FileInput, Link, ProfileInput, Title } from '@/components'
import { SideBackButton } from '@/components/sideBackButton/sideBackButton'
import { Validator } from '@/helpers/Validator'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { ProfilePageTemplate } from '@/templates'

interface ProfilePageProps extends Props {
  profileFormData: Record<string, string>
}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super({
      ...props,
      backButton: new SideBackButton({
        ...linkContext,
        onClick: () => {
          window.location.href = '/chats'
          console.log(props.profileFormData)
        },
      }),
      fileInput: new FileInput({
        ...fileInputContext,
      }),
      email: new ProfileInput({
        ...emailContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['email'] = value))
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
      login: new ProfileInput({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['login'] = value))
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
      name: new ProfileInput({
        ...nameContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['name'] = value))
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
      lastname: new ProfileInput({
        ...lastNameContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['lastname'] = value))
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
      nameInChat: new ProfileInput({
        ...nameInChatContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['nameInChat'] = value))
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
      phone: new ProfileInput({
        ...phoneContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['phone'] = value))
        },
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [
          { ruleName: 'required', ruleValue: null },
          { ruleName: 'Phone', ruleValue: null },
        ],
      }),
      title: new Title({
        ...title,
      }),
      changeProfile: new Button({
        ...changeProfile,
      }),
      changePassword: new Button({
        ...changePassword,
      }),
      logoutLink: new Link({
        ...logoutLink,
      }),
      styles: {
        ...ProfilePageStyles,
      },
    })
  }

  render(): string {
    return ProfilePageTemplate
  }
}
