import { Block } from '@/app/lib'
import ChatItemStyles from './chatItem.module.css'
import { ChatItemTemplate } from './template'

export class ChatItem extends Block {
  constructor({ ...props }) {
    super({
      ...props,
      styles: {
        ...ChatItemStyles,
      },
    })
  }

  render() {
    return ChatItemTemplate
  }
}
