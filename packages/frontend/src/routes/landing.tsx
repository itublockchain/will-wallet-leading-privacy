import { useEffect } from "react"
import { type NavigateFunction, useNavigate } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import Intro from "../assets/intro.gif"

const Landing = () => {
  const navigation: NavigateFunction = useNavigate()
  const [account] = useStorage("account")
  const [wallet] = useStorage("wallet")
  if (wallet !== undefined && wallet !== null) {
    navigation("/home")
  } else if (wallet !== undefined && wallet !== null) {
    navigation("/generate-wallet")
  }

  useEffect(() => {
    if (!account) {
      const timeout = setTimeout(() => {
        navigation("/generate-wallet")
      }, 2000)
      return () => clearInterval(timeout)
    }
    return
  }, [])
  return (
    <div
      className="w-[375px] h-[600px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(78, 9, 121, 0.6) 0%, rgba(0, 250, 212, 0.5) 74.48%), linear-gradient(0deg, rgba(67, 18, 98, 0.8), rgba(67, 18, 98, 0.8)), #FFFFFF"
      }}>
      <img src={Intro} />
    </div>
  )
}

export default Landing
