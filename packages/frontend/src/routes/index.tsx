import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import Home from "./home"
import Landing from "./landing"
import WalletGenerate from "./wallet-generate"

const Routing = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route
      path="/home"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route path="/generate-wallet" element={<WalletGenerate />} />
  </Routes>
)

export default Routing
