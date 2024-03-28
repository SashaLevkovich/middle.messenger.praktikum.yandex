interface ValidationRule {
  ruleName: string
  ruleValue: unknown
}

type ValidationRegexType = {
  [key: string]: RegExp
}

export class Validator {
  private static validationRegex: ValidationRegexType = {
    Name: /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё-]*$/,
    Login: /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/,
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    Password: /(?=.*[A-Z])(?=.*[0-9]).{8,40}/,
    Phone: /^\+?\d{10,15}$/,
  }

  protected errors: string[]

  constructor() {
    this.errors = []
  }

  validate(value: string, validation_rules: ValidationRule[]): boolean {
    this.errors = []

    for (const rule of validation_rules) {
      let regex

      switch (rule.ruleName) {
        case 'required':
          if (!value) {
            this.errors.push(`Field is required.`)
            return false
          }
          break
        case 'min_length':
          if (value.length < (rule.ruleValue as number)) {
            this.errors.push(`Length should be at least ${rule.ruleValue}.`)
            return false
          }
          break
        default:
          regex = Validator.validationRegex[rule.ruleName]
          if (regex && !regex.test(value)) {
            this.errors.push(`Invalid ${rule.ruleName} format.`)
            return false
          }
          break
      }
    }

    return true
  }

  getErrors(): string[] {
    return this.errors
  }
}
