import DividerStyles from './divider.module.css'
import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { DividerTemplate } from '@/templates/divider'

export function renderDivider(
  dividerContext: ITemplateData,
  styles?: Record<string, string>,
) {
  return renderTemplate({
    template: DividerTemplate,
    context: dividerContext,
    styles: { ...DividerStyles, ...styles },
  })
}
