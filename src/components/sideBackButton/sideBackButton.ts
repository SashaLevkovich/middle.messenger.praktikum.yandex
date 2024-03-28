import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'
import { SideBackButtonTemplate } from '@/templates'
import SideBackButtonStyles from '@/components/sideBackButton/sideBackButton.module.css'
import { Link } from '@/components'
import { linkContext } from '@/pages/changePassword/context.ts'

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
