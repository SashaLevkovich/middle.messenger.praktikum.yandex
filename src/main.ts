import avatarUrl from './app/assets/icons/photo.svg'
import pinUrl from './app/assets/icons/pin.svg'
import cameraUrl from './app/assets/images/camera.png'
import { ROUTE_MAP } from './shared/helpers'

import { registerPartials } from './shared/helpers/registerPartials'

import * as Templates from './shared/templates/index'

import './style.module.css'
import { trackRouteChanges } from '@/shared/helpers/renderPage'

registerPartials(Templates)

trackRouteChanges(ROUTE_MAP)

const photoImg = document.getElementById(cameraUrl) as HTMLImageElement
const pinImg = document.getElementById('pin') as HTMLImageElement
const avatarImg = document.getElementById('userAvatarImg') as HTMLImageElement

if (pinImg) pinImg.src = pinUrl
if (photoImg) photoImg.src = cameraUrl
if (avatarImg) avatarImg.src = avatarUrl

// class Button extends Block {
//   constructor(props: Props) {
//     super({
//       ...props,
//       events: {
//         click: () => console.log('event'),
//       },
//     })
//   }
//
//   render() {
//     return '<button>{{text}}</button>'
//   }
// }
//
// class Input extends Block {
//   constructor(props: Props) {
//     super({
//       ...props,
//       events: {
//         change: (e) => props.onChange(e.target.value),
//       },
//       attr: {
//         class: 'fake',
//       },
//     })
//   }
//
//   render() {
//     return `<input />`
//   }
//
//   validate() {
//     console.log('blur')
//   }
// }
//
// class Page extends Block {
//   constructor(props: Props) {
//     super({
//       ...props,
//       button: new Button({ text: props.buttonText }),
//       input: new Input({
//         onChange: (value: string) => {
//           this.setProps({ buttonText: value })
//         },
//         events: {
//           blur: () => this.validate(),
//         },
//       }),
//     })
//   }
//
//   validate() {
//     console.log('blur')
//   }
//
//   componentDidUpdate(oldProps: any, newProps: any) {
//     if (oldProps.buttonText !== newProps.buttonText) {
//       this.children.button.setProps({ text: newProps.buttonText })
//     }
//     return true
//   }
//
//   override render() {
//     return '<div>{{{ button }}} {{{ input }}}</div>'
//   }
// }
//
// const loginFormData = {
//   login: '',
//   password: '',
// }

// const block = new LoginPage({ loginFormData })
// const container = document.getElementById('root')!
// container.append(block.getContent()!)
