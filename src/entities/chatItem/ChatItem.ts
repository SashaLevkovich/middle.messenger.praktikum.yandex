import ChatItemStyles from './chatItem.module.css'
import { ChatItemTemplate } from './template'
import { Block } from '../../app/lib'
import { ChatController } from '../../widgets/chatList/api/controller'

export class ChatItem extends Block {
  private chatController: ChatController

  constructor({ ...props }) {
    super({
      ...props,
      events: {
        click: () => {
          this.chatController.getChatMessage(props.id, props.title)
        },
      },
      styles: {
        ...ChatItemStyles,
      },
    })

    this.chatController = new ChatController()
  }

  render() {
    return ChatItemTemplate
  }
}
