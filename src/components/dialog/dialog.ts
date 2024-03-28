import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'
import { DialogTemplate } from '@/templates'
import { DialogHeader } from '@/components/dialogHeader/dialogHeader.ts'
import DialogStyles from './dialog.module.css'
import { Message } from '@/components/message/message.ts'
import MessageStyles from '@/components/message/message.module.css'
import { messageContext } from '@/pages/chats/context.ts'

export class Dialog extends Block {
  constructor(props: Props) {
    super({
      ...props,
      dialogHeader: new DialogHeader({
        userName: 'Sasha',
      }),
      messages: messageContext.map(
        (message) =>
          new Message({
            ...message,
            styles: {
              ...MessageStyles,
            },
          }),
      ),
      styles: {
        ...DialogStyles,
      },
    })
  }

  render() {
    return DialogTemplate
  }
}
