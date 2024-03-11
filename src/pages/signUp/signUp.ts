import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import SingUpStyles from './signUp.module.css'
import { FormTemplate } from '@/templates'

export const renderSignUp = (
  signUpContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const SignUp = renderTemplate({
    template: FormTemplate,
    styles: { ...SingUpStyles, ...styles },
    context: signUpContext,
  })

  return SignUp
}

document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUpButton')
  if (signUpButton) {
    signUpButton.addEventListener('click', () => {
      window.location.href = '/chats'
    })
  }
})
