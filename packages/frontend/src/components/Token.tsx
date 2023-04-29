import { shorthandAddress } from "~utils"

const Token = ({ coin }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#16c9ae] to-[#4e75a2] w-full h-[44px] rounded-full px-[2px]">
      <div className="w-full h-[40px] rounded-full flex justify-left items-center px-1.5 relative bg-[#4599A9]">
        <img
          src={coin.image}
          className="w-[34px] h-[34px] mr-2 shadow-sm shadow-gray-500  bg-gray-300 rounded-full"
        />
        {coin.name !== "ETH" && (
          <a
            className="text-white ml-2 text-[14px] hover:text-blue-200 z-10"
            href={`https://explorer.zksync.io/address/${coin.tokenAddress}#contract`}
            target="blank">
            {shorthandAddress(coin.tokenAddress, 6)}
          </a>
        )}

        <div className="absolute w-full h-full flex flex-col items-end justify-end px-4 text-gray-200  ">
          <p className="w-32">
            {coin.balance} {coin.name}
          </p>
          <p className="w-32">{Math.floor(Math.random() * 1000)}$</p>
        </div>
      </div>
    </div>
  )
}

export default Token
