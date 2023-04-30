import { MemoryRouter } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import Routing from "./routes"

import "~base.css"
import "~style.css"

function IndexOptions() {
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

export default IndexOptions
