import { useState } from "react"
import { type NavigateFunction, useNavigate } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import { addBeneficiary } from "~utils"

const AddBeneficiary = () => {
  const [wallet] = useStorage("wallet")
  const [account] = useStorage("account")
  const navigation: NavigateFunction = useNavigate()
  const [address, setAddress] = useState<string>()
  const [percentage, setPercantage] = useState<number>()

  const handleAddClick = async () => {
    await addBeneficiary(account, wallet, address, percentage)
  }

  return (
    <>
      <div className="w-[375px] h-[600px]">
        <div onClick={() => navigation("/home")} className="pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="m-auto w-[340px] h-[450px] flex">
          <div className="flex flex-col w-[340px] m-auto text-white mt-5">
            <div className="pl-3">
              <p>Beneficiary's address</p>
            </div>
            <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
              <input
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                className="font-bold text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[36px] pl-3 border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[340px] m-auto">
              <div className="pl-3">
                <p>Beneficiary's percentage</p>
              </div>
              <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[40px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
                <input
                  max={100}
                  min={0}
                  type="number"
                  onChange={(e) => setPercantage(Number(e.target.value))}
                  placeholder="Percentage"
                  className="font-bold text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[36px] pl-3 border-none focus:outline-none"
                />
              </div>
            </div>
            <button
              className="shadow-xl m-auto mt-5 w-[139px] h-[38px] rounded-full bg-[#434F94] text-white font-bold text-[20px]"
              onClick={() => handleAddClick()}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBeneficiary
