import { renderTemplate, ITemplateData } from '../../helpers/renderTemplate.ts'
import { LoginFormTemplate } from '../../templates/index.ts'
import LoginFormStyles from './loginForm.module.css'
import ContainerStyles from '../../templates/container/container.module.css'
import {
  renderInput,
  renderTitle,
  renderButton,
  renderDivider,
  renderLink,
} from '../../components/index.ts'
import {
  buttonContext,
  loginContext,
  passwordContext,
  titleContext,
  dividerContext,
  linkContext,
} from './context.ts'

export const Title = renderTitle(titleContext)
export const LoginInput = renderInput(loginContext)
export const PasswordInput = renderInput(passwordContext)
export const LogInButton = renderButton(buttonContext)
export const Divider = renderDivider(dividerContext)
export const Link = renderLink(linkContext)

export const renderLoginForm = (
  loginFormContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const LoginForm = renderTemplate({
    template: LoginFormTemplate,
    styles: { ...ContainerStyles, ...LoginFormStyles, ...styles },
    context: loginFormContext,
  })

  return LoginForm
}
