import MessageSubmissionPanelStyles from './messageSubmissionPanel.module.css'
import { buttonContext, messageInputContext } from './model/context'
import { RULES } from './model/rules'
import { MessageSubmissionPanelTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { MessageController } from '@/entities/message/api/controller'
import { Button, Input } from '@/shared/components'

export class MessageSubmissionPanel extends Block {
  private messageController: MessageController

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
        onClick: () => {
          this.messageController.sendMessage()
        },
      }),
      styles: {
        ...MessageSubmissionPanelStyles,
      },
    })

    this.messageController = new MessageController()
  }

  render() {
    return MessageSubmissionPanelTemplate
  }
}
