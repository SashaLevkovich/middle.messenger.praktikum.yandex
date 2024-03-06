import {
  renderButton,
  renderInput,
  renderLink,
  renderTitle,
} from '../../components'
import {
  buttonContext,
  emailContext,
  lastNameContext,
  linkContext,
  loginContext,
  nameContext,
  passwordContext,
  phoneContext,
  titleContext,
} from './context'

export const Title = renderTitle(titleContext)
export const LoginInput = renderInput(loginContext)
export const EmailInput = renderInput(emailContext)
export const NameInput = renderInput(nameContext)
export const LastnameInput = renderInput(lastNameContext)
export const PhoneInput = renderInput(phoneContext)
export const PasswordInput = renderInput(passwordContext)
export const SignUpButton = renderButton(buttonContext)
export const Link = renderLink(linkContext)
