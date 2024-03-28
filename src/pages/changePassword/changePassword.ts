import ProfileStyles from '@/pages/profile/profile.module.css'
import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'
import { Button, ProfileInput } from '@/components'
import {
  buttonContext,
  linkContext,
  newPasswordContext,
  newPasswordRepeatContext,
  oldPasswordContext,
} from '@/pages/changePassword/context'
import { ChangePasswordPageTemplate } from '@/templates'
import { SideBackButton } from '@/components/sideBackButton/sideBackButton.ts'

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
