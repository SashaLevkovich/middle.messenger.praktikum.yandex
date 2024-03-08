import { ITemplateData } from '@/helpers/renderTemplate'

import cameraUrl from '@/assets/images/camera.png'

export interface IChatItem extends ITemplateData {
  avatar?: string
  userName: string
  message: string
  time: string
  badge?: number
}

export type TChatsList = IChatItem[]

export const chatListContext: TChatsList = [
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Киноклуб',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
    badge: 2,
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: '1, 2, 3',
    message: 'Test',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Sasha',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
  {
    userName: 'Design Destroyer',
    message: 'Cool!',
    time: '10:22',
  },
]

export const messageContext = [
  {
    message:
      'Hello! Look, an interesting piece of lunar space history has surfaced here - NASA at one point asked Hasselblad to adapt the SWC model for missions to the Moon. Now we all know that the astronauts flew with the 500 EL model - and by the way, all the carcasses of these cameras are still on the surface of the Moon, since the astronauts took only film cassettes with them. Hasselblad eventually adapted the SWC for space, but something went wrong and they never made it onto a rocket. A total of 25 were produced, one of which was recently sold at auction for 45,000 euros.',
    dispatchTime: '12:21',
  },
  {
    imgSrc: cameraUrl,
    id: cameraUrl,
    dispatchTime: '12:22',
  },
]
