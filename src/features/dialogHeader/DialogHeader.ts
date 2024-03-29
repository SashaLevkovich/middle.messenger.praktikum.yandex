import { Block, Props } from '@/app/lib'
import DialogHeaderStyles from './dialogHeader.module.css'
import { DialogHeaderTemplate } from './template'

export class DialogHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      userName: 'Sasha',
      styles: {
        ...DialogHeaderStyles,
      },
    })
  }

  render() {
    return DialogHeaderTemplate
  }
}
