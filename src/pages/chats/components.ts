import { renderChatItem } from '@/components/chatItem/chatItem'
import { renderMessage } from '@/components/message/message'
import { chatListContext, messageContext } from './context'

export const ChatItems: string[] = []
export const ChatMessage: any[] = []

chatListContext.forEach((el) => {
  const item = renderChatItem(el)
  if (item) ChatItems.push(item)
})

messageContext.forEach((el) => {
  const item = renderMessage(el)
  if (item) ChatMessage.push(item)
})
