import { ITemplateData, renderTemplate } from '../../helpers/renderTemplate'
import { MessageTemplate } from '../../templates'
import MessageStyle from './message.module.css'

export function renderMessage(
  messageContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Input = renderTemplate({
    template: MessageTemplate,
    context: messageContext,
    styles: { ...MessageStyle, ...styles },
  })

  return Input
}
