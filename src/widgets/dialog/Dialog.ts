import { Block, Props } from '@/app/lib'
import { Message } from '@/entities/message/Message'
import { DialogHeader } from '@/features/dialogHeader/DialogHeader'
import { MessageSubmissionPanel } from '@/features/messageSubmissionPanel/MessageSubmissionPanel'
import DialogStyles from './dialog.module.css'
import { messageContext } from './models/context'
import { DialogTemplate } from './template'

export class Dialog extends Block {
  constructor(props: Props) {
    super({
      ...props,
      dialogHeader: new DialogHeader({}),
      messages: messageContext.map(
        (message) =>
          new Message({
            ...message,
          }),
      ),
      panel: new MessageSubmissionPanel({}),
      styles: {
        ...DialogStyles,
      },
    })
  }

  render() {
    return DialogTemplate
  }
}
