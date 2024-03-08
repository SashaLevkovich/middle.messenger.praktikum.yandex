import { FileInputTemplate } from '@/templates'
import { ITemplateData, renderTemplate } from '@/helpers/renderTemplate'

import FileInputStyles from './fileInput.module.css'

export function renderFileInput(
  fileInputContext: ITemplateData,
  styles?: Record<string, string>,
) {
  const FileInput = renderTemplate({
    template: FileInputTemplate,
    context: fileInputContext,
    styles: { ...FileInputStyles, ...styles },
  })

  return FileInput
}
