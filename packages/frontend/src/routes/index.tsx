import { Route, Routes } from "react-router-dom"

import { Layout } from "../components"
import Home from "./home"

const Routing = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
  </Routes>
)

export default Routing
