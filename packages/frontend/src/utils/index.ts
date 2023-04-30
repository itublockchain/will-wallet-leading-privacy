import { ethers } from "ethers"

import { addBeneficiary } from "./addBeneficiary"
import { sendIAmAlive } from "./sendIAmAlive"
import { setCountDownTime } from "./setCountDownTime"

export const shorthandAddress = (
  address: string,
  lengthFromOneSide: number
) => {
  return (
    address.slice(0, lengthFromOneSide) +
    "....." +
    address.slice(address.length - lengthFromOneSide, address.length)
  )
}

export const generateRandomWallet = () => {
  const account = ethers.Wallet.createRandom()
  return {
    privateKey: account.privateKey,
    address: account.address
  }
}

export { sendIAmAlive, setCountDownTime, addBeneficiary }
