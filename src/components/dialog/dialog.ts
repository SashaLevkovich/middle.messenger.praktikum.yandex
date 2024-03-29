import DialogStyles from './dialog.module.css'
import { Input } from '../input/input'
import { DialogHeader } from '@/components/dialogHeader/dialogHeader'
import { Message } from '@/components/message/message'
import MessageStyles from '@/components/message/message.module.css'
import { Validator } from '@/helpers/Validator'
import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { messageContext, messageInputContext } from '@/pages/chats/context'
import { DialogTemplate } from '@/templates'

export class Dialog extends Block {
  constructor(props: Props) {
    super({
      ...props,
      dialogHeader: new DialogHeader({
        userName: 'Sasha',
      }),
      messages: messageContext.map(
        (message) =>
          new Message({
            ...message,
            styles: {
              ...MessageStyles,
            },
          }),
      ),
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
        ...DialogStyles,
      },
    })
  }

  render() {
    return DialogTemplate
  }
}
