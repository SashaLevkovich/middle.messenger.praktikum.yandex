import avatarUrl from './app/assets/icons/photo.svg'
import pinUrl from './app/assets/icons/pin.svg'
import cameraUrl from './app/assets/images/camera.png'
import { ROUTE_MAP, trackRouteChanges } from './shared/helpers'

import { registerPartials } from './shared/helpers/registerPartials'

import * as Templates from './shared/templates/index'

import './style.module.css'

registerPartials(Templates)

trackRouteChanges(ROUTE_MAP)

const photoImg = document.getElementById(cameraUrl) as HTMLImageElement
const pinImg = document.getElementById('pin') as HTMLImageElement
const avatarImg = document.getElementById('userAvatarImg') as HTMLImageElement

if (pinImg) pinImg.src = pinUrl
if (photoImg) photoImg.src = cameraUrl
if (avatarImg) avatarImg.src = avatarUrl
