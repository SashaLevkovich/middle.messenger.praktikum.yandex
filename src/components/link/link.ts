import { LinkTemplate } from '@/templates'

import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'

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
