import BackButtonStyles from './sideBackButton.module.css'
import { Link } from '../link'
import { Block, Props } from '@/app/lib'
import { BackButtonTemplate } from '@/shared/templates'

interface BackButtonProps extends Props {
  onClick?: () => void
}

export class BackButton extends Block {
  constructor(props: BackButtonProps) {
    super({
      ...props,
      link: new Link({
        ...props,
        events: {
          click: (e) => {
            e.preventDefault()

            if (props.onClick) {
              props.onClick()
            }
          },
        },
      }),
      styles: {
        ...BackButtonStyles,
      },
    })
  }

  render() {
    return BackButtonTemplate
  }
}
