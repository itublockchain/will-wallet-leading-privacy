import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import Home from "./home"
import Landing from "./landing"
import WalletGenerate from "./wallet-generate"
import Beneficiaries from "./beneficiaries"
import AddBeneficiary from "./add-beneficiary"

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
    <Route path="/beneficiaries" element={<Layout><Beneficiaries /></Layout>}/>
    <Route path="/generate-wallet" element={<WalletGenerate />} />
    <Route path="/add-beneficiary" element={<Layout><AddBeneficiary /></Layout>} />
  </Routes>
)

export default Routing
