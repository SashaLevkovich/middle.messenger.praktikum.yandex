import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import { ErrorPageTemplate } from '@/templates'

import ErrorStyles from './error.module.css'
import DividerStyles from '@/components/divider/divider.module.css'
import TitleStyles from '@/components/title/title.module.css'

export const renderError = (
  errorContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const Error = renderTemplate({
    template: ErrorPageTemplate,
    styles: { ...DividerStyles, ...TitleStyles, ...ErrorStyles, ...styles },
    context: errorContext,
  })

  return Error
}
