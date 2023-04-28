import React from "react"

const OptionsButton = () => {
  return (
    <div className="h-full w-fit">
      <div className="h-[8px] w-[24px] flex items-start gap-[1px] hover:shadow-sm hover:shadow-black rounded-full">
        <div
          className="h-[7px] w-[7px] rounded-full -rotate-90"
          style={{
            background: "linear-gradient(180deg, #6D3F8E 0%, #4CBBAA 100%)"
          }}
        />
        <div
          className="h-[7px] w-[7px] rounded-full -rotate-90"
          style={{
            background: "linear-gradient(180deg, #6D3F8E 0%, #4CBBAA 100%)"
          }}
        />
        <div
          className="h-[7px] w-[7px] rounded-full -rotate-90"
          style={{
            background: "linear-gradient(180deg, #6D3F8E 0%, #4CBBAA 100%)"
          }}
        />
      </div>
    </div>
  )
}

export default OptionsButton
