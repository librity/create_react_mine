export default class Timestamp {
  static now = (): number => Math.round(new Date().getTime() / 1000)

  static unixToHuman = (unix: number): string => {
    const date = new Date(unix * 1000)
    const human =
      date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()

    return human
  }
}
