import DialogStyles from './dialog.module.css'
import { DialogTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'
import { Message } from '@/entities/message/Message'
import { DialogHeader } from '@/features/dialogHeader/DialogHeader'
import { MessageSubmissionPanel } from '@/features/messageSubmissionPanel/MessageSubmissionPanel'

export class Dialog extends Block {
  private messages: Message[] = []

  constructor(props: Props) {
    super({
      ...props,
      dialogHeader: new DialogHeader({}),
      panel: new MessageSubmissionPanel({}),
      styles: {
        ...DialogStyles,
      },
    })

    store.subscribe((state) => {
      if (state.messages) {
        this.updateMessages(state.messages)
      }
    })
  }

  private updateMessages(state: string[]) {
    this.messages.forEach((item) => {
      const content = item.getContent()
      if (content) {
        content.remove()
      }
    })

    this.messages = []

    state.forEach((data) => {
      const message = new Message({ content: data })

      this.messages.push(message)
      const content = message.getContent()
      const container = document.getElementById('dialog')
      if (content && container) {
        container.appendChild(content)
      }
    })
  }

  render() {
    return DialogTemplate
  }
}
