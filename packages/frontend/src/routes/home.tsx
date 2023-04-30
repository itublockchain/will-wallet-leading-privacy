import { useState } from "react"

import { useStorage } from "@plasmohq/storage"

import {
  HomeOptions,
  Inheritance,
  Profile,
  TokenContainer
} from "../components"

const Home = () => {
  const [option, setOption] = useState<number>(0)
  const [wallet] = useStorage("wallet")

  return (
    <div className="w-full h-full">
      <Profile
        accountName={wallet?.name ? wallet.name : "Account 0"}
        address={
          wallet ? wallet.address : "0xB69ba43cfA8418Cb6b0346f8d5e6c8020D8893A1"
        }
      />
      <HomeOptions option={option} setOption={setOption} />
      {option === 0 && <TokenContainer />}
      <div className="flex flex-wrap justify-around w-[340px] m-auto h-16 mt-1">
        <div className="mb-1 flex justify-center items-center rounded-full w-[206px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
          <button className="text-lg text-white rounded-full bg-[#3C93AD] w-[202px] h-[27px]">
            INHERITANCE
          </button>
        </div>

        <div className="flex justify-center items-center rounded-full w-[119px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
          <button className="text-lg text-white rounded-full bg-[#3C93AD] w-[115px] h-[27px]">
            I'M ALIVE
          </button>
        </div>

        <div className="mb-1 flex justify-center items-center rounded-full w-[206px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
          <button className="text-lg text-white rounded-full bg-[#3C93AD] w-[202px] h-[27px]">
            Deneme
          </button>
        </div>

        <div className="flex justify-center items-center rounded-full w-[119px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
          <button className="text-white rounded-full bg-[#3C93AD] w-[115px] h-[27px]">
            EDIT COUNTDOWN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
