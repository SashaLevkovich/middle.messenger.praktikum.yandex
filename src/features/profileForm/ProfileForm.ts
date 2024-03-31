import {
  emailContext,
  fileInputContext,
  lastNameContext,
  loginContext,
  nameContext,
  nameInChatContext,
  phoneContext,
} from './model/context'
import ProfileFormStyles from './profileForm.module.css'
import { ProfileFormTemplate } from './template'
import { Input } from './ui'
import { FileInput } from './ui/fileInput'
import { Block, Props } from '@/app/lib'
import { Validator } from '@/shared/helpers'

interface ProfileProps extends Props {
  profileFormData: Record<string, string>
}

export class ProfileForm extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      fileInput: new FileInput({
        ...fileInputContext,
      }),
      email: new Input({
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
      login: new Input({
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
      name: new Input({
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
      lastname: new Input({
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
      nameInChat: new Input({
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
      phone: new Input({
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
      styles: {
        ...ProfileFormStyles,
      },
    })
  }

  render() {
    return ProfileFormTemplate
  }
}
