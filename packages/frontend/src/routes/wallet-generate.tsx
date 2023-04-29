import { type NavigateFunction, useNavigate } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import IconWithText from "../assets/iconWithText.png"
import { generateRandomWallet } from "../utils"

const WalletGenerate = () => {
  const [account, setAccount] = useStorage("account")
  const navigation: NavigateFunction = useNavigate()
  const handleGenerateWalletClick = async () => {
    if (account === null || account === undefined) {
      setAccount(generateRandomWallet())
      navigation("/home")
    }
  }

  return (
    <div
      className="w-[375px] h-[600px] overflow-hidden flex justify-center items-end"
      style={{
        background:
          "linear-gradient(180deg, rgba(78, 9, 121, 0.6) 0%, rgba(0, 250, 212, 0.5) 74.48%), linear-gradient(0deg, rgba(67, 18, 98, 0.8), rgba(67, 18, 98, 0.8)), #FFFFFF"
      }}>
      <img
        className="w-[230px] h-[220px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        src={IconWithText}
      />
      <button
        className="w-56 h-16 px-[2px] bg-gradient-to-b from-[#16c9ae] to-[#4e75a2] rounded-full flex justify-center items-center mb-28"
        onClick={() => handleGenerateWalletClick()}>
        <div className="px-4 h-[60px] w-full flex items-center justify-center bg-[#5986AD] rounded-full text-gray-300 hover:text-gray-200 hover:bg-[#5986A5] text-xl font-bold">
          <span>Generate Wallet</span>
        </div>
      </button>
    </div>
  )
}

export default WalletGenerate
