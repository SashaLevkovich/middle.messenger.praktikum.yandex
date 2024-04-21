import { FileInputTemplate } from './template'
import { Block, Props } from '@/app/lib'

interface FileInputProps extends Props {
  onChange?: (value: string | Document) => void
  onBlur?: () => void
}

export class FileInput extends Block {
  constructor(props: FileInputProps) {
    super({
      ...props,
      events: {
        change: (e) => {
          const target = e.target as HTMLInputElement
          if (props.onChange) props.onChange(target.value)
        },
      },
    })
  }

  render() {
    return FileInputTemplate
  }
}
