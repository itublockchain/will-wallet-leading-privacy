import { MemoryRouter } from "react-router-dom"

import Routing from "./routes"

import "~base.css"
import "~style.css"

function IndexPopup() {
  return (
    <MemoryRouter>
      <Routing />
    </MemoryRouter>
  )
}

export default IndexPopup
