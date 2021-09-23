import CryptoJS from 'crypto-js'

const HASH_LENGTH = 64

export default class Crypto {
  static hashLength = () => HASH_LENGTH

  static hashObject = (instance: Object): string => {
    const instanceJSON = JSON.stringify(instance)

    return Crypto.hashString(instanceJSON)
  }

  static hashString = (str: string): string => {
    return CryptoJS.SHA256(str).toString()
  }
}
