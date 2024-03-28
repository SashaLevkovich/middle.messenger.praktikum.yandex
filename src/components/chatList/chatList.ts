import { Props } from '@/lib/types.ts'
import { ChatItem, Link } from '@/components'
import { linkContext } from '@/components/chats/context.ts'
import ChatsStyles from '@/components/chats/chats.module.css'
import { chatListContext } from '@/pages/chats/context.ts'
import ChatItemStyles from '@/components/chatItem/chatItem.module.css'
import { ChatListTemplate } from '@/templates'
import Block from '@/lib/Block.ts'

export class ChatList extends Block {
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
