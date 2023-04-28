import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton, Layout, TokensLayout } from "~components"

import "~base.css"

import Routing from "~routes"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="w-[400px] h-full">
      <Routing />
    </div>
  )
}

export default PlasmoOverlay
