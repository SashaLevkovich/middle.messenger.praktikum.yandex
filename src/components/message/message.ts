import Block from '@/lib/Block'
import { MessageTemplate } from '@/templates'

export class Message extends Block {
  constructor({ ...props }) {
    super({
      ...props,
    })
  }

  render() {
    return MessageTemplate
  }
}
