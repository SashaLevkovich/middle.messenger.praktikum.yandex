import { ValidationRule } from '../../../shared/helpers'

export const RULES: Record<string, ValidationRule[]> = {
  oldPassword: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    {
      ruleName: 'min_length',
      ruleValue: { minValue: 8 },
      errorMessage: 'Too short',
    },
    { ruleName: 'Login', errorMessage: 'Incorrect password' },
  ],
  newPassword: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    {
      ruleName: 'min_length',
      ruleValue: { minValue: 8 },
      errorMessage: 'Too short',
    },
    { ruleName: 'Login', errorMessage: 'Incorrect password' },
  ],
  repeatNewPassword: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    {
      ruleName: 'min_length',
      ruleValue: { minValue: 8 },
      errorMessage: 'Too short',
    },
    { ruleName: 'Login', errorMessage: 'Incorrect password' },
  ],
}
