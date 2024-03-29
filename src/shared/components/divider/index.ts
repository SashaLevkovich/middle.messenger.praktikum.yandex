import { Block, Props } from '@/app/lib'
import { DividerTemplate } from '@/shared/templates'
import DividerStyles from './divider.module.css'

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
