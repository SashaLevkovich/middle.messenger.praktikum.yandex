import { Button, ProfileInput } from '@/components'
import { SideBackButton } from '@/components/sideBackButton/sideBackButton'
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

export class ChangePasswordPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      oldPassword: new ProfileInput({
        ...oldPasswordContext,
        ProfileStyles,
      }),
      newPassword: new ProfileInput({
        ...newPasswordContext,
        ProfileStyles,
      }),
      newPasswordRepeat: new ProfileInput({
        ...newPasswordRepeatContext,
        ProfileStyles,
      }),
      button: new Button({
        ...buttonContext,
      }),
      backButton: new SideBackButton({
        ...linkContext,
      }),
      styles: {
        ...ProfileStyles,
      },
    })
  }

  override render() {
    console.log(ProfileStyles)
    return ChangePasswordPageTemplate
  }
}
