import { Listener } from '@/lib/types.ts'

export class EventBus<
  E extends string = string,
  M extends { [K in E]: unknown[] } = Record<E, any[]>,
> {
  private listeners: { [K in E]?: Listener<M[E]>[] } = {}

  on(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event]!.push(callback)
  }

  off(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      throw new Error(`No event: ${event}`)
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    )
  }

  emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`No event: ${event}`)
    }

    this.listeners[event]!.forEach((listener) => {
      listener(...args)
    })
  }
}
