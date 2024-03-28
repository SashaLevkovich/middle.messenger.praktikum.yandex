import { FileInputTemplate } from '@/templates'
import FileInputStyles from './fileInput.module.css'
import { Props } from '@/lib/types'
import Block from '@/lib/Block'

export class FileInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...FileInputStyles,
      },
    })
  }

  render() {
    return FileInputTemplate
  }

  validate() {
    console.log('blur')
  }
}
