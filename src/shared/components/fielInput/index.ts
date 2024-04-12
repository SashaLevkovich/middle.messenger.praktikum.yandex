import { FileInputTemplate } from './template'
import { Block, Props } from '@/app/lib'

export class FileInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
    })
  }

  render() {
    return FileInputTemplate
  }
}
