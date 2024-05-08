import { ValidationRule } from '../../../shared/helpers'

export const RULES: Record<string, ValidationRule[]> = {
  email: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    { ruleName: 'Email', errorMessage: 'Incorrect email' },
  ],
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
  name: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    { ruleName: 'Name', errorMessage: 'Incorrect name' },
  ],
  nameInChat: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    { ruleName: 'Name', errorMessage: 'Incorrect name in chat' },
  ],
  lastname: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    { ruleName: 'Name', errorMessage: 'Incorrect lastname' },
  ],
  phone: [
    {
      ruleName: 'required',
      ruleValue: { isRequired: true },
      errorMessage: 'Field is required',
    },
    { ruleName: 'Phone', errorMessage: 'Incorrect phone' },
  ],
  password: [
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
