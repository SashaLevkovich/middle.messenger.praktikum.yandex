import Handlebars from 'handlebars'

interface ITemplateData {
  [key: string]: unknown
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
}: TParams): string => {
  const render = Handlebars.compile(template)

  const html = render({ ...context, styles })

  if (containerId) {
    const container = document.getElementById(containerId)

    if (container) container.innerHTML = html
    return html
  }

  return html
}
