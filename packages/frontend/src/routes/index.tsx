import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import Home from "./home"
import Landing from "./landing"
import WalletGenerate from "./wallet-generate"
import Beneficiaries from "./beneficiaries"

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
    <Route path="/beneficiaries" element={<Beneficiaries />}/>
    <Route path="/generate-wallet" element={<WalletGenerate />} />
  </Routes>
)

export default Routing
