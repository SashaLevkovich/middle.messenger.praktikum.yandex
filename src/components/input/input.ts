import Block from '@/lib/Block.ts'
import { Props } from '@/lib/types.ts'
import { InputTemplate } from '@/templates'
import InputStyles from './input.module.css'

interface ValidationRule {
  ruleName: string
  ruleValue: any
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
