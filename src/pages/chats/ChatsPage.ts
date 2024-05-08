import ChatsPageStyles from './chats.module.css'
import { ChatsPageTemplate } from './template'
import { Block, Props } from '../../app/lib'
import { ChatList, Dialog } from '../../widgets'

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
