import { ethers } from "ethers"
import moment from "moment"
import { useEffect, useState } from "react"
import { type NavigateFunction, useNavigate } from "react-router-dom"
import { Provider } from "zksync-web3"

import { useStorage } from "@plasmohq/storage"

import { Account } from "~config"

import { sendIAmAlive, setCountDownTime } from "../utils"

const Inheritance = () => {
  const [account] = useStorage("account")
  const [wallet] = useStorage("wallet")

  const [deathTime, setDeathTime] = useState(0)
  const [inputTime, setInputTime] = useState(0)

  useEffect(() => {
    if (wallet) {
      const provider = new Provider("https://testnet.era.zksync.dev")
      const accountContract = new ethers.Contract(
        wallet.address,
        Account.abi,
        provider
      )

      accountContract.lockDuration().then((data1) => {
        accountContract.lastActive().then((data2) => {
          setDeathTime(Number(data1) + Number(data2))
        })
      })
    }
  }, [wallet])

  const navigation: NavigateFunction = useNavigate()

  const handleSendIAmAliveClick = async () => {
    await sendIAmAlive(account, wallet)
    const provider = new Provider("https://testnet.era.zksync.dev")
    const accountContract = new ethers.Contract(
      wallet.address,
      Account.abi,
      provider
    )
    accountContract.lockDuration().then((data1) => {
      accountContract.lastActive().then((data2) => {
        setDeathTime(Number(data1) + Number(data2))
      })
    })
  }

  const handleSetTime = async () => {
    await setCountDownTime(account, wallet, inputTime * 86400)
    const provider = new Provider("https://testnet.era.zksync.dev")
    const accountContract = new ethers.Contract(
      wallet.address,
      Account.abi,
      provider
    )
    accountContract.lockDuration().then((data1) => {
      accountContract.lastActive().then((data2) => {
        setDeathTime(Number(data1) + Number(data2))
      })
    })
  }

  return (
    <>
      <div className="overflow-hidden h-72 py-2">
        <div className="w-[340px] h-[300px] m-auto">
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <div className="text-lg font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[36px] pl-3 flex items-center">
              Remaining time:{" "}
              {moment
                .duration(moment.unix(deathTime).diff(moment.now()))
                .humanize()}
            </div>
          </div>
          <div className="mb-5 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button
              className="font-bold text-[12px] text-white rounded-full bg-[#3C93AD] w-[336px] h-[36px]"
              onClick={() => navigation("/beneficiaries")}>
              Beneficiaries
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <input
              min={0}
              type="number"
              pattern="[0-9]{0,5}"
              onChange={(e) => setInputTime(Number(e.target.value))}
              value={inputTime}
              placeholder="Time"
              className="font-bold text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[36px] pl-3 border-none focus:outline-none"
            />
          </div>
          <div className="mb-5 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button
              className="font-bold text-[12px] text-white rounded-full bg-[#3C93AD] w-[336px] h-[36px]"
              onClick={() => handleSetTime()}>
              Set Countdown Time
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[50px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button
              className="text-xl font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[46px]"
              onClick={() => handleSendIAmAliveClick()}>
              I'M ALIVE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inheritance
