import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import Home from "./home"
import Landing from "./landing"

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
  </Routes>
)

export default Routing
