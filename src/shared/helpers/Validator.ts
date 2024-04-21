export type ValidationRule = {
  ruleName: string
  ruleValue?: Record<string, unknown>
  errorMessage: string
}

export interface ValidateParams {
  value: string | undefined | null
  validationRules: ValidationRule[]
}

export type ValidatorObject = Record<
  string,
  (value: unknown, ruleValue?: Record<string, unknown>) => boolean
>

export type ValidationRegexType = {
  [key: string]: RegExp
}

export const validationRegex: ValidationRegexType = {
  Name: /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё-]*$/,
  Login: /^[a-zA-Z.][a-zA-Z0-9_.-]{2,19}$/,
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  Password: /(?=.*[A-Z])(?=.*[0-9]).{8,40}/,
  Phone: /^\+?\d{10,15}$/,
}

export interface ValidateParams {
  value: string | undefined | null
  validationRules: ValidationRule[]
}

export class Validator {
  private static errors: string[] = []

  static validate({ validationRules, value }: ValidateParams): boolean {
    Validator.errors = []

    for (const rule of validationRules) {
      const validatorsLogic: ValidatorObject = {
        required: (value: unknown) => {
          return value !== null && value !== undefined && value !== ''
        },
        min_length: (value: unknown, ruleValue?: Record<string, unknown>) => {
          return (
            typeof value === 'string' &&
            value.length >= (ruleValue?.minValue as number)
          )
        },
        regex: (value: unknown) => {
          const regex = validationRegex[rule.ruleName]

          return regex && (value as string).match(regex) !== null
        },
      }

      const ruleKey =
        rule.ruleName === 'required' || rule.ruleName === 'min_length'
          ? rule.ruleName
          : 'regex'

      const isValid = validatorsLogic[ruleKey](value, rule.ruleValue)

      if (!isValid) {
        Validator.errors.push(rule.errorMessage)
        return false
      }
    }

    return true
  }

  static getErrors(): string[] {
    return Validator.errors
  }
}
