import './style.module.css'
import * as Templates from './templates/index'
import { registerPartials } from './helpers/registerPartials.ts'
import {
  Divider,
  Link,
  LogInButton,
  LoginInput,
  PasswordInput,
  Title,
  renderLoginForm,
} from './pages/login/loginForm.ts'
import { ITemplateData } from './helpers/renderTemplate.ts'

registerPartials(Templates)
registerPartials({ InputTemplate: Templates.InputTemplate })

const context: ITemplateData = {
  children: [Title, LoginInput, PasswordInput, LogInButton, Divider, Link],
}

const html = renderLoginForm(context)

if (html) document.body.innerHTML = html
