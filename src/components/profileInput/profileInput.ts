import ProfileInputStyles from './profileInput.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { InputTemplate } from '@/templates'

export class ProfileInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      styles: {
        ...ProfileInputStyles,
      },
    })
  }

  render() {
    return InputTemplate
  }

  validate() {
    console.log('blur')
  }
}
