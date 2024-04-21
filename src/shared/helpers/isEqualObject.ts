import { isArray } from './isArray'
import { isPlainObject } from './isPlainObject'

export type PlainObject<T = unknown | unknown[]> = {
  [k in string]: T
}

function isArrayOrObject(value: unknown): value is unknown[] | PlainObject {
  return isPlainObject(value) || isArray(value)
}

export function isEqualObject(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key]
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqualObject(value as PlainObject, rightValue as PlainObject)) {
        continue
      }
      return false
    }

    if (value !== rightValue) {
      return false
    }
  }

  return true
}
