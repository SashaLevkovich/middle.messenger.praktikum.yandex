import MessageStyles from './message.module.css'
import { MessageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { ValidationRule } from '@/shared/helpers'

interface InputProps extends Props {
  onBlur?: (value: string, rules: ValidationRule[]) => [boolean, string[]]
  rules?: ValidationRule[]
}

export class Message extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      styles: {
        ...MessageStyles,
      },
    })
  }

  render() {
    return MessageTemplate
  }
}
