import Block from '@/lib/Block'

import { Props } from '@/lib/types'
import { ButtonTemplate } from '@/templates'

interface ButtonProps extends Props {
  onClick?: () => void
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e) => {
          e.preventDefault()

          if (props.onClick) {
            props.onClick()
          }
        },
      },
    })
  }

  render() {
    return ButtonTemplate
  }
}
