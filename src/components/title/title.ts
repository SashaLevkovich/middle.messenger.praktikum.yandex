import { TitleTemplate } from '@/templates/title'
import TitleStyles from './title.module.css'
import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'

export class Title extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...TitleStyles,
      },
    })
  }

  render() {
    return TitleTemplate
  }
}
