import { setMessages } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { getFormData } from '@/shared/helpers'

export class MessageController {
  sendMessage() {
    const data = getFormData('messageForm')

    const socket = store.getState().socket
    store.dispatch(
      setMessages([...store.getState().messages, data?.message as string]),
    )

    socket &&
      socket.send(
        JSON.stringify({
          content: data?.message,
          type: 'message',
        }),
      )
  }
}
