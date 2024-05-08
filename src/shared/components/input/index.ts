import { InputTemplate } from './template'
import { InputProps } from './type'
import { Block } from '../../../app/lib'
import { Validator } from '../../helpers'
import { ValidateParams } from '../../helpers/Validator'

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        change: (e: Event) => {
          const target = e.target as HTMLInputElement
          if (props.onChange) props.onChange(target.value)
        },
        blur: (e: Event) => {
          const target = e.target as HTMLInputElement

          if (props.rules) {
            this.validate({
              value: target.value,
              validationRules: props.rules,
            })
          }
        },
      },
    })
  }

  validate({ value, validationRules }: ValidateParams) {
    const isValid = Validator.validate({
      value,
      validationRules,
    })
    const errors = Validator.getErrors()

    if (isValid) {
      this.setProps({ value: value })
      this.setProps({ attr: { 'data-error': '' } })
    } else {
      this.setProps({ value: value })
      this.setProps({ attr: { 'data-error': 'error' } })

      alert(errors)
    }
  }

  render() {
    return InputTemplate
  }
}
