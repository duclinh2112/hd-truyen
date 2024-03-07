export function isEmpty(obj?: object) {
  if (typeof obj === 'undefined') return true
  return !Object.keys(obj).length
}

export const LOCAL_KEY = {
  LTheme: 'LTheme'
}
