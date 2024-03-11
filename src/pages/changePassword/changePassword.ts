import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import { ChangePasswordPageTemplate } from '@/templates'

import ButtonStyles from '@/components/button/button.module.css'
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
