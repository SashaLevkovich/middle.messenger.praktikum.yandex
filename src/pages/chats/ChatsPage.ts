import ChatsPageStyles from './chats.module.css'
import { ChatsPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { Dialog } from '@/widgets'
import { ChatList } from '@/widgets/chatList/ChatList'

export class Chats extends Block {
  constructor(props: Props) {
    super({
      ...props,
      chatList: new ChatList({}),
      dialog: new Dialog({}),
      styles: { ...ChatsPageStyles },
    })
  }

  override render(): string {
    return ChatsPageTemplate
  }
}
