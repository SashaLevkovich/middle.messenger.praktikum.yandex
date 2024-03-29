import { Block, Props } from '@/app/lib'
import { TitleTemplate } from '@/shared/templates'
import TitleStyles from './title.module.css'

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
