import LinkStyles from './link.module.css'
import { Block, Props } from '@/app/lib'
import { LinkTemplate } from '@/shared/templates'

export class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...LinkStyles,
        ...props.styles,
      },
    })
  }

  render() {
    return LinkTemplate
  }
}
