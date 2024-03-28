import { ChatsPageTemplate } from '@/templates'
import ChatsPageStyles from './chatsPage.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { Chats } from '@/components/chats/chats'
import { Dialog } from '@/components/dialog/dialog'

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
