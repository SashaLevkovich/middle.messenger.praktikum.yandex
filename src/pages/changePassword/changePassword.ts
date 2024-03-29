import ChangePasswordStyles from './changePassword.module.css'
import { Button, Divider, ProfileInput } from '@/components'
import { SideBackButton } from '@/components/sideBackButton/sideBackButton'
import { Validator } from '@/helpers/Validator'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import {
  buttonContext,
  linkContext,
  newPasswordContext,
  newPasswordRepeatContext,
  oldPasswordContext,
} from '@/pages/changePassword/context'
import ProfileStyles from '@/pages/profile/profile.module.css'
import { ChangePasswordPageTemplate } from '@/templates'

interface ChangePasswordPageProps extends Props {
  changePasswordFormData: Record<string, string>
}

export class ChangePasswordPage extends Block {
  constructor(props: ChangePasswordPageProps) {
    super({
      ...props,
      oldPassword: new ProfileInput({
        ...oldPasswordContext,
        onChange: (value: string) => {
          this.setProps((props.changePasswordFormData['oldPassword'] = value))
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
          ...ProfileStyles,
        },
      }),
      newPassword: new ProfileInput({
        ...newPasswordContext,
        onChange: (value: string) => {
          this.setProps((props.changePasswordFormData['newPassword'] = value))
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
          ...ProfileStyles,
        },
      }),
      newPasswordRepeat: new ProfileInput({
        ...newPasswordRepeatContext,
        onChange: (value: string) => {
          this.setProps(
            (props.changePasswordFormData['repeatNewPassword'] = value),
          )
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
          ...ProfileStyles,
        },
      }),
      oldPasswordLabel: new Divider({
        text: 'Old Password',
        className: ` ${ChangePasswordStyles.changePasswordDivider}`,
      }),
      newPasswordLabel: new Divider({
        text: 'New Password',
        className: ` ${ChangePasswordStyles.changePasswordDivider}`,
      }),
      newPasswordRepeatLabel: new Divider({
        text: 'Repeat New Password',
        className: ` ${ChangePasswordStyles.changePasswordDivider}`,
      }),
      button: new Button({
        ...buttonContext,
      }),
      backButton: new SideBackButton({
        ...linkContext,
        onClick: () => {
          window.location.href = '/profile'
          console.log(props.changePasswordFormData)
        },
        styles: {
          ...ProfileStyles,
        },
      }),
      styles: {
        ...ChangePasswordStyles,
      },
    })
  }

  override render() {
    return ChangePasswordPageTemplate
  }
}
