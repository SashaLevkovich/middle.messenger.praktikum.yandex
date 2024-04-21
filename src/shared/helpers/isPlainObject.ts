import { PlainObject } from './isEqualObject'

export function isPlainObject(
  value: unknown | unknown[],
): value is PlainObject {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}
