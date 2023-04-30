import { DocumentDuplicateIcon } from "@heroicons/react/24/solid"
import { BigNumber, ethers } from "ethers"
import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import { type NavigateFunction, useNavigate } from "react-router-dom"
import { Provider, Wallet, utils } from "zksync-web3"

import { useStorage } from "@plasmohq/storage"

import { AAFactory, AA_FACTORY_ADDRESS, ZKSYNC_TESTNET_URL } from "~config"

import IconWithText from "../assets/iconWithText.png"
import { generateRandomWallet, shorthandAddress } from "../utils"

const WalletGenerate = () => {
  const [account, setAccount] = useStorage("account")
  const [wallet, setWallet] = useStorage("wallet")
  const [isAccountFunded, setAccountFunded] = useState(false)

  const provider = new Provider(ZKSYNC_TESTNET_URL)

  const navigation: NavigateFunction = useNavigate()

  const handleGenerateWalletClick = async () => {
    if (account === null || account === undefined) {
      setTimeout(() => {
        setAccount(generateRandomWallet())
      }, 1000)
    }
  }

  const handleCreateAccount = async () => {
    const deployer = new Wallet(account.privateKey, provider)
    const aaFactory = new ethers.Contract(
      AA_FACTORY_ADDRESS,
      AAFactory.abi,
      deployer
    )
    /* const owner = await wallet.getSinger();
     */
    console.log(deployer)
    const salt = ethers.constants.HashZero
    const tx = await aaFactory.deployAccount(salt, deployer.address)
    await tx.wait()

    const abiCoder = new ethers.utils.AbiCoder()
    const walletAddress = utils.create2Address(
      AA_FACTORY_ADDRESS,
      await aaFactory.aaBytecodeHash(),
      salt,
      abiCoder.encode(["address"], [deployer.address])
    )

    setWallet({ address: walletAddress, nonce: 0, name: "Account 1" })
    try {
      await deployer.sendTransaction({
        from: deployer.address,
        to: walletAddress,
        value: (
          await provider.getBalance(deployer.address)
        ).sub("82817250000000")
      })
    } catch (err) {
      console.log("err")
    } finally {
      navigation("/home")
    }
  }

  useEffect(() => {
    let interval
    if (account && !isAccountFunded) {
      interval = setInterval(() => {
        provider.getBalance(account.address).then((balance: BigNumber) => {
          console.log(Number(balance))
          if (Number(balance) > 0) {
            setAccountFunded(true)
          }
        })
      }, 300)

      return () => {
        clearInterval(interval)
      }
    }
  }, [account])

  const GenerateWalletSection = (
    <>
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
    </>
  )

  const SendFundSection = (
    <>
      {account && (
        <>
          <div className="w-fit h-fit p-2 bg-white rounded-md absolute top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <QRCode
              value={account?.address}
              style={{ width: "200px", height: "200px" }}
            />
          </div>

          <div className="absolute  bottom-[100px] flex flex-col items-center">
            <div className="mb-4 text-white text-[14px]">
              Please send at least 0.15 ETH to given address
            </div>
            <div className="border-2 text-[16px] w-[280px] rounded-full px-4 py-1 border-white flex justify-between gap-4 text-white">
              {shorthandAddress(account.address, 10)}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(account.address)
                }}>
                <DocumentDuplicateIcon className="w-[16px] hover:text-gray-200" />
              </button>
            </div>
            {isAccountFunded && (
              <button
                className="w-32 h-10 border-2 border-[#4CBBAA] mt-4 rounded-full text-white text-[13px]"
                onClick={() => handleCreateAccount()}>
                Create Account
              </button>
            )}
          </div>
        </>
      )}
    </>
  )

  return (
    <div
      className="w-[375px] h-[600px] overflow-hidden flex justify-center items-end"
      style={{
        background:
          "linear-gradient(180deg, rgba(78, 9, 121, 0.6) 0%, rgba(0, 250, 212, 0.5) 74.48%), linear-gradient(0deg, rgba(67, 18, 98, 0.8), rgba(67, 18, 98, 0.8)), #FFFFFF"
      }}>
      {account ? SendFundSection : GenerateWalletSection}
    </div>
  )
}

export default WalletGenerate
