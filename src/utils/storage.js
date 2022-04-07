/**
 * @type {(key: string) => string}
 */
export const getItem = (key) => localStorage.getItem(key) || ''

/**
 * @type {(key: string, value: string) => string}
 */
export const setItem = (key, value) => {
  localStorage.setItem(key, value)
  return value
}

/**
 * @type {(key: string) => object}
 */
export const getObject = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}')
  } catch (_a) {
    return {}
  }
}

/**
 * @type {(key: string, value: object) => object}
 */
export const setObject = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

/**
 * @type {(key: string) => boolean}
 */
export const getBool = (key) => (localStorage.getItem(key) || '') === 'true'

/**
 * @type {(key: string, value: boolean) => boolean}
 */
export const setBool = (key, value) => {
  localStorage.setItem(key, value)
  return value
}

/**
 * @type {(key: string) => number}
 */
export const getNumber = (key) => +(localStorage.getItem(key) || NaN)

/**
 * @type {(key: string, value: number) => number}
 */
export const setNumber = (key, value) => {
  localStorage.setItem(key, value.toString())
  return value
}

const storage = {
  getItem,
  setItem,
  getObject,
  setObject,
  getBool,
  setBool,
  getNumber,
  setNumber,
}

export default storage
