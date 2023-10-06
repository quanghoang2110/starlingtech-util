function displayStr(_str: number, showZero: boolean = false) {
  if (!_str) {
    if (showZero) {
      return '00'
    }
    return ''
  }
  return Number(_str) < 10 ? `0${_str}` : `${_str}`
}

export function secondsToHms(
  _seconds: number | string,
  showText: boolean = false,
  space = false,
) {
  const seconds = Number(_seconds)
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)

  let hDisplay = '',
    mDisplay = '',
    sDisplay = ''
  if (showText) {
    hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : ''
    mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : ''
    sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
  } else if (space) {
    hDisplay = h > 0 ? displayStr(h) + (h === 1 ? ' : ' : ' : ') : ''
    mDisplay = m > 0 ? displayStr(m, true) + (m === 1 ? ' : ' : ' : ') : ''
    sDisplay = displayStr(s, true)
  } else {
    hDisplay = h > 0 ? displayStr(h) + (h === 1 ? ':' : ':') : ''
    mDisplay = m > 0 ? displayStr(m, true) + (m === 1 ? ':' : ':') : '00:'
    sDisplay = displayStr(s, true)
  }
  return hDisplay + mDisplay + sDisplay
}

export function getHmsFromSeconds(_seconds: number | string) {
  const seconds = Number(_seconds)
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)

  return { h, m, s }
}
