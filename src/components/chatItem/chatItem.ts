import { ChatItemTemplate } from '../../templates'
import { ITemplateData, renderTemplate } from '../../helpers/renderTemplate'

import ChatItemStyles from './chatItem.module.css'

export function renderChatItem(
  chatItemContext: ITemplateData | ITemplateData[],
  styles?: Record<string, string>,
) {
  const ChatItem = renderTemplate({
    template: ChatItemTemplate,
    context: chatItemContext,
    styles: { ...ChatItemStyles, ...styles },
  })

  return ChatItem
}
