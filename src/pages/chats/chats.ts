import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { ChatsPageTemplate } from '@/templates'
import ChatsPageStyles from './chatsPage.module.css'

export const renderChats = (
  chatsContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const Chats = renderTemplate({
    template: ChatsPageTemplate,
    styles: { ...ChatsPageStyles, ...styles },
    context: chatsContext,
  })

  return Chats
}
