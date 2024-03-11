import { ITemplateData } from '@/helpers/renderTemplate'
import {
  renderButton,
  renderDivider,
  renderInput,
  renderLink,
  renderTitle,
} from '@/components'
import {
  buttonContext,
  dividerContext,
  linkContext,
  loginContext,
  passwordContext,
  titleContext,
} from './context'

export const Title = renderTitle(titleContext)
export const LoginInput = renderInput(loginContext)
export const PasswordInput = renderInput(passwordContext)
export const LogInButton = renderButton(buttonContext)
export const Divider = renderDivider(dividerContext)
export const Link = renderLink(linkContext)

export const loginPageContext: ITemplateData = {
  children: [Title, LoginInput, PasswordInput, LogInButton, Divider, Link],
}
