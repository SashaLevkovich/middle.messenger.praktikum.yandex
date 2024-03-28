import { Link } from '@/components'
import SideBackButtonStyles from '@/components/sideBackButton/sideBackButton.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { linkContext } from '@/pages/changePassword/context'
import { SideBackButtonTemplate } from '@/templates'

export class SideBackButton extends Block {
  constructor(props: Props) {
    super({
      ...props,
      link: new Link({
        ...linkContext,
        events: {
          click: (e) => {
            e.preventDefault()
            window.location.href = '/signUp'
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
