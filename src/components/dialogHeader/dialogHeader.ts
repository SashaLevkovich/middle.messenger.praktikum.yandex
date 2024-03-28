import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'
import { DialogHeaderTemplate } from '@/templates'
import DialogHeaderStyles from './dialog.module.css'

export class DialogHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...DialogHeaderStyles,
      },
    })
  }

  render() {
    return DialogHeaderTemplate
  }
}
