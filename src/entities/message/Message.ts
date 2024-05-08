import MessageStyles from './message.module.css'
import { MessageTemplate } from './template'
import { Block, Props } from '../../app/lib'

export class Message extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...MessageStyles,
      },
    })
  }

  render() {
    return MessageTemplate
  }
}
