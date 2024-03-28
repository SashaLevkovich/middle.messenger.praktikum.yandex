import ChatsStyles from './chats.module.css'
import { ChatItem, Link } from '@/components'
import ChatItemStyles from '@/components/chatItem/chatItem.module.css'
import { linkContext } from '@/components/chats/context'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { chatListContext } from '@/pages/chats/context'
import { ChatListTemplate } from '@/templates'

export class Chats extends Block {
  constructor(props: Props) {
    super({
      ...props,
      link: new Link({
        ...linkContext,
        styles: {
          ...ChatsStyles,
        },
      }),
      list: chatListContext.map(
        (chat) => new ChatItem({ ...chat, styles: { ...ChatItemStyles } }),
      ),
      styles: {
        ...ChatsStyles,
      },
    })
  }

  override render() {
    return ChatListTemplate
  }
}
