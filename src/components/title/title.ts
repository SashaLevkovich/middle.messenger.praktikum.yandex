import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { TitleTemplate } from '@/templates/title'
import TitleStyles from './title.module.css'

export function renderTitle(
  titleContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Title = renderTemplate({
    template: TitleTemplate,
    context: titleContext,
    styles: { ...TitleStyles, ...styles },
  })

  return Title
}
