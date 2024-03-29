import DividerStyles from './divider.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { DividerTemplate } from '@/templates/divider'

export class Divider extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...DividerStyles,
      },
    })
  }

  render() {
    return DividerTemplate
  }
}
