import MessageSubmissionPanelStyles from './messageSubmissionPanel.module.css'
import { buttonContext, messageInputContext } from './model/context'
import { RULES } from './model/rules'
import { MessageSubmissionPanelTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'
import { MessageController } from '@/entities/message/api/controller'
import { Button, Input } from '@/shared/components'

export class MessageSubmissionPanel extends Block {
  private messageController: MessageController
  private socket: WebSocket

  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        ...messageInputContext,
        rules: RULES,
        styles: {
          ...MessageSubmissionPanelStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        styles: {
          ...MessageSubmissionPanelStyles,
        },
        onClick: (e) => {
          e.preventDefault()
          this.messageController.sendMessage(this.socket)
        },
        onSubmit: (e) => {
          e.preventDefault()
          this.messageController.sendMessage(this.socket)
        },
      }),
      styles: {
        ...MessageSubmissionPanelStyles,
      },
    })

    this.socket = store.getState().socket as WebSocket

    this.messageController = new MessageController()
  }

  render() {
    return MessageSubmissionPanelTemplate
  }
}
