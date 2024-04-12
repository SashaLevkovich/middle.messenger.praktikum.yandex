import { ButtonTemplate } from './template'
import { ButtonProps } from './type'
import { Block } from '@/app/lib'

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e) => {
          if (props.onClick) {
            props.onClick(e)
          }
        },
      },
    })
  }

  render() {
    return ButtonTemplate
  }
}
