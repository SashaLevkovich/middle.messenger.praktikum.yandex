import ChangePasswordStyles from './changePassword.module.css'
import { linkContext } from './models/context'
import { ChangePasswordPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { ChangePasswordForm } from '@/features'
import { BackButton } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

interface ChangePasswordProps extends Props {
  changePasswordFormData: Record<string, string>
}

export class ChangePassword extends Block {
  constructor(props: ChangePasswordProps) {
    super({
      ...props,
      form: new ChangePasswordForm({
        changePasswordFormData: props.changePasswordFormData,
      }),
      backButton: new BackButton({
        ...linkContext,
        onClick: () => {
          router.go('/settings')
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
