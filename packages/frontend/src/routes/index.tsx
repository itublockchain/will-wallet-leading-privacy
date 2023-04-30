import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import AddBeneficiary from "./add-beneficiary"
import Beneficiaries from "./beneficiaries"
import Beneficiaries from "./beneficiaries"
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
    <Route
      path="/beneficiaries"
      element={
        <Layout>
          <Beneficiaries />
        </Layout>
      }
    />
    <Route path="/generate-wallet" element={<WalletGenerate />} />
    <Route
      path="/add-beneficiary"
      element={
        <Layout>
          <AddBeneficiary />
        </Layout>
      }
    />
  </Routes>
)

export default Routing
