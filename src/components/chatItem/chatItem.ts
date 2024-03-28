import Block from '@/lib/Block'
import { ChatItemTemplate } from '@/templates'

export class ChatItem extends Block {
  constructor({ ...props }) {
    super({
      ...props,
    })
  }

  render() {
    return ChatItemTemplate
  }
}
