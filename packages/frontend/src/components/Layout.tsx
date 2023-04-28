import React from "react"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="w-[375px] h-[600px] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(78, 9, 121, 0.5) 0%, rgba(0, 250, 212, 0.5) 74.48%), linear-gradient(0deg, rgba(67, 18, 98, 0.6), rgba(67, 18, 98, 0.6)), #FFFFFF"
        }}>
        <div>
          <Header />
        </div>
        {children}
        <div></div>
      </div>
    </>
  )
}

export default Layout
