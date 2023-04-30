const Beneficiary = ({ account, percentage }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-[340px] h-[65px] bg-gradient-to-b from-[#4DB8A9] to-[#6C408E] rounded-full font-bold text-white text-xl">
        <div className="flex flex-row items-center justify-around w-[336px] h-[61px] bg-[#487AA4] rounded-full">
          <div className="pl-3 pt-1 w-[202px] h-[37px] rounded-full overflow-hidden bg-[#576697]">
            <a
              href={`https://goerli.explorer.zksync.io/address/${account}`}
              target="blank">
              {account}
            </a>
          </div>
          <div className="text-center justify-center pt-1 w-[101px] h-[37px] rounded-full bg-[#576697]">{percentage}</div>
        </div>
      </div>
      <div className="flex justify-start">
        <button className="text-white shadow-md mx-2 w-[56px] h-[20px] mt-1 rounded-full bg-[#574E93]">EDIT</button>
        <button className="text-white shadow-md w-[56px] h-[20px] mt-1 rounded-full bg-[#574E93]">REMOVE</button>
      </div>
    </div>
  )
}

export default Beneficiary
