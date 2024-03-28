import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { LinkTemplate } from '@/templates'

export class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
    })
  }

  render() {
    return LinkTemplate
  }
}
