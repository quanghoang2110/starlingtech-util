export const words = (str: string) =>
  str
    .toLowerCase()
    .replace(
      /(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,
      () => (m) => m.toUpperCase(),
    )

export const firstUpperCaseCharacter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function replaceTags(str: string) {
  return str.replace(/(<([^>]+)>)/gi, '')
}
