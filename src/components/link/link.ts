import { ITemplateData, renderTemplate } from '../../helpers/renderTemplate'
import { LinkTemplate } from '../../templates'

import LinkStyles from './link.module.css'

export function renderLink(
  linkContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const Link = renderTemplate({
    template: LinkTemplate,
    context: linkContext,
    styles: { ...LinkStyles, ...styles },
  })

  return Link
}
