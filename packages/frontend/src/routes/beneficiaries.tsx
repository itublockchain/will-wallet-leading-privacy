import { type NavigateFunction, useNavigate } from "react-router-dom"

import { BeneficiaryContainer } from "~components"

const Beneficiaries = () => {
  const navigation: NavigateFunction = useNavigate()
  return (
    <>
      <div className="w-[375px] h-[600px]">
        <div onClick={() => navigation("/home")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <BeneficiaryContainer />
        <div className="w-[340px] h-[5px] m-auto mt-[15px] bg-black bg-gradient-to-r from-[#5F5696] to-[#67CDC6]"></div>
        <div className="flex justify-center items-center w-[340px] h-[65px] m-auto mt-[15px] bg-gradient-to-b from-[#4CB8A9] to-[#6C418E] rounded-full">
          <div className="w-[336px] h-[61px] bg-[#4781A6] rounded-full flex justify-center items-center text-[#6C408E]" onClick={() => navigation("/add-beneficiary")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Beneficiaries
