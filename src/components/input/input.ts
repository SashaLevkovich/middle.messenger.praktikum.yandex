import { InputTemplate } from '@/templates'
import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import InputStyles from './input.module.css'

export function renderInput(
  inputContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Input = renderTemplate({
    template: InputTemplate,
    context: inputContext,
    styles: { ...InputStyles, ...styles },
  })

  return Input
}
