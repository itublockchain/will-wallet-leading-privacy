import { useState } from "react"

import { HomeOptions, Profile, TokenContainer } from "../components"

const Home = () => {
  const [option, setOption] = useState<number>(0)

  return (
    <div className="w-full h-full">
      <Profile
        accountName="account 1"
        address="0xB69ba43cfA8418Cb6b0346f8d5e6c8020D8893A1"
      />
      <HomeOptions option={option} setOption={setOption} />
      {option === 0 && <TokenContainer />}
    </div>
  )
}

export default Home
