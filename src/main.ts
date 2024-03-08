import * as Templates from './templates/index'
import { trackRouteChanges } from './helpers/renderPage.ts'
import { registerPartials } from './helpers/registerPartials.ts'

import { renderLogin, renderSignUp } from './pages/index.ts'
import { renderChats } from './pages/chats/chats.ts'
import { loginPageContext } from './pages/login/components.ts'
import { signUpPageContext } from './pages/signUp/components.ts'
import { ChatItems, ChatMessage } from './pages/chats/components.ts'
import { renderProfile } from './pages/profile/profile.ts'
import { profileContext } from './pages/profile/context.ts'
import { renderChangePassword } from './pages/changePassword/changePassword.ts'
import { renderError } from './pages/error/error.ts'

import pinUrl from './assets/icons/pin.svg'
import cameraUrl from './assets/images/camera.png'
import avatarUrl from './assets/icons/photo.svg'

import './style.module.css'

registerPartials(Templates)

export const ROUTE_MAP = {
  '/login': renderLogin(loginPageContext),
  '/signUp': renderSignUp(signUpPageContext),
  '/chats': renderChats({
    children: ChatItems,
    userName: 'Vadim',
    messageData: ChatMessage,
    href: '/profile',
  }),
  '/profile': renderProfile(profileContext),
  '/changePassword': renderChangePassword({}),
  '/notFound': renderError({
    error: '404',
    text: 'not found',
  }),
  '500': renderError({
    error: '500',
    text: 'we are already fixing it',
  }),
}

trackRouteChanges(ROUTE_MAP)

const photoImg = document.getElementById(cameraUrl) as HTMLImageElement
const pinImg = document.getElementById('pin') as HTMLImageElement
const avatarImg = document.getElementById('userAvatarImg') as HTMLImageElement

console.log(avatarImg)

if (pinImg) pinImg.src = pinUrl

if (photoImg) photoImg.src = cameraUrl

if (avatarImg) avatarImg.src = avatarUrl
