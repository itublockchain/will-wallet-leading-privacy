import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { Provider } from "zksync-web3"

import { useStorage } from "@plasmohq/storage"

import { Account } from "~config"
import { shorthandAddress } from "~utils"

import Beneficiary from "./Beneficiary"

const BeneficiaryContainer = () => {
  const [wallet] = useStorage("wallet")
  const [beneficiaries, setBeneficiaries] = useState([])

  useEffect(() => {
    if (wallet) {
      const provider = new Provider("https://testnet.era.zksync.dev")
      const accountContract = new ethers.Contract(
        wallet.address,
        Account.abi,
        provider
      )

      for (let i = 0; i < 1000; i++) {
        try {
          accountContract.beneficiaryAddresses(i).then((data) => {
            console.log(data)
            setBeneficiaries((prev) => [...prev, data])
          })
        } catch (err) {
          break
        }
      }
    }
  }, [wallet])

  return (
    <>
      {beneficiaries.length > 0 ? (
        <div className="w-[340px] h-[350px] m-auto hide-scroll flex flex-col gap-5 overflow-scroll scrollbar-hide">
          {beneficiaries.map((beneficiary) => (
            <Beneficiary account={shorthandAddress(beneficiary, 10)} />
          ))}
        </div>
      ) : (
        <div className="w-[340px] h-[350px] m-auto hide-scroll flex flex-col gap-5 overflow-scroll scrollbar-hide text-white text-md text-center">
          Add beneficiaries to save your funds
        </div>
      )}
    </>
  )
}

export default BeneficiaryContainer
