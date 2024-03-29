import ButtonStyles from './button.module.css'
import { Block, Props } from '@/app/lib'
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
      styles: {
        ...ButtonStyles,
      },
    })
  }

  render() {
    return ButtonTemplate
  }
}
