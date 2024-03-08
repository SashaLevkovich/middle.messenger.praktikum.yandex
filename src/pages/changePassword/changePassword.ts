import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { ChangePasswordPageTemplate } from '@/templates/changePasswordPage'
import ButtonStyles from '@/components/button/button.module.css'
import ChangePasswordStyles from './changePassword.module.css'
import ProfileStyles from '@/pages/profile/profile.module.css'

export const renderChangePassword = (
  changePasswordContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const ChangePassword = renderTemplate({
    template: ChangePasswordPageTemplate,
    styles: {
      ...ProfileStyles,
      ...ButtonStyles,
      ...ChangePasswordStyles,
      ...styles,
    },
    context: changePasswordContext,
  })

  return ChangePassword
}

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('saveChangePasswordButton')
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      window.location.href = '/profile'
    })
  }
})
