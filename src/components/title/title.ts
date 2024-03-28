import TitleStyles from './title.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { TitleTemplate } from '@/templates/title'

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
