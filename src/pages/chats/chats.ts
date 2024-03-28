import ChatsPageStyles from './chatsPage.module.css'
import { Chats } from '@/components/chats/chats'
import { Dialog } from '@/components/dialog/dialog'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { ChatsPageTemplate } from '@/templates'

export class ChatsPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      chatList: new Chats({}),
      dialog: new Dialog({}),
      styles: { ...ChatsPageStyles },
    })
  }

  override render(): string {
    return ChatsPageTemplate
  }
}
