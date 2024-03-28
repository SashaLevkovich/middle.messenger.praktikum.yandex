import { MessageTemplate } from '@/templates'
import Block from '@/lib/Block.ts'

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
