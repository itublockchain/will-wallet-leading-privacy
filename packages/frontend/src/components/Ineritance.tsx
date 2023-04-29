const Inheritance = () => {
    const remainingTime = 100
  return (
    <>
      <div className="overflow-hidden h-72 py-2">
        <div className="w-[340px] h-[300px] m-auto">
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <div className="text-lg font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[27px] pl-3">
              Countdown: {remainingTime}
            </div>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <input placeholder="Beneficier" className="text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[27px] pl-3 border-none focus:outline-none"/>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <input placeholder="Share" className="text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[27px] pl-3 border-none focus:outline-none"/>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[100px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="text-[12px] text-white rounded-full bg-[#3C93AD] w-[96px] h-[27px]">
              Set Beneficiary
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1]">
            <input placeholder="Time" className="text-lg text-white rounded-full focus:bg-[#1a6075] bg-[#236c83] w-[336px] h-[27px] pl-3 border-none focus:outline-none"/>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[134px] h-[31px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="text-[12px] text-white rounded-full bg-[#3C93AD] w-[130px] h-[27px]">
              Set Countdown Time
            </button>
          </div>
          <div className="mb-1 flex justify-center items-center rounded-full w-[340px] h-[50px] bg-gradient-to-b from-[#18CCC2] to-[#4C75A1] m-auto">
            <button className="text-xl font-bold text-white rounded-full bg-[#3C93AD] w-[336px] h-[46px]">
              Set Countdown Time
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inheritance
