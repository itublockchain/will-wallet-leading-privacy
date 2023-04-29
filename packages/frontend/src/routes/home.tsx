import { useState } from "react"

import { useStorage } from "@plasmohq/storage"

import { HomeOptions, Profile, TokenContainer } from "../components"

const Home = () => {
  const [option, setOption] = useState<number>(0)
  const [account] = useStorage("account")
  console.log(account)

  return (
    <div className="w-full h-full">
      <Profile
        accountName="account 1"
        address={
          account
            ? account.address
            : "0xB69ba43cfA8418Cb6b0346f8d5e6c8020D8893A1"
        }
      />
      <HomeOptions option={option} setOption={setOption} />
      {option === 0 && <TokenContainer />}
    </div>
  )
}

export default Home
