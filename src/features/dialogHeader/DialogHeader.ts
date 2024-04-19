import DialogHeaderStyles from './dialogHeader.module.css'
import { DialogHeaderTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'

export class DialogHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...DialogHeaderStyles,
      },
    })

    store.subscribe((state) => {
      this.updateTitle(state.activeChat)
    })
  }

  updateTitle(state: string) {
    return this.setProps({ userName: state })
  }

  render() {
    return DialogHeaderTemplate
  }
}
