import { ButtonTemplate } from './template'
import { ButtonProps } from './type'
import { Block } from '../../../app/lib'

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          if (props.onClick) {
            props.onClick(e)
          }
        },
        submit: (e: Event) => {
          e.preventDefault()

          if (props.onSubmit) {
            console.log(1)

            props.onSubmit(e)
          }
        },
      },
    })
  }

  render() {
    return ButtonTemplate
  }
}
