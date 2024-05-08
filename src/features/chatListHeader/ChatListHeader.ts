import ChatListHeaderStyles from './chatListHeader.module.css'
import { linkContext, searchContext } from './models/context'

import { ChatListHeaderTemplate } from './template'

import { Block, Props } from '../../app/lib'
import { Input, Link } from '../../shared/components'
import { router } from '../../shared/helpers/routes'
import { ChatController } from '../../widgets/chatList/api/controller'

export class ChatListHeader extends Block {
  private chatController: ChatController

  constructor(props: Props) {
    super({
      ...props,
      search: new Input({
        ...searchContext,
        styles: {
          ...ChatListHeaderStyles,
        },
      }),
      addChat: new Link({
        text: 'Add Chat',
        events: {
          click: (e: Event) => {
            e.preventDefault()
            this.chatController.addChat()
          },
        },
        styles: {
          ...ChatListHeaderStyles,
        },
      }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e: Event) => {
            e.preventDefault()
            router.go('/settings')
          },
        },
        styles: {
          ...ChatListHeaderStyles,
        },
      }),
      styles: {
        ...ChatListHeaderStyles,
      },
    })

    this.chatController = new ChatController()
  }

  render() {
    return ChatListHeaderTemplate
  }
}
