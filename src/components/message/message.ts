import { ValidationRule } from '@/helpers/Validator'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { MessageTemplate } from '@/templates'

interface InputProps extends Props {
  onBlur?: (value: string, rules: ValidationRule[]) => [boolean, string[]]
  rules?: ValidationRule[]
}
export class Message extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: (e) => {
          const target = e.target as HTMLInputElement
          if (props.onBlur && props.rules) {
            const [isValid, errors] = props.onBlur(target.value, props.rules)
            if (isValid) {
              this.setProps({ value: target.value })
              this.setProps({ attr: { 'data-error': '' } })
            } else {
              this.setProps({ value: target.value })
              this.setProps({ attr: { 'data-error': 'error' } })

              alert(errors)
            }
          }
        },
      },
    })
  }

  render() {
    return MessageTemplate
  }
}
