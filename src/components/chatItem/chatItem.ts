import { ChatItemTemplate } from '@/templates'
import Block from '@/lib/Block'

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
