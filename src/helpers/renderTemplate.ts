import { compile } from 'handlebars'

export interface ITemplateData {
  [key: string]: any
}

type TParams = {
  template: string
  context: ITemplateData
  styles?: Record<string, string>
  containerId?: string
}

export const renderTemplate = ({
  template,
  context,
  styles,
  containerId,
}: TParams): string | void => {
  const render = compile(template)

  const html = render({ ...context, styles })

  if (containerId) {
    const container = document.getElementById(containerId)

    if (container) container.innerHTML = html
    return
  }

  return html
}
