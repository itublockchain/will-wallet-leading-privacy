import React from "react"

import IconWithText from "../assets/iconWithText.png"
import ChainButton from "./ChainButton"
import OptionsButton from "./OptionsButton"

const Header = () => {
  return (
    <>
      <div className="h-[89px] w-full flex items-center justify-between p-[15px] relative">
        <img className="h-[71px] w-[71px]" src={IconWithText} />
        <ChainButton />
        <OptionsButton />
      </div>
    </>
  )
}

export default Header
