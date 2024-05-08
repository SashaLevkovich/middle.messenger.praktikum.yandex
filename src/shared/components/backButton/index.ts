import BackButtonStyles from './sideBackButton.module.css'
import { Props, Block } from '../../../app/lib'
import { BackButtonTemplate } from '../../templates'
import { Link } from '../link'

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
          click: (e: Event) => {
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
