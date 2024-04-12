import { Props } from '@/app/lib'
import { ValidationRule } from '@/shared/helpers'

export interface InputProps extends Props {
  onChange?: (value: string) => void
  onBlur?: (value: string, rules: ValidationRule[]) => [boolean, string[]]
  rules?: ValidationRule[]
}
