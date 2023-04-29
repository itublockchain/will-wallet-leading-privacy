import React from "react"

const OPTIONS = ["Assets", "Inheritance", "Activities"]

type HomeOptionsProps = {
  option: number
  setOption: (value: number | ((prevVar: number) => number)) => void
}

const HomeOptions = (props: HomeOptionsProps) => {
  const { option, setOption } = props
  return (
    <ul className="flex gap-4 items-center justify-center mt-3 mb-1 text-white font-bold text-[16px]">
      {OPTIONS.map((option, index) => {
        return (
          <li key={index}>
            <button
              className="w-fit h-8 px-[2px] bg-gradient-to-b from-[#16c9ae] to-[#4e75a2] rounded-full flex justify-center items-center hover:bg-blue-300"
              onClick={() => setOption(index)}>
              <div className="px-4 h-[28px] w-full bg-[#5986AD] rounded-full flex items-center justify-center">
                {option}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default HomeOptions
