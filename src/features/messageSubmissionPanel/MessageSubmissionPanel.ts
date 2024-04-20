import MessageSubmissionPanelStyles from './messageSubmissionPanel.module.css'
import { buttonContext, messageInputContext } from './model/context'
import { RULES } from './model/rules'
import { MessageSubmissionPanelTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { Button, Input } from '@/shared/components'
import { ChatController } from '@/widgets/chatList/api/controller'

export class MessageSubmissionPanel extends Block {
  private chatController: ChatController

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
          this.chatController.sendMessage()
        },
        onSubmit: (e) => {
          e.preventDefault()
          this.chatController.sendMessage()
        },
      }),
      styles: {
        ...MessageSubmissionPanelStyles,
      },
    })

    this.chatController = new ChatController()
  }

  render() {
    return MessageSubmissionPanelTemplate
  }
}
