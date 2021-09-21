import CryptoJS from 'crypto-js'

export default class Crypto {
  static hashInstance = (instance: Object): string => {
    const instanceJSON = JSON.stringify(instance)
    console.log('HASHING:', instanceJSON)

    return Crypto.hashString(instanceJSON)
  }

  static hashString = (str: string): string => {
    return CryptoJS.SHA256(str).toString()
  }
}
