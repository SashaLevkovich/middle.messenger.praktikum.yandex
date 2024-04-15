export const SET_USER = 'SET_USER'
export const SET_PASSWORD = 'SET_PASSWORD'

export function setUser(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_USER, payload }
}

export function setPassword(payload: Record<string, unknown | unknown[]>) {
  return { type: SET_PASSWORD, payload }
}
