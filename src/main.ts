import pinUrl from './app/assets/icons/pin.svg'
import cameraUrl from './app/assets/images/camera.png'

import { registerPartials } from './shared/helpers/registerPartials'
import {
  router,
  loginPage,
  signPagePage,
  profilePage,
  chatsPage,
  changePasswordPage,
} from './shared/helpers/routes'

import * as Templates from './shared/templates/index'

import './style.module.css'

registerPartials(Templates)

const photoImg = document.getElementById(cameraUrl) as HTMLImageElement
const pinImg = document.getElementById('pin') as HTMLImageElement

if (pinImg) pinImg.src = pinUrl
if (photoImg) photoImg.src = cameraUrl

router
  .use('/', loginPage)
  .use('/sign-up', signPagePage)
  .use('/messenger', chatsPage)
  .use('/settings', profilePage)
  .use('/change-password', changePasswordPage)
  .start()
