import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import "~base.css"

import { MemoryRouter } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import Routing from "./routes"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [account, setAccount] = useStorage("account")
  return (
    <>
      <MemoryRouter>
        <Routing />
      </MemoryRouter>
    </>
  )
}

export default PlasmoOverlay
