import { ITemplateData, renderTemplate } from '../../helpers/renderTemplate'
import { ButtonTemplate } from '../../templates'

import ButtonStyles from './button.module.css'

export function renderButton(
  buttonContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Button = renderTemplate({
    template: ButtonTemplate,
    context: buttonContext,
    styles: { ...ButtonStyles, ...styles },
  })

  return Button
}
