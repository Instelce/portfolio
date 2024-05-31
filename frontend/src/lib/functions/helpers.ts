export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function pluralize(array: any[] | null | undefined) {
  if (array == null || array == undefined) {
    return ""
  } else {
    if (array.length > 1) {
      return "s"
    } else {
      return ""
    }
  }
}