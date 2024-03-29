import DividerStyles from './divider.module.css'
import { Block, Props } from '@/app/lib'
import { DividerTemplate } from '@/shared/templates'

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
