import { FileInputTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'

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
        blur: () => {
          if (props.onBlur) props.onBlur()
        },
      },
      attr: {
        src: store.getState().userConfig.avatar,
      },
    })
  }

  render() {
    return FileInputTemplate
  }
}
