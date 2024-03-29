import { Block, Props } from '@/app/lib'
import { LinkTemplate } from '@/shared/templates'
import LinkStyles from './link.module.css'

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
