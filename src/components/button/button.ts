import { ButtonTemplate } from '@/templates'

import Block from '@/lib/Block'

import { Props } from '@/lib/types'

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
