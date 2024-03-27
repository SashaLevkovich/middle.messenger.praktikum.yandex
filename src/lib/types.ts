export type Listener<T extends unknown[] = any[]> = (...args: T) => void

export type EventMap = { [event: string]: EventListener }

export type Props = {
  events?: EventMap
  styles?: Record<string, string>
  [key: string]: unknown
}
