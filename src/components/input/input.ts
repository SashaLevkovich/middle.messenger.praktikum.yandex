import InputStyles from './input.module.css'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { InputTemplate } from '@/templates'

interface ValidationRule {
  ruleName: string
  ruleValue: unknown
}

interface InputProps extends Props {
  onChange?: (value: string) => void
  onBlur?: (value: string, rules: ValidationRule[]) => boolean
  loginRules?: ValidationRule[]
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
          if (props.onBlur && props.loginRules) {
            const isValid = props.onBlur(target.value, props.loginRules)
            if (!isValid) {
              this.setProps({
                attr: { 'data-error': 'error' },
              })
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

  validate() {
    console.log('blur')
  }
}
