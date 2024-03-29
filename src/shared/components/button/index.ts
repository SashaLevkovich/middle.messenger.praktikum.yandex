import { Block } from '@/app/lib'
import { Props } from '@/app/lib/types'
import { ButtonTemplate } from '@/shared/templates'

interface ButtonProps extends Props {
  onClick?: (e: Event) => void
}

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