import { ValidationRule } from '../../../shared/helpers'

export const RULES: Record<string, ValidationRule[]> = {
  login: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    {
      ruleName: 'min_length',
      ruleValue: { minValue: 5 },
      errorMessage: 'Too short',
    },
    { ruleName: 'Login', errorMessage: 'Incorrect login' },
  ],
  password: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    {
      ruleName: 'min_length',
      ruleValue: { minValue: 5 },
      errorMessage: 'Too short',
    },
    { ruleName: 'Login', errorMessage: 'Incorrect password' },
  ],
}
