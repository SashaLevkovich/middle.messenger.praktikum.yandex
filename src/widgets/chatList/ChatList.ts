import { ChatController } from './api/controller'
import ChatListStyles from './chatList.module.css'
import { TChatsList } from './models/context'
import { ChatListTemplate } from './template'
import { Block, Props } from '../../app/lib'
import { store } from '../../app/store/store'
import { ChatItem } from '../../entities/chatItem/ChatItem'
import { ChatListHeader } from '../../features'

export class ChatList extends Block {
  private chatController: ChatController
  private chatItems: ChatItem[] = []

  constructor(props: Props) {
    super({
      ...props,
      header: new ChatListHeader({}),
      styles: {
        ...ChatListStyles,
      },
    })

    store.subscribe((state) => {
      this.updateChats(state.chats)
    })

    this.chatController = new ChatController()
    this.chatController.getChats()
  }

  private updateChats(chats: TChatsList[]) {
    this.chatItems.forEach((item) => {
      const content = item.getContent()
      if (content) {
        content.remove()
      }
    })

    this.chatItems = []

    chats.forEach((chat) => {
      const chatItem = new ChatItem({ ...chat })

      this.chatItems.push(chatItem)
      const content = chatItem.getContent()
      const container = document.getElementById('chatList')
      if (content && container) {
        container.appendChild(content)
      }
    })
  }

  override render() {
    return ChatListTemplate
  }
}
