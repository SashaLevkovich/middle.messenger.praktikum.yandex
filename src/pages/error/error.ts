

import ErrorStyles from './error.module.css'
import DividerStyles from '@/components/divider/divider.module.css'
import TitleStyles from '@/components/title/title.module.css'
import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'
import { ErrorPageTemplate } from '@/templates'

export const renderError = (
  errorContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  return renderTemplate({
    template: ErrorPageTemplate,
    styles: { ...DividerStyles, ...TitleStyles, ...ErrorStyles, ...styles },
    context: errorContext,
  })
}
