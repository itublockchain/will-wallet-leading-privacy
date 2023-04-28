import React from "react"

import IconWithText from "../assets/iconWithText.png"
import OptionsButton from "./OptionsButton"

const Header = () => {
  return (
    <>
      <div className="h-[89px] w-full flex items-center justify-between p-[15px] relative">
        <img className="h-[71px] w-[71px]" src={IconWithText} />
        <button className="h-[32px] w-[160px] border-[2px] border-[#4CBBAA] bg-inherit rounded-full text-white text-[15px] text-center absolute left-[50%] -translate-x-[50%] bottom-4">
          zkSync
        </button>
        <OptionsButton />
      </div>
    </>
  )
}

export default Header
