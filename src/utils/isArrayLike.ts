export function isArrayLike(value: any): boolean {
  return value != null && typeof value !== 'function' && isFinite(value.length)
}
