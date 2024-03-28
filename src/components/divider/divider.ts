import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { DividerTemplate } from '@/templates/divider'
import DividerStyles from './divider.module.css'

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
