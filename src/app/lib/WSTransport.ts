import { setMessages, setSocket } from '../store/actions'
import { store } from '../store/store'

export const createSocket = (userId: number, chatId: number, token: string) =>
  new WebSocket(
    `${import.meta.env.VITE_API_URL_WS}/chats/${userId}/${chatId}/${token}`,
  )

export const WSTransport = (socket: WebSocket) => {
  const container = document.getElementById('dialog')

  if (container && container.hasChildNodes()) {
    container.innerHTML = ''
  }

  socket.addEventListener('open', () => {
    socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      }),
    )
  })

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Clean close')
    } else {
      console.log('Close')
    }
  })

  socket.addEventListener('message', (event) => {
    const messages: string[] = []

    try {
      const data = JSON.parse(event.data)
      if (Array.isArray(data)) {
        data.forEach((el) => {
          messages.push(el.content)
        })
        store.dispatch(setMessages(messages))
        store.dispatch(setSocket(socket))
      }
    } catch (e) {
      console.log(e)
    }
  })

  socket.addEventListener('error', (e) => {
    console.log(e)
  })
}
