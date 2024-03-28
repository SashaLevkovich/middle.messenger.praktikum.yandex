import DialogHeaderStyles from './dialog.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { DialogHeaderTemplate } from '@/templates'

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
