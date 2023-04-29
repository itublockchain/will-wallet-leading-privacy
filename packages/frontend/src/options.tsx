import { MemoryRouter } from "react-router-dom"

import { useStorage } from "@plasmohq/storage"

import Routing from "./routes"

import "~base.css"
import "~style.css"

function IndexOptions() {
  const [account, setAccount] = useStorage("account")
  return (
    <>
      <MemoryRouter>
        <Routing />
      </MemoryRouter>
    </>
  )
}

export default IndexOptions
