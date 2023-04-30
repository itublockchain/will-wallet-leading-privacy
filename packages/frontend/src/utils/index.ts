import crypto from "crypto"
import { ethers } from "ethers"

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
