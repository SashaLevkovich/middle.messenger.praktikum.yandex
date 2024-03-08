import { trackRouteChanges } from './helpers/renderPage.ts'
import { registerPartials } from './helpers/registerPartials.ts'

import { loginPageContext } from './pages/login/components.ts'
import { signUpPageContext } from './pages/signUp/components.ts'
import { ChatItems, ChatMessage } from './pages/chats/components.ts'
import { profileContext } from './pages/profile/context.ts'
import {
  renderChangePassword,
  renderChats,
  renderError,
  renderLogin,
  renderProfile,
  renderSignUp,
} from './pages'

import * as Templates from './templates/index'

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

if (pinImg) pinImg.src = pinUrl

if (photoImg) photoImg.src = cameraUrl

if (avatarImg) avatarImg.src = avatarUrl
