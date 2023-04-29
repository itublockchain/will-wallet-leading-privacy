import { type NavigateFunction, useNavigate } from "react-router-dom"

const Inheritance = () => {
  const remainingTime = 100

  const navigation: NavigateFunction = useNavigate()

  return (
    <>
      <div className="overflow-hidden h-72 py-2">
        <div className="w-[340px] h-[300px] m-auto">
          <div className="mb-5 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <div className="text-lg font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[27px] pl-3">
              Countdown: {remainingTime}
            </div>
          </div>
          <div className="mb-5 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="font-bold text-[12px] text-white rounded-full bg-[#3C93AD] w-[336px] h-[27px]" onClick={() => navigation("/beneficiaries")}>
              Beneficiaries
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <input
              placeholder="Time"
              className="font-bold text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[27px] pl-3 border-none focus:outline-none"
            />
          </div>
          <div className="mb-5 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="font-bold text-[12px] text-white rounded-full bg-[#3C93AD] w-[336px] h-[27px]">
              Set Countdown Time
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[50px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="text-xl font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[46px]">
              I'M ALIVE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inheritance
