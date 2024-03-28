import FileInputStyles from './fileInput.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { FileInputTemplate } from '@/templates'

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
