export default class Timestamp {
  static now = (): number => Math.round(new Date().getTime() / 1000)
}
