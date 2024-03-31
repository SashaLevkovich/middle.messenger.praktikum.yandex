import MessageSubmissionPanelStyles from './messageSubmissionPanel.module.css'
import { messageInputContext } from './model/context'
import { MessageSubmissionPanelTemplate } from './template'
import { Input } from './ui'
import { Block, Props } from '@/app/lib'
import { Validator } from '@/shared/helpers'

export class MessageSubmissionPanel extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        ...messageInputContext,
        onBlur: (value, rules) => {
          const validator = new Validator()
          const isValid = validator.validate(value, rules)
          return [isValid, validator.getErrors()]
        },
        rules: [{ ruleName: 'required', ruleValue: true }],
      }),
      styles: {
        ...MessageSubmissionPanelStyles,
      },
    })
  }

  render() {
    return MessageSubmissionPanelTemplate
  }
}
