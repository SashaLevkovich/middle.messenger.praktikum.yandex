import DialogHeaderStyles from './dialogHeader.module.css'
import { inputContext } from './model/context'
import { DialogHeaderTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'
import { Input, Link } from '@/shared/components'
import { ChatController } from '@/widgets/chatList/api/controller'

export class DialogHeader extends Block {
  private chatController: ChatController

  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        ...inputContext,
        styles: {
          ...DialogHeaderStyles,
        },
      }),
      addUser: new Link({
        text: 'Add User',
        events: {
          click: (e) => {
            e.preventDefault()
            this.chatController.addUser()
          },
        },
        styles: {
          ...DialogHeaderStyles,
        },
      }),
      deleteUser: new Link({
        text: 'Delete User',
        events: {
          click: (e) => {
            e.preventDefault()
            this.chatController.deleteUser()
          },
        },
        styles: {
          ...DialogHeaderStyles,
        },
      }),
      styles: {
        ...DialogHeaderStyles,
      },
    })

    this.chatController = new ChatController()

    store.subscribe((state) => {
      this.updateTitle(state.activeChat.title)
    })
  }

  updateTitle(state: string) {
    return this.setProps({ userName: state })
  }

  render() {
    return DialogHeaderTemplate
  }
}
