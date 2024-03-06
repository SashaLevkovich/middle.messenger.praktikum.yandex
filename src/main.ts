import './style.module.css'
import * as Templates from './templates/index'
import { registerPartials } from './helpers/registerPartials.ts'

import { ITemplateData } from './helpers/renderTemplate.ts'
import { renderLogin } from './pages/login/login.ts'
import {
  Title,
  LoginInput,
  PasswordInput,
  Link,
  EmailInput,
  LastnameInput,
  NameInput,
  PhoneInput,
  SignUpButton,
} from './pages/signUp/components.ts'
import { Divider, LogInButton } from './pages/login/components.ts'
import { renderSignUp } from './pages/signUp/signUp.ts'
import { renderChats } from './pages/chats/chats.ts'
import { ChatItems, ChatMessage } from './pages/chats/components.ts'

registerPartials(Templates)

const loginContext: ITemplateData = {
  children: [Title, LoginInput, PasswordInput, LogInButton, Divider, Link],
}

const singUpContext: ITemplateData = {
  children: [
    Title,
    EmailInput,
    LoginInput,
    NameInput,
    LastnameInput,
    PhoneInput,
    PasswordInput,
    SignUpButton,
    Link,
  ],
}

const loginPage = renderLogin(loginContext)
const singUpPage = renderSignUp(singUpContext)

const chatPage = renderChats({
  children: ChatItems,
  userName: 'Vadim',
  messageData: ChatMessage,
})

if (chatPage) document.body.innerHTML = chatPage
