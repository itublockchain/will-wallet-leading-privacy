import { useEffect } from "react"
import { type NavigateFunction, useNavigate } from "react-router-dom"

import Intro from "../assets/intro.gif"

const Landing = () => {
  const navigation: NavigateFunction = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigation("/home")
    }, 2000)
  }, [])
  return (
    <div
      className="w-[375px] h-[600px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(78, 9, 121, 0.5) 0%, rgba(0, 250, 212, 0.5) 74.48%), linear-gradient(0deg, rgba(67, 18, 98, 0.6), rgba(67, 18, 98, 0.6)), #FFFFFF"
      }}>
      <img src={Intro} />
    </div>
  )
}

export default Landing
