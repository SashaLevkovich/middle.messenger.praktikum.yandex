import { Block, Props } from '@/app/lib'
import { FileInputTemplate } from '@/shared/templates'
import FileInputStyles from './fileInput.module.css'

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
