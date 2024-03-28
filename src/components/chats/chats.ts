import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { Link } from '@/components'
import { ChatListTemplate } from '@/templates'
import { linkContext } from '@/components/chats/context'
import ChatsStyles from './chats.module.css'
import ChatItemStyles from '@/components/chatItem/chatItem.module.css'
import { ChatList } from '@/components/chatList/chatList.ts'

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
      list: new ChatList({ styles: { ...ChatItemStyles } }),
      styles: {
        ...ChatsStyles,
      },
    })
  }

  override render() {
    return ChatListTemplate
  }
}
