import ChangePasswordStyles from './changePassword.module.css'
import { linkContext } from './models/context'
import { ChangePasswordPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { ChangePasswordForm } from '@/features'
import { BackButton } from '@/shared/components'

interface ChangePasswordPageProps extends Props {
  changePasswordFormData: Record<string, string>
}

export class ChangePasswordPage extends Block {
  constructor(props: ChangePasswordPageProps) {
    super({
      ...props,
      form: new ChangePasswordForm({
        changePasswordFormData: props.changePasswordFormData,
      }),
      backButton: new BackButton({
        ...linkContext,
        onClick: () => {
          window.location.href = '/profile'
          console.log(props.changePasswordFormData)
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
