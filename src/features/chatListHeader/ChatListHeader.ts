import ChatListHeaderStyles from './chatListHeader.module.css'
import { linkContext, searchContext } from './models/context'

import { ChatListHeaderTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { Input, Link } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

export class ChatListHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      search: new Input({
        ...searchContext,
        styles: {
          ...ChatListHeaderStyles,
        },
      }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e) => {
            e.preventDefault()
            router.go('/settings')
          },
        },
        styles: {
          ...ChatListHeaderStyles,
        },
      }),
      styles: {
        ...ChatListHeaderStyles,
      },
    })
  }

  render() {
    return ChatListHeaderTemplate
  }
}
