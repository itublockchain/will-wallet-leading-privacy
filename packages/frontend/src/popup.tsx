import { MemoryRouter } from "react-router-dom"

import Routing from "./routes"

import "~base.css"
import "~style.css"

import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const [account, setAccount] = useStorage("account")
  const [wallet, setWallet] = useStorage("wallet")
  return (
    <>
      <MemoryRouter>
        <Routing />
      </MemoryRouter>
    </>
  )
}

export default IndexPopup
