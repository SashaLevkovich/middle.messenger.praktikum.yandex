import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import { ProfiePageTempale } from '@/templates'
import ProfileStyles from './profile.module.css'
import FileInputStyles from '@/components/fileInput/fileInput.module.css'
import TitleStyles from '@/components/title/title.module.css'

document.addEventListener('DOMContentLoaded', () => {
  const changeButton = document.getElementById('changeProfileButton')
  const changePasswordButton = document.getElementById('changePasswordButton')
  const inputs = document.querySelectorAll('input')

  if (changePasswordButton) {
    changePasswordButton.addEventListener('click', () => {
      window.location.href = '/changePassword'
    })
  }

  changeButton?.addEventListener('click', () => {
    inputs.forEach((input) => {
      if (input.disabled) {
        input.removeAttribute('disabled')
        input.style.color = '#fff'
        input.style.fontSize = '16px'

        changeButton.textContent = 'Save change'
      } else {
        input.disabled = true
        input.removeAttribute('style')

        changeButton.textContent = 'Change profile'
      }
    })
  })
})

export const renderProfile = (
  profileContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const Profile = renderTemplate({
    template: ProfiePageTempale,
    styles: { ...FileInputStyles, ...TitleStyles, ...ProfileStyles, ...styles },
    context: profileContext,
  })

  return Profile
}
