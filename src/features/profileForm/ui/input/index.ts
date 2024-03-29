import { Block, Props } from '@/app/lib'
import { ValidationRule } from '@/shared/helpers'
import { InputTemplate } from '@/shared/templates'
import InputStyles from './input.module.css'

interface InputProps extends Props {
  onChange?: (value: string) => void
  onBlur?: (value: string, rules: ValidationRule[]) => [boolean, string[]]
  rules?: ValidationRule[]
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        change: (e) => {
          const target = e.target as HTMLInputElement
          if (props.onChange) props.onChange(target.value)
        },
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
      styles: {
        ...InputStyles,
      },
    })
  }

  render() {
    return InputTemplate
  }
}
