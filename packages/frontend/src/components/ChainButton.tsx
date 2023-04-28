import { ChevronDownIcon } from "@heroicons/react/24/solid"
import React from "react"

const ChainButton = () => {
  return (
    <button className="h-[32px] w-[160px] border-[2px] border-[#4CBBAA] bg-inherit rounded-full absolute left-[50%] -translate-x-[50%] flex justify-end items-center">
      <div className=" text-white text-[15px] text-center absolute left-[50%] -translate-x-[50%] items-center">
        zkSync
      </div>
      <div className="w-[20px] h-[20px] text-[#4CBBAA] mr-2">
        <ChevronDownIcon />
      </div>
    </button>
  )
}

export default ChainButton
