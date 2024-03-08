import { renderTemplate, ITemplateData } from '@/helpers/renderTemplate.ts'
import { FormTemplate } from '@/templates/index.ts'
import LoginFormStyles from './login.module.css'

export const renderLogin = (
  loginContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const Login = renderTemplate({
    template: FormTemplate,
    styles: { ...LoginFormStyles, ...styles },
    context: loginContext,
  })

  return Login
}

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton')
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      window.location.href = '/chats'
    })
  }
})
