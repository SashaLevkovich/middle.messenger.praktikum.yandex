import DialogStyles from './dialog.module.css'
import { DialogHeader } from '@/components/dialogHeader/dialogHeader'
import { Message } from '@/components/message/message'
import MessageStyles from '@/components/message/message.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { messageContext } from '@/pages/chats/context'
import { DialogTemplate } from '@/templates'

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
