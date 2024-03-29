import DialogHeaderStyles from './dialogHeader.module.css'
import { DialogHeaderTemplate } from './template'
import { Block, Props } from '@/app/lib'

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
