import { Link } from '@/components'
import SideBackButtonStyles from '@/components/sideBackButton/sideBackButton.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { linkContext } from '@/pages/changePassword/context'
import { SideBackButtonTemplate } from '@/templates'

interface SideBackButtonProps extends Props {
  onClick?: () => void
}

export class SideBackButton extends Block {
  constructor(props: SideBackButtonProps) {
    super({
      ...props,
      link: new Link({
        ...linkContext,
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
        ...SideBackButtonStyles,
      },
    })
  }

  render() {
    return SideBackButtonTemplate
  }
}
