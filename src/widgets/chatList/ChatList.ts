import ChatListStyles from './chatList.module.css'
import { chatListContext } from './models/context'
import { ChatListTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { ChatItem } from '@/entities/chatItem/ChatItem'
import { ChatListHeader } from '@/features/chatListHeader/ChatListHeader'

export class ChatList extends Block {
  constructor(props: Props) {
    super({
      ...props,
      header: new ChatListHeader({}),
      list: chatListContext.map((chat) => new ChatItem({ ...chat })),
      styles: {
        ...ChatListStyles,
      },
    })
  }

  override render() {
    return ChatListTemplate
  }
}
