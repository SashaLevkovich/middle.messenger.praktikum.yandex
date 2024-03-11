import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { DividerTemplate } from '@/templates/divider'
import DividerStyles from './divider.module.css'

export function renderDivider(
  dividerContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Divider = renderTemplate({
    template: DividerTemplate,
    context: dividerContext,
    styles: { ...DividerStyles, ...styles },
  })

  return Divider
}
