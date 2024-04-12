import MessageSubmissionPanelStyles from './messageSubmissionPanel.module.css'
import { messageInputContext } from './model/context'
import { MessageSubmissionPanelTemplate } from './template'

import { Block, Props } from '@/app/lib'
import { Input } from '@/shared/components'

let message = ''

const RULES = [
  {
    ruleName: 'required',
    ruleValue: { isRequired: true },
    errorMessage: 'Field is required',
  },
]

export class MessageSubmissionPanel extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        ...messageInputContext,
        onChange: (value: string) => {
          this.setProps((message = value))
        },
        rules: RULES,
        styles: {
          ...MessageSubmissionPanelStyles,
        },
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
