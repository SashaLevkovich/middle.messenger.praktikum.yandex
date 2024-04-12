export const SET_USER = 'SET_USER'

export function setUser(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_USER, payload }
}
